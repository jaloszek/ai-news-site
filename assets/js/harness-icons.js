/* Render-layer enhancement for day pages (roadmap "harness icons" item).
   Zero pipeline involvement: bullet_md stays verbatim; this script only
   restructures the rendered DOM. Per section it wraps content in a styled
   card, then rebuilds each bullet as:

     ┌ item-head:  title …………………………… source (right) ┐ ┌ item-media ┐
     └ item-body:  prose on its own line            ┘ │ logo/thumb │
                                                      └────────────┘

   The media rail holds the harness logo (Coding Agents), the video
   thumbnail (YouTube) or the source-domain favicon (other sections).
   No-JS pages still render fine (plain headings + lists). */
(function () {
  "use strict";

  var script = document.currentScript;
  var root = (script && script.dataset.root) || "/";
  var ICON_DIR = root.replace(/\/?$/, "/") + "assets/icons/";

  /* section heading text → slug (slug doubles as the CSS accent hook) */
  var SECTIONS = {
    "coding agents": "claude-code",
    "claude code": "claude-code",
    "ai world": "ai-world",
    "youtube": "youtube",
    "community": "community",
    "newsletters": "newsletters",
    "gossip": "gossip"
  };

  /* first match wins — keep multi-word names before their substrings.
     claude-code / opencode / goose are product marks (Claude spark,
     OpenCode pixel logo, goose silhouette); the rest are org avatars
     that double as the product brand. */
  var HARNESSES = [
    [/claude code|anthropics\/claude/i, "claude-code.png", "Claude Code"],
    [/opencode/i, "opencode.png", "OpenCode"],
    [/\bcodex\b/i, "codex.png", "Codex"],
    [/hermes/i, "hermes.png", "Hermes Agent"],
    [/\bcline\b/i, "cline.png", "Cline"],
    [/goose/i, "goose.png", "Goose"],
    [/openhands|open hands/i, "openhands.png", "OpenHands"],
    [/kilo/i, "kilo.png", "Kilo Code"],
    [/aider/i, "aider.png", "Aider"],
    [/continue\.dev/i, "continue.png", "Continue.dev"],
    [/copilot|github ai|github blog/i, "github.png", "GitHub"]
  ];

  function slugFor(h3) {
    var key = h3.textContent.trim().toLowerCase();
    return SECTIONS[key] || null;
  }

  /* Wrap each known h3 + its following siblings (up to the next h3 /
     daily-nav / hr) in a <section class="news-section" data-section=…>. */
  function sectionize(main) {
    var headings = Array.prototype.slice.call(main.querySelectorAll("h3"));
    headings.forEach(function (h3) {
      var slug = slugFor(h3);
      if (!slug || h3.closest(".news-section")) return;

      var section = document.createElement("section");
      section.className = "news-section";
      section.setAttribute("data-section", slug);
      h3.parentNode.insertBefore(section, h3);
      section.appendChild(h3);

      var node = section.nextSibling;
      while (node) {
        if (node.nodeType === 1) {
          var el = node;
          if (el.tagName === "H3" || el.tagName === "H2" ||
              el.classList.contains("daily-nav") || el.tagName === "HR") break;
        }
        var next = node.nextSibling;
        section.appendChild(node);
        node = next;
      }

      var items = section.querySelectorAll("ul > li").length;
      if (items === 0) {
        section.classList.add("news-section-empty");
        return;
      }
      var count = document.createElement("span");
      count.className = "sec-count";
      count.textContent = items;
      h3.appendChild(count);
    });
  }

  function harnessIconFor(text) {
    for (var i = 0; i < HARNESSES.length; i++) {
      if (HARNESSES[i][0].test(text)) {
        var img = document.createElement("img");
        img.className = "harness-logo";
        img.src = ICON_DIR + HARNESSES[i][1];
        img.alt = HARNESSES[i][2];
        img.title = HARNESSES[i][2];
        img.loading = "lazy";
        return img;
      }
    }
    return null;
  }

  function faviconFor(href) {
    var host;
    try { host = new URL(href).hostname; } catch (e) { return null; }
    var img = document.createElement("img");
    img.className = "src-fav";
    img.src = "https://www.google.com/s2/favicons?domain=" + host + "&sz=64";
    img.alt = "";
    img.loading = "lazy";
    img.onerror = function () {
      var media = img.closest(".item-media");
      if (media) media.remove();
    };
    return img;
  }

  /* Rebuild one bullet: title row (title left, source right), body on its
     own line, media rail on the right. Returns false to leave li as-is. */
  function restructure(li, slug) {
    /* kramdown renders "loose" list items (blank line inside the bullet —
       YouTube with its thumbnail, Community with its spacing) with the
       content wrapped in a <p>; unwrap it so parsing sees one shape. */
    var firstP = li.querySelector(":scope > p");
    if (firstP && !firstP.querySelector("img")) {
      while (firstP.firstChild) li.insertBefore(firstP.firstChild, firstP);
      li.removeChild(firstP);
    }

    var titleLink = li.querySelector(":scope > strong > a") || li.querySelector(":scope > a");
    if (!titleLink) return false;
    var fullText = li.textContent;

    var titleWrap = titleLink.parentElement === li ? titleLink : titleLink.parentElement;
    var kids = Array.prototype.slice.call(li.childNodes);
    if (kids.indexOf(titleWrap) === -1) return false;

    /* source: first <em> after the title; YouTube: <strong> creator (+duration) */
    var srcEl = null, srcLabel = "";
    var seenTitle = false;
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n === titleWrap) { seenTitle = true; continue; }
      if (!seenTitle || n.nodeType !== 1) continue;
      if (n.tagName === "EM") { srcEl = n; break; }
      if (n.tagName === "STRONG" && slug === "youtube") { srcEl = n; break; }
    }
    if (srcEl) {
      srcLabel = srcEl.textContent.replace(/[.\s]+$/, "");
      if (slug === "youtube") {
        var nxt = srcEl.nextSibling;
        if (nxt && nxt.nodeType === 3) {
          var m = nxt.nodeValue.match(/^\s*\(([^)]+)\)/);
          if (m) {
            srcLabel += " · " + m[1];
            nxt.nodeValue = nxt.nodeValue.replace(/^\s*\([^)]*\)\.?/, "");
          }
        }
      }
    }

    var thumb = li.querySelector(":scope > p");
    if (thumb && !thumb.querySelector("img")) thumb = null;

    /* body = whatever follows the source element (minus the thumbnail) */
    var bodyNodes = [];
    var collecting = false;
    var marker = srcEl || titleWrap;
    kids = Array.prototype.slice.call(li.childNodes); // re-read (duration edit)
    for (var j = 0; j < kids.length; j++) {
      var k = kids[j];
      if (k === marker) { collecting = true; continue; }
      if (!collecting || k === thumb || k === titleWrap) continue;
      bodyNodes.push(k);
    }

    var head = document.createElement("div");
    head.className = "item-head";
    titleLink.classList.add("item-title");
    head.appendChild(titleLink);
    if (srcLabel) {
      var src = document.createElement("span");
      src.className = "item-src";
      src.textContent = srcLabel;
      head.appendChild(src);
    }

    var body = document.createElement("p");
    body.className = "item-body";
    bodyNodes.forEach(function (n) { body.appendChild(n); });
    if (body.firstChild && body.firstChild.nodeType === 3) {
      body.firstChild.nodeValue = body.firstChild.nodeValue.replace(/^[\s.·—–-]+/, "");
    }
    var hasBody = body.textContent.trim().length > 0;

    var media = document.createElement("div");
    media.className = "item-media";
    if (slug === "claude-code") {
      var logo = harnessIconFor(fullText);
      if (logo) media.appendChild(logo);
    } else if (slug === "youtube" && thumb) {
      thumb.className = "yt-thumb";
      thumb.removeAttribute("align");
      media.appendChild(thumb);
    } else {
      var fav = faviconFor(titleLink.href);
      if (fav) media.appendChild(fav);
    }

    while (li.firstChild) li.removeChild(li.firstChild);
    li.className = "news-item";
    if (media.firstChild && slug === "youtube") li.classList.add("news-item-video");
    li.appendChild(head);
    if (hasBody) li.appendChild(body);
    if (media.firstChild) li.appendChild(media);
    return true;
  }

  function restructureAll() {
    Array.prototype.forEach.call(
      document.querySelectorAll(".news-section"),
      function (section) {
        var slug = section.getAttribute("data-section");
        if (slug === "gossip") return; // terse one-liners stay as-is
        Array.prototype.forEach.call(section.querySelectorAll("ul > li"), function (li) {
          restructure(li, slug);
        });
      }
    );
  }

  var main = document.querySelector("main.page");
  if (!main || !main.querySelector(".daily-nav")) return; // day pages only
  sectionize(main);
  restructureAll();
})();

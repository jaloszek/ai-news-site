/* Render-layer enhancement for day pages (roadmap "harness icons" item).
   Zero pipeline involvement: bullet_md stays verbatim; this script only
   restructures the rendered DOM — wraps each section in a styled card,
   swaps the generic 🛠 emoji for a per-harness logo in Coding Agents, and
   lays YouTube thumbnails out beside their text. No-JS pages still render
   fine (plain headings + lists). */
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

  /* first match wins — keep multi-word names before their substrings */
  var HARNESSES = [
    [/claude code|anthropics\/claude/i, "claude-code.png", "Claude Code"],
    [/opencode/i, "opencode.png", "OpenCode"],
    [/\bcodex\b/i, "codex.png", "Codex"],
    [/hermes/i, "hermes.png", "Hermes Agent"],
    [/\bcline\b/i, "cline.png", "Cline"],
    [/goose/i, "goose.jpg", "Goose"],
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

  function stripLeadingEmoji(li) {
    var n = li.firstChild;
    if (n && n.nodeType === 3) {
      n.nodeValue = n.nodeValue.replace(/^\s*(?:🛠|🔧|⚙️|🛠️)\s*/, "");
    }
  }

  function harnessIcons() {
    var section = document.querySelector('.news-section[data-section="claude-code"]');
    if (!section) return;
    Array.prototype.forEach.call(section.querySelectorAll("li"), function (li) {
      var text = li.textContent;
      for (var i = 0; i < HARNESSES.length; i++) {
        if (HARNESSES[i][0].test(text)) {
          var img = document.createElement("img");
          img.className = "harness-ico";
          img.src = ICON_DIR + HARNESSES[i][1];
          img.alt = HARNESSES[i][2];
          img.title = HARNESSES[i][2];
          img.loading = "lazy";
          stripLeadingEmoji(li);
          li.insertBefore(img, li.firstChild);
          break;
        }
      }
    });
  }

  function youtubeLayout() {
    var section = document.querySelector('.news-section[data-section="youtube"]');
    if (!section) return;
    Array.prototype.forEach.call(section.querySelectorAll("li"), function (li) {
      var thumb = li.querySelector("p");
      if (!thumb || !thumb.querySelector("img")) return;
      var textWrap = document.createElement("div");
      textWrap.className = "yt-text";
      Array.prototype.slice.call(li.childNodes).forEach(function (n) {
        if (n !== thumb) textWrap.appendChild(n);
      });
      thumb.className = "yt-thumb";
      thumb.removeAttribute("align");
      li.appendChild(textWrap);
      li.appendChild(thumb);
      li.classList.add("yt-item");
    });
  }

  var main = document.querySelector("main.page");
  if (!main || !main.querySelector(".daily-nav")) return; // day pages only
  sectionize(main);
  harnessIcons();
  youtubeLayout();
})();

<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-20 05:14 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2555
- **Enriched:** 660 (25%)
- **Taste-rated:** 660 (25%)
- **Researched:** 444 (17%)
- **Status (candidate / rejected / published / duplicate):** 811 / 1744 / 0 / 0
- **Published bullets (all-time):** 4235 (last 7d: 183)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-20 | 193 | 36 (18%) | 36 (18%) | 24 (12%) |
| 2026-11-19 | 180 | 39 (21%) | 39 (21%) | 28 (15%) |
| 2026-11-18 | 191 | 36 (18%) | 36 (18%) | 26 (13%) |
| 2026-11-17 | 247 | 61 (24%) | 61 (24%) | 48 (19%) |
| 2026-11-16 | 107 | 35 (32%) | 35 (32%) | 25 (23%) |
| 2026-11-15 | 111 | 36 (32%) | 36 (32%) | 20 (18%) |
| 2026-11-14 | 208 | 69 (33%) | 69 (33%) | 43 (20%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-20 | 3 | 4 | 3 | 4 | 5 | 3 | 22 |
| 2026-11-19 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-17 | 2 | 5 | 3 | 5 | 1 | 3 | 19 |
| 2026-11-16 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-11-15 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-14 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-13 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1393 |
| The Rundown AI | `email` | 411 |
| TechCrunch AI | `rss` | 302 |
| The Decoder | `rss` | 216 |
| The Verge AI | `rss` | 197 |
| Hacker News (points) | `rss` | 186 |
| AlphaSignal | `email` | 154 |
| OpenAI blog | `rss` | 106 |
| OpenClaw releases | `rss` | 101 |
| Hermes Agent releases | `rss` | 89 |
| Codex releases | `rss` | 83 |
| HF Daily Papers | `rss` | 83 |
| r/LocalLLaMA | `reddit` | 74 |
| @emollick.bsky.social | `bsky` | 69 |
| Qwen Code releases | `rss` | 68 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69376 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

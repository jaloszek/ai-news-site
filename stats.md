<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-07 03:27 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7692
- **Enriched:** 591 (7%)
- **Taste-rated:** 591 (7%)
- **Researched:** 413 (5%)
- **Status (candidate / rejected / published / duplicate):** 900 / 6792 / 0 / 0
- **Published bullets (all-time):** 3270 (last 7d: 183)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-07 | 259 | 16 (6%) | 16 (6%) | 11 (4%) |
| 2026-10-06 | 324 | 27 (8%) | 27 (8%) | 18 (5%) |
| 2026-10-05 | 86 | 18 (20%) | 18 (20%) | 8 (9%) |
| 2026-10-04 | 63 | 28 (44%) | 28 (44%) | 20 (31%) |
| 2026-10-03 | 1052 | 155 (14%) | 155 (14%) | 98 (9%) |
| 2026-10-02 | 881 | 34 (3%) | 34 (3%) | 25 (2%) |
| 2026-10-01 | 1023 | 35 (3%) | 35 (3%) | 26 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-07 | 3 | 5 | 3 | 1 | 2 | 3 | 17 |
| 2026-10-06 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-05 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-03 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-02 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-10-01 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5474 |
| arXiv cs.CL | `rss` | 3288 |
| TLDR | `email` | 2725 |
| The Rundown AI | `email` | 492 |
| TechCrunch AI | `rss` | 300 |
| The Decoder | `rss` | 220 |
| Codex releases | `rss` | 162 |
| The Verge AI | `rss` | 153 |
| AINews | `email` | 134 |
| AlphaSignal | `email` | 126 |
| r/LocalLLaMA | `reddit` | 92 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Qwen Code releases | `rss` | 74 |
| Ars Technica AI | `rss` | 73 |
| OpenAI blog | `rss` | 69 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 62048 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

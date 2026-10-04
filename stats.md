<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-04 03:40 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 8685
- **Enriched:** 635 (7%)
- **Taste-rated:** 635 (7%)
- **Researched:** 450 (5%)
- **Status (candidate / rejected / published / duplicate):** 2988 / 5697 / 0 / 0
- **Published bullets (all-time):** 3205 (last 7d: 190)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-04 | 32 | 8 (25%) | 8 (25%) | 2 (6%) |
| 2026-10-03 | 1052 | 141 (13%) | 141 (13%) | 82 (7%) |
| 2026-10-02 | 881 | 34 (3%) | 34 (3%) | 25 (2%) |
| 2026-10-01 | 1023 | 35 (3%) | 35 (3%) | 26 (2%) |
| 2026-09-30 | 1800 | 44 (2%) | 44 (2%) | 38 (2%) |
| 2026-09-29 | 682 | 39 (5%) | 39 (5%) | 29 (4%) |
| 2026-09-28 | 100 | 26 (26%) | 26 (26%) | 21 (21%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-03 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-02 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-10-01 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5640 |
| arXiv cs.CL | `rss` | 3435 |
| TLDR | `email` | 2604 |
| The Rundown AI | `email` | 478 |
| TechCrunch AI | `rss` | 288 |
| The Decoder | `rss` | 214 |
| Codex releases | `rss` | 155 |
| The Verge AI | `rss` | 147 |
| AINews | `email` | 133 |
| AlphaSignal | `email` | 120 |
| r/LocalLLaMA | `reddit` | 90 |
| Ars Technica AI | `rss` | 76 |
| Qwen Code releases | `rss` | 74 |
| AI Hero (Matt Pocock) | `rss` | 73 |
| OpenClaw releases | `rss` | 70 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 59260 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

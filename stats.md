<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-06 04:07 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 8471
- **Enriched:** 653 (7%)
- **Taste-rated:** 653 (7%)
- **Researched:** 459 (5%)
- **Status (candidate / rejected / published / duplicate):** 1525 / 6946 / 0 / 0
- **Published bullets (all-time):** 3253 (last 7d: 190)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-06 | 324 | 26 (8%) | 26 (8%) | 15 (4%) |
| 2026-10-05 | 86 | 18 (20%) | 18 (20%) | 8 (9%) |
| 2026-10-04 | 63 | 28 (44%) | 28 (44%) | 18 (28%) |
| 2026-10-03 | 1052 | 155 (14%) | 155 (14%) | 95 (9%) |
| 2026-10-02 | 881 | 34 (3%) | 34 (3%) | 25 (2%) |
| 2026-10-01 | 1023 | 35 (3%) | 35 (3%) | 26 (2%) |
| 2026-09-30 | 1800 | 44 (2%) | 44 (2%) | 38 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-06 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-05 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-03 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-02 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-10-01 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5474 |
| arXiv cs.CL | `rss` | 3288 |
| TLDR | `email` | 2624 |
| The Rundown AI | `email` | 474 |
| TechCrunch AI | `rss` | 291 |
| The Decoder | `rss` | 216 |
| Codex releases | `rss` | 159 |
| The Verge AI | `rss` | 150 |
| AINews | `email` | 131 |
| AlphaSignal | `email` | 124 |
| r/LocalLLaMA | `reddit` | 92 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Qwen Code releases | `rss` | 76 |
| Ars Technica AI | `rss` | 73 |
| r/LocalLLM | `reddit` | 71 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 61164 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

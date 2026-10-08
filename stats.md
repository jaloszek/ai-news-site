<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-08 03:47 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7305
- **Enriched:** 565 (7%)
- **Taste-rated:** 565 (7%)
- **Researched:** 403 (5%)
- **Status (candidate / rejected / published / duplicate):** 1024 / 6281 / 0 / 0
- **Published bullets (all-time):** 3286 (last 7d: 175)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-08 | 318 | 18 (5%) | 18 (5%) | 15 (4%) |
| 2026-10-07 | 259 | 18 (6%) | 18 (6%) | 14 (5%) |
| 2026-10-06 | 324 | 28 (8%) | 28 (8%) | 21 (6%) |
| 2026-10-05 | 86 | 18 (20%) | 18 (20%) | 10 (11%) |
| 2026-10-04 | 63 | 28 (44%) | 28 (44%) | 20 (31%) |
| 2026-10-03 | 1052 | 155 (14%) | 155 (14%) | 98 (9%) |
| 2026-10-02 | 881 | 34 (3%) | 34 (3%) | 25 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-08 | 3 | 5 | 3 | 1 | 1 | 3 | 16 |
| 2026-10-07 | 3 | 5 | 3 | 1 | 2 | 3 | 17 |
| 2026-10-06 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-05 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-03 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-02 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-10-01 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5273 |
| arXiv cs.CL | `rss` | 3173 |
| TLDR | `email` | 2717 |
| The Rundown AI | `email` | 473 |
| TechCrunch AI | `rss` | 312 |
| The Decoder | `rss` | 220 |
| Codex releases | `rss` | 164 |
| The Verge AI | `rss` | 162 |
| AINews | `email` | 138 |
| AlphaSignal | `email` | 128 |
| r/LocalLLaMA | `reddit` | 93 |
| AI Hero (Matt Pocock) | `rss` | 78 |
| Ars Technica AI | `rss` | 72 |
| Qwen Code releases | `rss` | 72 |
| OpenAI blog | `rss` | 71 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 62242 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

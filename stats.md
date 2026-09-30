<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-30 03:24 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7786
- **Enriched:** 507 (6%)
- **Taste-rated:** 506 (6%)
- **Researched:** 378 (4%)
- **Status (candidate / rejected / published / duplicate):** 3299 / 4487 / 0 / 0
- **Published bullets (all-time):** 3111 (last 7d: 190)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-30 | 1800 | 44 (2%) | 43 (2%) | 34 (1%) |
| 2026-09-29 | 682 | 39 (5%) | 39 (5%) | 29 (4%) |
| 2026-09-28 | 100 | 26 (26%) | 26 (26%) | 21 (21%) |
| 2026-09-27 | 84 | 29 (34%) | 29 (34%) | 23 (27%) |
| 2026-09-26 | 633 | 93 (14%) | 93 (14%) | 63 (9%) |
| 2026-09-24 | 705 | 47 (6%) | 47 (6%) | 33 (4%) |
| 2026-09-23 | 504 | 43 (8%) | 43 (8%) | 33 (6%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-23 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5034 |
| arXiv cs.CL | `rss` | 3711 |
| TLDR | `email` | 2694 |
| The Rundown AI | `email` | 520 |
| TechCrunch AI | `rss` | 290 |
| The Decoder | `rss` | 217 |
| Codex releases | `rss` | 154 |
| The Verge AI | `rss` | 151 |
| AlphaSignal | `email` | 123 |
| AINews | `email` | 115 |
| r/LocalLLaMA | `reddit` | 92 |
| OpenClaw releases | `rss` | 78 |
| Qwen Code releases | `rss` | 74 |
| AI Hero (Matt Pocock) | `rss` | 72 |
| Ars Technica AI | `rss` | 71 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 55961 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

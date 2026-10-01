<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-01 03:21 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 8174
- **Enriched:** 520 (6%)
- **Taste-rated:** 520 (6%)
- **Researched:** 385 (4%)
- **Status (candidate / rejected / published / duplicate):** 3689 / 4485 / 0 / 0
- **Published bullets (all-time):** 3135 (last 7d: 191)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-01 | 1023 | 35 (3%) | 35 (3%) | 23 (2%) |
| 2026-09-30 | 1800 | 44 (2%) | 44 (2%) | 36 (2%) |
| 2026-09-29 | 682 | 39 (5%) | 39 (5%) | 29 (4%) |
| 2026-09-28 | 100 | 26 (26%) | 26 (26%) | 21 (21%) |
| 2026-09-27 | 84 | 29 (34%) | 29 (34%) | 23 (27%) |
| 2026-09-26 | 633 | 93 (14%) | 93 (14%) | 63 (9%) |
| 2026-09-24 | 705 | 47 (6%) | 47 (6%) | 33 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-01 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-26 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-09-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-09-24 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5506 |
| arXiv cs.CL | `rss` | 3972 |
| TLDR | `email` | 2821 |
| The Rundown AI | `email` | 524 |
| TechCrunch AI | `rss` | 302 |
| The Decoder | `rss` | 221 |
| The Verge AI | `rss` | 158 |
| Codex releases | `rss` | 156 |
| AlphaSignal | `email` | 126 |
| AINews | `email` | 123 |
| r/LocalLLaMA | `reddit` | 92 |
| Ars Technica AI | `rss` | 77 |
| Qwen Code releases | `rss` | 75 |
| AI Hero (Matt Pocock) | `rss` | 73 |
| OpenClaw releases | `rss` | 73 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 56594 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

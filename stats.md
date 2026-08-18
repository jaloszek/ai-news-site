<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-18 01:14 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6389
- **Enriched:** 437 (6%)
- **Taste-rated:** 437 (6%)
- **Researched:** 317 (4%)
- **Status (candidate / rejected / published / duplicate):** 1899 / 4490 / 0 / 0
- **Published bullets (all-time):** 2208 (last 7d: 176)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-18 | 565 | 38 (6%) | 38 (6%) | 27 (4%) |
| 2026-08-17 | 95 | 37 (38%) | 37 (38%) | 23 (24%) |
| 2026-08-16 | 354 | 38 (10%) | 38 (10%) | 21 (5%) |
| 2026-08-15 | 284 | 34 (11%) | 34 (11%) | 28 (9%) |
| 2026-08-14 | 601 | 46 (7%) | 46 (7%) | 39 (6%) |
| 2026-08-13 | 425 | 24 (5%) | 24 (5%) | 17 (4%) |
| 2026-08-12 | 1034 | 35 (3%) | 35 (3%) | 27 (2%) |
| 2026-08-11 | 618 | 43 (6%) | 43 (6%) | 33 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-18 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-17 | 1 | 5 | 3 | 5 | 5 | 2 | 21 |
| 2026-08-16 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-14 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-13 | 3 | 4 | 3 | 5 | 4 | 2 | 21 |
| 2026-08-12 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-11 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3699 |
| arXiv cs.CL | `rss` | 2308 |
| TLDR | `email` | 2255 |
| The Rundown AI | `email` | 532 |
| TechCrunch AI | `rss` | 216 |
| The Decoder | `rss` | 183 |
| AlphaSignal | `email` | 138 |
| Cline releases | `rss` | 102 |
| Qwen Code releases | `rss` | 99 |
| r/LocalLLaMA | `reddit` | 88 |
| Codex releases | `rss` | 76 |
| Hacker News (ai/llm/claude) | `rss` | 75 |
| The Verge AI | `rss` | 70 |
| r/Artificial | `reddit` | 61 |
| r/LangChain | `reddit` | 56 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 35126 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

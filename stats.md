<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-25 01:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 7164
- **Enriched:** 590 (8%)
- **Taste-rated:** 590 (8%)
- **Researched:** 387 (5%)
- **Status (candidate / rejected / published / duplicate):** 1765 / 5399 / 0 / 0
- **Published bullets (all-time):** 2368 (last 7d: 181)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-25 | 250 | 25 (10%) | 25 (10%) | 14 (5%) |
| 2026-08-24 | 422 | 46 (10%) | 46 (10%) | 24 (5%) |
| 2026-08-23 | 154 | 50 (32%) | 50 (32%) | 29 (18%) |
| 2026-08-22 | 377 | 55 (14%) | 55 (14%) | 36 (9%) |
| 2026-08-21 | 562 | 46 (8%) | 46 (8%) | 25 (4%) |
| 2026-08-20 | 586 | 42 (7%) | 42 (7%) | 23 (3%) |
| 2026-08-19 | 837 | 31 (3%) | 31 (3%) | 21 (2%) |
| 2026-08-18 | 565 | 38 (6%) | 38 (6%) | 27 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-25 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-08-24 | 3 | 5 | 3 | 6 | 6 | 2 | 25 |
| 2026-08-23 | 2 | 5 | 3 | 5 | 5 | 4 | 24 |
| 2026-08-22 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-21 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-08-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-19 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-18 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3807 |
| TLDR | `email` | 2322 |
| arXiv cs.CL | `rss` | 2209 |
| The Rundown AI | `email` | 514 |
| TechCrunch AI | `rss` | 209 |
| The Decoder | `rss` | 198 |
| AlphaSignal | `email` | 136 |
| Cline releases | `rss` | 113 |
| Qwen Code releases | `rss` | 107 |
| r/LocalLLaMA | `reddit` | 91 |
| The Verge AI | `rss` | 87 |
| Codex releases | `rss` | 83 |
| Hacker News (ai/llm/claude) | `rss` | 61 |
| r/LangChain | `reddit` | 58 |
| r/Artificial | `reddit` | 57 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 38448 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

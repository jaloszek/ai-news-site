<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-15 01:09 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6037
- **Enriched:** 474 (7%)
- **Taste-rated:** 474 (7%)
- **Researched:** 342 (5%)
- **Status (candidate / rejected / published / duplicate):** 2962 / 3075 / 0 / 0
- **Published bullets (all-time):** 2143 (last 7d: 148)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-15 | 284 | 33 (11%) | 33 (11%) | 25 (8%) |
| 2026-08-14 | 601 | 46 (7%) | 46 (7%) | 38 (6%) |
| 2026-08-13 | 425 | 24 (5%) | 24 (5%) | 17 (4%) |
| 2026-08-12 | 1034 | 35 (3%) | 35 (3%) | 27 (2%) |
| 2026-08-11 | 618 | 43 (6%) | 43 (6%) | 33 (5%) |
| 2026-08-10 | 91 | 22 (24%) | 22 (24%) | 12 (13%) |
| 2026-08-09 | 309 | 40 (12%) | 40 (12%) | 36 (11%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-14 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-13 | 3 | 4 | 3 | 5 | 4 | 2 | 21 |
| 2026-08-12 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-11 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-10 | 3 | 3 | 3 | 4 | 4 | 0 | 17 |
| 2026-08-09 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3429 |
| arXiv cs.CL | `rss` | 2491 |
| TLDR | `email` | 2431 |
| The Rundown AI | `email` | 600 |
| TechCrunch AI | `rss` | 237 |
| The Decoder | `rss` | 185 |
| AlphaSignal | `email` | 150 |
| Cline releases | `rss` | 125 |
| r/LocalLLaMA | `reddit` | 89 |
| Codex releases | `rss` | 86 |
| Qwen Code releases | `rss` | 84 |
| Hacker News (ai/llm/claude) | `rss` | 73 |
| The Verge AI | `rss` | 65 |
| r/LocalLLM | `reddit` | 65 |
| r/Artificial | `reddit` | 63 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 33049 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

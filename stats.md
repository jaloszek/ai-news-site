<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-20 01:13 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6259
- **Enriched:** 456 (7%)
- **Taste-rated:** 455 (7%)
- **Researched:** 318 (5%)
- **Status (candidate / rejected / published / duplicate):** 2437 / 3822 / 0 / 0
- **Published bullets (all-time):** 2253 (last 7d: 176)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-20 | 586 | 42 (7%) | 41 (6%) | 20 (3%) |
| 2026-08-19 | 837 | 31 (3%) | 31 (3%) | 20 (2%) |
| 2026-08-18 | 565 | 38 (6%) | 38 (6%) | 27 (4%) |
| 2026-08-17 | 95 | 37 (38%) | 37 (38%) | 23 (24%) |
| 2026-08-16 | 354 | 38 (10%) | 38 (10%) | 21 (5%) |
| 2026-08-15 | 284 | 34 (11%) | 34 (11%) | 28 (9%) |
| 2026-08-14 | 601 | 46 (7%) | 46 (7%) | 39 (6%) |
| 2026-08-13 | 425 | 24 (5%) | 24 (5%) | 17 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-19 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-18 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-17 | 1 | 5 | 3 | 5 | 5 | 2 | 21 |
| 2026-08-16 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-14 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-13 | 3 | 4 | 3 | 5 | 4 | 2 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4463 |
| TLDR | `email` | 2474 |
| arXiv cs.CL | `rss` | 2416 |
| The Rundown AI | `email` | 584 |
| TechCrunch AI | `rss` | 229 |
| The Decoder | `rss` | 192 |
| AlphaSignal | `email` | 149 |
| Qwen Code releases | `rss` | 106 |
| Cline releases | `rss` | 98 |
| r/LocalLLaMA | `reddit` | 86 |
| The Verge AI | `rss` | 81 |
| Codex releases | `rss` | 80 |
| Hacker News (ai/llm/claude) | `rss` | 72 |
| r/LangChain | `reddit` | 59 |
| r/Artificial | `reddit` | 58 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 36011 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

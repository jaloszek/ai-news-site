<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-22 01:06 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6738
- **Enriched:** 511 (7%)
- **Taste-rated:** 511 (7%)
- **Researched:** 355 (5%)
- **Status (candidate / rejected / published / duplicate):** 2927 / 3811 / 0 / 0
- **Published bullets (all-time):** 2299 (last 7d: 179)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-22 | 377 | 36 (9%) | 36 (9%) | 24 (6%) |
| 2026-08-21 | 562 | 45 (8%) | 45 (8%) | 24 (4%) |
| 2026-08-20 | 586 | 42 (7%) | 42 (7%) | 23 (3%) |
| 2026-08-19 | 837 | 31 (3%) | 31 (3%) | 21 (2%) |
| 2026-08-18 | 565 | 38 (6%) | 38 (6%) | 27 (4%) |
| 2026-08-17 | 95 | 37 (38%) | 37 (38%) | 23 (24%) |
| 2026-08-16 | 354 | 38 (10%) | 38 (10%) | 21 (5%) |
| 2026-08-15 | 284 | 34 (11%) | 34 (11%) | 28 (9%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-22 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-21 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-08-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-19 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-18 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-08-17 | 1 | 5 | 3 | 5 | 5 | 2 | 21 |
| 2026-08-16 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-15 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4088 |
| TLDR | `email` | 2509 |
| arXiv cs.CL | `rss` | 2420 |
| The Rundown AI | `email` | 585 |
| TechCrunch AI | `rss` | 231 |
| The Decoder | `rss` | 198 |
| AlphaSignal | `email` | 151 |
| Qwen Code releases | `rss` | 109 |
| Cline releases | `rss` | 104 |
| Codex releases | `rss` | 87 |
| The Verge AI | `rss` | 87 |
| r/LocalLLaMA | `reddit` | 86 |
| Hacker News (ai/llm/claude) | `rss` | 73 |
| r/LangChain | `reddit` | 56 |
| r/Artificial | `reddit` | 55 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 36460 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

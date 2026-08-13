<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-13 01:31 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6331
- **Enriched:** 452 (7%)
- **Taste-rated:** 452 (7%)
- **Researched:** 312 (4%)
- **Status (candidate / rejected / published / duplicate):** 2477 / 3854 / 0 / 0
- **Published bullets (all-time):** 2098 (last 7d: 121)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-13 | 425 | 22 (5%) | 22 (5%) | 15 (3%) |
| 2026-08-12 | 1034 | 35 (3%) | 35 (3%) | 27 (2%) |
| 2026-08-11 | 618 | 43 (6%) | 43 (6%) | 33 (5%) |
| 2026-08-10 | 91 | 22 (24%) | 22 (24%) | 12 (13%) |
| 2026-08-09 | 309 | 40 (12%) | 40 (12%) | 36 (11%) |
| 2026-08-06 | 460 | 26 (5%) | 26 (5%) | 15 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-13 | 3 | 4 | 3 | 5 | 4 | 2 | 21 |
| 2026-08-12 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-08-11 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-10 | 3 | 3 | 3 | 4 | 4 | 0 | 17 |
| 2026-08-09 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-08-06 | 1 | 5 | 3 | 2 | 5 | 2 | 18 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3684 |
| arXiv cs.CL | `rss` | 2636 |
| TLDR | `email` | 2426 |
| The Rundown AI | `email` | 596 |
| TechCrunch AI | `rss` | 249 |
| The Decoder | `rss` | 185 |
| AlphaSignal | `email` | 153 |
| Cline releases | `rss` | 119 |
| Codex releases | `rss` | 89 |
| r/LocalLLaMA | `reddit` | 89 |
| Qwen Code releases | `rss` | 78 |
| Hacker News (ai/llm/claude) | `rss` | 76 |
| r/Artificial | `reddit` | 66 |
| r/LangChain | `reddit` | 62 |
| r/LocalLLM | `reddit` | 62 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 32649 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

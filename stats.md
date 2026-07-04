<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-04 02:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 18223
- **Enriched:** 3721 (20%)
- **Taste-rated:** 3066 (16%)
- **Researched:** 834 (4%)
- **Status (candidate / rejected / published / duplicate):** 2114 / 16109 / 0 / 0
- **Published bullets (all-time):** 1238 (last 7d: 147)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-04 | 636 | 36 (5%) | 36 (5%) | 11 (1%) |
| 2026-07-03 | 664 | 34 (5%) | 34 (5%) | 13 (1%) |
| 2026-07-02 | 790 | 32 (4%) | 32 (4%) | 18 (2%) |
| 2026-07-01 | 576 | 19 (3%) | 19 (3%) | 18 (3%) |
| 2026-06-30 | 1062 | 78 (7%) | 78 (7%) | 43 (4%) |
| 2026-06-29 | 91 | 30 (32%) | 30 (32%) | 28 (30%) |
| 2026-06-28 | 192 | 29 (15%) | 29 (15%) | 24 (12%) |
| 2026-06-27 | 574 | 19 (3%) | 19 (3%) | 14 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-07-04 | 5 | 3 | 3 | 2 | 14 |
| 2026-07-03 | 4 | 5 | 3 | 2 | 14 |
| 2026-07-02 | 3 | 5 | 3 | 5 | 19 |
| 2026-07-01 | 4 | 5 | 3 | 6 | 21 |
| 2026-06-30 | 7 | 8 | 6 | 11 | 37 |
| 2026-06-29 | 0 | 1 | 3 | 8 | 15 |
| 2026-06-28 | 0 | 0 | 3 | 8 | 14 |
| 2026-06-27 | 1 | 2 | 3 | 4 | 13 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5539 |
| arXiv cs.CL | `rss` | 3148 |
| /r/LocalLLaMA | `reddit` | 98 |
| Hacker News (ai/llm/claude) | `rss` | 79 |
| /r/LocalLLM | `reddit` | 77 |
| /r/LangChain | `reddit` | 75 |
| /r/Anthropic | `reddit` | 71 |
| /r/ChatGPT | `reddit` | 71 |
| /r/MachineLearning | `reddit` | 69 |
| /r/Artificial | `reddit` | 64 |
| /r/OpenAI | `reddit` | 54 |
| /r/ClaudeHomies | `reddit` | 52 |
| /r/AI_Agents | `reddit` | 49 |
| /r/cursor | `reddit` | 48 |
| /r/mcp | `reddit` | 48 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 16106 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

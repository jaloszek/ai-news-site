<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-02 03:03 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 16923
- **Enriched:** 3651 (21%)
- **Taste-rated:** 2996 (17%)
- **Researched:** 808 (4%)
- **Status (candidate / rejected / published / duplicate):** 2436 / 14487 / 0 / 0
- **Published bullets (all-time):** 1210 (last 7d: 158)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-02 | 790 | 32 (4%) | 32 (4%) | 17 (2%) |
| 2026-07-01 | 576 | 19 (3%) | 19 (3%) | 17 (2%) |
| 2026-06-30 | 1062 | 78 (7%) | 78 (7%) | 43 (4%) |
| 2026-06-29 | 91 | 30 (32%) | 30 (32%) | 28 (30%) |
| 2026-06-28 | 192 | 29 (15%) | 29 (15%) | 24 (12%) |
| 2026-06-27 | 574 | 19 (3%) | 19 (3%) | 14 (2%) |
| 2026-06-26 | 169 | 24 (14%) | 24 (14%) | 17 (10%) |
| 2026-06-25 | 932 | 40 (4%) | 40 (4%) | 28 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-07-02 | 3 | 5 | 3 | 5 | 19 |
| 2026-07-01 | 4 | 5 | 3 | 6 | 21 |
| 2026-06-30 | 7 | 8 | 6 | 11 | 37 |
| 2026-06-29 | 0 | 1 | 3 | 8 | 15 |
| 2026-06-28 | 0 | 0 | 3 | 8 | 14 |
| 2026-06-27 | 1 | 2 | 3 | 4 | 13 |
| 2026-06-26 | 2 | 3 | 3 | 8 | 19 |
| 2026-06-25 | 2 | 4 | 3 | 8 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5106 |
| arXiv cs.CL | `rss` | 2903 |
| /r/LocalLLaMA | `reddit` | 98 |
| /r/LocalLLM | `reddit` | 85 |
| /r/LangChain | `reddit` | 81 |
| /r/ChatGPT | `reddit` | 79 |
| /r/Anthropic | `reddit` | 78 |
| Hacker News (ai/llm/claude) | `rss` | 75 |
| /r/MachineLearning | `reddit` | 71 |
| /r/Artificial | `reddit` | 65 |
| /r/OpenAI | `reddit` | 57 |
| /r/singularity | `reddit` | 54 |
| /r/ClaudeHomies | `reddit` | 53 |
| OpenAI blog | `rss` | 52 |
| /r/ClaudeAI | `reddit` | 51 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 14484 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

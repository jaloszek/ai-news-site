<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-01 02:37 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 3446
- **Enriched:** 2382 (69%)
- **Taste-rated:** 1727 (50%)
- **Researched:** 389 (11%)
- **Status (candidate / rejected / published / duplicate):** 280 / 3166 / 0 / 0
- **Published bullets (all-time):** 673 (last 7d: 128)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-01 | 60 | 19 (31%) | 19 (31%) | 2 (3%) |
| 2026-05-31 | 149 | 37 (24%) | 37 (24%) | 5 (3%) |
| 2026-05-30 | 71 | 24 (33%) | 24 (33%) | 3 (4%) |
| 2026-05-29 | 188 | 72 (38%) | 72 (38%) | 11 (5%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |
| 2026-05-27 | 57 | 3 (5%) | 3 (5%) | 1 (1%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-25 | 153 | 85 (55%) | 0 (0%) | 81 (52%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-31 | 4 | 6 | 3 | 8 | 21 |
| 2026-05-30 | 2 | 6 | 3 | 8 | 19 |
| 2026-05-29 | 1 | 5 | 3 | 8 | 17 |
| 2026-05-28 | 3 | 6 | 3 | 8 | 20 |
| 2026-05-27 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-26 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-25 | 1 | 5 | 3 | 8 | 17 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 121 |
| /r/AI_Agents | `reddit` | 118 |
| /r/ollama | `reddit` | 112 |
| /r/LocalLLaMA | `reddit` | 111 |
| /r/ChatGPT | `reddit` | 108 |
| /r/LocalLLM | `reddit` | 107 |
| /r/singularity | `reddit` | 103 |
| /r/MachineLearning | `reddit` | 102 |
| /r/OpenAI | `reddit` | 102 |
| /r/Anthropic | `reddit` | 98 |
| /r/Artificial | `reddit` | 98 |
| /r/ClaudeAI | `reddit` | 98 |
| /r/ClaudeHomies | `reddit` | 61 |
| OpenAI blog | `rss` | 55 |
| Simon Willison | `rss` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 3163 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

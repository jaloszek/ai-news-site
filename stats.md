<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-29 21:24 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 3166
- **Enriched:** 2257 (71%)
- **Taste-rated:** 1602 (50%)
- **Researched:** 371 (11%)
- **Status (candidate / rejected / published / duplicate):** 356 / 2810 / 0 / 0
- **Published bullets (all-time):** 580 (last 7d: 73)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-29 | 188 | 27 (14%) | 27 (14%) | 3 (1%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |
| 2026-05-27 | 57 | 3 (5%) | 3 (5%) | 1 (1%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-25 | 153 | 85 (55%) | 0 (0%) | 81 (52%) |
| 2026-05-24 | 104 | 104 (100%) | 0 (0%) | 72 (69%) |
| 2026-05-23 | 8 | 8 (100%) | 0 (0%) | 8 (100%) |
| 2026-05-22 | 94 | 62 (65%) | 59 (62%) | 18 (19%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-28 | 2 | 1 | 0 | 5 | 8 |
| 2026-05-27 | 0 | 0 | 3 | 8 | 11 |
| 2026-05-25 | 1 | 4 | 3 | 8 | 16 |
| 2026-05-24 | 3 | 7 | 3 | 7 | 20 |
| 2026-05-22 | 2 | 5 | 3 | 8 | 18 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 114 |
| /r/AI_Agents | `reddit` | 110 |
| /r/LocalLLaMA | `reddit` | 109 |
| /r/ollama | `reddit` | 107 |
| /r/ChatGPT | `reddit` | 105 |
| /r/LocalLLM | `reddit` | 105 |
| /r/OpenAI | `reddit` | 102 |
| /r/singularity | `reddit` | 100 |
| /r/MachineLearning | `reddit` | 98 |
| /r/Artificial | `reddit` | 96 |
| /r/ClaudeAI | `reddit` | 96 |
| /r/Anthropic | `reddit` | 95 |
| /r/ClaudeHomies | `reddit` | 65 |
| OpenAI blog | `rss` | 61 |
| Simon Willison | `rss` | 56 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2807 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

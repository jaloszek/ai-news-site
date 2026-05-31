<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-31 14:35 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 3386
- **Enriched:** 2363 (69%)
- **Taste-rated:** 1708 (50%)
- **Researched:** 386 (11%)
- **Status (candidate / rejected / published / duplicate):** 408 / 2978 / 0 / 0
- **Published bullets (all-time):** 617 (last 7d: 92)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-31 | 149 | 37 (24%) | 37 (24%) | 4 (2%) |
| 2026-05-30 | 71 | 24 (33%) | 24 (33%) | 3 (4%) |
| 2026-05-29 | 188 | 72 (38%) | 72 (38%) | 11 (5%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |
| 2026-05-27 | 57 | 3 (5%) | 3 (5%) | 1 (1%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-25 | 153 | 85 (55%) | 0 (0%) | 81 (52%) |
| 2026-05-24 | 104 | 104 (100%) | 0 (0%) | 72 (69%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-31 | 4 | 5 | 3 | 8 | 20 |
| 2026-05-29 | 1 | 5 | 3 | 8 | 17 |
| 2026-05-28 | 2 | 1 | 0 | 5 | 8 |
| 2026-05-27 | 0 | 0 | 3 | 8 | 11 |
| 2026-05-25 | 1 | 4 | 3 | 8 | 16 |
| 2026-05-24 | 3 | 7 | 3 | 7 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 122 |
| /r/AI_Agents | `reddit` | 117 |
| /r/LocalLLaMA | `reddit` | 111 |
| /r/ollama | `reddit` | 111 |
| /r/ChatGPT | `reddit` | 108 |
| /r/LocalLLM | `reddit` | 107 |
| /r/MachineLearning | `reddit` | 103 |
| /r/OpenAI | `reddit` | 103 |
| /r/singularity | `reddit` | 103 |
| /r/Artificial | `reddit` | 99 |
| /r/Anthropic | `reddit` | 98 |
| /r/ClaudeAI | `reddit` | 98 |
| /r/ClaudeHomies | `reddit` | 64 |
| OpenAI blog | `rss` | 56 |
| Julian Goldie SEO | `youtube` | 48 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2975 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

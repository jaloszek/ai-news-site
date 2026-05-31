<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-31 11:34 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 3342
- **Enriched:** 2337 (69%)
- **Taste-rated:** 1682 (50%)
- **Researched:** 380 (11%)
- **Status (candidate / rejected / published / duplicate):** 364 / 2978 / 0 / 0
- **Published bullets (all-time):** 611 (last 7d: 86)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-31 | 105 | 12 (11%) | 12 (11%) | 3 (2%) |
| 2026-05-30 | 71 | 23 (32%) | 23 (32%) | 1 (1%) |
| 2026-05-29 | 188 | 72 (38%) | 72 (38%) | 8 (4%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |
| 2026-05-27 | 57 | 3 (5%) | 3 (5%) | 1 (1%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-25 | 153 | 85 (55%) | 0 (0%) | 81 (52%) |
| 2026-05-24 | 104 | 104 (100%) | 0 (0%) | 72 (69%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-31 | 2 | 4 | 3 | 5 | 14 |
| 2026-05-29 | 1 | 5 | 3 | 8 | 17 |
| 2026-05-28 | 2 | 1 | 0 | 5 | 8 |
| 2026-05-27 | 0 | 0 | 3 | 8 | 11 |
| 2026-05-25 | 1 | 4 | 3 | 8 | 16 |
| 2026-05-24 | 3 | 7 | 3 | 7 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 120 |
| /r/AI_Agents | `reddit` | 116 |
| /r/LocalLLaMA | `reddit` | 110 |
| /r/ollama | `reddit` | 109 |
| /r/ChatGPT | `reddit` | 108 |
| /r/LocalLLM | `reddit` | 107 |
| /r/OpenAI | `reddit` | 102 |
| /r/singularity | `reddit` | 102 |
| /r/MachineLearning | `reddit` | 100 |
| /r/Anthropic | `reddit` | 97 |
| /r/ClaudeAI | `reddit` | 97 |
| /r/Artificial | `reddit` | 96 |
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

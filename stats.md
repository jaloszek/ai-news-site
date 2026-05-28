<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-28 06:51 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2966
- **Enriched:** 2200 (74%)
- **Taste-rated:** 1545 (52%)
- **Researched:** 356 (12%)
- **Status (candidate / rejected / published / duplicate):** 268 / 2698 / 0 / 0
- **Published bullets (all-time):** 572 (last 7d: 81)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-28 | 99 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-27 | 57 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-25 | 153 | 85 (55%) | 0 (0%) | 81 (52%) |
| 2026-05-24 | 104 | 104 (100%) | 0 (0%) | 72 (69%) |
| 2026-05-23 | 8 | 8 (100%) | 0 (0%) | 8 (100%) |
| 2026-05-22 | 94 | 62 (65%) | 59 (62%) | 18 (19%) |
| 2026-05-21 | 147 | 138 (93%) | 138 (93%) | 15 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-27 | 0 | 0 | 3 | 8 | 11 |
| 2026-05-25 | 1 | 4 | 3 | 8 | 16 |
| 2026-05-24 | 3 | 7 | 3 | 7 | 20 |
| 2026-05-22 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-21 | 0 | 5 | 3 | 8 | 16 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 107 |
| /r/AI_Agents | `reddit` | 106 |
| /r/LocalLLaMA | `reddit` | 103 |
| /r/ollama | `reddit` | 101 |
| /r/LocalLLM | `reddit` | 100 |
| /r/ChatGPT | `reddit` | 99 |
| /r/OpenAI | `reddit` | 96 |
| /r/singularity | `reddit` | 94 |
| /r/Artificial | `reddit` | 91 |
| /r/ClaudeAI | `reddit` | 91 |
| /r/MachineLearning | `reddit` | 91 |
| /r/Anthropic | `reddit` | 90 |
| /r/ClaudeHomies | `reddit` | 61 |
| Simon Willison | `rss` | 56 |
| OpenAI blog | `rss` | 54 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2695 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

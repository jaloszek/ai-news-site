<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-25 07:46 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2549
- **Enriched:** 2030 (79%)
- **Taste-rated:** 1540 (60%)
- **Researched:** 214 (8%)
- **Status (candidate / rejected / published / duplicate):** 116 / 2433 / 0 / 0
- **Published bullets (all-time):** 545 (last 7d: 106)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-25 | 4 | 0 (0%) | 0 (0%) | 0 (0%) |
| 2026-05-24 | 104 | 19 (18%) | 0 (0%) | 11 (10%) |
| 2026-05-23 | 8 | 8 (100%) | 0 (0%) | 8 (100%) |
| 2026-05-22 | 94 | 62 (65%) | 59 (62%) | 18 (19%) |
| 2026-05-21 | 147 | 138 (93%) | 138 (93%) | 15 (10%) |
| 2026-05-19 | 78 | 73 (93%) | 73 (93%) | 7 (8%) |
| 2026-05-18 | 97 | 63 (64%) | 62 (63%) | 2 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-24 | 3 | 7 | 3 | 7 | 20 |
| 2026-05-22 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-21 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-20 | 3 | 5 | 3 | 8 | 19 |
| 2026-05-19 | 2 | 4 | 3 | 8 | 17 |
| 2026-05-18 | 0 | 5 | 3 | 8 | 16 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 93 |
| /r/LangChain | `reddit` | 93 |
| /r/LocalLLaMA | `reddit` | 88 |
| /r/ollama | `reddit` | 88 |
| /r/ChatGPT | `reddit` | 85 |
| /r/LocalLLM | `reddit` | 84 |
| /r/OpenAI | `reddit` | 83 |
| /r/singularity | `reddit` | 82 |
| /r/Anthropic | `reddit` | 80 |
| /r/MachineLearning | `reddit` | 77 |
| /r/Artificial | `reddit` | 76 |
| /r/ClaudeAI | `reddit` | 76 |
| Simon Willison | `rss` | 56 |
| /r/ClaudeHomies | `reddit` | 50 |
| OpenAI blog | `rss` | 49 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2430 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

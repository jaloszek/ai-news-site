<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-21 11:01 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2339
- **Enriched:** 1868 (79%)
- **Taste-rated:** 1408 (60%)
- **Researched:** 169 (7%)
- **Status (candidate / rejected / published / duplicate):** 225 / 2114 / 0 / 0
- **Published bullets (all-time):** 491 (last 7d: 116)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-21 | 147 | 89 (60%) | 89 (60%) | 7 (4%) |
| 2026-05-19 | 78 | 49 (62%) | 49 (62%) | 7 (8%) |
| 2026-05-18 | 97 | 63 (64%) | 62 (63%) | 2 (2%) |
| 2026-05-17 | 120 | 90 (75%) | 90 (75%) | 12 (10%) |
| 2026-05-16 | 136 | 120 (88%) | 120 (88%) | 18 (13%) |
| 2026-05-15 | 107 | 92 (85%) | 92 (85%) | 6 (5%) |
| 2026-05-14 | 67 | 47 (70%) | 47 (70%) | 5 (7%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-20 | 3 | 5 | 3 | 8 | 19 |
| 2026-05-19 | 2 | 4 | 3 | 8 | 17 |
| 2026-05-18 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-17 | 0 | 4 | 3 | 8 | 15 |
| 2026-05-16 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-15 | 1 | 4 | 3 | 7 | 15 |
| 2026-05-14 | 2 | 3 | 3 | 8 | 16 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 88 |
| /r/LangChain | `reddit` | 87 |
| /r/ollama | `reddit` | 83 |
| /r/LocalLLaMA | `reddit` | 82 |
| /r/ChatGPT | `reddit` | 79 |
| /r/LocalLLM | `reddit` | 78 |
| /r/OpenAI | `reddit` | 77 |
| /r/singularity | `reddit` | 76 |
| /r/Anthropic | `reddit` | 74 |
| /r/MachineLearning | `reddit` | 71 |
| /r/Artificial | `reddit` | 70 |
| /r/ClaudeAI | `reddit` | 70 |
| Simon Willison | `rss` | 56 |
| OpenAI blog | `rss` | 48 |
| /r/ClaudeHomies | `reddit` | 47 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2111 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-18 06:40 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2077
- **Enriched:** 1699 (81%)
- **Taste-rated:** 1239 (59%)
- **Researched:** 152 (7%)
- **Status (candidate / rejected / published / duplicate):** 316 / 1761 / 0 / 0
- **Published bullets (all-time):** 453 (last 7d: 152)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-18 | 60 | 37 (61%) | 36 (60%) | 0 (0%) |
| 2026-05-17 | 120 | 86 (71%) | 86 (71%) | 11 (9%) |
| 2026-05-16 | 136 | 119 (87%) | 119 (87%) | 18 (13%) |
| 2026-05-15 | 107 | 92 (85%) | 92 (85%) | 6 (5%) |
| 2026-05-14 | 67 | 47 (70%) | 47 (70%) | 5 (7%) |
| 2026-05-13 | 155 | 128 (82%) | 128 (82%) | 14 (9%) |
| 2026-05-12 | 61 | 53 (86%) | 53 (86%) | 6 (9%) |
| 2026-05-11 | 95 | 82 (86%) | 82 (86%) | 7 (7%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-18 | 0 | 5 | 3 | 6 | 14 |
| 2026-05-17 | 0 | 4 | 3 | 8 | 15 |
| 2026-05-16 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-15 | 1 | 4 | 3 | 7 | 15 |
| 2026-05-14 | 2 | 3 | 3 | 8 | 16 |
| 2026-05-13 | 3 | 9 | 9 | 24 | 45 |
| 2026-05-12 | 1 | 3 | 3 | 8 | 15 |
| 2026-05-11 | 0 | 3 | 3 | 8 | 14 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 80 |
| /r/LangChain | `reddit` | 79 |
| /r/ollama | `reddit` | 76 |
| /r/LocalLLaMA | `reddit` | 75 |
| /r/ChatGPT | `reddit` | 72 |
| /r/OpenAI | `reddit` | 72 |
| /r/LocalLLM | `reddit` | 71 |
| /r/singularity | `reddit` | 70 |
| /r/Anthropic | `reddit` | 67 |
| /r/Artificial | `reddit` | 63 |
| /r/ClaudeAI | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 63 |
| Simon Willison | `rss` | 56 |
| /r/ClaudeHomies | `reddit` | 43 |
| OpenAI blog | `rss` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 1758 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

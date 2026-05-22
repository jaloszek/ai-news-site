<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-22 09:03 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2433
- **Enriched:** 2000 (82%)
- **Taste-rated:** 1540 (63%)
- **Researched:** 181 (7%)
- **Status (candidate / rejected / published / duplicate):** 241 / 2192 / 0 / 0
- **Published bullets (all-time):** 525 (last 7d: 134)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-22 | 94 | 59 (62%) | 59 (62%) | 4 (4%) |
| 2026-05-21 | 147 | 138 (93%) | 138 (93%) | 15 (10%) |
| 2026-05-19 | 78 | 73 (93%) | 73 (93%) | 7 (8%) |
| 2026-05-18 | 97 | 63 (64%) | 62 (63%) | 2 (2%) |
| 2026-05-17 | 120 | 90 (75%) | 90 (75%) | 12 (10%) |
| 2026-05-16 | 136 | 120 (88%) | 120 (88%) | 18 (13%) |
| 2026-05-15 | 107 | 92 (85%) | 92 (85%) | 6 (5%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-22 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-21 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-20 | 3 | 5 | 3 | 8 | 19 |
| 2026-05-19 | 2 | 4 | 3 | 8 | 17 |
| 2026-05-18 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-17 | 0 | 4 | 3 | 8 | 15 |
| 2026-05-16 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-15 | 1 | 4 | 3 | 7 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 90 |
| /r/LangChain | `reddit` | 90 |
| /r/LocalLLaMA | `reddit` | 85 |
| /r/ollama | `reddit` | 85 |
| /r/ChatGPT | `reddit` | 82 |
| /r/LocalLLM | `reddit` | 81 |
| /r/OpenAI | `reddit` | 80 |
| /r/singularity | `reddit` | 79 |
| /r/Anthropic | `reddit` | 77 |
| /r/MachineLearning | `reddit` | 74 |
| /r/Artificial | `reddit` | 73 |
| /r/ClaudeAI | `reddit` | 73 |
| Simon Willison | `rss` | 56 |
| /r/ClaudeHomies | `reddit` | 49 |
| OpenAI blog | `rss` | 49 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 2189 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

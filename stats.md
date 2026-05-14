<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a></div>

# AI News — Stats

_Generated 2026-05-14 06:22 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 1654
- **Enriched:** 1363 (82%)
- **Taste-rated:** 904 (54%)
- **Researched:** 116 (7%)
- **Status (candidate / rejected / published / duplicate):** 283 / 1371 / 0 / 0
- **Published bullets (all-time):** 391 (last 7d: 209)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-14 | 67 | 45 (67%) | 45 (67%) | 4 (5%) |
| 2026-05-13 | 155 | 128 (82%) | 128 (82%) | 14 (9%) |
| 2026-05-12 | 61 | 53 (86%) | 53 (86%) | 6 (9%) |
| 2026-05-11 | 95 | 82 (86%) | 82 (86%) | 7 (7%) |
| 2026-05-10 | 62 | 48 (77%) | 48 (77%) | 5 (8%) |
| 2026-05-09 | 187 | 158 (84%) | 158 (84%) | 17 (9%) |
| 2026-05-08 | 75 | 70 (93%) | 70 (93%) | 7 (9%) |
| 2026-05-07 | 143 | 117 (81%) | 117 (81%) | 10 (6%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-14 | 2 | 3 | 3 | 8 | 16 |
| 2026-05-13 | 3 | 9 | 9 | 24 | 45 |
| 2026-05-12 | 1 | 3 | 3 | 8 | 15 |
| 2026-05-11 | 0 | 3 | 3 | 8 | 14 |
| 2026-05-10 | 2 | 6 | 6 | 16 | 30 |
| 2026-05-09 | 3 | 11 | 9 | 24 | 47 |
| 2026-05-08 | 2 | 2 | 3 | 8 | 15 |
| 2026-05-07 | 4 | 5 | 6 | 12 | 27 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 63 |
| /r/LangChain | `reddit` | 63 |
| /r/LocalLLaMA | `reddit` | 59 |
| /r/ollama | `reddit` | 58 |
| /r/ChatGPT | `reddit` | 57 |
| /r/OpenAI | `reddit` | 57 |
| /r/singularity | `reddit` | 56 |
| /r/LocalLLM | `reddit` | 53 |
| /r/Anthropic | `reddit` | 52 |
| /r/MachineLearning | `reddit` | 52 |
| /r/Artificial | `reddit` | 50 |
| /r/ClaudeAI | `reddit` | 50 |
| Simon Willison | `rss` | 49 |
| OpenAI blog | `rss` | 33 |
| /r/ClaudeHomies | `reddit` | 32 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 1368 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [index](index.html)_

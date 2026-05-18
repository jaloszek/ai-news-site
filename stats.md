<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-18 10:48 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 2114
- **Enriched:** 1726 (81%)
- **Taste-rated:** 1267 (59%)
- **Researched:** 155 (7%)
- **Status (candidate / rejected / published / duplicate):** 353 / 1761 / 0 / 0
- **Published bullets (all-time):** 455 (last 7d: 154)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-18 | 97 | 61 (62%) | 61 (62%) | 2 (2%) |
| 2026-05-17 | 120 | 88 (73%) | 88 (73%) | 12 (10%) |
| 2026-05-16 | 136 | 120 (88%) | 120 (88%) | 18 (13%) |
| 2026-05-15 | 107 | 92 (85%) | 92 (85%) | 6 (5%) |
| 2026-05-14 | 67 | 47 (70%) | 47 (70%) | 5 (7%) |
| 2026-05-13 | 155 | 128 (82%) | 128 (82%) | 14 (9%) |
| 2026-05-12 | 61 | 53 (86%) | 53 (86%) | 6 (9%) |
| 2026-05-11 | 95 | 82 (86%) | 82 (86%) | 7 (7%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-18 | 0 | 5 | 3 | 8 | 16 |
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
| /r/AI_Agents | `reddit` | 82 |
| /r/LangChain | `reddit` | 81 |
| /r/ollama | `reddit` | 78 |
| /r/LocalLLaMA | `reddit` | 76 |
| /r/ChatGPT | `reddit` | 73 |
| /r/OpenAI | `reddit` | 73 |
| /r/LocalLLM | `reddit` | 72 |
| /r/singularity | `reddit` | 71 |
| /r/Anthropic | `reddit` | 68 |
| /r/MachineLearning | `reddit` | 65 |
| /r/Artificial | `reddit` | 64 |
| /r/ClaudeAI | `reddit` | 64 |
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

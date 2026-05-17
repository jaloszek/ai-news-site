<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-05-17 13:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 1964
- **Enriched:** 1627 (82%)
- **Taste-rated:** 1168 (59%)
- **Researched:** 147 (7%)
- **Status (candidate / rejected / published / duplicate):** 310 / 1654 / 0 / 0
- **Published bullets (all-time):** 437 (last 7d: 166)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-17 | 67 | 51 (76%) | 51 (76%) | 6 (8%) |
| 2026-05-16 | 136 | 119 (87%) | 119 (87%) | 18 (13%) |
| 2026-05-15 | 107 | 92 (85%) | 92 (85%) | 6 (5%) |
| 2026-05-14 | 67 | 47 (70%) | 47 (70%) | 5 (7%) |
| 2026-05-13 | 155 | 128 (82%) | 128 (82%) | 14 (9%) |
| 2026-05-12 | 61 | 53 (86%) | 53 (86%) | 6 (9%) |
| 2026-05-11 | 95 | 82 (86%) | 82 (86%) | 7 (7%) |
| 2026-05-10 | 62 | 48 (77%) | 48 (77%) | 5 (8%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-17 | 0 | 2 | 3 | 8 | 13 |
| 2026-05-16 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-15 | 1 | 4 | 3 | 7 | 15 |
| 2026-05-14 | 2 | 3 | 3 | 8 | 16 |
| 2026-05-13 | 3 | 9 | 9 | 24 | 45 |
| 2026-05-12 | 1 | 3 | 3 | 8 | 15 |
| 2026-05-11 | 0 | 3 | 3 | 8 | 14 |
| 2026-05-10 | 2 | 6 | 6 | 16 | 30 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 76 |
| /r/AI_Agents | `reddit` | 75 |
| /r/LocalLLaMA | `reddit` | 71 |
| /r/ollama | `reddit` | 70 |
| /r/OpenAI | `reddit` | 69 |
| /r/ChatGPT | `reddit` | 68 |
| /r/singularity | `reddit` | 66 |
| /r/LocalLLM | `reddit` | 65 |
| /r/Anthropic | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 61 |
| /r/Artificial | `reddit` | 59 |
| /r/ClaudeAI | `reddit` | 59 |
| Simon Willison | `rss` | 56 |
| OpenAI blog | `rss` | 42 |
| /r/ClaudeHomies | `reddit` | 41 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 1651 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

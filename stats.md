<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-02 19:55 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 3566
- **Enriched:** 2407 (67%)
- **Taste-rated:** 1752 (49%)
- **Researched:** 407 (11%)
- **Status (candidate / rejected / published / duplicate):** 329 / 3237 / 0 / 0
- **Published bullets (all-time):** 675 (last 7d: 113)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-02 | 120 | 25 (20%) | 25 (20%) | 11 (9%) |
| 2026-06-01 | 60 | 19 (31%) | 19 (31%) | 7 (11%) |
| 2026-05-31 | 149 | 37 (24%) | 37 (24%) | 7 (4%) |
| 2026-05-30 | 71 | 24 (33%) | 24 (33%) | 3 (4%) |
| 2026-05-29 | 188 | 72 (38%) | 72 (38%) | 11 (5%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |
| 2026-05-27 | 57 | 3 (5%) | 3 (5%) | 1 (1%) |
| 2026-05-26 | 112 | 0 (0%) | 0 (0%) | 0 (0%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-02 | 2 | 0 | 0 | 0 | 2 |
| 2026-05-31 | 4 | 6 | 3 | 8 | 21 |
| 2026-05-30 | 2 | 6 | 3 | 8 | 19 |
| 2026-05-29 | 1 | 5 | 3 | 8 | 17 |
| 2026-05-28 | 3 | 6 | 3 | 8 | 20 |
| 2026-05-27 | 0 | 5 | 3 | 8 | 16 |
| 2026-05-26 | 2 | 5 | 3 | 8 | 18 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/LangChain | `reddit` | 115 |
| /r/AI_Agents | `reddit` | 109 |
| /r/LocalLLaMA | `reddit` | 107 |
| /r/ollama | `reddit` | 107 |
| /r/ChatGPT | `reddit` | 106 |
| /r/LocalLLM | `reddit` | 104 |
| /r/MachineLearning | `reddit` | 101 |
| /r/singularity | `reddit` | 101 |
| /r/OpenAI | `reddit` | 99 |
| /r/Anthropic | `reddit` | 96 |
| /r/ClaudeAI | `reddit` | 95 |
| /r/Artificial | `reddit` | 94 |
| /r/ClaudeHomies | `reddit` | 64 |
| OpenAI blog | `rss` | 62 |
| Julian Goldie SEO | `youtube` | 44 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 3234 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

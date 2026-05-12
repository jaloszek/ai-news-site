<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a></div>

# AI News — Stats

_Generated 2026-05-12 06:00 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 1432
- **Enriched:** 1180 (82%)
- **Taste-rated:** 721 (50%)
- **Researched:** 97 (6%)
- **Status (candidate / rejected / published / duplicate):** 218 / 1214 / 0 / 0
- **Published bullets (all-time):** 330 (last 7d: 174)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-12 | 61 | 50 (81%) | 50 (81%) | 6 (9%) |
| 2026-05-11 | 95 | 75 (78%) | 75 (78%) | 6 (6%) |
| 2026-05-10 | 62 | 48 (77%) | 48 (77%) | 5 (8%) |
| 2026-05-09 | 187 | 158 (84%) | 158 (84%) | 17 (9%) |
| 2026-05-08 | 75 | 70 (93%) | 70 (93%) | 7 (9%) |
| 2026-05-07 | 143 | 117 (81%) | 117 (81%) | 10 (6%) |
| 2026-05-06 | 41 | 29 (70%) | 29 (70%) | 3 (7%) |
| 2026-05-05 | 110 | 85 (77%) | 85 (77%) | 10 (9%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-12 | 1 | 3 | 3 | 8 | 15 |
| 2026-05-11 | 0 | 3 | 3 | 8 | 14 |
| 2026-05-10 | 2 | 6 | 6 | 16 | 30 |
| 2026-05-09 | 3 | 11 | 9 | 24 | 47 |
| 2026-05-08 | 2 | 2 | 3 | 8 | 15 |
| 2026-05-07 | 4 | 5 | 6 | 12 | 27 |
| 2026-05-06 | 1 | 2 | 3 | 5 | 11 |
| 2026-05-05 | 2 | 4 | 3 | 6 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 55 |
| /r/LangChain | `reddit` | 54 |
| /r/LocalLLaMA | `reddit` | 51 |
| /r/ollama | `reddit` | 50 |
| /r/OpenAI | `reddit` | 49 |
| /r/ChatGPT | `reddit` | 48 |
| /r/singularity | `reddit` | 48 |
| /r/LocalLLM | `reddit` | 46 |
| /r/Anthropic | `reddit` | 45 |
| /r/MachineLearning | `reddit` | 44 |
| /r/Artificial | `reddit` | 43 |
| /r/ClaudeAI | `reddit` | 42 |
| Simon Willison | `rss` | 42 |
| Julian Goldie SEO | `youtube` | 29 |
| /r/ClaudeHomies | `reddit` | 28 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 1211 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [index](index.html)_

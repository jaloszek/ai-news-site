<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a></div>

# AI News — Stats

_Generated 2026-05-09 21:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 1214
- **Enriched:** 976 (80%)
- **Taste-rated:** 516 (42%)
- **Researched:** 75 (6%)
- **Status (candidate / rejected / published / duplicate):** 405 / 809 / 0 / 0
- **Published bullets (all-time):** 271 (last 7d: 228)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-09 | 187 | 129 (68%) | 128 (68%) | 13 (6%) |
| 2026-05-08 | 75 | 68 (90%) | 68 (90%) | 6 (8%) |
| 2026-05-07 | 143 | 117 (81%) | 117 (81%) | 10 (6%) |
| 2026-05-06 | 41 | 29 (70%) | 29 (70%) | 3 (7%) |
| 2026-05-05 | 110 | 85 (77%) | 85 (77%) | 10 (9%) |
| 2026-05-04 | 166 | 123 (74%) | 89 (53%) | 12 (7%) |
| 2026-05-03 | 44 | 35 (79%) | 0 (0%) | 1 (2%) |
| 2026-05-02 | 185 | 163 (88%) | 0 (0%) | 20 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-09 | 3 | 11 | 9 | 24 | 47 |
| 2026-05-08 | 2 | 2 | 3 | 8 | 15 |
| 2026-05-07 | 4 | 5 | 6 | 12 | 27 |
| 2026-05-06 | 1 | 2 | 3 | 5 | 11 |
| 2026-05-05 | 2 | 4 | 3 | 6 | 15 |
| 2026-05-04 | 0 | 5 | 9 | 16 | 30 |
| 2026-05-03 | 1 | 1 | 3 | 6 | 11 |
| 2026-05-02 | 5 | 12 | 21 | 34 | 72 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| /r/AI_Agents | `reddit` | 46 |
| /r/LangChain | `reddit` | 46 |
| /r/LocalLLaMA | `reddit` | 44 |
| /r/ollama | `reddit` | 43 |
| /r/singularity | `reddit` | 41 |
| /r/ChatGPT | `reddit` | 40 |
| /r/LocalLLM | `reddit` | 40 |
| /r/OpenAI | `reddit` | 40 |
| /r/Anthropic | `reddit` | 38 |
| /r/MachineLearning | `reddit` | 37 |
| /r/Artificial | `reddit` | 36 |
| /r/ClaudeAI | `reddit` | 35 |
| Simon Willison | `rss` | 35 |
| Julian Goldie SEO | `youtube` | 26 |
| OpenAI blog | `rss` | 23 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 806 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [index](index.html)_

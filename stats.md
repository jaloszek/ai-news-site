<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a></div>

# AI News — Stats

_Generated 2026-05-09 05:33 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 1113
- **Enriched:** 902 (81%)
- **Taste-rated:** 443 (39%)
- **Researched:** 65 (5%)
- **Status (candidate / rejected / published / duplicate):** 304 / 809 / 0 / 0
- **Published bullets (all-time):** 240 (last 7d: 197)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-05-09 | 86 | 57 (66%) | 57 (66%) | 4 (4%) |
| 2026-05-08 | 75 | 67 (89%) | 67 (89%) | 5 (6%) |
| 2026-05-07 | 143 | 116 (81%) | 116 (81%) | 10 (6%) |
| 2026-05-06 | 41 | 29 (70%) | 29 (70%) | 3 (7%) |
| 2026-05-05 | 110 | 85 (77%) | 85 (77%) | 10 (9%) |
| 2026-05-04 | 166 | 123 (74%) | 89 (53%) | 12 (7%) |
| 2026-05-03 | 44 | 35 (79%) | 0 (0%) | 1 (2%) |
| 2026-05-02 | 185 | 163 (88%) | 0 (0%) | 20 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-05-09 | 1 | 4 | 3 | 8 | 16 |
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
| /r/AI_Agents | `reddit` | 42 |
| /r/LangChain | `reddit` | 41 |
| /r/LocalLLaMA | `reddit` | 40 |
| /r/ollama | `reddit` | 38 |
| /r/singularity | `reddit` | 37 |
| /r/ChatGPT | `reddit` | 36 |
| /r/LocalLLM | `reddit` | 36 |
| /r/Anthropic | `reddit` | 35 |
| /r/OpenAI | `reddit` | 35 |
| Simon Willison | `rss` | 35 |
| /r/Artificial | `reddit` | 34 |
| /r/ClaudeAI | `reddit` | 32 |
| /r/MachineLearning | `reddit` | 32 |
| Julian Goldie SEO | `youtube` | 23 |
| OpenAI blog | `rss` | 23 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 806 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [index](index.html)_

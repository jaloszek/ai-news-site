<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-13 15:00 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 7944
- **Enriched:** 2851 (35%)
- **Taste-rated:** 2196 (27%)
- **Researched:** 447 (5%)
- **Status (candidate / rejected / published / duplicate):** 1128 / 6816 / 0 / 0
- **Published bullets (all-time):** 867 (last 7d: 118)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-13 | 85 | 20 (23%) | 20 (23%) | 2 (2%) |
| 2026-06-12 | 482 | 36 (7%) | 36 (7%) | 5 (1%) |
| 2026-06-11 | 561 | 28 (4%) | 28 (4%) | 1 (0%) |
| 2026-06-10 | 1040 | 48 (4%) | 48 (4%) | 4 (0%) |
| 2026-06-09 | 462 | 44 (9%) | 44 (9%) | 5 (1%) |
| 2026-06-08 | 91 | 22 (24%) | 22 (24%) | 2 (2%) |
| 2026-06-07 | 93 | 16 (17%) | 16 (17%) | 1 (1%) |
| 2026-06-06 | 94 | 26 (27%) | 26 (27%) | 4 (4%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-13 | 3 | 4 | 3 | 8 | 18 |
| 2026-06-12 | 3 | 3 | 3 | 2 | 11 |
| 2026-06-11 | 2 | 5 | 3 | 2 | 12 |
| 2026-06-10 | 2 | 4 | 3 | 8 | 17 |
| 2026-06-09 | 1 | 3 | 3 | 8 | 15 |
| 2026-06-08 | 2 | 1 | 3 | 8 | 14 |
| 2026-06-07 | 0 | 3 | 3 | 8 | 14 |
| 2026-06-06 | 1 | 5 | 3 | 8 | 17 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 1910 |
| arXiv cs.CL | `rss` | 1267 |
| /r/LocalLLM | `reddit` | 102 |
| /r/LocalLLaMA | `reddit` | 102 |
| /r/AI_Agents | `reddit` | 101 |
| /r/LangChain | `reddit` | 101 |
| /r/ChatGPT | `reddit` | 99 |
| /r/ollama | `reddit` | 96 |
| /r/Anthropic | `reddit` | 94 |
| /r/ClaudeAI | `reddit` | 94 |
| /r/OpenAI | `reddit` | 94 |
| /r/Artificial | `reddit` | 93 |
| /r/singularity | `reddit` | 93 |
| /r/MachineLearning | `reddit` | 89 |
| /r/ClaudeHomies | `reddit` | 67 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 6813 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-18 02:49 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 9823
- **Enriched:** 3196 (32%)
- **Taste-rated:** 2541 (25%)
- **Researched:** 508 (5%)
- **Status (candidate / rejected / published / duplicate):** 1776 / 8047 / 0 / 0
- **Published bullets (all-time):** 951 (last 7d: 125)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-18 | 116 | 49 (42%) | 49 (42%) | 11 (9%) |
| 2026-06-17 | 1254 | 169 (13%) | 169 (13%) | 33 (2%) |
| 2026-06-16 | 403 | 49 (12%) | 49 (12%) | 4 (0%) |
| 2026-06-15 | 61 | 24 (39%) | 24 (39%) | 6 (9%) |
| 2026-06-14 | 45 | 20 (44%) | 20 (44%) | 4 (8%) |
| 2026-06-13 | 85 | 27 (31%) | 27 (31%) | 4 (4%) |
| 2026-06-12 | 482 | 63 (13%) | 63 (13%) | 6 (1%) |
| 2026-06-11 | 561 | 28 (4%) | 28 (4%) | 1 (0%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-18 | 2 | 5 | 3 | 8 | 18 |
| 2026-06-17 | 3 | 3 | 7 | 14 | 27 |
| 2026-06-16 | 2 | 1 | 3 | 8 | 14 |
| 2026-06-15 | 0 | 1 | 3 | 8 | 12 |
| 2026-06-14 | 1 | 1 | 3 | 8 | 13 |
| 2026-06-13 | 3 | 4 | 3 | 8 | 18 |
| 2026-06-12 | 3 | 3 | 3 | 2 | 11 |
| 2026-06-11 | 2 | 5 | 3 | 2 | 12 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 2924 |
| arXiv cs.CL | `rss` | 1723 |
| /r/LocalLLaMA | `reddit` | 98 |
| /r/LangChain | `reddit` | 96 |
| /r/ChatGPT | `reddit` | 93 |
| /r/LocalLLM | `reddit` | 92 |
| /r/Anthropic | `reddit` | 91 |
| /r/MachineLearning | `reddit` | 86 |
| /r/AI_Agents | `reddit` | 85 |
| /r/Artificial | `reddit` | 85 |
| /r/ClaudeAI | `reddit` | 83 |
| /r/OpenAI | `reddit` | 80 |
| /r/ollama | `reddit` | 80 |
| /r/singularity | `reddit` | 78 |
| /r/ClaudeHomies | `reddit` | 59 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 8044 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

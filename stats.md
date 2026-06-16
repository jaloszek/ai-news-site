<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-16 02:50 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 8453
- **Enriched:** 2977 (35%)
- **Taste-rated:** 2322 (27%)
- **Researched:** 462 (5%)
- **Status (candidate / rejected / published / duplicate):** 509 / 7944 / 0 / 0
- **Published bullets (all-time):** 906 (last 7d: 112)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-16 | 403 | 48 (11%) | 48 (11%) | 2 (0%) |
| 2026-06-15 | 61 | 24 (39%) | 24 (39%) | 6 (9%) |
| 2026-06-14 | 45 | 20 (44%) | 20 (44%) | 4 (8%) |
| 2026-06-13 | 85 | 27 (31%) | 27 (31%) | 4 (4%) |
| 2026-06-12 | 482 | 63 (13%) | 63 (13%) | 6 (1%) |
| 2026-06-11 | 561 | 28 (4%) | 28 (4%) | 1 (0%) |
| 2026-06-10 | 1040 | 48 (4%) | 48 (4%) | 4 (0%) |
| 2026-06-09 | 462 | 44 (9%) | 44 (9%) | 5 (1%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-16 | 2 | 1 | 3 | 8 | 14 |
| 2026-06-15 | 0 | 1 | 3 | 8 | 12 |
| 2026-06-14 | 1 | 1 | 3 | 8 | 13 |
| 2026-06-13 | 3 | 4 | 3 | 8 | 18 |
| 2026-06-12 | 3 | 3 | 3 | 2 | 11 |
| 2026-06-11 | 2 | 5 | 3 | 2 | 12 |
| 2026-06-10 | 2 | 4 | 3 | 8 | 17 |
| 2026-06-09 | 1 | 3 | 3 | 8 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 2105 |
| arXiv cs.CL | `rss` | 1392 |
| /r/LocalLLaMA | `reddit` | 100 |
| /r/LangChain | `reddit` | 99 |
| /r/ChatGPT | `reddit` | 97 |
| /r/LocalLLM | `reddit` | 96 |
| /r/Anthropic | `reddit` | 93 |
| /r/AI_Agents | `reddit` | 90 |
| /r/ClaudeAI | `reddit` | 87 |
| /r/Artificial | `reddit` | 86 |
| /r/singularity | `reddit` | 86 |
| /r/ollama | `reddit` | 85 |
| /r/MachineLearning | `reddit` | 84 |
| /r/OpenAI | `reddit` | 82 |
| /r/ClaudeHomies | `reddit` | 59 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 7941 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

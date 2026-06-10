<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-10 02:14 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 6816
- **Enriched:** 2767 (40%)
- **Taste-rated:** 2112 (30%)
- **Researched:** 438 (6%)
- **Status (candidate / rejected / published / duplicate):** 1593 / 5223 / 0 / 0
- **Published bullets (all-time):** 826 (last 7d: 135)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-10 | 1040 | 48 (4%) | 48 (4%) | 3 (0%) |
| 2026-06-09 | 462 | 44 (9%) | 44 (9%) | 5 (1%) |
| 2026-06-08 | 91 | 22 (24%) | 22 (24%) | 2 (2%) |
| 2026-06-07 | 93 | 16 (17%) | 16 (17%) | 1 (1%) |
| 2026-06-06 | 94 | 26 (27%) | 26 (27%) | 4 (4%) |
| 2026-06-05 | 593 | 55 (9%) | 55 (9%) | 0 (0%) |
| 2026-06-04 | 771 | 116 (15%) | 116 (15%) | 14 (1%) |
| 2026-06-03 | 32 | 5 (15%) | 5 (15%) | 1 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-10 | 2 | 4 | 3 | 8 | 17 |
| 2026-06-09 | 1 | 3 | 3 | 8 | 15 |
| 2026-06-08 | 2 | 1 | 3 | 8 | 14 |
| 2026-06-07 | 0 | 3 | 3 | 8 | 14 |
| 2026-06-06 | 1 | 5 | 3 | 8 | 17 |
| 2026-06-05 | 1 | 4 | 3 | 8 | 16 |
| 2026-06-04 | 4 | 6 | 3 | 13 | 26 |
| 2026-06-03 | 1 | 4 | 3 | 8 | 16 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 1388 |
| arXiv cs.CL | `rss` | 929 |
| /r/LangChain | `reddit` | 109 |
| /r/AI_Agents | `reddit` | 106 |
| /r/ChatGPT | `reddit` | 106 |
| /r/LocalLLM | `reddit` | 106 |
| /r/LocalLLaMA | `reddit` | 104 |
| /r/ollama | `reddit` | 103 |
| /r/ClaudeAI | `reddit` | 99 |
| /r/Artificial | `reddit` | 96 |
| /r/MachineLearning | `reddit` | 96 |
| /r/OpenAI | `reddit` | 96 |
| /r/singularity | `reddit` | 96 |
| /r/Anthropic | `reddit` | 95 |
| /r/ClaudeHomies | `reddit` | 70 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 5220 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

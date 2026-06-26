<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-26 02:39 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 13638
- **Enriched:** 3443 (25%)
- **Taste-rated:** 2788 (20%)
- **Researched:** 662 (4%)
- **Status (candidate / rejected / published / duplicate):** 2561 / 11077 / 0 / 0
- **Published bullets (all-time):** 1091 (last 7d: 140)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-26 | 169 | 24 (14%) | 24 (14%) | 17 (10%) |
| 2026-06-25 | 932 | 39 (4%) | 39 (4%) | 25 (2%) |
| 2026-06-24 | 1250 | 36 (2%) | 36 (2%) | 14 (1%) |
| 2026-06-23 | 282 | 40 (14%) | 40 (14%) | 32 (11%) |
| 2026-06-22 | 76 | 22 (28%) | 22 (28%) | 15 (19%) |
| 2026-06-21 | 58 | 9 (15%) | 9 (15%) | 8 (13%) |
| 2026-06-20 | 606 | 37 (6%) | 37 (6%) | 22 (3%) |
| 2026-06-19 | 442 | 40 (9%) | 40 (9%) | 16 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-26 | 2 | 3 | 3 | 8 | 19 |
| 2026-06-25 | 2 | 4 | 3 | 8 | 20 |
| 2026-06-24 | 2 | 5 | 3 | 8 | 21 |
| 2026-06-23 | 1 | 4 | 3 | 8 | 19 |
| 2026-06-22 | 0 | 1 | 3 | 8 | 15 |
| 2026-06-21 | 1 | 1 | 3 | 3 | 11 |
| 2026-06-20 | 1 | 3 | 4 | 9 | 20 |
| 2026-06-19 | 1 | 3 | 3 | 8 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3992 |
| arXiv cs.CL | `rss` | 2309 |
| /r/LocalLLaMA | `reddit` | 99 |
| /r/LangChain | `reddit` | 91 |
| /r/ChatGPT | `reddit` | 89 |
| /r/LocalLLM | `reddit` | 88 |
| /r/Anthropic | `reddit` | 86 |
| /r/MachineLearning | `reddit` | 81 |
| /r/Artificial | `reddit` | 73 |
| /r/OpenAI | `reddit` | 70 |
| /r/AI_Agents | `reddit` | 68 |
| /r/ClaudeAI | `reddit` | 67 |
| /r/singularity | `reddit` | 65 |
| /r/ollama | `reddit` | 61 |
| /r/ClaudeHomies | `reddit` | 58 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 11074 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

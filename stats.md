<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-22 02:55 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 11005
- **Enriched:** 3304 (30%)
- **Taste-rated:** 2649 (24%)
- **Researched:** 568 (5%)
- **Status (candidate / rejected / published / duplicate):** 740 / 10265 / 0 / 0
- **Published bullets (all-time):** 1012 (last 7d: 132)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-22 | 76 | 22 (28%) | 22 (28%) | 9 (11%) |
| 2026-06-21 | 58 | 9 (15%) | 9 (15%) | 8 (13%) |
| 2026-06-20 | 606 | 37 (6%) | 37 (6%) | 22 (3%) |
| 2026-06-19 | 442 | 40 (9%) | 40 (9%) | 16 (3%) |
| 2026-06-18 | 116 | 49 (42%) | 49 (42%) | 15 (12%) |
| 2026-06-17 | 1254 | 169 (13%) | 169 (13%) | 34 (2%) |
| 2026-06-16 | 403 | 49 (12%) | 49 (12%) | 4 (0%) |
| 2026-06-15 | 61 | 24 (39%) | 24 (39%) | 6 (9%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-22 | 0 | 1 | 3 | 8 | 15 |
| 2026-06-21 | 1 | 1 | 3 | 3 | 11 |
| 2026-06-20 | 1 | 3 | 4 | 9 | 20 |
| 2026-06-19 | 1 | 3 | 3 | 8 | 15 |
| 2026-06-18 | 2 | 5 | 3 | 8 | 18 |
| 2026-06-17 | 3 | 3 | 7 | 14 | 27 |
| 2026-06-16 | 2 | 1 | 3 | 8 | 14 |
| 2026-06-15 | 0 | 1 | 3 | 8 | 12 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3171 |
| arXiv cs.CL | `rss` | 1841 |
| /r/LocalLLaMA | `reddit` | 102 |
| /r/LangChain | `reddit` | 95 |
| /r/LocalLLM | `reddit` | 93 |
| /r/ChatGPT | `reddit` | 91 |
| /r/Anthropic | `reddit` | 89 |
| /r/MachineLearning | `reddit` | 84 |
| /r/Artificial | `reddit` | 82 |
| /r/AI_Agents | `reddit` | 80 |
| /r/OpenAI | `reddit` | 79 |
| /r/ClaudeAI | `reddit` | 77 |
| /r/ollama | `reddit` | 73 |
| /r/singularity | `reddit` | 73 |
| /r/ClaudeHomies | `reddit` | 59 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 10262 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

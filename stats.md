<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-04 17:34 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 4384
- **Enriched:** 2484 (56%)
- **Taste-rated:** 1828 (41%)
- **Researched:** 413 (9%)
- **Status (candidate / rejected / published / duplicate):** 938 / 3446 / 0 / 0
- **Published bullets (all-time):** 729 (last 7d: 133)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-04 | 712 | 44 (6%) | 43 (6%) | 4 (0%) |
| 2026-06-03 | 32 | 5 (15%) | 5 (15%) | 1 (3%) |
| 2026-06-02 | 194 | 53 (27%) | 53 (27%) | 15 (7%) |
| 2026-06-01 | 60 | 19 (31%) | 19 (31%) | 5 (8%) |
| 2026-05-31 | 149 | 37 (24%) | 37 (24%) | 6 (4%) |
| 2026-05-30 | 71 | 24 (33%) | 24 (33%) | 3 (4%) |
| 2026-05-29 | 188 | 72 (38%) | 72 (38%) | 11 (5%) |
| 2026-05-28 | 111 | 27 (24%) | 27 (24%) | 11 (9%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-04 | 4 | 5 | 3 | 10 | 22 |
| 2026-06-03 | 1 | 4 | 3 | 8 | 16 |
| 2026-06-02 | 2 | 5 | 3 | 8 | 18 |
| 2026-05-31 | 4 | 6 | 3 | 8 | 21 |
| 2026-05-30 | 2 | 6 | 3 | 8 | 19 |
| 2026-05-29 | 1 | 5 | 3 | 8 | 17 |
| 2026-05-28 | 3 | 6 | 3 | 8 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 293 |
| arXiv cs.CL | `rss` | 223 |
| /r/LangChain | `reddit` | 115 |
| /r/AI_Agents | `reddit` | 109 |
| /r/LocalLLM | `reddit` | 109 |
| /r/ChatGPT | `reddit` | 108 |
| /r/ollama | `reddit` | 108 |
| /r/LocalLLaMA | `reddit` | 107 |
| /r/MachineLearning | `reddit` | 102 |
| /r/OpenAI | `reddit` | 101 |
| /r/singularity | `reddit` | 101 |
| /r/ClaudeAI | `reddit` | 100 |
| /r/Anthropic | `reddit` | 98 |
| /r/Artificial | `reddit` | 96 |
| /r/ClaudeHomies | `reddit` | 69 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 3443 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

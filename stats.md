<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-06-29 02:54 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 14495
- **Enriched:** 3522 (24%)
- **Taste-rated:** 2867 (19%)
- **Researched:** 730 (5%)
- **Status (candidate / rejected / published / duplicate):** 991 / 13504 / 0 / 0
- **Published bullets (all-time):** 1133 (last 7d: 136)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-06-29 | 91 | 30 (32%) | 30 (32%) | 27 (29%) |
| 2026-06-28 | 192 | 29 (15%) | 29 (15%) | 24 (12%) |
| 2026-06-27 | 574 | 19 (3%) | 19 (3%) | 14 (2%) |
| 2026-06-26 | 169 | 24 (14%) | 24 (14%) | 17 (10%) |
| 2026-06-25 | 932 | 40 (4%) | 40 (4%) | 28 (3%) |
| 2026-06-24 | 1250 | 36 (2%) | 36 (2%) | 14 (1%) |
| 2026-06-23 | 282 | 40 (14%) | 40 (14%) | 32 (11%) |
| 2026-06-22 | 76 | 22 (28%) | 22 (28%) | 15 (19%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Claude Code | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-06-29 | 0 | 1 | 3 | 8 | 15 |
| 2026-06-28 | 0 | 0 | 3 | 8 | 14 |
| 2026-06-27 | 1 | 2 | 3 | 4 | 13 |
| 2026-06-26 | 2 | 3 | 3 | 8 | 19 |
| 2026-06-25 | 2 | 4 | 3 | 8 | 20 |
| 2026-06-24 | 2 | 5 | 3 | 8 | 21 |
| 2026-06-23 | 1 | 4 | 3 | 8 | 19 |
| 2026-06-22 | 0 | 1 | 3 | 8 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4202 |
| arXiv cs.CL | `rss` | 2437 |
| /r/LocalLLaMA | `reddit` | 98 |
| /r/LangChain | `reddit` | 85 |
| /r/LocalLLM | `reddit` | 84 |
| /r/ChatGPT | `reddit` | 83 |
| /r/Anthropic | `reddit` | 82 |
| /r/MachineLearning | `reddit` | 72 |
| Hacker News (ai/llm/claude) | `rss` | 68 |
| /r/Artificial | `reddit` | 65 |
| /r/AI_Agents | `reddit` | 63 |
| /r/OpenAI | `reddit` | 63 |
| /r/singularity | `reddit` | 61 |
| /r/ClaudeAI | `reddit` | 57 |
| /r/ollama | `reddit` | 54 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 13501 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

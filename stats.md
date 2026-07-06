<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-06 02:21 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 18384
- **Enriched:** 3758 (20%)
- **Taste-rated:** 3103 (16%)
- **Researched:** 867 (4%)
- **Status (candidate / rejected / published / duplicate):** 1050 / 17334 / 0 / 0
- **Published bullets (all-time):** 1268 (last 7d: 150)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-06 | 77 | 15 (19%) | 15 (19%) | 9 (11%) |
| 2026-07-05 | 84 | 22 (26%) | 22 (26%) | 18 (21%) |
| 2026-07-04 | 636 | 36 (5%) | 36 (5%) | 16 (2%) |
| 2026-07-03 | 664 | 34 (5%) | 34 (5%) | 14 (2%) |
| 2026-07-02 | 790 | 32 (4%) | 32 (4%) | 18 (2%) |
| 2026-07-01 | 576 | 19 (3%) | 19 (3%) | 18 (3%) |
| 2026-06-30 | 1062 | 78 (7%) | 78 (7%) | 43 (4%) |
| 2026-06-29 | 91 | 30 (32%) | 30 (32%) | 28 (30%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-07-06 | 0 | 2 | 3 | 4 | 12 |
| 2026-07-05 | 2 | 4 | 3 | 6 | 18 |
| 2026-07-04 | 5 | 3 | 3 | 2 | 14 |
| 2026-07-03 | 4 | 5 | 3 | 2 | 14 |
| 2026-07-02 | 3 | 5 | 3 | 5 | 19 |
| 2026-07-01 | 4 | 5 | 3 | 6 | 21 |
| 2026-06-30 | 7 | 8 | 6 | 11 | 37 |
| 2026-06-29 | 0 | 1 | 3 | 8 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4948 |
| arXiv cs.CL | `rss` | 2701 |
| /r/LocalLLaMA | `reddit` | 94 |
| /r/LocalLLM | `reddit` | 71 |
| /r/LangChain | `reddit` | 69 |
| Hacker News (ai/llm/claude) | `rss` | 69 |
| /r/Artificial | `reddit` | 63 |
| /r/ChatGPT | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 63 |
| /r/Anthropic | `reddit` | 61 |
| /r/ClaudeHomies | `reddit` | 51 |
| The Decoder | `rss` | 50 |
| /r/OpenAI | `reddit` | 49 |
| TechCrunch AI | `rss` | 49 |
| /r/AI_Agents | `reddit` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 17331 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

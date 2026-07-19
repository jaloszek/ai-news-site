<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-19 01:57 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 24693
- **Enriched:** 4269 (17%)
- **Taste-rated:** 3614 (14%)
- **Researched:** 1203 (4%)
- **Status (candidate / rejected / published / duplicate):** 2138 / 22555 / 0 / 0
- **Published bullets (all-time):** 1595 (last 7d: 198)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-19 | 76 | 25 (32%) | 25 (32%) | 9 (11%) |
| 2026-07-18 | 361 | 54 (14%) | 54 (14%) | 32 (8%) |
| 2026-07-17 | 525 | 28 (5%) | 28 (5%) | 14 (2%) |
| 2026-07-16 | 357 | 30 (8%) | 30 (8%) | 19 (5%) |
| 2026-07-15 | 819 | 35 (4%) | 35 (4%) | 24 (2%) |
| 2026-07-14 | 447 | 25 (5%) | 25 (5%) | 13 (2%) |
| 2026-07-13 | 25 | 14 (56%) | 14 (56%) | 10 (40%) |
| 2026-07-12 | 422 | 61 (14%) | 61 (14%) | 43 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-19 | 5 | 5 | 3 | 5 | 5 | 3 | 26 |
| 2026-07-18 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-17 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-16 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-15 | 4 | 5 | 3 | 5 | 4 | 3 | 24 |
| 2026-07-14 | 4 | 4 | 3 | 5 | 5 | 1 | 22 |
| 2026-07-13 | 1 | 4 | 3 | 5 | 5 | 1 | 19 |
| 2026-07-12 | 7 | 7 | 4 | 7 | 7 | 4 | 36 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4332 |
| arXiv cs.CL | `rss` | 2446 |
| TechCrunch AI | `rss` | 166 |
| The Decoder | `rss` | 139 |
| /r/LocalLLaMA | `reddit` | 97 |
| Cline releases | `rss` | 82 |
| Hacker News (ai/llm/claude) | `rss` | 73 |
| /r/LangChain | `reddit` | 69 |
| /r/LocalLLM | `reddit` | 68 |
| /r/Artificial | `reddit` | 62 |
| /r/MachineLearning | `reddit` | 61 |
| Codex releases | `rss` | 49 |
| /r/ChatGPT | `reddit` | 48 |
| /r/ClaudeHomies | `reddit` | 46 |
| /r/Anthropic | `reddit` | 44 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 22552 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

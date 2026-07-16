<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-16 01:55 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 23731
- **Enriched:** 4162 (17%)
- **Taste-rated:** 3507 (14%)
- **Researched:** 1145 (4%)
- **Status (candidate / rejected / published / duplicate):** 2070 / 21661 / 0 / 0
- **Published bullets (all-time):** 1522 (last 7d: 198)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-16 | 357 | 30 (8%) | 30 (8%) | 16 (4%) |
| 2026-07-15 | 819 | 35 (4%) | 35 (4%) | 24 (2%) |
| 2026-07-14 | 447 | 25 (5%) | 25 (5%) | 13 (2%) |
| 2026-07-13 | 25 | 14 (56%) | 14 (56%) | 10 (40%) |
| 2026-07-12 | 422 | 61 (14%) | 61 (14%) | 43 (10%) |
| 2026-07-11 | 484 | 39 (8%) | 39 (8%) | 25 (5%) |
| 2026-07-10 | 678 | 36 (5%) | 36 (5%) | 30 (4%) |
| 2026-07-09 | 90 | 33 (36%) | 33 (36%) | 21 (23%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-16 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-15 | 4 | 5 | 3 | 5 | 4 | 3 | 24 |
| 2026-07-14 | 4 | 4 | 3 | 5 | 5 | 1 | 22 |
| 2026-07-13 | 1 | 4 | 3 | 5 | 5 | 1 | 19 |
| 2026-07-12 | 7 | 7 | 4 | 7 | 7 | 4 | 36 |
| 2026-07-11 | 5 | 5 | 3 | 5 | 5 | 0 | 23 |
| 2026-07-10 | 5 | 5 | 3 | 5 | 5 | 1 | 24 |
| 2026-07-09 | 5 | 5 | 3 | 5 | 5 | 3 | 26 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5179 |
| arXiv cs.CL | `rss` | 2721 |
| TechCrunch AI | `rss` | 145 |
| The Decoder | `rss` | 122 |
| /r/LocalLLaMA | `reddit` | 98 |
| Hacker News (ai/llm/claude) | `rss` | 77 |
| /r/LangChain | `reddit` | 73 |
| Cline releases | `rss` | 67 |
| /r/LocalLLM | `reddit` | 65 |
| /r/MachineLearning | `reddit` | 63 |
| /r/Artificial | `reddit` | 61 |
| /r/ChatGPT | `reddit` | 55 |
| /r/Anthropic | `reddit` | 54 |
| Julian Goldie SEO | `youtube` | 46 |
| /r/ClaudeHomies | `reddit` | 44 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 21658 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

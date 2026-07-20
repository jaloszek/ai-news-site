<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-20 03:36 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 24816
- **Enriched:** 4333 (17%)
- **Taste-rated:** 3678 (14%)
- **Researched:** 1256 (5%)
- **Status (candidate / rejected / published / duplicate):** 1442 / 23374 / 0 / 0
- **Published bullets (all-time):** 1635 (last 7d: 202)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-20 | 67 | 21 (31%) | 21 (31%) | 13 (19%) |
| 2026-07-19 | 132 | 56 (42%) | 56 (42%) | 42 (31%) |
| 2026-07-18 | 361 | 65 (18%) | 65 (18%) | 37 (10%) |
| 2026-07-17 | 525 | 29 (5%) | 29 (5%) | 16 (3%) |
| 2026-07-16 | 357 | 30 (8%) | 30 (8%) | 19 (5%) |
| 2026-07-15 | 819 | 35 (4%) | 35 (4%) | 24 (2%) |
| 2026-07-14 | 447 | 25 (5%) | 25 (5%) | 13 (2%) |
| 2026-07-13 | 25 | 14 (56%) | 14 (56%) | 10 (40%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-19 | 9 | 9 | 4 | 9 | 7 | 4 | 42 |
| 2026-07-18 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-17 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-16 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-15 | 4 | 5 | 3 | 5 | 4 | 3 | 24 |
| 2026-07-14 | 4 | 4 | 3 | 5 | 5 | 1 | 22 |
| 2026-07-13 | 1 | 4 | 3 | 5 | 5 | 1 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4085 |
| arXiv cs.CL | `rss` | 2328 |
| TechCrunch AI | `rss` | 170 |
| The Decoder | `rss` | 144 |
| /r/LocalLLaMA | `reddit` | 99 |
| Cline releases | `rss` | 90 |
| Hacker News (ai/llm/claude) | `rss` | 77 |
| /r/LocalLLM | `reddit` | 68 |
| /r/LangChain | `reddit` | 66 |
| /r/Artificial | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 58 |
| Codex releases | `rss` | 49 |
| /r/ChatGPT | `reddit` | 45 |
| /r/Anthropic | `reddit` | 44 |
| /r/ClaudeHomies | `reddit` | 44 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 23371 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

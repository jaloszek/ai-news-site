<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-14 01:48 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 22555
- **Enriched:** 4097 (18%)
- **Taste-rated:** 3442 (15%)
- **Researched:** 1100 (4%)
- **Status (candidate / rejected / published / duplicate):** 2056 / 20499 / 0 / 0
- **Published bullets (all-time):** 1474 (last 7d: 206)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-14 | 447 | 25 (5%) | 25 (5%) | 9 (2%) |
| 2026-07-13 | 25 | 14 (56%) | 14 (56%) | 10 (40%) |
| 2026-07-12 | 422 | 61 (14%) | 61 (14%) | 42 (9%) |
| 2026-07-11 | 484 | 39 (8%) | 39 (8%) | 25 (5%) |
| 2026-07-10 | 678 | 36 (5%) | 36 (5%) | 30 (4%) |
| 2026-07-09 | 90 | 33 (36%) | 33 (36%) | 21 (23%) |
| 2026-07-08 | 1764 | 109 (6%) | 109 (6%) | 77 (4%) |
| 2026-07-07 | 261 | 22 (8%) | 22 (8%) | 16 (6%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-14 | 4 | 4 | 3 | 5 | 5 | 1 | 22 |
| 2026-07-13 | 1 | 4 | 3 | 5 | 5 | 1 | 19 |
| 2026-07-12 | 7 | 7 | 4 | 7 | 7 | 4 | 36 |
| 2026-07-11 | 5 | 5 | 3 | 5 | 5 | 0 | 23 |
| 2026-07-10 | 5 | 5 | 3 | 5 | 5 | 1 | 24 |
| 2026-07-09 | 5 | 5 | 3 | 5 | 5 | 3 | 26 |
| 2026-07-08 | 5 | 11 | 5 | 7 | 7 | 6 | 41 |
| 2026-07-07 | 4 | 2 | 3 | 0 | 3 | 3 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4835 |
| arXiv cs.CL | `rss` | 2439 |
| TechCrunch AI | `rss` | 113 |
| The Decoder | `rss` | 108 |
| /r/LocalLLaMA | `reddit` | 97 |
| /r/LangChain | `reddit` | 76 |
| Hacker News (ai/llm/claude) | `rss` | 72 |
| /r/LocalLLM | `reddit` | 67 |
| /r/MachineLearning | `reddit` | 65 |
| /r/Artificial | `reddit` | 58 |
| /r/ChatGPT | `reddit` | 58 |
| /r/Anthropic | `reddit` | 57 |
| Cline releases | `rss` | 56 |
| Julian Goldie SEO | `youtube` | 44 |
| /r/ClaudeHomies | `reddit` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 20496 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

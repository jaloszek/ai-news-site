<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-25 01:58 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 27668
- **Enriched:** 4483 (16%)
- **Taste-rated:** 3828 (13%)
- **Researched:** 1348 (4%)
- **Status (candidate / rejected / published / duplicate):** 2852 / 24816 / 0 / 0
- **Published bullets (all-time):** 1738 (last 7d: 194)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-25 | 657 | 36 (5%) | 36 (5%) | 15 (2%) |
| 2026-07-24 | 356 | 26 (7%) | 26 (7%) | 12 (3%) |
| 2026-07-23 | 597 | 21 (3%) | 21 (3%) | 14 (2%) |
| 2026-07-22 | 787 | 26 (3%) | 26 (3%) | 16 (2%) |
| 2026-07-21 | 455 | 40 (8%) | 40 (8%) | 26 (5%) |
| 2026-07-20 | 67 | 21 (31%) | 21 (31%) | 14 (20%) |
| 2026-07-19 | 132 | 57 (43%) | 57 (43%) | 48 (36%) |
| 2026-07-18 | 361 | 65 (18%) | 65 (18%) | 39 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-07-24 | 1 | 5 | 3 | 0 | 5 | 1 | 15 |
| 2026-07-23 | 3 | 5 | 3 | 2 | 5 | 0 | 18 |
| 2026-07-22 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-21 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-19 | 9 | 9 | 4 | 9 | 7 | 4 | 42 |
| 2026-07-18 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4477 |
| arXiv cs.CL | `rss` | 2526 |
| TechCrunch AI | `rss` | 224 |
| The Decoder | `rss` | 174 |
| Cline releases | `rss` | 102 |
| /r/LocalLLaMA | `reddit` | 98 |
| Hacker News (ai/llm/claude) | `rss` | 86 |
| /r/Artificial | `reddit` | 69 |
| /r/LocalLLM | `reddit` | 67 |
| Codex releases | `rss` | 66 |
| /r/LangChain | `reddit` | 64 |
| /r/MachineLearning | `reddit` | 55 |
| Julian Goldie SEO | `youtube` | 49 |
| /r/OpenWebUI | `reddit` | 47 |
| /r/ClaudeHomies | `reddit` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 24813 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

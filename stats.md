<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-26 02:04 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 27765
- **Enriched:** 4520 (16%)
- **Taste-rated:** 3865 (13%)
- **Researched:** 1369 (4%)
- **Status (candidate / rejected / published / duplicate):** 2494 / 25271 / 0 / 0
- **Published bullets (all-time):** 1757 (last 7d: 188)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-26 | 97 | 31 (31%) | 31 (31%) | 16 (16%) |
| 2026-07-25 | 657 | 42 (6%) | 42 (6%) | 19 (2%) |
| 2026-07-24 | 356 | 26 (7%) | 26 (7%) | 12 (3%) |
| 2026-07-23 | 597 | 21 (3%) | 21 (3%) | 15 (2%) |
| 2026-07-22 | 787 | 26 (3%) | 26 (3%) | 16 (2%) |
| 2026-07-21 | 455 | 40 (8%) | 40 (8%) | 26 (5%) |
| 2026-07-20 | 67 | 21 (31%) | 21 (31%) | 14 (20%) |
| 2026-07-19 | 132 | 57 (43%) | 57 (43%) | 48 (36%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-26 | 0 | 4 | 3 | 4 | 5 | 3 | 19 |
| 2026-07-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-07-24 | 1 | 5 | 3 | 0 | 5 | 1 | 15 |
| 2026-07-23 | 3 | 5 | 3 | 2 | 5 | 0 | 18 |
| 2026-07-22 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-21 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-19 | 9 | 9 | 4 | 9 | 7 | 4 | 42 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4268 |
| arXiv cs.CL | `rss` | 2398 |
| TechCrunch AI | `rss` | 227 |
| The Decoder | `rss` | 177 |
| Cline releases | `rss` | 102 |
| /r/LocalLLaMA | `reddit` | 98 |
| Hacker News (ai/llm/claude) | `rss` | 89 |
| /r/Artificial | `reddit` | 72 |
| Codex releases | `rss` | 69 |
| /r/LocalLLM | `reddit` | 67 |
| /r/LangChain | `reddit` | 64 |
| /r/MachineLearning | `reddit` | 55 |
| /r/OpenWebUI | `reddit` | 50 |
| Julian Goldie SEO | `youtube` | 46 |
| /r/ClaudeHomies | `reddit` | 44 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 25268 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

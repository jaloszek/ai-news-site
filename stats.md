<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-10 01:16 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 33052
- **Enriched:** 4980 (15%)
- **Taste-rated:** 4325 (13%)
- **Researched:** 1667 (5%)
- **Status (candidate / rejected / published / duplicate):** 860 / 32192 / 0 / 0
- **Published bullets (all-time):** 2032 (last 7d: 120)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-10 | 91 | 22 (24%) | 22 (24%) | 11 (12%) |
| 2026-08-09 | 309 | 40 (12%) | 40 (12%) | 35 (11%) |
| 2026-08-06 | 460 | 26 (5%) | 26 (5%) | 15 (3%) |
| 2026-08-05 | 1005 | 25 (2%) | 25 (2%) | 18 (1%) |
| 2026-08-04 | 548 | 29 (5%) | 29 (5%) | 21 (3%) |
| 2026-08-03 | 114 | 37 (32%) | 37 (32%) | 26 (22%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-10 | 3 | 3 | 3 | 4 | 4 | 0 | 17 |
| 2026-08-09 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-08-06 | 1 | 5 | 3 | 2 | 5 | 2 | 18 |
| 2026-08-05 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |
| 2026-08-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-03 | 0 | 5 | 3 | 5 | 5 | 3 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3109 |
| arXiv cs.CL | `rss` | 2224 |
| TechCrunch AI | `rss` | 229 |
| The Decoder | `rss` | 186 |
| Cline releases | `rss` | 115 |
| /r/LocalLLaMA | `reddit` | 90 |
| Codex releases | `rss` | 85 |
| Hacker News (ai/llm/claude) | `rss` | 70 |
| Qwen Code releases | `rss` | 70 |
| /r/Artificial | `reddit` | 69 |
| /r/LocalLLM | `reddit` | 64 |
| /r/LangChain | `reddit` | 62 |
| /r/MachineLearning | `reddit` | 53 |
| /r/OpenWebUI | `reddit` | 50 |
| Julian Goldie SEO | `youtube` | 40 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 32189 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

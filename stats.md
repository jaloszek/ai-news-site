<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-09 01:16 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 32961
- **Enriched:** 4957 (15%)
- **Taste-rated:** 4302 (13%)
- **Researched:** 1651 (5%)
- **Status (candidate / rejected / published / duplicate):** 1774 / 31187 / 0 / 0
- **Published bullets (all-time):** 2015 (last 7d: 125)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-09 | 309 | 39 (12%) | 39 (12%) | 30 (9%) |
| 2026-08-06 | 460 | 26 (5%) | 26 (5%) | 15 (3%) |
| 2026-08-05 | 1005 | 25 (2%) | 25 (2%) | 18 (1%) |
| 2026-08-04 | 548 | 29 (5%) | 29 (5%) | 21 (3%) |
| 2026-08-03 | 114 | 37 (32%) | 37 (32%) | 26 (22%) |
| 2026-08-02 | 83 | 33 (39%) | 33 (39%) | 22 (26%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-09 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-08-06 | 1 | 5 | 3 | 2 | 5 | 2 | 18 |
| 2026-08-05 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |
| 2026-08-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-03 | 0 | 5 | 3 | 5 | 5 | 3 | 21 |
| 2026-08-02 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3283 |
| arXiv cs.CL | `rss` | 2292 |
| TechCrunch AI | `rss` | 245 |
| The Decoder | `rss` | 180 |
| Cline releases | `rss` | 115 |
| /r/LocalLLaMA | `reddit` | 90 |
| Codex releases | `rss` | 90 |
| /r/Artificial | `reddit` | 69 |
| Hacker News (ai/llm/claude) | `rss` | 69 |
| Qwen Code releases | `rss` | 69 |
| /r/LocalLLM | `reddit` | 64 |
| /r/LangChain | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 53 |
| /r/OpenWebUI | `reddit` | 50 |
| Julian Goldie SEO | `youtube` | 40 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 31184 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

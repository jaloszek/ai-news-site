<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-02 02:09 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 30525
- **Enriched:** 4797 (15%)
- **Taste-rated:** 4142 (13%)
- **Researched:** 1535 (5%)
- **Status (candidate / rejected / published / duplicate):** 2176 / 28349 / 0 / 0
- **Published bullets (all-time):** 1912 (last 7d: 174)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-02 | 83 | 31 (37%) | 31 (37%) | 19 (22%) |
| 2026-08-01 | 465 | 79 (16%) | 79 (16%) | 49 (10%) |
| 2026-07-31 | 562 | 27 (4%) | 27 (4%) | 16 (2%) |
| 2026-07-30 | 617 | 32 (5%) | 32 (5%) | 19 (3%) |
| 2026-07-29 | 449 | 30 (6%) | 30 (6%) | 14 (3%) |
| 2026-07-28 | 499 | 41 (8%) | 41 (8%) | 23 (4%) |
| 2026-07-27 | 85 | 31 (36%) | 31 (36%) | 18 (21%) |
| 2026-07-26 | 97 | 33 (34%) | 33 (34%) | 20 (20%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-02 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-01 | 2 | 6 | 4 | 6 | 6 | 0 | 24 |
| 2026-07-31 | 0 | 5 | 3 | 4 | 5 | 1 | 18 |
| 2026-07-30 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-07-29 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-27 | 0 | 5 | 3 | 4 | 5 | 3 | 20 |
| 2026-07-26 | 0 | 4 | 3 | 4 | 5 | 3 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3763 |
| arXiv cs.CL | `rss` | 2382 |
| TechCrunch AI | `rss` | 254 |
| The Decoder | `rss` | 197 |
| Cline releases | `rss` | 123 |
| /r/LocalLLaMA | `reddit` | 99 |
| Hacker News (ai/llm/claude) | `rss` | 79 |
| Codex releases | `rss` | 77 |
| /r/Artificial | `reddit` | 75 |
| /r/LangChain | `reddit` | 63 |
| /r/LocalLLM | `reddit` | 61 |
| /r/MachineLearning | `reddit` | 57 |
| Qwen Code releases | `rss` | 52 |
| /r/OpenWebUI | `reddit` | 51 |
| /r/AI_Agents | `reddit` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 28346 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

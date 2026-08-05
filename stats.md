<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-05 02:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 32192
- **Enriched:** 4891 (15%)
- **Taste-rated:** 4236 (13%)
- **Researched:** 1601 (4%)
- **Status (candidate / rejected / published / duplicate):** 2215 / 29977 / 0 / 0
- **Published bullets (all-time):** 1977 (last 7d: 176)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-05 | 1005 | 24 (2%) | 24 (2%) | 14 (1%) |
| 2026-08-04 | 548 | 29 (5%) | 29 (5%) | 20 (3%) |
| 2026-08-03 | 114 | 37 (32%) | 37 (32%) | 26 (22%) |
| 2026-08-02 | 83 | 33 (39%) | 33 (39%) | 22 (26%) |
| 2026-08-01 | 465 | 81 (17%) | 81 (17%) | 52 (11%) |
| 2026-07-31 | 562 | 27 (4%) | 27 (4%) | 16 (2%) |
| 2026-07-30 | 617 | 32 (5%) | 32 (5%) | 19 (3%) |
| 2026-07-29 | 449 | 30 (6%) | 30 (6%) | 14 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-05 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |
| 2026-08-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-03 | 0 | 5 | 3 | 5 | 5 | 3 | 21 |
| 2026-08-02 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-01 | 2 | 6 | 4 | 6 | 6 | 0 | 24 |
| 2026-07-31 | 0 | 5 | 3 | 4 | 5 | 1 | 18 |
| 2026-07-30 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-07-29 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4018 |
| arXiv cs.CL | `rss` | 2468 |
| TechCrunch AI | `rss` | 259 |
| The Decoder | `rss` | 195 |
| Cline releases | `rss` | 117 |
| /r/LocalLLaMA | `reddit` | 99 |
| Codex releases | `rss` | 83 |
| /r/Artificial | `reddit` | 75 |
| Hacker News (ai/llm/claude) | `rss` | 75 |
| /r/LangChain | `reddit` | 69 |
| /r/LocalLLM | `reddit` | 67 |
| /r/MachineLearning | `reddit` | 59 |
| Qwen Code releases | `rss` | 58 |
| /r/OpenWebUI | `reddit` | 54 |
| OpenAI blog | `rss` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 29974 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

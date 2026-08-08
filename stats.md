<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-08-08 01:34 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 33464
- **Enriched:** 4959 (14%)
- **Taste-rated:** 4304 (12%)
- **Researched:** 1648 (4%)
- **Status (candidate / rejected / published / duplicate):** 2825 / 30639 / 0 / 0
- **Published bullets (all-time):** 2019 (last 7d: 153)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-08-08 | 812 | 40 (4%) | 40 (4%) | 27 (3%) |
| 2026-08-06 | 460 | 27 (5%) | 27 (5%) | 15 (3%) |
| 2026-08-05 | 1005 | 25 (2%) | 25 (2%) | 18 (1%) |
| 2026-08-04 | 548 | 29 (5%) | 29 (5%) | 21 (3%) |
| 2026-08-03 | 114 | 37 (32%) | 37 (32%) | 26 (22%) |
| 2026-08-02 | 83 | 33 (39%) | 33 (39%) | 22 (26%) |
| 2026-08-01 | 465 | 81 (17%) | 81 (17%) | 52 (11%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-08-08 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-06 | 1 | 5 | 3 | 2 | 5 | 2 | 18 |
| 2026-08-05 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |
| 2026-08-04 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-08-03 | 0 | 5 | 3 | 5 | 5 | 3 | 21 |
| 2026-08-02 | 1 | 5 | 3 | 5 | 5 | 3 | 22 |
| 2026-08-01 | 2 | 6 | 4 | 6 | 6 | 0 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3498 |
| arXiv cs.CL | `rss` | 2422 |
| TechCrunch AI | `rss` | 257 |
| The Decoder | `rss` | 181 |
| Cline releases | `rss` | 122 |
| /r/LocalLLaMA | `reddit` | 92 |
| Codex releases | `rss` | 92 |
| /r/Artificial | `reddit` | 72 |
| Hacker News (ai/llm/claude) | `rss` | 72 |
| Qwen Code releases | `rss` | 70 |
| /r/LocalLLM | `reddit` | 64 |
| /r/LangChain | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 56 |
| /r/OpenWebUI | `reddit` | 56 |
| OpenAI blog | `rss` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 30636 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

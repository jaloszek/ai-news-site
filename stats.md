<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-31 02:09 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 29977
- **Enriched:** 4687 (15%)
- **Taste-rated:** 4031 (13%)
- **Researched:** 1466 (4%)
- **Status (candidate / rejected / published / duplicate):** 2212 / 27765 / 0 / 0
- **Published bullets (all-time):** 1866 (last 7d: 166)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-31 | 562 | 27 (4%) | 26 (4%) | 15 (2%) |
| 2026-07-30 | 617 | 32 (5%) | 32 (5%) | 19 (3%) |
| 2026-07-29 | 449 | 30 (6%) | 30 (6%) | 14 (3%) |
| 2026-07-28 | 499 | 41 (8%) | 41 (8%) | 23 (4%) |
| 2026-07-27 | 85 | 31 (36%) | 31 (36%) | 18 (21%) |
| 2026-07-26 | 97 | 33 (34%) | 33 (34%) | 20 (20%) |
| 2026-07-25 | 657 | 46 (7%) | 46 (7%) | 23 (3%) |
| 2026-07-24 | 356 | 26 (7%) | 26 (7%) | 12 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-31 | 0 | 5 | 3 | 4 | 5 | 1 | 18 |
| 2026-07-30 | 3 | 5 | 3 | 3 | 5 | 3 | 22 |
| 2026-07-29 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-27 | 0 | 5 | 3 | 4 | 5 | 3 | 20 |
| 2026-07-26 | 0 | 4 | 3 | 4 | 5 | 3 | 19 |
| 2026-07-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-07-24 | 1 | 5 | 3 | 0 | 5 | 1 | 15 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4507 |
| arXiv cs.CL | `rss` | 2378 |
| TechCrunch AI | `rss` | 258 |
| The Decoder | `rss` | 195 |
| Cline releases | `rss` | 117 |
| /r/LocalLLaMA | `reddit` | 95 |
| Hacker News (ai/llm/claude) | `rss` | 80 |
| Codex releases | `rss` | 77 |
| /r/Artificial | `reddit` | 76 |
| /r/LocalLLM | `reddit` | 66 |
| /r/LangChain | `reddit` | 65 |
| /r/MachineLearning | `reddit` | 59 |
| /r/OpenWebUI | `reddit` | 50 |
| Qwen Code releases | `rss` | 45 |
| /r/ClaudeHomies | `reddit` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 27762 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

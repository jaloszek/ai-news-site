<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-29 01:56 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 28798
- **Enriched:** 4627 (16%)
- **Taste-rated:** 3972 (13%)
- **Researched:** 1423 (4%)
- **Status (candidate / rejected / published / duplicate):** 1787 / 27011 / 0 / 0
- **Published bullets (all-time):** 1826 (last 7d: 166)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-29 | 449 | 29 (6%) | 29 (6%) | 8 (1%) |
| 2026-07-28 | 499 | 41 (8%) | 41 (8%) | 22 (4%) |
| 2026-07-27 | 85 | 31 (36%) | 31 (36%) | 17 (20%) |
| 2026-07-26 | 97 | 33 (34%) | 33 (34%) | 19 (19%) |
| 2026-07-25 | 657 | 46 (7%) | 46 (7%) | 23 (3%) |
| 2026-07-24 | 356 | 26 (7%) | 26 (7%) | 12 (3%) |
| 2026-07-23 | 597 | 21 (3%) | 21 (3%) | 15 (2%) |
| 2026-07-22 | 787 | 26 (3%) | 26 (3%) | 16 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-29 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-27 | 0 | 5 | 3 | 4 | 5 | 3 | 20 |
| 2026-07-26 | 0 | 4 | 3 | 4 | 5 | 3 | 19 |
| 2026-07-25 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-07-24 | 1 | 5 | 3 | 0 | 5 | 1 | 15 |
| 2026-07-23 | 3 | 5 | 3 | 2 | 5 | 0 | 18 |
| 2026-07-22 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4229 |
| arXiv cs.CL | `rss` | 2520 |
| TechCrunch AI | `rss` | 249 |
| The Decoder | `rss` | 193 |
| Cline releases | `rss` | 114 |
| /r/LocalLLaMA | `reddit` | 99 |
| Hacker News (ai/llm/claude) | `rss` | 82 |
| /r/Artificial | `reddit` | 78 |
| Codex releases | `rss` | 76 |
| /r/LocalLLM | `reddit` | 67 |
| /r/LangChain | `reddit` | 65 |
| /r/MachineLearning | `reddit` | 58 |
| /r/OpenWebUI | `reddit` | 51 |
| /r/AI_Agents | `reddit` | 43 |
| /r/ClaudeHomies | `reddit` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 27008 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

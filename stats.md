<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-22 01:53 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 26058
- **Enriched:** 4400 (16%)
- **Taste-rated:** 3735 (14%)
- **Researched:** 1301 (4%)
- **Status (candidate / rejected / published / duplicate):** 1802 / 24256 / 0 / 0
- **Published bullets (all-time):** 1682 (last 7d: 208)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-22 | 787 | 26 (3%) | 16 (2%) | 12 (1%) |
| 2026-07-21 | 455 | 40 (8%) | 40 (8%) | 25 (5%) |
| 2026-07-20 | 67 | 21 (31%) | 21 (31%) | 13 (19%) |
| 2026-07-19 | 132 | 57 (43%) | 57 (43%) | 48 (36%) |
| 2026-07-18 | 361 | 65 (18%) | 65 (18%) | 39 (10%) |
| 2026-07-17 | 525 | 29 (5%) | 29 (5%) | 16 (3%) |
| 2026-07-16 | 357 | 30 (8%) | 30 (8%) | 19 (5%) |
| 2026-07-15 | 819 | 35 (4%) | 35 (4%) | 24 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-22 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-21 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-20 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-19 | 9 | 9 | 4 | 9 | 7 | 4 | 42 |
| 2026-07-18 | 4 | 5 | 3 | 5 | 5 | 3 | 25 |
| 2026-07-17 | 4 | 5 | 3 | 5 | 5 | 0 | 22 |
| 2026-07-16 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-07-15 | 4 | 5 | 3 | 5 | 4 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4614 |
| arXiv cs.CL | `rss` | 2538 |
| TechCrunch AI | `rss` | 187 |
| The Decoder | `rss` | 157 |
| /r/LocalLLaMA | `reddit` | 98 |
| Cline releases | `rss` | 95 |
| Hacker News (ai/llm/claude) | `rss` | 79 |
| /r/LangChain | `reddit` | 64 |
| /r/LocalLLM | `reddit` | 64 |
| /r/Artificial | `reddit` | 63 |
| /r/MachineLearning | `reddit` | 57 |
| Codex releases | `rss` | 56 |
| /r/ChatGPT | `reddit` | 44 |
| /r/Anthropic | `reddit` | 42 |
| /r/ClaudeHomies | `reddit` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 24253 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

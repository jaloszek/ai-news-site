<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-02 02:30 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6486
- **Enriched:** 537 (8%)
- **Taste-rated:** 527 (8%)
- **Researched:** 339 (5%)
- **Status (candidate / rejected / published / duplicate):** 1787 / 4699 / 0 / 0
- **Published bullets (all-time):** 2524 (last 7d: 156)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-02 | 742 | 28 (3%) | 18 (2%) | 12 (1%) |
| 2026-09-01 | 609 | 38 (6%) | 38 (6%) | 30 (4%) |
| 2026-08-31 | 91 | 25 (27%) | 25 (27%) | 17 (18%) |
| 2026-08-30 | 86 | 31 (36%) | 31 (36%) | 27 (31%) |
| 2026-08-29 | 259 | 40 (15%) | 40 (15%) | 28 (10%) |
| 2026-08-28 | 681 | 41 (6%) | 41 (6%) | 21 (3%) |
| 2026-08-27 | 760 | 35 (4%) | 35 (4%) | 23 (3%) |
| 2026-08-26 | 907 | 35 (3%) | 35 (3%) | 24 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-02 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-01 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-08-31 | 1 | 5 | 2 | 5 | 4 | 0 | 17 |
| 2026-08-30 | 2 | 5 | 3 | 5 | 4 | 1 | 20 |
| 2026-08-29 | 1 | 5 | 3 | 5 | 5 | 0 | 19 |
| 2026-08-28 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |
| 2026-08-27 | 1 | 5 | 3 | 5 | 5 | 0 | 19 |
| 2026-08-26 | 2 | 5 | 3 | 5 | 5 | 1 | 21 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4213 |
| arXiv cs.CL | `rss` | 2836 |
| TLDR | `email` | 2494 |
| The Rundown AI | `email` | 531 |
| TechCrunch AI | `rss` | 207 |
| The Decoder | `rss` | 207 |
| AlphaSignal | `email` | 123 |
| Codex releases | `rss` | 105 |
| Qwen Code releases | `rss` | 101 |
| The Verge AI | `rss` | 101 |
| Cline releases | `rss` | 96 |
| r/LocalLLaMA | `reddit` | 87 |
| OpenClaw releases | `rss` | 66 |
| r/LangChain | `reddit` | 61 |
| Hacker News (ai/llm/claude) | `rss` | 60 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 42561 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

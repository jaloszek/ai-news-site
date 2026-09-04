<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-09-04 02:23 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 6717
- **Enriched:** 523 (7%)
- **Taste-rated:** 523 (7%)
- **Researched:** 351 (5%)
- **Status (candidate / rejected / published / duplicate):** 2821 / 3896 / 0 / 0
- **Published bullets (all-time):** 2568 (last 7d: 160)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-09-04 | 567 | 43 (7%) | 43 (7%) | 33 (5%) |
| 2026-09-03 | 812 | 31 (3%) | 31 (3%) | 21 (2%) |
| 2026-09-02 | 742 | 28 (3%) | 28 (3%) | 16 (2%) |
| 2026-09-01 | 609 | 38 (6%) | 38 (6%) | 30 (4%) |
| 2026-08-31 | 91 | 25 (27%) | 25 (27%) | 18 (19%) |
| 2026-08-30 | 86 | 31 (36%) | 31 (36%) | 28 (32%) |
| 2026-08-29 | 259 | 40 (15%) | 40 (15%) | 28 (10%) |
| 2026-08-28 | 681 | 41 (6%) | 41 (6%) | 21 (3%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-04 | 2 | 5 | 3 | 5 | 5 | 3 | 23 |
| 2026-09-03 | 3 | 5 | 3 | 4 | 5 | 1 | 21 |
| 2026-09-02 | 1 | 5 | 3 | 5 | 5 | 1 | 20 |
| 2026-09-01 | 2 | 5 | 3 | 5 | 5 | 0 | 20 |
| 2026-08-31 | 1 | 5 | 2 | 5 | 4 | 0 | 17 |
| 2026-08-30 | 2 | 5 | 3 | 5 | 4 | 1 | 20 |
| 2026-08-29 | 1 | 5 | 3 | 5 | 5 | 0 | 19 |
| 2026-08-28 | 1 | 5 | 3 | 4 | 5 | 2 | 20 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 4457 |
| arXiv cs.CL | `rss` | 3142 |
| TLDR | `email` | 2583 |
| The Rundown AI | `email` | 532 |
| TechCrunch AI | `rss` | 220 |
| The Decoder | `rss` | 208 |
| AlphaSignal | `email` | 119 |
| Codex releases | `rss` | 111 |
| The Verge AI | `rss` | 111 |
| Qwen Code releases | `rss` | 101 |
| Cline releases | `rss` | 98 |
| r/LocalLLaMA | `reddit` | 87 |
| Hacker News (ai/llm/claude) | `rss` | 65 |
| OpenClaw releases | `rss` | 65 |
| OpenAI blog | `rss` | 58 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 42906 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

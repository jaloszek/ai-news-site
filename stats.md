<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-22 02:43 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3867
- **Enriched:** 618 (15%)
- **Taste-rated:** 617 (15%)
- **Researched:** 453 (11%)
- **Status (candidate / rejected / published / duplicate):** 1095 / 2772 / 0 / 0
- **Published bullets (all-time):** 3589 (last 7d: 182)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-22 | 302 | 34 (11%) | 34 (11%) | 23 (7%) |
| 2026-10-21 | 298 | 46 (15%) | 46 (15%) | 31 (10%) |
| 2026-10-20 | 301 | 57 (18%) | 56 (18%) | 42 (13%) |
| 2026-10-19 | 63 | 30 (47%) | 30 (47%) | 20 (31%) |
| 2026-10-18 | 131 | 56 (42%) | 56 (42%) | 38 (29%) |
| 2026-10-17 | 323 | 42 (13%) | 42 (13%) | 35 (10%) |
| 2026-10-16 | 295 | 46 (15%) | 46 (15%) | 33 (11%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-22 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-21 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-20 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-19 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-17 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-16 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-15 | 3 | 5 | 3 | 5 | 2 | 0 | 18 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3067 |
| TLDR | `email` | 2676 |
| arXiv cs.CL | `rss` | 1743 |
| The Rundown AI | `email` | 467 |
| TechCrunch AI | `rss` | 295 |
| The Decoder | `rss` | 211 |
| The Verge AI | `rss` | 169 |
| AlphaSignal | `email` | 154 |
| AINews | `email` | 132 |
| Codex releases | `rss` | 119 |
| Hermes Agent releases | `rss` | 109 |
| Hacker News (points) | `rss` | 108 |
| r/LocalLLaMA | `reddit` | 90 |
| Cline releases | `rss` | 81 |
| OpenClaw releases | `rss` | 79 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 65720 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

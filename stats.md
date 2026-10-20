<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-10-20 02:51 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3850
- **Enriched:** 579 (15%)
- **Taste-rated:** 579 (15%)
- **Researched:** 426 (11%)
- **Status (candidate / rejected / published / duplicate):** 818 / 3032 / 0 / 0
- **Published bullets (all-time):** 3541 (last 7d: 179)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-10-20 | 301 | 52 (17%) | 52 (17%) | 35 (11%) |
| 2026-10-19 | 63 | 30 (47%) | 30 (47%) | 20 (31%) |
| 2026-10-18 | 131 | 56 (42%) | 56 (42%) | 37 (28%) |
| 2026-10-17 | 323 | 42 (13%) | 42 (13%) | 35 (10%) |
| 2026-10-16 | 295 | 46 (15%) | 46 (15%) | 33 (11%) |
| 2026-10-15 | 299 | 46 (15%) | 46 (15%) | 33 (11%) |
| 2026-10-14 | 326 | 46 (14%) | 46 (14%) | 34 (10%) |
| 2026-10-13 | 315 | 49 (15%) | 49 (15%) | 32 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-10-20 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-19 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-17 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-16 | 3 | 5 | 3 | 5 | 4 | 3 | 23 |
| 2026-10-15 | 3 | 5 | 3 | 5 | 2 | 0 | 18 |
| 2026-10-14 | 3 | 5 | 3 | 5 | 4 | 2 | 22 |
| 2026-10-13 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 3194 |
| TLDR | `email` | 2603 |
| arXiv cs.CL | `rss` | 1851 |
| The Rundown AI | `email` | 455 |
| TechCrunch AI | `rss` | 286 |
| The Decoder | `rss` | 207 |
| The Verge AI | `rss` | 166 |
| AlphaSignal | `email` | 142 |
| AINews | `email` | 131 |
| Codex releases | `rss` | 127 |
| Hacker News (points) | `rss` | 97 |
| Hermes Agent releases | `rss` | 96 |
| r/LocalLLaMA | `reddit` | 91 |
| Cline releases | `rss` | 80 |
| OpenClaw releases | `rss` | 79 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 65397 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

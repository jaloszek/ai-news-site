<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-01 03:16 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3400
- **Enriched:** 707 (20%)
- **Taste-rated:** 706 (20%)
- **Researched:** 497 (14%)
- **Status (candidate / rejected / published / duplicate):** 1146 / 2254 / 0 / 0
- **Published bullets (all-time):** 3818 (last 7d: 181)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-01 | 102 | 29 (28%) | 29 (28%) | 19 (18%) |
| 2026-10-31 | 243 | 58 (23%) | 58 (23%) | 35 (14%) |
| 2026-10-30 | 256 | 59 (23%) | 59 (23%) | 40 (15%) |
| 2026-10-29 | 301 | 46 (15%) | 46 (15%) | 31 (10%) |
| 2026-10-28 | 292 | 51 (17%) | 51 (17%) | 38 (13%) |
| 2026-10-27 | 332 | 64 (19%) | 64 (19%) | 50 (15%) |
| 2026-10-26 | 89 | 32 (35%) | 32 (35%) | 18 (20%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-01 | 1 | 4 | 3 | 5 | 5 | 3 | 21 |
| 2026-10-31 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-26 | 3 | 5 | 3 | 5 | 3 | 0 | 19 |
| 2026-10-25 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2509 |
| The Rundown AI | `email` | 456 |
| arXiv cs.AI | `rss` | 354 |
| TechCrunch AI | `rss` | 265 |
| arXiv cs.CL | `rss` | 220 |
| The Decoder | `rss` | 205 |
| The Verge AI | `rss` | 169 |
| Hacker News (points) | `rss` | 164 |
| AlphaSignal | `email` | 150 |
| Hermes Agent releases | `rss` | 101 |
| r/LocalLLaMA | `reddit` | 89 |
| AINews | `email` | 79 |
| OpenClaw releases | `rss` | 77 |
| Codex releases | `rss` | 70 |
| HF Daily Papers | `rss` | 70 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 67319 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

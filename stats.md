<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-04 04:06 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3138
- **Enriched:** 662 (21%)
- **Taste-rated:** 662 (21%)
- **Researched:** 456 (14%)
- **Status (candidate / rejected / published / duplicate):** 633 / 2505 / 0 / 0
- **Published bullets (all-time):** 3883 (last 7d: 180)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-04 | 215 | 45 (20%) | 45 (20%) | 27 (12%) |
| 2026-11-03 | 222 | 49 (22%) | 49 (22%) | 35 (15%) |
| 2026-11-02 | 94 | 42 (44%) | 42 (44%) | 24 (25%) |
| 2026-11-01 | 102 | 37 (36%) | 37 (36%) | 21 (20%) |
| 2026-10-31 | 243 | 58 (23%) | 58 (23%) | 37 (15%) |
| 2026-10-30 | 256 | 59 (23%) | 59 (23%) | 41 (16%) |
| 2026-10-29 | 301 | 46 (15%) | 46 (15%) | 31 (10%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-04 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-11-03 | 3 | 4 | 3 | 5 | 5 | 2 | 22 |
| 2026-11-02 | 1 | 4 | 3 | 5 | 4 | 3 | 20 |
| 2026-11-01 | 1 | 4 | 3 | 5 | 5 | 3 | 21 |
| 2026-10-31 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2442 |
| The Rundown AI | `email` | 464 |
| TechCrunch AI | `rss` | 274 |
| The Decoder | `rss` | 206 |
| The Verge AI | `rss` | 170 |
| Hacker News (points) | `rss` | 169 |
| AlphaSignal | `email` | 159 |
| Hermes Agent releases | `rss` | 105 |
| r/LocalLLaMA | `reddit` | 86 |
| OpenClaw releases | `rss` | 78 |
| OpenAI blog | `rss` | 75 |
| HF Daily Papers | `rss` | 74 |
| Help Net Security AI | `rss` | 72 |
| @emollick.bsky.social | `bsky` | 66 |
| AINews | `email` | 66 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 68069 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

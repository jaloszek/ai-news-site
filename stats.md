<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-02 03:40 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 3300
- **Enriched:** 669 (20%)
- **Taste-rated:** 668 (20%)
- **Researched:** 465 (14%)
- **Status (candidate / rejected / published / duplicate):** 996 / 2304 / 0 / 0
- **Published bullets (all-time):** 3838 (last 7d: 178)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-02 | 94 | 40 (42%) | 40 (42%) | 22 (23%) |
| 2026-11-01 | 102 | 37 (36%) | 37 (36%) | 21 (20%) |
| 2026-10-31 | 243 | 58 (23%) | 58 (23%) | 36 (14%) |
| 2026-10-30 | 256 | 59 (23%) | 59 (23%) | 41 (16%) |
| 2026-10-29 | 301 | 46 (15%) | 46 (15%) | 31 (10%) |
| 2026-10-28 | 292 | 51 (17%) | 51 (17%) | 38 (13%) |
| 2026-10-27 | 332 | 64 (19%) | 64 (19%) | 50 (15%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-02 | 1 | 4 | 3 | 5 | 4 | 3 | 20 |
| 2026-11-01 | 1 | 4 | 3 | 5 | 5 | 3 | 21 |
| 2026-10-31 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-10-30 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-29 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-28 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-27 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-10-26 | 3 | 5 | 3 | 5 | 3 | 0 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2379 |
| The Rundown AI | `email` | 445 |
| TechCrunch AI | `rss` | 256 |
| The Decoder | `rss` | 203 |
| Hacker News (points) | `rss` | 172 |
| The Verge AI | `rss` | 162 |
| AlphaSignal | `email` | 145 |
| Hermes Agent releases | `rss` | 97 |
| r/LocalLLaMA | `reddit` | 89 |
| AINews | `email` | 74 |
| OpenClaw releases | `rss` | 74 |
| HF Daily Papers | `rss` | 70 |
| Help Net Security AI | `rss` | 69 |
| Codex releases | `rss` | 66 |
| OpenAI blog | `rss` | 64 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 67453 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

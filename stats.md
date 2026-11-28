<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-28 05:39 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2239
- **Enriched:** 567 (25%)
- **Taste-rated:** 567 (25%)
- **Researched:** 382 (17%)
- **Status (candidate / rejected / published / duplicate):** 869 / 1370 / 0 / 0
- **Published bullets (all-time):** 4383 (last 7d: 148)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-28 | 130 | 24 (18%) | 24 (18%) | 14 (10%) |
| 2026-11-27 | 143 | 38 (26%) | 38 (26%) | 27 (18%) |
| 2026-11-26 | 149 | 43 (28%) | 43 (28%) | 26 (17%) |
| 2026-11-25 | 216 | 37 (17%) | 37 (17%) | 25 (11%) |
| 2026-11-24 | 231 | 45 (19%) | 45 (19%) | 33 (14%) |
| 2026-11-23 | 83 | 25 (30%) | 25 (30%) | 16 (19%) |
| 2026-11-22 | 82 | 23 (28%) | 23 (28%) | 14 (17%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-28 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-27 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-26 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-25 | 3 | 5 | 3 | 0 | 5 | 1 | 17 |
| 2026-11-24 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-23 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-11-22 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-21 | 3 | 4 | 3 | 1 | 5 | 3 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 860 |
| The Rundown AI | `email` | 415 |
| TechCrunch AI | `rss` | 287 |
| The Decoder | `rss` | 218 |
| Hacker News (points) | `rss` | 195 |
| The Verge AI | `rss` | 176 |
| AlphaSignal | `email` | 143 |
| OpenClaw releases | `rss` | 113 |
| OpenAI blog | `rss` | 90 |
| HF Daily Papers | `rss` | 85 |
| Hermes Agent releases | `rss` | 85 |
| Codex releases | `rss` | 78 |
| @emollick.bsky.social | `bsky` | 65 |
| Copilot CLI releases | `rss` | 60 |
| Qwen Code releases | `rss` | 59 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69523 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

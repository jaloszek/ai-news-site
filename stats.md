<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-26 06:13 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2399
- **Enriched:** 625 (26%)
- **Taste-rated:** 625 (26%)
- **Researched:** 426 (17%)
- **Status (candidate / rejected / published / duplicate):** 679 / 1720 / 0 / 0
- **Published bullets (all-time):** 4345 (last 7d: 156)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-26 | 149 | 26 (17%) | 26 (17%) | 17 (11%) |
| 2026-11-25 | 216 | 34 (15%) | 34 (15%) | 25 (11%) |
| 2026-11-24 | 231 | 45 (19%) | 45 (19%) | 31 (13%) |
| 2026-11-23 | 83 | 25 (30%) | 25 (30%) | 16 (19%) |
| 2026-11-22 | 82 | 23 (28%) | 23 (28%) | 14 (17%) |
| 2026-11-21 | 176 | 72 (40%) | 72 (40%) | 49 (27%) |
| 2026-11-20 | 193 | 52 (26%) | 52 (26%) | 29 (15%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-26 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-25 | 3 | 5 | 3 | 0 | 5 | 1 | 17 |
| 2026-11-24 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-23 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-11-22 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-21 | 3 | 4 | 3 | 1 | 5 | 3 | 19 |
| 2026-11-20 | 3 | 4 | 3 | 4 | 5 | 3 | 22 |
| 2026-11-19 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1021 |
| The Rundown AI | `email` | 436 |
| TechCrunch AI | `rss` | 311 |
| The Decoder | `rss` | 221 |
| Hacker News (points) | `rss` | 193 |
| The Verge AI | `rss` | 191 |
| AlphaSignal | `email` | 152 |
| OpenClaw releases | `rss` | 111 |
| OpenAI blog | `rss` | 96 |
| HF Daily Papers | `rss` | 88 |
| Codex releases | `rss` | 84 |
| Hermes Agent releases | `rss` | 83 |
| @emollick.bsky.social | `bsky` | 70 |
| Qwen Code releases | `rss` | 63 |
| Copilot CLI releases | `rss` | 56 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69696 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

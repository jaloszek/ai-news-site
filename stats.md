<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-27 06:05 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2317
- **Enriched:** 604 (26%)
- **Taste-rated:** 604 (26%)
- **Researched:** 404 (17%)
- **Status (candidate / rejected / published / duplicate):** 739 / 1578 / 0 / 0
- **Published bullets (all-time):** 4364 (last 7d: 151)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-27 | 143 | 36 (25%) | 36 (25%) | 23 (16%) |
| 2026-11-26 | 149 | 37 (24%) | 37 (24%) | 23 (15%) |
| 2026-11-25 | 216 | 37 (17%) | 37 (17%) | 25 (11%) |
| 2026-11-24 | 231 | 45 (19%) | 45 (19%) | 33 (14%) |
| 2026-11-23 | 83 | 25 (30%) | 25 (30%) | 16 (19%) |
| 2026-11-22 | 82 | 23 (28%) | 23 (28%) | 14 (17%) |
| 2026-11-21 | 176 | 72 (40%) | 72 (40%) | 49 (27%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-27 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-26 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-25 | 3 | 5 | 3 | 0 | 5 | 1 | 17 |
| 2026-11-24 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-23 | 1 | 5 | 3 | 0 | 5 | 3 | 17 |
| 2026-11-22 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-21 | 3 | 4 | 3 | 1 | 5 | 3 | 19 |
| 2026-11-20 | 3 | 4 | 3 | 4 | 5 | 3 | 22 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 935 |
| The Rundown AI | `email` | 441 |
| TechCrunch AI | `rss` | 300 |
| The Decoder | `rss` | 219 |
| Hacker News (points) | `rss` | 194 |
| The Verge AI | `rss` | 185 |
| AlphaSignal | `email` | 147 |
| OpenClaw releases | `rss` | 108 |
| OpenAI blog | `rss` | 93 |
| HF Daily Papers | `rss` | 88 |
| Hermes Agent releases | `rss` | 83 |
| Codex releases | `rss` | 80 |
| @emollick.bsky.social | `bsky` | 65 |
| Qwen Code releases | `rss` | 62 |
| Copilot CLI releases | `rss` | 56 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69669 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

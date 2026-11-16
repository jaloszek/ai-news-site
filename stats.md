<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-16 04:08 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2600
- **Enriched:** 666 (25%)
- **Taste-rated:** 666 (25%)
- **Researched:** 441 (16%)
- **Status (candidate / rejected / published / duplicate):** 854 / 1746 / 0 / 0
- **Published bullets (all-time):** 4146 (last 7d: 183)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-16 | 107 | 34 (31%) | 34 (31%) | 23 (21%) |
| 2026-11-15 | 111 | 36 (32%) | 36 (32%) | 20 (18%) |
| 2026-11-14 | 208 | 69 (33%) | 69 (33%) | 42 (20%) |
| 2026-11-13 | 225 | 71 (31%) | 71 (31%) | 53 (23%) |
| 2026-11-12 | 203 | 48 (23%) | 48 (23%) | 29 (14%) |
| 2026-11-11 | 242 | 53 (21%) | 53 (21%) | 35 (14%) |
| 2026-11-10 | 246 | 50 (20%) | 50 (20%) | 31 (12%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-16 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-11-15 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-14 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-13 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-12 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-11-11 | 3 | 5 | 3 | 4 | 5 | 3 | 23 |
| 2026-11-10 | 3 | 5 | 3 | 4 | 3 | 1 | 19 |
| 2026-11-09 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1494 |
| The Rundown AI | `email` | 374 |
| TechCrunch AI | `rss` | 270 |
| The Decoder | `rss` | 209 |
| Hacker News (points) | `rss` | 189 |
| The Verge AI | `rss` | 174 |
| AlphaSignal | `email` | 146 |
| OpenClaw releases | `rss` | 86 |
| OpenAI blog | `rss` | 83 |
| Hermes Agent releases | `rss` | 81 |
| r/LocalLLaMA | `reddit` | 81 |
| HF Daily Papers | `rss` | 78 |
| Codex releases | `rss` | 74 |
| Qwen Code releases | `rss` | 70 |
| @emollick.bsky.social | `bsky` | 66 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 68771 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

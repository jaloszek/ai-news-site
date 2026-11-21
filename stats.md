<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-21 05:15 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2518
- **Enriched:** 646 (25%)
- **Taste-rated:** 646 (25%)
- **Researched:** 439 (17%)
- **Status (candidate / rejected / published / duplicate):** 987 / 1531 / 0 / 0
- **Published bullets (all-time):** 4254 (last 7d: 178)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-21 | 176 | 35 (19%) | 35 (19%) | 26 (14%) |
| 2026-11-20 | 193 | 41 (21%) | 41 (21%) | 27 (13%) |
| 2026-11-19 | 180 | 40 (22%) | 40 (22%) | 29 (16%) |
| 2026-11-18 | 191 | 36 (18%) | 36 (18%) | 26 (13%) |
| 2026-11-17 | 247 | 61 (24%) | 61 (24%) | 49 (19%) |
| 2026-11-16 | 107 | 35 (32%) | 35 (32%) | 25 (23%) |
| 2026-11-15 | 111 | 36 (32%) | 36 (32%) | 20 (18%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-21 | 3 | 4 | 3 | 1 | 5 | 3 | 19 |
| 2026-11-20 | 3 | 4 | 3 | 4 | 5 | 3 | 22 |
| 2026-11-19 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-17 | 2 | 5 | 3 | 5 | 1 | 3 | 19 |
| 2026-11-16 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-11-15 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-14 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1308 |
| The Rundown AI | `email` | 415 |
| TechCrunch AI | `rss` | 298 |
| The Decoder | `rss` | 214 |
| The Verge AI | `rss` | 195 |
| Hacker News (points) | `rss` | 188 |
| AlphaSignal | `email` | 154 |
| OpenAI blog | `rss` | 100 |
| OpenClaw releases | `rss` | 98 |
| HF Daily Papers | `rss` | 87 |
| Codex releases | `rss` | 83 |
| Hermes Agent releases | `rss` | 81 |
| r/LocalLLaMA | `reddit` | 71 |
| @emollick.bsky.social | `bsky` | 69 |
| Qwen Code releases | `rss` | 66 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69272 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-07 04:31 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2877
- **Enriched:** 616 (21%)
- **Taste-rated:** 616 (21%)
- **Researched:** 414 (14%)
- **Status (candidate / rejected / published / duplicate):** 1069 / 1808 / 0 / 0
- **Published bullets (all-time):** 3942 (last 7d: 167)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-07 | 213 | 17 (7%) | 17 (7%) | 7 (3%) |
| 2026-11-06 | 235 | 44 (18%) | 44 (18%) | 28 (11%) |
| 2026-11-05 | 184 | 40 (21%) | 40 (21%) | 34 (18%) |
| 2026-11-04 | 215 | 45 (20%) | 45 (20%) | 28 (13%) |
| 2026-11-03 | 222 | 49 (22%) | 49 (22%) | 35 (15%) |
| 2026-11-02 | 94 | 42 (44%) | 42 (44%) | 24 (25%) |
| 2026-11-01 | 102 | 37 (36%) | 37 (36%) | 21 (20%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-07 | 3 | 5 | 3 | 5 | 1 | 0 | 17 |
| 2026-11-06 | 3 | 5 | 3 | 5 | 5 | 0 | 21 |
| 2026-11-05 | 3 | 5 | 3 | 5 | 2 | 3 | 21 |
| 2026-11-04 | 3 | 5 | 3 | 5 | 5 | 2 | 23 |
| 2026-11-03 | 3 | 4 | 3 | 5 | 5 | 2 | 22 |
| 2026-11-02 | 1 | 4 | 3 | 5 | 4 | 3 | 20 |
| 2026-11-01 | 1 | 4 | 3 | 5 | 5 | 3 | 21 |
| 2026-10-31 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 2182 |
| The Rundown AI | `email` | 466 |
| TechCrunch AI | `rss` | 274 |
| The Decoder | `rss` | 204 |
| The Verge AI | `rss` | 176 |
| Hacker News (points) | `rss` | 172 |
| AlphaSignal | `email` | 160 |
| Hermes Agent releases | `rss` | 104 |
| r/LocalLLaMA | `reddit` | 85 |
| OpenAI blog | `rss` | 80 |
| OpenClaw releases | `rss` | 80 |
| HF Daily Papers | `rss` | 78 |
| Help Net Security AI | `rss` | 71 |
| Qwen Code releases | `rss` | 67 |
| Codex releases | `rss` | 65 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 67941 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

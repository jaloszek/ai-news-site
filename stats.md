<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-11-22 04:12 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (in retention window):** 2504
- **Enriched:** 658 (26%)
- **Taste-rated:** 658 (26%)
- **Researched:** 437 (17%)
- **Status (candidate / rejected / published / duplicate):** 822 / 1682 / 0 / 0
- **Published bullets (all-time):** 4273 (last 7d: 173)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-11-22 | 82 | 20 (24%) | 20 (24%) | 11 (13%) |
| 2026-11-21 | 176 | 54 (30%) | 54 (30%) | 37 (21%) |
| 2026-11-20 | 193 | 52 (26%) | 52 (26%) | 29 (15%) |
| 2026-11-19 | 180 | 40 (22%) | 40 (22%) | 29 (16%) |
| 2026-11-18 | 191 | 36 (18%) | 36 (18%) | 26 (13%) |
| 2026-11-17 | 247 | 61 (24%) | 61 (24%) | 49 (19%) |
| 2026-11-16 | 107 | 35 (32%) | 35 (32%) | 25 (23%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-22 | 3 | 5 | 3 | 0 | 5 | 3 | 19 |
| 2026-11-21 | 3 | 4 | 3 | 1 | 5 | 3 | 19 |
| 2026-11-20 | 3 | 4 | 3 | 4 | 5 | 3 | 22 |
| 2026-11-19 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-18 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| 2026-11-17 | 2 | 5 | 3 | 5 | 1 | 3 | 19 |
| 2026-11-16 | 3 | 5 | 3 | 5 | 3 | 3 | 22 |
| 2026-11-15 | 3 | 5 | 3 | 5 | 5 | 3 | 24 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| TLDR | `email` | 1199 |
| The Rundown AI | `email` | 399 |
| TechCrunch AI | `rss` | 289 |
| The Decoder | `rss` | 214 |
| Hacker News (points) | `rss` | 189 |
| The Verge AI | `rss` | 187 |
| AlphaSignal | `email` | 147 |
| OpenClaw releases | `rss` | 98 |
| OpenAI blog | `rss` | 97 |
| HF Daily Papers | `rss` | 83 |
| Codex releases | `rss` | 79 |
| Hermes Agent releases | `rss` | 78 |
| @emollick.bsky.social | `bsky` | 70 |
| r/LocalLLaMA | `reddit` | 68 |
| Qwen Code releases | `rss` | 66 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 69366 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

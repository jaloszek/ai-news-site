<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-09 02:23 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 20499
- **Enriched:** 3922 (19%)
- **Taste-rated:** 3267 (15%)
- **Researched:** 977 (4%)
- **Status (candidate / rejected / published / duplicate):** 2276 / 18223 / 0 / 0
- **Published bullets (all-time):** 1350 (last 7d: 159)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-09 | 90 | 33 (36%) | 33 (36%) | 18 (20%) |
| 2026-07-08 | 1764 | 109 (6%) | 109 (6%) | 73 (4%) |
| 2026-07-07 | 261 | 22 (8%) | 22 (8%) | 16 (6%) |
| 2026-07-06 | 77 | 15 (19%) | 15 (19%) | 11 (14%) |
| 2026-07-05 | 84 | 22 (26%) | 22 (26%) | 18 (21%) |
| 2026-07-04 | 636 | 36 (5%) | 36 (5%) | 17 (2%) |
| 2026-07-03 | 664 | 34 (5%) | 34 (5%) | 14 (2%) |
| 2026-07-02 | 790 | 32 (4%) | 32 (4%) | 18 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Community | Total |
|---|---:|---:|---:|---:|---:|
| 2026-07-09 | 5 | 5 | 3 | 5 | 26 |
| 2026-07-08 | 5 | 11 | 5 | 7 | 41 |
| 2026-07-07 | 4 | 2 | 3 | 3 | 15 |
| 2026-07-06 | 0 | 2 | 3 | 4 | 12 |
| 2026-07-05 | 2 | 4 | 3 | 6 | 18 |
| 2026-07-04 | 5 | 3 | 3 | 2 | 14 |
| 2026-07-03 | 4 | 5 | 3 | 2 | 14 |
| 2026-07-02 | 3 | 5 | 3 | 5 | 19 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5683 |
| arXiv cs.CL | `rss` | 3046 |
| /r/LocalLLaMA | `reddit` | 97 |
| TechCrunch AI | `rss` | 79 |
| The Decoder | `rss` | 77 |
| Hacker News (ai/llm/claude) | `rss` | 75 |
| /r/LangChain | `reddit` | 70 |
| /r/LocalLLM | `reddit` | 68 |
| /r/Anthropic | `reddit` | 63 |
| /r/Artificial | `reddit` | 61 |
| /r/ChatGPT | `reddit` | 61 |
| /r/MachineLearning | `reddit` | 61 |
| /r/ClaudeHomies | `reddit` | 47 |
| /r/OpenAI | `reddit` | 47 |
| OpenAI blog | `rss` | 43 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 18220 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

<!-- date: stats dashboard -->

<div class="daily-nav daily-nav-dev"><a href="index.html">← index</a> &nbsp;·&nbsp; <a href="state-of-ai.html">🌐 state of AI</a> &nbsp;·&nbsp; <a href="sources.html">📚 sources</a></div>

# AI News — Stats

_Generated 2026-07-11 02:01 UTC. Snapshot of the daily ingestion + enrichment + publication pipeline._

## At a glance

- **Discovery items (all-time):** 21661
- **Enriched:** 3988 (18%)
- **Taste-rated:** 3332 (15%)
- **Researched:** 1029 (4%)
- **Status (candidate / rejected / published / duplicate):** 3277 / 18384 / 0 / 0
- **Published bullets (all-time):** 1397 (last 7d: 173)


## Ingestion & enrichment (last 7 days)

Daily throughput from scanners through the pipeline. **Enriched** = body written by `/enrich-bullets`. **Taste-rated** = scored 0.0-1.0 by `/taste-bullets`. **Researched** = body rewritten by `/research-bullets` (skipped items where research adds nothing useful are not counted).

| Date | Scanned | Enriched | Taste-rated | Researched |
|---|---:|---:|---:|---:|
| 2026-07-11 | 484 | 30 (6%) | 29 (5%) | 19 (3%) |
| 2026-07-10 | 678 | 36 (5%) | 36 (5%) | 27 (3%) |
| 2026-07-09 | 90 | 33 (36%) | 33 (36%) | 20 (22%) |
| 2026-07-08 | 1764 | 109 (6%) | 109 (6%) | 77 (4%) |
| 2026-07-07 | 261 | 22 (8%) | 22 (8%) | 16 (6%) |
| 2026-07-06 | 77 | 15 (19%) | 15 (19%) | 11 (14%) |
| 2026-07-05 | 84 | 22 (26%) | 22 (26%) | 18 (21%) |
| 2026-07-04 | 636 | 36 (5%) | 36 (5%) | 17 (2%) |


## Published (last 7 days)

What the picker actually shipped to the site, by section.

| Date | Coding Agents | AI World | YouTube | Reddit | Community | Newsletters | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-07-11 | 5 | 5 | 3 | 5 | 5 | 0 | 23 |
| 2026-07-10 | 5 | 5 | 3 | 5 | 5 | 1 | 24 |
| 2026-07-09 | 5 | 5 | 3 | 5 | 5 | 3 | 26 |
| 2026-07-08 | 5 | 11 | 5 | 7 | 7 | 6 | 41 |
| 2026-07-07 | 4 | 2 | 3 | 0 | 3 | 3 | 15 |
| 2026-07-06 | 0 | 2 | 3 | 0 | 4 | 3 | 12 |
| 2026-07-05 | 2 | 4 | 3 | 0 | 6 | 3 | 18 |
| 2026-07-04 | 5 | 3 | 3 | 0 | 2 | 1 | 14 |


## Top creators (last 30 days)

Sources contributing the most items into the discovery pool. Subreddits dominate today; YouTube channels and RSS feeds will rise as more sources land in `data/ai_channels.txt` / `data/rss_feeds.txt`.

| Creator | Source | Items (30d) |
|---|---|---:|
| arXiv cs.AI | `rss` | 5060 |
| arXiv cs.CL | `rss` | 2716 |
| TechCrunch AI | `rss` | 104 |
| /r/LocalLLaMA | `reddit` | 97 |
| The Decoder | `rss` | 87 |
| /r/LangChain | `reddit` | 70 |
| /r/LocalLLM | `reddit` | 68 |
| Hacker News (ai/llm/claude) | `rss` | 66 |
| /r/MachineLearning | `reddit` | 62 |
| /r/Anthropic | `reddit` | 60 |
| /r/Artificial | `reddit` | 58 |
| /r/ChatGPT | `reddit` | 58 |
| Cline releases | `rss` | 48 |
| /r/ClaudeHomies | `reddit` | 43 |
| OpenAI blog | `rss` | 42 |


## Rejection reasons (all-time)

What got filtered out before reaching the picker. `stale` is the auto-reject for items >72h since first-seen (`scripts/db/cleanup.py`).

| Reason | Count |
|---|---:|
| `stale` | 18381 |
| `off_topic` | 3 |


---

_Reference pages: [state of AI](state-of-ai.html) · [sources](sources.html) · [index](index.html)_

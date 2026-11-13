<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 8 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Stamp convention: every data row (table row or bullet) ends with `_(as of YYYY-MM-DD)_` —
     the date of the published bullet that grounds/verifies it, or the date it was last
     reviewed and left unchanged. `scripts/db/state_staleness.py` flags rows whose stamp is
     older than 21 days so `/update-state-of-ai` knows which rows are due for a re-check. -->
<!-- Last updated: 2026-11-13 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Claude Fable 5.2 | 2026-11-10 | AA 65; Remote Labor Index 41% vs Opus 5.5 21.25%, Astra 20.83%; $8/$40/M, output 30% faster _(as of 2026-11-11)_ |
| Anthropic | Claude Opus 5.5 | 2026-09-23 | Matches Fable 5.1, ~40% cheaper than Opus 5 at $4/$20/M; AA 58, behind Fable 5.2's 65; Sonnet 5.5 shipped 09-29 at $2/$10/M, Terminal-Bench 4.0 70.6 _(as of 2026-11-10)_ |
| Meta | Muse Ember | 2026-11-09 | $0.10/$0.50/M, cheapest Muse; text, image, audio; fourth Muse; Wonder plans, Ember handles volume _(as of 2026-11-11)_ |
| OpenAI | GPT-6 Astra | 2026-09-03 | $10/$50/M; Epoch ranks it 1st at 169; AA puts it behind Fable 5.1; Terminal-Bench 57.9 vs Sol 37.3 _(as of 2026-10-24)_ |
| OpenAI | GPT-6.1 Terra | 2026-10-27 | $1/$5/M, $0.05 cached; AA 48 from 42; Terminal-Bench 4.0 50.3 from 21.5; Sol/Luna keep $2/$10, $0.10/$0.50 _(as of 2026-10-27)_ |
| Google | Gemini 4 Argon | 2026-10-01 | Epoch 166, ties Fable 5.1; DeepSWE 77.9 vs Opus 5.5's 74.2; 1M output; $2/$10 intro; hallucinations down >2/3 _(as of 2026-10-28)_ |
| Google | Gemini 4 Carbon | 2026-10-29 | GA; AA 59; leads CursorBench 4.0, WANDR, AutomationBench at <half Fable 5.2's cost; $2/$10 intro _(as of 2026-11-11)_ |
| Meta | Muse Wonder Full | 2026-10-13 | AA 56 from Spark 1.3's 48; Terminal-Bench 4.0 57% from 33; $4/$20/M; Muse Code subscribers only _(as of 2026-11-04)_ |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Kimi K3.1 Pro (Moonshot) | 2.8T MoE, 104B active | K3.1 Pro 4th on AA at 55, 3 behind Opus 5.5; 1M ctx; $2/$10, down from $3/$15; open weights shipped 11-04 _(as of 2026-11-06)_ |
| GLM-5.3 (Z.ai) | 753B MoE / 40B active | Weights 08-28; Epoch: built Firefox exploits from published-but-unshipped fixes, six releases 09-17 to 10-26; top open-weight on offense _(as of 2026-11-01)_ |
| Qwen3.8-27B | 27B dense | Weight edit cuts thinking 27-54%, LiveCodeBench v6 +13.0; Arete cuts propaganda 22% to 1%; DSpine 125 tok/s on RTX 3090 _(as of 2026-11-12)_ |
| ERNIE 5.5 Flash Base (Baidu) | 280B MoE / 14B active | Open weights; 33.5T pretrain tokens; 1M ctx for fine-tune/inference; FP8 and BF16 on HF _(as of 2026-11-07)_ |
| DeepSeek V4.1-Flash-1017 | 763B, 8B prefill / 16B decode | Open weights, MIT; 1M ctx; Terminal-Bench 4.0 42.3 from 31.2; DeepSWE v1.1 77.0 from 74.2; Maya GGUF 339.5GB IQ2_XXS _(as of 2026-10-23)_ |
| Flint (Recursive) | 40B MoE / 2.5B active | Apache 2.0; 125+ tok/s on an M4 Pro, 150+ on a 64GB RTX Spark; 512K ctx; built in under four months _(as of 2026-10-23)_ |
| Le Chonk (Mistral) | 1T MoE / 49B active | Open weights; multimodal text+image; 1M ctx; FrontierCode 2.0 19.7% first open; 82% Cyber Index; Coding Agent Index 49.8% _(as of 2026-10-31)_ |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.322 extends Vertex AI fast mode to global/us/eu; v2.1.321 made Fable 5.2 default with 1M ctx, $0.20 cache reads _(as of 2026-11-11)_ |
| Codex CLI | OpenAI | v0.167.2 sends tool updates incrementally on Vertex AI by default _(as of 2026-11-12)_ |
| OpenCode | anomalyco | v2.2.6 adds MCP pooling; Browse drives real tabs/logins via Chromium plus MCP; run -w starts in a new worktree _(as of 2026-11-11)_ |
| Cursor | SpaceX | Acquired for $60B; cloud agents scaffold/deploy/host live apps (Postgres, SSO) from Origin or GitHub; OpenAI cuts its models off Nov 12; iOS Remote Control for local agents _(as of 2026-11-06)_ |
| Also current | various | Pi 1.5.0, Cline 4.1.26, Qwen Code 0.27.1, OpenHands 1.38.0, Goose 1.53.0, Gemini CLI 0.67.0, Copilot CLI 1.0.109-1, OpenClaw 2026.10.10; JetBrains Air 2026.3 _(as of 2026-11-12)_ |
| Microsoft Copilot | Microsoft | Split into Home, Code and Autopilot; Autopilot rides OpenClaw with its own cloud computer, billed in Copilot Credits _(as of 2026-11-10)_ |

## Infrastructure / inference

- Nvidia's $12.93B Hugging Face buy faces a DOJ probe over open-model distribution _(as of 2026-10-31)_
- Anthropic compute: $517B in 11 mo, trailing OpenAI's $750B thru 2030; AMD $5B/2GW MI450; Mythos moved Claude to AMD in 3 days _(as of 2026-11-12)_

## Agent patterns / frameworks

- Dream-RSI (Google DeepMind): an agent reuses its recorded search history as an offline simulator to test exploration policies, cutting iterations up to 2.43x and agent calls up to 162x _(as of 2026-11-03)_
- Harness² (Google, Apache-2.0 v0.1.0): frozen agent edits its own harness; session failures become offline tests, 9/9 at 0 calls; GLM-5 64.2 to 75.7 WorkBuddy-Bench _(as of 2026-11-11)_
- Planner/worker split: Cursor's swarm rebuilt SQLite in Rust from docs; with planners separated from workers every config hit 100% on tests _(as of 2026-11-13)_
- Anthropic: one context-loading agent ran ~2x faster than specialized subagent fleets; handoffs add latency and cost _(as of 2026-10-27)_
- Memdoor team-solve: five Qwen3.8-27B agents beat Fable 5 on LiveCodeBench Hard, 9.8 vs 8.0; 49/50 runs, 15.3M output tokens, $35.79 _(as of 2026-11-02)_

## Safety / alignment

- OpenAI's GPT-6 Cyber patched 948 Linux kernel root exploits in one run; found 81 Firefox flaws; ExploitGym 48.5 from 32.1 _(as of 2026-11-09)_
- Eval sandbox escapes: OpenAI trains offline after a DNS-resolver escape; microVMs swapped secrets via CPU-cache timing; Firecracker v1.16.1 guest-to-host root _(as of 2026-11-09)_
- Anthropic Sept threat report: Russian actor used Claude Code skills for self-rebuilding malware; Yemeni missile guidance; ~25M-SIM surveillance _(as of 2026-10-26)_
- METR's 11-week probe inside Anthropic: models improving roughly twice as fast as a year ago; three unreleased models; 12x self-reported productivity _(as of 2026-11-08)_
- GPT-6 Astra is the first model OpenAI rates Critical for cyber; it paused RL training and its largest planned frontier run _(as of 2026-11-13)_
- Prompt injection: Opus 5 hits 0% across 129 browser scenarios; Astra blocks 99.99% direct but 8.5% of document-embedded vs Opus 5's 4.8% _(as of 2026-11-13)_
- litellm 1.107.0 on PyPI/Docker shipped an infostealer and backdoor via cook.pth and sitecustomize.py; 1.106.2 is clean and PyPI quarantined it in under 2h _(as of 2026-10-23)_
- OpenAI disrupted a coordinated distillation campaign tied to Moonshot AI: operators copied encrypted reasoning and had another model decrypt it, peaking at 16,000 requests from 4,000+ users July 24-25; a 15,000-user cluster shut by July 28 _(as of 2026-10-23)_
- Ransomware crew GOLD OGRE ran break-ins through Cursor agents, handing them VPN logins and SOCKS5 proxies; three victims hit Aur0ra's leak site _(as of 2026-11-03)_
- Claude Code 2.1.312/2.1.313 on Cursor's marketplace planted an svc-telemetry SSH key on up to 5,000 machines in 11 hours; uninstall leaves artifacts _(as of 2026-11-01)_
- Eclypsium changed a running model's weights in memory while file hash and signature stayed valid, via a compromised DPU on Grace Hopper _(as of 2026-11-02)_

## Community / industry trends

- Anthropic: Claude now leads 26% of its own model-development work, up from under 1% in February; 30,000 agents run R&D internally; its self-scores matched human raters 59% _(as of 2026-11-05)_
- Anthropic filed an S-1 for a Nasdaq IPO under ticker ANT; price unset _(as of 2026-10-27)_
- ChatGPT merges Chat and Work in December; Plus, Pro and Business share one ChatGPT-and-Codex token budget; Unlimited Instant exempt _(as of 2026-11-02)_

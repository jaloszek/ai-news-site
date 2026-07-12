<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 8 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Stamp convention: every data row (table row or bullet) ends with `_(as of YYYY-MM-DD)_` —
     the date of the published bullet that grounds/verifies it, or the date it was last
     reviewed and left unchanged. `scripts/db/state_staleness.py` flags rows whose stamp is
     older than 21 days so `/update-state-of-ai` knows which rows are due for a re-check. -->
<!-- Last updated: 2026-07-12 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Claude Fable 5 | 2026-07-08 | Opus-tier successor to Opus 4.8; swept all six new Artifacts benchmarks; steep premium pricing _(as of 2026-07-09)_ |
| Anthropic | Claude Sonnet 5 | 2026-07-01 | Now the default model in Claude Code v2.1.197+; native 1M ctx; $2/$10 promo pricing through Aug 31 2026 _(as of 2026-07-01)_ |
| Anthropic | Opus 4.8 | 2026-05-29 | SWE-Bench Pro 69.2%; 2.5× fast mode; dynamic workflows w/ parallel subagents; now Anthropic's mid-tier under Fable 5 _(as of 2026-07-08)_ |
| OpenAI | GPT-5.6 (Sol/Terra/Luna) | 2026-07-10 | Supersedes GPT-5.5; Sol 88.8% TerminalBench 2.1, $5/$30/Mtok; Terra matches old GPT-5.5 at half cost; Luna is the small tier _(as of 2026-07-11)_ |
| xAI | Grok 4.5 | 2026-07-08 | First model release under SpaceXAI (post-Cursor-acquisition); "Opus-class" per Elon; 1.5T params; $2/$6 per Mtok; 64.7% SWE-Bench Pro _(as of 2026-07-10)_ |
| Google | Gemini 3.6 | 2026-06-08 | Ships via Antigravity 3.0; agent team-up (multi-agent) mode, workbench UI, low-thinking-effort option _(as of 2026-06-08)_ |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| GLM-5.2 (Z.ai) | 744B MoE | Supersedes GLM-5.1 as leading open-weights; MIT-licensed; 62.1% SWE-Bench Pro; runs on 25GB RAM consumer machine per r/LocalLLaMA _(as of 2026-07-11)_ |
| Kimi K2.7 Code (Moonshot) | 1T MoE / 32B active | Supersedes K2.6; 30% fewer thinking tokens; beats Opus 4.8 on MCP tool-use (81.1 vs 76.4) _(as of 2026-06-16)_ |
| Qwen3.6 | 27B / 35B / Max-Preview | 27B: 59.3% Terminal-Bench 2.0; 35B preferred; 260K ctx; 1000 tps on V100s _(as of 2026-05-30)_ |
| DeepSeek V4 | 1.6T MoE | FP4 QAT from training start; 9.5x lower VRAM vs V3 _(as of 2026-05-30)_ |
| Gemma 4 E4B/27B | 4B-27B | Google; E4B ~200ms TTFT on Jetson Orin NX 16GB _(as of 2026-05-30)_ |
| MiMo-V2.5-coder | OSS | New open-source coding model; strong coding benchmarks _(as of 2026-05-30)_ |
| LLaVA-OneVision-2 | OSS vision | Beats Qwen3-VL by 44 points; codec-stream tokenization _(as of 2026-05-30)_ |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.207; auto mode now default on Bedrock/Vertex AI/Foundry (no env-var opt-in); terminal no longer freezes on long streaming responses _(as of 2026-07-11)_ |
| Codex CLI | OpenAI | v0.144.1; now defaults to GPT-5.6; fixes standalone installs on compact release metadata _(as of 2026-07-11)_ |
| Antigravity 3.0 | Google | Supersedes 2.0; Gemini 3.6 support, agent team-up mode, workbench UI, low-thinking-effort option _(as of 2026-06-08)_ |
| Antigravity CLI | Google | GA 2026-05-25; free terminal AI agent _(as of 2026-05-30)_ |
| Claude Managed Agents | Anthropic | Self-hosted sandboxes (beta); MCP tunnels (preview) _(as of 2026-05-30)_ |
| Claude for Small Business | Anthropic | GA 2026-05-13; 15 agentic workflows _(as of 2026-05-30)_ |
| Stainless (acq. Anthropic) | Anthropic | Acquired 2026-05-19; SDK generator; hosted service winds down _(as of 2026-05-30)_ |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents _(as of 2026-05-30)_ |
| Devin | Cognition | $1B Series D at $26B; writes 89% of its own code _(as of 2026-05-30)_ |
| Hallmark | OSS | Routes UI gen through 22 design themes; 65 anti-pattern gates _(as of 2026-05-30)_ |

## Infrastructure / inference

- Claude Platform on AWS (GA, 2026-05-13): any AWS account; 16+ regions _(as of 2026-05-30)_
- AWS AgentCore Payments (Bedrock preview): agent-held Coinbase/Stripe wallets _(as of 2026-05-30)_
- Cerebras (2026-05-16): $60B IPO; WSE-3 wafer chips serve trillion-param models _(as of 2026-05-30)_
- llama.cpp MTP (2026-05-17): merged; 1.5×-2.9× throughput on Qwen3.6 _(as of 2026-05-30)_
- AMD Ryzen AI Halo PC: $3,999-4,000/128GB unified memory; holds 70B+ params in RAM _(as of 2026-07-07)_
- Nemotron 550B (NVIDIA): open model for long-running agents; 1M ctx; runs locally via Ollama _(as of 2026-07-05)_
- Lambda Labs GPU Cloud: H100 clusters from $1.99/hr; optimized for LLM inference _(as of 2026-05-30)_

## Agent patterns / frameworks

- MCP (Model Context Protocol) — standard tool-call wrapper _(as of 2026-05-30)_
- agentmemory (OSS): 96.2% LongMemEval; compresses session history _(as of 2026-05-30)_
- GitHub Spec Kit (97K stars, 2026-05): Specify-Plan-Tasks flow _(as of 2026-05-30)_
- Claude Code Agent Teams: enables real-time agent collaboration _(as of 2026-05-30)_
- LangGraph 0.2.0: persistent state; human-in-the-loop; 10K+ GitHub stars _(as of 2026-05-30)_
- AutoGen 0.4: conversable agents; group chat; tool calling via JSON schema _(as of 2026-05-30)_

## Safety / alignment

- Teaching Why (Anthropic): 1M-conv study; Opus 4 blackmail 96%→3% _(as of 2026-05-30)_
- White House (2026-05): blocked Mythos rollout to 70 orgs; $100M Glasswing _(as of 2026-05-30)_
- Mythos METR eval (2026-05-09): 32-step network attacks; 73% expert CTF _(as of 2026-05-30)_
- First AI zero-day (2026-05-13): LLM-authored Python 2FA bypass _(as of 2026-05-30)_
- TanStack SLSA (2026-05-14): TeamPCP used CI/CD OIDC for 84 malicious packages _(as of 2026-05-30)_
- Mythos macOS exploit (2026-05-15): root on Apple M5 in 5 days _(as of 2026-05-30)_
- "Your agent is mine" (2604.08407): 9/428 LLM API routers inject payloads _(as of 2026-05-30)_
- DeepSeek isolation (2026-05-19): crafted prompt retrieves conv history _(as of 2026-05-30)_
- Stanford AI Index 2026: 42% orgs had AI incident; avg cost $4.3M per incident _(as of 2026-05-30)_
- EU AI Act enforcement (2026-05): first fines issued for prohibited AI systems _(as of 2026-05-30)_

## Community / industry trends

- Anthropic: $65B Series H at $965B valuation; $30B ARR Q1-2026 (+233% YoY); first profitable quarter _(as of 2026-05-30)_
- Cognition: $1B Series D at $26B; Devin writes 89% of own code _(as of 2026-05-30)_
- ProgramBench (Meta/Stanford, 2026-05): ffmpeg/SQLite/ripgrep from scratch _(as of 2026-05-30)_
- China denied access to Anthropic's newest model (2026-05-13) _(as of 2026-05-30)_
- arXiv (2026-05-15): 1-year ban for LLM-error papers; 10x hallucinated cites _(as of 2026-05-30)_
- Microsoft cancelled Claude Code for Experiences+Devices, effective 2026-06-30 _(as of 2026-05-30)_
- Anthropic split `claude -p`/CI into separate credits, effective 2026-06-15 _(as of 2026-05-30)_
- Datadog 2026 survey: 69% run 3+ models; Claude +23pp enterprise share _(as of 2026-05-30)_
- OpenAI unnamed reasoning model disproves Erdős conjecture (2026-05-20) _(as of 2026-05-30)_
- KPMG deploys Claude to 276,000 employees via Digital Gateway _(as of 2026-05-30)_
- Google replaced Vertex AI with Gemini Enterprise Agent Platform (I/O 2026) _(as of 2026-05-30)_
- 74% enterprises rolled back live AI agents post-deployment (Sinch survey) _(as of 2026-05-30)_
- Karpathy joined Anthropic 2026-05-19 (pre-training) _(as of 2026-05-30)_
- NVIDIA GTC 2026: Blackwell GPU launch; sovereign AI initiatives announced _(as of 2026-05-30)_
- Hugging Face Hall of Fame: adds top 10 open-source models of 2025-2026 _(as of 2026-05-30)_
- xAI relaunched as SpaceXAI post-Cursor-acquisition; first release Grok 4.5, an "Opus-class" model _(as of 2026-07-10)_

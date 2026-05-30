<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 6 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Last updated: 2026-05-30 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Opus 4.8 | 2026-05-29 | SWE-Bench Pro 69.2%; 2.5× fast mode; dynamic workflows w/ parallel subagents |
| Anthropic | Opus 4.7 | 2026-05 GA | 1M ctx; 70% CursorBench vs 4.6 +12pp; 3× Rakuten-SWE tasks |
| Anthropic | Sonnet 4.6 | 2026-Q1 | mid-tier, default for most tools |
| OpenAI | GPT-5.5 Instant | 2026-05 | ChatGPT default; 52.5% fewer hallucinations; SWE-Bench Pro 58.6% |
| OpenAI | GPT-5.5-Cyber | 2026-05 | Security variant; EU vetted-team preview |
| Google | Gemini 3.5 Flash/Omni | 2026-05-20 | 76.2% Terminal-Bench 2.1; 4× token speed vs 3.1 Pro |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Kimi K2.6 (Moonshot) | 1T MoE | 58.6% SWE-Bench Pro; top Chinese open-source |
| Qwen3.6 | 27B / 35B / Max-Preview | 27B: 59.3% Terminal-Bench 2.0; 35B preferred; 260K ctx; 1000 tps on V100s |
| GLM-5.1 (Z.ai) | 744B MoE | topped SWE-Bench Pro at 58.4 |
| DeepSeek V4 | 1.6T MoE | FP4 QAT from training start; 9.5x lower VRAM vs V3 |
| Gemma 4 E4B/27B | 4B-27B | Google; E4B ~200ms TTFT on Jetson Orin NX 16GB |
| MiMo-V2.5-coder | OSS | new open-source coding model; strong coding benchmarks |
| LLaVA-OneVision-2 | OSS vision | beats Qwen3-VL by 44 points; codec-stream tokenization |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.157; auto plugin loading; /plugin init; /code-review --fix; /simplify |
| Claude Managed Agents | Anthropic | self-hosted sandboxes (beta); MCP tunnels (preview) |
| Claude for Small Business | Anthropic | GA 2026-05-13; 15 agentic workflows |
| Stainless (acq. Anthropic) | Anthropic | Acquired 2026-05-19; SDK generator; hosted service winds down |
| Codex CLI | OpenAI | GPT-5.5 default; AWS Bedrock auth; /goal |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents |
| Antigravity 2.0 | Google | GA 2026-05-20; desktop + Go CLI + SDK; AI Ultra $100/mo |
| Antigravity CLI | Google | GA 2026-05-25; free terminal AI agent; Gemini 3.5 Flash |
| Devin | Cognition | $1B Series D at $26B; writes 89% of its own code |
| Hallmark | OSS | routes UI gen through 22 design themes; 65 anti-pattern gates |

## Infrastructure / inference

- Claude Platform on AWS (GA, 2026-05-13): any AWS account; 16+ regions
- AWS AgentCore Payments (Bedrock preview): agent-held Coinbase/Stripe wallets
- Cerebras (2026-05-16): $60B IPO; WSE-3 wafer chips serve trillion-param models
- llama.cpp MTP (2026-05-17): merged; 1.5×-2.9× throughput on Qwen3.6
- AMD Ryzen AI Halo PC: $3,999/128GB unified memory; holds 70B+ params in RAM
- Google Antigravity CLI (2026-05-25): free Gemini 3.5 Flash access
- Nemotron Super 120B: NVIDIA model available via HuggingFace; strong coding performance
- Lambda Labs GPU Cloud: H100 clusters from $1.99/hr; optimized for LLM inference

## Agent patterns / frameworks

- MCP (Model Context Protocol) — standard tool-call wrapper
- agentmemory (OSS): 96.2% LongMemEval; compresses session history
- GitHub Spec Kit (97K stars, 2026-05): Specify-Plan-Tasks flow
- Claude Code Agent Teams: enables real-time agent collaboration
- MCP Servers with Claude Code: step-by-step tutorial
- LangGraph 0.2.0: persistent state; human-in-the-loop; 10K+ GitHub stars
- AutoGen 0.4: conversable agents; group chat; tool calling via JSON schema

## Safety / alignment

- Teaching Why (Anthropic): 1M-conv study; Opus 4 blackmail 96%→3%
- White House (2026-05): blocked Mythos rollout to 70 orgs; $100M Glasswing
- Mythos METR eval (2026-05-09): 32-step network attacks; 73% expert CTF
- First AI zero-day (2026-05-13): LLM-authored Python 2FA bypass
- TanStack SLSA (2026-05-14): TeamPCP used CI/CD OIDC for 84 malicious packages
- Mythos macOS exploit (2026-05-15): root on Apple M5 in 5 days
- "Your agent is mine" (2604.08407): 9/428 LLM API routers inject payloads
- DeepSeek isolation (2026-05-19): crafted prompt retrieves conv history
- Stanford AI Index 2026: 42% orgs had AI incident; avg cost $4.3M per incident
- EU AI Act enforcement (2026-05): first fines issued for prohibited AI systems

## Community / industry trends

- Anthropic: $65B Series H at $965B valuation; $30B ARR Q1-2026 (+233% YoY); first profitable quarter
- Cognition: $1B Series D at $26B; Devin writes 89% of own code
- ProgramBench (Meta/Stanford, 2026-05): ffmpeg/SQLite/ripgrep from scratch
- China denied access to Anthropic's newest model (2026-05-13)
- arXiv (2026-05-15): 1-year ban for LLM-error papers; 10x hallucinated cites
- Microsoft cancelled Claude Code for Experiences+Devices (June 30 2026)
- Anthropic pricing (June 15 2026): claude -p/CI to separate credits
- Datadog 2026 survey: 69% run 3+ models; Claude +23pp enterprise share
- OpenAI unnamed reasoning model disproves Erdős conjecture (2026-05-20)
- KPMG deploys Claude to 276,000 employees via Digital Gateway
- Google replaced Vertex AI with Gemini Enterprise Agent Platform (I/O 2026)
- 74% enterprises rolled back live AI agents post-deployment (Sinch survey)
- Karpathy joined Anthropic 2026-05-19 (pre-training)
- NVIDIA GTC 2026: Blackwell GPU launch; sovereign AI initiatives announced
- Hugging Face Hall of Fame: adds top 10 open-source models of 2025-2026

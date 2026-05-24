<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 6 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Last updated: 2026-05-24 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Opus 4.7 | 2026-05 GA | 1M ctx; 70% CursorBench vs 4.6 +12pp; 3× Rakuten-SWE tasks; 2576px image; xhigh effort |
| Anthropic | Sonnet 4.6 | 2026-Q1 | mid-tier, default for most tools |
| OpenAI | GPT-5.5 Instant | 2026-05 | ChatGPT default (replaces GPT-5.3 Instant); 52.5% fewer hallucinations; SWE-Bench Pro 58.6% |
| OpenAI | GPT-5.5-Cyber | 2026-05 | Security variant; EU vetted-team preview; Mythos 18/41 n-day exploits vs GPT-5.5 1/41 |
| Google | Gemini 3.5 Flash/Omni | 2026-05-20 | 76.2% Terminal-Bench 2.1; 4× token speed vs 3.1 Pro; Omni adds physics-aware video gen |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Kimi K2.6 (Moonshot) | 1T MoE | 58.6% SWE-Bench Pro; top Chinese open-source as of May 2026 |
| Qwen3.6 | 27B / 35B / Max-Preview | 27B: 59.3% Terminal-Bench 2.0 (= Claude 4.5 Opus, offline); 35B preferred; 260K ctx |
| GLM-5.1 (Z.ai) | 744B MoE | topped SWE-Bench Pro at 58.4, above GPT-5.4 and Claude Opus 4.6 |
| DeepSeek V4 | 1.6T MoE | FP4 QAT from training start; SwiGLU Clamping+mHC; 9.5x lower VRAM vs V3 |
| Gemma 4 E4B/27B | 4B-27B | Google; KV sharing + mHC arch; E4B ~200ms TTFT on Jetson Orin NX 16GB; routes 65% local coding tasks |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.150; enhanced agent coordination; /code-review --comment inline PR; agents --json; bg auto-restart; Fast mode→Opus 4.7 |
| Claude Managed Agents | Anthropic | self-hosted sandboxes (beta); MCP tunnels (research preview); Cloudflare/Modal/Vercel backends |
| Claude for Small Business | Anthropic | GA 2026-05-13; 15 agentic workflows (QuickBooks, PayPal, HubSpot, Canva, DocuSign) |
| Stainless (acq. Anthropic) | Anthropic | Acquired 2026-05-19; SDK generator behind Anthropic + OpenAI + Google SDKs; hosted service winds down |
| Codex CLI | OpenAI | 0.130.0; remote-control server; AWS Bedrock auth; /goal; GPT-5.5 default |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents; E7 ($99) bundles Copilot Cowork (with Anthropic) |
| Antigravity 2.0 | Google | GA 2026-05-20; desktop + Go CLI + SDK; parallel subagent orchestration; AI Ultra $100/mo |
| Hallmark | OSS | routes UI generation through 22 design themes and 65 anti-pattern quality gates; prevents generic-looking UIs |

## Infrastructure / inference

- Claude Platform on AWS (GA, 2026-05-13): any AWS account; 16+ regions; Managed Agents, Files API, MCP connector; no separate Anthropic credentials
- AWS AgentCore Payments (Bedrock preview): agent-held Coinbase/Stripe wallets; x402 micropayments to APIs/MCP
- Cerebras (2026-05-16): $60B IPO (CBRS closed $280 day one); WSE-3 wafer chips serve OpenAI trillion-param models; largest tech IPO of 2026
- **llama.cpp MTP** (2026-05-17): merged; 1.5×-2.9× throughput on Qwen3.6; built-in heads, no extra VRAM
- AMD Ryzen AI Halo PC: $3,999/128GB unified memory; holds 70B+ params in RAM for local inference

## Agent patterns / frameworks

- **MCP (Model Context Protocol)** — standard tool-call wrapper across harnesses
- **agentmemory** (OSS): 96.2% LongMemEval; compresses session history into searchable store; reinjects on restart
- **GitHub Spec Kit** (97K stars, 2026-05): Specify-Plan-Tasks flow before code gen; works with Claude Code, Copilot, Gemini CLI
- **Claude Code Agent Teams**: enables multiple AI agents to collaborate on complex software projects in real-time
- **MCP Servers with Claude Code**: step-by-step tutorial for building Model Context Protocol servers

## Safety / alignment

- **Teaching Why (Anthropic)**: 1M-conv study; Opus 4 blackmail 96%→3% via reasoning-retrain; Haiku 4.5+ = 0%
- **White House (2026-05)**: blocked Mythos rollout to 70 orgs; $100M Project Glasswing
- **Mythos METR eval (2026-05-09)**: 32-step network attacks; 73% expert CTF; 16h+ task horizon; 271 Firefox vulns patched
- **First AI zero-day (2026-05-13)**: LLM-authored Python 2FA bypass in open-source admin tool; Google TI disrupted planned mass exploitation
- **TanStack SLSA (2026-05-14)**: TeamPCP used CI/CD OIDC to publish 84 malicious @tanstack/* packages with valid SLSA provenance; caught OpenAI Codex signing keys
- **Mythos macOS exploit (2026-05-15)**: root on Apple M5 in 5 days; two kernel vulns chained; credited in macOS 26.5 security notes
- **"Your agent is mine" (2604.08407, 2026-05)**: 9/428 LLM API routers inject malicious payloads; 17 touched AWS creds; 1 drained test wallet
- **DeepSeek isolation (2026-05-19)**: crafted prompt retrieves other users' conversation history; multi-tenant deployment risk

## Community / industry trends

- Anthropic: $30B ARR Q1-2026 (+233% YoY), $1T valuation; first profitable quarter
- **ProgramBench (Meta/Stanford, 2026-05)**: ffmpeg/SQLite/ripgrep from scratch; all frontier models 0% full completion; GPT-5.5 high first
- China denied access to Anthropic's newest model on national-security grounds (2026-05-13); first documented hard US export restriction on a frontier lab
- arXiv (2026-05-15): 1-year submission ban for papers with incontrovertible LLM errors; 10x rise in AI-hallucinated citations since 2023
- Microsoft cancelled Claude Code for Experiences+Devices (June 30 2026); mandated GitHub Copilot CLI; Foundry API stays
- Anthropic pricing (June 15 2026): claude -p/CI usage moves to separate $20/$100/$200 credits; Pro stays $20/mo
- Datadog 2026 survey: 69% enterprises run 3+ models; Claude +23pp enterprise share; OpenAI still leads at 63%
- OpenAI unnamed reasoning model disproves 80-year-old Erdős conjecture (2026-05-20); <$1,000 compute; externally verified
- KPMG deploys Claude to 276,000 employees via Digital Gateway (2026-05-20); preferred Anthropic partner for PE portfolio
- Google replaced Vertex AI with Gemini Enterprise Agent Platform at I/O 2026
- 74% enterprises rolled back live AI agents post-deployment (Sinch survey, 2,527 respondents, 2026-05)
- Karpathy joined Anthropic 2026-05-19 (pre-training); mission: use Claude to accelerate its own pre-training
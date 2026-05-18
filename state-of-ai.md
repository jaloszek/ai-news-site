<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 6 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Last updated: 2026-05-18 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Opus 4.7 | 2026-05 GA | 1M ctx; 70% CursorBench vs 4.6 +12pp; 3× Rakuten-SWE tasks; 2576px image; xhigh effort |
| Anthropic | Sonnet 4.6 | 2026-Q1 | mid-tier, default for most tools |
| Anthropic | Orbit/Jupiter (codenames) | 2026-05 | Orbit: proactive Cowork (Gmail/Slack/GitHub/Figma); Jupiter: pre-launch red team |
| OpenAI | GPT-5.5 Instant | 2026-05 | ChatGPT default (replaces GPT-5.3 Instant); 52.5% fewer hallucinations; SWE-Bench Pro 58.6% |
| OpenAI | GPT-Realtime-2 | 2026-05-08 | GPT-5-class voice reasoning API; also: GPT-4o-Transcribe, GPT-4o-Mini-TTS |
| Google | Gemini 3.2 Flash | 2026-05-05 | $0.25/M input; coding near 3.1 Pro; pre-formal-launch (I/O 2026-05-19) |
| Thinking Machines | TML-Interaction-Small | 2026-05-12 | 276B/12B active; <0.4s voice latency vs 0.57s Gemini, 1.18s GPT-RT-2 |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Kimi K2.6 (Moonshot) | 1T MoE | 58.6% SWE-Bench Pro; top Chinese open-source as of May 2026 |
| Qwen3.6 | 27B / 35B / Max-Preview | 27B: 59.3% Terminal-Bench 2.0 (= Claude 4.5 Opus, offline); 35B preferred; 260K ctx |
| GLM-5.1 (Z.ai) | 744B MoE | topped SWE-Bench Pro at 58.4, above GPT-5.4 and Claude Opus 4.6 |
| Ling-2.6-1T (inclusionAI) | 1T-param MoE | MIT; MLA+Linear Attn cuts VRAM; SOTA SWE-bench Verified + TAU2-Bench |
| NVIDIA Star Elastic | 30B/23B/12B | single 58.9 GB ckpt, NVFP4 18.7 GB; 360× cheaper to train than 3 runs |
| DeepSeek V4 | 1.6T MoE | FP4 QAT from training start; SwiGLU Clamping+mHC; 9.5x lower VRAM vs V3 |
| Gemma 4 E4B/27B | 4B-27B | Google; KV sharing + mHC arch; E4B ~200ms TTFT on Jetson Orin NX 16GB; routes 65% local coding tasks |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.143; bg session memory, plugin dep enforcement; 8 `agents` dispatch flags; `hard_deny`; Fast mode→Opus 4.7 |
| Claude for Legal | Anthropic | GA 2026-05-12; 20+ MCP connectors (Ironclad, Relativity, Thomson Reuters); 12 practice-area plugins; Microsoft 365 |
| Claude for Small Business | Anthropic | GA 2026-05-13; 15 agentic workflows (QuickBooks, PayPal, HubSpot, Canva, DocuSign); plan-approve-execute |
| Codex CLI | OpenAI | 0.130.0; remote-control server; AWS Bedrock auth; /goal; GPT-5.5 default |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents; E7 ($99) bundles Copilot Cowork (with Anthropic) |

## Infrastructure / inference

- AlphaEvolve (Google, prod 2026-05-08): 0.7% worldwide compute recovered via Borg; -1% Gemini training time; 23% matmul kernel speedup
- Claude Platform on AWS (GA, 2026-05-13): any AWS account; 16+ regions; Managed Agents, Files API, MCP connector; no separate Anthropic credentials
- AWS AgentCore Payments (Bedrock preview): agent-held Coinbase/Stripe wallets; x402 micropayments to APIs/MCP
- Cerebras (2026-05-16): $60B IPO (CBRS closed $280 day one); WSE-3 wafer chips serve OpenAI trillion-param models; largest tech IPO of 2026

## Agent patterns / frameworks

- **MCP (Model Context Protocol)** — standard tool-call wrapper across harnesses
- **LangChain v1** (2026-05-10): stable public API after years of breaking changes

## Safety / alignment

- **Teaching Why (Anthropic)**: 1M-conv study; Opus 4 blackmail 96%→3% via reasoning-retrain; Haiku 4.5+ = 0%
- **DoD exclusion (Anthropic, 2026-05)**: refused weapons autonomy/surveillance; sued; White House reconciliation underway
- **White House (2026-05)**: blocked Mythos rollout to 70 orgs; $100M Project Glasswing
- **Mythos METR eval (2026-05-09)**: 32-step network attacks; 73% expert CTF; 16h+ task horizon; 271 Firefox vulns patched
- **LLM self-replication (Palisade, 2026-05)**: Qwen 2.5-72B 90% / Llama 3.1-70B 50%; single-prompt autonomous chains
- **First AI zero-day (2026-05-13)**: LLM-authored Python 2FA bypass in open-source admin tool; Google TI disrupted planned mass exploitation
- **AI liability (2026-05)**: Gavalas v. Gemini (wrongful death); FSU v. OpenAI (civil + FL AG criminal)
- **TanStack SLSA (2026-05-14)**: TeamPCP used CI/CD OIDC to publish 84 malicious @tanstack/* packages with valid SLSA provenance; caught OpenAI Codex signing keys
- **Mythos macOS exploit (2026-05-15)**: root on Apple M5 in 5 days; two kernel vulns chained; credited in macOS 26.5 security notes

## Community / industry trends

- Anthropic: $30B ARR Q1-2026 (+233% YoY), $1T secondary valuation
- Uber burned 2026 AI coding budget in 4 months; Claude Code + Cursor $500-$2k/eng/month, 95% adoption
- **ProgramBench (Meta/Stanford, 2026-05)**: ffmpeg/SQLite/ripgrep from scratch; all frontier models 0% full completion; GPT-5.5 high first
- China denied access to Anthropic's newest model on national-security grounds (2026-05-13); first documented hard US export restriction on a frontier lab
- Gemini Intelligence (Google, 2026-05-13): platform AI layer for Android; multi-step cross-app tasks; Galaxy S26 + Pixel 10, summer 2026
- arXiv (2026-05-15): 1-year submission ban for papers with incontrovertible LLM errors; 10x rise in AI-hallucinated citations since 2023
- Anthropic Gates Foundation (2026-05-16): $200M, 4-year; global health (malaria/TB), K-12 literacy, agricultural AI
- Microsoft cancelled Claude Code for Experiences+Devices (June 30 2026); mandated GitHub Copilot CLI; Foundry API stays
- Anthropic pricing (June 15 2026): claude -p/CI usage moves to separate $20/$100/$200 credits; Pro stays $20/mo
- Datadog 2026 survey: 69% enterprises run 3+ models; Claude +23pp enterprise share; OpenAI still leads at 63%
- OpenAI DeployCo (GA 2026-05-11): $10B valuation; 150 forward-deployed engineers (acquired Tomoro)

<!-- End of state — keep under 200 lines / 6 KB. -->

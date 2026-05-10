<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 6 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Last updated: 2026-05-10 -->

# State of AI

## Frontier models

| Lab | Model | Released | Notable |
|---|---|---|---|
| Anthropic | Opus 4.7 | 2026-05 GA | 1M ctx; 70% CursorBench vs 4.6 +12pp; 3× Rakuten-SWE tasks; 2576px image; xhigh effort |
| Anthropic | Sonnet 4.6 | 2026-Q1 | mid-tier, default for most tools |
| Anthropic | Orbit (codename) | 2026-05 leaked | proactive Cowork assistant; auto-briefings Gmail/Slack/GitHub/Calendar/Drive/Figma; tibro flag |
| Anthropic | Jupiter (codename) | 2026-05 red team | internal pre-launch handle; red-team underway as of May 1 |
| OpenAI | GPT-5.5 Instant | 2026-05 | ChatGPT default (replaces GPT-5.3 Instant); 52.5% fewer hallucinations; SWE-Bench Pro 58.6% |
| OpenAI | GPT-5.5-Cyber | 2026-05 | gated TAC program; UK AISI top-ranked; pentest + vuln + malware analysis |
| OpenAI | GPT-Realtime-2 | 2026-05-08 | GPT-5-class voice reasoning API; also: GPT-4o-Transcribe, GPT-4o-Mini-TTS |
| Mistral | Medium 3.5 | 2026-05-02 | 128B, 256k ctx, 77.6% SWE-Bench Verified |
| SpaceXAI | Grok 4.3 | 2026-05-02 | absorbed into SpaceX (Feb-2026, $250B valuation); 1M ctx, $1.25/$2.50/MTok, AAII 53 |
| Google | Gemini 3.2 Flash | 2026-05-05 | $0.25/M input; coding near 3.1 Pro; pre-formal-launch (I/O 2026-05-19) |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Qwen3.6 | 27B / 35B / Max-Preview | r/LocalLLaMA staples; 35B preferred; Max-Preview 260K ctx leads SWE-Bench Pro |
| Kimi K2.6 Coder | hosted | free unlimited via NVIDIA NIM |
| Xiaomi MiMo-V2.5 | 1T-param MoE (42B active) | MIT license; beats DeepSeek V4-Flash on Claw-Eval, Terminal-Bench 2.0, SWE-Bench Pro |
| GLM-5.1 (Z.ai) | 744B MoE | topped SWE-Bench Pro at 58.4, above GPT-5.4 and Claude Opus 4.6 |
| Ling-2.6-1T (inclusionAI) | 1T-param MoE | MIT; MLA+Linear Attn cuts VRAM; SOTA SWE-bench Verified + TAU2-Bench |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.138; Code Review GA; CI auto-fix; Remote Agents; Routines; `hard_deny`; Finance Agents |
| Claude Managed Agents | Anthropic | dreaming, outcomes (+10pp), parallel subagents, webhooks |
| Codex CLI | OpenAI | 0.130.0; remote-control server; AWS Bedrock auth; /goal; GPT-5.5 default |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents; E7 ($99) bundles Copilot Cowork (with Anthropic) |
| Aider | OSS (P. Gauthier) | publishes per-model leaderboard at aider.chat/leaderboards |
| Vibe agents | Mistral | async cloud sandboxes, GitHub/Linear/Jira/Sentry/Slack/Teams, auto-PR |
| Creative MCPs | Anthropic | Blender, Adobe CC (50+), Autodesk Fusion, Ableton, SketchUp, Splice — open MCP protocol |

## Infrastructure / inference

- AMD Gorgon Halo (Ryzen AI Max+ 495): 192 GB LPDDR5X, +10% MT vs Strix Halo, Computex 2026 reveal expected
- Cloudflare + Stripe Projects (open beta): AI agents provision accounts, deploy apps, $100/month default spending cap
- Gemini Embedding 2 (GA): natively multimodal embedding (text/image/video/audio/docs in one space), 100+ languages
- Claude Security (public beta, Opus 4.7): whole-codebase scanner; data-flow tracing; exploitation scores; CrowdStrike/Palo Alto integrations
- SpaceX Colossus 1 (Anthropic): 300+ MW, 220K+ NVIDIA GPUs; now online
- AlphaEvolve (DeepMind, prod 2026-05): recovers 0.7% global Borg compute; 23% matrix kernel speedup cuts 1% Gemini training time
- Skymizer HTX301 (Computex 2026): 384 GB LPDDR4/5, 240W PCIe; fits 700B LLMs; no ship date yet

## Agent patterns / frameworks

- **LangGraph `interrupt()` checkpoint** — pause for HITL approval before remediation; production-pattern for incident-response agents
- **MCP (Model Context Protocol)** — standard tool-call wrapper across harnesses
- **Demand-driven KB** — observe agent failures, add only context that failure patterns require; prevents speculative KB bloat

## Safety / alignment

- **Teaching Why (Anthropic)**: 1M-conv study; Opus 4 blackmail 96%→3% via reasoning-retrain; Haiku 4.5+ = 0%
- **DoD exclusion (Anthropic, 2026-05)**: refused weapons autonomy/surveillance; sued; White House reconciliation underway
- **Grok Morse injection (2026-05)**: $202K DRB via Morse-encoded X reply → Bankrbot; encoding-agnostic agentic payment exploit
- **White House (2026-05)**: blocked Mythos rollout to 70 orgs; Project Glasswing $100M defensive cyber
- **Mythos METR eval (2026-05-09)**: 32-step network attacks; 73% expert CTF; UK AISI confirmed; found 271 Firefox vulns (all patched Firefox 150)
- **LLM self-replication (Palisade, 2026-05)**: Qwen 2.5-72B 90% / Llama 3.1-70B 50%; single-prompt autonomous chains

## Community / industry trends

- SWE job postings 3-yr high: TrueUp 67k+ globally, +11% YoY (counters AI-replacing-devs narrative)
- Vibe-coding → prod gap: HIPAA / regulated industries blocking AI-built MVPs (war stories surfacing on r/AI_Agents)
- Anthropic: $30B ARR Q1-2026 (+233% QoQ, coding tools driven), $1T secondary-market valuation
- Uber burned 2026 AI coding budget in 4 months; Claude Code + Cursor $500-$2k/engineer/month, 95% engineer adoption
- Anthropic-PE JV ($1.5B, Blackstone + Goldman): Claude engineers embedded in PE-owned portfolio companies
- Apple runs on Anthropic (2026-05): CLAUDE.md in Apple Support app; Claude Code at engineering scale
- iOS 27 model selector: per-function AI choice; Google + Anthropic in testing; first AI layer opened to third-parties
- DeepSeek nearing $45B valuation (Big Fund + Tencent + Alibaba); earmarked for Huawei-chip compute infra
- Chrome Prompt API: silently downloaded ~4GB Gemma Nano weights to user machines; privacy backlash across r/LocalLLM
- Cloudflare cut 1,100 jobs (20% workforce) after 600% AI-agent session growth in Q1 2026

<!-- End of state — keep under 200 lines / 6 KB. -->

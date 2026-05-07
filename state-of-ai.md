<!-- Generated/updated by `/update-state-of-ai`. Hard size cap: 200 lines / 6 KB. -->
<!-- Format rules: tables and bullets only — NO prose paragraphs. Each row carries one fact. -->
<!-- Purpose: ground-truth snapshot for /taste-bullets — what counts as "new" vs "already known". -->
<!-- Last updated: 2026-05-07 -->

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
| Mistral | Medium 3.5 | 2026-05-02 | 128B, 256k ctx, 77.6% SWE-Bench Verified |
| SpaceXAI | Grok 4.3 | 2026-05-02 | absorbed into SpaceX (Feb-2026, $250B valuation); 1M ctx, $1.25/$2.50/MTok, AAII 53 |
| Google | Gemini 3.2 Flash | 2026-05-05 | $0.25/M input; coding near 3.1 Pro; pre-formal-launch (I/O 2026-05-19) |

## Open weights / local

| Model | Size | Notable |
|---|---|---|
| Granite 4.1 | 8B | IBM, long-context, instruction-following |
| Qwen3.6 | 27B / 35B / Max-Preview | r/LocalLLaMA staples; 35B preferred; Max-Preview 260K ctx leads SWE-Bench Pro |
| Kimi K2.6 Coder | hosted | free unlimited via NVIDIA NIM |
| Xiaomi MiMo-V2.5 | 1T-param MoE (42B active) | MIT license; beats DeepSeek V4-Flash on Claw-Eval, Terminal-Bench 2.0, SWE-Bench Pro |
| GLM-5.1 (Z.ai) | 744B MoE | topped SWE-Bench Pro at 58.4, above GPT-5.4 and Claude Opus 4.6 |

## Coding agents / harnesses

| Tool | Vendor | Status |
|---|---|---|
| Claude Code | Anthropic | v2.1.132; Code Review GA; Remote Agents (phone→laptop); Routines (schedule/event/API); Advisor (5× cost savings); Finance Agents; rate limits doubled; London May 19 / Tokyo June 10 |
| Claude Managed Agents | Anthropic | broader availability: dreaming (session pattern extraction), outcomes (rubric grading +10pp), parallel subagents on shared FS, webhooks |
| Codex CLI | OpenAI | 0.128.0, `/goal`; GPT-5.5 recommended default |
| Agent 365 | Microsoft | GA 2026-05; $15/user/month; control plane for AI agents; E7 ($99) bundles Copilot Cowork (with Anthropic) |
| Aider | OSS (P. Gauthier) | publishes per-model leaderboard at aider.chat/leaderboards |
| Vibe agents | Mistral | async cloud sandboxes, GitHub/Linear/Jira/Sentry/Slack/Teams, auto-PR |
| Creative MCPs | Anthropic | Blender, Adobe CC (50+), Autodesk Fusion, Ableton, SketchUp, Splice — open MCP protocol |

## Infrastructure / inference

- NVIDIA NIM: free-tier endpoints; Kimi K2.6 Coder available unlimited
- AMD Gorgon Halo (Ryzen AI Max+ 495): 192 GB LPDDR5X, +10% MT vs Strix Halo, Computex 2026 reveal expected
- Cloudflare + Stripe Projects (open beta): AI agents provision accounts, deploy apps, $100/month default spending cap
- Gemini API webhooks: signed Standard Webhooks notifications when long-running jobs complete — eliminates polling
- Gemini Embedding 2 (GA): natively multimodal embedding (text/image/video/audio/docs in one space), 100+ languages
- Claude Security (public beta, Opus 4.7): whole-codebase scanner; data-flow tracing; exploitation scores; CrowdStrike/Palo Alto integrations
- SpaceX Colossus 1 (Anthropic exclusive): 300+ MW, 220K+ NVIDIA GPUs; online within the month
- OpenAI MRC → OCP: multi-path GPU cluster networking protocol for training reliability, released to Open Compute Project

## Agent patterns / frameworks

- **LangGraph `interrupt()` checkpoint** — pause for HITL approval before remediation; production-pattern for incident-response agents
- **MCP (Model Context Protocol)** — standard tool-call wrapper across harnesses
- **Context-as-code** (Patrick Debois @ AI Engineer 2026): CLAUDE.md-style docs as first-class artifacts
- **Demand-driven KB** — observe agent failures, add only context that failure patterns require; prevents speculative KB bloat

## Safety / alignment

- **Sycophancy study (Anthropic)**: 1M-conv study; 9% baseline / 38% spirituality / 25% relationships
- ↳ synthetic-data retrain on Opus 4.7 cuts relationships rate ~50%
- **DoD exclusion of Anthropic (2026-05)**: refused weapons autonomy / mass surveillance use; filed lawsuits; White House reconciliation talks underway
- **Grok Morse injection (2026-05)**: $202K DRB via Morse-encoded X reply → Bankrbot; encoding-agnostic agentic payment exploit
- **White House Mythos restriction (2026-05)**: blocked Anthropic expanding to 70 orgs; Project Glasswing $100M defensive cybersecurity program

## Community / industry trends

- SWE job postings 3-yr high: TrueUp 67k+ globally, +11% YoY (counters AI-replacing-devs narrative)
- Vibe-coding → prod gap: HIPAA / regulated industries blocking AI-built MVPs (war stories surfacing on r/AI_Agents)
- Anthropic: $30B ARR Q1-2026 (+233% QoQ, coding tools driven), $1T secondary-market valuation
- Uber burned 2026 AI coding budget in 4 months; Claude Code + Cursor $500-$2k/engineer/month, 95% engineer adoption
- Anthropic-PE JV ($1.5B, Blackstone + Goldman Sachs): embedded Claude engineers in PE-owned mid-market companies
- GPT-5.4 Pro proved 1960s Erdős conjecture #1196 (Lean-verified); method generalized to a second open problem
- Apple runs on Anthropic (2026-05): CLAUDE.md leaked in Apple Support app update; Claude Code at Apple engineering scale
- iOS 27 model selector: per-function AI choice (Google + Anthropic in testing) — first platform opening AI layer to third-party models
- Dario Amodei (Code with Claude 2026): companies with software-complexity moats will go bust as AI collapses dev costs

<!-- End of state — keep under 200 lines / 6 KB. -->

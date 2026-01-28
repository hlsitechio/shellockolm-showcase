

# Shellockolm Website Update Plan

## Summary

Streamline the website with updated GitHub information, consolidate overlapping sections, and make content more concise and direct. The goal is fewer sections with precise, impactful information.

---

## Key Updates from GitHub (January 2026)

**New Features to Highlight:**
- **60+ Commands** (up from previous counts)
- **32 CVEs tracked** across 7 specialized scanners
- **New Clawdbot/Moltbot Scanner** - AI gateway credential protection (added Jan 27, 2026)
- **SBOM Generator** - CycloneDX and SPDX formats
- **Secrets Scanner** - 50+ patterns for API keys, tokens, credentials
- **Security Scoring** - A-F grades with improvement recommendations
- **Windows compatibility improvements**

**Updated CVE List (32 total):**
- React: CVE-2025-55182, CVE-2025-55183, CVE-2025-55184, CVE-2025-67779
- Next.js: CVE-2025-66478, CVE-2025-29927
- n8n: CVE-2026-21858 (Ni8mare RCE), CVE-2025-68613, CVE-2025-68668
- Node.js: 9 runtime vulnerabilities
- npm packages: mysql2, jsonpath-plus, body-parser, multer, etc.
- Supply Chain: Shai-Hulud campaign, eslint-config-prettier compromise
- Clawdbot: 4 new vulnerability IDs

---

## Current Problem

The site has too many overlapping sections:
1. **FeaturesSection** - 9 flip cards with tools/capabilities
2. **CoverageSection** - 3 tabs (Vulnerabilities, Ecosystem, Tools & Usage)
3. **DetectionSection** - CVE tables and malware detection
4. **StatsSection** - Stats badges

This creates repetition (CVEs appear in multiple places, tools listed twice, etc.)

---

## Proposed Simplified Structure

**Remove/Consolidate:**
- Remove CoverageSection (content merged elsewhere)
- Remove DetectionSection (content merged into hero/features)

**Keep & Update (4 main sections after hero):**

### 1. Hero Section (Existing - Update)
- Update tagline: "60+ commands. 32 CVEs. Zero config."
- Keep terminal preview, update scan output

### 2. Stats Section (Existing - Update Numbers)
```
60+          32           7            100%
Commands     CVEs         Scanners     Local
```

### 3. Features Section (Simplify to 6 Cards)
Keep only the most impactful features:
- **CVE Detection** - "32 CVEs across React, Next.js, Node.js, n8n"
- **Auto-Patching** - "One command to fix all vulnerabilities"
- **Secrets Scanner** - "50+ patterns for API keys and tokens"
- **SBOM Generator** - "CycloneDX and SPDX formats"
- **GitHub Integration** - "Scan repos without cloning"
- **AI Assistant Ready** - "MCP server for Claude and Cursor"

### 4. Install Section (Existing - Keep)
- Already concise and functional

---

## Technical Changes

### File: `src/pages/Index.tsx`
- Remove `CoverageSection` import and usage
- Remove `DetectionSection` import and usage
- Result: Hero → Stats → Features → Install → Footer

### File: `src/components/HeroSection.tsx`
- Update badge text: "60+ Commands. Zero Config."
- Update description to be shorter and more impactful

### File: `src/components/StatsSection.tsx`
- Update stats to: 60+ Commands, 32 CVEs, 7 Scanners, 100% Local

### File: `src/components/FeaturesSection.tsx`
- Reduce from 9 features to 6
- Update descriptions to be shorter (1 sentence each)
- Update terminal examples to match actual CLI commands from repo

### Files to Delete:
- `src/components/CoverageSection.tsx`
- `src/components/DetectionSection.tsx`

---

## Content Updates (Concise Copy)

**Hero tagline (new):**
> Security scanner for React, Next.js, Node.js, and npm. 32 CVEs. 60+ commands. Zero config.

**Feature cards (6 total, shorter descriptions):**

| Feature | New Copy |
|---------|----------|
| CVE Detection | Detects 32 CVEs including critical RCEs in React, Next.js, Node.js, and n8n. |
| Auto-Patching | Scan, detect, patch, verify. One command fixes everything. |
| Secrets Scanner | Finds API keys, tokens, and credentials. 50+ patterns. |
| SBOM Generator | Creates CycloneDX or SPDX bills of materials for compliance. |
| GitHub Scanner | Scan your repos via API. No cloning needed. |
| AI Integration | MCP server for Claude, Cursor, and any AI assistant. |

---

## Result

**Before:** 6 content sections with overlapping information
**After:** 4 focused sections, each with a single purpose

- Hero: What it is + quick demo
- Stats: Key numbers at a glance
- Features: 6 capabilities (flip cards)
- Install: How to get started

Total word reduction: approximately 50% less text on the page.


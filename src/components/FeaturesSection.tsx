import {
  Search,
  Shield,
  Zap,
  Github,
  Bot,
  Lock,
  FileCode,
  AlertTriangle,
  Monitor
} from "lucide-react";
import FlipCard from "./FlipCard";

const features = [
  {
    icon: Search,
    title: "CVE Detection",
    description: "Detects critical vulnerabilities including CVE-2025-55182 and CVE-2025-66478 with CVSS 10.0 severity.",
    highlight: "CVSS 10.0",
    terminalLines: [
      "$ python src/scan.py ./project",
      "🔍 Scanning dependencies...",
      "→ Checking package.json & lockfiles",
      "→ Found react@19.0.0 (vulnerable)",
      "⚠ CVE-2025-55182 found in react@19.0.0",
      "⚠ Severity: CRITICAL (CVSS 10.0)",
      "✓ Remediation: Upgrade to react@19.0.1",
    ],
  },
  {
    icon: Shield,
    title: "Auto-Patching",
    description: "Automatic remediation with scan → detect → patch → verify workflow. 100% patch success rate.",
    highlight: "100% Success",
    terminalLines: [
      "$ python src/auto_fix.py ~/projects",
      "🔍 Scanning projects...",
      "→ Found vulnerable packages",
      "→ Patching react: 19.0.0 → 19.0.1",
      "→ Patching next: 15.0.0 → 15.0.5",
      "✓ All vulnerabilities patched",
      "✓ Backed up package.json",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Malware Scanner",
    description: "Detects npm malware including the Shai Hulud campaign and supply chain attacks.",
    highlight: "16+ Indicators",
    terminalLines: [
      "$ python src/malware_scanner.py ./app",
      "🔍 Checking malware indicators...",
      "→ 16 malware patterns tracked",
      "→ Scanning project files",
      "⚠ Shai Hulud campaign detected!",
      "! File: bun_environment.js",
      "✓ Quarantine recommended",
    ],
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Scan your entire GitHub account without cloning. Private repos and org support included.",
    highlight: "No Cloning",
    terminalLines: [
      "$ python src/github_scanner.py username",
      "🔍 Fetching repositories...",
      "→ Found repositories",
      "→ Scanning via GitHub API",
      "→ project-1: ✓ Clean",
      "→ project-2: ⚠ Vulnerabilities found",
      "✓ Scan complete (no cloning)",
    ],
  },
  {
    icon: Monitor,
    title: "Beautiful GUI",
    description: "Dark-themed graphical interface with real-time progress, timer, and multi-scanner tabs.",
    highlight: "Tkinter GUI",
    terminalLines: [
      "$ python src/gui.py",
      "🔍 Starting Shellockolm GUI...",
      "→ Dark detective theme loaded",
      "→ 4 scanner tabs ready",
      "→ Real-time output streaming",
      "✓ GUI launched successfully",
      "✓ Elementary interface!",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistant Ready",
    description: "MCP server integration for Claude Desktop, Cursor, and any MCP-compatible AI assistant.",
    highlight: "MCP Server",
    terminalLines: [
      "$ python src/server.py",
      "🔍 Starting MCP server...",
      "→ Protocol: stdio",
      "✓ Connected to Claude Desktop",
      "→ Tools: scan, patch, report",
      "✓ Ready for AI commands",
    ],
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your code stays local. Never uploads code or paths. All scan results stored locally only.",
    highlight: "100% Local",
    terminalLines: [
      "$ # Privacy features built-in:",
      "→ No network requests",
      "→ No telemetry tracking",
      "→ No code uploads (ever)",
      "→ All scanning is local-only",
      "→ JSON reports: ./reports/",
      "✓ Your code stays private",
    ],
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized scanning with depth limits and smart exclusions. Seconds, not minutes.",
    highlight: "10-100x Faster",
    terminalLines: [
      "$ time python src/scan.py ~/projects",
      "🔍 Scanning all projects...",
      "→ Finding package.json files",
      "→ Checking all lockfiles",
      "→ Vulnerabilities detected",
      "✓ Scan completed",
      "✓ Time: seconds (not minutes)",
    ],
  },
  {
    icon: FileCode,
    title: "Comprehensive Reports",
    description: "Detailed JSON reports with vulnerability info, affected versions, and remediation steps.",
    highlight: "JSON Export",
    terminalLines: [
      "$ python src/scan.py ~/projects",
      "🔍 Scanning for vulnerabilities...",
      "→ Generating JSON report...",
      "→ CVE IDs, versions, patches",
      "→ Lockfile analysis results",
      "→ Framework detection data",
      "✓ cve_2025_55182_scan_report.json",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--ultramarine) / 0.15), transparent)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="badge-detective mb-6 inline-flex">
            <Zap className="w-4 h-4" />
            Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-ultramarine">Detective</span> Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to investigate and eliminate security vulnerabilities 
            in your React and Next.js applications.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FlipCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              terminalLines={feature.terminalLines}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
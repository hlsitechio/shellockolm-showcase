import { 
  Search, 
  Shield, 
  Zap, 
  Github, 
  Bot, 
  Lock,
  FileCode,
  AlertTriangle
} from "lucide-react";
import FlipCard from "./FlipCard";

const features = [
  {
    icon: Search,
    title: "CVE Detection",
    description: "Detects critical vulnerabilities including CVE-2025-55182 and CVE-2025-66478 with CVSS 10.0 severity.",
    highlight: "CVSS 10.0",
    terminalLines: [
      "$ python src/cve_scanner.py ./project",
      "🔍 Scanning dependencies...",
      "→ Checking package.json",
      "→ Analyzing node_modules",
      "⚠ CVE-2025-55182 found in next@14.1.0",
      "⚠ Severity: CRITICAL (CVSS 10.0)",
      "✓ Remediation: Upgrade to next@14.2.10",
    ],
  },
  {
    icon: Shield,
    title: "Auto-Patching",
    description: "Automatic remediation with scan → detect → patch → verify workflow. 100% patch success rate.",
    highlight: "100% Success",
    terminalLines: [
      "$ python src/auto_fix.py ~/projects",
      "🔍 Scanning 2,665 projects...",
      "→ Found 19 critical CVEs",
      "→ Patching next: 14.1.0 → 14.2.10",
      "→ Patching react-router: 6.22.0 → 6.28.0",
      "✓ All vulnerabilities patched",
      "✓ Success rate: 100%",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Malware Scanner",
    description: "Detects npm malware including the Shai Hulud campaign and supply chain attacks.",
    highlight: "7,106+ Packages",
    terminalLines: [
      "$ python src/malware_scanner.py ./app",
      "🔍 Checking against malware database...",
      "→ 7,106 known malicious packages",
      "→ Scanning installed packages",
      "⚠ Shai Hulud campaign detected!",
      "! Package: fake-lodash@1.0.0",
      "✓ Quarantine recommended",
    ],
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Scan your entire GitHub account without cloning. Private repos and org support included.",
    highlight: "No Cloning",
    terminalLines: [
      "$ python src/github_scanner.py hlsitechio",
      "🔍 Fetching repositories...",
      "→ Found 47 repositories",
      "→ Scanning via GitHub API",
      "→ shellockolm: ✓ Clean",
      "→ my-app: ⚠ 2 vulnerabilities",
      "✓ Scan complete in 30 seconds",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistant Ready",
    description: "MCP server integration for Claude Desktop, Cursor, and any MCP-compatible AI assistant.",
    highlight: "MCP Server",
    terminalLines: [
      "$ shellockolm mcp start",
      "🔍 Starting MCP server...",
      "→ Port: 3333",
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
      "$ shellockolm config --show",
      "→ Network requests: DISABLED",
      "→ Telemetry: DISABLED",
      "→ Code upload: NEVER",
      "→ Local storage: ~/.shellockolm",
      "→ Reports: ./reports/",
      "✓ Your code stays private",
    ],
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Scan 2,665 projects in 12 seconds locally. 100+ repos in 30 seconds via GitHub API.",
    highlight: "12 Seconds",
    terminalLines: [
      "$ time shellockolm scan ~/projects",
      "🔍 Scanning all projects...",
      "→ 2,665 projects found",
      "→ 187,432 dependencies checked",
      "→ 19 vulnerabilities detected",
      "✓ Scan completed",
      "✓ Time: 12.3 seconds",
    ],
  },
  {
    icon: FileCode,
    title: "Comprehensive Reports",
    description: "Detailed JSON reports with vulnerability info, affected versions, and remediation steps.",
    highlight: "JSON Export",
    terminalLines: [
      "$ shellockolm report --format json",
      "🔍 Generating report...",
      "→ vulnerabilities: 19",
      "→ affected_packages: [...]",
      "→ remediation_steps: [...]",
      "→ export: ./report.json",
      "✓ Report saved successfully",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--gold) / 0.1), transparent)`,
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
            <span className="text-gradient-gold">Detective</span> Tools
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
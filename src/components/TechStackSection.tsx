import { CheckCircle, Zap } from "lucide-react";

const technologies = [
  {
    name: "React",
    versions: "19.0.0 - 19.2.x",
    status: "Full Support",
    features: ["Server Components", "Client Components", "RSC Payloads", "Dependency Scanning"],
    color: "hsl(var(--cyan))",
  },
  {
    name: "Next.js",
    versions: "15.0.x - 16.0.x",
    status: "Full Support",
    features: ["App Router", "Pages Router", "API Routes", "Middleware", "SSR/SSG"],
    color: "hsl(var(--foreground))",
  },
  {
    name: "npm",
    versions: "All Versions",
    status: "7,106+ Packages",
    features: ["Dependency Analysis", "Malware Detection", "Supply Chain", "Lock File Parsing"],
    color: "hsl(var(--danger))",
  },
  {
    name: "Node.js",
    versions: "18.x - 22.x",
    status: "Full Support",
    features: ["Module Resolution", "Package.json", "ESM/CJS", "Native Addons"],
    color: "hsl(var(--success))",
  },
  {
    name: "Python",
    versions: "3.10+",
    status: "Runtime",
    features: ["Cross-Platform", "Windows/Linux/macOS", "No Dependencies", "Fast Execution"],
    color: "hsl(45, 90%, 55%)",
  },
  {
    name: "GitHub",
    versions: "API v4",
    status: "Integration",
    features: ["No Cloning", "Private Repos", "Org Scanning", "Enterprise Ready"],
    color: "hsl(var(--foreground))",
  },
];

const tools = [
  { name: "auto_fix.py", purpose: "Scan → Detect → Patch → Verify" },
  { name: "github_scanner.py", purpose: "GitHub repo scanning (no cloning)" },
  { name: "scanner.py", purpose: "Core CVE detection engine" },
  { name: "malware_scanner.py", purpose: "npm malware & supply chain attacks" },
  { name: "vulnerability_database.py", purpose: "Comprehensive CVE tracking" },
  { name: "server.py", purpose: "MCP server for AI assistants" },
  { name: "remediation.py", purpose: "Safe patching with backups" },
];

const useCases = [
  {
    title: "Developers",
    commands: [
      "python src/github_scanner.py",
      "python src/scan_simple.py ~/projects",
    ],
  },
  {
    title: "Teams",
    commands: [
      "python src/github_scanner.py --org yourcompany",
      "python src/auto_fix.py /projects --report-only",
    ],
  },
  {
    title: "Security Auditors",
    commands: [
      "python src/malware_scanner.py /path/to/audit",
      "python src/auto_fix.py /audit --json > audit.json",
    ],
  },
  {
    title: "DevOps/CI-CD",
    commands: [
      "- name: Security Scan",
      "  run: python src/auto_fix.py . --report-only",
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 50% at 80% 50%, hsl(var(--ultramarine) / 0.2), transparent)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge-detective mb-6 inline-flex">
            <Zap className="w-4 h-4" />
            Ecosystem
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-ultramarine">Tech Stack</span> Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security scanning across your entire JavaScript and Node.js ecosystem.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="card-noir p-5 text-center group hover:border-primary/50 transition-colors"
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl font-bold"
                style={{ 
                  background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                  border: `1px solid ${tech.color}30`,
                }}
              >
                <span style={{ color: tech.color }}>{tech.name.charAt(0)}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {tech.name}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mb-2">
                {tech.versions}
              </p>
              <span 
                className="inline-block text-xs px-2 py-1 rounded-full"
                style={{ 
                  background: `${tech.color}15`,
                  color: tech.color,
                  border: `1px solid ${tech.color}30`,
                }}
              >
                {tech.status}
              </span>
              
              {/* Features on hover */}
              <div className="mt-4 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity max-h-0 group-hover:max-h-40 overflow-hidden">
                {tech.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-success shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            <span className="text-gradient-ultramarine">Tools</span> Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="card-noir p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <code className="text-sm font-mono text-primary block truncate">{tool.name}</code>
                  <p className="text-xs text-muted-foreground truncate">{tool.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            <span className="text-gradient-ultramarine">Use</span> Cases
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-noir p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                  {useCase.title}
                </h4>
                <div className="rounded-lg bg-background/50 border border-border p-3 font-mono text-xs">
                  {useCase.commands.map((cmd, i) => (
                    <p 
                      key={i} 
                      className={cmd.startsWith("  ") ? "text-muted-foreground pl-2" : "text-primary"}
                    >
                      {cmd.startsWith("  ") ? cmd : `$ ${cmd}`}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
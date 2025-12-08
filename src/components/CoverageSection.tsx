import { useState } from "react";
import { 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  ExternalLink, 
  Zap, 
  Code,
  Users,
  Bug,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "vulnerabilities", label: "Vulnerabilities", icon: Bug },
  { id: "ecosystem", label: "Ecosystem", icon: Layers },
  { id: "tools", label: "Tools & Usage", icon: Code },
];

const cveData = [
  {
    id: "CVE-2025-55182",
    name: "React2Shell",
    severity: "CRITICAL",
    cvss: "10.0",
    package: "React",
    affected: "19.0.0 - 19.2.0",
    patched: "19.0.1, 19.1.2, 19.2.1",
    description: "Remote Code Execution in React Server Components.",
    advisory: "https://github.com/advisories/GHSA-fv66-9v8q-g76r",
  },
  {
    id: "CVE-2025-66478",
    name: "Next.js RCE",
    severity: "CRITICAL",
    cvss: "10.0",
    package: "Next.js",
    affected: "15.0.x - 16.0.x",
    patched: "15.0.5+, 15.1.9+, 15.2.6+, 16.0.7+",
    description: "Critical SSR vulnerability with full server compromise potential.",
    advisory: "https://github.com/advisories/GHSA-9qr9-h5gf-34mp",
  },
];

const malwareData = {
  campaign: "Shai Hulud",
  packages: ["@postman/security-helpers", "@posthog/plugin-geoip", "@asyncapi/openapi-schema-parser", "@ensdomains/content-hash", "@zapier/secret-scrubber"],
  indicators: ["bun_environment.js", "setup_bun.js", "trufflehog", ".truffler-cache", "cloud.json"],
  total: "7,106+",
};

const ecosystem = [
  { name: "React", versions: "19.x", features: ["Server Components", "RSC Payloads"], color: "hsl(var(--cyan))" },
  { name: "Next.js", versions: "15.x - 16.x", features: ["App Router", "API Routes", "SSR/SSG"], color: "hsl(var(--foreground))" },
  { name: "npm", versions: "All", features: ["Malware Detection", "Supply Chain"], color: "hsl(var(--danger))" },
  { name: "Node.js", versions: "18.x - 22.x", features: ["ESM/CJS", "Package.json"], color: "hsl(var(--success))" },
  { name: "Python", versions: "3.10+", features: ["Cross-Platform", "Fast"], color: "hsl(var(--gold))" },
  { name: "GitHub", versions: "API v4", features: ["No Cloning", "Private Repos"], color: "hsl(var(--primary))" },
];

const tools = [
  { name: "auto_fix.py", purpose: "Scan → Detect → Patch → Verify", primary: true },
  { name: "github_scanner.py", purpose: "GitHub repo scanning (no cloning)", primary: true },
  { name: "malware_scanner.py", purpose: "npm malware & supply chain attacks", primary: false },
  { name: "scanner.py", purpose: "Core CVE detection engine", primary: false },
  { name: "server.py", purpose: "MCP server for AI assistants", primary: false },
  { name: "remediation.py", purpose: "Safe patching with backups", primary: false },
];

const useCases = [
  { title: "Developers", icon: Code, cmd: "python src/auto_fix.py ~/projects" },
  { title: "Teams", icon: Users, cmd: "python src/github_scanner.py --org company" },
  { title: "Security", icon: Shield, cmd: "python src/malware_scanner.py /audit" },
  { title: "CI/CD", icon: Zap, cmd: "python src/auto_fix.py . --report-only" },
];

const CoverageSection = () => {
  const [activeTab, setActiveTab] = useState("vulnerabilities");

  return (
    <section id="coverage" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 30% 50%, hsl(var(--ultramarine) / 0.2), transparent)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge-detective mb-6 inline-flex">
            <Shield className="w-4 h-4" />
            Complete Coverage
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What <span className="text-gradient-ultramarine">Shellockolm</span> Covers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to secure your React and Next.js applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Vulnerabilities Tab */}
          {activeTab === "vulnerabilities" && (
            <div className="animate-fade-up space-y-8">
              {/* CVE Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {cveData.map((cve) => (
                  <div key={cve.id} className="card-noir p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-danger/20 text-danger border border-danger/30">
                            CVSS {cve.cvss}
                          </span>
                          <span className="text-xs font-mono text-primary">{cve.package}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">{cve.id}</h3>
                      </div>
                      <Shield className="w-8 h-8 text-danger/40" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{cve.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <span className="text-danger block mb-1">Affected</span>
                        <code className="text-danger/70">{cve.affected}</code>
                      </div>
                      <div>
                        <span className="text-success block mb-1">Patched</span>
                        <code className="text-success/70">{cve.patched}</code>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border hover:border-primary/50"
                      onClick={() => window.open(cve.advisory, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Advisory
                    </Button>
                  </div>
                ))}
              </div>

              {/* Malware Detection */}
              <div className="card-noir p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">npm Malware Detection</h3>
                      <p className="text-xs text-muted-foreground">{malwareData.total} malicious packages tracked</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                    {malwareData.campaign} Campaign
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {malwareData.packages.slice(0, 3).map((pkg) => (
                    <code key={pkg} className="text-xs px-2 py-1 rounded bg-danger/10 text-danger/80 border border-danger/20">
                      {pkg}
                    </code>
                  ))}
                  <span className="text-xs px-2 py-1 text-muted-foreground">+{malwareData.packages.length - 3} more</span>
                </div>
              </div>
            </div>
          )}

          {/* Ecosystem Tab */}
          {activeTab === "ecosystem" && (
            <div className="animate-fade-up">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {ecosystem.map((tech) => (
                  <div 
                    key={tech.name}
                    className="card-noir p-5 text-center group hover:border-primary/50 transition-all"
                  >
                    <div 
                      className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-xl font-bold"
                      style={{ 
                        background: `${tech.color}15`,
                        border: `1px solid ${tech.color}30`,
                      }}
                    >
                      <span style={{ color: tech.color }}>{tech.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-xs font-mono text-muted-foreground mb-3">{tech.versions}</p>
                    <div className="space-y-1">
                      {tech.features.map((f) => (
                        <div key={f} className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-success" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Usage Tab */}
          {activeTab === "tools" && (
            <div className="animate-fade-up space-y-10">
              {/* Tools Grid */}
              <div>
                <h3 className="font-display text-xl font-bold mb-6 text-center">
                  <span className="text-gradient-ultramarine">Included</span> Tools
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.map((tool) => (
                    <div 
                      key={tool.name} 
                      className={`card-noir p-4 flex items-center gap-4 ${tool.primary ? 'border-primary/30' : ''}`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        tool.primary ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        <Zap className={`w-5 h-5 ${tool.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="min-w-0">
                        <code className={`text-sm font-mono block truncate ${tool.primary ? 'text-primary' : 'text-foreground'}`}>
                          {tool.name}
                        </code>
                        <p className="text-xs text-muted-foreground truncate">{tool.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="font-display text-xl font-bold mb-6 text-center">
                  Quick <span className="text-gradient-ultramarine">Commands</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {useCases.map((uc) => (
                    <div key={uc.title} className="card-noir p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <uc.icon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">{uc.title}</span>
                      </div>
                      <div className="rounded-lg bg-background/50 border border-border p-2 font-mono text-xs">
                        <span className="text-muted-foreground">$ </span>
                        <span className="text-primary">{uc.cmd}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
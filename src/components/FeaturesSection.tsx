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

const features = [
  {
    icon: Search,
    title: "CVE Detection",
    description: "Detects critical vulnerabilities including CVE-2025-55182 and CVE-2025-66478 with CVSS 10.0 severity.",
    highlight: "CVSS 10.0",
  },
  {
    icon: Shield,
    title: "Auto-Patching",
    description: "Automatic remediation with scan → detect → patch → verify workflow. 100% patch success rate.",
    highlight: "100% Success",
  },
  {
    icon: AlertTriangle,
    title: "Malware Scanner",
    description: "Detects npm malware including the Shai Hulud campaign and supply chain attacks.",
    highlight: "7,106+ Packages",
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Scan your entire GitHub account without cloning. Private repos and org support included.",
    highlight: "No Cloning",
  },
  {
    icon: Bot,
    title: "AI Assistant Ready",
    description: "MCP server integration for Claude Desktop, Cursor, and any MCP-compatible AI assistant.",
    highlight: "MCP Server",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your code stays local. Never uploads code or paths. All scan results stored locally only.",
    highlight: "100% Local",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Scan 2,665 projects in 12 seconds locally. 100+ repos in 30 seconds via GitHub API.",
    highlight: "12 Seconds",
  },
  {
    icon: FileCode,
    title: "Comprehensive Reports",
    description: "Detailed JSON reports with vulnerability info, affected versions, and remediation steps.",
    highlight: "JSON Export",
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
            <div 
              key={feature.title}
              className="card-noir p-6 group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

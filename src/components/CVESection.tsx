import { AlertTriangle, Shield, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const cveData = [
  {
    id: "CVE-2025-55182",
    name: "React2Shell",
    severity: "CRITICAL",
    cvss: "10.0",
    package: "React",
    affectedVersions: "19.0.0, 19.1.0, 19.1.1, 19.2.0",
    patchedVersions: "19.0.1, 19.1.2, 19.2.1",
    description: "Remote Code Execution vulnerability in React Server Components allowing attackers to execute arbitrary code on the server.",
    advisory: "https://github.com/advisories/GHSA-fv66-9v8q-g76r",
  },
  {
    id: "CVE-2025-66478",
    name: "Next.js RCE",
    severity: "CRITICAL",
    cvss: "10.0",
    package: "Next.js",
    affectedVersions: "15.0.x - 16.0.x",
    patchedVersions: "15.0.5+, 15.1.9+, 15.2.6+, 15.3.6+, 15.4.8+, 15.5.7+, 16.0.7+",
    description: "Critical vulnerability in Vercel Next.js affecting Server Side Rendering and API routes with potential for full server compromise.",
    advisory: "https://github.com/advisories/GHSA-9qr9-h5gf-34mp",
  },
];

const malwarePackages = [
  "@postman/security-helpers",
  "@posthog/plugin-geoip",
  "@asyncapi/openapi-schema-parser",
  "@ensdomains/content-hash",
  "@zapier/secret-scrubber",
];

const malwareIndicators = [
  "bun_environment.js",
  "setup_bun.js",
  "trufflehog",
  ".truffler-cache",
  "cloud.json",
  "truffleSecrets.json",
];

const CVESection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 20% 50%, hsl(0, 84%, 60%, 0.2), transparent)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge-detective mb-6 inline-flex">
            <AlertTriangle className="w-4 h-4" />
            Vulnerability Database
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-ultramarine">CVEs</span> We Detect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive detection for critical vulnerabilities affecting React, Next.js, and npm ecosystems.
          </p>
        </div>

        {/* CVE Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cveData.map((cve) => (
            <div key={cve.id} className="card-noir p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-danger/20 text-danger border border-danger/30">
                      {cve.severity}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      CVSS {cve.cvss}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {cve.id}
                  </h3>
                  <p className="text-primary font-mono text-sm">{cve.name}</p>
                </div>
                <Shield className="w-10 h-10 text-danger/50" />
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {cve.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase w-24 shrink-0">Package</span>
                  <span className="text-sm font-mono text-foreground">{cve.package}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-danger uppercase w-24 shrink-0">Affected</span>
                  <span className="text-sm font-mono text-danger/80">{cve.affectedVersions}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-success uppercase w-24 shrink-0">Patched</span>
                  <span className="text-sm font-mono text-success/80">{cve.patchedVersions}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="mt-6 border-border hover:border-primary/50"
                onClick={() => window.open(cve.advisory, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Advisory
              </Button>
            </div>
          ))}
        </div>

        {/* Malware Section */}
        <div className="card-noir p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary border border-primary/30">
                  MALWARE
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Shai Hulud Campaign
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                npm Supply Chain Attacks
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                Detecting 7,106+ malicious packages including the notorious Shai Hulud campaign
              </p>
            </div>
            <AlertTriangle className="w-10 h-10 text-primary/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Malicious Packages */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-danger" />
                Known Malicious Packages
              </h4>
              <div className="space-y-2">
                {malwarePackages.map((pkg) => (
                  <div 
                    key={pkg}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-danger/5 border border-danger/20"
                  >
                    <AlertTriangle className="w-4 h-4 text-danger shrink-0" />
                    <code className="text-xs font-mono text-danger/80">{pkg}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Malware Indicators Detected
              </h4>
              <div className="space-y-2">
                {malwareIndicators.map((indicator) => (
                  <div 
                    key={indicator}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <code className="text-xs font-mono text-foreground/80">{indicator}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVESection;
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const cves = [
  {
    id: "CVE-2025-55182",
    severity: "CVSS 10.0",
    package: "React",
    affected: "19.0.0 - 19.2.0",
    patched: "19.0.1, 19.1.2, 19.2.1",
    description: "React2Shell - Critical RCE in React Server Components",
  },
  {
    id: "CVE-2025-66478",
    severity: "CVSS 10.0",
    package: "Next.js",
    affected: "15.0 - 16.0.x",
    patched: "15.0.5+, 16.0.7+",
    description: "Vercel/Next.js Advisory - Server-side vulnerability",
  },
];

const malwarePackages = [
  "@postman/security-helpers",
  "@posthog/plugin-geoip",
  "@asyncapi/openapi-schema-parser",
  "@ensdomains/content-hash",
  "@zapier/secret-scrubber",
];

const DetectionSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge-detective mb-6 inline-flex">
            <AlertTriangle className="w-4 h-4" />
            Threat Detection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Gets <span className="text-gradient-gold">Detected</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CVE Table */}
          <div className="card-noir p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-danger/20 text-danger">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Critical CVEs</h3>
            </div>

            <div className="space-y-4">
              {cves.map((cve) => (
                <div 
                  key={cve.id} 
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-danger/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-danger font-semibold">{cve.id}</span>
                    <span className="text-xs bg-danger/20 text-danger px-2 py-1 rounded font-mono">
                      {cve.severity}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{cve.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Package:</span>
                      <span className="ml-2 text-foreground">{cve.package}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Affected:</span>
                      <span className="ml-2 text-danger">{cve.affected}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Patched:</span>
                      <span className="ml-2 text-success">{cve.patched}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Malware Table */}
          <div className="card-noir p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">npm Malware Detection</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Detects the <span className="text-primary font-medium">Shai Hulud Campaign</span> and other supply chain attacks:
            </p>

            <div className="space-y-2 mb-6">
              {malwarePackages.map((pkg) => (
                <div 
                  key={pkg}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border font-mono text-sm"
                >
                  <AlertTriangle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground">{pkg}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <h4 className="text-sm font-semibold mb-3 text-foreground">Indicators Detected:</h4>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs text-muted-foreground">
                <span>• bun_environment.js</span>
                <span>• setup_bun.js</span>
                <span>• trufflehog</span>
                <span>• .truffler-cache</span>
                <span>• cloud.json</span>
                <span>• truffleSecrets.json</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;

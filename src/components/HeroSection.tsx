import { Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import shellockolmLogo from "@/assets/shellockolm-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--gold) / 0.15), transparent)`,
        }}
      />
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line top-1/4" style={{ animationDelay: '0s' }} />
        <div className="scan-line top-1/2" style={{ animationDelay: '1s' }} />
        <div className="scan-line top-3/4" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Logo */}
          <div className="animate-fade-up flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: `radial-gradient(circle, hsl(var(--gold) / 0.4), transparent 70%)`,
                }}
              />
              <img 
                src={shellockolmLogo} 
                alt="Shellockolm - Security Detective Logo" 
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float"
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up-delay-1 mb-6">
              <span className="badge-detective">
                <Shield className="w-4 h-4" />
                Security Detective for React & Next.js
              </span>
            </div>

            {/* Main headline */}
            <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gradient-gold glow-text">Shellockolm</span>
            </h1>

            <p className="animate-fade-up-delay-2 font-display text-xl md:text-2xl text-foreground/90 mb-4 italic">
              "Elementary, my dear developer!"
            </p>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Your security detective that detects CVE-2025-55182, CVE-2025-66478, malware, 
              and supply chain attacks. Elementary security for complex codebases.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold glow-gold animate-glow-pulse"
                onClick={() => window.open('https://github.com/hlsitechio/shellockolm', '_blank')}
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary hover:border-primary/50 px-8 py-6 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-5 h-5 mr-2" />
                See Features
              </Button>
            </div>
          </div>
        </div>

        {/* Terminal preview - full width below */}
        <div className="animate-fade-up-delay-3 max-w-4xl mx-auto mt-16 lg:mt-24">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-danger" />
              <div className="terminal-dot bg-primary" />
              <div className="terminal-dot bg-success" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="terminal-body text-left">
              <p className="text-muted-foreground">$ pip install shellockolm</p>
              <p className="text-success mt-2">✓ Successfully installed shellockolm</p>
              <p className="text-muted-foreground mt-4">$ python src/auto_fix.py ~/projects</p>
              <p className="text-primary mt-2">🔍 Scanning 2,665 projects...</p>
              <p className="text-foreground mt-1">   → Found 19 critical CVEs</p>
              <p className="text-foreground">   → 0 malware packages detected</p>
              <p className="text-success mt-2">✓ Patched with 100% success rate</p>
              <p className="text-muted-foreground mt-1">   Time: 12 seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

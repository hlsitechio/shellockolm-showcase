const stats = [
  { value: "Fast", label: "Local Scanning", sublabel: "seconds not minutes" },
  { value: "100%", label: "Coverage", sublabel: "all lockfiles scanned" },
  { value: "Auto", label: "Patching", sublabel: "one-click fixes" },
  { value: "16+", label: "Malware Types", sublabel: "indicators tracked" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with ultramarine glow effect */}
      <div className="absolute inset-0 bg-navy" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 100% 100% at 50% 0%, hsl(var(--ultramarine) / 0.1), transparent 50%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="stat-number text-gradient-ultramarine mb-2 group-hover:glow-text transition-all">
                {stat.value}
              </div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

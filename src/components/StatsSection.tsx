const stats = [
  { value: "2,688", label: "Projects Scanned", sublabel: "local + GitHub" },
  { value: "12s", label: "Scan Time", sublabel: "for local projects" },
  { value: "100%", label: "Patch Rate", sublabel: "success rate" },
  { value: "7,106+", label: "npm Packages", sublabel: "analyzed" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with glow effect */}
      <div className="absolute inset-0 bg-navy" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 100% 100% at 50% 0%, hsl(var(--gold) / 0.08), transparent 50%)`,
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
              <div className="stat-number text-gradient-gold mb-2 group-hover:glow-text transition-all">
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

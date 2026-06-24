import { STATS } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { useCounter } from "../hooks/useCounter";

function StatCard({
  icon,
  target,
  suffix,
  decimals,
  label,
  delay,
}: {
  icon: string;
  target: number;
  suffix: string;
  decimals: number;
  label: string;
  delay?: 1 | 2 | 3;
}) {
  const { ref, display } = useCounter({ target, suffix, decimals });

  return (
    <Reveal delay={delay}>
      <article className="stat-card glass">
        <div className="stat-icon">
          <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
        </div>
        <p className="stat-value" ref={ref}>{display}</p>
        <p className="stat-label">{label}</p>
      </article>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="stats section" aria-label="Key statistics">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              decimals={stat.decimals}
              label={stat.label}
              delay={i > 0 && i <= 3 ? (i as 1 | 2 | 3) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

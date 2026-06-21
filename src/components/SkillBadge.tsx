import type { SkillBadge as SkillBadgeType } from "../data/portfolio";

export function SkillBadge({ skill }: { skill: SkillBadgeType }) {
  return (
    <span className="skill-badge">
      {skill.logo ? (
        <img
          className={`skill-badge-logo${skill.logoClass ? ` ${skill.logoClass}` : ""}`}
          src={skill.logo}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          aria-hidden="true"
        />
      ) : (
        <i className={skill.icon} aria-hidden="true"></i>
      )}
      {skill.label}
    </span>
  );
}

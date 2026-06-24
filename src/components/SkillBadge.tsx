import type { SkillBadge as SkillBadgeType } from "../data/portfolio";

export function SkillBadge({ skill }: { skill: SkillBadgeType }) {
  const tooltip =
    skill.years && skill.proficiency
      ? `${skill.proficiency} · ${skill.years}`
      : skill.years ?? skill.proficiency ?? skill.label;

  return (
    <span className="skill-badge" tabIndex={0}>
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
      <span className="skill-badge-tooltip" role="tooltip">
        {tooltip}
      </span>
    </span>
  );
}

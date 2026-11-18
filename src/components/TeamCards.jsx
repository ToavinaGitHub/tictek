import { team } from '../data/team';
import { useLocale } from '../i18n';
import BrandIcon from './BrandIcon';
import { TechList } from './ProjectCard';

/** First and last initials: "Haja Herilalaina" -> "HH". */
const initials = (name) => {
  const parts = name.split(/\s+/).filter(Boolean);
  const letters = parts.length > 1 ? [parts[0], parts[parts.length - 1]] : parts;
  return letters.map((part) => part.charAt(0).toUpperCase()).join('');
};

/**
 * Team members from data/team.js. With a photo: a portrait card. Without:
 * a compact card (initials badge, name, role, LinkedIn) so the missing
 * photo does not take the stage; the LinkedIn profile is the proof.
 */
export default function TeamCards() {
  const { lang, t } = useLocale();
  const compact = team.some((member) => !member.photo);

  return (
    <ul className={compact ? 'team-grid team-grid-compact' : 'team-grid'}>
      {team.map((member) => (
        <li className="team-card" key={member.name}>
          {member.photo && !compact ? (
            <img src={member.photo} alt={member.name} width={480} height={600} loading="lazy" className="team-photo" />
          ) : member.photo ? (
            <img src={member.photo} alt="" width={64} height={64} loading="lazy" className="team-badge" />
          ) : (
            <span className="team-badge" aria-hidden="true">
              {initials(member.name)}
            </span>
          )}
          <div className="team-body">
            <h3>{member.name}</h3>
            <p className="team-role">
              <strong>{member.role[lang]}</strong>
              {member.title?.[lang]}
            </p>
            {member.focus && <TechList items={member.focus[lang]} />}
            {member.linkedin && (
              <a href={member.linkedin} className="team-link" target="_blank" rel="noopener noreferrer">
                <BrandIcon name="linkedin" size={18} />
                {t.common.linkedinProfile}
                <span className="visually-hidden"> : {member.name}</span>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

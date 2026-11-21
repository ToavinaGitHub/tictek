import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import { CaseStudy } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function Work() {
  const { t } = useLocale();
  const page = t.pages.work;

  return (
    <>
      <PageHeader pageId="work" title={page.h1} lede={page.lede} />
      <div className="container case-list">
        {projects.map((project, i) => (
          <CaseStudy key={project.slug} project={project} priority={i === 0} reverse={i % 2 === 1} />
        ))}
      </div>
      <CtaBand />
    </>
  );
}

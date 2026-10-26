import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function Work() {
  const { t } = useLocale();
  const page = t.pages.work;

  return (
    <>
      <PageHeader pageId="work" title={page.h1} lede={page.lede} />
      <div className="container grid grid-3 project-list">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i === 0} />
        ))}
      </div>
      <CtaBand />
    </>
  );
}

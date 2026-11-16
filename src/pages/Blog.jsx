import { posts } from '../data/posts';
import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import PostCard from '../components/PostCard';
import CtaBand from '../components/CtaBand';

export default function Blog() {
  const { t } = useLocale();
  const page = t.pages.blog;

  return (
    <>
      <PageHeader pageId="blog" title={page.h1} lede={page.lede} />
      <div className="container grid grid-3 project-list">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} priority={i === 0} />
        ))}
      </div>
      <CtaBand />
    </>
  );
}

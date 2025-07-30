import {
  getPostBySlug,
  generateStaticParams as fetchStaticParams,
} from "@/lib/posts";

// require public to GithubPage
export const generateStaticParams = fetchStaticParams;

async function BlogDetailPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}

export default BlogDetailPage;

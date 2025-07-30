import { getPosts } from "@/lib/posts";
import List from "./list";
import Pagination from "./pagination";

async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams?.page) || 1;
  const limit = 100;

  const { posts, totalPages } = await getPosts(page, limit);

  return (
    <>
      <List posts={posts} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </>
  );
}

export default BlogPage;

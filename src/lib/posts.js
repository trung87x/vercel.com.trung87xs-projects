const POST_URL = process.env.NEXT_PUBLIC_POST_URL;

export async function getPosts(page = 1, perPage = 10) {
  // This function would typically fetch posts from an API or database
  const response = await fetch(
    `${POST_URL}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const totalPosts = Number(response.headers.get("X-WP-Total"));
  const totalPages = Number(response.headers.get("X-WP-TotalPages"));

  const posts = await response.json();

  return {
    posts: posts.map((post) => {
      const author = post._embedded?.author?.[0];
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const category = post._embedded?.["wp:term"]?.[0]?.[0];

      return {
        id: post.id,
        slug: post.slug,
        title: post.title?.rendered || "",
        excerpt: post.excerpt?.rendered || "",
        content: post.content?.rendered || "",
        link: post.link || "",
        date: post.date,
        href: `/blog/${post.slug}`,

        // 🖼️ Ảnh đại diện (featured image)
        imageUrl: media?.source_url || "/placeholder.jpg",

        // 🧾 Danh mục đầu tiên
        category: {
          title: category?.name || "Uncategorized",
          href: `/category/${category?.slug || "uncategorized"}`,
        },

        // 👤 Tác giả
        author: {
          name: author?.name || "Unknown",
          href: `/author/${author?.slug || "unknown"}`,
          imageUrl: author?.avatar_urls?.["96"] || "/avatar.png",
          role: "Author", // hoặc xử lý theo `author.meta` nếu có
        },

        // ✅ Tùy biến thêm nếu cần
        description: post.excerpt?.rendered || "",
      };
    }),
    totalPosts,
    totalPages,
  };
}

export async function getPostById(id) {
  const response = await fetch(`${POST_URL}/wp-json/wp/v2/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID ${id}`);
  }

  const post = await response.json();

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || "",
    excerpt: post.excerpt?.rendered || "",
    content: post.content?.rendered || "",
    link: post.link || "",
  };
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${POST_URL}/wp-json/wp/v2/posts?slug=${slug}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch post with slug "${slug}"`);
  }

  const post = await response.json();

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || "",
    excerpt: post.excerpt?.rendered || "",
    content: post.content?.rendered || "",
    link: post.link || "",
  };
}

export async function searchPosts(keyword, page = 1, perPage = 10) {
  const response = await fetch(
    `${POST_URL}/wp-json/wp/v2/posts?search=${encodeURIComponent(keyword)}&page=${page}&per_page=${perPage}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to search posts with keyword "${keyword}"`);
  }

  const totalPosts = Number(response.headers.get("X-WP-Total"));
  const totalPages = Number(response.headers.get("X-WP-TotalPages"));

  const posts = await response.json();

  return {
    posts: posts.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      content: post.content?.rendered || "",
      link: post.link || "",
    })),
    totalPosts,
    totalPages,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${POST_URL}/wp-json/wp/v2/posts`);
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

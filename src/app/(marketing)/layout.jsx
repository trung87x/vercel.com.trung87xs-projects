function BlogLayout({ children }) {
  return (
    <div className="blog-layout">
      <nav>Menu Blog</nav>
      {children}
    </div>
  );
}

export default BlogLayout;

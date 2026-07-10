# Nextjs-Blog

A modern, fast, and SEO-friendly personal blog built with Next.js, React, and Markdown/MDX. 

## 🚀 Features

*   **Next.js App Router** – Utilizing server components and optimized routing.
*   **Static Site Generation (SSG)** – Blazing fast page load speeds.
*   **MDX Support** – Write blog posts in Markdown with embedded React components.
*   **Tailwind CSS** – Fully responsive and clean UI with Dark Mode support.
*   **SEO Optimized** – Built-in dynamic sitemaps, open graph tags, and metadata.
*   **RSS Feed** – Automated RSS feed generation for blog readers.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com)
*   **Content:** [MDX](https://mdxjs.com) or Contentlayer / Contentful
*   **Deployment:** [Vercel](https://vercel.com)

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com
cd Nextjs-Blog
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your required keys (e.g., analytics, CMS tokens, or site URLs):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

## ✍️ Writing New Posts

Blog posts are stored in the `/content` (or `/posts`) folder as `.md` or `.mdx` files. To write a new post, create a file with frontmatter metadata:

```markdown
---
title: "My First Next.js Blog Post"
publishedAt: "2026-07-10"
summary: "An introduction to building fast blogs with Next.js."
image: "/images/blog-placeholder.jpg"
---

Your markdown content goes here...
```

## 🏗️ Deployment

The easiest way to deploy this blog is to use the **Vercel Platform**:

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import your repository into Vercel.
3. Vercel will automatically detect Next.js and deploy your application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

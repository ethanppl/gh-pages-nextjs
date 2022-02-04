This is a [Next.js](https://nextjs.org/) project template that can be exported as a static website and deploy on GitHub Pages.
This template demonstrates how to display images, how to handle hyperlinks, and how to generate static pages for pages that use Next.js dynamic routing.

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Check out how dynamic routes are handled in `pages/demo/[page].tsx`.

## Use this as a template

Click "Use this template" on top. Remember to change the `repoName` to the name of your repository in [`next.config.js`](/next.config.js). Read more on [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Deploy on GitHub Pages

This template set up a GitHub action that builds, exports and pushes to the `gh-pages` branch for publishing. Navigate to settings -> pages, and set the root folder in the `gh-pages` branch as the source. Read more about GitHub Pages on [GitHub documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

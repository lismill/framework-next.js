# create-next-project

This is a `Next.js` project bootstrapped with `create-next-app`

## 运行环境

`node 17.0.0 npm 8.1.0`

## 初始化项目

`npx create-next-app create-next-project`

## 多环境变量

## Tailwind CSS

### 安装依赖

`npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev`

### 配置

`tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
};
```

`postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`./globals.scss`

```scss
@import "./tailwind.scss";
```

`./tailwind.scss`

```scss
@tailwind base;
@tailwind utilities;
// @tailwind components;
```

### 使用

```tsx
<div className="mt-[20px] text-[50px]">Hello tailwindcss.</div>
```

## 使用 SVG

### 安装

`npm install --save-dev @svgr/webpack`

### 配置

`npm install --save-dev @svgr/webpack`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack
  webpack(config) {
    // @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
```

### 使用

## 约定式路由

## GIT 提交信息规范

### 安装

```bash
npm install husky --save-dev
npm install lint-staged --save-dev
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

### 配置

`commitlint.config.js`

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

## 代码提交前进行 lint 校验

## 安装

```bash
npx husky add .husky/pre-commit "npm run precommit"
```

## 配置

`package.json`

```json
"precommit": "lint-staged",
```

`.lintstagedrc`

```js
module.exports = {
  "**/*.{ts,tsx,js,jsx}": ["npm run lint --dir src"],
};
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

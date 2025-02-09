This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Improvements

When I first read the instructions I thought "maybe Ash wants to play MTG later in life so I could make this work with multiple TCGs" so I started writing the services and components as abstract and decoupled as possible. Then I saw the time it was and I had to stop haha. There were some tools that I wanted to play a bit with so this took more the half a day, and still theres a lot of things that could be improved:

- Make Layout components more presentational instead of hardcoding the data
- Add tests
- Add a normalizer function to the Pokemon Service in case of having another TCG
- Table page:
  - Add Pagination
  - Get filter values from API
  - Add filter to allow more items per page and possibly data virtualization
  - Possibly use a Headless Table like `TanStack Table`
  - Make it pretty =)

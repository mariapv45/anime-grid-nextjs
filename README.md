# Anime Grid

**Link to Project**: [Web Challenge](https://leonardoai-web-challenge.vercel.app)

## 📝 Notes
- **Cookies** are used to persist user information (username and job title) across sessions without needing a backend or database. This enables a seamless and personalized experience when users return to the site.
- **Middleware** helps protect routes by checking for the presence of the user cookie. If the cookie is missing, users are redirected to the login page. This ensures only users with a valid session can access protected pages like the anime grid.

### Areas for Improvement

- **Error Handling**: Improve error handling and catch unexpected failures (e.g., cookie issues, network errors).
- **Form Validation**: Currently handled on the server using `zod`. Adding client-side validation would enhance the user experience.
- **Server-Side Rendering (SSR)**: Explore better use of SSR or React Suspense to enhance loading performance.
- **UI Improvements**: Loading skeleton for modal display of anime data. Display a success message to inform users when their profile has been updated. Apply theming to ensure a cohesive and consistent visual design across the application.
- **Testing**: Due to time constraints, tests were not included in this submission. With more time, I would add unit and integration tests — particularly around GraphQL data fetching, form submission, and error states — to improve confidence and maintainability.
- **Notes on Authentication**: This project uses basic browser cookies to persist user information (username and job title) across sessions. While suitable for demonstration, a production-ready application should implement secure authentication and store user data in a database.

## Features

- **Anime Grid:** Paginated, responsive grid of anime fetched from a GraphQL API.
- **Anime Details Modal:** Click any anime tile to view detailed info in a modal.
- **User Profile:** Enter and persist your username and job title.
- **Responsive Design**
- **Chakra UI v3.21:** Uses the latest Chakra UI components and patterns.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Chakra UI](https://chakra-ui.com/) v3.21
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [TypeScript](https://www.typescriptlang.org/)

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

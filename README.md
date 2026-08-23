# 🗳️ VoteFlow

A public feedback & upvote board where users can submit ideas, vote on them, and filter by category or status — a mini Canny/ProductHunt-style panel.

🔗 **[Live Demo](https://vote-flow-phi.vercel.app/)**

---

## ✨ Features

- Browse feedback posts with title, description, category, status, and vote count
- Filter by category and search by title — both reflected in the URL (`?category=...&query=...`) so filtered views are shareable/bookmarkable
- Submit new ideas through a modal form, written directly to PostgreSQL via a Next.js Server Action
- Upvote posts via a Server Action — the button state updates instantly, and the vote count refreshes once the page revalidates
- Post detail pages with comments; adding a comment updates the thread immediately
- Dashboard stats: total posts, under review, in progress, and completed counts

---

## 🛠️ Technologies

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** PostgreSQL, accessed via Prisma ORM (with the `pg` driver adapter)
- **Mutations:** Next.js Server Actions (no separate REST API layer)
- **Deployment:** Vercel

---

## 📸 Preview

![VoteFlow feedback board screenshot](./dashboard.png)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

```bash
git clone https://github.com/ItsLxst/VoteFlow
cd VoteFlow
npm install
```

Create a `.env` file in the root:

```
DATABASE_URL=postgresql://user:password@localhost:5432/voteflow
```

Apply the schema and seed sample data:

```bash
npx prisma migrate dev
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📚 What I Learned

- Using Next.js Server Actions for mutations (creating posts, upvoting, adding comments) instead of building separate API routes
- Modeling a one-to-many relation with Prisma (`Post` ↔ `Comment`, with cascade delete)
- Building shareable, URL-driven filters with Next.js `searchParams` instead of client-side-only state
- Using `revalidatePath` to refresh server-rendered data after a mutation

---

## 🔮 Future Improvements

- [ ] Add real user authentication — comments currently post under a hardcoded name, and votes aren't tied to a user
- [ ] Add a proper `Vote` model (`User` ↔ `Post` ↔ `Vote`) instead of a simple counter, to prevent duplicate voting
- [ ] Make the vote count update instantly on click (true optimistic UI) instead of waiting for page revalidation
- [ ] Add loading/pending states to the submit-idea and comment forms
- [ ] Add pagination for posts as the board grows
- [ ] Add tests

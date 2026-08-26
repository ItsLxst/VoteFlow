# 🗳️ VoteFlow

A public feedback & upvote board where users can submit ideas, vote on them, and filter by category or status — a mini Canny/ProductHunt-style panel.

🔗 **[Live Demo](https://vote-flow-phi.vercel.app/)**

---

## ✨ Features

- Browse feedback posts with title, description, category, status, and vote count
- Filter by category and search by title — both reflected in the URL (`?category=...&query=...`) so filtered views are shareable/bookmarkable
- Submit new ideas through a modal form, written directly to PostgreSQL via a Next.js Server Action, with a pending state on the submit button
- Upvote posts with true optimistic UI (`useOptimistic`) — the vote count updates instantly on click, before the server confirms
- Per-visitor vote tracking via a persistent cookie identity and a `Vote` model — duplicate voting is prevented and vote state survives page reloads
- Post detail pages with comments; adding a comment updates the thread immediately with a pending state on submit
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

- Using `useOptimistic` for instant UI feedback ahead of server confirmation
- Managing anonymous, persistent user identity with cookies set in Next.js middleware
- Modeling a many-to-many-style relation with a unique constraint (`Vote`) to enforce one-vote-per-visitor at the database level
- Using `useFormStatus` to show pending states during form submission

---

## 🔮 Future Improvements

- [ ] Add real user authentication (currently identity is anonymous, cookie-based)
- [ ] Add pagination for posts as the board grows
- [ ] Add tests

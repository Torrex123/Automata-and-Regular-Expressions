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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   A u t o m a t a - a n d - R e g u l a r - E x p r e s s i o n s  
 
```
automatas
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ 1a4e2f74e392003694cf5a6fd773169ac64191
│  │  ├─ 08
│  │  │  └─ 210ccaab532b302080c570a5dceba7ec81aef3
│  │  ├─ 09
│  │  │  └─ a8a4d2c4eadd6bb56f5e72afd0830b38773eaf
│  │  ├─ 17
│  │  │  └─ 6b46bb2548fed639037f949010b825dfc24993
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 26
│  │  │  └─ 74b2b2982191a84c08b0a8023337b1479af04c
│  │  ├─ 3b
│  │  │  └─ 0b134368a12b9168b830f8dcb19092de359f56
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 60
│  │  │  └─ 0043fdd793c39c467d1e96c8ec611061e8a1d2
│  │  ├─ 69
│  │  │  └─ d81114a857b2c578a9299cc766cff1f30242e2
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 8a
│  │  │  └─ 460419f91fba9fe68b3fc81c3811a009f8c5fc
│  │  ├─ b8
│  │  │  └─ d6842d7fad0a64e5ffa846e104342233782852
│  │  ├─ bf
│  │  │  ├─ 2ad1a2182aba70f0ceef360053f355ed7c2eec
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c3
│  │  │  └─ 7cbe010b1765dc7f9c08a95f8aead12b924500
│  │  ├─ db
│  │  │  └─ a50f7662f90b4452b6f0b81162eea788763642
│  │  ├─ e3
│  │  │  └─ 734be15e1f6fbb4b207761c8e424b77cf3a4eb
│  │  ├─ e5
│  │  │  └─ 6f5ee0efb1898c05a6f5b05fd6170801b3bea3
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ Dockerfile
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   └─ app
      ├─ api
      │  └─ process
      │     └─ route.js
      ├─ components
      │  ├─ additionalInfo.js
      │  ├─ automata.js
      │  ├─ component.module.css
      │  ├─ recognition.js
      │  ├─ simulation.js
      │  └─ transitionTable.js
      ├─ favicon.ico
      ├─ fonts
      │  ├─ GeistMonoVF.woff
      │  └─ GeistVF.woff
      ├─ globals.css
      ├─ layout.js
      ├─ logic
      │  ├─ app.py
      │  ├─ construction.py
      │  ├─ main.py
      │  ├─ nfa.py
      │  ├─ postfixer.py
      │  └─ __pycache__
      │     ├─ construction.cpython-312.pyc
      │     ├─ nfa.cpython-312.pyc
      │     └─ postfixer.cpython-312.pyc
      ├─ page.js
      └─ page.module.css

```
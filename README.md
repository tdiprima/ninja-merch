[Solid JS Tutorial](https://www.youtube.com/watch?v=uPXn9S31o7Q&list=PL4cUxeGkcC9gU_GvFygZFu0aBysPilkbB&index=1)

## Setup

https://www.solidjs.com/guides/getting-started

```sh
npx degit solidjs/templates/js ninja-merch
cd ninja-merch
npm install
npm run dev
```

http://localhost:3000/

https://tailwindcss.com/docs/guides/solidjs

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Put this in `content` in the tailwind config file:

```
"./src/**/*.{js,jsx,ts,tsx}"
```

Put 3 tailwind directives inside global css file `index.css`.

## Playground

https://playground.solidjs.com/

## Router

https://github.com/solidjs/solid-router#getting-started

```sh
npm i -D @solidjs/router
```

Wrap the `<Router>` component around the root `<App />` component in `index.jsx`.  Import Router.  Then set up routes inside the app component.

<br>

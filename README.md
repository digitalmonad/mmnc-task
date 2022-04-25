# Momence task

This project is the solution for interview task for Momence company.

The business requirements of the app were:

- [ ] Client part is single page app written in ReactJS framework
- [ ] After start, the app fetches exchange rates from https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt
- [ ] Fetched data are processed and displayed to user
- [ ] Attach simple form, where user can input amount of money in CZK and after pressing a button displays the amount of selected currency
- [ ] Commit often and use GitHub as the remote repository
- [ ] Tech. stack should include React (+ Hooks), TypeScript, Styled Components, React Query

#

App is automatically deployed on Heroku after each commit to master and can be previewed on this URL: https://mmnc-task.herokuapp.com/

#

## Scripts

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Build NextJS static files:

```bash
npm run build
# or
yarn build
```

- the app is build in /.next folder

Run NextJS server:

```bash
npm run start
# or
yarn start
```

- build script must be run beforehand

Run tests:

```bash
npm run test
# or
yarn test
```

Run Storybook to view and develop components.

```bash
npm run storybook
# or
yarn storybook
```

- Storybook configuration files can be found in /.storybook folder

#

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

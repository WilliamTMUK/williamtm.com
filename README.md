# Williamtm.com

Website built using [Next.js](https://nextjs.org) and the
[Neobrutalism](https://www.neobrutalism.dev) component library. It is hosted on
GitHub pages.

## Installation

You must have Node installed. There is a `.nvmrc` file which contains the
appropriate Node version. To make sure this is installed, you can use [Node
Version Manager](https://github.com/nvm-sh/nvm);

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# In lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install
```

Node dependencies should be installed using NPM.

```bash
npm i
```

## Development

To work on the project locally, you can run `npm run dev` which will give you a
URL to visit. This includes hot-reloading. [Tailwind](https://tailwindcss.com)
is used for styling HTML and [Neobrutalism](https://www.neobrutalism.dev)
components can be used.

### Pages

Pages are found in the `src/app` folder. Each page should be created in a folder
which matches the URI you want. The page should be a `page.tsx` template.

### Data

Separate data files are used to manage content. These are found within the
`app/data` folder.

## Deployment

Any commits made to the `main` branch are automatically deployed to GitHub pages
using the `deploy.yaml` workflow.

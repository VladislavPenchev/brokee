# @brokee

## Setup

### Prerequisites

#### Node and NPM via NVM

**Install NVM:**

Follow the instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating).

**Install the version of node specified in the `.nvmrc` file and switch to it:**

```bash
nvm install
nvm use
```

**(Optional) Set the node version as default:**

```bash
nvm alias default $(cat .nvmrc)
```

**(Optional) Automatically switch Node version when changing directories:**

Follow the instructions for your shell [here](https://github.com/nvm-sh/nvm#deeper-shell-integration).

#### PNPM

**Install PNPM:**

Follow the instructions [here](https://pnpm.io/installation).

### Install Node modules

```bash
pnpm install
```

## Running the app

```bash
# build the app
pnpm run build
# run in development mode
pnpm run dev
```

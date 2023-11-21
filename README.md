# Bean

Bean is an example of a simple setup for tRPC and Next.js(App Router). It demonstrates how to use tRPC with Next.js. The aim about this repo to demonstrate how to create simple TypeSafe APIs without schema files and type generation.

## Overview

Here are the core parts of this simple implementation and how you can use them in your own project. Project contained under the `src` folder. We have two main folders `app` and `server`.

`app`: This folder contains the actual Next.js application.
`server`: This folder contains the tRPC server, all your API endpoints will be defined here.

However, there is an `api/trpc/[trpc]/route.ts` file under the `app` folder. This route handle tRPC requests. It's an simple implementation.

At the server folder. We have `trpc` file that init the tRPC server. And the `index` file initiate the router with the routes that we defined under the `routes` folder.

import { itemRouter } from "./routes/item";
import { router } from "./trpc";

export const appRouter = router({
  item: itemRouter,
});

export type AppRouter = typeof appRouter;

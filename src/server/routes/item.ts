import { publicProcedure, router } from "../trpc";

export const itemRouter = router({
  hello: publicProcedure.query(() => {
    return { text: "Hello World" };
  }),
});

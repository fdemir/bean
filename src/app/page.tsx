import { serverClient } from "./_trpc/api.server";

export default async function Page() {
  const { text } = await serverClient.item.hello();

  return <h1>{text}</h1>;
}

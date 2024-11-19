import { prisma } from "@repo/database";
import type { User } from "../../../packages/database/src/client";

export default async function IndexPage() {
  const users: User = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

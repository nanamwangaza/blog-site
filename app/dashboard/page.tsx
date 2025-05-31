import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BlogCard } from "../components/BlogCard";
import { Suspense } from "react";

async function getData(userId: string | undefined) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

async function BlogPost() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Your blog posts</h1>
        <Link
          className={`${buttonVariants()} w-fit`}
          href={"/dashboard/create"}
        >
          Create post
        </Link>
      </div>

      <Suspense fallback={<p>Waiting....</p>}>
        {/* suspense can't be used in an async component, thats why tumetengeneza another component BlogPost. We use Suspense */}
        <BlogPost />
      </Suspense>
    </div>
  );
}

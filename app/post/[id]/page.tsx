import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

type Params = Promise<{ id: string }>;

export default async function Post({ params }: { params: Params }) {
  const { id } = await params;

  const data = await getData(id);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col gap-6">
        <Link className={`${buttonVariants()} w-fit`} href="/dashboard">
          Back to posts
        </Link>
        <h1 className="text-2xl font-semibold">{data?.title}</h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <div className="relative size-8 overflow-hidden rounded-2xl">
              <Image
                src={data?.image || ""}
                alt={data?.authorName || "author name"}
                fill
              />
            </div>
            <h1 className="">{data?.authorName}</h1>
          </div>

          <p className="text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(data?.createdAt)}
          </p>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src={data?.imageUrl || ""}
            alt={data?.title || ""}
            fill
            className="object-cover"
            priority //makes sure image is loaded and rendered faster
          />
        </div>

        <Card>
            <CardContent>
                <p className="text-gray-700">{data?.content}</p>
            </CardContent>
        </Card>
      </div>

      <div></div>
    </div>
  );
}

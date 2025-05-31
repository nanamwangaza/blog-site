import Image from "next/image";
import Link from "next/link";

interface AppProps {
  data: {
    title: string;
    image: string;
    id: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogCard({data} : AppProps){
    return (
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
        <Link href={`/post/${data.id}`} className="block w-full h-full">
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={data.imageUrl}
              alt="Imageee"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {data.content}
            </p>{" "}
            {/* line clamp means max no. of lines we want our paragraph to show */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <div className="relative size-8 overflow-hidden rounded-2xl">
                  <Image
                    src={data.image}
                    alt="author image"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>{data.authorName}</p>
              </div>

              <time className="text-xs text-gray-500">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(data.createdAt)}
              </time>
            </div>
          </div>
        </Link>
      </div>
    );

}
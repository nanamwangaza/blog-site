import { prisma } from "./utils/db"

async function getData(){
const data = await prisma.blogPost.findMany({
  select:{
    title:true,
    content:true,
    authorName:true,
  }
});
return data;
}

export default async function Home() {
  const data =await getData();
  return (
    <div>
      <h1>Welcome home</h1>
    </div>
  );
}

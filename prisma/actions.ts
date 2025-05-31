"use server"

import { prisma } from "@/app/utils/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function handleSubmission(formData:FormData){
const {getUser} = getKindeServerSession();
const user =await getUser();

if(!user){
    redirect("/api/auth/register") //if no authenticated user, we don't handle submission
}

const title = formData.get("title");
const content = formData.get("content");
const imageUrl = formData.get("imageUrl");

   await prisma.blogPost.create({
     data: {
       title: title as string,
       content: content as string,
       imageUrl: imageUrl as string,
       authorId: user?.id as string,
       authorName: user?.given_name as string,
       image: user?.picture as string,
     },
   });
   return redirect("/dashboard");
}
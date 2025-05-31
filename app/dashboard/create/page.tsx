import SubmitButton from "@/app/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { handleSubmission } from "@/prisma/actions";

export default function CreateBlog(){
    return (
      <div>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Create post</CardTitle>
            <CardDescription>
              Create a new post to share to the world
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4" action={handleSubmission}>
              <div className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input name="title" required type="text" placeholder="Title" />
                {/* name is the reference we look at when sending data to db*/}
              </div>

              <div className="flex flex-col gap-2">
                <Label>Content</Label>
                <Textarea name="content" required placeholder="Content" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Image Url</Label>
                <Input name="imageUrl" required type="text" placeholder="Image url" />
              </div>

            <SubmitButton/>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}
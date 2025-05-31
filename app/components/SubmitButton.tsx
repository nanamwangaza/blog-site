"use client"

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(){
    const { pending } = useFormStatus();
    return (
      <Button className="w-fit mx-auto" type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Create post"}
      </Button>
      //When pending is true, the button is disabled — preventing the user from clicking it multiple times while the form is submitting.
    );
}
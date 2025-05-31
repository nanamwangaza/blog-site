"use client"; // Mark as Client Component

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "@/components/ui/button";

interface AuthButtonsProps {
  isAuthenticated: boolean;
}

export default function AuthButtons({ isAuthenticated }: AuthButtonsProps) {
  return isAuthenticated ? null : (
    <div className="flex justify-between gap-4">
      <LoginLink className={buttonVariants()}>Login</LoginLink>
      <RegisterLink className={buttonVariants()}>SignUp</RegisterLink>
    </div>
  );
}

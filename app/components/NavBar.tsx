
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import { buttonVariants } from "@/components/ui/button";

export default async function Navbar() {

const {getUser} = getKindeServerSession();
const user = await getUser();
const isAuthenticated = !!user;

  return (
    <nav className="py-7 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="font-semibold text-3xl">
          Blog<span className="text-blue-500">Marshal</span>
        </h1>

        <Link
          href={"/"}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href={"/dashboard"}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          Dashboard
        </Link>

        <Link
          href={"/"}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          Contacts
        </Link>
      </div>

      {user ? (
        <div className="flex items-center justify-between gap-4">
          <span>{user.given_name}</span>
          <LogoutLink
            className={buttonVariants()}
            postLogoutRedirectURL="https://blog-site-delta-ruddy.vercel.app"
          >
            Logout
          </LogoutLink>
        </div>
      ) : (
        <AuthButtons isAuthenticated={isAuthenticated} />
      )}
    </nav>
  );
}

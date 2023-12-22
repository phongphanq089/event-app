import React from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-white fixed inset-x-0 z-50 h-auto">
      <header className="realtive bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 ">
            <div className=" flex items-center justify-center">
              <Link href="/" className="mr-auto flex items-center">
                <Logo className="w-[70px] mb-2" />
              </Link>
              <div className="mx-auto  hidden md:block ">
                <SignedIn>
                  <NavItems />
                </SignedIn>
              </div>
              <div className="ml-auto flex items-center">
                <div className="flex items-center">
                  <div className="user-avatar">
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </div>
                  <div className="ml-5">
                    <MobileNav />
                  </div>
                  <SignedOut>
                    <Link
                      href={"/sign-up"}
                      className={buttonVariants({
                        className: "w-[100px]",
                      })}
                    >
                      Login
                    </Link>
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Header;

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { SwitchTheme } from "@/components/SwitchTheme";

export const Header = () => (
  <header className="flex items-center p-4 gap-4">
    <SwitchTheme />
    <SignedOut>
      <SignInButton />
      <SignUpButton>
        <button className="bg-primary text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          Sign Up
        </button>
      </SignUpButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
);

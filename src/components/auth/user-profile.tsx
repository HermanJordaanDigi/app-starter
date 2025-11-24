"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { SignInButton } from "./sign-in-button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut, LayoutDashboard, FileText, CreditCard, Coins } from "lucide-react";
import { useDemoMode } from "@/contexts/demo-mode-context";
import { useMockData } from "@/contexts/mock-data-context";

export function UserProfile() {
  const { data: session, isPending } = useSession();
  const { isDemoMode } = useDemoMode();
  const { user: mockUser } = useMockData();
  const router = useRouter();

  if (isPending && !isDemoMode) {
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />;
  }

  // In demo mode, use mock user
  if (isDemoMode) {
    const user = mockUser;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-8 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              referrerPolicy="no-referrer"
            />
            <AvatarFallback>
              {user.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium leading-none">
                {user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Badge variant="secondary" className="text-xs">
                  {user.plan}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Coins className="h-3 w-3" />
                  <span>{user.credits} credits</span>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard" className="flex items-center cursor-pointer">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/site-plans" className="flex items-center cursor-pointer">
              <FileText className="mr-2 h-4 w-4" />
              My Site Plans
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/pricing" className="flex items-center cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              Buy Credits
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled className="text-muted-foreground">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out (Demo Mode)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (!session) {
    return <SignInButton />;
  }

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-8 cursor-pointer hover:opacity-80 transition-opacity">
          <AvatarImage
            src={session.user?.image || ""}
            alt={session.user?.name || "User"}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback>
            {(
              session.user?.name?.[0] ||
              session.user?.email?.[0] ||
              "U"
            ).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/site-plans" className="flex items-center cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            My Site Plans
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/pricing" className="flex items-center cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            Buy Credits
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

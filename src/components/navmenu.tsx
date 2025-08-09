"use client"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function Navmenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#about">About</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Projects</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Resume</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Get in Contact</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description:
      "a collection of beautiful tops for your wardrobe to sleek your look.",
  },
  {
    title: "Pants",
    href: "/pants",
    description:
      "a collection of beautiful pants for your wardrobe to sleek your look.",
  },
  {
    title: "Accessories/Jeweleries",
    href: "/accessories",
    description:
      "a collection of beautiful Accessories/Jeweleries for your wardrobe to sleek your look.",
  },
  {
    title: "Shoes",
    href: "/shoes",
    description:
      "a collection of beautiful Shoes for your wardrobe to sleek your look.",
  },

]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
         Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite">
              {components.map((component) => (
                <Link 
                key={component.title}
                href={component.href}
                legacyBehavior
                 passHref
                >
                <ListItem  title={component.title}>
                  {component.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/aboutUs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
           About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
           Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myOrange ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-myBlackPara">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

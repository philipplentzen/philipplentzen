import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const NavigationMenu = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>((props, ref) => {
  const { className, children, ...otherProps } = props;

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        `relative z-10 flex max-w-max flex-1 items-center justify-center`,
        className,
      )}
      {...otherProps}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export const NavigationMenuList = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        `group flex flex-1 list-none items-center justify-center space-x-2`,
        className,
      )}
      {...otherProps}
    />
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTrigger = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>((props, ref) => {
  const { className, children, ...otherProps } = props;

  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(
        `data-active:text-cyan hover:text-cyan data-[state=open]:text-cyan group inline-flex w-max items-center justify-center font-semibold leading-5 transition-colors disabled:pointer-events-none disabled:opacity-50`,
        className,
      )}
      {...props}
    >
      {children}
      {` `}
      <ChevronDownIcon
        className={`relative top-px ml-1 size-3 transition group-data-[state=open]:rotate-180`}
        aria-hidden={true}
      />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export const NavigationMenuContent = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      `right-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute`,
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export const NavigationMenuLink = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Link>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(
        `hover:text-cyan block text-black transition-all`,
        className,
      )}
      {...otherProps}
    />
  );
});
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

export const NavigationMenuViewport = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={cn(
        `max-w-(--breakpoint-md) absolute right-0 top-full w-[calc(100vw-2rem)] pl-0 sm:pl-8 lg:pl-0`,
      )}
    >
      <NavigationMenuPrimitive.Viewport
        className={cn(
          `h-(--radix-navigation-menu-viewport-height) bg-cyan/20 relative mt-4 w-full origin-top-right overflow-hidden text-black shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90`,
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

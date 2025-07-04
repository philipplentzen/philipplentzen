import { cn } from "@/lib/utils";
import { NavigationMenu } from "@base-ui-components/react";
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";

export const Navigation = NavigationMenu.Root;

export const NavigationList = forwardRef<
  ComponentRef<typeof NavigationMenu.List>,
  ComponentPropsWithoutRef<typeof NavigationMenu.List>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <NavigationMenu.List
      ref={ref}
      className={cn(`relative flex`, className)}
      {...otherProps}
    />
  );
});
NavigationList.displayName = "NavigationList";

export const NavigationItem = NavigationMenu.Item;

import { NavigationMenu } from "@base-ui-components/react";
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

export const Navigation = NavigationMenu.Root;

export const NavigationList = forwardRef<
  ComponentRef<typeof NavigationMenu.List>,
  ComponentPropsWithoutRef<typeof NavigationMenu.List>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <NavigationMenu.List
      ref={ref}
      className={cn(`relative flex gap-2`, className)}
      {...otherProps}
    />
  );
});
NavigationList.displayName = "NavigationList";

export const NavigationItem = NavigationMenu.Item;

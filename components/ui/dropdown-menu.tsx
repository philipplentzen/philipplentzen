import { cn } from "@/lib/utils";
import { Menu } from "@base-ui-components/react";
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";

export const DropdownMenu = Menu.Root;

export const DropdownMenuTrigger = Menu.Trigger;

export const DropdownMenuContent = forwardRef<
  ComponentRef<typeof Menu.Positioner>,
  ComponentPropsWithoutRef<typeof Menu.Positioner>
>((props, ref) => {
  const { children, className, sideOffset = 4, ...otherProps } = props;

  return (
    <Menu.Portal>
      <Menu.Positioner
        ref={ref}
        className={"outline-none"}
        sideOffset={sideOffset}
        {...otherProps}
      >
        <Menu.Popup
          className={cn(
            "z-50 min-w-32 rounded border border-current/20 bg-background py-1 text-text outline-none",
            "max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
            className,
          )}
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuGroup = Menu.Group;

export const DropdownMenuItem = forwardRef<
  ComponentRef<typeof Menu.Item>,
  ComponentPropsWithoutRef<typeof Menu.Item>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <Menu.Item
      ref={ref}
      className={cn(
        "flex h-8 cursor-default items-center gap-2 rounded px-4 text-sm outline-hidden select-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-secondary data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-secondary/20",
        className,
      )}
      {...otherProps}
    />
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";

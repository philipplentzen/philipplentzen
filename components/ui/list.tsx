import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const listVariants = cva(`w-full`, {
  variants: {
    divided: {
      true: `divide-y divide-black/10`,
      false: ``,
    },
  },
  defaultVariants: {
    divided: false,
  },
});

type ListProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof listVariants>;

export const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { className, divided, ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={cn(listVariants({ divided, className }))}
      {...otherProps}
    />
  );
});
List.displayName = `List`;

export const listItemVariants = cva(`relative flex w-full xl:px-12`, {
  variants: {},
  defaultVariants: {},
});

type ListItemProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof listItemVariants>;

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return (
      <div
        ref={ref}
        className={cn(listItemVariants({ className }))}
        {...otherProps}
      />
    );
  }
);
ListItem.displayName = `ListItem`;

import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const listVariants = cva(`w-full`, {
  variants: {
    divided: {
      true: `divide-y divide-black/20`,
      false: ``,
    },
  },
  defaultVariants: {
    divided: false,
  },
});

type ListProps = HTMLAttributes<HTMLOListElement> &
  VariantProps<typeof listVariants>;

export const List = forwardRef<HTMLOListElement, ListProps>((props, ref) => {
  const { className, divided, ...otherProps } = props;

  return (
    <ol
      ref={ref}
      className={cn(listVariants({ divided, className }))}
      {...otherProps}
    />
  );
});
List.displayName = `List`;

export const listItemVariants = cva(`relative flex w-full p-2 xl:px-12`, {
  variants: {},
  defaultVariants: {},
});

type ListItemProps = HTMLAttributes<HTMLLIElement> &
  VariantProps<typeof listItemVariants>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return (
      <li
        ref={ref}
        className={cn(listItemVariants({ className }))}
        {...otherProps}
      />
    );
  }
);
ListItem.displayName = `ListItem`;

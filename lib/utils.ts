import {twMerge} from "tailwind-merge";
import classNames from "classnames";

export const cn = (...args: classNames.ArgumentArray) => {
	return twMerge(classNames(...args));
};

"use client";
import React, {forwardRef, UIEvent, useCallback, useRef} from "react";
import {IconButton} from "../../../_components/buttons";

export const ProjectsCarousel = () => {
	const element = useRef(null);
	const handler = useCallback((event: UIEvent<HTMLDivElement>) => {
		(element.current as HTMLDivElement).style.marginLeft = `-${(event.target as HTMLDivElement).scrollLeft}px`;
	}, []);

	return (
		<>
			<div className={`pl-absolute pl-w-full pl-flex pl-gap-6 pl-overflow-x-scroll pl-snap-x pl-snap-mandatory pl-opacity-0`} onScroll={handler}>
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-aspect-poster pl-shrink-0 pl-snap-start`} />
			</div>
			<div className={`pl-w-full pl-flex pl-gap-6 pl-overflow-x-visible`}>
				<Poster ref={element} />
				<Poster />
				<Poster />
				<Poster />
				<Poster />
				<Poster />
			</div>
			<div className={`pl-text-right pl-space-x-2 pl-mt-6`}>
				<IconButton href={`#projects`} name={`arrow-left`} title={`Links`} />
				<IconButton href={`#projects`} name={`arrow-right`} title={`Rechts`} />
			</div>
		</>
	);
};

const Poster = forwardRef<HTMLDivElement>(({}, ref) => {
	return (
		<div className={`pl-w-4/12 pl-aspect-poster pl-bg-cyan pl-shrink-0 pl-snap-start`} ref={ref} />
	);
});
Poster.displayName= `Poster`;

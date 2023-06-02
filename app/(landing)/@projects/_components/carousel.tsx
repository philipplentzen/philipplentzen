"use client";
import React, {UIEvent, useCallback, useRef} from "react";

export const ProjectsCarousel = () => {
	const element = useRef(null);
	const handler = useCallback((event: UIEvent<HTMLDivElement>) => {
		(element.current as HTMLDivElement).style.marginLeft = `-${(event.target as HTMLDivElement).scrollLeft}px`;
	}, []);

	return (
		<>
			<div className={`pl-absolute pl-w-full pl-flex pl-gap-6 pl-overflow-x-scroll pl-snap-x pl-snap-mandatory pl-opacity-0`} onScroll={handler}>
				<div className={`pl-w-4/12 pl-h-96 pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-h-96 pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-h-96 pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-h-96 pl-shrink-0 pl-snap-start`} />
				<div className={`pl-w-4/12 pl-h-96 pl-shrink-0 pl-snap-start`} />
			</div>
			<div className={`pl-w-full pl-flex pl-gap-6 pl-overflow-x-visible`}>
				<div className={`pl-w-4/12 pl-h-96 pl-bg-cyan pl-shrink-0`} ref={element} />
				<div className={`pl-w-4/12 pl-h-96 pl-bg-cyan pl-shrink-0`} />
				<div className={`pl-w-4/12 pl-h-96 pl-bg-cyan pl-shrink-0`} />
				<div className={`pl-w-4/12 pl-h-96 pl-bg-cyan pl-shrink-0`} />
				<div className={`pl-w-4/12 pl-h-96 pl-bg-cyan pl-shrink-0`} />
			</div>
		</>
	);
};

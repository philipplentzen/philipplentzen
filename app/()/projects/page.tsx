import {H1} from "../../_components/headings";
import React from "react";
import {Content} from "../../_components/content";
import {ProjectsCarousel} from "./_components/carousel";

const ProjectsPage = () => {

	return (
		<>
			<H1 className={`pl-z-10`}>
				Projekte
			</H1>
			<Content>
				<ProjectsCarousel />
			</Content>
		</>
	);
};

export default ProjectsPage;

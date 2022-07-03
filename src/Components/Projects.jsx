import React from 'react';
import '../CSS/Projects.css';
import { ProjectsData } from './ProjectsData';

export default Projects;

function Projects() {

	return(
		<div className="container_projectslinks">	
		{ProjectsData.map((project)=>{
            return(
                <>
                <a href={project.link}>
                    <div className="project_container" > 
                        <div className='project_title'>
                            {project.title}
                        </div> 
                        <div className="project_image">
                            <img src={project.image}></img>
                        </div>
                        <div className='project_subtitle'>
                            {project.subtitle}
                        </div>
                    </div>  
                </a>
                </>
            )
        })}
		</div>
	)	
}



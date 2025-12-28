import React from 'react';
import bgImg from "/src/img/Projects Page.png"
import ProjectType from './projectType/ProjectType';
const Project = () => {
    return (
        <div style={{backgroundImage: `url(${bgImg})`}} 
        className="bg-cover bg-center h-450 lg:h-200 py-15 lg:py-20">
            <ProjectType></ProjectType> 
            
        </div>
    );
};

export default Project;



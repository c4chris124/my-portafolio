import React from 'react'
import Project from '../Project/Project'
import './ProjectList.scss'
import {projects} from '../../data'


const ProjectList = () => {
  return (
    <div className='pl-container'>
      <div className='pl-texts'>
        <h1 className='pl-title'>My Portfolio</h1>
        <p className='pl-desc'>
          Check some of my projects, hover to preview them!
        </p>
      </div>
      <div className="pl-list">
        {projects.map((p) => (
          <Project key={p.id} img={p.img} link={p.link} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
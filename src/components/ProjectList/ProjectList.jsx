import React from 'react'
import Project from '../Project/Project'
import './ProjectList.scss'

const ProjectList = () => {
  return (
    <div className='pl-container'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & inspire. It's Chris</h1>
        <p className='pl-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae sit quis modi nisi ad nemo officiis libero sed vel!
        </p>
      </div>
      <div className="pl-list">
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
}

export default ProjectList
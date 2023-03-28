import React from 'react'
import'./Skills.css'
import{BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skill I Have</h5>
      <h2>My Experiences</h2>
      <div className="container experience__container">
        <div className="experiences__frontend">
            <h3>FrontEnd Development</h3>
            <div className="experiences__content">

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>Tailwind</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
            </div>
        </div>
        <div className="experiences__programming">
          <h3>Programming Language</h3>
          <div className="experiences__content">
             <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>C</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>C++</h4>
                    <small className='text-light'>Beginer</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>Python</h4>
                    <small className='text-light'>Beginer</small>
                  </div> 
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>Java</h4>
                    <small className='text-light'>Intermediate</small>
                  </div> 
              </article>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Skills

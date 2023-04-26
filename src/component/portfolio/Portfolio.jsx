import React from 'react'
import'./Portfolio.css'

  const data=[
            {
                id:1,
                image:"./assets/TodoList.jpg",
                title:'Todo App',
                github:"https://github.com/coder-ismile/todo-app",
                demo:"//coder-ismile.github.io/todo-app/"
            },
          {
              id:2,
              image:"./assets/Gym.avif",
              title:'FitClub App',
              github:"https://github.com/coder-ismile/FitClub",
              demo:"https://ismiletechexercise.netlify.app/"
          },
          {
            id:3,
            image:"./assets/NetFlix.jpg",
            title:'NetFlix Clone',
            github:"https://github.com/coder-ismile/NetflixClone",
            demo:" https://netflixclone-app-b1611.web.app"
          },
          {
            id:4,
            image:"./assets/Youtube.jpg",
            title:'Youtube Clone',
            github:"https://github.com/coder-ismile/youtubeClone",
            demo:" https://app-33e8d.web.app"
          },  
          {
            id:5,
            image:"./assets/portfolio1.jpg",
            title:'Admin Dashoard',
            github:"https://github.com/coder-ismile/AdminDashBoard",
            demo:"https://admin-dashboard-db6bd.web.app"
          },
          {
            id:6,
            image:"./assets/ChatApp.jpg",
            title:'ChatApp',
            github:"https://github.com/coder-ismile/ChatApp",
            demo:"https://react-chat-app-2ee99.web.app"
          },
          {
            id:7,
            image:"./assets/codepen.png",
            title:'CodePen Clone',
            github:"https://github.com/coder-ismile/codePen_clone",
            demo:"https://coder-ismile.github.io/codePen_clone/"
          },

  ]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container_port portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
               <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className="btn" target='__blank'>Github</a>
                <a href={demo} className="btn btn-primary" target='__blank'>Live Demo</a>
                </div>
               </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio

import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

import { homeProjectAPI } from '../services/allAPI';

function Home() {

  const [homeProject, sethomeProject] = useState([])

  const token = sessionStorage.getItem("token")
  console.log(token);

  const getHomeProjects = async () => {
    const result = await homeProjectAPI()
    sethomeProject(result.data)


  }
  console.log(homeProject);
  useEffect(() => {
    getHomeProjects()
  }, [])



  return (
    <>
      <div style={{ width: '100%', height: '100vh', backgroundColor: "yellowgreen" }}>
        <div className="row container" style={{ height: '80vh' }}>
          <div className="col-md-1"></div>
          <div className="col-md-8 col-sm-12 d-flex justify-content-center flex-column " style={{ marginTop: '20px' }}>

            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '55px' }}>Project Fair</h1>
            <p style={{ fontSize: '20px', color: 'white' }}><i>One stop destination for all software development projects</i></p>
            {
              token ?
                <>  <Link to='/dashboard'> <button style={{ backgroundColor: " rgb(18, 35, 52)", color: 'white', width: '150px' }} className='btn rounded-4'>Manage Projects</button></Link>
                </> :
                <>
                  <Link to='/login'>  <button style={{ backgroundColor: " rgb(18, 35, 52)", color: 'white', width: '150px' }} className='btn rounded-4'>Get Started</button></Link>
                </>
            }
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }} >
            <img width='650' src='https://codup.co/wp-content/uploads/2021/07/React-Developer-A-Short-Guide-to-Everything-React.png' />
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>

      {/* section for all projects */}

      <div className="all-project" style={{ backgroundColor: "yellowgreen" }}>
        <div className="text-center">
          <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>Explore Our Projects</h1>
          <div className="text-center text-light " style={{ backgroundColor: "yellowgreen" }}>
            <h6 ><Link to='./project' style={{ textDecoration: 'none' }}>See More</Link></h6>
          </div>
          <div className='row'>
            {
              homeProject?.length > 0 ?

                homeProject.map((items) => (
                  <div className="col-lg-4">
                    <ProjectCard homeProject={items} />
                  </div>
                ))
                : null
            }

          </div>

        </div>
      </div>


    </>
  )
}

export default Home
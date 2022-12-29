import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import imag from "./imgg/why-us.png";
import './View.css';
import logo from './imgg/RURUTEK - Logo Original.svg';
import edit from './imgg/edit.png';

export default function View() {
    const {empid} = useParams();
    const [toggles,setToggles] = useState(false);
    const navigate = useNavigate()
    const [taskviewandedit,setTaskviewandedit] =useState([{}])
    const progresspage = `/progress/${empid}`;


    useEffect(()=>{
      axios.get(`http://172.16.0.160:3001/getonereport/${empid}`).then((res)=>{setTaskviewandedit(res.data.user)})
  },[])


  let d = new Date();
  // console.log('Today is: ' + d.toLocaleString());
  d.setDate(d.getDate() - 1);
  let  i = 0,j=0;
  // console.log('1 days ago was: ' + d.toLocaleString());
  let showtwodaysonly = taskviewandedit.filter((dat) => {
      return new Date(dat.date).toLocaleDateString('en-US') ===new Date().toLocaleDateString('en-US') || new Date(dat.date).toLocaleDateString('en-US')===new Date(d).toLocaleDateString('en-US')
  });
  let todayonly = taskviewandedit.filter((dat) => {
    return new Date(dat.date).toLocaleDateString('en-US') ===new Date().toLocaleDateString('en-US')});
  let yesterdayonly = taskviewandedit.filter((dat) => {
    return new Date(dat.date).toLocaleDateString('en-US')===new Date(d).toLocaleDateString('en-US')});

  // console.log(showtwodaysonly)
  return (
    <div >
    <header id="header" className="fixed-top header-scrolled">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><img src={logo}  width='150px'></img></h1>
      <nav id="navbar" className={toggles? "navbar navbar-mobile":"navbar"} >
        <ul>
          <li><a className="nav-link scrollto" href={progresspage}>View Progress</a></li>
          <li><a className="getstarted scrollto" href="/">Logout</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" onClick={(e)=>{setToggles(!toggles)}}/>
      </nav>
    </div>
  </header>
  <main id="main">
  <section  id = 'view' className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
      {showtwodaysonly.length !== 0?<div className="content">
        <h3>You have completed below <strong> task</strong></h3></div>
        :
        <>
        <div className="content">
          <h3>You haven't completed a <strong>TASK</strong></h3>
          </div>
        <div className="accordion-list">
          <ul>
           <li>
              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"> No Task Completed 
              <div className="form-group">
                  </div> <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
              
                <p>
                  Complete a task to view here
                </p>
              </div>
            </li>
          </ul>
        </div>
        </>
        }
        <div className="accordion-list">
          <ul>
          {showtwodaysonly.map((view ,index)=> 
           <li>


              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"> Task completed on {view.date} 
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" id="updatetask" onClick={() => navigate(`/edit/${empid}/${view._id}`)}><img src={edit} width='27px' ></img></button>

                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
              </a>


              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
              
                <p>
              
                {view.task.map((viewtask,index)=><p><span>{new Date(d).toLocaleDateString('en-US')===new Date(view.date).toLocaleDateString('en-US')?<>{i=i+1}</>:<>{j=j+1}</>}.</span>{viewtask.tasks}</p>)}
                </p>
              </div>
            </li>)}
          </ul>
        </div>
      </div>
      <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url("${imag}")`}} data-aos="zoom-in" data-aos-delay={150}></div>
    </div>
  </div>
</section>
</main>
</div> 
  )
}

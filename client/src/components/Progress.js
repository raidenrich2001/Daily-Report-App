import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Looper from './Looper';
import logo from './imgg/RURUTEK - Logo Original.svg';

export default function Progress() {
  const [scroll, setScroll] = useState(false);
  const [user,setUser] = useState([{}]);
  const [toggles, setToggles] = useState(false);
  const [progres, setProgres] = useState([])
  const { empid } = useParams();
  const today=new Date()
  var monthcurrent = today.getFullYear() + '-' + (today.getMonth() + 1)
  const[month,setMonth]=useState (monthcurrent)
  let i = 1;
  const viewpage = `/view/${empid}`;

  let datafilter=progres.filter((datfil)=>
     new Date(datfil.date).getMonth()+1===new Date(month).getMonth()+1 && new Date(datfil.date).getFullYear()===new Date(month).getFullYear() )

     useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);

  useEffect(() => {

    axios.get(`http://172.16.0.160:3001/getonereport/${empid}`).then((res) => { setProgres(res.data.user) })
  }, [])

    useEffect(() => {
    axios.get(`http://172.16.0.160:3001/singleuser/${empid}`).then(res => setUser(res.data.user))
  }, [])
  return (
    <>
      <header id="header" className={scroll?"fixed-top header-scrolled":"fixed-top"}>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><img src={logo} width='150px'></img></h1>

          <nav id="navbar" className={toggles ? "navbar navbar-mobile" : "navbar"} >
            <ul>
              <li><a className="nav-link scrollto" href="#Report">Go to Top</a></li>
              <li><a className="nav-link scrollto" href={viewpage}>View and Edit</a></li>
              {/* <li><a className="nav-link scrollto" href="#Report">View Progress</a></li> */}
              <li><a className="getstarted scrollto" href="/">Logout</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={(e) => { setToggles(!toggles) }} />
          </nav>
        </div>
      </header>
      <br></br>
      <main id="main">
        <section id="Report" className="contact">
          <div className="container" data-aos="fade-up">
            {/* <div className="section-title">
              <h2 style={{color:'white'}}> Total Progress</h2>
            </div> */}
            <div className="row">
              <div className="col-12">
                <div className="bg-light rounded h-100 p-4">
                <div className="section-title">
                  <h5 className="text-center">{user[0].name}</h5>
                </div>
                  <div className='row skills' id="skills">
                    <div className="col-md-3 pt-4 pt-lg-0 content">
                      {/* <label htmlFor="name" >Date</label> */}
                      <input type="month" value={month} name="name" className="form-control" id="name"  onChange={(e)=>setMonth(e.target.value)} required />
                    </div>
                    
                    {/* <div className="col-lg-6 pt-5 pt-lg-0 content mx-auto" data-aos="fade-left" data-aos-delay="100">
                      <div className="skills-content ">
                        <div className="progress">
                          <span className="skill" >Total Progress <i className="val">{progress.total_prog}%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={show ? { width: "0%" } : { width: `${progress.total_prog}` }}></div>
                          </div>

                        </div>
                      </div>
                    </div> */}
                  </div>
                  <br></br>
                  <div className="row row-cards row-deck">
                    <div className="col-12">
                      <div className="card">
                      <div className="table-responsive">
                          <table  className="table table-bordered table-hover table-outline table-vcenter text-nowrap card-table">
                            <thead>
                              <tr>
                                <th className="text-center">Date</th>
                                <th className="text-center">Work</th>
                                <th className="text-center">Task</th>
                                <th className="text-center">Progress</th>
                                <th className="text-center">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                            {/* <span style={{display:'none'}}>{i=0}</span> */}
                              {user.map((userdatas, index) => <>
                              
                                {progres.filter((getuser) =>
                                  new Date(getuser.date).getMonth() + 1 === new Date(month).getMonth() + 1
                                  && new Date(getuser.date).getFullYear() === new Date(month).getFullYear()
                                  && getuser.empid === userdatas.empid).map((prog, index) =>
                                      
                                    <>
                                    
                                     {prog.task.map((pro,index)=>

                                      <tr key={index}>
                                         <td className='text-center' >{index === 0?<>{prog.date}</>:<></>}</td>
                                         <td>{pro.work}</td>
                                         <td>{pro.tasks}</td>
                                         <td className='text-center'>{pro.today_progress}%</td>
                                         <td style={{ color: pro.today_progress === "100" ? "green" : "red", display: 'flex', justifyContent: "center",textAlign:"center" }} key={index}> {pro.today_progress === "100" ? <span>Completed</span> : <span>In Progress</span>}</td>
                                       
                                      </tr>)}</>)}</>)}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </>
  )
}

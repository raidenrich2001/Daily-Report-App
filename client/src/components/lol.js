import axios from 'axios';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import Looper from './Looper';

export default function Admin() {
  const [selectname,setSelectname] = useState('')
  const [adminuser,setAdminuser] = useState({})
  const [user,setUser] = useState([{}]);
  const [toggles, setToggles] = useState(false);
  const [progres, setProgres] = useState([])
  const { department } = useParams();
  const { id } = useParams();
  const tableRef = useRef(null);
  const today=new Date()
  var monthcurrent = today.getFullYear() + '-' + (today.getMonth() + 1)
  const[month,setMonth]=useState (monthcurrent);
  let i = 1;

  useEffect(() => {
    axios.get(`http://172.16.0.142:3001/singleuserusingid/${id}`).then((res) => { setAdminuser(res.data) })
  }, [])

    useEffect(() => {
    axios.get(`http://172.16.0.142:3001/getdepartmentreport/${id}/${department}`).then(res => setProgres(res.data))
  }, [])

  
  useEffect(() => {
    axios.get(`http://172.16.0.142:3001/getdepartmentuser/${id}/${department}`).then(res => setUser(res.data))
  }, [])
  //  progres.filter((getuser) =>
  // new Date(getuser.date).getMonth() + 1 === new Date(month).getMonth() + 1
  // && new Date(getuser.date).getFullYear() === new Date(month).getFullYear()
  // && user === datas.name
  // && getuser.empid === datas.empid)

// console.log(progres)



  return (
    <>
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a>RuruTask</a></h1>
          <nav id="navbar" className={toggles ? "navbar navbar-mobile" : "navbar"} >
            <ul>
              <li><a className="nav-link scrollto" href="#Report">Go to Top</a></li>
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
              <h2> Total Task</h2>
            </div> */}
            <div className="row">
              <div className="col-12">
                <div className="bg-light rounded h-100 p-4">
                <div className="section-title">
                  <h5 className="text-center">{adminuser.department}</h5>
                </div>
                  <div className='row skills' id="skills">
                    <div className="col-md-3 pt-4 pt-lg-0 content">
                      <label htmlFor="name" >Date</label>
                      <input type="month" value={month} name="name" className="form-control" id="name"  onChange={(e)=>setMonth(e.target.value)} required />
                    </div>
                    <div className="form-group col-md-3">
              <label htmlFor="name">Choose Employee</label><span><i className="bx bx-chevron-down icon-show" /></span>

              <select className="form-control" name="name" id="name" value={selectname} onChange={(e) => setSelectname(e.target.value)} required>
              <option>Select Name</option>
              {user.filter((admin)=>admin.type !== "admin").map((datas, index) =><>
              <option key = {index}>{datas.name}</option>
              </>
              )}
              </select>
    
            </div>
            <div className="col-md-3 pt-lg-0 my-4 content">
            <DownloadTableExcel
                filename={selectname +" "+month}
                sheet={selectname}
                currentTableRef={tableRef.current}
            >
                <button className="btn btn-success">
                    Download Excel </button>
            </DownloadTableExcel>
            </div>
                  </div>
                  <br></br>
                  <div className="row row-cards row-deck">
                    <div className="col-12">
                      <div className="card">
                        <div className="table-responsive">
                          <table ref={tableRef} className="table table-hover table-outline table-vcenter text-nowrap card-table">

                            <thead>

                              <tr>
                                <th className="text-center">Date</th>
                                <th className="text-center">Work</th>
                                <th className="text-center">Task</th>
                                <th className="text-center">Progress</th>
                              </tr>

                            </thead>

                            <tbody>

                              {user.map((userdatas, index) => <>
                              {   progres.filter((getuser) =>
                                  new Date(getuser.date).getMonth() + 1 === new Date(month).getMonth() + 1
                                  && new Date(getuser.date).getFullYear() === new Date(month).getFullYear()
                                  && selectname === userdatas.name
                                  && getuser.empid === userdatas.empid).map((prog,index) =>
                              <tr>
                                  <td>
                                    <div className='text-center' key={index}>{prog.date}</div>
                                  </td>
                                  <td>
                                    <ol >
                                      {prog.task.map((pro, index) =>
                                        <div key={index}><li>{pro.tasks}</li></div>
                                      )}
                                    </ol>
                                  </td>
                                  <td>
                                    <ol >
                                      {prog.task.map((pro, index) =>
                                        <div key={index}><li>{pro.work}</li></div>
                                      )}
                                    </ol>
                                  </td>
                                  <td>
                                  {prog.task.map((pro, index) =><>
                                   <div className="progress"> <span className='text-center text-dark'> {pro.today_progress? pro.today_progress: 0}% </span>
                                   <div className="progress-bar-wrap">
                                   <div className="progress-bar" role="progressbar" style={{ width: `${pro.today_progress}%` }} > </div>
                                   </div>
                                 </div>
                                 </>
                                    )}
                                  </td>
                                    <p style={{display:'none'}}>{i++}</p>
                                </tr>
                                )}</>)}
                        
                                <Looper i={i}></Looper>


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

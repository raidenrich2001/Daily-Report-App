import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ScrollToTop from "react-scroll-to-top";
import Looper from './Looper';
import './Supremecommander.css'

export default function Supremecommander() {
    const { id } = useParams()
    const [is, setIs] = useState(true)
    const [selectname, setSelectname] = useState('')
    const [changeselectname, setChangeselectname] = useState('')
    const [showmore,setShowmore] = useState('..readmore')
    const [all, setAll] = useState([]);
    const [toggles, setToggles] = useState(false);
    const [user, setUser] = useState([])
    const today = new Date()
    var monthcurrent = today.getFullYear() + '-' + (today.getMonth() + 1)
    const [month, setMonth] = useState(monthcurrent);
    let departmentarray =[]


    useEffect(() => {
        axios.get(`http://172.16.0.160:3001/singleuserusingid/${id}`).then(res => setUser(res.data.user))
    }, [id])



    useEffect(() => {
        axios.get('http://172.16.0.160:3001/getalluserwithreport').then(res => setAll(res.data))
    }, [id])

    function changes(e) {
        setSelectname(e.target.value)
        setIs(false)
    }
    function changename(e) {
        setChangeselectname(e.target.value)
    }
    function readmore(getit)
    {
        setShowmore(getit)
    }

    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a>RuruTask</a></h1>
                    <nav id="navbar" className={toggles ? "navbar navbar-mobile" : "navbar"} >
                        <ul>
                            <li style={{ color: "white" }}>Hey {user.name}..!</li>
                            <li><a className="getstarted scrollto" href="/">Logout</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" onClick={(e) => { setToggles(!toggles) }} />
                    </nav>
                </div>
            </header>
            <br />
            {/* .filter((admin) => admin.type !== "manager" && admin.type !== "admin" && admin.type !== 'supreme') */}
            {/* .filter((item,index) => all.indexOf(item.department) === index) */}
            <main id="main">
                <section id="Report" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light rounded h-100 p-4 " >
                                    <div className="section-title">
                                        <h5 className="text-center">{user.department}</h5>
                                    </div>
                                    <div className='row skills' id="skills">
                                        <div className="col-md-3  content">

                                            <input type="month" value={month} name="name" className="form-control" id="name" onChange={(e) => setMonth(e.target.value)} required />
                                        </div>
                                        <div className="form-group col-md-3">

                                        {all.map((datas, index) => {departmentarray.push(datas.department)})}

                                            <select className="form-control" name="name" id="name" value={selectname} onChange={changes} required style={{ fontWeight: "600" }}>
                                                <option>Select Department</option>
                                                {departmentarray.filter((item,index) =>departmentarray.indexOf(item) === index).map((ind)=>
                                                <option>{ind}</option>)}
                                            </select>

                                        </div>
                                        <div className="form-group col-md-3">
                                            <select className="form-control" name="name" id="name" value={changeselectname} onChange={changename} required style={{ fontWeight: "600" }}>
                                                <option>Select Employee</option>
                                                {all.filter((admin) => admin.department === selectname).map((datas, index) => <>
                                                    <option key={index} >{datas.name}</option>
                                                </>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row row-cards row-deck lol">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-hover table-outline table-vcenter text-nowrap card-table">
                                                        <thead className="stickylol">
                                                            <tr> 
                                                                <th className="text-center">Date</th>
                                                                <th className="text-center">Work</th>
                                                                <th className="text-center">Task</th>
                                                                <th className="text-center">Progress</th>
                                                                <th className="text-center">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >


                                                                {all.map((userdatas, index) => <>

                                                                    {userdatas.reports.filter((getuser) =>
                                                                        new Date(getuser.date).getMonth() + 1 === new Date(month).getMonth() + 1
                                                                        && new Date(getuser.date).getFullYear() === new Date(month).getFullYear()
                                                                        && changeselectname === (userdatas.name)

                                                                        && getuser.empid === userdatas.empid).sort((a,b)=>new Date(a.date).getDate() > new Date(b.date).getDate()? 1 : -1) .map((prog, index) =>

                                                                            <>
                                                                                {prog.task.map((pro, index) =>

                                                                                    <tr key={index}>
                                                                                        {index === 0 ? <td className='text-center' >{prog.date}</td> : <></>}
                                                                                        <td>{pro.work}</td>
                                                                                        <td>{pro.tasks.length > 10? <p>{pro.tasks.slice(0,10)}{showmore === pro.tasks.slice(10) ? showmore :<span onClick={()=>setShowmore(pro.tasks.slice(10))}>...readmore</span>}</p> : <p>{pro.tasks}</p> }</td>
                                                                                        {/* <td style={{width:'100%',overflowX:'scroll'}}>{pro.tasks}</td> */}
                                                                                        <td className='text-center'>{pro.today_progress}%</td>
                                                                                        <td style={{ color: pro.today_progress === "100" ? "green" : "red", display: 'flex', justifyContent: "center", textAlign: "center" }} key={index}> {pro.today_progress === "100" ? <span>Completed</span> : <span>In Progress</span>}</td>

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
            <ScrollToTop smooth style={{ filter: "drop-shadow(2px 2px 1px  #47b2e4)" }} />
        </>
    )
}

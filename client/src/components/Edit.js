import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import employee from './imgg/employe.jpg';
import axios from 'axios';
import bin from './imgg/bin.png';
import plus from './imgg/plus.png';
import logo from './imgg/RURUTEK - Logo Original.svg';

export default function Edit() {
    const [toggles, setToggles] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [user, setUser] = useState([{}]);
    const [taskviewandedit,setTaskviewandedit] =useState([{}])
    const { id } = useParams();
    const { empid } = useParams();
    const viewpage = `/view/${empid}`;
    const progresspage = `/progress/${user[0].empid}`;
    let notYesterday = new Date().setDate(new Date().getDate() - 2);
    
    
  
    const [task, setTask] = useState(
      [{     tasks: '',
      work:'',
      today_progress: 0
    }]
    )
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    function addTask() {
      const added = {
        id: Math.floor(Math.random() * 1000),
        tasks: '',
        work:'',
        today_progress: 0
      }
      return setTask((prev) => [...prev, added])
    }
    function deleteTask(id) {
      return setTask((prev) => {
        return prev.filter((pre) => pre.id !== id)
      })
    }
  
    const handleTask = (index, event) => {
      const values = [...task];
      values[index][event.target.name] = event.target.value;
      setTask(values);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (task[0].tasks === "") {
          alert("Input Data")
        }
        else {
            const tasks = JSON.stringify(task);
            axios.post(`http://172.16.0.160:3001/updatereport/${id}`, {task:tasks}).then(res => alert(res.data))
        }
      }
    useEffect(() => {
        axios.get(`http://172.16.0.160:3001/singleuser/${empid}/${id}`).then(res => setUser(res.data.user))
      }, [])


    function handleSubmit() {
        if (task[0].tasks === "" || task[0].today_progress === 0) {
            alert("Input Data")
        }
        else {
            const tasks = JSON.stringify(task);
            axios.post(`http://172.16.0.160:3001/updatereport/${id}`, {task:tasks}).then(res => alert(res.data))
            
        }
    }
    useEffect(()=>{
      axios.get(`http://172.16.0.160:3001/getonereports/${empid}/${id}`).then((res)=>{setTaskviewandedit(res.data)})
  },[])

   
  return (
    <div>
    <header id="header" className={scroll ? "fixed-top header-scrolled" : "fixed-top"}>
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"> <img src={logo} width='150px'></img></h1>
        <nav id="navbar" className={toggles ? "navbar navbar-mobile" : "navbar"} >
          <ul>
            {/* <li><a className="nav-link scrollto" href="#Report">Go to Top</a></li> */}
            <li><a className="nav-link scrollto" href={viewpage}>View and Edit</a></li>
            <li><a className="nav-link" href={progresspage}>View Progress</a></li>
            <li><a className="getstarted" href="/">Logout</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={(e) => { setToggles(!toggles) }} />
        </nav>
      </div>
    </header>

    <main id="main">
      <section id="hero" className="team section-bg my-5"  >
        <div className="container" data-aos="fade-up">






          <div id='whole' className="row member d-flex align-items-start mx-auto" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row  d-flex align-items-center mx-auto">
              <div className="form-group col-lg-5 ">
                <h1 className="logo " id='heading'><a style={{ color: '#37517e', fontSize: '25px' }}>EDIT YOUR RURUTASK</a></h1>
              </div>
              
              <div className="form-group col-lg-4">
               <span>Date: {taskviewandedit.date}</span> 
              </div>
              <div className="form-group col-lg-1 my-1">
                <button type="button" className="btn" id="addtask" style={{ fontFamily: 'poppins' }} onClick={addTask} > <img src={plus} width='27px' ></img></button>
              </div>
              <div className="form-group col-lg-2 my-1">

                <button type="submit" id='submittask' className="btn" style={{ fontFamily: 'poppins' }} onClick={handleSubmit} >Submit</button>
              </div>

            </div>

            <div className="pic col-5 mx-auto"><img src={employee} className="img-fluid" alt />
              <div>
                <h4 style={{ textTransform: 'uppercase', fontFamily: 'poppins' }}>{user[0].name}</h4>
                <span style={{ fontFamily: 'poppins' }}>{user[0].department} Team</span>
              </div>
            </div>





            <div id='overflowtry' className="member-info col-7 mx-auto ">


              <form role="form" className="php-email-form">
              
                {task.map((exp, index) => <>
                  <div className='row'>
                    <div className="form-group col-lg-12 my-2">
                      {/* <label htmlFor="name" style={{fontFamily:'poppins'}}>Work</label> */}
                      <input class="form-control" value={exp.work} name="work" onChange={e => handleTask(index, e)} placeholder={`Edit today's Work ${index + 1}`} required></input>
                    </div>



                    <div class="form-group col-lg-12 my-2">
                      {/* <label htmlFor="name" style={{fontFamily:'poppins'}}>Task</label> */}
                      <textarea class="form-control" value={exp.tasks} name="tasks" rows="4" placeholder={`Edit task ${index + 1}`} onChange={e => handleTask(index, e)} required></textarea>
                    </div>
                  </div>
                  <div className='row justify-content-between'>
                    <div class="form-group col-9 my-2">
                      <label for="name" style={{ fontFamily: 'poppins' }}>{exp.today_progress}% Progress </label>
                      <input type="range" name="today_progress" className="form-range" style={{ border: "none" }} value={exp.today_progress} onChange={e => handleTask(index, e)} required />
                    </div>
                    <div className="form-group col-3  my-2">
                      <button type="button" className='my-2' id="deletetask" onClick={() => deleteTask(exp.id)}  > <img src={bin} width='27px' ></img> </button>

                    </div>
                  </div>
                </>)}
              </form>
            </div>

          </div>

          {/* </div> */}
        </div>
      </section>
    </main>

  </div>
  )
}

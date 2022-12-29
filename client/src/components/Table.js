import React from 'react'

export default function Table() {
  return (
    <div>
  <div className="container-xxl position-relative bg-white d-flex p-0">
    {/* Spinner Start */}
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    {/* Spinner End */}
    {/* Sidebar Start */}
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Jhon Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <a href="index.html" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Elements</a>
            <div className="dropdown-menu bg-transparent border-0">
              <a href="button.html" className="dropdown-item">Buttons</a>
              <a href="typography.html" className="dropdown-item">Typography</a>
              <a href="element.html" className="dropdown-item">Other Elements</a>
            </div>
          </div>
          <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
          <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
          <a href="table.html" className="nav-item nav-link active"><i className="fa fa-table me-2" />Tables</a>
          <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</a>
            <div className="dropdown-menu bg-transparent border-0">
              <a href="signin.html" className="dropdown-item">Sign In</a>
              <a href="signup.html" className="dropdown-item">Sign Up</a>
              <a href="404.html" className="dropdown-item">404 Error</a>
              <a href="blank.html" className="dropdown-item">Blank Page</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    {/* Sidebar End */}
    {/* Content Start */}
    <div className="content">
      {/* Navbar Start */}
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
        </a>
        <a href="#" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars" />
        </a>
        <form className="d-none d-md-flex ms-4">
          <input className="form-control border-0" type="search" placeholder="Search" />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i className="fa fa-envelope me-lg-2" />
              <span className="d-none d-lg-inline-flex">Message</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">See all message</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i className="fa fa-bell me-lg-2" />
              <span className="d-none d-lg-inline-flex">Notificatin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">See all notifications</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{width: 40, height: 40}} />
              <span className="d-none d-lg-inline-flex">John Doe</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">My Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Log Out</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Table Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-12">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Responsive Table</h6>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Country</th>
                      <th scope="col">ZIP</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>John</td>
                      <td>Doe</td>
                      <td>jhon@email.com</td>
                      <td>USA</td>
                      <td>123</td>
                      <td>Member</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>mark@email.com</td>
                      <td>UK</td>
                      <td>456</td>
                      <td>Member</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>jacob@email.com</td>
                      <td>AU</td>
                      <td>789</td>
                      <td>Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}
      {/* Footer Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light rounded-top p-4">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              © <a href="#">Your Site Name</a>, All Right Reserved. 
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end">
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
    {/* Content End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</div>

  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import AdminLogoutButton from './AdminLogoutButton';
import Logo from '../../assets/Logo2_small.png';

      // {/* Top Bar  */}
      // <div className="top-info-bar w-100 justify-content-between py-5 px-4 bg-white">
      //   <div className="carbon-background">
      //     {/*/ ******* React Router Link HOME ******* /*/}
      //     {/* large Logo  */}
      //     <Link
      //       to="/"
      //       className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0"
      //       href="index.html"
      //     >
      //        <img src={Logo}  alt="logo" style={{width: '300px', height: '300px'}}/>


export default function AdminNavbar() {

  return (
    <div className="navbar-wrapper">

      {/* Top Bar  */}
      <div className="top-info-bar w-100 justify-content-between py-5 px-4">
        <div className="carbon-background">
  
            {/*/ ******* React Router Link HOME ******* /*/}
            {/* large Logo  */}
            <Link to="/"  className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0">
              <h2 className="custom-blue m-0 fs-1">Scott's</h2>
              <h5 className="m-0">Collision Repair</h5>
            </Link>

            <div className="right d-flex flex-column justify-content-center gap-3">
            {/* <Link to="/admin" className="text-decoration-none m-0" href="index.html">
              <h5 className="m-0 text-center fw-bold fs-4 text-warning">
                ADMIN HOME
              </h5>
            </Link> */}

            {sessionStorage.getItem('_id') && (
              <Link to="/" className="m-0 btn btn-outline-danger">
                <AdminLogoutButton />
              </Link>
            )}

          <div className="m-0 text-end d-flex align-items-center">
            {sessionStorage.getItem("_id") && <h5 className="text-warning me-2">{sessionStorage.getItem('_username')}</h5>}
            <Link to="/">
            <img src={"./admin-icon.png"} alt="" width="30" />
            </Link>
          </div>
        </div>

      </div>
    </div>

     {/* Navbar  */}
    <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">

          {/* Small Logo  */}
          {/*/ ******* Back to index.html ******* /*/}
          <div className='carbon-background d-flex align-items-center justify-content-between px-3 px-lg-0'>

            <Link to="/" className="navbar-brand d-md-none">
              <div className="left d-xs-none d-lg-flex flex-column logo-small">
                  <img src={Logo}  alt="logo" />
              </div>
            </Link>

            <div className='m-0'>
              <button className="navbar-toggler custom-background-blue" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>




          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 p-md-0">

            <li className="nav-item">
                {/*/ ******* React Router Link APPOINTMENTS ******* /*/}
                <Link to="/admin" className="m-0 text-end text-decoration-none nav-link">
                  Admin Home
                </Link>
              </li>

              <li className="nav-item">
                {/*/ ******* React Router Link APPOINTMENTS ******* /*/}
                <Link to="/adminappointments" className="m-0 text-end text-decoration-none nav-link">
                  Appointments
                </Link>
              </li>

              
              <li className="nav-item">
                {/*/ ******* React Router Link REVIEWS ******* /*/}
                <Link to="/adminreviews" className="m-0 text-end text-decoration-none nav-link">
                  Reviews
                </Link>
              </li>

          

              {sessionStorage.getItem("_id") && (
                <li className='nav-item d-block d-md-none py-0'>
                <Link to="/" className="m-0 text-end text-decoration-none nav-link">
                  {/* Logout Admin {sessionStorage.getItem('_username')} */}
                <AdminLogoutButton className="m-0 text-end nav-link link-danger text-decoration-none"/>
                </Link>
                </li>
                )}



            </ul>
          </div>
        </div>
      </nav>
</div>

  )
}


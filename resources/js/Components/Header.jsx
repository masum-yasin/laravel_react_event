import { Link } from '@inertiajs/react';
import React from 'react';
import logo from '../../../public/frontend/assets/images/logo-white.png'
import MyBooking from './../Pages/MyBooking';



const Header = ({user, token}) => {
    return (
        <div>
          <div>
           <header className="main_header_area">
  {/* Navigation Bar */}
  <div className="header_menu" id="header_menu">
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="image" />
              {/* <img src="frontend/assets/images/logo.png" alt="image" /> */}
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav" id="responsive-menu">
              <li className="dropdown submenu active">
                <Link href='/'>Home</Link></li>
              <li><Link href='/about'>About Us</Link></li>
               <li><Link href="review" className>Review</Link></li>
              <li><Link href='eventschedule' className=''>Schedule</Link></li>
              {/* <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedule<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
              
                
                  <li><a href="speaker-detail.html">Speaker Detail</a></li>
                  <li><a href="sponsors.html">Sponsors</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="comingsoon.html">Coming Soon</a></li>
                  <li><a href="search-result.html">Search Result</a></li>
                  <li><a href="404.html">404 Error</a></li> --{'}'}{'}'}
                </ul> 
              </li> */}
              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog <i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                  <li><Link href="/postblog">All Posts</Link></li>
                  <li><a href="/singleblog">Single Post</a></li>
                </ul>
              </li>
              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Speaker<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                  <li><Link href="/speaker">All Speaker</Link></li>
                  <li><Link href="/speakerdetail">Speaker Detail</Link></li>
                </ul>
              </li>
              <li><Link href='customercontact' className>Contact</Link></li>
              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin dashboard<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                  <li>
                    <a href="/dashboard" className="btn" style={{width: 100}}>Super Admin</a>
                  </li>
                  <li>
                    <a href='editor/login' className="btn" style={{width: 100, margin: '0 3px'}}>Editor</a>
                  </li>
                  <li>
                    <a href='admin/login' className="btn btn-warning " style={{width: 100}}>Admin</a>
                  </li>
                 
                </ul>
              </li> 

              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Customer<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                {
  user ? (
    <div>
      <li>
        <Link href="/customer/mybooking">MyBooking</Link>
      </li>
      <div>
        <form action={route("customer.logout")}>
          <input type="hidden" name="_token" value={token} />
          <button
            type="submit"
            className="btn btn-2 btn-success text-center"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  ) : (
    <li className="button-header">
      <a href="/customer/create">Signup</a>
    </li>
  )
}

                </ul>
              </li>







             



              

             
              
              {/* @if(Auth::guard('customer')-&gt;check())
              <li><a href="{{route('customer.mybooking')}}">My Booking</a></li>
              @endif
              <li>
                @if(Auth::guard('customer')-&gt;check())
                <form method="POST" action="{{route('customer.logout')}}">
                  @csrf
                  <button type="submit" className="btn btn-warning"> Logout </button>
                </form>
                @else <a href='customer/login'> Login </a>
                @endif
              </li> */}
            </ul>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </nav>
  </div>
  {/* Navigation Bar Ends */}
</header>

        </div>  
        </div>
    );
};

export default Header;
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const SpeakerDeatail = () => {
    return (
        <div>
          <Header></Header>
        <div>
  {/* BreadCrumb Starts */}  
  <section className="breadcrumb-main" style={{backgroundImage: 'url(frontend/assets/images/pexels-wendy-wei-1190297.jpg)'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white">Speaker Detail</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* blog starts */}
  <section className="speaker-detail pt-12">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 pe-lg-4 mb-4">
          <img src="frontend/assets/images/team/img1.jpg" alt className="w-100" />  
        </div>
        <div className="col-lg-8 ps-lg-4 mb-4">
          <div className="speaker-detail-inner">
            <h3 className="mb-0">Gerardo Ambrose</h3>
            <p className="mb-2 theme">Marketing Officer</p>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div className="footer-contact d-flex align-items-center mb-3">
              <i className="fa fa-envelope theme fs-4" />
              <div className="footer-contact-content ps-3">
                <h6 className="mb-1">Email Address</h6>
                <span className>gerardo@eventiz.com</span>
              </div>
            </div>  
            <div className="footer-contact d-flex align-items-center mb-3">
              <i className="fa fa-phone theme fs-4" />
              <div className="footer-contact-content ps-3">
                <h6 className="mb-1">Phone No.</h6>
                <span className>+00 234 567 890</span>
              </div>
            </div> 
            <div className="footer-contact d-flex align-items-center">
              <i className="fa fa-map-marker-alt theme fs-4" />
              <div className="footer-contact-content ps-3">
                <h6 className="mb-1">Veneu</h6>
                <span className>24 Callison Lane Boy, New Street, NY</span>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="event-seperator my-5">
        <div className="container">
          <div className="event-seperator-divider d-flex border-b pt-2">
            <div className="event-seperator-icon position-absolute start-50 top-0 bg-white p-1">
              <i className="fas fa-star theme fs-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 pe-lg-5 pt-4">
          <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="progress-skills mb-2">
            <h6 className="mb-1">Marketing Skill</h6>
            <div className="progress">
              <div className="progress-bar bg-theme" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress-skills mb-2">
            <h6 className="mb-1">Management Skill</h6>
            <div className="progress">
              <div className="progress-bar bg-theme" role="progressbar" style={{width: '85%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress-skills mb-2">
            <h6 className="mb-1">Idealogy  Skill</h6>
            <div className="progress">
              <div className="progress-bar bg-theme" role="progressbar" style={{width: '96%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress-skills">
            <h6 className="mb-1">Business  Skill</h6>
            <div className="progress">
              <div className="progress-bar bg-theme" role="progressbar" style={{width: '82%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-lg-5 pt-4">
          <div className="sidebar-item p-5 text-center position-relative" style={{backgroundImage: 'url(frontend/assets/images/pexels-wendy-wei-1190297.jpg)', backgroundSize: 'cover'}}>
            <div className="sidebar-item-content position-relative z-index2">
              <h3 className="mb-3 theme">Need Help?</h3>
              <p className="mb-3 white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <a href="contact.html" className="nir-btn">Contact Us <i className="fa fa-angle-right" /></a>
            </div>
            <div className="theme-overlay" />
          </div>
        </div>
      </div>
    </div></section>
  {/* blog Ends */}
</div>
<Footer></Footer>
        </div>
    );
};

export default SpeakerDeatail;
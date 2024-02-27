import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useForm } from '@inertiajs/react';
import React from 'react';

const Contact = () => {
    const { data, setData,post } = useForm();
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    post(route('contact.store'),data);
  }
  
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
          <h1 className="mb-0 white h1">Contact us</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* contact starts */}
  <section className="contact-main pb-8" style={{backgroundImage: 'url(frontend/assets/images/testimonial-1.png)'}}>
    <div className="container">
      <div className="contact-info-main mt-0">
        <div className="section-title mb-5 w-75 mx-auto text-center">
          <h3 className="h-title h3">Contact</h3>
          <h4 className="theme  h4">Touch WIth Us</h4>
          <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
            <h2 className="ah-headline mb-0 h2">
              <span>How Can We </span>
              <span className="ah-words-wrapper white theme">
                <b className="is-visible textcap">help?</b>
                <b>help?</b>
              </span>
            </h2>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-info-content row mb-1">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="info-item bg-grey px-4 py-5 border-all text-center">
                <div className="info-icon mb-2 bg-theme rounded-circle mx-auto">
                  <i className="fa fa-map-marker-alt white" />
                </div>
                <div className="info-content">
                  <h5 className='h5'>Galleria Conference Hall</h5>
                  <p className="mb-0">19 By Pass Main Street, Bali, Indonesia, BC 22196</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="info-item bg-grey px-4 py-5 border-all text-center">
                <div className="info-icon mb-2 bg-theme rounded-circle mx-auto">
                  <i className="fa fa-phone white" />
                </div>
                <div className="info-content">
                  <h5>Ticket Info</h5>
                  <p className="m-0">Phone No. : (+977) 524-191-2022</p>
                  <p className="m-0">Email Address: eventiz@mail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="info-item bg-grey px-4 py-5 border-all text-center">
                <div className="info-icon mb-2 bg-theme rounded-circle mx-auto">
                  <i className="fa fa-envelope white" />
                </div>
                <div className="info-content ps-4">
                  <h5>Event Schedule</h5>
                  <p className="m-0">Sept 12 - 14 Sept 2023 Starts 09:00am to 06:00 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-form1" className="contact-form">
            <div className="row">
              <div className="col-lg-8 pe-lg-4 mb-4">
                <div id="contactform-error-msg" />
                                          <form method='post' onSubmit={handleSubmit}>
                                           
                              <div className="form-group mb-2">
                                <label>Name*</label>
                                <input type="text" placeholder name="name" onChange={(e) => setData('name', e.target.value)} />
                              </div>
                              <div className="form-group mb-2">
                                <label>Email*</label>
                                <input type="email" placeholder name="email" onChange={(e) => setData('email', e.target.value)} />
                              </div>
                              <div className="form-group mb-2">
                                <label>Phone Number*</label>
                                <input type="number" placeholder name="phone" onChange={(e) => setData('phone', e.target.value)} />
                              </div>
                              <div className="form-group mb-2">
                                <label>Subject*</label>
                                <input type="text" placeholder name="subject" onChange={(e) => setData('subject', e.target.value)} />
                              </div>
                              <div className="form-group mb-2">
                                <label>Address*</label>
                                <textarea name="address" id cols={15} rows={5} onChange={(e) => setData('address', e.target.value)} />
                              </div>
                              <div className="form-group mb-2">
                                <input type="submit" className="btn"  style={{backgroundColor:"none"}} value="Send Message" />
                              </div>
                            </form>


              </div>
              <div className="col-lg-4 ps-lg-4 mb-4">
                <div className="map">
                  <div style={{width: '100%'}}>
                    <iframe height={500} style={{filter: 'grayscale(1)'}} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(mangal%20bazar)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact Ends */}
</div>
<Footer></Footer>

        </div>
    );
};

export default Contact;
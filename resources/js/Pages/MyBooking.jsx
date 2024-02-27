import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

const MyBooking = (props) => {
    const {booking,user,token} = usePage().props
    return (
        <div>
            <Header></Header>
            <div>
  <section className="breadcrumb-main" style={{backgroundImage: 'url({{asset("frontend/assets/images/pexels-wendy-wei-1190297.jpg")}})'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white"> My Bookings </h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* contact starts */}
  <section className="contact-main pb-8" style={{backgroundImage: 'url({{asset("frontend/assets/images/testimonial-1.png")}})'}}>
    <div className="container">
      <div className="contact-info-main mt-0">
        <div className="section-title mb-5 w-75 mx-auto text-center">
          <h3 className="h-title">My Booking</h3>
          <h4 className="theme">Touch WIth Us</h4>
          <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
            <h2 className="ah-headline mb-0">
              <span>How Can We </span>
              <span className="ah-words-wrapper white theme">
                <b className="is-visible textcap">help?</b>
                <b>help?</b>
              </span>
            </h2>
          </div>
        </div>
        <h1> My Bookings </h1>
        <h6>Customer Detail</h6>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Number of Member</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
          {
            booking.map(item =>(
           <>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.customer_name}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>{item.member}</td>
              <td>{item.address}</td>
            </tr>
           </>
               ))
            }
          </tbody>
        </table>
     
        <div className="row mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Photography</th>
                <th scope="col">videography</th>
                <th scope="col">Dj Service</th>
                <th scope="col">Table And Chair</th>
                <th scope="col">Live Music</th>
                <th scope="col">Lighting</th>
                <th scope="col">Event Staff</th>
                <th scope="col">Power Supply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Master Photography</td>
                <td>Video Walls or LED Screens</td>
                <td>Chairs Covers and Sashes</td>
                <td>Audio-Visual Cables and Accessories</td>
                <td>Buffet Tables and Stations</td>
                <td>Concert of Live</td>
                <td>Cleaning Equipment and Supplies</td>
                <td>Generators and Power Distribution</td>
              </tr>
            </tbody>
          </table>
          <button>Show Invoice</button>
        </div>
      </div>
    </div>
  </section>
</div>

           <Footer></Footer> 
        </div>
    );
};

export default MyBooking;
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';
import '../../../public/frontend/assets/js/main'
import banner from '../../../public/frontend/assets/images/pexels-wendy-wei-1190297.jpg'
import eventimg from '../../../public/frontend/assets/images/recent (1).jpg'




const EventDetails = (props) => {
    const {data, setData} = useForm() ;
    const {eventtype, categories, user, token} = usePage().props
   
    function calculateAdvancePrice(price) {
        return price * 0.5;
    }
        const advancePrice = calculateAdvancePrice(eventtype.price);
    return (
        <div>
           <Header user={user}token={token}></Header>
        <div>
           
  {/* BreadCrumb Starts */}  
  <section className="breadcrumb-main" style={{backgroundImage: `url(${banner})`}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white h1">Event Details</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* product-detail starts */}
  <section className="product-detail pt-12 pb-8">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 pe-lg-4 mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
            </ol>
          </nav>
          <div className="single-add-review mb-4 text-center text-lg-start">
            <h2 className="text-center text-lg-start h2">Event Booking Now</h2>
            <form method="post" action={route('booking.store')}>
                <input type="hidden" name='_token' value={token} />

              <div className="form-group mb-2">
                <label>Name*</label>
                <input type="text" placeholder name="customer_name" defaultValue={user.name} />
              </div>
              <div className="form-group mb-2">
                <label>Email*</label>
                <input type="email" placeholder name="email" onChange={ (e) => setData('email', e.target.value) } />
              </div>
              <div className="form-group mb-2">
                <label>Phone Number*</label>
                <input type="number" placeholder name="phone_number" onChange={ (e) => setData('phone_number', e.target.value) }/>
              </div>
              <select name='event_category' onChange={(e) => setData('event_category', e.target.value)}>
              <option value="">Select an option</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

              {/* <div className="form-group mb-2">
                <label>Event Category*</label>
                <input type="text" placeholder name="event_category" onChange={ (e) => setData('event_category', e.target.value) }/>
              </div> */}
              <div className="form-group mb-2">
                <label>Number of Person*</label>
                <input type="text" placeholder name="member" onChange={ (e) => setData('member', e.target.value) }/>
              </div>
               {/* get customer id  */}
              <input type="hidden" name="customer_id" defaultValue={user.id} />
              {/* get Eventtype id  */}
              <input type="hidden" name="eventtype_id" defaultValue={ eventtype.id } />
              <div className="form-group mb-2">
                <label>Description*</label>
                <textarea name="description" id cols={15} rows={5}  onChange={ (e) => setData('description', e.target.value) }/>
              </div>
              <div className="form-group mb-2">
                <label>Address*</label>
                <textarea name="address" id cols={15} rows={5}  onChange={ (e) => setData('address', e.target.value) }/>
              </div>
              <div className="form-group mb-2">
                <label> Booking Price 50% only </label>
                <input type="text" name="booking_price" defaultValue={Math.round(eventtype.price * 0.50)} />
              </div>
              <div className="form-group mb-2 d-flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoz3y6ZkhQWNLCsojJhidOXKd62tjclnjvw&usqp=CAU" alt width="50%" height="120px" />
                <img src="https://play-lh.googleusercontent.com/9GNDxgkN8hWzBub3bYbmFummUAHRFTe0vhLNv8wYL1-ESxKx1zJLL6eGhn8oAWiEZLNj=w600-h300-pc0xffffff-pd" alt width="50%" height="120px" />
              </div>
              <div className="form-group mb-2 d-flex justify-content-evenly">
                <input type="radio" name="payment_method" defaultValue="bkash" onChange={ (e) => setData('payment_method', e.target.value) }/> Bkash
                <input type="radio" name="payment_method" defaultValue="nagad" onChange={ (e) => setData('payment_method', e.target.value) }/> Nagad
              </div>
              <div className="form-group mb-2">
                <label>Enter Your Transction ID</label>
                <input type="text" name="t_id" onChange={ (e) => setData('t_id', e.target.value) }/>
              </div>
              <div className="form-group mb-2">
                <input type="submit" style={{backgroundColor:'none'}}  className="btn btn" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
       
                
        <div className="col-lg-5 ps-lg-4 mb-4">
        <div className="text-center p-1">
    <h3 className="text-primary h3"> Event Total Cost {eventtype.price} </h3>
    <h3 className="text-primary h3"> Event Booking price pay Advance only 50% {advancePrice} </h3>
  </div>
          <div className="product-slider position-relative mt-4">
            <div className="slider-for overflow-hidden">
              <div>
                <div className="gallery-item">
                  <div className="gallery-image position-relative">
                    <img src={'/uploads/'+ eventtype.image} alt="image" />
                    <a href data-lightbox="gallery" className="gallery_trigger">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="gallery-item">
                  <div className="gallery-image position-relative">
                    <img src={'/uploads/'+ eventtype.image} alt="image" />
                    <a href data-lightbox="gallery" className="gallery_trigger">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="gallery-item">
                  <div className="gallery-image position-relative">
                    <img src={'/uploads/'+ eventtype.image} alt="image" />
                    <a href="('frontend/assets/images/products/Summer Cloth.H03.2k.png')" data-lightbox="gallery" className="gallery_trigger">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
               <div className="gallery-item">
                  <div className="gallery-image position-relative">
                    <img src={'/uploads/'+ eventtype.image} alt="image" />
                    <a href data-lightbox="gallery" className="gallery_trigger">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div> 
              </div>
              <div>
                <div className="gallery-item">
                  <div className="gallery-image position-relative">
                    <img src={'/uploads/'+ eventtype.image} alt="image" />
                    <a href="('frontend/assets/images/products/Travel Bag.H03.2k.png')" data-lightbox="gallery" className="gallery_trigger">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-nav bg-white">
              <div>
                <img src={'/uploads/'+ eventtype.image} alt="image" />
              </div>
              <div>
                <img src={'/uploads/'+ eventtype.image}alt="image" />
              </div>
              <div>
                <img src={'/uploads/'+ eventtype.image} alt="image" />
              </div>
              <div>
                <img src={'/uploads/'+ eventtype.image} alt="image" />
              </div>
              <div>
                <img src={'/uploads/'+ eventtype.image} alt="image" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  {/* blog Ends */}  
  {/* product-detail starts */}
  <section className="product-detail pt-12 bg-grey pb-8">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 pe-lg-4 mb-4">
          <div className="post-tabs bg-white">
            {/* tab navs */}
            <ul className="nav nav-tabs nav-pills nav-fill border-bottom" id="postsTab1" role="tablist">
              <li className="nav-item d-inline-block" role="presentation">
                <button aria-selected="false" className="nav-link active" data-bs-target="#description" data-bs-toggle="tab" id="description-tab" role="tab" type="button">Description</button>
              </li>
              <li className="nav-item d-inline-block" role="presentation">
                <button aria-selected="true" className="nav-link" data-bs-target="#review" data-bs-toggle="tab" id="review-tab" role="tab" type="button">Review</button>
              </li>
            </ul>
            {/* tab contents */}
            <div className="tab-content p-4 pt-0" id="postsTabContent1">
              {/* popular posts */}
              <div aria-labelledby="description-tab" className="tab-pane fade active show" id="description" role="tabpanel">
                <h3 className='h3'>Event Description</h3>
               <p>{eventtype.description}</p>
              </div>
              {/* Recent posts */}
              <div aria-labelledby="review-tab" className="tab-pane fade" id="review" role="tabpanel">
                <h6>Review</h6>
                <p>There are no reviews yet.</p><br />
                <p>Be the first to review “Lewis Shirt”</p>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="comment-rate mb-1">
                  <span className="comment-title">Your rating *</span>
                  <div className="rating">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>
                </div> 
                <form>
                  <div className="form-group">
                    <label>Comment*</label>
                    <textarea rows={5} defaultValue={""} />
                  </div>
                  <div className="form-group mb-2">
                    <label>Name*</label>
                    <input type="text" placeholder />
                  </div>
                  <div className="form-group mb-2">
                    <label>Email*</label>
                    <input type="email" placeholder />
                  </div>
                  <p className="mb-0">
                    <input name type="checkbox" defaultValue="yes" />
                    <label>Save my name, email, and website in this browser for the next time I comment.</label>
                  </p>
                  <button type="submit" className="nir-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-lg-4 mb-4">
          <div className="sidebar-item mb-4 bg-white p-4">
            <h5 className="bg-grey p-3 mb-4 h5">Recent Events</h5>
            <article className="post mb-2 bg-grey">
              <div className="s-content d-flex align-items-center justify-space-between">
                <div className="sidebar-image w-25 me-3 rounded">
                  <a href="product-detail.html"><img src={eventimg} alt /></a>
                </div>
                <div className="content-list w-75">
                  <h6 className="mb-1"><a href="product-detail.html">Engaging Evening</a></h6>
                  <div className="date small">10 Apr 2024</div>
                </div>    
              </div> 
            </article>
            <article className="post mb-2 bg-grey">
              <div className="s-content d-flex align-items-center justify-space-between">
                <div className="sidebar-image w-25 me-3 rounded">
                  <a href="product-detail.html"><img src={eventimg} alt /></a>
                </div>
                <div className="content-list w-75">
                  <h6 className="mb-1"><a href="product-detail.html">Effervescent Event</a></h6>
                  <div className="date small">10 Apr 2024</div>
                </div>    
              </div> 
            </article>
            <article className="post mb-2 bg-grey">
              <div className="s-content d-flex align-items-center justify-space-between">
                <div className="sidebar-image w-25 me-3 rounded">
                  <a href="product-detail.html"><img src={eventimg} alt /></a>
                </div>
                <div className="content-list w-75">
                  <h6 className="mb-1"><a href="product-detail.html">Unforgettable Affair</a></h6>
                  <div className="date small">10 Apr 2024</div>
                </div>    
              </div> 
            </article>
            <article className="post bg-grey">
              <div className="s-content d-flex align-items-center justify-space-between">
                <div className="sidebar-image w-25 me-3 rounded">
                  <a href="product-detail.html"><img src={eventimg} alt /></a>
                </div>
                <div className="content-list w-75">
                  <h6 className="mb-1"><a href="product-detail.html">The Perfect Party</a></h6>
                  <div className="date small">10 Apr 2024</div>
                </div>    
              </div> 
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* blog Ends */}
</div>

    <Footer></Footer>
        </div>
    );
};

export default EventDetails;
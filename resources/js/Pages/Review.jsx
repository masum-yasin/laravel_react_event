import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

const Review = (props) => {
  // const {data,setData,post} = useForm({});
  // handleSubmit = (e)=>{
  //   e.preventDefault();
  //   post(route('userreview.store'));
  // }
    const {reviews} = usePage().props
    console.log(reviews);
    return (
        <div>
            <Header></Header>
           <div>
          <div>
          <div>
         <div>
  <section className="breadcrumb-main" style={{backgroundImage: 'url(frontend/assets/images/pexels-wendy-wei-1190297.jpg)'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white">Archives: Shop</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* product-lists starts */}
  <section className="product-lists pt-12">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 pe-lg-4">
          <div className="listing-inner">
            <div className="row">
              {
                reviews.map((item)=>(

              
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item box-shadow bg-white overflow-hidden position-relative p-3 text-center">
                  <div className="articles-image">
                    <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme1 p-1 px-2 white mt-3 me-4">Sale</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content pt-4">
                      <h1 className="mb-1 h-1">{item.review_title}</h1>
                      <h3 className="mb-1 h-3 mt-5">{item.occupation}</h3>
                    <div className='d-flex align-items-sm-center justify-center gap-4 mt-3'>
                  {Array(item.rating).fill().map((_,index)=>(
                      
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))
              }
             </div> 
             </div>
               {/*==================== Review Form start ================ */}
             <div className='mt-5'>


          <form method="post" action="{{route('userreview.store')}}" encType="multipart/form-data">
  <div className="form-group mb-2">
    <label>Review Title*</label>
    <input type="text" placeholder name="review_title" />
  </div>
  <div className="form-group mb-2">
    <label>consumer occupation*</label>
    <input type="text" placeholder name="occupation" />
  </div>
  <div className="form-group mb-2">
    <label>Give Start Rating*</label><br />
    One Star<input type="radio" defaultValue={1} name="rating" className id="radio" placeholder="subject" /><br />
    Two Star<input type="radio" defaultValue={1} name="rating" className id="radio" placeholder="subject" /><br />
    Three Star<input type="radio" defaultValue={3} name="rating" className id="radio" placeholder="subject" /><br />
    Four Star<input type="radio" defaultValue={1} name="rating" className id="radio" placeholder="subject" /><br />
    Five Star<input type="radio" name="rating" className id="radio" defaultValue={5} placeholder="subject" /><br />
  </div>
  <div className="form-group mb-2">
    <label>Review Description*</label>
    <input type="text" placeholder name="descripation" />
  </div>
  <div className="form-group mb-2">
    <input type="submit" className="nir-btn" id defaultValue="Send Message" />
  </div>
</form>
             </div>
        </div>
        

        {/* sidebar starts */}
        <div className="col-lg-4 ps-lg-4">
          <div className="sidebar-sticky">
            <div className="list-sidebar">
              <div className="subscribe-form overflow-hidden position-relative mb-4">
                <form>
                  <input type="text" placeholder="Search your keyword here.." />
                  <input type="submit" className="nir-btn bordernone position-absolute end-0" defaultValue="Search" />
                </form>
              </div>
              <div className="sidebar-item mb-4 bg-grey p-4">
                <h5 className="bg-white p-3 mb-4">Product Gallery</h5>
                <div className="row gallery-main">
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/review2.jpg" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/review.jpg" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/review2.jpg" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/review.jpg" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/Woman Short Sleeve Shirt.H03.2k.png" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mansonry-item p-2">
                    <div className="gallery-item">
                      <div className="gallery-image">
                        <a href="frontend/assets/images/products/review2.jpg" data-lightbox="gallery" data-title="Title">
                          <img src="frontend/assets/images/products/review2.jpg" alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="sidebar-item mb-4 bg-grey p-4">
                <h5 className="bg-white p-3 mb-4">Recent products</h5>
                <article className="post mb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="product-detail.html"><img src="frontend/assets/images/products/review.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="product-detail.html">Yellow Sofa Set</a></h6>
                      <div className="date small">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post mb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="product-detail.html"><img src="frontend/assets/images/products/review.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="product-detail.html">leather Bag</a></h6>
                      <div className="date small">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post mb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="product-detail.html"><img src="frontend/assets/images/products/review.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="product-detail.html">Bamboo Bucket</a></h6>
                      <div className="date small">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="product-detail.html"><img src="frontend/assets/images/products/review.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h3 className="mb-1"><a href="product-detail.html">Lewis Shirt</a></h3>
                      <div className="date small">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
              </div>
              <div className="sidebar-item bg-grey p-4 pb-3">
                <h5 className="bg-white p-3">Social Media</h5>
                <div className="social-links mt-2">
                  <ul className="row">
                    <li className="mb-1 col-6">
                      <a href="#" className="w-100 h-100 p-1 px-3 text-start bg-theme white">
                        <i className="fab fa-facebook" aria-hidden="true" /> Facebook
                      </a>
                    </li>
                    <li className="mb-1 col-6"><a href="#" className="w-100 h-100 p-1 px-3 text-start bg-theme white"><i className="fab fa-twitter" aria-hidden="true" /> Twitter</a></li>
                    <li className="mb-1 col-6"><a href="#" className="w-100 h-100 p-1 px-3 text-start bg-theme white"><i className="fab fa-instagram" aria-hidden="true" /> Instagram</a></li>
                    <li className="mb-1 col-6"><a href="#" className="w-100 h-100 p-1 px-3 text-start bg-theme white"><i className="fab fa-linkedin" aria-hidden="true" /> Linkedin</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product-lists Ends */}
</div>

</div>

</div>

   
</div>

    <Footer></Footer>
        </div>
    );
};

export default Review;
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const Blog = () => {
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
          <h1 className="mb-0 white">Blog Lists</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* blog starts */}
  <section className="blog pt-12">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 pe-lg-4">
          <div className="listing-inner">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog1.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Ecommerce</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">How To Optimize Your Blog For High Ranking</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog2.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Inspiration</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">Runner with Autism Graces of Women</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog3.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Public</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog1.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Ecommerce</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">How To Optimize Your Blog For High Ranking</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog2.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Inspiration</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">Runner with Autism Graces of Women</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="articles-item border-all bg-white overflow-hidden position-relative">
                  <div className="articles-image">
                    <img src="frontend/assets/images/blog/blog3.jpg" alt="image" />
                    <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Public</div>
                  </div>
                  <div className="articles-content-main">
                    <div className="articles-content p-4 pb-2">
                      <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate</a></h4>
                      <a href="#" className="theme textupper small">Continue Reading</a>
                    </div>
                    <ul className="border-top d-block w-100 p-4 py-2">
                      <li>August 25, 2022</li> |
                      <li> No Comments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-main text-center">
              <ul className="pagination">
                <li><a href="#"><i className="fa fa-angle-double-left" aria-hidden="true" /></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /></a></li>
              </ul>
            </div>
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
              <div className="author-news mb-4 bg-grey p-5 text-center">
                <div className="author-news-content">
                  <div className="author-thumb mb-3">
                    <img src="frontend/assets/images/team/img2.jpg" alt="author" />
                  </div>
                  <div className="author-content">
                    <h5 className="title mb-1"><a href="#">Hi, Jenny Loral</a></h5>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor dolore magna aliqua.</p>
                    <div className="social-links">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-item mb-4 bg-grey p-4">
                <h5 className="bg-white p-3">All Categories</h5>
                <ul className="sidebar-category">
                  <li><a href="#">All</a></li>
                  <li><a href="#">Online Ticketing</a></li>
                  <li><a href="#">Conference</a></li>
                  <li className="active"><a href="#">Marketing Events</a></li>
                  <li><a href="#">Optimization</a></li>
                  <li><a href="#">SEO Conference</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                </ul>
              </div>
              <div className="sidebar-item mb-4 bg-grey p-4">
                <h5 className="bg-white p-3">Recent Posts</h5>
                <article className="post mb-2 border-b pb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="detail-1.html"><img src="frontend/assets/images/blog/blog1.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="detail-1.html">An Incredibly Easy Method That Works For All</a></h6>
                      <div className="date">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post border-b pb-2 mb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="detail-1.html"><img src="frontend/assets/images/blog/blog2.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="detail-1.html">15 Unheard Ways To Achieve Greater Walker</a></h6>
                      <div className="date">29 Mar 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post mb-2 border-b pb-2">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="detail-1.html"><img src="frontend/assets/images/blog/blog3.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="detail-1.html">An Incredibly Easy Method That Works For All</a></h6>
                      <div className="date">10 Apr 2023</div>
                    </div>    
                  </div> 
                </article>
                <article className="post">
                  <div className="s-content d-flex align-items-center justify-space-between">
                    <div className="sidebar-image w-25 me-3 rounded">
                      <a href="detail-1.html"><img src="frontend/assets/images/blog/blog4.jpg" alt /></a>
                    </div>
                    <div className="content-list w-75">
                      <h6 className="mb-1"><a href="detail-1.html">15 Unheard Ways To Achieve Greater Walker</a></h6>
                      <div className="date">21 Feb 2023</div>
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
  {/* blog Ends */}
</div>
<Footer></Footer>
 </div>
    );
};

export default Blog;
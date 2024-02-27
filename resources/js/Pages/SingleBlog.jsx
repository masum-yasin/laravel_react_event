import Header from '@/Components/Header';
import React from 'react';

const SingleBlog = () => {
    return (
        <div>
            <Header></Header>
           <div>
  {/* header ends */}
  {/* BreadCrumb Starts */}  
  <section className="breadcrumb-main" style={{backgroundImage: 'url(frontend/assets/images/pexels-wendy-wei-1190297.jpg)'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white">Blog Single</h1>
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
        <div className="col-lg-8">
          <div className="blog-single">
            <img src="frontend/assets/images/blog/blog1.jpg" alt="image" className="mb-4" />
            <p className="mb-3 text-lg-start text-center">Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet, consectetu ctetur adipis Viales. Lorem ipsum dolor sit amet, cons sit amet, consectetur adi ectetur adipis Vi.<br /><br />
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <div className="blog-wrapper">
              {/* author detail */}
              <div className="blog-author mb-4 bg-grey border-all p-4 pb-2">
                <div className="blog-author-item">
                  <div className="row d-flex justify-content-between align-items-center text-center text-lg-start">
                    <div className="col-lg-2 mb-2">
                      <div className="blog-thumb">
                        <img src="frontend/assets/images/reviewer/1.jpg" alt />
                      </div>
                    </div>
                    <div className="col-lg-10 mb-2">
                      <h5 className="mb-1">Team World </h5>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                    </div>
                  </div>        
                </div>
              </div>
              {/* blog review */}
              <div className="single-add-review mb-4 text-center text-lg-start">
                <h2 className="text-center text-lg-start">Leave A Reply</h2>
                <p className="text-center text-lg-start">Your email address will not be published. Required fields are marked *</p>
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
                  <div className="form-group mb-2">
                    <label>Website</label>
                    <input type="text" placeholder />
                  </div>
                  <p className="mb-0">
                    <input name type="checkbox" defaultValue="yes" />
                    <label>Save my name, email, and website in this browser for the next time I comment.</label>
                  </p>
                  <div className="form-btn">
                    <button type="submit" className="nir-btn">Post Comment</button>
                  </div>
                </form>
              </div>
              {/* blog comment list */}
              <div className="single-comments single-box mb-4">
                <h4 className="mb-4 text-center text-lg-start">Showing 16 verified guest comments</h4>
                <div className="comment-box">
                  <div className="comment-image mt-2">
                    <img src="frontend/assets/images/reviewer/1.jpg" alt="image" />
                  </div>
                  <div className="comment-content">
                    <h4 className="mb-1 Soldman Kell">Soldman Kell</h4>
                    <p className="comment-date">April 25, 2023 at 10:46 am</p>
                    <div className="comment-rate">
                      <div className="rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <span className="comment-title">"The worst hotel ever"</span>
                    </div>    
                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                    <div className="comment-like">
                      <div className="like-title float-md-start float-none">
                        <a href="#" className="nir-btn mr-2">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-box">
                  <div className="comment-image mt-2">
                    <img src="frontend/assets/images/reviewer/2.jpg" alt="image" />
                  </div>
                  <div className="comment-content">
                    <h4 className="mb-1">Burson Lesson</h4>
                    <p className="comment-date">April 25, 2023 at 10:46 am</p>
                    <div className="comment-rate">
                      <div className="rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <span className="comment-title">"Was too noisy and not suitable for business meetings"</span>
                    </div> 
                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                    <div className="comment-like">
                      <div className="like-title float-left">
                        <a href="#" className="nir-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog next prev */}
              <div className="blog-next row mb-4 d-flex align-items-center justify-content-between">
                <a href="#" className="d-block border-end col-6">
                  <div className="prev ps-4">
                    <i className="fa fa-arrow-left" /> 
                    <p className="m-0">Previous</p>
                    <p className="m-0 theme1 fw-bold text-truncate">Learning to Take Your Life Into Your Own Hands</p>
                  </div>
                </a>
                <a href="#" className="d-block col-6">
                  <div className="next pr-4 text-right">
                    <i className="fa fa-arrow-right" />
                    <p className="m-0">Previous</p>
                    <p className="m-0 theme1 fw-bold text-truncate">The bedding was hardly able</p>
                  </div>
                </a>
              </div>
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

        </div>
    );
};

export default SingleBlog;
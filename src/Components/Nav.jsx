import React from 'react'

export default function Nav() {
    return (
        <div>
            {/* <h2>Navigation</h2> */}
     <div class="navigation">
     <div class="container">
    <div class="row">
    <div class="col-md-8 col-sm-12">
    <div class="menu-button">Menu</div>
     <div>
          <ul data-breakpoint="800" class="flexnav">
            <li class="active"><a href="index.html" title="Home">Home</a>
              <ul>
                <li><a href="index.html" title="Home" class="animsition-link">Home</a></li>
                <li><a href="index-2.html" title="Home v.2" class="animsition-link">Home v.2</a></li>
              </ul>
            </li>
            <li><a href="service-image.html" title="Service" class="animsition-link">Service</a>
              <ul>
                <li><a href="service-image.html" title="Service With Image" class="animsition-link">Service With Image</a></li>
                <li><a href="service-ac-repair.html" title="AC repair" class="animsition-link">AC repair</a></li>
                <li><a href="service-heating-furnace.html" title="Heating Furnace" class="animsition-link">Heating Furnace</a></li>
                <li><a href="service-maintenance.html" title="Maintenance" class="animsition-link">Maintenance</a></li>
                <li><a href="service-commercial.html" title="Commercial" class="animsition-link">Commercial</a></li>
              </ul>
            </li>
            <li><a href="blog.html" title="Blog" class="animsition-link">Blog</a>
              <ul>
                <li><a href="blog.html" title="Blog Default" class="animsition-link">Blog Default</a></li>
                <li><a href="blog-detail.html" title="Blog Detail" class="animsition-link">Blog Detail</a></li>
                <li><a href="blog-two-column-masonry.html" title="Blog-Two-Column-Masonry" class="animsition-link">Two Column Masonry</a></li>
                <li><a href="blog-three-column-masonry.html" title="Blog-Three-Column-Masonry" class="animsition-link">Three Column Masonry</a></li>
              </ul>
            </li>
            <li><a href="about-us.html" title="About Us" class="animsitiom-link">About Us</a></li>
            <li> <a href="#" title="Feature">Features</a>
              <ul>
                <li><a href="team.html" title="Team" class="animsition-link">Team</a> </li>
                <li><a href="faq.html" title="FAQ's" class="animsition-link">FAQ's</a></li>
                <li><a href="testimonials.html" title="Testimonials" class="animsition-link">Testimonials</a></li>
                <li><a href="error-page.html" title="404 Error" class="animsition-link">404 error</a></li>
                <li><a href="client.html" title="Client" class="animsition-link">Client</a></li>
                <li><a href="coupon.html" title="Coupon" class="animsition-link">Coupon</a>
                  <ul>
                    <li><a href="coupon.html" title="Coupon" class="animsition-link">Coupon</a></li>
                    <li><a href="coupon-sidebar.html" title="Coupon-Sidebar" class="animsition-link">Coupon-Sidebar</a></li>
                  </ul>
                </li>
                <li><a href="shortcodes.html" title="Shortcodes" class="animsition-link">Shortcodes</a> </li>
              </ul>
            </li>
            <li><a href="location.html" title="Location" class="animsition-link">Location</a>
              <ul>
                <li><a href="location.html" title="Location" class="animsition-link">Location</a></li>
                <li><a href="location-detail.html" title="Location Detail" class="animsition-link">Location Detail</a></li>
              </ul>
            </li>
            <li><a href="contact-us.html" title="Contact Us" class="animsitiom-link">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 text-right col-sm-12">
        <div class="nav-btn"> <a href="service-image.html" class="btn btn-default">Scheduled service</a> <a role="button" data-toggle="collapse" href="#search-area" aria-expanded="false" aria-controls="search-area" class="btn btn-secondary"> <i class="fa fa-search"></i> </a> </div>
      </div>
    </div>
    </div>
    </div>
  </div>
   )
}

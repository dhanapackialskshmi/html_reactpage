import React from 'react'

export default function Footer() {
    return (
        <div>
            
            <div class="footer section-space80">
  <div class="container">
    <div class="row">
      <div class="col-md-2 col-sm-3">
        <div class="footer-widget mb20">
          <h3 class="footer-title">Quick links</h3>
          <ul class="listnone bullet bullet-arrow-right">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Faq’s</a></li>
            <li><a href="#">Coupon</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-2 col-sm-3">
        <div class="footer-widget mb20">
          <h3 class="footer-title">Locations</h3>
          <ul class="listnone bullet bullet-arrow-right">
            <li><a href="#">Ahmedabad</a></li>
            <li><a href="#">Vastrapur</a></li>
            <li><a href="#">Navarangpura</a></li>
            <li><a href="#">Maninagar</a></li>
            <li><a href="#">Ranip</a></li>
            <li><a href="#">Vasna</a></li>
            <li><a href="#">Vastral</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="footer-newsletter mb20">
          <h3 class="footer-title">Subscribe for tips &amp; guide</h3>
          <p>Subscribe for tips &amp; guide how ac quick repair ac.</p>
          <form class="form-horizontal" method="post" action="newsletter.php">
            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="control-label sr-only" for="newsletteremail">E-Mail</label>
              <div class="col-md-12">
                <input id="newsletteremail" name="newsletteremail" type="email" placeholder="E-Mail" class="form-control" required />
              </div>
            </div>
            {/* <!-- Button --> */}
            <div class="form-group">
              <label class="control-label sr-only" for="submit">Submit</label>
              <div class="col-md-12">
                <button id="submit" name="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <ul class="listnone payment-card">
          <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
          <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
          <li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
          <li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
          <li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
        </ul>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="footer-widget mb20">
          <h3 class="footer-title">About us Fixit repair</h3>
          <p>We know our existence depends on you that support us and we want to Thank You! The highest compliment we receive is the trust in your referral and we truly Appreciate your Support!</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <div class="footer-widget mb20">
          <h3 class="footer-title">Contact us</h3>
          <ul class="listnone contact">
            <li><i class="fa fa-map-marker"></i>
              <address>
              4374 Twin House Lane 
              Springfield, MO 65804
              </address>
            </li>
            <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
            <li><i class="fa fa-envelope-o"></i>contact@fixitrepair.com</li>
          </ul>
          <a href="#" class="btn-link"> Contact us</a> </div>
      </div>
    </div>
  </div>
</div>
<div class="tiny-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <p>fixitrepair@2016. All Right Reserved</p>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="ft-social-widget text-right"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-pinterest"></i></a> <a href="#"><i class="fa fa-flickr"></i></a> <a href="#"><i class="fa fa-instagram"></i></a> </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

import React from 'react'
import {Carousel} from  'react-bootstrap'


export default function Slider() {

  
    return (
  <div>

    {/* <h2>slider</h2> */}
  <Carousel>
      <Carousel.Item>
         <img 
            className="d-block w-100" src="assets/images/slider-1.jpg" alt="" />
        <Carousel.Caption>
               <h1>Air Conditioning Repair &amp; Heating Service</h1>
               <p class="slider-text">Fed up with poor service? So are we here to help you fast &amp; accurate service.</p>
               <a href="service-image.html" class="btn btn-default">View Service</a>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
         <img 
            className="d-block w-100" src="assets/images/slider-3.jpg" alt="" />
        <Carousel.Caption>
        <h1 class="slider-title">Experts Repair AC &amp; Heatinges</h1>
        <p class="slider-text">Bring or send your ac, furnace for a quick repair.</p>
        <p class="slider-text">Fed up with poor service? So are we here to help you fast &amp; accurate service.</p>
        <a href="location.html" class="btn btn-default">Find Locations</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
         <img 
            className="d-block w-100" src="assets/images/slider-2.jpg" alt="" />
        <Carousel.Caption>
        <h1 class="slider-title">We’ve got you Covered!</h1>
        <p class="slider-text">We provide specialists in the following areas <a href="#" class="btn-link">Residential</a> and <a href="#" class="btn-link">Commercial</a> </p>
        <a href="team.html" class="btn btn-default">Meet The Team</a>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>




</div>
    )
}








import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Header,Footer,Nav,Slider} from './Components'
import {Home} from './Pages'
//import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
     
      <div class="top-bar">
  <div class="container">
    <div class="row">
      <div class="col-md-4 hidden-xs col-sm-6">
        <p>We’r available 7 days a week</p>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-6">
        <div class="social-widget text-right"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-pinterest"></i></a> <a href="#"><i class="fa fa-flickr"></i></a> <a href="#"><i class="fa fa-instagram"></i></a> </div>
      </div>
    </div>
  </div>
</div>

      <Header/>
      <Nav />
      <Slider/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App

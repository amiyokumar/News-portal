import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer fixed-buttom " >
  <div class="footer-left col-md-4 col-sm-9">
    <p class="about">
      This is a news base website
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> 3rd Floor, 37, 1, GN Block, Sector V,<br/>Bidhannagar, Kolkata, West Bengal 700091</span></p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> 074399 86811</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-3 col-sm-6">
  <img src="./../ax.png" height={70} width={180}/>
    <p class="menu">
      <a href="#"> Home</a> 
      <a class="mx-2" href="#"> About</a> 
       
      <a class="mx-2" href="#"> News</a>
      <a href="#"> Contact</a>
    </p>
    <p class="name"> AchieveX solutions &copy; 2016</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
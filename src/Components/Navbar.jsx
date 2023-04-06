import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark fixed-top ">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">
        News📰Hub</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="hover">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="business">Business</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="entertainment">Entertainment</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="health">Health</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="science">Science</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="sports">Sports</Link>
        </li>
        <li class="hover">
          <Link class="nav-link text-white" to="technology">Technology</Link>
        </li>
          <ul>
        <li>
            <a href="#" class="hover text-white">Foreign News &#9662;</a>
            <ul class="dropdown bg-dark" >
                <li><Link class="nav-link text-white" to="us">US</Link></li>
                <li><Link class="nav-link text-white" to="germany">Germany</Link></li>
                <li><Link class="nav-link text-white" to="france">France</Link></li>
                <li><Link class="nav-link text-white" to="china">China</Link></li>
                <li><Link class="nav-link text-white" to="denmark">Denmark</Link></li>
                <li><Link class="nav-link text-white" to="rusia">Russia</Link></li>
                  <nav className="dropdownmenu"></nav>
            </ul>
        </li>
    </ul>
      </ul>
    </div>
  </div>
</nav>
    </div>

  )
}

export default Navbar
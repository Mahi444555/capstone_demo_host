import React from 'react'

function Sidebar() {


  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand" href="#">Dashboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav sp-4">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Project</a>
      <a class="nav-item nav-link" href="#">Earning</a>
      <a class="nav-item nav-link disabled" href="#">More</a>
    </div>
  </div>
</nav>

  )
}

export default Sidebar
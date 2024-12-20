// Create the nav element
let nav = document.createElement("nav");
nav.innerHTML = `
 <nav class="navbar navbar-expand-lg " style="background-color: #171717; height: 12%;padding-top: 10px;">
            <div class="container-fluid">
            <img src="logo.jpg" alt="logo" class="logo-style rounded-circle">
              <a class="navbar-brand text-white ms-2" href="#">Berimbolo</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" id ="link-shop" href="product.html" >Products</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="contact.html">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="sign.html"> Sign Up</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="login.html">Login </a>
                  </li>
                  
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>`;

// Get the first <section> element (if it exists)
let section = document.getElementsByTagName("s")[0];

// Insert the nav element before the first <section> element, or at the top if no <section> exists
if (section) {
  document.body.insertBefore(nav, section);
} else {
  document.body.prepend(nav);
}

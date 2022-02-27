class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">

        <nav id="navBar" class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/assets/img/logo.png" alt="ecorrea-logo" width="24" height="24" class="d-inline-block align-text-top img-logo"> 
              Emmanuel Correa
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="http://ecorrea.cl/">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea.cl/">SOBRE MI</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea/portafolio.html">PORTAFOLIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea.cl/">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div class="title-header">
          <div class="container-hello">
            <h1><span>HOLA,</span></h1> 
          </div>
          <div id="description-short" class="description-short">
            <h2 class="text-center">
              MI NOMBRE ES <span id="name" class="name"></span>,
            </h2>
            <h2 class="text-center">
              <span id="profession" class="profession" style="color:#44CCD3"></span>
            </h2>
          </div> 
          <div id="container-btn-down" class="container-fluid">
           <a href="#hello" id="btn-move-down" class="link-light inner-link">V</a> 
           <!-- <a id="btn-move-down" class="link-light inner-link"> V </a> -->
          </div>
        </div>  
      </header>
        `;
    }

}

customElements.define('header-component', Header);
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav id="navBar" class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="https://ecorrea.cl/"><img src="/assets/img/logo.png" alt="ecorrea-logo" width="24" height="24" class="d-inline-block align-text-top img-logo"> 
              Emmanuel Correa
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="https://ecorrea.cl/">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea.cl/">SOBRE MI</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea.cl/portafolio.html">PORTAFOLIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://ecorrea.cl/">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;
    }

}

customElements.define('navbar-component', Navbar);
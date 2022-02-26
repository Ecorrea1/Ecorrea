class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>    
   
        <div class="footer-copyright text-center">© 2022 -
          <a class="text-center links-2" href="http://ecorrea.cl/">ECORREA by EMMANUEL CORREA</a>
          CONTRUYENDO APLICACIONES CON PASION DESDE LOS LAGOS PARA EL MUNDO | 
          <a class="text-center links-2" href="http://127.0.0.1:5500/politica-de-privacidad.html"> POLITICAS DE PRIVACIDAD </a> 
        </div>
        <div class="footer-logo">
          <a class="links-2" href="http://ecorrea.cl/"> ECORREA </a>
        </div>

      </footer>
      `;
    }
}

customElements.define('footer-component', Footer);
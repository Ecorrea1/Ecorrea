class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>    
   
        <div class="footer-copyright text-center">© 2022 -
          <a id="link-home" class="text-center links-2" href="">ECORREA by EMMANUEL CORREA</a>
          CONTRUYENDO APLICACIONES CON PASION DESDE LOS LAGOS PARA EL MUNDO | 
          <a id="link-privacy" class="text-center links-2" href="https://ecorrea.cl/politica-de-privacidad.html"> POLITICAS DE PRIVACIDAD </a> 
        </div>
        <div class="footer-logo">
          <a id="link-home" class="links-2" href=""> ECORREA </a>
        </div>

      </footer>
      `;
    }
}

customElements.define('footer-component', Footer);
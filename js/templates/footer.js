class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>    
   
        <div class="footer-copyright text-center">© 2022 -
          <a class="text-center links-2" href="https://ecorrea.cl/">ECORREA by EMMANUEL CORREA</a>
          CONTRUYENDO APLICACIONES CON PASION DESDE LOS LAGOS PARA EL MUNDO | 
          <a class="text-center links-2" href="https://ecorrea.cl/politica-de-privacidad.html"> POLITICAS DE PRIVACIDAD </a> 
        </div>
        <div class="footer-logo">
          <a class="links-2" href="https://ecorrea.cl/"> ECORREA </a>
        </div>

      </footer>
      <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      `;
    }
}

customElements.define('footer-component', Footer);
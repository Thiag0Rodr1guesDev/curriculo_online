class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="info">
          <span class="name">Thiago Vinícius Oliveira de Matos Rodrigues</span>
          <span class="role">Programador, Igarassu - PE</span>
        </div>
        <div class="container-mobile">
          <button class="btn-mobile" aria-label="Abrir menu">
            <img src="img/bars-solid.svg" alt="Menu" />
          </button>
        </div>
        <ul class="links">
          <li><a href=".">Sobre mim</a></li>
          <li><a href="pages/formacao.html">Formação</a></li>
          <li><a href="pages/experiencia.html">Experiência</a></li>
          <li><a href="pages/portfolio.html">Portfólio</a></li>
          <li><a href="pages/contato.html">Contato</a></li>
        </ul>
      </nav>
    `;

    const btnMobile = this.querySelector('.btn-mobile');
    const links = this.querySelector('.links');

    btnMobile.addEventListener('click', () => {
      links.classList.toggle('active');
    });
  }
}

customElements.define('nav-component', NavComponent);

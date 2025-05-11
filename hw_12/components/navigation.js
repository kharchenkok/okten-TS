class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navigation">
                <div class="nav-container">
                    <a href="index.html" class="nav-link">Users</a>
                    <span class="nav-separator">></span>
                    <a href="javascript:history.back()" class="nav-link">Back</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('site-navigation', Navigation);

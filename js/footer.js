const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="/media/logo.png" class="logo" alt="">
    </div>
    <div class="footer-social-container">
        <div>
            <a href="/html/terms.html" class="social-link">terms & services</a>
            <a href="/html/about.html" class="social-link">about</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">© 2023 Esteban Ramirez. All Rights Reserved.</p>
    `;
}

createFooter();
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="/html/home.html">
            <img src="/media/logo.png" class="brand-logo" alt="Tech Nexus">
            </a>      
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="/img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#"><img src="/img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/html/home.html" class="link">Home</a></li>
            <li class="link-item"><a href="/html/home.html#best-sellers" class="link">Best Sellers</a></li>
            <li class="link-item"><a href="/html/home.html#Smart%20Home" class="link">Smart Home</a></li>
            <li class="link-item"><a href="/html/home.html#Wearables" class="link">Wearables</a></li>
            <li class="link-item"><a href="/html/home.html#Mobile%20Devices" class="link">Mobile Devices</a></li>
        </ul>
    `;
}

createNav();


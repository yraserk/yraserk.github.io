function switchToTermsTab() {
    var termsButton = document.querySelector(".terms-tab-button")
    termsButton.classList.add("selected")

    var termsTab = document.querySelector(".terms-and-privacy .terms")
    termsTab.classList.add("show")

    var privacyTab = document.querySelector(".terms-and-privacy .privacy")
    privacyTab.classList.remove("show")

    var privacyButton = document.querySelector(".privacy-tab-button")
    privacyButton.classList.remove("selected")
}

function switchToPrivacyTab() {
    var termsButton = document.querySelector(".terms-tab-button")
    termsButton.classList.remove("selected")

    var termsTab = document.querySelector(".terms-and-privacy .terms")
    termsTab.classList.remove("show")

    var privacyTab = document.querySelector(".terms-and-privacy .privacy")
    privacyTab.classList.add("show")

    var privacyButton = document.querySelector(".privacy-tab-button")
    privacyButton.classList.add("selected")
}

const portfolioState = {
    roblox: false,
    other: false
};

function loadMoreRoblox(button) {
    document.querySelector('.roblox').classList.add('show-all');
    portfolioState.roblox = true;
    button.style.display = 'none';
}

function loadMoreOther(button) {
    document.querySelector('.other').classList.add('show-all');
    portfolioState.other = true;
    button.style.display = 'none';
}

function switchPortfolioTabOne(tab) {
    const portfolios = document.querySelectorAll('.roblox .portfolio-showcase');
    portfolios.forEach(p => p.classList.remove('selected'));
    const buttonTabs = document.querySelectorAll('.roblox .portfolio-showcase-button');
    buttonTabs.forEach(b => b.classList.remove('selected'));

    const active = document.querySelector(`.roblox .${tab}`);
    if (active) active.classList.add('selected');
    const clickedButton = document.querySelector(`.roblox .portfolio-showcase-button.${tab}`);
    if (clickedButton) clickedButton.classList.add('selected');

    const loadBtn = document.querySelector('.roblox + div .load-more');
    if (!portfolioState.roblox) {
        loadBtn.style.display = 'inline-block';
    }
}

function switchPortfolioTabTwo(tab) {
    const portfolios = document.querySelectorAll('.other .portfolio-showcase');
    portfolios.forEach(p => p.classList.remove('selected'));
    const buttonTabs = document.querySelectorAll('.other .portfolio-showcase-button');
    buttonTabs.forEach(b => b.classList.remove('selected'));

    const active = document.querySelector(`.other .${tab}`);
    if (active) active.classList.add('selected');
    const clickedButton = document.querySelector(`.other .portfolio-showcase-button.${tab}`);
    if (clickedButton) clickedButton.classList.add('selected');

    const loadBtn = document.querySelector('.other + div .load-more');
    if (!portfolioState.other) {
        loadBtn.style.display = 'inline-block';
    }
}

document.querySelectorAll('.portfolio-showcase img').forEach(img => {
    img.addEventListener("click", function (e) {
        document.querySelector('.showcase-popup img').src = img.src
        document.querySelector('.showcase-popup').showModal();
    });

});

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

function switchPortfolioTabOne(tabName) {
    document.querySelectorAll('.roblox .portfolio-showcase-button').forEach(btn => {
        btn.classList.remove('selected');
    });

    var tabButton = document.querySelector(`.roblox .portfolio-showcase-button.${tabName}`);
    tabButton.classList.add("selected")

    document.querySelectorAll('.roblox .portfolio-showcase').forEach(showcase => {
        showcase.classList.remove('selected');
    });

    var showcase = document.querySelector(`.roblox .portfolio-showcase.${tabName}`);
    showcase.classList.add("selected")
}

function switchPortfolioTabTwo(tabName) {
    document.querySelectorAll('.other .portfolio-showcase-button').forEach(btn => {
        btn.classList.remove('selected');
    });

    var tabButton = document.querySelector(`.other .portfolio-showcase-button.${tabName}`);
    tabButton.classList.add("selected")

    document.querySelectorAll('.other .portfolio-showcase').forEach(showcase => {
        showcase.classList.remove('selected');
    });

    var showcase = document.querySelector(`.other .portfolio-showcase.${tabName}`);
    showcase.classList.add("selected")
}

document.querySelectorAll('.portfolio-showcase img').forEach(img => {
    img.addEventListener("click", function (e) {
        document.querySelector('.showcase-popup img').src = img.src
        document.querySelector('.showcase-popup').showModal();
    });
});
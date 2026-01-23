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
    const container = document.querySelector('.roblox');
    if (container) container.classList.remove('show-all');

    const allShowcases = container.querySelectorAll('.portfolio-showcase');
    allShowcases.forEach(showcase => {
        showcase.classList.remove('selected');
        showcase.style.display = 'none';
    });

    const activeShowcase = container.querySelector(`.portfolio-showcase.${tab}`);
    if (activeShowcase) {
        activeShowcase.classList.add('selected');
        activeShowcase.style.display = 'flex';
    }

    const allButtons = container.querySelectorAll('.portfolio-showcase-button');
    allButtons.forEach(btn => btn.classList.remove('selected'));

    const activeButton = container.querySelector(`.portfolio-showcase-button.${tab}`);
    if (activeButton) activeButton.classList.add('selected');

    const loadBtn = container.querySelector('.roblox-load-more');
    if (loadBtn) loadBtn.style.display = 'inline-block';
}

function switchPortfolioTabTwo(tab) {
    const container = document.querySelector('.other');
    if (container) container.classList.remove('show-all');

    const allShowcases = container.querySelectorAll('.portfolio-showcase');
    allShowcases.forEach(showcase => {
        showcase.classList.remove('selected');
        showcase.style.display = 'none';
    });

    const activeShowcase = container.querySelector(`.portfolio-showcase.${tab}`);
    if (activeShowcase) {
        activeShowcase.classList.add('selected');
        activeShowcase.style.display = 'flex';
    }

    const allButtons = container.querySelectorAll('.portfolio-showcase-button');
    allButtons.forEach(btn => btn.classList.remove('selected'));

    const activeButton = container.querySelector(`.portfolio-showcase-button.${tab}`);
    if (activeButton) activeButton.classList.add('selected');

    const loadBtn = container.querySelector('.other-load-more');
    if (loadBtn) loadBtn.style.display = 'inline-block';
}

document.querySelectorAll('.portfolio-showcase img').forEach(img => {
    img.addEventListener("click", function (e) {
        document.querySelector('.showcase-popup img').src = img.src
        document.querySelector('.showcase-popup').showModal();
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (!hash) return;

    const validCategories = ["gfx", "building", "modeling", "vfx", "scripting", "animation"];

    if (!validCategories.includes(hash)) return;

    const portfolioSection = document.querySelector(".portfolio");
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
        if (typeof switchPortfolioTabOne === "function") {
            switchPortfolioTabOne(hash);
        }

        document
            .querySelectorAll(".roblox .portfolio-showcase-button")
            .forEach(btn => btn.classList.remove("selected"));

        const activeButton = document.querySelector(
            `.roblox .portfolio-showcase-button.${hash}`
        );
        if (activeButton) {
            activeButton.classList.add("selected");
        }
    }, 400);
});

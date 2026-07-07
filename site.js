const toggleButton = document.getElementById("langToggle");
const translatableElements = document.querySelectorAll("[data-en][data-pt]");

function setLanguage(language) {
    const attributeName = language === "pt" ? "data-pt" : "data-en";

    translatableElements.forEach((element) => {
        element.textContent = element.getAttribute(attributeName);
    });

    document.documentElement.lang = language === "pt" ? "pt" : "en";
    toggleButton.textContent = language === "pt" ? "PT | EN" : "EN | PT";
    toggleButton.setAttribute("aria-pressed", language === "pt" ? "true" : "false");
}

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const nextLanguage = document.documentElement.lang === "pt" ? "en" : "pt";
        setLanguage(nextLanguage);
    });
}

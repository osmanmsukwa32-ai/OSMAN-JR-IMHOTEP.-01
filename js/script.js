// OSMAN JR IMHOTEP WEBSITE

// 1. LANGUAGE SWITCHER

function switchLanguage() {

    const currentLanguage = document.documentElement.lang;

    const newLanguage = currentLanguage === "en" ? "ny" : "en";

    document.documentElement.lang = newLanguage;

    // Change translated elements

    const elements = document.querySelectorAll(
        "[data-en][data-ny]"
    );

    elements.forEach(function(element) {

        element.textContent =
            element.getAttribute("data-" + newLanguage);

    });

    // Change language button

    const languageButton =
        document.getElementById("languageBtn");

    if (newLanguage === "ny") {
        languageButton.textContent = "English";
    } else {
        languageButton.textContent = "Chichewa";
    }
}


// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 3. WEBSITE LOADED MESSAGE

console.log(
    "Welcome to Osman Jr Imhotep Official Website!"
);

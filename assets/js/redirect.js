// redirect.js
document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.href;

    // Redirect
    if (currentUrl.endsWith("/portofolio/")) {
        window.location.replace("/portofolio/index.html");
    } else if (currentUrl.endsWith("/portofolio/prmn")) {
        window.location.replace("/portofolio/prmn.html");
    } else if (currentUrl.includes("contact/index.html")) {
        window.location.replace("contact/");
    }
});
function setTheme(themeName) {
    localStorage.setItem("theme", themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "dark") {
        setTheme("light")
    } else {
        setTheme("dark")
    }
}

;(function () {
    if (localStorage.getItem("theme") === "dark" || (!("dark" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setTheme("dark")
    } else {
        setTheme("light")
    }
})()

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle")

    if (toggle) {
        toggle.addEventListener("click", function () {
            toggleTheme()
        })
    }
})

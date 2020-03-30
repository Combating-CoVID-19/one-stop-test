var currentTheme = localStorage.getItem('page-theme');
var autoTheme = localStorage.getItem('auto-page-theme');
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
var autoThemeBtn = document.getElementById('auto-theme-btn');

function checkTheme() {
    autoThemeBtn = document.getElementById('auto-theme-btn');
    autoTheme = localStorage.getItem('auto-page-theme');
    if(autoTheme == null){
        autoThemeBtn.innerHTML = "Use System Theme Off";
    if(currentTheme == null && currentTheme !== "dark" && currentTheme !== "light"){
        currentTheme = localStorage.getItem('page-theme');
        if(mediaQueryList.matches){
            localStorage.setItem('page-theme', "dark")
            checkTheme();
        } else {
            localStorage.setItem('page-theme', "light");
            checkTheme();
        }
    } else {
        if(currentTheme == "dark"){
            document.documentElement.setAttribute('page-theme', 'dark')
        } else {
            document.documentElement.setAttribute('page-theme', "light")
        }
    }
} else {
    autoThemeBtn.innerHTML = "Use System Theme On";
    if(mediaQueryList.matches){
        localStorage.setItem('page-theme', "dark")
        document.documentElement.setAttribute('page-theme', 'dark')
    } else {
        localStorage.setItem('page-theme', "light");
        document.documentElement.setAttribute('page-theme', "light")
    }
}
}

function editAutoTheme() {
    autoTheme = localStorage.getItem('auto-page-theme')
    if(autoTheme == null){
        localStorage.setItem('auto-page-theme', 'on')
        checkTheme()
    } else {
        localStorage.removeItem('auto-page-theme');
        checkTheme()
    }
}

function changeTheme(){
    if(currentTheme == "light"){
        currentTheme = "dark"
        localStorage.setItem('page-theme', "dark")
        document.documentElement.setAttribute('page-theme', "dark")

    } else {
        currentTheme = "light"
        localStorage.setItem('page-theme', "light")
        document.documentElement.setAttribute('page-theme', "light")

    }
}

function handleSchemeChange(){
    autoTheme = localStorage.getItem('auto-page-theme')
    if(autoTheme !== null){
        if(mediaQueryList.matches){
            localStorage.setItem('page-theme', "dark")
            document.documentElement.setAttribute('page-theme', 'dark')
        } else {
            localStorage.setItem('page-theme', "light");
            document.documentElement.setAttribute('page-theme', "light")
        }
    }
}

mediaQueryList.addListener(handleSchemeChange)

checkTheme();
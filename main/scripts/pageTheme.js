var currentTheme = localStorage.getItem('page-theme');
var autoTheme = localStorage.getItem('auto-page-theme');
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
function checkTheme() {
    if(autoTheme == null){
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
    if(mediaQueryList.matches){
        localStorage.setItem('page-theme', "dark")
        document.documentElement.setAttribute('page-theme', 'dark')
    } else {
        localStorage.setItem('page-theme', "light");
        document.documentElement.setAttribute('page-theme', "light")
    }
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
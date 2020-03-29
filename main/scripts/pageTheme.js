var currentTheme = localStorage.getItem('page-theme');
const mediaQueryList = window.matchMedia("(prefers-color-theme: dark)");
function checkTheme() {
    if(currentTheme == null && currentTheme !== "dark" && currentTheme !== "light"){
        if(mediaQueryList.matches){
            localStorage.setItem('page-theme', "dark")
        } else {
            localStorage.setItem('page-theme', "light");
        }
    } else {
        if(currentTheme == "dark"){
            document.documentElement.setAttribute('page-theme', 'dark')
        } else {
            document.documentElement.setAttribute('page-theme', "light")
        }
    }
}


function changeTheme(){
    if(currentTheme == "light"){
        currentTheme = "dark"
        localStorage.setItem('page-theme', "dark")
        checkTheme();
    } else {
        currentTheme = "light"
        localStorage.setItem('page-theme', "light")
        checkTheme();
    }
}

checkTheme();
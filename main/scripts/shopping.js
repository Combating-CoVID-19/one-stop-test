var bar = document.getElementById("search-bar")


function search(){
    if(bar.value != null || bar.value != ' ' || bar.value != ''){
    console.log('Search query: '+bar.value)
    }



}

document.querySelector("input").addEventListener('input', search);
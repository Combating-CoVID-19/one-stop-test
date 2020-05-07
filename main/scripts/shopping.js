var bar = document.getElementById("search-bar")
var amazon = document.getElementById('amazon')

function search(){
    if(bar.value == null || bar.value == ' ' || bar.value == ''){
        console.log('empty search field')
        $(amazon).hide()

    } else {
        $(amazon).show()
    console.log('Search query: '+bar.value)
    amazon.innerHTML = 'Search Amazon for ' + bar.value;
    $(amazon).attr('href', 'https://www.amazon.com/s?k='+bar.value)
        
}



}

document.querySelector("input").addEventListener('input', search);
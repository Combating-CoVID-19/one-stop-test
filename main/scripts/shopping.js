var bar = document.getElementById("search-bar")
var amazon = document.getElementById('amazon')
var google = document.getElementById('google-express')
// var ebay = document.getElementById('ebay')

$(amazon).hide()
$(google).hide()
$(ebay).hide()


function search(){
    if(bar.value == null || bar.value == ' ' || bar.value == ''){
        console.log('empty search field')
        $(amazon).hide()
        $(google).hide()
        // $(ebay).hide()

    } else {
    $(amazon).show()
    $(google).show()
    // $(ebay).show()
    // console.log('Search query: '+bar.value)
    // amazon.innerHTML = 'Search Amazon for ' + bar.value;
    // google.innerHTML = "Search Google Shopping for " + bar.value;
    // ebay.innerHTML = 'Search Ebay for ' + bar.value;
    $(amazon).attr('href', 'https://www.amazon.com/s?k='+bar.value)
    $(google).attr('href', 'https://shopping.google.com/search?q='+bar.value)
    // $(ebay).attr('href')
}



}

document.querySelector("input").addEventListener('input', search);
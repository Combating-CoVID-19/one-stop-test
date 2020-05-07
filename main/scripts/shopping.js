var bar = document.getElementById("search-bar")
var amazon = document.getElementById('amazon')
var google = document.getElementById('google-express')
var target = document.getElementById('target')

$(amazon).hide()
$(google).hide()
$(target).hide()


function search(){
    if(bar.value == null || bar.value == ' ' || bar.value == ''){
        console.log('empty search field')
        $(amazon).hide()
        $(google).hide()
        // $(target).hide()

    } else {
    $(amazon).show()
    $(google).show()
    $(target).show()
    // console.log('Search query: '+bar.value)
    // amazon.innerHTML = 'Search Amazon for ' + bar.value;
    // google.innerHTML = "Search Google Shopping for " + bar.value;
    // target.innerHTML = 'Search Ebay for ' + bar.value;
    $(amazon).attr('href', 'https://www.amazon.com/s?k='+bar.value)
    $(google).attr('href', 'https://shopping.google.com/search?q='+bar.value)
    $(target).attr('href', 'https://www.target.com/s?searchTerm='+bar.value)
}



}

document.querySelector("input").addEventListener('input', search);
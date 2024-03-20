window.onload = function() {
    
    // Get form element
    let form = document.getElementById("email-subscription-form");
    
    // Get input element
    let inputEmail = document.getElementsByName("subscription-email")[0];
    
    // Listen to the submit of the form
    form.onsubmit = function (event) {
        // Prevent the form from submitting
        // First some checks need to be made
        event.preventDefault();

        let startsWithIAm = inputEmail.value.startsWith("IAm");

        if(!startsWithIAm) {

            let fragment = createHtmlElement(`<div class="alert alert-danger">Hm, your e-mail address is not valid because it doesn't start with <b>i-am-<b> Please try again.</p>`);
            document.getElementsByClassName('inputs')[0].after(fragment);
        }
    }

}

function createHtmlElement(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

let emailPrefix = "i-am-";
let inputHistory = [];

// We wait to execute the javascript untill all the HTML has finished loading
window.onload = function() {
    // Get form element
    let form = document.getElementById("email-subscription-form");
    
    // Get input element
    let inputEmail = document.getElementsByName("subscription-email")[0];
    
    // Listen to the submit of the form
    form.onsubmit = function (event) {
        // Prevent the form from submitting so we can validate the input first
        event.preventDefault();

        // Variables to be able to check if notification has already been added to prevent multiple errors from being shown
        var alertElement = document.getElementsByClassName("alert");
        var alertElementExists = alertElement.length; // none found means a length of 0

        // Check whether the email starts with the prefix
        let startsWithIAm = inputEmail.value.startsWith(emailPrefix);

        // Add input value to history array
        inputHistory.push(inputEmail.value);

        if(inputEmail.value == "") 
        {
            // Remove error element if it's already there
            if(alertElementExists)
            {
                alertElement[0].remove();
            }

            addError('Well, well. Trying to submit an empty email address are we? Try again.')
        }
        // Check whether email starts with i-am-...
        else if (!startsWithIAm)
        {
            if(alertElementExists)
            {
                alertElement[0].remove();
            }

            addError("Hm, your e-mail address is not valid because it doesn't start with <i><b>i-am-</b></i>"); 
        }
        else
        {
            if(alertElementExists)
            {
                // Remove red border
                document.getElementsByClassName('inputs')[0].classList.remove('red-border');
                // Remove existing alert message
                alertElement[0].remove();
            }
            
            var successText = `<div class="alert alert-success"><p>Hooray! You've been subscribed to our mailing list.</p>`;

            if (inputHistory.length)
            {
                successText += `<p>Here's a printout of all the attempts:<ol>`;
                inputHistory.forEach(function(entry) {

                    if(entry == "")
                    {
                        entry = "(empty email address)";
                    }

                    successText += '<li>'+ entry + '</li>';
                  });
                successText += `</ol></p>`;
            }

            successText += `</div>`;

            let fragment = createHtmlElement(successText);

            document.getElementsByClassName('inputs')[0].after(fragment);
        }
    }
}

function addError(message)
{
    // Create HTML element that contains error message
    let fragment = createHtmlElement(`<div class="alert alert-danger validation-error"><p>${message}</p></div>`);
            
    // Add HTML element after the inputs
    document.getElementsByClassName('inputs')[0].after(fragment);

    // Add a red border around the input
    document.getElementsByClassName('inputs')[0].classList.add('red-border');
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

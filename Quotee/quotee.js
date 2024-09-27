// Initialize EmailJS with your Product Key
emailjs.init('X-Z7pWqAqDKv1k8q0');

document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data dynamically
    var formData = {
        name: document.getElementById('inputName').value,
        username: document.getElementById('inputUsername').value,
        departure: document.getElementById('inputDeparture').value,
        destination: document.getElementById('inputDestination').value,
        phone: document.getElementById('inputPhone').value,
        email: document.getElementById('inputEmail').value,
        city: document.getElementById('inputCity').value,
        State: document.getElementById('inputState').value,
        zip: document.getElementById('inputZip').value,
        message: document.getElementById('exampleFormControlTextarea1').value,
    };

    // Define the service ID and template ID
    var serviceID = 'service_x5dxeok';
    var templateID = 'template_t05bbkk';

    // Send the form data using EmailJS
    emailjs.send(serviceID, templateID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully!!! WMP removals expert will contact you via your email, Thanks!');//document.getElementById('response-message').innerText = 'Message sent successfully!';
            // document.getElementById('response-message').style.color= "white";
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('response-message').innerText = 'Failed to send message. Please try again.';
        });
});

/************TRACKING ALERT MESSAGE*********/
function spin(){
    alert("Sorry, tracking is not available for now try again in some minute");
}
// Initialize EmailJS with your user ID
emailjs.init('X-Z7pWqAqDKv1k8q0');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data dynamically
    var formData = {
        name: document.getElementById('exampleInputFullName').value,
        email: document.getElementById('exampleInputEmail1').value,
        phone: document.getElementById('exampleInputNumber').value,
        message: document.getElementById('exampleFormControlTextarea1').value,
    };

    // Define the service ID and template ID
    var serviceID = 'service_x5dxeok';
    var templateID = 'template_cip5ow2';

    // Send the form data using EmailJS
    emailjs.send(serviceID, templateID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully!!!, Wait for response in your mail, Thanks...');//document.getElementById('response-message').innerText = 'Message sent successfully!';
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
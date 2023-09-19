function sendMail(contactForm) {
    emailjs.send("service_6juaw1f", "Adam", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.project_request.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                contactForm.name.value = '';
                contactForm.emailaddress.value = '';
                contactForm.project_request.value = '';
                alert("Success! Your email has been sent.");
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}
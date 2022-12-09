function sendMail(){
    var params={
        name:document.getElementById('name').value ,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    }
    const serviceId="service_500tr85";
    const templateId="template_6z8s6bw";
    emailjs.send(serviceId,templateId,params)
    .then(
        res =>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("your message sent succesfully")
        })
        .catch((err) => console.log(err));
}
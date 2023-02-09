const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const input_Elements = [nameInput,emailInput,messageInput]

const sendMessage = document.getElementById("send-message");


sendMessage.addEventListener("click",checkContent);

function checkContent(e){

    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
        alert("Lütfen boş kısımları doldurunuz...");
    }
    
    else{

        sendMail();

        input_Elements.forEach(function(element){
            element.value = "";
        })
    }

    e.preventDefault();
}

function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email").value,
        message_id : document.getElementById("message").value
    }
    emailjs.send("service_sbublwb","template_qzz9z4r",params).then(function(res){
        alert("Mesaj başarıyla gönderildi!")
    })
}
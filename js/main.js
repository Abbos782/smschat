
let inputTextElemnt = document.querySelector(".text")
let buttonSendElement = document.querySelector(".send")
let userElement = document.querySelector(".list")




buttonSendElement.addEventListener("click", function(){

      let newMessage = document.createElement("li")
      newMessage.innerHTML =inputTextElemnt.value 
      if(inputTextElemnt.value.length>1){
        userElement.appendChild(newMessage)
      }
     
      inputTextElemnt.value = " "
    
 

})



 



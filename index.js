var stars=document.querySelectorAll('.checked')
count=0
window.addEventListener('load',function(){
    for (let star of stars){
        star.addEventListener('click' , function(){
           this.setAttribute('clicked',true)
           let rating=this.dataset.rating
           
           if(rating==='5'){
                var text=document.querySelector('.text')
                text.innerHTML="Excellent We're are thrilled to hear you had such a positive experience.Thank you for choosing our platform."
                console.log(text)
           }
           if(rating==='4'){
            var sibling=star.previousElementSibling
            sibling.removeAttribute('clicked')
            console.log(sibling)
            var text=document.querySelector('.text')
            text.innerHTML="Thank you for your positve feedback! We're are glad to know you had such a great experience and we apreciate your support!."
            
       }
       if(rating==='3'){
        var sibling=star.previousElementSibling
            sibling.removeAttribute('clicked')
            sibling.previousElementSibling.removeAttribute('clicked')
        star.previousElementSibling.color='unset'
        var text=document.querySelector('.text')
        text.innerHTML="Thank you for your  feedback! We're are sorry to hear that your experience wasn't perfect.We would love to hear more about your concerns to see how we can improve."
       
   }
       if(rating==='2'){
        var sibling=star.previousElementSibling
            sibling.removeAttribute('clicked')
            sibling.previousElementSibling.removeAttribute('clicked')
            sibling.previousElementSibling.previousElementSibling.removeAttribute('clicked')
           
        var text=document.querySelector('.text')
        text.innerHTML="We apologize for the inconvenience you experienced We appreciate your feebdack and would like to work with you to address any issues."
        console.log(text)
   }
   if(rating==='1'){
    var sibling=star.previousElementSibling
            sibling.removeAttribute('clicked')
            sibling.previousElementSibling.removeAttribute('clicked')
            sibling.previousElementSibling.previousElementSibling.removeAttribute('clicked')
            sibling.previousElementSibling.previousElementSibling.previousElementSibling.removeAttribute('clicked')
            var text=document.querySelector('.text')
    text.innerHTML="We're sorry to hear that your had a bad experince.We would like to learn about what happened and how we can make things right!"
    console.log(text)
}
        })

    }
})
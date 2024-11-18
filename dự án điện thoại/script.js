const addressbtn = document.querySelector('#address-form')
const addresscl = document.querySelector('#address-close')

// console.log(addresscl)
addressbtn.addEventListener("click", function(){
 document.querySelector('.address-form').style.display ="flex"

})
addresscl.addEventListener("click", function(){
    document.querySelector('.address-form').style.display ="none"
})
    const rightbtn = document.querySelector('.fa-chevron-right')
        rightbtn.addEventListener('click', function() {
            console.log("ok");
        })


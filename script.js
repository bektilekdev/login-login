const form =document.querySelector('.form')
const email =document.querySelector('.email')
const password = document.querySelector('.pass')
const btn = document.querySelector('.add')
const h4 = document.querySelector('h4')

let count = 3
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e)
    if(email.value === 'beka' && password.value === '1234'){
        h4.innerHTML = 'Доступ открыт!!!'
        h4.style.color = 'green'
        email.value = ''
        password.value = ''
        email.style.boxShadow ='none'
        password.style.boxShadow ='none'
    }
    else if (email.value === '' || password.value === '') {
        h4.innerHTML = `заполните строку`
        h4.style.color ='red'
        email.style.boxShadow= 'red 5px 5px  50px 5px'
        password.style.boxShadow= 'red 5px 5px  50px 5px'
    }
    else{
        count--
        if (count === 2){
            h4.innerHTML = `сизде ${count} калды`
            h4.style.color = 'red'
            email.value = ''
            password.value = ''
            email.style.boxShadow ='none'
            password.style.boxShadow ='none'
        }
        if (count === 1){
            h4.innerHTML = `сизде ${count} калды`
            h4.style.color = 'orange'
            email.style.boxShadow ='Olive 5px 5px 5px 5px'
            password.style.boxShadow ='Olive 5px 5px 5px 5px'
            email.value = ''
            password.value = ''
        }
        if (count === 0){
            h4.innerHTML = `Доступ закрыт!!!`
            btn.setAttribute("disabled","disabled")
            email.value = ''
            password.value = ''
            email.style.border ='red 5px 5px 5px 5px'
            password.style.border ='red 5px 5px 5px 5px'
        }
    }
})
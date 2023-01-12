const chk = document.getElementById('chk')



chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
    document.querySelector(".mainlogin").classList.toggle('dark')
    document.querySelector(".siginup").classList.toggle('dark')
    document.querySelector(".login").classList.toggle('dark')
    document.querySelector(".remember").classList.toggle('dark')
    document.querySelector(".lab-user").classList.toggle('dark')
    document.querySelector(".lab-pass").classList.toggle('dark')
    document.querySelector(".lab-confirm").classList.toggle('dark')
    document.querySelector(".lab-email").classList.toggle('dark')

    document.querySelector(".title").classList.toggle('dark')
    
})
const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
    document.querySelector(".mainlogin").classList.toggle('dark')
    document.querySelector(".login").classList.toggle('dark')
    document.querySelector(".title").classList.toggle('dark')
    document.querySelector(".text-confirm").classList.toggle('dark')
    document.querySelector(".lab-email").classList.toggle('dark')
    
})
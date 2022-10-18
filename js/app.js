const $ = document.querySelector.bind(document);

const register = $('.register')

const active = $('.user')
const iconx = $('.icon')
const login = $('.login')
const logintop = $('.clicklogin')
const save = $('.save')
const btnClose = $('.btnclose')
const table = $('#table')
const log = $('#log')
const logEmail = $('#logemail')
const logPass = $('#logpass')
const main = $('.main')
const span = $('#span')
const myName = $('.name p')
const setting = $('.setting')
const lookup = $('.lookup')
const manage = $('.manage')
const logout = $('.logout')
const loginClose = $('#loginclose')




let members = []


register.onclick = () =>{
    if(active.style.display == 'none') {
        active.style.display = 'block';
        login.style.display = 'none';
    }else{
        active.style.display = 'none';
    } 
}
iconx.onclick = () =>{
    if(active.style.display == 'block' || login.style.display == 'block') {
        active.style.display = 'none'  ;
        login.style.display = 'none'
    }
    
}
logintop.onclick = () =>{
    if(login.style.display == 'none') {
        login.style.display = 'block';  
        active.style.display = 'none'; 
    }
    else{
        login.style.display = 'none';
    }
}
save.onclick = () =>{
    const name = $('#name').value
    const email = $('#email').value
    const phone = $('#phone').value
    const pass = $('#pass').value
   
    if(name && email && phone && pass) {
        members.push({
            name: name,
            email: email,
            phone: phone,
            pass: pass
        })
    }
    if(members.length === 0) return false
    let userList = `
    <tr>    
        <td>#</td>
        <td>name</td>
        <td>email</td>
        <td>phone</td>
        <td>pass</td>
        <td></td>
    </tr>
`
    members.forEach((member, index) => {
        index++
        userList += `
            <tr>    
                <td>${index}</td>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.phone}</td>
                <td>${member.pass}</td>
                <td></td>
            </tr>
        `
    })
    table.innerHTML = userList

    let dkconfig = confirm('Tiếp tục đăng ký')
    if(dkconfig) {
        $('#name').value = ''
        $('#email').value = ''
        $('#phone').value = ''
        $('#pass').value = ''
    }else{
        active.style.display = 'none'
        $('#name').value = ''
        $('#email').value = ''
        $('#phone').value = ''
        $('#pass').value = ''
    }
}
btnClose.onclick = () =>{
    $('#name').value = ''
    $('#email').value = ''
    $('#phone').value = ''
    $('#pass').value = ''
   
   
}
 let rowPush = []
log.onclick = () =>{

    if(logEmail.value === email.value && logPass.value === pass.value) {
        main.style.display = 'block';
        register.style.display = 'none';
        logintop.style.display = 'none';
        span.innerHTML = ''
        login.style.display = 'none';
    }
    

    
    let rowTable = table.rows.length ;
    for(let i = 1; i < rowTable; i++) {
        let cell = table.rows[i].cells.length
        for(let j = 1; j < cell; j++) {
           
            
            rowPush.push({
                loginName: table.rows[i].cells[1].innerText,
                loginWebEmail: table.rows[i].cells[2].innerText,
                loginWebPass: table.rows[i].cells[4].innerText
            })
        }
        
    }
    
    if (rowPush[0].loginWebEmail === logEmail.value && rowPush[0].loginWebPass === logPass.value) {
        main.style.display = 'block';
        register.style.display = 'none';
        logintop.style.display = 'none';
        login.style.display = 'none';
        myName.innerHTML = rowPush[0].loginName
        span.innerHTML = ''
    }else {
        span.innerHTML = 'sai email or password'
    }
    
    
    logEmail.value = ''
    logPass.value = ''

    
    
    
    //     let rowCout = table.rows.length
    //     for(let i = 1; i < rowCout ; i++) {
        //         let row = table.rows[i]
        //         let loginWebEmail = row.cells[2] 
        //         let loginWebPass = row.cells[4]
        //         let loginName = row.cells[1].innerText
        
        
        
        //     if(loginWebEmail.innerText === logEmail.value && loginWebPass.innerHTML === logPass.value){
            //         main.style.display = 'block';
            //         register.style.display = 'none';
            //         logintop.style.display = 'none';
//         login.style.display = 'none';
//         myName.innerHTML = loginName
//         span.innerHTML = ''
//     }else{
    //         span.innerHTML = 'sai email or password'

    //     }
    //    }
}



main.onmouseenter = function(){
    
    setting.style.display = 'block';
    
}
main.onmouseleave = function(){
    setting.style.display = 'none'
    
}
manage.onclick = () =>{
    if(table.style.display = 'none') {
            table.style.display = 'block'
        }else{
                table.style.display = 'none'
    }
}
logout.onclick = () =>{
        let choice = confirm('Are you sure you want to log out?')
        if(choice){
        main.style.display = 'none'
        register.style.display = 'block'
        logintop.style.display = 'block'
        table.style.display = 'none'
        login.style.display = 'none'
    }
}
loginClose.onclick = function(){
     
    logEmail.value = ''
    logPass.value = ''
}



            
            

                
            



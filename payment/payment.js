
var user=JSON.parse(localStorage.getItem('userInfo')) || false

if(user){
    var userbill=JSON.parse(localStorage.getItem('userbill'))
    var bill=document.querySelector('#amount')
    bill.innerText=`Your bill is $${userbill}.00`

}else{
    document.querySelector('#ordered').style.display='none'
    alert('please login before place order')

    window.location.href='login.html'
    
}

document.querySelector('#ordered').addEventListener('click',function(){
    alert('your order placed successfully we will dispatch your order soon')
    window.location.href='home.html'
})
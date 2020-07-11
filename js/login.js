let phone
let password
function login1(){
     phone = document.getElementById("phone").value
     password = document.getElementById("password").value
    login()
}

function login(){
    fetch("http://localhost:3000/login/cellphone?phone="+ phone +"&password="+ password,{//fetch后续用.then来接收
    method:"get",
    mode:"cors",
    credentials:"include"
})

.then(function(data){
    // console.log( "手机号登陆：" )
    // console.log( data )
    // console.log( data.json() )
    if(data.status == 200){
        status()
        alert("登录成功")
        window.location.href= "wangyiyun.html"
    }else{
        alert("登录失败")
    }
})
}
function status(){
    fetch( "http://localhost:3000/login/status", {
        method:"get",
        mode:"cors", 
        credentials: "include"
    } )
    .then( function( data2 ){
        console.log( "登陆状态：" )
        console.log(  data2.status )
    } )
}

let loginBtn = document.getElementById("login")
fetch( "http://localhost:3000/login/status", {
        method:"get",
        mode:"cors", 
        credentials: "include"
    } )

.then(function(data){
    status = data.status  //状态码
    if(status == 200 ){
        document.getElementById("loginOrNot").innerHTML = "退出登录"
        loginBtn.onclick = function(){
            fetch( "http://localhost:3000/logout", {
            method:"get",
            mode:"cors",        
            credentials: "include"
            } )
            .then( function( data ){
                console.log( "logout成功" )
                alert( "退出登陆后要稍等一会才能实现" )
            } )
        }
    }else{          //尚未登陆
        document.getElementById( "loginOrNot" ).innerHTML = "登录"
        loginBtn.onclick = function(){
            window.location.href = "login.html"
        }
    }
})
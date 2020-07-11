//fetch(地址,配置)
fetch("http://localhost:3000/personalized",{//fetch后续用.then来接收
    method:"get",
    mode:"cors",
    credentials:"include"
})
.then(function(data)
{
    return data.json()
})
.then(function(data)
{
    //console.log(data.result)
    //data.result是一个数组，我们只需要前面留个数据slice切割数组，包前不包后
  
    console.log (data.result.slice(0,6))
    //let是定义变量的关键字 const是定义常量的关键字
    let box=document.querySelector("#rec-song-group")
    //box.innerHTML 在盒子中插入内容
    //box.innerHTML="<p>我是一个标签</p>"
    for(i=0;i<data.result.slice(0,6).length;i++)
    {
        box.innerHTML+=
        `<a href="recMusic.html?id=${data.result[i].id}">
        <li>
                <img src="${data.result[i].picUrl}"alt="">
                <p>${data.result[i].name}</p>
        </li>
        </a>`
        //在模板字符串 ` ` 里面的变量不能直接写，否则会被当成字符串处理，变量必须加上${}
    }

}
)//数据接收和呈现
//如何获取网页页面的盒子
//document.querySelector() document是网页 
//console.log(document.querySelector("#rec-song-group"))
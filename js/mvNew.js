fetch("http://localhost:3000/mv/first?limit=15",{
    method:"get",
    mode:"cors"
})
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log(data.data[0].cover) //封面图
    console.log(data.data[0].playCount)  //点赞数
    console.log(data.data[0].name)  //歌曲名
    console.log(data.data[0].artistName) //作者名
    
    let str = ` `
    let list =""
    for(i=0;i<data.data.length;i++){
        if(i>=0&&i<=8){
            list = "0" + (i+1)
        }else{
            list = i+1
        }
        str +=`
        <div class="newPic">
        <div class="good">
            <img src="image/MV.png" alt="">
            <span>${data.data[i].playCount}</span>
        </div>
        <img src="${data.data[i].cover}" alt="" class="mvPic">
    </div>
    <div class="mvSongs">
        <div class="mvList">${list}</div>
        <div class="mvName">
            <p>${data.data[i].name}</p>
            <span>by: ${data.data[i].artistName}</span>
        </div>
        <div class="mvBtn">
            <a href="mv.html?id=${data.data[i].id}"><button>查看MV</button></a>
        </div>
    </div>
        `
    }
    let box = document.querySelector(".mv")
    box.innerHTML = str
})
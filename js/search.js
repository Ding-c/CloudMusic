// 搜索页的逻辑代码
let searchInput =document.querySelector(".search-bar>input")
// 判断是否有焦点
searchHot()
getInfo()
searchInput.onfocus = function(){
    searchInput.onkeyup=function(e){
        if(searchInput.value==""){
            // 展示默认页面
            showContainer(document.querySelector(".search-def"))
            getInfo()
        }else{
            if(e.keyCode==13){
                // 回车键
                showContainer(document.querySelector(".search-res"))//取出数组
                // let arr=[]
                // arr.push(searchInput.value)
                //include map forEach indexOf find findIndex 
                let arr = JSON.parse(localStorage.getItem("singerName")) ||[] 
                //在存入数组心得内容之前，做一步判断，判断是否数组存在
                if(!arr.includes(searchInput.value)){
                    arr.push(searchInput.value)
                    localStorage.setItem("singerName",JSON.stringify(arr))
                }
                
                
                
            
                // 发送
                axios.all([getAblum(),getSongList()])
                .then(axios.spread((getAblumInfo,getSongListInfo)=>{
                    // console.log("专辑歌手信息",getAblumInfo)
                    // data.data.result.artist.name歌手名
                    // data.data.result.album.blurPicUrl 专辑图片
                    
                    // console.log("歌曲列表",getSongList)
                    // data.data.result.song.name歌曲名
                    let ablumBox= document.querySelector(".search-res>ol")
                    let songListBox = document.querySelector(".search-res>ul")
                    let albumStr=``
                    let songListStr=``
                    if(Object.keys(getAblumInfo.data.result)!=0 ){
                        albumStr=`
                    <li>
                            <img src="${getAblumInfo.data.result.artist[0].picUrl}" alt="">
                            <p>${getAblumInfo.data.result.artist[0].name}</p>
                        </li>
                        <li>
                            <img src="${getAblumInfo.data.result.album[0].blurPicUrl}" alt="">
                            <p>${getAblumInfo.data.result.album[0].name}</p>
                        </li>
                    `
                    ablumBox.innerHTML=albumStr
                    }
                    
                    let songArr = getSongListInfo.data.result.songs
                    for(i=0;i<songArr.length;i++)
                    {
                        songListStr+=`
                        <a href="play.html?id=${getSongListInfo.data.result.songs[i].id}">
                        <li>
                            <div class="play-icon"></div>
                            <div class="song-title-container">
                                <div class="song-title">
                                    <p>${songArr[i].name}</p>
                                </div>    
                            </div>
                            <div class="singer">
                                    <span class="sqicon"></span>
                                    ${songArr[i].artists[0].name}-${songArr[i].album.name}
                                </div>
                        </li>
                    </a>
                        `
                    }
                    songListBox.innerHTML=songListStr
                    
                    
                    console.log($(".inner>.screen:nth-child(3)"))
                   changeHeight($(".inner>.screen:nth-child(3)"),$(".content"))

                }))


            
            
            
            }else{
                // 除了回车之外的键盘按键，展示搜索建议
                showContainer(document.querySelector(".search-rem"))
                searchAdvice()
            }
        }
        changeHeight($(".inner>.screen:nth-child(3)"),$(".content"))
    }
}

// searchInput.onblur = function(){

// }

function searchHot(){
    fetch("http://localhost:3000/search/hot",{
        method:"get",
        mode:"cors",
        credentials:"include"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        let box = document.querySelector(".search-hot")
        // console.log(data.result.hots[0].first)
        let str =``
        for(i=0;i<data.result.hots.length;i++){
            str+=`<span>${data.result.hots[i].first}</span>`
        }
        box.innerHTML = str
    })
}
function getInfo(){
    // 去离线存储拿数据，拿到之后转为数组
    let arr = JSON.parse(localStorage.getItem("singerName")) ||[]
    let str = ``
    let box = document.querySelector(".search-list")
    for(i=0;i<arr.length;i++){
        str +=`
        <li> 
        <p>${arr[i]}</p> 
        <span onclick = "delInfo(${i})">X</span>
        </li>
        `
    }
    box.innerHTML= str
}

// 离线存储的删除功能
function delInfo(x){
    // 整存整取
    let arr = JSON.parse(localStorage.getItem("singerName"))||[]   //取出来
    arr.splice(x,1)
    localStorage.setItem("singerName",JSON.stringify(arr))  //存进去
    getInfo()
}

function searchAdvice(){
    let searchBar = document.querySelector(".search-bar>input")
    let box = document.querySelector(".search-rem>.search-list")
    fetch(`http://localhost:3000/search/suggest?keywords=${searchBar.value}&type=mobile`)
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        console.log("搜索建议",data)
        // data.result.allMatch 搜索建议数组
        // keyword 关键词
        let str = ``
        for(i=0;i<data.result.allMatch.length;i++){
            str+=`
                <li>${data.result.allMatch[i].keyword}</li>
            `
        }
        box.innerHTML =str
    })
}

// 搜索歌手信息和专辑介绍
// http://localhost:3000/multimatch?keywords=
// 搜索歌曲列表：
// http://localhost:3000/search?keywords=

function getAblum(){
    withCredentials = true;
    return axios.get(`http://localhost:3000/search/multimatch?keywords=${searchInput.value}`)
}
function getSongList(){
    withCredentials = true;
    return axios.get(`http://localhost:3000/search?keywords=${searchInput.value}`)
}

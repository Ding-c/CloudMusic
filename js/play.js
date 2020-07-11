// 获取音乐地址的代码
// fetch("http://localhost:3000/song/url"+location.search,{
//     method:"get",
//     mode:"cors"
// })
// .then(function(data){
//     return data.json()
// })
// .then(function(data){
//     console.log(data.data[0].url)
//     let box = document.querySelector(".music")
//     box.innerHTML = `<audio src="${data.data[0].url}" controls></audio>`
// })
// 使用axios同时获取三个数据信息


// 1.音乐地址的获取
function getMusicURL(){
    return axios.get("http://localhost:3000/song/url"+location.search);
}
function ablumImg(){
    return axios.get("http://localhost:3000/song/detail?ids="+location.search.slice(4));
}
function getLyric(){
    return axios.get("http://localhost:3000/Lyric"+location.search);
}
axios.all([getMusicURL() , ablumImg(),getLyric()])
.then(axios.spread(function(musciURLData,ablumImgData,LyricData){
    // console.log(musciURLData.data.data[0].url) //歌曲地址
    // console.log(ablumImgData.data.songs[0].name)//歌曲名
    // console.log(ablumImgData.data.songs[0].al.picUrl) //专辑图片
    // console.log(LyricData.data.lrc.lyric)//歌词

    

    let songImg = document.querySelector(".song-img>img")
    let bg = document.querySelector(".bg>img")
    let title = document.querySelector(".song-lyric>h2")
    let lyricTxt = document.querySelector(".song-lyric>p")
    let musicAudio =document.querySelector("#audio")
    let disc = document.querySelector(".disc")
    let rangBar = document.querySelector("#range")
     // 定义一个歌词播放的lyric对象
     let lyric = new window.Lyric(LyricData.data.lrc.lyric, function (obj) {
        lyricTxt.innerHTML = obj.txt
        // lyricTxt.innerHTML += obj.txt+"<br>"
    })
    songImg.setAttribute("src",ablumImgData.data.songs[0].al.picUrl)
    bg.setAttribute("src",ablumImgData.data.songs[0].al.picUrl)
    title.innerHTML= ablumImgData.data.songs[0].name
    musicAudio.setAttribute("src",musciURLData.data.data[0].url)

    disc.addEventListener("click",isPlay)
    function isPlay(){
        if(musicAudio.paused){
            musicAudio.play()
            disc.classList.remove("paused")
            disc.classList.add("playing")
            lyric.togglePlay()
        }else{
            musicAudio.pause()
            disc.classList.remove("playing")
            disc.classList.add("paused")
            lyric.togglePlay()
        }
        
    }

    
    musicAudio.onloadedmetadata =function(){
        // 进度条当前位置
        musicAudio.ontimeupdate = function(){
            rangBar.value = musicAudio.currentTime * 100 / musicAudio.duration
        }
        rangBar.oninput= function(){
            musicAudio.currentTime = rangBar.value * musicAudio.duration /100
            lyric.seek(musicAudio.currentTime*1000)
        }
    }

    
    
}))


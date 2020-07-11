fetch("http://localhost:3000/top/list?idx=1",{
    method:"get",
    mode:"cors",
    credentials:"include"
})
.then(function(data){
    return data.json()
})
.then(function(data){
    // console.log(data.playlist.tracks)
    // data.playlist.tracks[0].name   歌曲名
    // data.playlist.tracks[0].id 歌曲id
    // data.playlist.tracks[0].alia 备注名
    // console.log(data.playlist.tracks[0].ar[0].name)
    // data.playlist.tracks[0].al.name 
    let str = ` `
    let list =""
    for(i=0;i<data.playlist.tracks.length;i++){
        if(i>=0&&i<=8){
            list = "0" + (i+1)
        }else{
            list = i+1
        }
        let des = data.playlist.tracks[i].alia[0]||" "
        str +=`
                <a href="play.html?id=${data.playlist.tracks[i].id}">
                        <li>
                            <div class="hot-list">
                                ${list}
                            </div>
                            <div class="hot-play-icon"></div>
                            <div class="hot-song-title-container">
                                <div class="hot-song-title">
                                    <p>${data.playlist.tracks[i].name}</p>
                                </div>
                                <div class="hot-song-des">
                                    <p>${des}</p>
                                 </div>    
                            </div>
                            <div class="hot-singer">
                                    <span class="hot-sqicon"></span>${data.playlist.tracks[i].ar[0].name}-${data.playlist.tracks[i].al.name}
                                </div>
                        </li>
        `
    }
    let box = document.querySelector(".hotSong>ul")
    box.innerHTML = str
})
fetch("http://localhost:3000/personalized/newsong",{
    method:"get",
    mode:"cors",
    credentials:"include"
})
.then(function(data){
    return data.json()
})
.then(function(data){
    // console.log(data.result)
    // data.result[0].name
    // data.result[0].song.alias[0]
    // data.result[0].song.artists[0].name
    // data.result[0].song.album.name
    let str =` `
    for(i=0;i< data.result.length;i++){
        let des=data.result[i].song.alias[0]||" "
        str+=`
        <a href="play.html?id=${data.result[i].id}">
        <li>
            <div class="play-icon"></div>
            <div class="song-title-container">
                <div class="song-title">
                    <p>${data.result[i].name}</p>
                </div>
                <div class="song-des">
                    <p>${des}</p>
                 </div>    
            </div>
            <div class="singer">
                    <span class="sqicon"></span>${data.result[i].song.artists[0].name}-${data.result[i].song.album.name}
                </div>
            
        </li>
    </a>
        
        `
    }
    let box =document.querySelector(".newSong>ul")
    box.innerHTML=str
    
})
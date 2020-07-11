let tabBtn = document.querySelectorAll(".tab>label")
let screen = document.querySelectorAll(".inner>.screen")
for(let i=0;i<tabBtn.length;i++){
    tabBtn[i].onclick = function(){
        changeHeight(screen[i],screen[i].parentNode.parentNode)
    }
}
function changeHeight(obj,target){
    // obj是获取到高度的对象，target是控制对象
    // 获取需要的对象的高度
         target.style.height = obj.offsetHeight +"px"

}

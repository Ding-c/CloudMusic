function showContainer(obj){
    let box = document.querySelector(".search-container")
    let child =box.children
    for(i=0;i<child.length;i++){
        // 先遍历子节点
        child[i].style.display="none"
    }
    obj.style.display = "block"
}
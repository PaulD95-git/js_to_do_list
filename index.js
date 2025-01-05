let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputBx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBx;

        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
        })

        list.appendChild(listItem)
}
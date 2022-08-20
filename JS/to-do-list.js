// Bazı elemanların html'den alınması ve tanımlanması ;

let btnDOM   = document.querySelector("#liveToastBtn") // liveToast id'si ile ekleme butonu    seçildi ve "btnDOM"  değişkenine atandı.
let listDOM  = document.querySelector("#list")      // list      id'si ile ul içindeki list seçildi ve "listDOM" değişkenine atandı.
let taskDOM  = document.querySelector("#task")      // input     id'si ile task             seçildi ve "taskDOM" değişkenine atandı.
let ullength = document.getElementByTagName("li");       // li elementlerini tamamı alınarak "ullength" değişkenşne atandı. Böylece kaç tane "li" elemanı olduğu tespit edildi.

// Listeden eleman silinmesi ; 

for (let index = 0; index < ullength.length; index++) {
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[index].append(closeButton);
    ullength[index].onclick = check;
}

btnDOM.addEventListener('click', elemanEkle)

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

// ELEMAN EKLEMEK İÇİN GEREKENLER ;

function elemanEkle() {
    if (taskDOM.value == "") {  // input olarak bir şey girilmez ise
    $(".error").toast("show");
   }else {
    $(".success").toast("show");
    

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

        liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");


}
}
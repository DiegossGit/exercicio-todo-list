const addButton = document.querySelector(".addButton");
const inputText = document.querySelector(".inputText");
const todoList = document.querySelector(".todoList");

function renderList(TodoItem) {
  if (inputText.value !== "") {
    let liElement = document.createElement("li");
    liElement.classList.add("listItem");

    let textLi = document.createTextNode(TodoItem);
    liElement.appendChild(textLi);

    let excludeButton = document.createElement("a");
    excludeButton.setAttribute("href", "#");
    excludeButton.classList.add("excludeButton");
    let textButton = document.createTextNode("Excluir");
    excludeButton.appendChild(textButton);

    liElement.appendChild(excludeButton);
    todoList.appendChild(liElement);

    excludeButton.addEventListener("click", excludeItem);

    function excludeItem() {
      let liItem = this.parentNode;
      liItem.parentNode.removeChild(liItem);
    }
  } else console.log("opa!!!!!");
}
function getItem() {
  console.log(inputText.value);
  renderList(inputText.value);
  inputText.value = ""; //somente para limpar o campo de texto
}

addButton.addEventListener("click", getItem); // evento para quando clicar no botão
inputText.addEventListener("keyup", function (key) {
  if (key.code === "Enter") {
    console.log(typeof key.code);
    getItem();
  }
}); // mesmo evento para quando precionar enter após digitar o item

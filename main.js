// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const doneList = document.querySelector(".done-list");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create(滑鼠點擊)
addBtn.addEventListener("click", function () {
  const inputValue = input.value;
  // 新增功能1:若使用者沒有輸入內容則不會新增to-do
  if (inputValue.trim().length > 0) {
    addItem(inputValue);
    // 額外功能:輸入框輸入完值新增後,輸入框會reset成空白
    input.value = "";
  }
});

// Create(鍵盤按擊)
input.addEventListener("keydown", function () {
  const inputValue = input.value;
  // 新增功能2:按下 Enter 鍵時，可以新增 to-do
  if (inputValue.trim().length > 0 && event.key === "Enter") {
    addItem(inputValue);
    // 額外功能:輸入框輸入完值新增後,輸入框會reset成空白
    input.value = "";
  }
});

// Delete and check
list.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    // 新增功能3-1:當使用者完成to-do,會移到完成清單
    let doneItem = document.createElement("li");
    doneItem.innerHTML = `
    <label for="done">${target.innerHTML}</label>
    <i class="delete fa fa-trash"></i>
  `;
    doneList.appendChild(doneItem);
    // console.log(doneItem);
    doneItem.children[0].classList.toggle("checked");
    // console.log(doneItem);
    parentElement.remove();
  }
});

// 新增功能3-2:Done清單中的項目也要能夠被刪除
doneList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  }
});

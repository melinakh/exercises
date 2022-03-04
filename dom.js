let fruits = ["apple", "banana", "tomato"];
const ul = document.getElementById("list");
for (let i = 0; i < fruits.length; i++) {
  const value = fruits[i];
  const li = document.createElement("li");
  li.innerText = value;
  ul.append(li);
}
//chalange2
//  <h1>1</h1>
//     <button id="add">add</button>
//     <button id="reset">reset</button>
//     <script>
//       let number1 = document.querySelector("h1");
//       const addBtn = document.getElementById("add");
//       addBtn.addEventListener("click", () => {
//         number1.innerHTML++;
//       });

//       const resetBtn = document.getElementById("reset");
//       resetBtn.addEventListener("click", () => {
//         number1.innerHTML = 0;
//       });
//     </script>

const opTitle = document.querySelector(".group_option .select_op");
const opList = document.querySelector(".group_option .op_list");

//  리스트 열고 닫기
function optionOpen() {
  opList.classList.toggle("on");
}

// 리스트 선택 이벤트
function optionSelect(event) {
  if (event.target.tagName !== "BUTTON") return false;
  opTitle.innerText = event.target.innerText;
  opList.classList.remove("on");
}

// 텍스트 색 바꾸기
function colorChange(event) {
  event.target.style.color = "#fff";
}

function colorOriginal(event) {
  event.target.style.color = "black";
}

opList.addEventListener("click", optionSelect);
opTitle.addEventListener("click", optionOpen);
opList.addEventListener("mouseover", colorChange);
opList.addEventListener("mouseout", colorOriginal);

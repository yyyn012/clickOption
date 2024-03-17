const optionTitle = document.querySelector(".nav .nav-btn");
const optionList = document.querySelector(".nav .ul");

//  리스트 열고 닫기
function optionOpen() {
  optionList.classList.toggle("on");
}

// 리스트 선택 이벤트
function optionSelect(event) {
  if (event.target.tagName !== "BUTTON") return false;
  optionTitle.innerText = event.target.innerText;
  optionList.classList.remove("on");
}

// 텍스트 색 바꾸기
function colorChange(event) {
  event.target.style.color = "#fff";
}

function colorOriginal(event) {
  event.target.style.color = "black";
}

optionList.addEventListener("click", optionSelect);
optionTitle.addEventListener("click", optionOpen);

optionList.addEventListener("mouseover", colorChange);
optionList.addEventListener("mouseout", colorOriginal);

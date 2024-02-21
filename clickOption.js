const opTitle = document.querySelector(".group_option .select_op");
const opList = document.querySelector(".group_option .op_list");

//  리스트 열고 닫기
opTitle.addEventListener("click", function () {
  opList.classList.toggle("on");
});

// 리스트 선택 이벤트
opList.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return false;
  opTitle.innerText = event.target.innerText;
  opList.classList.remove("on");
});

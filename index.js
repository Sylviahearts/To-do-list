function addBtn() {
  let inpValue1 = document.getElementById("inp").value;
  if (inpValue1 == "") {
    alert("field cannot be empty");
    return;
  }

  let list = $("#unlist");
  var id = Math.random();
  list.prepend(`
      <li id="${id}" > 
        <input onclick="delCheck()" id ="check" class ="me-2" type="checkbox">
        <span class ="me-2 inval ">${inpValue1}</span>
        <img src="delete.png" class="img-fl imm" onclick="delBtn(${id})" alt="">
      
      </li>
    `);
  $("#inp").val("");

  //  localStorage.setItem("Value1", document.getElementById("inp").value);
  //  $("#unlist") = localStorage.getItem("Value1");
}

function delBtn(id) {
  document.getElementById(id).style.display = "none";
}

function delCheck() {
  alert("Congratulations!!! Task Complete");
}

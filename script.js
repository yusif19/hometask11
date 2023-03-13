
var btn = document.querySelector("button")
btn.addEventListener("click", function row() {
    var MyTable = document.querySelector("table");
    var input1 = document.querySelector("#exampleFormControlInput1");
    var input2 = document.querySelector("#exampleFormControlInput2");
    var input3 = document.querySelector("#exampleFormControlInput3");
    var input4 = document.querySelector("#exampleFormControlInput4");
    var radio = document.getElementsByName('flexRadioDefault');

    // insert new row.
    var count = 0;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            count++;
            radio[i].checked = true;
            break;
        }
    }

    if (input1.value.trim() != "" && input2.value.trim() != "" && input3.value.trim() != "" && input4.value.trim() != "" && count == 1) {
        var NewRow = MyTable.insertRow(1);
        var Newcell1 = NewRow.insertCell(0);
        var Newcell2 = NewRow.insertCell(1);
        var Newcell3 = NewRow.insertCell(2);
        var Newcell4 = NewRow.insertCell(3);
        var Newcell5 = NewRow.insertCell(4);

        Newcell1.innerHTML = input1.value;
        Newcell2.innerHTML = input2.value;
        Newcell3.innerHTML = input3.value;
        Newcell4.innerHTML = input4.value;

        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                Newcell5.innerHTML = radio[i].value;

                break;
            }
        }


    }

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    radio[i].checked = false;









}

)
//onClick color change
    function setColor(btn) {
       document.getElementById(btn).style.backgroundColor = "#33B5E5"
       document.getElementById(btn).style.color = "white"       
    }

//allow only 1 answer per question
function selectOnlyThis(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}
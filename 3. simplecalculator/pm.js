
    var anwser = 1;
    var anwserEl = document.getElementById("anwser");
    var x= document.getElementById("one");
    var y= document.getElementById("two");
    function plus(){
        anwser= +x.value + +y.value;
        anwserEl.value = anwser;
    }
    function minus(){
        anwser= +x.value - +y.value;
        anwserEl.value = anwser;
    }
    function multiply(){
        anwser= +x.value * +y.value;
        anwserEl.value = anwser;
    }
    function divide(){
        anwser= +x.value / +y.value;
        anwserEl.value = anwser;
    }

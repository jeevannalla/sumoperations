    function sumCalculator() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        let resDiv = document.getElementById("result");
        if(isNaN(n1) || isNaN(n2)){
            resDiv.innerText = "Result" + " :" + "invalid inputs";
        }
        else {
            let sum = n1+n2;
            resDiv.innerText = "Result" + " :" + sum;
        }
    }
let output = document.getElementById("output-screen")



function isOperator(num){
    if(num== '+' || num == '-' || num == '*' || num == '/' || num == '%')
        return true
    else
        return false
}

function display(num){
    if(output.innerText === "0"){
        if(num != '0' && num != "00"){
            if(num == '.' || isOperator(num)){
                output.value = "0" + num
            }
            else{
                output.value = num
            }
        }

    }
    else{
        if(isOperator(output.value[output.value.length - 1]) && isOperator(num)){
            output.value = output.value.slice(0,-1) + num;
        }
        else{
            output.value += num
        }
    }
}

function delAll(){
    output.value = "0"
}

function del(){
    output.value = output.value.slice(0, -1)
}

function calculate(){
    try{
    output.value = eval(output.value)
    }
    catch{
        alert("Invalid Inputs")
    }
}


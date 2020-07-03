var soalkeplus = 0;
var soalkekali = 0;
var prevfirstNumber = 0;
var prevsecondNumber = 0;
var tipeoperasi = "";
document.getElementById("plus").onclick = function(){
  tipeoperasi = "plus";
  Chooseoperation();
  document.getElementById("plus").style.opacity = 0.2;
  document.getElementById("minus").style.opacity = 1;
  document.getElementById("multipli").style.opacity = 1;
  document.getElementById("division").style.opacity = 1;

  // document.getElementById("plus").disabled = true;
  // document.getElementById("minus").disabled = false;
  // document.getElementById("multipli").disabled = false;
  // document.getElementById("division").disabled = false;
}
document.getElementById("minus").onclick = function(){
  tipeoperasi = "minus";
  Chooseoperation();
  document.getElementById("plus").style.opacity = 1;
  document.getElementById("minus").style.opacity = 0.2;
  document.getElementById("multipli").style.opacity = 1;
  document.getElementById("division").style.opacity = 1;
}
document.getElementById("multipli").onclick = function(){
  tipeoperasi = "kali";
  Chooseoperation();
  document.getElementById("plus").style.opacity = 1;
  document.getElementById("minus").style.opacity = 1;
  document.getElementById("multipli").style.opacity = 0.2;
  document.getElementById("division").style.opacity = 1;
}
document.getElementById("division").onclick = function(){
  tipeoperasi = "bagi";
  Chooseoperation();
  document.getElementById("plus").style.opacity = 1;
  document.getElementById("minus").style.opacity = 1;
  document.getElementById("multipli").style.opacity = 1;
  document.getElementById("division").style.opacity = 0.2;

}
function requirefilled(){
    if(document.getElementById("Jawaban").value == ""){
        alert("Jawaban belum dijawab!");
    }
    else{
        Chooseoperation();
        document.getElementById("Jawaban").value = "";
    }
}

function Chooseoperation(){
    if(document.getElementById("ListSoal").hidden == true){
        document.getElementById("ListSoal").hidden = false;
    }

        // if(document.getElementById("operasi").value == "kali" || document.getElementById("operasi").value == "bagi"){
        //     randomSoalkalibagi();
        // }
        if(tipeoperasi == "kali" || tipeoperasi == "bagi"){
            randomSoalkalibagi();
        }
        // else if(document.getElementById("operasi").value == "plus" || document.getElementById("operasi").value == "minus"){
        //     randomSoalplusminus();
        // }
        else if(tipeoperasi == "plus" || tipeoperasi == "minus"){
            randomSoalplusminus();
        }

}
function randomSoalkalibagi(){
    //var tipeoperasi = document.getElementById("operasi").value;
    let max = 10;
    let min = 1;

    if( tipeoperasi == "kali"){
        var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        document.getElementById("Soal").innerHTML = firstNumber + "x" + secondNumber;
    }
    else if(tipeoperasi == "bagi"){
        while(true){
          var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
          var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
          if(firstNumber >= secondNumber && firstNumber % secondNumber == 0){
              break;
          }
        }
        document.getElementById("Soal").innerHTML = firstNumber + "/" + secondNumber;
    }
    if(soalkekali != 0){
        benarsalah(firstNumber,secondNumber,tipeoperasi);
    }
    if(soalkekali != 0){
        benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi);
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
    }
    else if(soalkekali == 0){
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
        console.log(prevfirstNumber,prevsecondNumber);
    }
    soalkekali++;
}

function randomSoalplusminus(){
    //var tipeoperasi = document.getElementById("operasi").value;
    let max = 100;
    let min = 0;
    let firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    let secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(tipeoperasi == "plus"){
        document.getElementById("Soal").innerHTML = firstNumber + "+" + secondNumber;
    }
    else if(tipeoperasi == "minus"){
        document.getElementById("Soal").innerHTML = firstNumber + "-" + secondNumber;
    }
    if(soalkeplus != 0){
        benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi);
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
    }
    else if(soalkeplus == 0){
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
        console.log(prevfirstNumber,prevsecondNumber);
    }
    soalkeplus++;
}

function benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi){
    var Answer = document.getElementById("Jawaban").value;
    if(tipeoperasi == "plus"){
        console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber+prevsecondNumber)
        if(prevfirstNumber + prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";
        }
        else{
            document.getElementById("status").innerHTML = "Salah";
        }
    }
    else if(tipeoperasi == "minus"){
        console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber-prevsecondNumber)
        if(prevfirstNumber - prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";

        }
        else{
            document.getElementById("status").innerHTML = "Salah";
        }
    }
    else if(tipeoperasi == "kali"){
        console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber*prevsecondNumber)
        if(prevfirstNumber * prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";

        }
        else{
            document.getElementById("status").innerHTML = "Salah";
        }
    }
    else{
        console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber/prevsecondNumber)
        if(prevfirstNumber / prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";

        }
        else{
            document.getElementById("status").innerHTML = "Salah";
        }
    }
    console.log(Answer);
}

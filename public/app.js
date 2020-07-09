var soalkeplus = 0;
var soalkekali = 0;
var prevfirstNumber = 0;
var prevsecondNumber = 0;
var tipeoperasi = "";
var totalsoal = 0;
var benar = 0;
var salah = 0;
var banyaksalah = 1;
var gantioperasi = false;
document.getElementById("plus").onclick = function(){
  tipeoperasi = "plus";
  gantioperasi = true;
  Chooseoperation();
  document.getElementById("plus").style.opacity = 0.2;
  document.getElementById("minus").style.opacity = 1;
  document.getElementById("multipli").style.opacity = 1;
  document.getElementById("division").style.opacity = 1;

  document.getElementById("plus").disabled = true;
  document.getElementById("minus").disabled = false;
  document.getElementById("multipli").disabled = false;
  document.getElementById("division").disabled = false;
}
document.getElementById("minus").onclick = function(){
  tipeoperasi = "minus";
  gantioperasi = true;
  Chooseoperation();
  document.getElementById("plus").style.opacity = 1;
  document.getElementById("minus").style.opacity = 0.2;
  document.getElementById("multipli").style.opacity = 1;
  document.getElementById("division").style.opacity = 1;
}
document.getElementById("multipli").onclick = function(){
  tipeoperasi = "kali";
  gantioperasi = true;
  Chooseoperation();
  document.getElementById("plus").style.opacity = 1;
  document.getElementById("minus").style.opacity = 1;
  document.getElementById("multipli").style.opacity = 0.2;
  document.getElementById("division").style.opacity = 1;
}
document.getElementById("division").onclick = function(){
  tipeoperasi = "bagi";
  gantioperasi = true;
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
    if( tipeoperasi == "kali"){
        let max = 10;
        let min = 1;

        var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        document.getElementById("Soal").innerHTML = firstNumber + "x" + secondNumber;
    }
    else if(tipeoperasi == "bagi"){
        while(true){
          let max = 100;
          let min = 1;
          var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
          var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
          if(firstNumber >= secondNumber && firstNumber % secondNumber == 0){
              break;
          }
        }
        document.getElementById("Soal").innerHTML = firstNumber + "/" + secondNumber;
    }
    // if(soalkekali != 0){
    //     benarsalah(firstNumber,secondNumber,tipeoperasi);
    // }
    if(gantioperasi){
      soalkekali = 0;
      gantioperasi = false;
    }
    if(soalkekali != 0){
        benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi);
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
    }
    else if(soalkekali == 0){
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
        // console.log(prevfirstNumber,prevsecondNumber);
    }
    soalkekali++;
}

function randomSoalplusminus(){
    //var tipeoperasi = document.getElementById("operasi").value;
    if(tipeoperasi == "plus"){
      let max = 100;
      let min = 0;
      var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      document.getElementById("Soal").innerHTML = firstNumber + "+" + secondNumber;
    }
    else if(tipeoperasi == "minus"){
      while(true){
        let max = 100;
        let min = 0;
        var firstNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        var secondNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(firstNumber >= secondNumber){
            break;
        }
      }
      document.getElementById("Soal").innerHTML = firstNumber + "-" + secondNumber;
    }
    if(gantioperasi){
      soalkeplus = 0;
      gantioperasi = false;
    }
    if(soalkeplus != 0){
        benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi);
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
    }
    else if(soalkeplus == 0){
        prevfirstNumber = firstNumber;
        prevsecondNumber = secondNumber;
        // console.log(prevfirstNumber,prevsecondNumber);
    }
    // if(!gantioperasi){
    //   console.log("RENE")
    //   console.log(gantioperasi)
    //   soalkeplus++;
    // }
    soalkeplus++;
}

function benarsalah(prevfirstNumber,prevsecondNumber,tipeoperasi){
    var Answer = document.getElementById("Jawaban").value;
    if(tipeoperasi == "plus"){
        // console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber+prevsecondNumber)
        if(prevfirstNumber + prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";
            document.getElementById("status").style.color = "green";
            document.getElementById("benar").innerHTML = "Benar: "+ ++benar;
        }
        else{
            document.getElementById("status").innerHTML = "Salah";
            document.getElementById("status").style.color = "red";
            document.getElementById("salah").innerHTML = "Salah: "+ ++salah;
            var para = document.createElement("p");
            var wrong = banyaksalah++ + ".)" + "Soal: " + prevfirstNumber + "+" + prevsecondNumber + '\xa0\xa0' +"Jawab: " + Answer + '\xa0\xa0' + "Koreksi: " + parseInt(prevfirstNumber + prevsecondNumber);

            var node = document.createTextNode(wrong);
            para.appendChild(node);
            var element = document.getElementById("Evalsalah");
            element.appendChild(para);
        }
    }
    else if(tipeoperasi == "minus"){
        // console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber-prevsecondNumber)
        if(prevfirstNumber - prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";
            document.getElementById("status").style.color = "green";
            document.getElementById("benar").innerHTML = "Benar: "+ ++benar;
        }
        else{
            document.getElementById("status").innerHTML = "Salah";
            document.getElementById("status").style.color = "red";
            document.getElementById("salah").innerHTML = "Salah: "+ ++salah;
            var para = document.createElement("p");
            var wrong = banyaksalah++ + ".)" + "Soal: " + prevfirstNumber + "-" + prevsecondNumber + '\xa0\xa0' +"Jawab: " + Answer + '\xa0\xa0' + "Koreksi: " + parseInt(prevfirstNumber - prevsecondNumber);
            var node = document.createTextNode(wrong);
            para.appendChild(node);
            var element = document.getElementById("Evalsalah");
            element.appendChild(para);
        }
    }
    else if(tipeoperasi == "kali"){
        // console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber*prevsecondNumber)
        if(prevfirstNumber * prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";
            document.getElementById("status").style.color = "green";
            document.getElementById("benar").innerHTML = "Benar: "+ ++benar;

        }
        else{
            document.getElementById("status").innerHTML = "Salah";
            document.getElementById("status").style.color = "red";
            document.getElementById("salah").innerHTML = "Salah: "+ ++salah;
            var para = document.createElement("p");
            var wrong = banyaksalah++ + ".)" + "Soal: " + prevfirstNumber + "x" + prevsecondNumber + '\xa0\xa0' +"Jawab: " + Answer + '\xa0\xa0' + "Koreksi: " + parseInt(prevfirstNumber * prevsecondNumber);
            var node = document.createTextNode(wrong);
            para.appendChild(node);
            var element = document.getElementById("Evalsalah");
            element.appendChild(para);
        }
    }
    else{
        // console.log(prevfirstNumber,prevsecondNumber,prevfirstNumber/prevsecondNumber)
        if(prevfirstNumber / prevsecondNumber == Answer){
            document.getElementById("status").innerHTML = "Benar";
            document.getElementById("status").style.color = "green";
            document.getElementById("benar").innerHTML = "Benar: "+ ++benar;

        }
        else{
            document.getElementById("status").innerHTML = "Salah";
            document.getElementById("status").style.color = "red";
            document.getElementById("salah").innerHTML = "Salah: "+ ++salah
            var para = document.createElement("p");
            var wrong = banyaksalah++ + ".)" + "Soal: " + prevfirstNumber + "/" + prevsecondNumber + '\xa0\xa0' +"Jawab: " + Answer + '\xa0\xa0' + "Koreksi: " + parseInt(prevfirstNumber / prevsecondNumber);
            var node = document.createTextNode(wrong);
            para.appendChild(node);
            var element = document.getElementById("Evalsalah");
            element.appendChild(para);
        }
    }
    document.getElementById("totalsoal").innerHTML = "Total soal: "+ ++totalsoal;
    // console.log(Answer);
}

document.getElementById("Reset").onclick = function(){
  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Eval");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

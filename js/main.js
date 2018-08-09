document.getElementById('command').addEventListener('keyup', function(e) {
  if(e.keyCode === 13) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("output").innerHTML += this.responseText;
      }
    };
    xhttp.open("POST", "/server.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var command = document.getElementById('command').value;
    xhttp.send('command='+command);
  }
});

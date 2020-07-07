document.write(`<head><title>Text editor</title>
<style>
/* scrollbar */
::-webkit-scrollbar {
  width: 7px;
}


::-webkit-scrollbar-track {
 background-color: #c0c0c0; 

}
 

::-webkit-scrollbar-thumb {
 
  border-radius: 5px;
}


::-webkit-scrollbar-thumb:hover {
  background: grey; 
}
body{
background-color:#c0c0c0;  
}
textarea {
  outline: 0px solid transparent;
  resize: none;
  border-style: ridge;
  border-width: 3px;
  border-color: #cccccc;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  padding: 5px 10px;
  text-align: center;
  font-size:14px;
  transition-duration: 0.3s;
  cursor: pointer;
    background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
  border-radius: 5px;
}


button:hover {
  background-color: #4CAF50;
  color: white;
}
button:disabled{
border: 2px solid lightgrey;
background-color:lightgrey;
color:white;
pointer-events:none
}</style>
</head>
<body style="font-family:Arial;"> 
<p style="text-align:center">
Open document: <input type="file" id="myFile" accept="text/plain, text/svg, text/html, text/javascript">
</p>
<hr>
<p style="text-align:center">
<textarea style="width:75%;height:500px;font-family:Arial;padding:10px" id="output"></textarea>
</p>
<p style="text-align:center">
  <input type="text" id="filename" placeholder="Enter file name">
  <select id="format">
        <optgroup label = "Choose format">
    <option>.js</option>
            <option selected>.txt</option>
            <option>.html</option>
            <option>.svg</option> 
    </optgroup>
  </select>
  
  <button id="dnl_href" onclick="">Download document <img src="https://image.flaticon.com/icons/svg/860/860801.svg" style="width:14px;height:14px;"></button> <button id="run">Preview <img src="https://image.flaticon.com/icons/svg/860/860819.svg" style="width:14px;height:14px;"></button> 
</p>
</body>`)
document.getElementById("uns").remove();
var input = document.getElementById("myFile");
var output = document.getElementById("output");


input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    output.textContent = "Uploading file...";
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });
    
    reader.readAsBinaryString(myFile);
  }   
});
document.getElementById("dnl_href").onclick = function(){

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(document.getElementById('output').value);

hiddenElement.download = document.getElementById('filename') + document.getElementById('format').value;
hiddenElement.click();
}
document.getElementById("run").onclick = function() { if (document.getElementById('format').value == ".html" || document.getElementById('format').value == ".svg" || document.getElementById('format').value == ".js" ){
  if (document.getElementById('format').value == ".html" || document.getElementById('format').value == ".svg"){
  var txt = document.getElementById('output').value;
   var wo = window.open();
  wo.document.open();
  wo.document.write(txt);
  wo.document.close();
  }
    if (document.getElementById('format').value == ".js"){
  var txt = document.getElementById('output').value;
   var wo = window.open();
  wo.document.open();
  wo.document.write("<body onload='");
  wo.document.write(txt);
  wo.document.write("'>");
  wo.document.close();
  }
}
 else{
   alert("Please select a another format.")
 }
}

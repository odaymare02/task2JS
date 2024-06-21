var data=`<h2> this is my favorite 3 programming languages</h2>`;
data+="<ul>";
var list=[`C++`,`Java Sceipt`,`Python`];
for(var i=0;i<3;i++)
    {
        data+=`<li>${list[i]}</li>`;
    }
document.querySelector("div").innerHTML=data;
document.querySelector("div").classList.add("center");
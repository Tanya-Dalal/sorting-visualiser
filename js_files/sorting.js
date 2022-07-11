var element = document.getElementById("data-container");
var arr_size=document.querySelector("#myRange");
var sort_speed=document.querySelector("#mySpeed");
var speed=sort_speed.value;
var a = new Array();
var n_bars=arr_size.value;

function generatebars(num=n_bars) {
    for (let i = 0; i < num; i++) {
        a[i] = Math.floor(Math.random() * 100) + 1; 

        const bar = document.createElement("div");
        bar.innerText = a[i];
        bar.classList.add("bar");
        bar.style.height = `${a[i] * 3}px`;
        bar.style.transform = `translateX(${i * 5}px)`;
        element.appendChild(bar);

    }
}
function remove_bars()
{
  var bars = document.querySelectorAll(".bar");
  bars.forEach(bar=>{
    bar.remove();
  });
}
arr_size.oninput=function()
{
  remove_bars();
  n_bars=this.value;
  a=new Array(n_bars);
  generatebars();
}
sort_speed.oninput=function()
{
  speed=this.value;
}
generatebars();

var element = document.getElementById("data-container");
function swap(el1,el2)
{
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
    el2.style.height = transform1;
   
}

function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style. cursor = "not-allowed";
  // To disable the sorting buttons
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button4").disabled = true;
  document.getElementById("Button5").disabled = true;
  document.getElementById("Button6").disabled = true;

  document.getElementById("Button2").style. cursor = "not-allowed";
  document.getElementById("Button3").style. cursor = "not-allowed";
  document.getElementById("Button4").style. cursor = "not-allowed";
  document.getElementById("Button5").style. cursor = "not-allowed";
  document.getElementById("Button6").style. cursor = "not-allowed";

}
function enable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style. cursor = "pointer";
  
  // To disable the sorting buttons
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button5").disabled = false;
  document.getElementById("Button6").disabled = false;

  document.getElementById("Button2").style. cursor = "pointer";
  document.getElementById("Button3").style. cursor = "pointer";
  document.getElementById("Button4").style. cursor = "pointer";
  document.getElementById("Button5").style. cursor = "pointer";
  document.getElementById("Button6").style. cursor = "pointer";

}
function generate()
{
  window.location.reload();
 }
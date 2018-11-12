inames=[]
iprices=[]
itaxes=[]
iquantities=[]
iamount=[];

function addItem(a,b,c,d){
inames.push(a);
iprices.push(b);
itaxes.push(c);
iquantities.push(d);

aPrice=parseFloat(b*d);
aTax=aPrice*(parseFloat(c/100));
aTotal=parseFloat(aPrice + aTax);
iamount.push(aTotal);
ShowShoppingBasket();
}
function ShowShoppingBasket(){
	data='<table><tr><th>Instrument Name</th><th>Quantity</th><th>Price</th><th>Total</th>';

	total = 0;
	for(i=0;i<inames.length;i++){
	total+= iamount[i];
		//total += iquantities[i] * iprices[i];
		data += "<tr><td>" + inames[i] + "</td><td><span id='rq"+i+"'>" + iquantities[i] + "</span><button onclick='Add("+i+");'>+</button><button onclick='Sub("+i+");'>-</button></td><td>" + iprices[i] +"</td><td><span id='aq"+i+"'>" + iamount[i] + "</span></td><td><button onclick='delElement(" + i +")'>Remove</button></td></tr>"
		   }

		   data += '<tr><td></td><td></td><td></td><td><span id="gtot">' + total + '</span></td></tr></table>'
		   document.getElementById('myDiv').innerHTML = data; 
}
function delElement(a){
	inames.splice(a, 1);
	iprices.splice(a, 1)
	itaxes.splice(a, 1)
	iquantities.splice(a, 1)
	ShowShoppingBasket()
}

function Enable(){
	a=document.getElementById('password').value;
	if(a=="rajat"){
		var b=document.querySelectorAll('.show');
		for (var i=0; i<b.length; i++){
			b[i].disabled=false;
		}
	}
}

function Add(ind){
var r='rq'+ind;
var val=document.getElementById(r).innerHTML;
parseInt(val++);
if(val>5){
	val=5;
}
document.getElementById(r).innerHTML=val;
var b=iprices[ind];
var c=itaxes[ind];
d=val*b;
e=d * (parseFloat(c/100));
f=d + e;
var q='aq'+ind;
document.getElementById(q).innerHTML=f;
GrandTotal();
}

function Sub(ind){
var r='rq'+ind;
var val=document.getElementById(r).innerHTML;
parseInt(val--);
if(val<1){
	val=1;
}
document.getElementById(r).innerHTML=val;
var b=iprices[ind];
var c=itaxes[ind];
d=val*b;
e=d * (parseFloat(c/100));
f=d + e;
var q='aq'+ind;
document.getElementById(q).innerHTML=f;
GrandTotal();
}

function GrandTotal(){
	var g=0;
	for (i=0; i<inames.length; i++){
		var h='aq'+i;
		var k=document.getElementById(h).innerHTML;
		g=parseFloat(g)+parseFloat(k);
	}
	
	document.getElementById('gtot').innerHTML=g;
}

function InstrumentPurchased(){
	var amt = document.getElementById('gtot').innerHTML;
	if (confirm("Total Price: $" + amt)){
		document.getElementById('myDiv').innerHTML="No products added";
		document.getElementById('gtot').innerHTML = 0.00;

	}
}

function change(){
	var x=document.getElementById('english').value;
	var y=document.getElementById('french');
	var a=document.querySelectorAll('.eng');
	var b=document.querySelectorAll('.fre');
	if(y.checked==true){
		for (var i=0; i<a.length;i++){
			a[i].style.display="none";
			b[i].style.display="block";
		}
	}
}

var table = ''
table += '<tr>' + '<td> Item </td>' +  '<td> Image </td>' + '<td> Quantity </td>' + '<td> Price(Without Tax) </td>'  + '<td> Quantity </td>'  + '<td> Action </td>' + '</tr>'

fetch('/instruments')
        .then((resp) => resp.json())
        .then(function (data) {
            // document.getElementById('products_table').innerHTML ="Harmony";
            
 for (var i = 0; i < data.length; i++) {
    //  array[i+1].push([data[i].title, data[i].image, data[i].price, data[i].qty, data[i].alternateName])

     table += '<tr>';
     table += '<td>' + data[i].title + '</td>';
     table += '<td>'+ '<img src="music/' + data[i].image + '" height="70" width="120">' + '</td>';
     table += '<td>' + data[i].quantity + '</td>';
     table += '<td>' + data[i].price + '</td>';
     table += '<td>' + '<input type="text" value="1">' + '</td>';
     table += '<td>' + '<button type="button">Add</button>' + '</td>';
     table += '</tr>';
    
            }
            // document.write('<table border=1 id="detailsTable" align="left">' + table + '</table>');

            document.getElementById('products_table').innerHTML = ('<table border=1 id="detailsTable" align="left">' + table + '</table>');
})


function Add() {
    na = document.getElementById('n').value;
    pr = document.getElementById('p').value;
    fetch('/new', {
        method: 'POST',
        body: JSON.stringify({ name: na, price: pr, tax:13, qty:5}),
        headers: {"Content-Type": "application/json; charset=utf-8"}
    }).then((resp) => resp.json())
        .then(function (data) {
        })
        .catch((err) => console.log(err))
}
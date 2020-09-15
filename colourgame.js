var numsquare = 6;
var colors= generaterandomcolor(numsquare);

var square=document.querySelectorAll(".square");
var pickedcolor =pickcolor();
var colordisplay=document.querySelector("#colordisplay");
colordisplay.innerHTML=pickedcolor;

var message = document.querySelector("#message");
var h1=document.querySelector("#h");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function()
{
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numsquare=3;
	colors=generaterandomcolor(numsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.backgroundColor = colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
});

hard.addEventListener("click",function()
{
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numsquare=6;
	colors=generaterandomcolor(numsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
});

reset.addEventListener("click",function()
{
	colors=generaterandomcolor(numsquare);
	
	pickedcolor =pickcolor();
	
	colordisplay.textContent=pickedcolor;
	
	this.textContent="New Colour";
	
	for(var i=0;i<square.length ;i++)
	{
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	
	message.textContent= " ";
});

for(var i=0 ; i<square.length; i++)
{
	//add initial color to square
	square[i].style.backgroundColor=colors[i];
	
	//add click listner to square
	square[i].addEventListener("click" ,function()
	{
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor)
		{
			message.textContent= "Correct !";
			changecolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			reset.innerHTML="Play Again ?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent= "Try Again !!";
		}
	});
}

function changecolor(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color;
	}
};

function pickcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generaterandomcolor(num)
{
	//make an array
	var arr=[];
	
	//add num random color to array
	for(var i=0; i<num; i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor()
{
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	
	return "rgb(" + r +", "+ g +", "+ b +")";	
}


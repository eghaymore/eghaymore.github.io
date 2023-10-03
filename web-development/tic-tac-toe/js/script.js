var xo = ["X","O"];
var players = [];
var winCode = [7,56,73,84,146,273,292,448];
var turnSelect = 0;
var totals = []
var gameOver = false;
var winCount =[0,0,0];
function change(clickedDiv, divValue)
{
	if (!gameOver)
	{
		//mark
		clickedDiv.innerText=xo[turnSelect];
		//add div value
		totals[turnSelect]+= divValue;
		//checkWin
		if (checkWin())
		{
			document.getElementById("turndisplay").innerText= players[turnSelect] + " Wins";
			winCount[turnSelect]+=1;
			document.getElementById("scoreboard").innerText= players[0] +": "+winCount[0]+ " ---- "+ players[1]+": "+winCount[1]+ " ---- " + "Tie: " + winCount[2];
		}
		else if (gameOver) 
		{
			document.getElementById("turndisplay").innerText= "Try Again"; 
			document.getElementById("scoreboard").innerText= players[0] +": "+winCount[0]+ " ---- "+ players[1]+": "+winCount[1]+ " ---- " + "Tie: " + winCount[2]; 
		}
		else
		{
		if(turnSelect==0)turnSelect=1; else turnSelect=0;
		clickedDiv.onclick="";
		document.getElementById("turndisplay").innerText="It's " + players[turnSelect] + "'s turn";
		}
	}
}
function checkWin()
{
	for (i = 0; i < 8; i++)
	{
		if ((totals[turnSelect] & winCode[i]) == winCode[i]){gameOver = true;document.getElementById("btn").className="show"; return true;}
	}
	
	if ((totals[0] + totals[1]) == 511) {gameOver = true; document.getElementById("btn").className="show"; winCount[2]+=1 }
	return false;
}
function newGame()
{
	players[0] = document.getElementById('player1').value;
	players[1] = document.getElementById('player2').value;
	document.getElementById('player1').className="hide";
	document.getElementById('player2').className="hide";
	document.getElementById('send').className="hide";
	document.getElementById('clear').className="hide";
	resetGame();
}

function resetGame()
{
	document.getElementById("btn").className="hide";
	gameOver = false;
	document.getElementById("turndisplay").innerText="It's " + players[0] + "'s turn";
	var count =1;
	totals = [0,0];
	var divs="";
	for (i = 0; i < 9; i++)
	{
		divs += "<div class='sq' onclick='change(this,"+count+")'></div>";
		count *=2;
	}
	document.getElementById("board").innerHTML = divs;
}

/*function resetGame()
{
	for (i=0;i<9;i++)
	{
		var load=[1,2,4,8,16,32,64,128,256];
		document.getElementById("turndisplay").innerText="It's " + players[0] + "'s turn";
		document.getElementsByClassName('sq')[i].innerText='';
		document.getElementsByClassName('sq')[i].onlick='"change(this'+load[i]+')"';
		console.log(document.getElementsByClassName('sq')[i].onlick);
	}
}
*/



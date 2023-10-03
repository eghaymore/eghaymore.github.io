function mainf()
{
	var x = prompt('Enter the number of digits to generate a random lottery ticket');
	if(x >= 1 && x <= 1000)
	{
		var lotto = [];
		var minori = 0;
		var pick = "";
		for (var i = 0; i < x; i++)
		{
			lotto[i] = Math.floor(Math.random() * 100);
		}
		for (var i=0; i < lotto.length; i++)
		{
			if (i == 0)
			{
				pick = pick + lotto[i];
			}
			else
			{
				pick = pick + "-" + lotto[i]; 
			}
		}
		console.log('f ' + pick);
		document.getElementById('output').innerText = pick;
		document.getElementById('xx').innerText = x;
		document.getElementById('b2').className = "show";
		if (x < 100)
		{
			document.getElementById('output').className = "one";
		}
		else if (x < 300)
		{
			document.getElementById('output').className = "two";
		}
		else
		{
			document.getElementById('output').className = "three";
		}
		
	}
	else
	{
		document.getElementById('output').innerText = 'Please enter a number between 1 & 1000';
	}
}

function mainfr()
{
	var x = document.getElementById('xx').innerText;
	if(x >= 1 && x <= 1000)
	{
		var lotto = [];
		var minori = 0;
		var pick = "";
		for (var i = 0; i < x; i++)
		{
			lotto[i] = Math.floor(Math.random() * 100);
		}
		for (var i=0; i < lotto.length; i++)
		{
			if (i == 0)
			{
				pick = pick + lotto[i];
			}
			else
			{
				pick = pick + "-" + lotto[i]; 
			}
		}
		console.log('f ' + pick);
		document.getElementById('output').innerText = pick;
		document.getElementById('xx').innerText = x;
		document.getElementById('b2').className = "show";
		if (x < 100)
		{
			document.getElementById('output').className = "one";
		}
		else if (x < 300)
		{
			document.getElementById('output').className = "two";
		}
		else
		{
			document.getElementById('output').className = "three";
		}
		
	}
	else
	{
		document.getElementById('output').innerText = 'Please enter a number between 1 & 1000';
	}
}
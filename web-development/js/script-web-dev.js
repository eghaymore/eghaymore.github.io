// alert('script is working');
function showMyDetails(mousedLink)
{
	var msg1="";
	var msg2="";
	//which is mousedLink
	//switch statement with descriptions
	//var with string value from switch
	//set mymsg to string value from var
	switch (mousedLink.innerText)
	{
		case 'Tables':
			msg1="Tables";
			msg2="Introductory html project";
			break;
		case 'Image Map':
			msg1="Image Map";
			msg2="Different shaped image maps";
			break;
		case 'Superheroes':
			msg1="Superheroes";
			msg2="Introductory CSS project";
			break;
		case 'Horizontal Menu':
			msg1="Horizontal Menu";
			msg2="CSS Navbar";
			break;
		case 'Little Boxes':
			msg1="Little Boxes";
			msg2="CSS positioning--Mortal Kombat style!";
			break;
		case 'Pizza 2':
			msg1="Pizza 2";
			msg2="Midterm";
			break;
		case 'Happy Birthday Program':
			msg1="Happy Birthday Program";
			msg2="Introductory Javascript program";
			break;
		case 'Mad-libs Game':
			msg1="Mad-libs Game";
			msg2="Another Javascript program";
			break;
		case 'Lottery':
			msg1="Lottery";
			msg2="Javascript & programming fundamentals";
			break;
		case 'Tic-Tac-Toe':
			msg1="Tic-Tac-Toe";
			msg2="Javascript program and CSS grid";
			break;
	}
	
	// if (mousedLink.innerText =="Tables"){msg="tables"}
	document.getElementById('mymsg1').innerText=msg1+": ";
	document.getElementById('mymsg2').innerText=msg2;
}
function hideMyDetails(mousedLink)
{
	document.getElementById('mymsg1').innerText="My Projects";
	document.getElementById('mymsg2').innerText="Hover over each link for info";
}




















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
		case 'Financial Database':
			msg1="Financial Database";
			msg2="Mysql";
			break;
		case 'Linear Regression':
			msg1="Linear Regression";
			msg2="Jupyter Notebook";
			break;
		case 'Softmax Regression':
			msg1="Softmax Regression";
			msg2="Jupyter Notebook";
			break;
		case 'Cockroachdb':
			msg1="Cockroachdb cluster";
			msg2="Bash, Python, SQL";
			break;
		case 'Data Structures':
			msg1="Data Structures";
			msg2="Stack, tree, linkedlist implementations";
			break;
		case 'Web Development':
			msg1="Web Development";
			msg2="Front-end web development projects";
			break;
		case 'Logistic Regression':
			msg1="Logistic Regression";
			msg2="Jupyter Notebook";
			break;
		case 'Backpropagation':
			msg1="Backpropagation Demo";
			msg2="Jupyter Notebook";
			break;
		case 'LU Factorization':
			msg1="LU Factorization";
			msg2="Python";
			break;
		case 'Cassandra':
			msg1="Cassandra Cluster";
			msg2="Bash, Python, Cqlsh";
			break;
		case 'Adaptive Quadrature':
			msg1="Adaptive Quadrature";
			msg2="Python";
			break;
		case 'Sorts':
			msg1="Mergesort, Quicksort";
			msg2="Java";
			break;
	}
	
	document.getElementById('mymsg1').innerText=msg1+": ";
	document.getElementById('mymsg2').innerText=msg2;
}
function hideMyDetails(mousedLink)
{
	document.getElementById('mymsg1').innerText="My Projects";
	document.getElementById('mymsg2').innerText="Hover over each link for info";
}

function getRandomInt(max) 
{
  return Math.floor(Math.random() * Math.floor(max));
}  
   
function showQuote()
{
	var selectedQuote=[];
	selectedQuote[0]='I choose to live by choice, not by chance.';
	selectedQuote[1]='If there isn’t discipline, how can there be a true realization of an ideal?';
	selectedQuote[2]='One thousand days of lessons for discipline; ten thousand days of lessons for mastery.';
	selectedQuote[3]='You can only fight the way you practice.';
	selectedQuote[4]='Everything is within. Everything exists. Seek nothing outside of yourself.';
	selectedQuote[5]='A man cannot understand the art he is studying if he only looks for the end result without taking the time to delve deeply into the reasoning of the study';
	selectedQuote[6]='With your spirit open and unconstricted, look at things from a high point of view.';
	selectedQuote[7]='The Way is in training.';
	selectedQuote[8]='No fear, no hesitation, no surprise, no doubt.';
	selectedQuote[9]='To win any battle, you must fight as if you are already dead.';
	selectedQuote[10]='Perceive that which cannot be seen with the eye.';
	selectedQuote[11]='Get beyond love and grief: exist for the good of man.';
	selectedQuote[12]='The approach to combat and everyday life should be the same.';
	selectedQuote[13]='When you cannot be deceived by me, you will have realized the wisdom of strategy.';
	selectedQuote[14]='You must understand that there is more than one path to the top of the mountain.';
	selectedQuote[15]='You must not be influenced by the opponent.';
	selectedQuote[16]='Never accept an inferior position to anyone. It is the strongest spirit that wins, not the most expensive sword.';
	selectedQuote[17]='Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.';
	selectedQuote[18]='Do nothing which is of no use.';
	selectedQuote[19]='If you know the Way broadly, you will see it in everything.';
	selectedQuote[20]='The true science of martial arts means practicing them in such a way that they will be useful at any time.';
	selectedQuote[21]='When you attain the Way of strategy there will not be one thing you cannot see. You must study hard.';
	selectedQuote[22]='When you attain the Way of strategy there will not be one thing you cannot see. You must study hard.';
	selectedQuote[23]='Control your anger. If you hold anger toward others, they have control over you. Your opponent can dominate and defeat you if you allow him to get you irritated.';
	selectedQuote[24]='If you wish to control others you must first control yourself.';
	selectedQuote[25]='Study strategy over the years and achieve the spirit of the warrior.';
	selectedQuote[26]='Do not let the body be dragged along by mind nor be dragged along by the body.';
	selectedQuote[27]='Think lightly of yourself and deeply of the world.';
	selectedQuote[28]='The path that leads to truth is littered with the bodies of the ignorant.';
	selectedQuote[29]='It may seem difficult at first but everything is difficult at first.';
	selectedQuote[30]='Generally speaking, the Way of the warrior is resolute acceptance of death.';
	selectedQuote[31]='In fighting and in everyday life you should be determined though calm.';
	selectedQuote[32]='Truth is not what you want it to be; it is what it is, and you must bend to its power or live a lie.';
	selectedQuote[33]='Determine that today you will overcome yourself of the day before, tomorrow you will win over those of lesser skill, and later you will win over those of greater skill.';
	selectedQuote[34]='All men are the same except for their belief in their own selves, regardless of what others may think of them';
	selectedQuote[35]='It is difficult to understand the universe if you only study one planet';
	selectedQuote[36]='From one thing, know ten thousand things';
	selectedQuote[37]='If you do not control the enemy, the enemy will control you';
	selectedQuote[38]='To know ten thousand things, know one well';
	selectedQuote[39]='No man is invincible, and therefore no man can fully understand that which would make him invincible';
	selectedQuote[40]='There is no one way to salvation, whatever the manner in which a man may proceed. ';
	selectedQuote[41]="I must say that to die with one's sword still sheathed is most regrettable.";
	selectedQuote[42]='Step by step walk the thousand-mile road.';
	selectedQuote[43]='Never stray from the Way.';
	selectedQuote[44]='If you are not progressing along the true way, a slight twist in the mind can become a major twist.';
	selectedQuote[45]='Even if you strive diligently on your chosen path day after day, if your heart is not in accord with it, then even if you think you are on a good path, from the point of view of the straight and true, this is not a genuine path.';
	selectedQuote[46]='If you do not pursue a genuine path to its consummation, then a little bit of crookedness in the mind will later turn into a major warp. Reflect on this.';
	selectedQuote[47]='Nobody is strong and nobody is weak if he conceives of the body, from the head to the sole of the foot, as a unity in which a living mind circulates everywhere equally';
	selectedQuote[48]='Nobody is strong and nobody is weak if he conceives of the body, from the head to the sole of the foot, as a unity in which a living mind circulates everywhere equally';
	selectedQuote[49]='Fixation is the way to death, fluidity is the way to life. This is something that should be well understood.';
	selectedQuote[50]='Everything can collapse. Houses, bodies, and enemies collapse when their rhythm becomes deranged.';
	document.getElementById('quot').innerText=selectedQuote[getRandomInt(51)];
	
}



















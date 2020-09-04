var player1, player2;
player1 = Math.floor(Math.random() * 6)+1;
player2 = Math.floor(Math.random() * 6)+1;
console.log(player1,player2);

var img1 = document.querySelector('img.img1')
var img2 = document.querySelector('img.img2')

img1.setAttribute("src",'images/dice' + player1 + '.png');
img2.setAttribute("src",'images/dice' + player2 + '.png');

if (player1 > player2)
	document. querySelector('h1').innerHTML = 'Player 1 wins';
else if (player2 >player1)
	document. querySelector('h1').innerHTML = 'Player 2 wins';


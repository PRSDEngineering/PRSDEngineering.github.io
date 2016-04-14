var images = new Array('./images/slide-1.jpg','./images/slide_2.JPG','./images/slide_3.JPG','./images/slide_5.jpg','./images/slide_6.jpg','./images/slide_7.jpg','./images/slide_8.PNG','./images/slide_9.JPG','./images/slide_10/jpg');

var numPicture = 0; //keeps track of picture 



var websites = new Array('#','#','#','#','#','#','#','#','#');




function Next()
{
	numPicture+=1; //show next picture
		if(numPicture==8)
	{
		numPicture = 0;
	}
	
	document.banner.src = images[numPicture];
    setTimeout("Next()",5000)     
	
}

function goBack()
{

	numPicture-= 1;
		if(numPicture == -1)
		{
		numPicture = 7;	
		}

	document.banner.src = images[numPicture];
	
	}



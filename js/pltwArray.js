var P = new Array('images/intro to engineering design.jpg','images/principles of engineering.jpg','images/Civil engineering.jpg','images/cim.jpg');

var PPicture = 0; //keeps track of picture 








function PNext()
{
	PPicture+=1; //show next picture
		if(PPicture==4)
	{
		PPicture = 0;
	}
	
	document.PBanner.src = P[PPicture];
    setTimeout("PNext()",5000)     
	
}
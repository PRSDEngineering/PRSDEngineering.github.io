
//2015 Battlebots
var BB = new Array('images/bb1.jpg','images/bb2.jpg','images/bb3.jpg','images/bb4.jpg','images/bb5.jpg','images/bb6.jpg','images/bb7.jpg','images/bb8.jpg','images/bb9.jpg','images/bb10.jpg','images/bb11.jpg','images/bb12.jpg','images/bb13.jpg','images/bb14.jpg','images/bb15.jpg','images/bb16.jpg','images/bb17.jpb','images/bb18.jpg');

var Picture = 0; //keeps track of picture 



function BNext()
{
	Picture+=1; //show next picture
		if(Picture==18)
	{
		Picture = 0;
	}
	
	document.bbBanner.src = BB[Picture];
    setTimeout("BNext()",4500)     
	
}

//2016 Battlebots


var CC = new Array('images/battlebots/cc_2016-1.jpg','images/battlebots/cc_2016-2.jpg','images/battlebots/cc_2016-3.jpg','images/battlebots/cc_2016-4.jpg','images/battlebots/cc_2016-5.jpg','images/battlebots/cc_2016-6.jpg');

var Picture1 = 0; //keeps track of picture 



function cNext()
{
	Picture1+=1; //show next picture
		if(Picture1==5)
	{
		Picture1 = 0;
	}
	
	document.ccBanner.src = CC[Picture1];
    setTimeout("cNext()",4500)     
	
}
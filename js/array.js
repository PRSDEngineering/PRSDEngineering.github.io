var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '/images/slide-1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/slide-2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/slide-3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/slide-4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/slide-5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/slide-6.png';

imgArray[6] = new Image();
imgArray[6].src = 'images/slide-7.png';

imgArray[7] = new Image();
imgArray[7].src = 'images/slide-8.png';
/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i] == img)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }   
}

function time()
{
 while 1==1
 {
   
 }  
}
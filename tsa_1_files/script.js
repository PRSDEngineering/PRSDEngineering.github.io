if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/tms-0.4.1.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.tools.min.js')
$.include('js/jquery.ui.totop.js')
$.include('js/jquery.jcarousel.js')
$(function(){
		
		  $().UItoTop({
		text: 'back to top',
		easingType: 'easeOutQuart'
	});
		
		
	$('.slider-1')._TMS({
		show:0,
		pauseOnHover:false,
		prevBu:false,
		nextBu:false,
		playBu:false,
		items:'.items>li',
		duration:800,
		preset:'simpleFade',
		bannerCl:'banner',
		numStatusCl:false,
		pauseCl:false,
		pagination:true,
		paginationCl:'pagination-1',
		pagNums:false,
		slideshow:5000,
		numStatus:false,
		banners:false,// fromLeft, fromRight, fromTop, fromBottom
		waitBannerAnimation:false,
		progressBar:false})	
	
	
	
	
	    jQuery('#mycarousel').jcarousel({auto: 700});

$('#videoprevs a').click(function() {
    
            //show the player
           $('#videoplayer').show();
           
           //looks for VIDEO_ID
           var vid=$(this).attr("name");
           
           //automatical flash/html detection in iframe - also automatically detect ipad etc - works in most cases!!!
           $('#videocont').empty().html('<iframe type="text/html" width="620" height="400" src="http://www.youtube.com/embed/'+vid+'" frameborder="0"></iframe>');
            
		  
           /* flash insertion - must be needed if flash content in iframe showing above of dropdown menu
               $('#videocont').empty().html('<object type="application/x-shockwave-flash" style="width:425px; height:344px;" data="http://www.youtube.com/v/'+vid+'"><param name="wmode" value="transparent" /><param name="movie" value="http://www.youtube.com/v/'+vid+'" /></object>');
           */
           
           /* complete workaround will looks like this
           
               if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) ) {
                    html5 iframe code here
                }
           
                else{
                    flash code here
                }
           
           */           
           $('#videozag').empty().html($(this).attr("title"));
           return false;
    });
          $('#videoprevs a:first').click();
	
	
if($('.lightbox-image').length||$('.lightbox-video').length)$.include('js/jquery.prettyPhoto.js');	
		 $(".tabs-1 ul").tabs(".tabs-1 .tab_content");
		
	
	
		$('.soc-1 .active').css({opacity:0})
	
	$('.soc-1 a').hover(function(){
		$(this).find('.active').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('.active').stop().animate({opacity:0})						 
	})	


	if($('.tweet').length)$.include('js/jquery.tweet.js');



	if($('#contact-form-1').length)$.include('js/forms.js');	
	

});

$(document).ready(function (){
    $('#videocont iframe').each( function() {
      var url = $(this).attr("src")
      $(this).attr({
          "src" : url.replace('?rel=0', '')+"?wmode=transparent",
          "wmode" : "Opaque"
      })
  });
});


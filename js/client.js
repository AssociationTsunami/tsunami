function tsunamiClient() {
  var self = this;
  var iconPath = "m69.5 269c40-31.26-37.238-44.91-13.5 3 5.182 10.46 55.5 36.51 55.5-40 0-57.5-35-130.5-35-159.5s23-44.5 23-6-56.5 71.5-56.5 111.5c0 66.03 90.5 67.03 90.5 18 0-45.5-42.327-46.9-56-35.5-19.514 16.27-12.443 47.9 10.5 50-33.656-43.11 31.7-54.41 36-18 4.73 40.03-69.5 41.16-69.5-7.5 0-38.5 61.27-77.6 58.5-115.5-4-54.691-39.861-71.599-44-5-2.91 46.32 34.83 105.02 36.5 170.5 1.07 41.81-30.318 52.85-36 34z";
  var width = $("#side3").width();
  var $loader		= $('#st_loading');
	//the ul element 
	var $list		= $('#menu');
	//the current image being shown
	var $currImage 	= $('#st_main').children('img:first');
	
	//let's load the current image 
	//and just then display the navigation menu
	$('<img>').load(function(){
		$loader.hide();
		$currImage.fadeIn(3000);
		//slide out the menu
		setTimeout(function(){
			$list.animate({'left':'0px'},500);
		},
		1000);
	}).attr('src',$currImage.attr('src'));

  this.init = function() {
    self.svg = d3.select("#side3").append("svg:svg")
      .attr("width", "100%").attr("height", "100%");

  $loader.hide();
  self.drawMarkers();
  self.sliderMenu();

  };
  this.drawMarkers = function () {
    var iconHolder = self.svg.append('svg:g')
      //.attr("transform", "translate(" + 308 + "," + 89 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.about);
      
    iconHolder.append("svg:text")
      .text('ABOUT')
      .style("fill", "white")
      .attr('text-anchor', 'middle')
      .attr("class", "icon-name");
    
    iconHolder.append("svg:path")
      .attr("d", iconPath)
      .style("fill", "white")
      .attr("class", "icon");
  };
  // Overlay to display the content for each section
  this.about = function() {
    $('#about').dialog({
      autoOpen: true,
      height: 350,
      width: 250,
      modal: false,
      position: [50, 150],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#about').dialog('close');
        })
      }
    });
  };
  // Slider Menu
  this.sliderMenu = function() {
    /* function to make the thumbs menu scrollable */
    //clicking on a thumb, replaces the large image
    $list.find('.sc_menu img').bind('click',function(){
      console.log('we have clicked an image');
      var $this = $(this);
      $('<img class="st_preview"/>').load(function(){
        var $this = $(this);
        var $currImage = $('#st_main').children('img:first');
        $this.insertBefore($currImage);
        $loader.hide();
        $currImage.fadeOut(2000,function(){
          $(this).remove();
        });
        }).attr('src',$this.attr('alt'));
      }).bind('mouseenter',function(){
        $(this).stop().animate({'opacity':'1'});
      }).bind('mouseleave',function(){
        $(this).stop().animate({'opacity':'0.7'});
      });
    console.log('slider menu')
    //the loading image
    var $loader		= $('#st_loading');
    function buildThumbs($elem){
      var $wrapper    	= $elem.next();
      var $menu 		= $wrapper.find('.sc_menu');
      var inactiveMargin 	= 150;
      /* move the scroll down to the
      beggining (move as much as the height of the menu) */
      $wrapper.scrollTop($menu.outerHeight());

      /* when moving the mouse up or down, the wrapper moves (scrolls) up or down */
      $wrapper.bind('mousemove',function(e){
        var wrapperHeight 	= $wrapper.height();
        var menuHeight 	= $menu.outerHeight() + 2 * inactiveMargin;
        var top 	= (e.pageY - $wrapper.offset().top) * (menuHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
        $wrapper.scrollTop(top+10);
      });
    }

    var stacktime;

    $('#menu li > a').bind('mouseover',function () {
      var $this = $(this);

      buildThumbs($this);

      var pos	=	$this.next().find('a').size();
      var f	=	function(){
        if(pos==0) clearTimeout(stacktime);
        $this.next().find('a:nth-child('+pos+')').css('visibility','visible');
        --pos;
      };
      /* each thumb will appear with a delay */
      stacktime = setInterval(f , 50);
    });

    /* on mouseleave of the whole <li> the scrollable area is hidden */
    $('#menu li').bind('mouseleave',function () {
      var $this = $(this);
      clearTimeout(stacktime);
      $this.find('.sc_menu').css('visibility','hidden').find('a').css('visibility','hidden');
      $this.find('.sc_menu_wrapper').css('visibility','hidden');
    });

    /* when hovering a thumb, change its opacity */
    $('.sc_menu a').hover(
      function () {
        var $this = $(this);
        $this.find('img')
        .stop()
        .animate({'opacity':'1.0'},400);
      },
      function () {
        var $this = $(this);
        $this.find('img')
        .stop()
        .animate({'opacity':'0.3'},400);
      }
    );
  };
  // Initialise  
  this.init();
};


var tsunamiClient;

jQuery(function() {
  tsunamiClient = new tsunamiClient();
});
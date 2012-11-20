function tsunamiClient() {
  var self = this;
  var iconPath = "m 22.390593,58.926523 c 19.759166,-7.210879 -18.39479,-10.35958 -6.668717,0.692027 2.559795,2.412852 27.415842,8.421909 27.415842,-9.226973 0,-13.263769 -17.28927,-30.102987 -17.28927,-36.79254 0,-6.689551 11.361517,-10.2650018 11.361517,-1.384045 0,8.880958 -27.9098146,16.493208 -27.9098146,25.720177 0,15.23142 44.7051056,15.46209 44.7051056,4.152135 0,-10.495678 -20.908654,-10.818621 -27.662828,-8.188934 -9.639506,3.753068 -6.146586,11.049296 5.186778,11.53371 -16.625358,-9.944366 15.659133,-12.550983 17.78325,-4.152136 2.336523,9.233892 -34.331547,9.494553 -34.331547,-1.730056 0,-8.880957 30.2661,-17.90032 28.897773,-26.642873 C 41.902764,0.29121134 24.188185,-3.609028 22.143606,11.753644 20.706124,22.438474 39.348896,35.979052 40.173842,51.0836 40.7024,60.728094 25.197386,63.274733 22.390593,58.926523 z";
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
    self.sliderMenu();
    $("#tabs").tabs();
    $(".accordion").accordion({ header: "h3", collapsible: true, active: false });
  };
  this.drawMarkers = function () {
    var iconHolder = self.svg.append('svg:g')
      //.attr("transform", "translate(" + 308 + "," + 89 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.ateliers);
      
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
  this.ateliers = function() {
    $('#ateliers').dialog({
      autoOpen: true,
      height: 400,
      width: 400,
      modal: true,
      position: [50, 160],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#ateliers').dialog('close');
        })
      }
    });
  };
  // Slider Menu
  this.sliderMenu = function() {
    /* function to make the thumbs menu scrollable */
    //clicking on a thumb, replaces the large image
    $list.find('.sc_menu img').bind('click',function(){
      var $this = $(this);
      $('<img class="st_preview"/>').load(function(){
        var $this = $(this);
        var $currImage = $('#st_main').children('img:first');
        $this.insertBefore($currImage);
        console.log("pull the musician's profile data");
        $currImage.fadeOut(2000,function(){
          $(this).remove();
        });
        }).attr('src',$this.attr('alt'));
      }).bind('mouseenter',function(){
        $(this).stop().animate({'opacity':'1'});
      }).bind('mouseleave',function(){
        $(this).stop().animate({'opacity':'0.7'});
      });

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
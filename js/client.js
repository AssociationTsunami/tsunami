function tsunamiClient() {
  var self = this;
  //var iconPath = "m 22.390593,58.926523 c 19.759166,-7.210879 -18.39479,-10.35958 -6.668717,0.692027 2.559795,2.412852 27.415842,8.421909 27.415842,-9.226973 0,-13.263769 -17.28927,-30.102987 -17.28927,-36.79254 0,-6.689551 11.361517,-10.2650018 11.361517,-1.384045 0,8.880958 -27.9098146,16.493208 -27.9098146,25.720177 0,15.23142 44.7051056,15.46209 44.7051056,4.152135 0,-10.495678 -20.908654,-10.818621 -27.662828,-8.188934 -9.639506,3.753068 -6.146586,11.049296 5.186778,11.53371 -16.625358,-9.944366 15.659133,-12.550983 17.78325,-4.152136 2.336523,9.233892 -34.331547,9.494553 -34.331547,-1.730056 0,-8.880957 30.2661,-17.90032 28.897773,-26.642873 C 41.902764,0.29121134 24.188185,-3.609028 22.143606,11.753644 20.706124,22.438474 39.348896,35.979052 40.173842,51.0836 40.7024,60.728094 25.197386,63.274733 22.390593,58.926523 z";
  var unsonparlaPath = "m 149.95629,290.29482 10.16392,19.41944 10.1655,-19.49475 -1.90683,-6.22954 -5.95699,10.35287 -0.004,-30.94125 -4.52146,0.0108 -6.7e-4,31.13531 -7.94013,-15.08476 0,10.83308 z m -19.54548,-16.98934 7.64169,0 0,1.41172 -7.64169,0 0,-1.41172 m 3.84691,-4.67221 0.23978,-1.2811 c 0.53516,0.14402 0.93132,0.39186 1.18848,0.74354 0.25714,0.35167 0.38573,0.87415 0.38573,1.56745 0,0.62965 -0.0782,1.09856 -0.23457,1.40669 -0.15291,0.30813 -0.34925,0.52416 -0.58903,0.64808 -0.2363,0.12727 -0.67242,0.1909 -1.30835,0.19091 l -1.70974,-0.015 c -0.48651,0 -0.84618,0.0218 -1.07901,0.0653 -0.22936,0.0469 -0.47609,0.13229 -0.7402,0.25622 l 0,-1.39664 c 0.0973,-0.0369 0.24152,-0.0821 0.43265,-0.13564 0.0869,-0.0234 0.14421,-0.0401 0.17202,-0.0503 -0.24326,-0.24115 -0.42569,-0.49904 -0.54733,-0.77368 -0.12162,-0.27464 -0.18244,-0.56769 -0.18244,-0.87918 0,-0.54928 0.15464,-0.98301 0.46393,-1.30119 0.30928,-0.31483 0.70022,-0.47225 1.17284,-0.47225 0.31274,0 0.59076,0.072 0.834,0.21603 0.24674,0.14402 0.43439,0.34498 0.56297,0.60287 0.13206,0.26124 0.24673,0.63636 0.34404,1.12535 0.12856,0.65981 0.24846,1.11698 0.35967,1.37153 l 0.14595,0 c 0.28147,-1e-5 0.48128,-0.067 0.59945,-0.20096 0.12162,-0.13397 0.18243,-0.38684 0.18244,-0.75861 -1e-5,-0.25119 -0.0521,-0.44712 -0.15639,-0.58779 -0.10077,-0.14066 -0.27974,-0.25455 -0.53689,-0.34162 m -1.18848,1.88898 c -0.0625,-0.18086 -0.13726,-0.46723 -0.22414,-0.85909 -0.0868,-0.39186 -0.17201,-0.64808 -0.25541,-0.76866 -0.13554,-0.1842 -0.30755,-0.27631 -0.51606,-0.27631 -0.20502,0 -0.38226,0.0736 -0.53169,0.22106 -0.14942,0.14736 -0.22414,0.33491 -0.22414,0.56267 0,0.25455 0.0869,0.49735 0.26064,0.72847 0.13205,0.1708 0.29365,0.28301 0.48477,0.3366 0.12511,0.0369 0.36314,0.0553 0.71412,0.0553 l 0.29191,0 m -2.65843,-7.22436 5.5358,-2.15023 0,1.48206 -2.82525,1.00477 -0.94347,0.29139 c 0.23977,0.077 0.3979,0.12559 0.47435,0.14569 0.15637,0.0469 0.31275,0.0971 0.46912,0.15072 l 2.82525,1.01482 0,1.45191 -5.5358,-2.12008 0,-1.27105 m 6.28641,-4.32054 1.35528,0 0,1.41171 -1.35528,0 0,-1.41171 m -6.28641,0 5.5358,0 0,1.41171 -5.5358,0 0,-1.41171 m 5.5358,-0.98973 -1.16763,0 0,-0.96458 -2.23099,0 c -0.45176,0 -0.71587,0.008 -0.79233,0.0251 -0.0729,0.02 -0.13378,0.062 -0.18244,0.1256 -0.0486,0.067 -0.073,0.14736 -0.073,0.24114 0,0.13062 0.047,0.31986 0.14075,0.5677 l -1.13636,0.12058 c -0.14595,-0.32824 -0.21892,-0.7 -0.21892,-1.11531 0,-0.25454 0.0435,-0.48398 0.13031,-0.68827 0.0904,-0.20431 0.20503,-0.35502 0.34403,-0.45214 0.14249,-0.0938 0.33361,-0.15911 0.5734,-0.19594 0.17028,-0.0302 0.51431,-0.0452 1.03209,-0.0452 l 2.41344,0 0,-0.64808 1.16763,0 0,0.64808 1.09985,0 0.85487,1.41674 -1.95472,0 0,0.96459 m -3.95637,-8.67125 0.22413,1.41675 c -0.28495,0.0603 -0.50215,0.18253 -0.65158,0.36674 -0.14595,0.18421 -0.21892,0.4421 -0.21892,0.77368 0,0.36507 0.0695,0.63971 0.2085,0.82392 0.0973,0.12392 0.22763,0.18588 0.39095,0.18589 0.1112,-1e-5 0.20329,-0.0335 0.27627,-0.10048 0.0695,-0.0703 0.13379,-0.22775 0.19287,-0.47224 0.26063,-1.13876 0.49867,-1.86053 0.71412,-2.16532 0.29886,-0.422 0.71412,-0.63301 1.24581,-0.63301 0.47957,0 0.88267,0.18254 1.20933,0.54762 0.32665,0.36507 0.48999,0.93109 0.48999,1.69807 0,0.73015 -0.12337,1.27272 -0.3701,1.62775 -0.24673,0.35502 -0.61161,0.59951 -1.09465,0.73348 l -0.25541,-1.33133 c 0.21544,-0.0569 0.3805,-0.16579 0.4952,-0.32656 0.11466,-0.15741 0.17201,-0.38349 0.17201,-0.67822 0,-0.37177 -0.0538,-0.63803 -0.16159,-0.7988 -0.0765,-0.10718 -0.1755,-0.16076 -0.29712,-0.16076 -0.10426,0 -0.19287,0.0469 -0.26585,0.14067 -0.0973,0.12727 -0.23456,0.56602 -0.41178,1.31625 -0.17724,0.75359 -0.39443,1.27942 -0.65158,1.57751 -0.26064,0.29472 -0.62378,0.4421 -1.08944,0.4421 -0.50736,0 -0.94348,-0.2043 -1.30837,-0.61292 -0.36488,-0.40861 -0.54732,-1.01315 -0.54732,-1.81362 0,-0.72679 0.1529,-1.30286 0.45871,-1.72823 0.30581,-0.422 0.72108,-0.69832 1.24582,-0.82894 m 0.18244,-2.14018 -0.245,1.40669 c -0.53516,-0.18087 -0.94348,-0.46723 -1.22496,-0.85908 -0.27801,-0.38852 -0.41701,-0.87584 -0.41701,-1.46196 0,-0.92774 0.31449,-1.61434 0.94349,-2.0598 0.50388,-0.35167 1.13981,-0.52751 1.90781,-0.52751 0.91741,0 1.63501,0.2311 2.1528,0.69331 0.52126,0.46219 0.7819,1.04664 0.7819,1.75333 0,0.79377 -0.2728,1.42008 -0.81838,1.87894 -0.54213,0.45885 -1.37439,0.67822 -2.49685,0.65813 l 0,-3.53682 c -0.43438,0.0101 -0.77319,0.12391 -1.01645,0.34162 -0.23979,0.2177 -0.35968,0.48899 -0.35968,0.81387 0,0.22105 0.0625,0.40694 0.18767,0.55766 0.12508,0.15071 0.32665,0.26458 0.60466,0.34162 m 1.48038,0.0804 c 0.42396,-0.0101 0.74541,-0.11555 0.96433,-0.31649 0.2224,-0.20096 0.3336,-0.44545 0.33361,-0.73349 -10e-6,-0.30815 -0.11643,-0.56269 -0.34925,-0.76363 -0.23283,-0.20096 -0.54907,-0.29976 -0.94869,-0.29641 l 0,2.11002 m -3.24225,-9.43988 7.64168,0 0,5.04901 -1.29272,0 0,-3.56195 -1.80877,0 0,3.07463 -1.29274,0 0,-3.07463 -3.24745,0 0,-1.48706 m 15.44344,29.74298 -4.04954,0 0,-2.62298 -3.65582,0 0,-9.10195 9.76387,0 c 1.88977,-1e-5 3.35584,1.02377 4.39825,3.07135 1.04986,2.06252 1.5748,4.9545 1.57482,8.67599 -2e-5,3.58697 -0.47622,6.23983 -1.4286,7.95861 -0.94491,1.71873 -2.40722,2.57812 -4.38699,2.57815 l -9.92135,0 0,-9.10196 9.61764,0 c 0.59992,-2e-5 1.01612,-0.14199 1.2486,-0.42595 0.23246,-0.28398 0.3487,-0.79214 0.34872,-1.52447 -2e-5,-1.41985 -0.53245,-2.12979 -1.59732,-2.12977 l -1.91228,0 0,2.62298 m 7.64911,-27.1491 0,9.10195 -9.12269,0 c -0.71243,0 -1.18862,0.22419 -1.42858,0.67257 -0.23248,0.46332 -0.34871,1.36753 -0.34871,2.71265 l 0,0.4708 -4.45449,0 0,-2.4212 c 0,-3.31799 0.48369,-5.9036 1.45108,-7.75686 0.97488,-1.85326 2.32473,-2.77992 4.04953,-2.77991 l 9.85386,0 m -4.12827,-17.71069 -11.2262,0 0,-9.10197 15.35447,0 0,11.68009 c -1e-5,3.55707 -0.44246,6.31456 -1.32733,8.27248 -0.98991,2.18205 -2.24602,3.27308 -3.76833,3.27311 -1.55233,-3e-5 -2.86092,-1.35262 -3.9258,-4.05777 l -6.33301,5.24595 0,-9.55031 4.94942,-4.41647 3.94831,0 0,0.71739 c -1e-5,1.91304 0.41243,2.86957 1.23735,2.86958 0.7274,-1e-5 1.09112,-1.106 1.09112,-3.31794 l 0,-1.61414 m -3.52084,-25.17609 -4.04954,0 0,-2.62298 -3.65582,0 0,-9.10194 9.76387,0 c 1.88977,0 3.35584,1.02378 4.39825,3.07133 1.04986,2.06251 1.5748,4.95452 1.57482,8.67601 -2e-5,3.58696 -0.47622,6.23982 -1.4286,7.9586 -0.94491,1.71874 -2.40722,2.57811 -4.38699,2.57814 l -9.92135,0 0,-9.10196 9.61764,0 c 0.59992,0 1.01612,-0.14199 1.2486,-0.42594 0.23246,-0.28399 0.3487,-0.79214 0.34872,-1.52446 -2e-5,-1.41987 -0.53245,-2.12978 -1.59732,-2.12978 l -1.91228,0 0,2.62298 m -2.39598,-26.96958 4.02704,0 c -1e-5,1.83832 0.35246,2.75747 1.05737,2.75749 0.64493,-2e-5 0.9674,-0.70246 0.9674,-2.10734 0,-1.41988 -0.44247,-2.12978 -1.32734,-2.12978 l -10.03385,0 0,-9.10194 9.5614,0 c 0.98988,-1e-5 1.79979,0.19428 2.42971,0.58288 0.63742,0.40354 1.22985,1.08355 1.7773,2.04009 0.60742,1.07607 1.08735,2.4212 1.43984,4.03535 0.35244,1.61412 0.52867,3.28057 0.52869,4.99934 -2e-5,3.1087 -0.52496,5.71673 -1.57482,7.82408 -1.04989,2.12228 -2.35101,3.18343 -3.90331,3.18346 -1.50734,-3e-5 -2.72968,-0.94908 -3.66707,-2.84717 -0.86241,-1.73373 -1.2936,-4.34921 -1.2936,-7.84651 l 0.0112,-1.38995 m -5.3094,-16.47767 0,-11.73838 8.86623,0 c 0.90289,-2e-5 1.35434,-0.74283 1.35434,-2.22841 0,-1.4647 -0.45145,-2.19704 -1.35434,-2.19702 l -8.86623,0 0,-11.73838 8.756,0 c 2.04724,-1e-5 3.76905,1.34959 5.1654,4.0488 1.40683,2.69916 2.11023,6.00514 2.11025,9.91795 -2e-5,4.47772 -0.81366,8.0662 -2.44096,10.76541 -1.27037,2.11331 -3.0394,3.16997 -5.30714,3.17 l -8.28354,0 m 15.73693,-48.36141 c -1e-5,4.33424 -0.79117,8.04825 -2.37348,11.14205 -1.58232,3.10867 -3.47585,4.66303 -5.68058,4.66306 -2.24225,-3e-5 -4.14703,-1.56186 -5.71434,-4.68548 -1.56732,-3.12369 -2.35099,-6.91991 -2.35099,-11.38866 0,-4.43889 0.78742,-8.227641 2.36224,-11.366225 1.5748,-3.138611 3.47584,-4.707909 5.70309,-4.707909 2.24973,0 4.1545,1.576766 5.71434,4.730336 1.55979,3.168487 2.33971,7.039428 2.33972,11.612828 m -4.52197,-0.26903 c -1e-5,-1.86823 -0.34498,-3.45994 -1.03488,-4.77515 -0.68993,-1.315241 -1.52233,-1.972841 -2.49721,-1.972831 -0.97491,-10e-6 -1.8073,0.65759 -2.49722,1.972831 -0.68993,1.33015 -1.03488,2.92188 -1.03488,4.77515 0,1.88315 0.34122,3.47487 1.02364,4.77518 0.68991,1.31519 1.52606,1.97279 2.50846,1.97283 0.98237,-4e-5 1.81477,-0.65764 2.49721,-1.97283 0.6899,-1.30031 1.03487,-2.89203 1.03488,-4.77518 m 4.20702,-18.876454 -4.37576,0 c 0.11248,-0.65763 0.16873,-1.165779 0.16874,-1.524457 -1e-5,-0.687539 -0.1275,-1.277878 -0.38246,-1.77108 -0.25498,-0.493228 -0.56244,-0.739829 -0.92239,-0.739808 -0.30748,-2.1e-5 -0.69743,0.26899 -1.16986,0.807067 l -0.60744,0.694974 c -1.09488,1.255433 -2.15226,1.88315 -3.17214,1.883157 -1.49232,-7e-6 -2.75593,-1.061151 -3.79079,-3.183439 -1.03489,-2.107368 -1.55234,-4.685493 -1.55234,-7.734415 0,-1.464691 0.16874,-2.914407 0.5062,-4.349211 l 4.44324,0 c -0.27747,0.866855 -0.41621,1.636564 -0.41621,2.309114 0,0.792141 0.11249,1.449723 0.33747,1.972839 0.23247,0.538035 0.52118,0.807066 0.86615,0.807066 0.22496,0 0.71616,-0.425957 1.47357,-1.277857 1.19985,-1.360055 2.39972,-2.04009 3.59958,-2.04009 1.44732,0 2.69219,1.023788 3.73458,3.071333 1.04987,2.062521 1.5748,4.521083 1.57481,7.37573 -1e-5,1.255434 -0.10501,2.488458 -0.31495,3.699077 m -15.42198,-20.894146 0,-11.738388 8.86622,0 c 0.90289,-1.9e-5 1.35434,-0.742817 1.35435,-2.228392 -1e-5,-1.46471 -0.45146,-2.19703 -1.35435,-2.19702 l -8.86622,0 0,-11.7384 8.75599,0 c 2.04724,0 3.76905,1.34962 5.1654,4.04882 1.40683,2.69918 2.11023,6.00518 2.11026,9.91798 -3e-5,4.477726 -0.81367,8.066192 -2.44097,10.765422 -1.27036,2.113288 -3.0394,3.16995 -5.30714,3.169978 l -8.28354,0 m 15.35448,-33.83414 -9.9551,0 c -1.7548,-3e-5 -3.15713,-1.04624 -4.20701,-3.1386 -1.04987,-2.07749 -1.57483,-4.84992 -1.57483,-8.31731 0,-3.45248 0.50995,-6.09786 1.52984,-7.93619 1.01987,-1.82339 2.48594,-2.73506 4.39823,-2.73505 l 9.80887,0 0,9.10194 -9.79761,0 c -0.93739,-10e-6 -1.4061,0.66506 -1.4061,1.99523 0,1.28534 0.46871,1.928 1.4061,1.92802 l 9.79761,0 0,9.10196"

  var width = $(".menu").width()
  mapCanvasHeight = (width * 0.5);
      
  //the ul element 
  var $list = $('.menu');
  //the current image being shown
  var $currImage = $('#st_main').children('img:first');

  //let's load the current image 
  //and just then display the navigation menu
  $('<img>').load(function(){
    $currImage.fadeIn(3000);
    //slide out the menu
    setTimeout(function(){
      $list.animate({'left':'0px'},500);
    },
    1000);
    }).attr('src',$currImage.attr('src'));

    this.init = function() {
      self.sliderMenu();
    };

  this.init = function() {
    self.svg = d3.select("#unsonparla").append("svg:svg")
          .attr("width", "100%").attr("height", "100%");
    self.drawMarkers();
    self.sliderMenu();
    $("#tabs").tabs();
    $(".accordion").accordion({ header: "h3", collapsible: true, active: false });
  };
  this.drawMarkers = function () {
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + -120 + "," + 0 + ")")
      .attr("class", "icon-holder")
      .style("fill", "#f5000b")
      .on("mouseover", function(){d3.select(this).style('opacity', 1).style("fill", "#e4f005");})
      .on("mouseout", function(){d3.select(this).style('opacity', 1).style("fill", "#f5000b");})
      .on("click", self.ateliers);
    
    iconHolder.append("svg:path")
      .attr("d", unsonparlaPath)
      .attr("class", "unsonparla");
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
  // jPlayer
  this.tsunamiPlayer = function(music) {
    ///init screen
    //var player = $(".zen .player");
    var no_of_tracks = $(".sc_menu a").length;
    var player = new jPlayer(".zen .player", {
      ready: function () {
        $(this).jPlayer("setMedia", {
          m4a: m4a,
          mp3: mp,
          oga: oga
        });
      },
      swfPath: "/js/jplayer/Jplayer.swf",
      supplied: "m4a, mp3, oga"         
    });
    // preload, update, end
    player.bind($.jPlayer.event.progress, function(event) {    

      var audio = $('.zen audio').get(0);
      var pc = 0;    

      if ((audio.buffered != undefined) && (audio.buffered.length != 0)) {
        pc = parseInt(((audio.buffered.end(0) / audio.duration) * 100), 10); 
        displayBuffered(pc);
        //console.log(pc);
        if(pc >= 99) {
          //console.log("loaded");
          $('.zen .buffer').addClass("loaded");
        }  
      }        

    });
    //player.bind($.jPlayer.event.loadeddata, function(event) {    
      //$('.zen .buffer').addClass("loaded");    
    //});

    player.bind($.jPlayer.event.timeupdate, function(event) { 
      var pc = event.jPlayer.status.currentPercentAbsolute;
      if (!dragging) { 
        displayProgress(pc);
      }
    });

    player.bind($.jPlayer.event.ended, function(event) {   
      $('.zen .circle').removeClass( "rotate" );
      $(".zen").removeClass( "play" );
      $('.zen .progress').css({rotate: '0deg'});
      status = "stop";
    });

    // play/pause

    $(".zen .button").bind('mousedown', function() {
      // not sure if this can be done in a simpler way.
      // when you click on the edge of the play button, but button scales down and doesn't drigger the click,
      // so mouseleave is added to still catch it.
      $(this).bind('mouseleave', function() {
        $(this).unbind('mouseleave');
        onClick();
      });
    });

    $(".zen .button").bind('mouseup', function() {
      $(this).unbind('mouseleave');
      onClick();
    });

    function onClick() {

      if(status != "play") {
        status = "play";
        $(".zen").addClass( "play" );
        player.jPlayer("play");
      } else {
        $('.zen .circle').removeClass( "rotate" );
        $(".zen").removeClass( "play" );
        status = "pause";
        player.jPlayer("pause");
      }
    };

    // draggin

    var clickControl = $('.zen .drag');

    clickControl.grab({
      onstart: function(){
        dragging = true;
        $('.zen .button').css( "pointer-events", "none" );

      }, onmove: function(event){
        var pc = getArcPc(event.position.x, event.position.y);
        player.jPlayer("playHead", pc).jPlayer("play");
        displayProgress(pc);

      }, onfinish: function(event){
        dragging = false;
        var pc = getArcPc(event.position.x, event.position.y);
        player.jPlayer("playHead", pc).jPlayer("play");
        $('.zen .button').css( "pointer-events", "auto" );
      }
    });	

    // functions

    function displayProgress(pc) {
      var degs = pc * 3.6+"deg"; 
      $('.zen .progress').css({rotate: degs});
    }
    function displayBuffered(pc) {
      var degs = pc * 3.6+"deg"; 
      $('.zen .buffer').css({rotate: degs});
    }

    function getArcPc(pageX, pageY) { 
      var	self	= clickControl,
      offset	= self.offset(),
      x	= pageX - offset.left - self.width()/2,
      y	= pageY - offset.top - self.height()/2,
      a	= Math.atan2(y,x);  

      if (a > -1*Math.PI && a < -0.5*Math.PI) {
        a = 2*Math.PI+a; 
      } 

      // a is now value between -0.5PI and 1.5PI 
      // ready to be normalized and applied   			
      var pc = (a + Math.PI/2) / 2*Math.PI * 10;   

      return pc;
    }
  }; 
  // end jPlayer
  
  
  // Slider Menu
  this.sliderMenu = function() {
    /* function to make the thumbs menu scrollable */
    //clicking on a thumb, replaces the large image
    //and loads the jPlayer with the sound files for the Artist
    $list.find('.sc_menu img').bind('click',function(){
      var $this = $(this);
      var link = $this.parent();
      console.log(link);
      var music;
      title = link.text();
      mp = link.attr("mp3");
      oga = link.attr("oga");
      m4a = link.attr("m4a");
      m4v = link.attr("m4v");
      ogv = link.attr("ogv");
      webmv = link.attr("webmv");
      poster = link.attr("poster");
      music = {
        title: title,
        mp: mp,
        oga: oga,
        m4a: m4a,
        ogv: ogv,
        webmv: webmv,
        poster: poster,
      }
      console.log(music);
      self.tsunamiPlayer(music);
      $('<img class="st_preview"/>').load(function(){
        var $this = $(this);
        var $currImage = $('#st_main').children('img:first');
        $this.insertBefore($currImage);
        $currImage.fadeOut(2000,function(){
          $(this).remove();
        });
        }).attr('src',$this.attr('alt'));
      }).bind('mouseenter',function(){
        $(this).stop().animate({'opacity':'1'});
      }).bind('mouseleave',function(){
        $(this).stop().animate({'opacity':'0.7'});
      });

      $('.cube > div:nth-child(5)').css({
        'background': 'transparent url(/images/pattern.png) repeat-x bottom left',
      });

      function buildThumbs($elem){
        var $wrapper = $elem.next();
        var $menu = $wrapper.find('.sc_menu');
        var inactiveMargin     = 150;
        /* move the scroll down to the
        beggining (move as much as the height of the menu) */
        $wrapper.scrollTop($menu.outerHeight());

        /* when moving the mouse up or down, the wrapper moves (scrolls) up or down */
        $wrapper.bind('mousemove',function(e){
          var wrapperHeight = $wrapper.height();
          var menuHeight = $menu.outerHeight() + 2 * inactiveMargin;
          var top = (e.pageY - $wrapper.offset().top) * (menuHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
          $wrapper.scrollTop(top+10);
        });
      }

      var stacktime;

      $('.menu li > a').bind('mouseover',function () {
        var $this = $(this);

        buildThumbs($this);

        var pos = $this.next().find('a').size();
        var f = function(){
          if(pos==0) clearTimeout(stacktime);
          $this.next().find('a:nth-child('+pos+')').css('visibility','visible');
          --pos;
        };
        /* each thumb will appear with a delay */
        stacktime = setInterval(f , 50);
      });

      /* on mouseleave of the whole <li> the scrollable area is hidden */
      $('.menu li').bind('mouseleave',function () {
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
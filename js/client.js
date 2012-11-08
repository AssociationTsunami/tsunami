function tsunamiClient() {
  var self = this;
  var iconPath = "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M14.757,8h2.42v2.574h-2.42V8z M18.762,23.622H16.1c-1.034,0-1.475-0.44-1.475-1.496v-6.865c0-0.33-0.176-0.484-0.484-0.484h-0.88V12.4h2.662c1.035,0,1.474,0.462,1.474,1.496v6.887c0,0.309,0.176,0.484,0.484,0.484h0.88V23.622z";
  var width = $("#side3").width();

  
  this.init = function() {
    self.svg = d3.select("#side3").append("svg:svg")
      .attr("width", "100%").attr("height", "100%");

  self.drawMarkers();

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
      width: 200,
      modal: false,
      position: [50, 100],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#about').dialog('close');
        })
      }
    });
  };
  // Initialise  
  this.init();
};


var tsunamiClient;

jQuery(function() {
  tsunamiClient = new tsunamiClient();
});
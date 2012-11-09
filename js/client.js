function tsunamiClient() {
  var self = this;
  var iconPath = "m69.5 269c40-31.26-37.238-44.91-13.5 3 5.182 10.46 55.5 36.51 55.5-40 0-57.5-35-130.5-35-159.5s23-44.5 23-6-56.5 71.5-56.5 111.5c0 66.03 90.5 67.03 90.5 18 0-45.5-42.327-46.9-56-35.5-19.514 16.27-12.443 47.9 10.5 50-33.656-43.11 31.7-54.41 36-18 4.73 40.03-69.5 41.16-69.5-7.5 0-38.5 61.27-77.6 58.5-115.5-4-54.691-39.861-71.599-44-5-2.91 46.32 34.83 105.02 36.5 170.5 1.07 41.81-30.318 52.85-36 34z";
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
  // Initialise  
  this.init();
};


var tsunamiClient;

jQuery(function() {
  tsunamiClient = new tsunamiClient();
});
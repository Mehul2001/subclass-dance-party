var Dancer1 = function(top, left, timeBetweenSteps) {
  //console.log(top,left);
  //Dancer 1
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class = "classydancer" src="https://cdn1.otakon.com/media/filer_public_thumbnails/filer_public/17/e8/17e8c777-4b9e-4b35-a008-87bf7fbf47dc/dance.png__300x293_q85_subsampling-2_upscale.png" height = 200 width = 200>');       
  this.setPosition(top, left); 
};

Dancer1.prototype = Object.create(Dancer.prototype);
Dancer1.prototype.constructor = Dancer1;

Dancer1.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // call that property
  //oldStep();
  Dancer.prototype.step.call(this); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this.$node.toggle();
};
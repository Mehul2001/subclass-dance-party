var Dancer2 = function(top, left, timeBetweenSteps) {
  // Dancer2
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class = "popdancer" src="http://www.pngonly.com/wp-content/uploads/2017/06/Snoopy-Dancing-PNG-Picture.png" height = 200, width = 200>');  
  this.setPosition(top, left);               
};

Dancer2.prototype = Object.create(Dancer.prototype);
Dancer2.prototype.constructor = Dancer1;

Dancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // call that property
  //oldStep();
  Dancer.prototype.step.call(this); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this.$node.toggle();
};


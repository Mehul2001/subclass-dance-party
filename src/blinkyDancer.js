// PseudoClassical Style
// Dancer - superclass
// blinkydancer - subclass
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  // this = the new blinky dancer
  Dancer.call(this, top, left, timeBetweenSteps);   
  //this.$node = $('<span class="dancer"></span>');                                            
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // call that property
  //oldStep();
  Dancer.prototype.step.call(this); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.toggle();
};
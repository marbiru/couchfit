// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView(".view-main", {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on("deviceready", function() {
  console.log("Device is ready!");
});

// actual app js

$$("#submit").click(function() {
  var depth = $$("#depth").val();

  var height = $$("#height").val();

  var height_to_arm = $$("#height_to_arm").val();

  var tilt_width =
    (depth * height) / (depth ^ (2 + (height - height_to_arm)) ^ 2 ^ (1 / 2));

  tilt_width_output.innerHTML = tilt_width;
});

// (depth * height) / (depth ^ (2 + (height - height_to_arm)) ^ 2 ^ (1 / 2))

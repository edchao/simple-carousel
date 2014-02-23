simple-carousel
===============

A simpleton's jquery carousel plugin.

##### How to Use

	<div class="carousel">
		<div>Item 1 Content Here</div>
		<div>Item 2 Content Here</div>
		...
	</div>
	<button class="carousel-fwd">Forward</button>
	<button class="carousel-back">Backward</button>
	

Each item of your carousel should be wrapped in a div and contained under a div with the class '.carousel'. See above snippet.  You can have "unlimited" items.


##### Options

This is mainly just for me to start learning how to write plugins so there's no real fancy options other than the speed of the transition. You can specify this by passing 'speed: <value_in_milliseconds>' to the plugin.

	$('.carousel').carousel({speed:1000}); 

##### Appearance

The scss file is stupidly short. So you do whatever you like.
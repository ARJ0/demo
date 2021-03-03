/**
 *	Custom Front-end JS code
 */
 
jQuery(document).ready(function() {
	
	var	searchScreen = jQuery('#search-screen'),
		searchInput	 = jQuery('.top_search_field'),
		cancelSearch = jQuery('.cancel_search');
	
	searchScreen.hide();
	
	jQuery('#search-btn').on('click', function() {
		searchScreen.fadeIn(200);
		searchInput.focus();
	});
	
	cancelSearch.on('click', function(e) {
		searchScreen.fadeOut(200);
		jQuery('#search-btn').focus();
	});
	
	jQuery('#go-to-field').on('focus', function() {
		jQuery(this).siblings('input[type="text"]').focus();
	});
	
	jQuery('#go-to-close').on('focus', function() {
		jQuery(this).siblings('button.cancel_search').focus();
	});
	
	// Navigation
	jQuery('.menu-link').bigSlide({
		easyClose	: true,
		width		: '25em',
		side		: 'right',
		afterOpen	: function() {
				    	jQuery('#close-menu').focus();
			    	},
		afterClose: function() {
				    	jQuery('#mobile-nav-btn').focus();
			      }
    });
  
  	jQuery('.go-to-top').on('focus', function() {
		jQuery('#close-menu').focus();
	});
	
	jQuery('.go-to-bottom').on('focus', function() {
		jQuery('ul#menu-main > li:last-child > a').focus();
	});
	
	var parentElement =	jQuery('.panel li.menu-item-has-children'),
      dropdown		=	jQuery('.panel li.menu-item-has-children span');
	  
	parentElement.children('ul').hide();
	dropdown.on({
		'click': function(e) {
			jQuery(this).siblings('ul').slideToggle().toggleClass('expanded');
			e.stopPropagation();
		},
		'keydown': function(e) {
			if( e.keyCode == 32 || e.keyCode == 13 ) {
				e.preventDefault();
				jQuery(this).siblings('ul').slideToggle().toggleClass('expanded');
				e.stopPropagation();
			}
		}
	});
	
	
	// Owl Slider
	var catSliders = [];
	
	for (catSlider in window) {
	    if ( catSlider.indexOf("cat_slider") != -1 ) {
		    catSliders.push( window[catSlider] );
	    }
    };
    catSliders.forEach( function( item ) {
	    var slider = jQuery("#" + item.id).find('.cat-slider');
	    slider.owlCarousel({
		    items: 1,
		    loop: true,
		    autoplay: true,
		    dots: false,
		    nav: true
	    });
    });
	
	
	// Tab Widget
	var tabWidgets = [];
    
    for (tabWidget in window) {
	    if ( tabWidget.indexOf("tab_widget") != -1 ) {
		    tabWidgets.push( window[tabWidget] );
	    }
    };
    tabWidgets.forEach( function( item ) {
	    
	    var widget 			=	jQuery("#tab-category-wrapper-" + item.number),
	    	containerLeft	=	widget.find('ul').offset().left,
    		currentArrow	=	widget.find('.tabs-slider'),
    		arrowWidth		=	currentArrow.width();
    		
	    widget.tabs({
		    create: function( event, ui ) {
				
				var initialTab = ui.tab,
					initialTabLeft	=	initialTab.offset().left;
					initialTabWidth	=	initialTab.width();
					currentArrow.css('left', initialTabLeft - containerLeft + initialTabWidth/2 -10 + 'px');
		    },
		    activate: function( event, ui ) {
		    	
		    	var currentTabLeft		=	ui.newTab.offset().left,
		    		currentTabWidth		=	ui.newTab.width();
		    		
				currentArrow.animate({
									    left: currentTabLeft - containerLeft + currentTabWidth/2 - 10 + 'px'
									},
									{
										duration: 300
									});
	    	}
	    });
	});
});
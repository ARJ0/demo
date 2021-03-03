<?php
/**
 * Default theme options.
 *
 * @package CorpoBell
 */

if ( ! function_exists( 'corpobell_get_default_theme_options' ) ) :

	/**
	 * Get default theme options.
	 *
	 * @since 1.0.0
	 *
	 * @return array Default theme options.
	 */
function corpobell_get_default_theme_options() {

	$theme_data = wp_get_theme();
	$defaults = array();

	$defaults['disable_homepage_content_section']	= true;

	// Featured Slider Section
	$defaults['disable_featured-slider_section']	= false;
	$defaults['slider_speed']						= 800;
	
	// About Section
	$defaults['disable_about_section']	= false;
	$defaults['about_title']	   	 		= esc_html__( 'About Us', 'corpobell' );


	// Our Service Section
	$defaults['disable_services_section']	= false;
	$defaults['service_title']	   	 		= esc_html__( 'Our Services', 'corpobell' );
	$defaults['number_of_service_items']	= 6;

	// gallery Section
	$defaults['disable_gallery_section']	= false;
	$defaults['gallery_title']	   	 		= esc_html__( 'Our Gallery', 'corpobell' );

	// Team Section
	$defaults['disable_team_section']	= false;
	$defaults['team_title']	   	 		= esc_html__( 'Our Team', 'corpobell' );

	//Cta Section	
	$defaults['disable_cta_section']	   	= false;;
	$defaults['cta_button_label']	   	 	= esc_html__( 'Purchase Now', 'corpobell' );
	$defaults['cta_alt_button_label']	   	= esc_html__( 'Contact Us', 'corpobell' );
	$defaults['cta_alt_button_url']	   	 	= '#';

	// Blog Section
	$defaults['disable_blog_section']		= false;
	$defaults['blog_title']	   	 			= esc_html__( 'Latest Post', 'corpobell' ); 

	//General Section
	$defaults['blog_readmore_text']				= esc_html__('Read More','corpobell');
	$defaults['excerpt_length']					= 40;
	$defaults['layout_options_blog']			= 'no-sidebar';
	$defaults['layout_options_archive']			= 'right-sidebar';
	$defaults['layout_options_page']			= 'right-sidebar';	
	$defaults['layout_options_single']			= 'right-sidebar';	


	//Footer section 		
	$defaults['copyright_text']				= esc_html__( 'Copyright &copy; All rights reserved.', 'corpobell' );

	// Pass through filter.
	$defaults = apply_filters( 'corpobell_filter_default_theme_options', $defaults );
	return $defaults;
}

endif;

/**
*  Get theme options
*/
if ( ! function_exists( 'corpobell_get_option' ) ) :

	/**
	 * Get theme option
	 *
	 * @since 1.0.0
	 *
	 * @param string $key Option key.
	 * @return mixed Option value.
	 */
	function corpobell_get_option( $key ) {

		$default_options = corpobell_get_default_theme_options();
		if ( empty( $key ) ) {
			return;
		}

		$theme_options = (array)get_theme_mod( 'theme_options' );
		$theme_options = wp_parse_args( $theme_options, $default_options );

		$value = null;

		if ( isset( $theme_options[ $key ] ) ) {
			$value = $theme_options[ $key ];
		}

		return $value;

	}

endif;
<?php
/**
 * Gallery options.
 *
 * @package CorpoBell
 */

$default = corpobell_get_default_theme_options();

// Gallery Section
$wp_customize->add_section( 'section_home_gallery',
	array(
		'title'      => __( ' Gallery Section', 'corpobell' ),
		'priority'   => 50,
		'capability' => 'edit_theme_options',
		'panel'      => 'home_page_panel',
		)
);

$wp_customize->add_setting( 'theme_options[disable_gallery_section]',
	array(
		'default'           => $default['disable_gallery_section'],
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'corpobell_sanitize_switch_control',
	)
);
$wp_customize->add_control( new CorpoBell_Switch_Control( $wp_customize, 'theme_options[disable_gallery_section]',
    array(
		'label' 			=> __('Enable/Disable Gallery Section', 'corpobell'),
		'section'    		=> 'section_home_gallery',
		'settings'  		=> 'theme_options[disable_gallery_section]',
		'on_off_label' 		=> corpobell_switch_options(),
    )
) );

//Gallery Section title
$wp_customize->add_setting('theme_options[gallery_title]', 
	array(
	'default'           => $default['gallery_title'],
	'type'              => 'theme_mod',
	'capability'        => 'edit_theme_options',	
	'sanitize_callback' => 'sanitize_text_field'
	)
);

$wp_customize->add_control('theme_options[gallery_title]', 
	array(
	'label'       => __('Section Title', 'corpobell'),
	'section'     => 'section_home_gallery',   
	'settings'    => 'theme_options[gallery_title]',
	'active_callback' => 'corpobell_gallery_active',		
	'type'        => 'text'
	)
);

// Setting  Gallery Category.
$wp_customize->add_setting( 'theme_options[gallery_category]',
	array(

	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'absint',
	)
);
$wp_customize->add_control(
	new CorpoBell_Dropdown_Taxonomies_Control( $wp_customize, 'theme_options[gallery_category]',
		array(
		'label'    => __( 'Select Category', 'corpobell' ),
		'section'  => 'section_home_gallery',
		'settings' => 'theme_options[gallery_category]',	
		'active_callback' => 'corpobell_gallery_active',		
		)
	)
);

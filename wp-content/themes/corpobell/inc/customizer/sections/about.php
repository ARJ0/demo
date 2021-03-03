<?php
/**
 * About options.
 *
 * @package CorpoBell
 */

$default = corpobell_get_default_theme_options();

// About Section
$wp_customize->add_section( 'section_home_about',
	array(
		'title'      => __( 'About Section', 'corpobell' ),
		'priority'   => 15,
		'capability' => 'edit_theme_options',
		'panel'      => 'home_page_panel',
		)
);

$wp_customize->add_setting( 'theme_options[disable_about_section]',
	array(
		'default'           => $default['disable_about_section'],
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'corpobell_sanitize_switch_control',
	)
);
$wp_customize->add_control( new CorpoBell_Switch_Control( $wp_customize, 'theme_options[disable_about_section]',
    array(
		'label' 			=> __('Enable/Disable About Section', 'corpobell'),
		'section'    		=> 'section_home_about',
		 'settings'  		=> 'theme_options[disable_about_section]',
		'on_off_label' 		=> corpobell_switch_options(),
    )
) );


// Cta Background Image
$wp_customize->add_setting('theme_options[background_about_section]', 
	array(
	'type'              => 'theme_mod',
	'capability'        => 'edit_theme_options',	
	'sanitize_callback' => 'corpobell_sanitize_image'
	)
);

$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize,
	'theme_options[background_about_section]', 
	array(
	'label'       => __('Background Image', 'corpobell'),
	'section'     => 'section_home_about',   
	'settings'    => 'theme_options[background_about_section]',		
	'active_callback' => 'corpobell_about_active',
	'type'        => 'image',
	)
	)
);

//About Section title
$wp_customize->add_setting('theme_options[about_title]', 
	array(
	'default'           => $default['about_title'],
	'type'              => 'theme_mod',
	'capability'        => 'edit_theme_options',	
	'sanitize_callback' => 'sanitize_text_field'
	)
);

$wp_customize->add_control('theme_options[about_title]', 
	array(
	'label'       => __('Section Title', 'corpobell'),
	'section'     => 'section_home_about',   
	'settings'    => 'theme_options[about_title]',
	'active_callback' => 'corpobell_about_active',		
	'type'        => 'text'
	)
);

for( $i=1; $i<=4; $i++ ){

		//About Section icon
	$wp_customize->add_setting('theme_options[about_icon_'.$i.']', 
		array(
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',	
		'sanitize_callback' => 'sanitize_text_field'
		)
	);

	$wp_customize->add_control('theme_options[about_icon_'.$i.']', 
		array(
		'label'       => sprintf( __('Icon #%1$s', 'corpobell'), $i),
		'description' => sprintf( __('Please input icon as eg: fa-archive. Find Font-awesome icons %1$shere%2$s', 'corpobell'), '<a href="' . esc_url( 'https://fontawesome.com/v4.7.0/cheatsheet/' ) . '" target="_blank">', '</a>' ),
		'section'     => 'section_home_about',   
		'settings'    => 'theme_options[about_icon_'.$i.']',
		'active_callback' => 'corpobell_about_active',		
		'type'        => 'text'
		)
	);

	// Additional Information First Page
	$wp_customize->add_setting('theme_options[about_page_'.$i.']', 
		array(
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',	
		'sanitize_callback' => 'corpobell_dropdown_pages'
		)
	);

	$wp_customize->add_control('theme_options[about_page_'.$i.']', 
		array(
		'label'       => sprintf( __('Select Page #%1$s', 'corpobell'), $i),
		'section'     => 'section_home_about',   
		'settings'    => 'theme_options[about_page_'.$i.']',		
		'type'        => 'dropdown-pages',
		'active_callback' => 'corpobell_about_active',
		)
	);
	// about hr setting and control
	$wp_customize->add_setting( 'theme_options[about_hr_'. $i .']', array(
		'sanitize_callback' => 'sanitize_text_field'
	) );

	$wp_customize->add_control( new CorpoBell_Customize_Horizontal_Line( $wp_customize, 'theme_options[about_hr_'. $i .']',
		array(
			'section'         => 'section_home_about',
			'active_callback' => 'corpobell_about_active',
			'type'			  => 'hr',
	) ) );
}


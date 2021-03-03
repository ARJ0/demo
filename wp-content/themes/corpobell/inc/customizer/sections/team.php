<?php
/**
 * Team options.
 *
 * @package CorpoBell
 */

$default = corpobell_get_default_theme_options();

// Team Section
$wp_customize->add_section( 'section_home_team',
	array(
		'title'      => __( 'Team Section', 'corpobell' ),
		'priority'   => 35,
		'capability' => 'edit_theme_options',
		'panel'      => 'home_page_panel',
		)
);

$wp_customize->add_setting( 'theme_options[disable_team_section]',
	array(
		'default'           => $default['disable_team_section'],
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'corpobell_sanitize_switch_control',
	)
);
$wp_customize->add_control( new CorpoBell_Switch_Control( $wp_customize, 'theme_options[disable_team_section]',
    array(
		'label' 			=> __('Enable/Disable Team Section', 'corpobell'),
		'section'    		=> 'section_home_team',
		 'settings'  		=> 'theme_options[disable_team_section]',
		'on_off_label' 		=> corpobell_switch_options(),
    )
) );

//Team Section title
$wp_customize->add_setting('theme_options[team_title]', 
	array(
	'default'           => $default['team_title'],
	'type'              => 'theme_mod',
	'capability'        => 'edit_theme_options',	
	'sanitize_callback' => 'sanitize_text_field'
	)
);

$wp_customize->add_control('theme_options[team_title]', 
	array(
	'label'       => __('Section Title', 'corpobell'),
	'section'     => 'section_home_team',   
	'settings'    => 'theme_options[team_title]',
	'active_callback' => 'corpobell_team_active',		
	'type'        => 'text'
	)
);

for( $i=1; $i<=4; $i++ ){

	// Additional Information First Page
	$wp_customize->add_setting('theme_options[team_page_'.$i.']', 
		array(
		'type'              => 'theme_mod',
		'capability'        => 'edit_theme_options',	
		'sanitize_callback' => 'corpobell_dropdown_pages'
		)
	);

	$wp_customize->add_control('theme_options[team_page_'.$i.']', 
		array(
		'label'       => sprintf( __('Select Page #%1$s', 'corpobell'), $i),
		'section'     => 'section_home_team',   
		'settings'    => 'theme_options[team_page_'.$i.']',		
		'type'        => 'dropdown-pages',
		'active_callback' => 'corpobell_team_active',
		)
	);

	// team title setting and control
	$wp_customize->add_setting( 'theme_options[team_custom_position_' . $i . ']', array(
		'type'              => 'theme_mod',
		'sanitize_callback' => 'sanitize_text_field',
	) );

	$wp_customize->add_control( 'theme_options[team_custom_position_' . $i . ']', array(
		'label'           	=> sprintf( __( 'Position %d', 'corpobell' ), $i ),
		'section'        	=> 'section_home_team',
		'settings'    		=> 'theme_options[team_custom_position_'.$i.']',	
		'active_callback' 	=> 'corpobell_team_active',
		'type'				=> 'text',
	) );

	// team hr setting and control
	$wp_customize->add_setting( 'theme_options[team_hr_'. $i .']', array(
		'sanitize_callback' => 'sanitize_text_field'
	) );

	$wp_customize->add_control( new CorpoBell_Customize_Horizontal_Line( $wp_customize, 'theme_options[team_hr_'. $i .']',
		array(
			'label'             => __( '<hr style="width: 100%; border: 2px #bcb1b1 solid;"/>', 'corpobell' ),
			'section'         => 'section_home_team',
			'active_callback' => 'corpobell_team_active',
			'type'			  => 'hr',
	) ) );
}

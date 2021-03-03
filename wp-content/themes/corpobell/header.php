<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CorpoBell
 */
/**
* Hook - corpobell_action_doctype.
*
* @hooked corpobell_doctype -  10
*/
do_action( 'corpobell_action_doctype' );
?>
<head>
<?php
/**
* Hook - corpobell_action_head.
*
* @hooked corpobell_head -  10
*/
do_action( 'corpobell_action_head' );
?>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php do_action( 'wp_body_open' ); ?>
<?php

/**
* Hook - corpobell_action_before.
*
* @hooked corpobell_page_start - 10
*/
do_action( 'corpobell_action_before' );

/**
*
* @hooked corpobell_header_start - 10
*/
do_action( 'corpobell_action_before_header' );

/**
*
*@hooked corpobell_site_branding - 10
*@hooked corpobell_header_end - 15 
*/
do_action('corpobell_action_header');

/**
*
* @hooked corpobell_content_start - 10
*/
do_action( 'corpobell_action_before_content' );

/**
 * Banner start
 * 
 * @hooked corpobell_banner_header - 10
*/
do_action( 'corpobell_banner_header' );  

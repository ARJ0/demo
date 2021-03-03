<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CorpoBell
 */

/**
 *
 * @hooked corpobell_footer_start
 */
do_action( 'corpobell_action_before_footer' );

/**
 * Hooked - corpobell_footer_top_section -10
 * Hooked - corpobell_footer_section -20
 */
do_action( 'corpobell_action_footer' );

/**
 * Hooked - corpobell_footer_end. 
 */
do_action( 'corpobell_action_after_footer' );

wp_footer(); ?>

</body>  
</html>
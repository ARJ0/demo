<?php 
/**
 * List of posts for post choices.
 * @return Array Array of post ids and name.
 */
function corpobell_post_choices() {
    $posts = get_posts( array( 'numberposts' => -1 ) );
    $choices = array();
    $choices[0] = esc_html__( '--Select--', 'corpobell' );
    foreach ( $posts as $post ) {
        $choices[ $post->ID ] = $post->post_title;
    }
    return  $choices;
}

if ( ! function_exists( 'corpobell_switch_options' ) ) :
    /**
     * List of custom Switch Control options
     * @return array List of switch control options.
     */
    function corpobell_switch_options() {
        $arr = array(
            'on'        => esc_html__( 'On', 'corpobell' ),
            'off'       => esc_html__( 'Off', 'corpobell' )
        );
        return apply_filters( 'corpobell_switch_options', $arr );
    }
endif;


 /**
 * Get an array of google fonts.
 * 
 */
function corpobell_font_choices() {
    $font_family_arr = array();
    $font_family_arr[''] = esc_html__( '--Default--', 'corpobell' );

    // Make the request
    $request = wp_remote_get( get_theme_file_uri( 'assets/fonts/webfonts.json' ) );

    if( is_wp_error( $request ) ) {
        return false; // Bail early
    }
    // Retrieve the data
    $body = wp_remote_retrieve_body( $request );
    $data = json_decode( $body );
    if ( ! empty( $data ) ) {
        foreach ( $data->items as $items => $fonts ) {
            $family_str_arr = explode( ' ', $fonts->family );
            $family_value = implode( '-', array_map( 'strtolower', $family_str_arr ) );
            $font_family_arr[ $family_value ] = $fonts->family;
        }
    }

    return apply_filters( 'corpobell_font_choices', $font_family_arr );
}

if ( ! function_exists( 'corpobell_typography_options' ) ) :
    /**
     * Returns list of typography
     * @return array font styles
     */
    function corpobell_typography_options(){
        $choices = array(
            'default'         => esc_html__( 'Default', 'corpobell' ),
            'header-font-1'   => esc_html__( 'Raleway', 'corpobell' ),
            'header-font-2'   => esc_html__( 'Poppins', 'corpobell' ),
            'header-font-3'   => esc_html__( 'Montserrat', 'corpobell' ),
            'header-font-4'   => esc_html__( 'Open Sans', 'corpobell' ),
            'header-font-5'   => esc_html__( 'Lato', 'corpobell' ),
            'header-font-6'   => esc_html__( 'Shadows Into Light', 'corpobell' ),
            'header-font-7'   => esc_html__( 'Playfair Display', 'corpobell' ),
            'header-font-8'   => esc_html__( 'Lora', 'corpobell' ),
            'header-font-9'   => esc_html__( 'Titillium Web', 'corpobell' ),
            'header-font-10'   => esc_html__( 'Muli', 'corpobell' ),
            'header-font-11'   => esc_html__( 'Oxygen', 'corpobell' ),
            'header-font-12'   => esc_html__( 'Nunito Sans', 'corpobell' ),
            'header-font-13'   => esc_html__( 'Maven Pro', 'corpobell' ),
            'header-font-14'   => esc_html__( 'Cairo', 'corpobell' ),
            'header-font-15'   => esc_html__( 'Philosopher', 'corpobell' ),
        );

        $output = apply_filters( 'corpobell_typography_options', $choices );
        if ( ! empty( $output ) ) {
            ksort( $output );
        }

        return $output;
    }
endif;


if ( ! function_exists( 'corpobell_body_typography_options' ) ) :
    /**
     * Returns list of typography
     * @return array font styles
     */
    function corpobell_body_typography_options(){
        $choices = array(
            'default'         => esc_html__( 'Default', 'corpobell' ),
            'body-font-1'     => esc_html__( 'Raleway', 'corpobell' ),
            'body-font-2'     => esc_html__( 'Poppins', 'corpobell' ),
            'body-font-3'     => esc_html__( 'Roboto', 'corpobell' ),
            'body-font-4'     => esc_html__( 'Open Sans', 'corpobell' ),
            'body-font-5'     => esc_html__( 'Lato', 'corpobell' ),
            'body-font-6'   => esc_html__( 'Shadows Into Light', 'corpobell' ),
            'body-font-7'   => esc_html__( 'Playfair Display', 'corpobell' ),
            'body-font-8'   => esc_html__( 'Lora', 'corpobell' ),
            'body-font-9'   => esc_html__( 'Titillium Web', 'corpobell' ),
            'body-font-10'   => esc_html__( 'Muli', 'corpobell' ),
            'body-font-11'   => esc_html__( 'Oxygen', 'corpobell' ),
            'body-font-12'   => esc_html__( 'Nunito Sans', 'corpobell' ),
            'body-font-13'   => esc_html__( 'Maven Pro', 'corpobell' ),
            'body-font-14'   => esc_html__( 'Cairo', 'corpobell' ),
            'body-font-15'   => esc_html__( 'Philosopher', 'corpobell' ),
        );

        $output = apply_filters( 'corpobell_body_typography_options', $choices );
        if ( ! empty( $output ) ) {
            ksort( $output );
        }

        return $output;
    }
endif;

 ?>
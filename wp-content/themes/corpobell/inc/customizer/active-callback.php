<?php
/**
 * Active callback functions.
 *
 * @package CorpoBell
 */

function corpobell_counter_section( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_counter_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_client_section( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_client_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}


function corpobell_testimonial_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_testimonial_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_testimonial_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[testimonial_content_type]' )->value();
    return ( corpobell_testimonial_active( $control ) && ( 'testimonial_custom' == $content_type ) );
} 

function corpobell_testimonial_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[testimonial_content_type]' )->value();
    return ( corpobell_testimonial_active( $control ) && ( 'testimonial_page' == $content_type ) );
}

function corpobell_testimonial_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[testimonial_content_type]' )->value();
    return ( corpobell_testimonial_active( $control ) && ( 'testimonial_post' == $content_type ) );
}

function corpobell_testimonial_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[testimonial_content_type]' )->value();
    return ( corpobell_testimonial_active( $control ) && ( 'testimonial_category' == $content_type ) );
}

function corpobell_gallery_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_gallery_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_gallery_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[gallery_content_type]' )->value();
    return ( corpobell_gallery_active( $control ) && ( 'gallery_custom' == $content_type ) );
} 

function corpobell_gallery_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[gallery_content_type]' )->value();
    return ( corpobell_gallery_active( $control ) && ( 'gallery_page' == $content_type ) );
}

function corpobell_gallery_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[gallery_content_type]' )->value();
    return ( corpobell_gallery_active( $control ) && ( 'gallery_post' == $content_type ) );
}

function corpobell_gallery_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[gallery_content_type]' )->value();
    return ( corpobell_gallery_active( $control ) && ( 'gallery_category' == $content_type ) );
}

function corpobell_video_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_video_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}


function corpobell_pricing_section( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_pricing_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}



function corpobell_team_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_team_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_team_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[team_content_type]' )->value();
    return ( corpobell_team_active( $control ) && ( 'team_custom' == $content_type ) );
} 

function corpobell_team_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[team_content_type]' )->value();
    return ( corpobell_team_active( $control ) && ( 'team_page' == $content_type ) );
}

function corpobell_team_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[team_content_type]' )->value();
    return ( corpobell_team_active( $control ) && ( 'team_post' == $content_type ) );
}

function corpobell_team_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[team_content_type]' )->value();
    return ( corpobell_team_active( $control ) && ( 'team_category' == $content_type ) );
}



function corpobell_services_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_services_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_services_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[service_content_type]' )->value();
    return ( corpobell_services_active( $control ) && ( 'service_page' == $content_type ) );
}

function corpobell_services_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[service_content_type]' )->value();
    return ( corpobell_services_active( $control ) && ( 'service_post' == $content_type ) );
}

function corpobell_services_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[service_content_type]' )->value();
    return ( corpobell_services_active( $control ) && ( 'service_category' == $content_type ) );
}

function corpobell_services_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[service_content_type]' )->value();
    return ( corpobell_services_active( $control ) && ( 'service_custom' == $content_type ) );
}

function corpobell_services_seperator( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[service_content_type]' )->value();
    return  corpobell_services_seperator( $control ) && ( in_array( $content_type, array( 'service_page', 'service_post', 'service_custom' ) ) ) ;
}

function corpobell_services_seperator_image( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[home_page_layout_content_type]' )->value();
    return ( corpobell_services_active( $control ) && ( 'home-two' == $content_type ) );
}

function corpobell_services_icon_active( $control ) {
    if(($control->manager->get_setting( 'theme_options[disable_services_icon]' )->value() == true ) ) {
        return true;
    }else{
        return false;
    }
}


function corpobell_course_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_course_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_course_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[course_content_type]' )->value();
    return ( corpobell_course_active( $control ) && ( 'course_page' == $content_type ) );
}

function corpobell_course_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[course_content_type]' )->value();
    return ( corpobell_course_active( $control ) && ( 'course_post' == $content_type ) );
}

function corpobell_course_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[course_content_type]' )->value();
    return ( corpobell_course_active( $control ) && ( 'course_category' == $content_type ) );
}

function corpobell_course_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[course_content_type]' )->value();
    return ( corpobell_course_active( $control ) && ( 'course_custom' == $content_type ) );
}

function corpobell_course_seperator( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[course_content_type]' )->value();
    return  corpobell_course_seperator( $control ) && ( in_array( $content_type, array( 'course_page', 'course_post', 'course_custom' ) ) ) ;
}

function corpobell_course_icon( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[home_page_layout_content_type]' )->value();
    return ( corpobell_course_active( $control ) && ( 'home-two' == $content_type ) );
}

function corpobell_kidproduct_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_kidproduct_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_kidproduct_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[kidproduct_content_type]' )->value();
    return ( corpobell_kidproduct_active( $control ) && ( 'kidproduct_page' == $content_type ) );
}

function corpobell_kidproduct_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[kidproduct_content_type]' )->value();
    return ( corpobell_kidproduct_active( $control ) && ( 'kidproduct_post' == $content_type ) );
}

function corpobell_kidproduct_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[kidproduct_content_type]' )->value();
    return ( corpobell_kidproduct_active( $control ) && ( 'kidproduct_category' == $content_type ) );
}

function corpobell_kidproduct_product( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[kidproduct_content_type]' )->value();
    return ( corpobell_kidproduct_active( $control ) && ( 'product' == $content_type ) );
}

function corpobell_kidproduct_seperator( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[kidproduct_content_type]' )->value();
    return  corpobell_kidproduct_seperator( $control ) && ( in_array( $content_type, array( 'kidproduct_page', 'kidproduct_post', 'kidproduct_custom' ) ) ) ;
}


function corpobell_about_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_about_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_about_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[about_content_type]' )->value();
    return ( corpobell_about_active( $control ) && ( 'about_custom' == $content_type ) );
} 

function corpobell_about_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[about_content_type]' )->value();
    return ( corpobell_about_active( $control ) && ( 'about_page' == $content_type ) );
}

function corpobell_about_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[about_content_type]' )->value();
    return ( corpobell_about_active( $control ) && ( 'about_post' == $content_type ) );
}

function corpobell_about_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[about_content_type]' )->value();
    return ( corpobell_about_active( $control ) && ( 'about_category' == $content_type ) );
}


function corpobell_slider_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_featured-slider_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_slider_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[slider_content_type]' )->value();
    return ( corpobell_slider_active( $control ) && ( 'slider_page' == $content_type ) );
}

function corpobell_slider_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[slider_content_type]' )->value();
    return ( corpobell_slider_active( $control ) && ( 'slider_post' == $content_type ) );
}

function corpobell_slider_seperator( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[slider_content_type]' )->value();
    return  corpobell_slider_seperator( $control ) && ( in_array( $content_type, array( 'slider_page', 'slider_post', 'slider_custom' ) ) ) ;
}

function corpobell_slider_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[slider_content_type]' )->value();
    return ( corpobell_slider_active( $control ) && ( 'slider_custom' == $content_type ) );
}

function corpobell_slider_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[slider_content_type]' )->value();
    return ( corpobell_slider_active( $control ) && ( 'slider_category' == $content_type ) );
}



function corpobell_cta_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_cta_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_cta_custom( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[cta_content_type]' )->value();
    return ( corpobell_cta_active( $control ) && ( 'cta_custom' == $content_type ) );
} 

function corpobell_cta_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[cta_content_type]' )->value();
    return ( corpobell_cta_active( $control ) && ( 'cta_page' == $content_type ) );
}

function corpobell_cta_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[cta_content_type]' )->value();
    return ( corpobell_cta_active( $control ) && ( 'cta_post' == $content_type ) );
}

function corpobell_blog_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_blog_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_blog_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[blog_content_type]' )->value();
    return ( corpobell_blog_active( $control ) && ( 'blog_page' == $content_type ) );
}

function corpobell_blog_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[blog_content_type]' )->value();
    return ( corpobell_blog_active( $control ) && ( 'blog_post' == $content_type ) );
}

function corpobell_blog_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[blog_content_type]' )->value();
    return ( corpobell_blog_active( $control ) && ( 'blog_category' == $content_type ) );
}



function corpobell_latest_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[disable_latest_section]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}

function corpobell_latest_page( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[latest_content_type]' )->value();
    return ( corpobell_latest_active( $control ) && ( 'latest_page' == $content_type ) );
}

function corpobell_latest_post( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[latest_content_type]' )->value();
    return ( corpobell_latest_active( $control ) && ( 'latest_post' == $content_type ) );
}

function corpobell_latest_category( $control ) {
    $content_type = $control->manager->get_setting( 'theme_options[latest_content_type]' )->value();
    return ( corpobell_latest_active( $control ) && ( 'latest_category' == $content_type ) );
}

/**
 * Active Callback for top bar section
 */
function corpobell_contact_info_ac( $control ) {

    $show_contact_info = $control->manager->get_setting( 'theme_options[show_header_contact_info]')->value();
    $control_id        = $control->id;
         
    if ( $control_id == 'theme_options[header_location]' && $show_contact_info ) return true;
    if ( $control_id == 'theme_options[header_email]' && $show_contact_info ) return true;
    if ( $control_id == 'theme_options[header_phone]' && $show_contact_info ) return true;

    return false;
}

function corpobell_social_links_active( $control ) {
    if( $control->manager->get_setting( 'theme_options[show_header_social_links]' )->value() == true ) {
        return true;
    }else{
        return false;
    }
}
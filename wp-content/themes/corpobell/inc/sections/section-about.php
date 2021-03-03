<?php 
/**
 * Template part for displaying About Section
 *
 *@package CorpoBell
 */

    $about_title       = corpobell_get_option( 'about_title' );
    $background_about_section     = corpobell_get_option( 'background_about_section' );
    for( $i=1; $i<=4; $i++ ) :
        $about_page_posts[] = absint(corpobell_get_option( 'about_page_'.$i ) );
        $about_icon   = corpobell_get_option( 'about_icon_'.$i );
    endfor;
    ?>
    
    <article>
        <?php if(!empty($background_about_section)) : ?>
            <div class="featured-image" style="background-image: url('<?php echo esc_url($background_about_section) ?>');">
            </div><!-- .featured-image -->
        <?php endif; ?>
        <div class="entry-container">
            <?php if( !empty($about_title) ):?>
                <div class="section-header">
                <?php if( !empty($about_title)):?>
                    <h2 class="section-title"><?php echo esc_html($about_title);?></h2>
                <?php endif;?>
                </div> 
            <?php endif; ?>
            <?php $args = array (
                'post_type'     => 'page',
                'post_per_page' => count( $about_page_posts ),
                'post__in'      => $about_page_posts,
                'orderby'       =>'post__in',
                
            ); 
                $loop = new WP_Query($args);                        
                if ( $loop->have_posts() ) :
                    $i=0;  
                    while ($loop->have_posts()) : $loop->the_post(); $i++;?>    
                        <div class="about-item-wrapper">
                            <?php 
                            $about_icon = corpobell_get_option( 'about_icon_'.$i );
                            if ( !empty($about_icon) ) { ?>
                                <div class="icon-container">
                                    <a href="<?php the_permalink();?>">
                                    <i class="fa <?php echo esc_attr( $about_icon)?>"></i>
                                </a>
                                </div>
                            <?php  } ?>

                            <div class="about-content">
                                <header class="entry-header">
                                    <h2 class="entry-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
                                </header>

                                <div class="entry-content">
                                    <?php
                                        $excerpt = corpobell_the_excerpt( 7 );
                                        echo wp_kses_post( wpautop( $excerpt ) );
                                    ?>
                                </div><!-- .entry-content -->
                            </div>
                        </div>
                    <?php endwhile;?>
                <?php endif;?>
                <?php wp_reset_postdata(); ?>
    </article> 
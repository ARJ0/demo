<?php 
/**
 * Template part for displaying Gallery Section
 *
 *@package CorpoBell
 */

    $gallery_title       = corpobell_get_option( 'gallery_title' );
    $gallery_category = corpobell_get_option( 'gallery_category' );
    ?>
    <div class="wrapper"> 
        <?php if( !empty($gallery_title) ):?>
            <div class="section-header">
                <?php if( !empty($gallery_title)):?>
                    <h2 class="section-title"><?php echo esc_html($gallery_title);?></h2>
                <?php endif;?>
            </div>       
        <?php endif;?>       
        <div class="section-content gallery-popup col-3">
               <?php 
                    $args = array (
                        'posts_per_page' => 9,              
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'paged' => 1,
                        'ignore_sticky_posts' => true, 
                    );
                    if ( absint( $gallery_category ) > 0 ) {
                        $args['cat'] = absint( $gallery_category );
                    }
                $loop = new WP_Query($args);                        
                if ( $loop->have_posts() ) :
                    $i=0;  
                    while ($loop->have_posts()) : $loop->the_post(); $i++; ?> 
                        <article>
                            <div class="gallery-item-wrapper">
                                <div class="gallery-overlay">
                                    <div class="overlay-bg"></div>
                                </div><!-- .gallery-overlay -->
                                <div class="featured-image">
                                    <img src="<?php the_post_thumbnail_url( 'corpobell-gallery');?>">
                                </div><!-- .featured-image -->
                                <div class="entry-container">
                                    <a href="<?php the_post_thumbnail_url( '');?>" class="popup"><i class="fa fa-plus"></i></a>
                                    <header class="entry-header">
                                        <h2 class="entry-title"><?php the_title(); ?></h2>
                                    </header>
                                </div><!-- .entry-container -->
                            </div><!-- .gallery-item-wrapper -->
                        </article>                      
                    <?php endwhile;?>
                <?php endif; ?>
            <?php wp_reset_postdata(); ?>
        </div>  
    </div>

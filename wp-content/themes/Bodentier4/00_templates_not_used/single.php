<?php
/*
Template Name: single.php
*/
?>

<?php get_header(); ?>
 
   <div id="main">
       
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
         <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
         <div id="meta">
            <p>erstellt am: <?php the_date('d.m.Y'); ?> | 
            von: <?php the_author(); ?> | 
            Kategorie(n): <?php the_category(', '); ?></p>
         </div>
         <div class="entry">
            <?php the_content(); ?>
         </div>
      <?php endwhile; endif; ?>
       
   </div><!-- main -->
    
   <div id="sidebar">
      <?php get_sidebar(); ?>
   </div><!-- sidebar --> 
 
<?php get_footer(); ?>
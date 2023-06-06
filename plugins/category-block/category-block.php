<?php
/**
 * Plugin Name: Bloque de Categoría
 * Description: Bloque personalizado para mostrar títulos y descripciones con estilos basados en la categoría.
 * Version: 1.0
 * Author: Jesus Antonio Jimenez Jaimes
 */

// Función para registrar el bloque
function register_category_block() {
    wp_register_script(
        'category-block-script',
        plugins_url('category-block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-editor')
    );

    register_block_type('category-block/category-block', array(
        'editor_script' => 'category-block-script',
    ));
}
add_action('init', 'register_category_block');
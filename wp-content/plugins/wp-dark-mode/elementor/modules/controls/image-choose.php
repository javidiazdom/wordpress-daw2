<?php

defined( 'ABSPATH' ) || exit;

class WP_Dark_Mode_Control_Image_Choose extends \Elementor\Base_Data_Control {

	/**
	 * Get choose control type.
	 *
	 * Retrieve the control type, in this case `choose`.
	 *
	 * @return string Control type.
	 * @since  1.0.0
	 * @access public
	 */
	public function get_type() {
		return 'image_choose';
	}

	/**
	 * Enqueue ontrol scripts and styles.
	 *
	 * @since  1.0.0
	 * @access public
	 */
	public function enqueue() {
		// styles
		wp_register_style(
            'wp-dark-mode-css-image-choose-control',
            WP_DARK_MODE_URL . 'elementor/modules/controls/assets/css/image-choose.css', [], '1.0.0'
        );

		wp_enqueue_style( 'wp-dark-mode-css-image-choose-control' );

		// script
		wp_register_script(
            'wp-dark-mode-js-image-choose-control',
            WP_DARK_MODE_URL . 'elementor/modules/controls/assets/js/image-choose.js'
        );

		wp_enqueue_script( 'wp-dark-mode-js-image-choose-control' );
	}

	/**
	 * Render choose control output in the editor.
	 *
	 * Used to generate the control HTML in the editor using Underscore JS
	 * template. The variables for the class are available using `data` JS
	 * object.
	 *
	 * @since  1.0.0
	 * @access public
	 */
	public function content_template() {
		$control_uid = $this->get_control_uid( '{{value}}' );
		?>
        <div class="elementor-control-field">
            <label class="elementor-control-title">{{{ data.label }}}</label>
            <div class="elementor-control-input-wrapper">
                <div class="elementor-image-choices">
                    <# _.each( data.options, function( options, value ) { #>
                    <div class="image-choose-label-block">
                        <input id="<?php echo esc_attr( $control_uid ); ?>" type="radio" name="elementor-choose-{{ data.name }}-{{ data._cid }}" value="{{ value }}">
                        <label class="elementor-image-choices-label" for="<?php echo esc_attr( $control_uid ); ?>" title="{{ options.title }}">
                            <img class="image_small" src="{{ options.image_small }}" alt="{{ options.title }}"/>
<!--                            <span class="image_large">-->
<!--								<img src="{{ options.image_large }}" alt="{{ options.title }}"/>-->
<!--							</span>-->
                            <span class="elementor-screen-only">{{{ options.title }}}</span>
                        </label>
                    </div>
                    <# } ); #>
                </div>
            </div>
        </div>

        <# if ( data.description ) { #>
        <div class="elementor-control-field-description">{{{ data.description }}}</div>
        <# } #>
		<?php
	}

	/**
	 * Get choose control default settings.
	 *
	 * Retrieve the default settings of the choose control. Used to return the
	 * default settings while initializing the choose control.
	 *
	 * @return array Control default settings.
	 * @since  1.0.0
	 * @access protected
	 */
	protected function get_default_settings() {
		return [
			'label_block' => true,
			'options'     => [],
		];
	}
}

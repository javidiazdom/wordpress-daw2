<?php

defined( 'ABSPATH' ) || exit();

/** if class `WP_Dark_Mode_Settings` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Settings' ) ) {

	class WP_Dark_Mode_Settings {

		private static $instance = null;
		private static $settings_api = null;

		public function __construct() {
			add_action( 'admin_init', array( $this, 'settings_fields' ) );
			add_action( 'admin_menu', array( $this, 'settings_menu' ) );
		}

		private static function if_image_settings() {
			global $wp_dark_mode_license;

			if ( ! $wp_dark_mode_license ) {
				return false;
			}

			$is_ultimate_plan = $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Ultimate Lifetime' )
			                    || $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Ultimate Yearly' )
			                    || $wp_dark_mode_license->is_valid_by( 'title', 'Lifetime Ultimate 1 Site' )
			                    || $wp_dark_mode_license->is_valid_by( 'title', 'Lifetime Ultimate 50 Sites' );

			return $wp_dark_mode_license->is_valid() && $is_ultimate_plan;
		}

		/**
		 * Registers settings section and fields
		 */
		public function settings_fields() {

			function active_filter_preview() {
				global $wp_dark_mode_license;

				if ( ! $wp_dark_mode_license ) {
					return false;
				}

				$is_ultimate_plan = $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Ultimate Lifetime' )
				                    || $wp_dark_mode_license->is_valid_by( 'title', 'WP Dark Mode Ultimate Yearly' )
				                    || $wp_dark_mode_license->is_valid_by( 'title', 'Lifetime Ultimate 1 Site' )
				                    || $wp_dark_mode_license->is_valid_by( 'title', 'Lifetime Ultimate 50 Sites' );

				return $wp_dark_mode_license->is_valid() && $is_ultimate_plan;
			}

			$time_range = [
				'00:00' => '12:00 AM',
				'01:00' => '01:00 AM',
				'02:00' => '02:00 AM',
				'03:00' => '03:00 AM',
				'04:00' => '04:00 AM',
				'05:00' => '05:00 AM',
				'06:00' => '06:00 AM',
				'07:00' => '07:00 AM',
				'08:00' => '08:00 AM',
				'09:00' => '09:00 AM',
				'10:00' => '10:00 AM',
				'11:00' => '11:00 AM',
				'12:00' => '12:00 PM',
				'13:00' => '01:00 PM',
				'14:00' => '02:00 PM',
				'15:00' => '03:00 PM',
				'16:00' => '04:00 PM',
				'17:00' => '05:00 PM',
				'18:00' => '06:00 PM',
				'19:00' => '07:00 PM',
				'20:00' => '08:00 PM',
				'21:00' => '09:00 PM',
				'22:00' => '10:00 PM',
				'23:00' => '11:00 PM',
			];

			$sections = array(
				array(
					'id'    => 'wp_dark_mode_general',
					'title' => sprintf(
                        __( '%s <span>General Settings</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-admin-tools" ></i>'
                    ),
				),
				array(
					'id'    => 'wp_dark_mode_advanced',
					'title' => sprintf(
                        __( '%s <span>Advanced Settings</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-admin-generic" ></i>'
                    ),
				),
				array(
					'id'    => 'wp_dark_mode_color',
					'title' => sprintf(
                        __( '%s <span>Color Settings</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-admin-customizer" ></i>'
                    ),
				),

				array(
					'id'    => 'wp_dark_mode_accessibility',
					'title' => sprintf( __( '%s <span>Accessibility Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-welcome-widgets-menus" ></i>'
                    ),
				),

				array(
					'id'    => 'wp_dark_mode_switch',
					'title' => sprintf( __( '%s <span>Switch Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-slides" ></i>' ),
				),

				array(
					'id'    => 'wp_dark_mode_includes_excludes',
					'title' => sprintf(
                        __( '%s <span>Includes/ Excludes</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-layout" ></i>'
                    ),
				),

				array(
					'id'    => 'wp_dark_mode_image_settings',
					'title' => sprintf(
                        __( '%s <span>Image Settings</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-format-gallery" ></i>'
                    ),
				),

				array(
					'id'    => 'wp_dark_mode_custom_css',
					'title' => sprintf(
                        __( '%s <span>Custom CSS</span>', 'wp-dark-mode' ),
                        '<i class="dashicons dashicons-editor-code" ></i>'
                    ),
				),

//todo - chart widget
//				array(
//					'id'    => 'wp_dark_mode_analytics_reporting',
//					'title' => sprintf( __( '%s <span>Analytics & Reporting</span>', 'wp-dark-mode' ),
//						'<i class="dashicons dashicons-chart-area" ></i>' ),
//				),
			);

			$fields = array(

				'wp_dark_mode_general' => apply_filters(
                    'wp_dark_mode/general', array(

						'enable_frontend' => array(
							'name'    => 'enable_frontend',
							'default' => 'on',
							'label'   => __( 'Enable Frontend Darkmode', 'wp-dark-mode' ),
							'desc'    => __( 'Turn ON to enable the darkmode in the frontend.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

						'enable_backend' => array(
							'name'    => 'enable_backend',
							'default' => 'off',
							'label'   => __( 'Enable Backend Darkmode', 'wp-dark-mode' ),
							'desc'    => __(
								'Enable the backend darkmode to display a darkmode switch button in the admin bar for the admins on the backend.',
								'wp-dark-mode'
							),
							'type'    => 'switcher',
						),

						'enable_os_mode' => array(
							'name'    => 'enable_os_mode',
							'default' => 'on',
							'label'   => __( 'Enable OS aware Dark Mode', 'wp-dark-mode' ),
							'desc'    => __(
								'Dark Mode has been activated in the frontend. Now, your users will be served a dark mode of your website when their device preference is set to Dark Mode or by switching the darkmode switch button.',
								'wp-dark-mode'
							) . '<br><br><br> <img src="' . WP_DARK_MODE_ASSETS . '/images/os-theme.gif'
										 . '" alt="">',
							'type'    => 'switcher',
						),

                    )
                ),

				'wp_dark_mode_advanced' => apply_filters(
                    'wp_dark_mode/advanced_settings', array(

						'toggle_animation' => array(
							'name'    => 'toggle_animation',
							'default' => 'off',
							'label'   => __( 'Darkmode Toggle Animation', 'wp-dark-mode' ),
							'desc'    => __( 'Enable/ disable the gradual fade-in animation between dark/white mode.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

						'default_mode'   => array(
							'name'    => 'default_mode',
							'default' => 'off',
							'label'   => __( 'Make Dark Mode Default', 'wp-dark-mode' ),
							'desc'    => __( 'Make the dark mode as the default mode. Visitors will see the dark mode first.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

						'time_based_mode'   => array(
							'name'    => 'time_based_mode',
							'default' => 'off',
							'label'   => __( 'Time Based Dark Mode', 'wp-dark-mode' ),
							'desc'    => __( 'Automatically turn on the dark mode between a given time range.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

						'start_at'          => array(
							'name'    => 'start_at',
							'default' => '17:00',
							'label'   => __( 'Dark Mode Start Time', 'wp-dark-mode' ),
							'desc'    => __( 'Time to start Dark mode.', 'wp-dark-mode' ),
							'type'    => 'select',
							'options' => $time_range,
						),

						'end_at'            => array(
							'name'    => 'end_at',
							'default' => '06:00',
							'label'   => __( 'Dark Mode End Time', 'wp-dark-mode' ),
							'desc'    => __( 'Time to end Dark mode.', 'wp-dark-mode' ),
							'type'    => 'select',
							'options' => $time_range,
						),

                    )
                ),

				'wp_dark_mode_includes_excludes' => [

					'specific_category' => array(
						'name'    => 'specific_category',
						'default' => 'off',
						'label'   => __( 'Specific Category', 'wp-dark-mode' ),
						'desc'    => __( 'Apply dark mode only on specific category post.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'specific_categories'   => array(
						'name'    => 'specific_categories',
						'default' => [ $this, 'specific_categories' ],
						'label'   => __( 'Select Category(s)', 'wp-dark-mode' ),
						'desc'    => __( 'Select the category(s) in which you want to apply the darkmode. Outside of the category the dark mode won\'t be applied.', 'wp-dark-mode' ),
						'type'    => 'cb_function',
					),

					'includes' => array(
						'name'    => 'includes',
						'default' => '',
						'label'   => __( 'Includes Elements', 'wp-dark-mode' ),
						'desc'    => __(
                            'Add comma separated CSS selectors (classes, ids) to to apply dark mode. Only the elements within the selectors applied by dark mode.',
                            'wp-dark-mode'
                        ),
						'type'    => 'textarea',
					),

					'excludes' => array(
						'name'    => 'excludes',
						'default' => '',
						'label'   => __( 'Excludes Elements', 'wp-dark-mode' ),
						'desc'    => __(
                            'Add comma separated CSS selectors (classes, ids) to ignore the darkmode. ex: .class1, #hero-area',
                            'wp-dark-mode'
                        ),
						'type'    => 'textarea',
					),

					'exclude_pages' => array(
						'name'    => 'exclude_pages',
						'default' => [ $this, 'exclude_pages' ],
						'label'   => __( 'Exclude Pages', 'wp-dark-mode' ),
						'desc'    => __( 'Select the pages to disable darkmode on the selected pages.', 'wp-dark-mode' ),
						'type'    => 'cb_function',
					),
				],

				'wp_dark_mode_switch' => apply_filters( 'wp_dark_mode/switch_settings', array(
					'show_switcher' => array(
							'name'    => 'show_switcher',
							'default' => 'on',
							'label'   => __( 'Show Floating Switch', 'wp-dark-mode' ),
							'desc'    => __( 'Show the floating dark mode switcher button on the frontend for the users.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

					'switch_style' => array(
							'name'    => 'switch_style',
							'default' => '1',
							'label'   => __( 'Floating Switch Style', 'wp-dark-mode' ),
							'desc'    => __( 'Select the switcher button style for the frontend.', 'wp-dark-mode' ),
							'type'    => 'image_choose',
							'options' => [
								'1' => WP_DARK_MODE_ASSETS . '/images/button-presets/1.svg',
								'2' => WP_DARK_MODE_ASSETS . '/images/button-presets/2.svg',
								'3' => WP_DARK_MODE_ASSETS . '/images/button-presets/3.png',

								'4'  => WP_DARK_MODE_ASSETS . '/images/button-presets/4.svg',
								'5'  => WP_DARK_MODE_ASSETS . '/images/button-presets/5.svg',
								'6'  => WP_DARK_MODE_ASSETS . '/images/button-presets/6.svg',
								'7'  => WP_DARK_MODE_ASSETS . '/images/button-presets/7.svg',
								'8'  => WP_DARK_MODE_ASSETS . '/images/button-presets/8.svg',
								'9'  => WP_DARK_MODE_ASSETS . '/images/button-presets/9.png',
								'10' => WP_DARK_MODE_ASSETS . '/images/button-presets/10.png',
								'11' => WP_DARK_MODE_ASSETS . '/images/button-presets/11.png',
								'12' => WP_DARK_MODE_ASSETS . '/images/button-presets/12.png',
								'13' => WP_DARK_MODE_ASSETS . '/images/button-presets/13.png',
								'14' => WP_DARK_MODE_ASSETS . '/images/button-presets/14.png',
							],
						),

					'switcher_position' => array(
						'name'    => 'switcher_position',
						'default' => 'right_bottom',
						'label'   => __( 'Floating Switch Position', 'wp-dark-mode' ),
						'desc'    => $this->switch_preview()
						             . __( '<p class="description">Select the position of the floating dark mode switcher button on the frontend.</p>',
									'wp-dark-mode' ),
						'type'    => 'select',
						'options' => [
							'left_bottom'  => __( 'Left Bottom', 'wp-dark-mode' ),
							'right_bottom' => __( 'Right Bottom', 'wp-dark-mode' ),
							'custom'       => sprintf( 'Custom Position %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
							],
						),

					'custom_position' => array(
							'name'    => 'custom_position',
							'default' => [ $this, 'custom_position_cb' ],
							'label'   => __( 'Custom Position', 'wp-dark-mode' ),
							'desc'    => __( 'Customize the position of the floating switch.', 'wp-dark-mode' ),
							'type'    => 'cb_function',
						),

					'attention_effect' => array(
							'name'    => 'attention_effect',
							'default' => 'none',
							'label'   => __( 'Attention Effect', 'wp-dark-mode' ),
							'desc'    => __( 'Select the attention animation effect for the switch.', 'wp-dark-mode' ),
							'type'    => 'select',
							'options' => [
								'none'      => __( 'None', 'wp-dark-mode' ),
								'wobble'    => __( 'Wobble', 'wp-dark-mode' ),
								'vibrate'   => 'Vibrate',
								'flicker'   => sprintf( 'Flicker %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
								'shake'     => sprintf( 'Shake %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
								'jello'     => sprintf( 'Jello %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
								'bounce'    => sprintf( 'Bounce %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
								'heartbeat' => sprintf( 'Heartbeat %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
								'blink'     => sprintf( 'Blink %s', wp_dark_mode_is_hello_elementora() ? '' : ' - Pro' ),
							],
						),

					'enable_cta' => array(
						'name'    => 'enable_cta',
						'default' => 'off',
						'label'   => __( 'Enable Call to action', 'wp-dark-mode' ),
						'desc'    => __( 'Show/ hide call to action text.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'cta_text' => array(
						'name'    => 'cta_text',
						'default' => '',
						'label'   => __( 'Call to action', 'wp-dark-mode' ),
						'desc'    => __( 'Add call to action text, beside the dark mode button. (Make empty to disable the CTA)',
							'wp-dark-mode' ),
						'type'    => 'text',
                    ),

					'cta_text_color' => array(
						'name'    => 'cta_text_color',
						'default' => '',
						'label'   => __( 'CTA Text Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the text color of the switch button.', 'wp-dark-mode' ),
						'type'    => 'color',
					),

					'cta_bg_color' => array(
						'name'    => 'cta_bg_color',
						'default' => '',
						'label'   => __( 'CTA Background Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the background color of the switch button.', 'wp-dark-mode' ),
						'type'    => 'color',
					),

					'enable_menu_switch' => array(
							'name'    => 'enable_menu_switch',
							'default' => 'off',
							'label'   => __( 'Display Switch in Menu', 'wp-dark-mode' ),
							'desc'    => __( 'Display the darkmode switch in the menu.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

					'switch_menus' => array(
							'name'    => 'switch_menus',
							'default' => [ $this, 'switch_menus' ],
							'label'   => __( 'Select Menu(s)', 'wp-dark-mode' ),
							'desc'    => __( 'Select the menu(s) in which you want to display the darkmode switch.', 'wp-dark-mode' ),
							'type'    => 'cb_function',
						),

					'custom_switch_icon' => array(
							'name'    => 'custom_switch_icon',
							'default' => 'off',
							'label'   => __( 'Custom Switch Icon', 'wp-dark-mode' ),
							'desc'    => __( 'Customize the darkmode switch icon in the dark & light mode.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

					'switch_icon_light' => array(
							'name'  => 'switch_icon_light',
							'label' => __( 'Switch Icon (Light)', 'wp-dark-mode' ),
							'desc'  => __( 'Switch Icon in the light mode.', 'wp-dark-mode' ),
							'type'  => 'file',
						),

					'switch_icon_dark' => array(
							'name'  => 'switch_icon_dark',
							'label' => __( 'Switch Icon (Dark)', 'wp-dark-mode' ),
							'desc'  => __( 'Switch Icon in the dark mode.', 'wp-dark-mode' ),
							'type'  => 'file',
						),

					'custom_switch_text' => array(
							'name'    => 'custom_switch_text',
							'default' => 'off',
							'label'   => __( 'Custom Switch Text', 'wp-dark-mode' ),
							'desc'    => __( 'Customize the darkmode switch text.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

					'switch_text_light' => array(
							'name'    => 'switch_text_light',
							'default' => 'Light',
							'label'   => __( 'Switch Text (Light)', 'wp-dark-mode' ),
							'desc'    => __( 'Floating switch light text.', 'wp-dark-mode' ),
							'type'    => 'text',
						),

					'switch_text_dark' => array(
							'name'    => 'switch_text_dark',
							'default' => 'Dark',
							'label'   => __( 'Switch Text (Dark)', 'wp-dark-mode' ),
							'desc'    => __( 'Floating switch dark text.', 'wp-dark-mode' ),
							'type'    => 'text',
						),

					'show_above_post' => array(
							'name'    => 'show_above_post',
							'default' => 'off',
							'label'   => __( 'Show Above Posts', 'wp-dark-mode' ),
							'desc'    => __( 'Show the dark mode switcher button above of all the post.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),

					'show_above_page' => array(
						'name'    => 'show_above_page',
						'default' => 'off',
						'label'   => __( 'Show Above Pages', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above of all the pages.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				) ),

				'wp_dark_mode_color' => apply_filters(
                    'wp_dark_mode/color_settings', array(
						'brightness'     => [
							'name'    => 'brightness',
							'label'   => __( 'Brightness :', 'wp-dark-mode' ),
							'desc'    => __( 'Set the brightness of the dark mode.', 'wp-dark-mode' ),
							'type'    => 'slider',
							'default' => 100,
							'min'     => 0,
							'max'     => 100,
						],
						'contrast'       => [
							'name'    => 'contrast',
							'label'   => __( 'Contrast :', 'wp-dark-mode' ),
							'desc'    => __( 'Set the contrast of the dark mode.', 'wp-dark-mode' ),
							'type'    => 'slider',
							'default' => 90,
							'min'     => 0,
							'max'     => 100,
						],
						'sepia'          => [
							'name'    => 'sepia',
							'label'   => __( 'Sepia :', 'wp-dark-mode' ),
							'desc'    => __( 'Set the sepia of the dark mode.', 'wp-dark-mode' ),
							'type'    => 'slider',
							'default' => 10,
							'min'     => 0,
							'max'     => 100,
						],
						'filter_preview' => [
							'name'    => 'filter_preview',
							'class'   => active_filter_preview() ? 'active filter_preview' : 'filter_preview',
							'label'   => __( 'Preview :', 'wp-dark-mode' ),
							'desc'    => __( 'Demo Preview of the filter settings.', 'wp-dark-mode' ),
							'default' => [ $this, 'filter_preview' ],
							'type'    => 'cb_function',
						],

						'enable_preset' => array(
							'name'    => 'enable_preset',
							'default' => 'off',
							'label'   => __( 'Want to use color presets?', 'wp-dark-mode' ),
							'desc'    => __( 'Select the predefined darkmode preset colors.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),
						'color_preset' => array(
							'name'    => 'color_preset',
							'default' => '0',
							'label'   => __( 'Darkmode Color Preset:', 'wp-dark-mode' ),
							'desc'    => __( 'Select the predefined darkmode background, text and link preset color.', 'wp-dark-mode' ),
							'type'    => 'image_choose',
							'options' => [
								'0'  => WP_DARK_MODE_ASSETS . '/images/color-presets/1.svg',
								'1'  => WP_DARK_MODE_ASSETS . '/images/color-presets/2.svg',
								'2'  => WP_DARK_MODE_ASSETS . '/images/color-presets/3.svg',
								'3'  => WP_DARK_MODE_ASSETS . '/images/color-presets/4.svg',
								'4'  => WP_DARK_MODE_ASSETS . '/images/color-presets/5.svg',
								'5'  => WP_DARK_MODE_ASSETS . '/images/color-presets/6.svg',
								'6'  => WP_DARK_MODE_ASSETS . '/images/color-presets/7.svg',
								'7'  => WP_DARK_MODE_ASSETS . '/images/color-presets/8.svg',
								'8'  => WP_DARK_MODE_ASSETS . '/images/color-presets/9.svg',
								'9'  => WP_DARK_MODE_ASSETS . '/images/color-presets/10.svg',
								'10' => WP_DARK_MODE_ASSETS . '/images/color-presets/11.svg',
								'11' => WP_DARK_MODE_ASSETS . '/images/color-presets/12.svg',
								'12' => WP_DARK_MODE_ASSETS . '/images/color-presets/13.svg',
							],
						),
						'customize_colors' => array(
							'name'    => 'customize_colors',
							'default' => 'off',
							'label'   => __( 'Want to use custom colors?', 'wp-dark-mode' ),
							'desc'    => __( 'Customize the darkmode background, text and link colors.', 'wp-dark-mode' ),
							'type'    => 'switcher',
						),
						'darkmode_bg_color' => array(
							'name'    => 'darkmode_bg_color',
							'default' => '',
							'label'   => __( 'Darkmode Background Color', 'wp-dark-mode' ),
							'desc'    => __( 'Select the background color when the dark mode is on.', 'wp-dark-mode' ),
							'type'    => 'color',
						),
						'darkmode_text_color' => array(
							'name'    => 'darkmode_text_color',
							'default' => '',
							'label'   => __( 'Darkmode Text Color', 'wp-dark-mode' ),
							'desc'    => __( 'Select the text color when the dark mode is on.', 'wp-dark-mode' ),
							'type'    => 'color',
						),
						'darkmode_link_color' => array(
							'name'    => 'darkmode_link_color',
							'default' => '',
							'label'   => __( 'Darkmode Links Color', 'wp-dark-mode' ),
							'desc'    => __( 'Select the links color when the dark mode is on.', 'wp-dark-mode' ),
							'type'    => 'color',
						),
                    )
                ),

				'wp_dark_mode_accessibility' => [
					'font_size_toggle' => array(
						'name'    => 'font_size_toggle',
						'default' => 'off',
						'label'   => __( 'Enable font size toggle', 'wp-dark-mode' ),
						'desc'    => __( 'Show/ hide the font size toggle button. You must select the darkmode and font-size toggle switch from the switch settings.',
							'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'font_size' => array(
						'name'    => 'font_size',
						'default' => '150',
						'label'   => __( 'Font Size', 'wp-dark-mode' ),
						'desc'    => __( 'Select the font size.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => [
							'120'    => __( 'Large', 'wp-dark-mode' ),
							'150'    => __( 'Extra Large', 'wp-dark-mode' ),
							'200'    => __( 'Huge', 'wp-dark-mode' ),
							'custom' => __( 'Custom', 'wp-dark-mode' ),
						],
					),

					'custom_font_size' => [
						'name'    => 'custom_font_size',
						'label'   => __( 'Custom Font Size :', 'wp-dark-mode' ),
						'desc'    => __( 'Set the custom fontsize.', 'wp-dark-mode' ),
						'type'    => 'slider',
						'default' => 120,
						'min'     => 100,
						'max'     => 300,
					],

					'filter_preview' => [
						'name'    => 'filter_preview',
						'class'   => 'font_size_preview',
						'label'   => __( 'Preview :', 'wp-dark-mode' ),
						'desc'    => __( 'Font-size settings preview.', 'wp-dark-mode' ),
						'default' => [ $this, 'filter_preview' ],
						'type'    => 'cb_function',
					],

					'keyboard_shortcut' => array(
						'name'    => 'keyboard_shortcut',
						'default' => 'on',
						'label'   => __( 'Keyboard Shortcut', 'wp-dark-mode' ),
						'desc'    => __( 'Enable/disable the dark mode toggle shortcut.', 'wp-dark-mode' ) . '(<code>Ctrl + ALt + D </code>)',
						'type'    => 'switcher',
					),
				],

				'wp_dark_mode_custom_css' => apply_filters(
                    'wp_dark_mode/custom_css', array(
						array(
							'name'  => 'custom_css',
							'label' => 'Dark Mode Custom CSS',
							'type'  => 'textarea',
							'desc'  => 'Add custom css for dark mode only. This CSS will only apply when the dark mode is on. use <b>!important</b> flag on each property.',
						),
                    )
                ),

				'wp_dark_mode_image_settings' => apply_filters(
                    'wp_dark_mode/image_settings', array(
						array(
							'name'    => 'image_settings',
							'default' => [ $this, 'image_settings' ],
							'type'    => 'cb_function',
						),
                    )
                ),

				'wp_dark_mode_analytics_reporting' => apply_filters( 'wp_dark_mode/analytics_reporting', array(

					'enable_analytics' => array(
						'name'    => 'enable_analytics',
						'default' => 'on',
						'label'   => __( 'Enable Analytics', 'wp-dark-mode' ),
						'desc'    => __( 'Enable/ disable the dark mode usage analytics.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'dashboard_widget' => array(
						'name'    => 'dashboard_widget',
						'default' => 'on',
						'label'   => __( 'Dashboard Widget', 'wp-dark-mode' ),
						'desc'    => __( 'Show/ hide the dark mode usage dashboard chart widget.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'email_reporting' => array(
						'name'    => 'email_reporting',
						'default' => 'on',
						'label'   => __( 'Email Reporting', 'wp-dark-mode' ),
						'desc'    => __( 'Enable/ disable the dark mode usage email reporting.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'reporting_frequency' => array(
						'name'    => 'reporting_frequency',
						'default' => 'weekly',
						'label'   => __( 'Reporting Frequency', 'wp-dark-mode' ),
						'desc'    => __( 'Select the reporting frequency, when the email will be send.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => [
							'daily'   => __( 'Daily', 'wp-dark-mode' ),
							'weekly'  => __( 'Weekly', 'wp-dark-mode' ),
							'monthly' => __( 'Monthly', 'wp-dark-mode' ),
						],
					),

					'reporting_email' => array(
						'name'    => 'reporting_email',
						'default' => get_option( 'admin_email' ),
						'label'   => __( 'Reporting Email', 'wp-dark-mode' ),
						'desc'    => __( 'Enter the reporting email.', 'wp-dark-mode' ),
						'type'    => 'text',
					),

					'reporting_email_subject' => array(
						'name'    => 'reporting_email_subject',
						'default' => __( 'Weekly Dark Mode Usage Summary of ', 'wp-dark-mode' ) . get_bloginfo( 'name' ),
						'label'   => __( 'Reporting Email Subject', 'wp-dark-mode' ),
						'desc'    => __( 'Enter the reporting email.', 'wp-dark-mode' ),
						'type'    => 'text',
					),

				) ),
			);

			self::$settings_api = new WPPOOL_Settings_API();

			//set sections and fields
			self::$settings_api->set_sections( $sections );
			self::$settings_api->set_fields( $fields );

			//initialize them
			self::$settings_api->admin_init();
		}

		public function switch_preview() {
			$switch_side = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'switch_style', 1 );

			return sprintf( '<div class="switch-preview">%s</div>', do_shortcode( "[wp_dark_mode floating='yes' style=$switch_side]" ) );
		}

		public function custom_position_cb() {

			$switch_side    = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'switch_side', 'right_bottom' );
			$bottom_spacing = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'bottom_spacing', 10 );
			$side_spacing   = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'side_spacing', 10 );


			?>
            <div class="custom-position-wrap">
                <div class="custom-position-settings">

                    <div class="side-selection">
                        <span class="custom-position-label">Side Selection</span>

                        <div class="side-selection-left">
                            <input type="radio" name="wp_dark_mode_switch[switch_side]" id="switch_side_left"
                                    value="left_bottom" <?php checked( 'left_bottom', $switch_side ) ?>>
                            <label for="switch_side_left"><?php _e('Left', 'wp-dark-mode'); ?></label>
                        </div>

                        <div class="side-selection-right">
                            <input type="radio" name="wp_dark_mode_switch[switch_side]" id="switch_side_right"
                                    value="right_bottom" <?php checked( 'right_bottom', $switch_side ) ?>>
                            <label for="switch_side_right"><?php _e('Right', 'wp-dark-mode'); ?></label>
                        </div>
                    </div>

                    <div class="bottom-spacing">
                        <span class="custom-position-label">Bottom Spacing</span>

                        <div>
                            <input type="number" min="0" id="bottom_spacing" name="wp_dark_mode_switch[bottom_spacing]" value="<?php echo $bottom_spacing; ?>"/>
                            <span>px</span>
                        </div>
                    </div>

                    <div class="side-spacing">
                        <span class="custom-position-label">Side Spacing</span>
                        <div>
                            <input type="number" min="0" id="side_spacing" name="wp_dark_mode_switch[side_spacing]" value="<?php echo $side_spacing; ?>"/>
                            <span>px</span>
                        </div>

                    </div>
                </div>

            </div>

		<?php }

		public function filter_preview() {
		    wp_dark_mode()->get_template( 'filter-preview' );
        }

		public function specific_categories() {
			$categories = wp_dark_mode_get_settings( 'wp_dark_mode_includes_excludes', 'specific_categories', [] );

			?>
            <select name="wp_dark_mode_includes_excludes[specific_categories][]" multiple id="wp_dark_mode_includes_excludes[specific_categories]">
				<?php

				$cats = get_terms( 'category', array( 'hide_empty' => false ) );

				if ( ! empty( $cats ) && ! is_wp_error( $cats ) ) {
					foreach ( $cats as $cat ) {
						printf( '<option value="%1$s" %2$s>%3$s</option>', $cat->slug, in_array( $cat->slug, $categories ) ? 'selected' : '', $cat->name );
					}
				}

				?>
            </select>
            <p class="description">Select the category(s) in which you want to apply the darkmode. Outside of the category the dark mode won't be applied.</p>
			<?php
		}

		public function switch_menus() {
			$switch_menus = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'switch_menus', [] );

			?>
            <select name="wp_dark_mode_switch[switch_menus][]" multiple id="wp_dark_mode_switch[switch_menus]">
				<?php

				$menus = get_terms( 'nav_menu', array( 'hide_empty' => false ) );

				if ( ! empty( $menus ) && ! is_wp_error( $menus ) ) {
					foreach ( $menus as $menu ) {
						printf( '<option value="%1$s" %2$s>%3$s</option>', $menu->slug, in_array( $menu->slug, $switch_menus ) ? 'selected' : '', $menu->name );
					}
				}

				?>
            </select>
            <p class="description">Select the menu(s) in which you want to display the darkmode switch.</p>
			<?php
		}

		public function exclude_pages() {
			$exclude_pages = wp_dark_mode_exclude_pages();

			?>
            <select name="wp_dark_mode_includes_excludes[exclude_pages][]" multiple id="wp_dark_mode_includes_excludes[exclude_pages]">
				<?php

				$pages = get_posts(
                    [
						'numberposts' => - 1,
						'post_type'   => 'page',
					]
                );

				if ( ! empty( $pages ) ) {
					$page_ids = wp_list_pluck( $pages, 'post_title', 'ID' );

					foreach ( $page_ids as $id => $title ) {
						printf( '<option value="%1$s" %2$s>%3$s</option>', $id, in_array( $id, $exclude_pages ) ? 'selected' : '', $title );
					}
				}

				?>
            </select>
			<?php
		}

		public static function image_settings() {
			$light_images = [];
			$dark_images  = [];

			if ( self::if_image_settings() ) {
				$images       = get_option( 'wp_dark_mode_image_settings' );
				$light_images = ! empty( $images['light_images'] ) ? array_filter( (array) $images['light_images'] ) : [];
				$dark_images  = ! empty( $images['dark_images'] ) ? array_filter( (array) $images['dark_images'] ) : [];
			}

			?>

            <div id="image_compare">
                <!-- before useing dark mode -->
                <img src="<?php echo WP_DARK_MODE_ASSETS; ?>/images/light_demo.svg" alt="Pro Features">
                <!-- after using dark mode -->
                <img src="<?php echo WP_DARK_MODE_ASSETS; ?>/images/dark_demo.svg" alt="Pro Features">
            </div>

            <p>🔹️ <strong>Light Mode Image: </strong> The image link shown in the light mode.</p>
            <p>🔹️ <strong>Dark Mode Image: </strong> The image link that will replace the light mode image while in dark mode.</p>
            <br>

            <table class="image-settings-table">
                <tbody>
                <tr>
                    <td>Light Mode Image</td>
                    <td>Dark Mode Image</td>
                    <td></td>
                </tr>

				<?php

				if ( ! empty( $light_images ) ) {
					foreach ( $light_images as $key => $light_image ) {
						?>
                        <tr>
                            <td><input type="url" value="<?php echo $light_image; ?>" name="wp_dark_mode_image_settings[light_images][]">
                            </td>
                            <td>
                                <input type="url" value="<?php echo $dark_images[ $key ]; ?>" name="wp_dark_mode_image_settings[dark_images][]">
                            </td>
                            <td>
                                <a href="#" class="add_row button button-primary">Add</a>
                                <a href="#" class="remove_row button button-link-delete">Remove</a>
                            </td>
                        </tr>
						<?php
                    }
				} else {
					?>
                    <tr>
                        <td><input type="url" value="" name="wp_dark_mode_image_settings[light_images][]"></td>
                        <td><input type="url" value="" name="wp_dark_mode_image_settings[dark_images][]"></td>
                        <td>
                            <a href="#" class="add_row button button-primary">Add</a>
                            <a href="#" class="remove_row button button-link-delete">Remove</a>
                        </td>
                    </tr>
				<?php } ?>

                </tbody>
            </table>
			<?php
        }

		/**
		 * Register the plugin page
		 */
		public function settings_menu() {
			add_submenu_page( 'wp-dark-mode-settings', 'WP Dark Mode Settings', 'Settings', 'manage_options', 'wp-dark-mode-settings', [ $this, 'settings_page' ] );

			add_menu_page(
                __( 'WP Dark Mode', 'wp-dark-mode' ), __( 'WP Dark Mode', 'wp-dark-mode' ), 'manage_options',
                'wp-dark-mode-settings', array( $this, 'settings_page' ), WP_DARK_MODE_ASSETS . '/images/moon.png', 40
            );
		}

		/**
		 * Display the plugin settings options page
		 */
		public function settings_page() {
			?>

            <div class="wrap wp-dark-mode-settings-page">
                <h2 style="display: flex;"><?php _e( 'WP Dark Mode Settings', 'wp-dark-mode' ); ?> <span id="changelog_badge"></span></h2>
					<?php self::$settings_api->show_settings(); ?>
            </div>

            <script>
                // @see https://docs.headwayapp.co/widget for more configuration options.
                var HW_config = {
                    selector: "#changelog_badge", // CSS selector where to inject the badge
                    account: "yppW9y"
                }
            </script>
            <script async src="https://cdn.headwayapp.co/widget.js"></script>

			<?php
        }

		/**
		 * @return WP_Dark_Mode_Settings|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

WP_Dark_Mode_Settings::instance();

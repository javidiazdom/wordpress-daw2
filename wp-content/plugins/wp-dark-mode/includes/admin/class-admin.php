<?php

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'WP_Dark_Mode_Admin' ) ) {
	class WP_Dark_Mode_Admin {
		/** @var null  */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Admin constructor.
		 */
		public function __construct() {
			add_action( 'admin_head', [ $this, 'header_scripts' ], 1 );

			add_action( 'admin_menu', array( $this, 'admin_menu' ), 999 );
			add_action( 'admin_menu', array( $this, 'recommended_plugins_menu' ), 11 );

			add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );

			add_action( 'admin_init', [ $this, 'display_notices' ] );

			add_action( 'wp_ajax_wp_dark_mode_review_notice', [ $this, 'handle_review_notice' ] );
			add_action( 'wp_ajax_wp_dark_mode_affiliate_notice', [ $this, 'handle_affiliate_notice' ] );

			/** hide black friday notice */
			add_action( 'wp_ajax_hide_offer_notice', [ $this, 'hide_offer_notice' ] );

			add_action( 'admin_init', [ $this, 'init_update' ] );

			add_action( 'wp_ajax_get_switch_preview', [ $this, 'get_switch_preview' ] );

			add_action( 'admin_init', [ $this, 'save_settings' ] );

		}

		/**
		 * Update the switch settings and font-size toggle relationship
		 */
		public function save_settings() {

		    //Update font-size toggle if the specific switch selected
			if ( ! empty( $_POST['wp_dark_mode_switch']['switch_style'] ) && 14 == $_POST['wp_dark_mode_switch']['switch_style'] ) {
				$accessibility_options                     = (array) get_option( 'wp_dark_mode_accessibility' );
				$accessibility_options['font_size_toggle'] = 'on';

				update_option( 'wp_dark_mode_accessibility', $accessibility_options );
			}


			if ( ! empty( $_POST['wp_dark_mode_accessibility']['font_size_toggle'] ) ) {

				if ( 'on' == $_POST['wp_dark_mode_accessibility']['font_size_toggle'] ) {
					$switch_options                 = (array) get_option( 'wp_dark_mode_switch' );
					$switch_options['switch_style'] = 14;
				} else {
					$switch_options['switch_style'] = 1;
				}

				update_option( 'wp_dark_mode_switch', $switch_options );
			}


		}

		function get_switch_preview() {
			$style = ! empty( $_REQUEST['style'] ) ? intval( $_REQUEST['style'] ) : 1;

			wp_send_json_success( [ 'html' => do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' ) ] );
		}

		public function init_update() {
			if ( ! class_exists( 'WP_Dark_Mode_Update' ) ) {
				require_once WP_DARK_MODE_INCLUDES . '/admin/class-update.php';
			}

			$updater = new WP_Dark_Mode_Update();

			if ( $updater->needs_update() ) {
				$updater->perform_updates();
			}
		}

		public function recommended_plugins_menu() {
			if ( isset( $_GET['hide_wp_dark_mode_recommended_plugin'] ) && isset( $_GET['nonce'] ) ) {
				if ( current_user_can( 'manage_options' ) ) {
					$nonce = $_GET['nonce'];
					if ( wp_verify_nonce( $nonce, 'wp_dark_mode_recommended_plugin' ) ) {
						update_option( 'hide_wp_dark_mode_recommended_plugin', true );
					}
				}
			}

			if ( ! get_option( 'hide_wp_dark_mode_recommended_plugin' ) ) {
				add_submenu_page(
                    'wp-dark-mode-settings', 'Recommended Plugins', 'Recommended Plugins', 'manage_options',
                    'wp-dark-mode-recommended-plugins', [ $this, 'recommended_plugins_page' ], 2
                );
			}
		}

		public static function recommended_plugins_page() {
			wp_dark_mode()->get_template( 'admin/recommended-plugins' );
		}

		/**
		 * handle review notice
		 */
		public function handle_review_notice() {
			$value = ! empty( $_REQUEST['value'] ) ? wp_unslash( $_REQUEST['value'] ) : 7;

			if ( 'hide_notice' == $value ) {
				update_option( 'wp_dark_mode_review_notice_interval', 'off' );
			} else {
				set_transient( 'wp_dark_mode_review_notice_interval', 'off', $value * DAY_IN_SECONDS );
			}

			update_option( sanitize_key( 'wp_dark_mode_notices' ), [] );

		}

		/**
		 * handle affiliate notice
		 */
		public function handle_affiliate_notice() {
			$value = ! empty( $_REQUEST['value'] ) ? wp_unslash( $_REQUEST['value'] ) : 7;

			if ( 'hide_notice' == $value ) {
				update_option( 'wp_dark_mode_affiliate_notice_interval', 'off' );
			} else {
				set_transient( 'wp_dark_mode_affiliate_notice_interval', 'off', $value * DAY_IN_SECONDS );
			}

			update_option( sanitize_key( 'wp_dark_mode_notices' ), [] );

		}

		public function hide_offer_notice() {
			update_option( 'wp_dark_mode_hide_offer_2.0_notice', true );
			update_option( sanitize_key( 'wp_dark_mode_notices' ), [] );
			die();
		}

		public function display_notices() {

			//show notice if ultimate version is lower than 2.0
			if ( defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) && WP_DARK_MODE_ULTIMATE_VERSION < '2.0.0' ) {

				$notice_html = sprintf( "<b>WP Dark Mode Ultimate - v%s</b> is not compatible with <b>WP Dark Mode - v2.0</b>.
			     Please, Update the <b>WP Dark Mode Ultimate</b> to <b>v2.0</b> to function properly.", WP_DARK_MODE_ULTIMATE_VERSION );

				wp_dark_mode()->add_notice( 'info', $notice_html );

				//show notice if pro version is lower than 2.0
			} elseif ( defined( 'WP_DARK_MODE_PRO_VERSION' ) && WP_DARK_MODE_PRO_VERSION < '2.0.0' ) {

				$notice_html = sprintf( "<b>WP Dark Mode PRO - v%s</b> is not compatible with <b>WP Dark Mode - v2.0</b>.
			     Please, Update the <b>WP Dark Mode PRO</b> to <b>v2.0</b> to function properly.", WP_DARK_MODE_PRO_VERSION );

				wp_dark_mode()->add_notice( 'info', $notice_html );
			}

			//Return if allow tracking is not interacted yet
			if ( ! get_option( 'wp-dark-mode_allow_tracking' ) ) {
				return;
			}

			//Review notice
			if ( 'off' != get_option( 'wp_dark_mode_review_notice_interval', 'on' )
			     && 'off' != get_transient( 'wp_dark_mode_review_notice_interval' ) ) {

				ob_start();
				wp_dark_mode()->get_template( 'admin/review-notice' );
				$notice_html = ob_get_clean();

				wp_dark_mode()->add_notice( 'info wp-dark-mode-review-notice', $notice_html );
			}

			//Affiliate notice
			if ( 'off' == get_option( 'wp_dark_mode_review_notice_interval' )
			     && 'off' != get_option( 'wp_dark_mode_affiliate_notice_interval', 'on' )
			     && 'off' != get_transient( 'wp_dark_mode_affiliate_notice_interval' ) ) {

				ob_start();
				wp_dark_mode()->get_template( 'admin/affiliate-notice' );
				$notice_html = ob_get_clean();

				wp_dark_mode()->add_notice( 'info wp-dark-mode-affiliate-notice', $notice_html );
			}

			//Offer notice
			$data_transient_key = 'wp_dark_mode_promo_data';
			$data               = get_transient( $data_transient_key );

			if ( ! $data ) {
				return;
			}

			if ( 'yes' != $data['is_offer'] ) {
				return;
			}

			if ( get_option( 'wp_dark_mode_hide_offer_2.0_notice' ) ) {
				return;
			}

			/** display the black-friday notice if the pro version is not activated */
			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			ob_start();
			wp_dark_mode()->get_template( 'admin/offer-notice' );
			$notice_html = ob_get_clean();

			wp_dark_mode()->add_notice( 'info offer_notice', $notice_html );

		}

		public function header_scripts() {
			if ( ! wp_dark_mode_is_gutenberg_page() ) { ?>

				<script>
                    window.wpDarkMode = <?php echo json_encode( wp_dark_mode_localize_array() ); ?>;
				</script>

				<script src="<?php echo WP_DARK_MODE_ASSETS . '/js/dark-mode.js'; ?>"></script>
				<script>
                    (function () {
                        const is_saved = localStorage.getItem('wp_dark_mode_admin_active');

                        if (wpDarkMode.enable_backend && is_saved && is_saved != 0) {
                            document.querySelector('html').classList.add('wp-dark-mode-active');

                            //DarkMode.enable();

                        }
                    })();
				</script>
				<?php
			}
		}

		/**
		 * display dark mode switcher button on the admin bar menu
		 */
		public function render_admin_switcher_menu() {
			if ( ! is_admin() || 'on' != wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ) ) {
				return;
			}

			$light_text = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'switch_text_light', 'Light' );
			$dark_text  = wp_dark_mode_get_settings( 'wp_dark_mode_switch', 'switch_text_dark', 'Dark' );

			global $wp_admin_bar;
			$wp_admin_bar->add_menu(
                array(
					'id'    => 'wp-dark-mode',
					'title' => sprintf(
                        '<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
                            <div class="wp-dark-mode-switcher wp-dark-mode-ignore">
                            
                                <label for="wp-dark-mode-switch" class="wp-dark-mode-ignore">
                                    <div class="toggle wp-dark-mode-ignore"></div>
                                    <div class="modes wp-dark-mode-ignore">
                                        <p class="light wp-dark-mode-ignore">%s</p>
                                        <p class="dark wp-dark-mode-ignore">%s</p>
                                    </div>
                                </label>
                            
                            </div>', $light_text, $dark_text
                    ),
					'href'  => '#',
                )
            );
		}

		public function admin_menu() {

			add_submenu_page( 'wp-dark-mode-settings', 'Get Started - WP Dark Mode', 'Get Started', 'manage_options',
				'wp-dark-mode-get-started', [ $this, 'getting_started' ], 99 );

		}

		public static function getting_started() {
			wp_dark_mode()->get_template( 'admin/get-started/index' );
		}

		/**
		 * @return WP_Dark_Mode_Admin|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}

}

WP_Dark_Mode_Admin::instance();

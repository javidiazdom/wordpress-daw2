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
			add_action( 'admin_footer', [ $this, 'footer_scripts' ], 1 );

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

			//todo - dashboard widget
			//add_action( 'wp_dashboard_setup', [ $this, 'dashboard_widgets' ] );

		}

		public function dashboard_widgets() {

			$analytics        = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_analytics_reporting', 'enable_analytics', 'on' );
			$dashboard_widget = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_analytics_reporting', 'dashboard_widget', 'on' );

			if ( ! $analytics || !$dashboard_widget ) {
				return;
			}


			wp_add_dashboard_widget( 'wp_dark_mode', esc_html__( 'WP Dark Mode Usage', 'wp-dark-mode' ), [ $this, 'dashboard_widget_cb' ] );

			// Globalize the metaboxes array, this holds all the widgets for wp-admin.
			global $wp_meta_boxes;

			// Get the regular dashboard widgets array
			// (which already has our new widget but appended at the end).
			$default_dashboard = $wp_meta_boxes['dashboard']['normal']['core'];

			// Backup and delete our new dashboard widget from the end of the array.
			$wp_dark_mode_widget_backup = array( 'wp_dark_mode' => $default_dashboard['wp_dark_mode'] );
			unset( $default_dashboard['wp_dark_mode'] );

			// Merge the two arrays together so our widget is at the beginning.
			$sorted_dashboard = array_merge( $wp_dark_mode_widget_backup, $default_dashboard );

			// Save the sorted array back into the original metaboxes.
			$wp_meta_boxes['dashboard']['normal']['core'] = $sorted_dashboard;
		}

		public function dashboard_widget_cb() {
			$length = 7;

			$visits = get_option( 'wp_dark_mode_visits' );
			$usages = get_option( 'wp_dark_mode_usage' );

			$visits = array_slice( $visits, - $length, $length, true );

			$values = [];
			$labels = [];

			if ( ! empty( $visits ) ) {
				foreach ( $visits as $date => $visit ) {
					$usage = ! empty( $usages[ $date ] ) ? $usages[ $date ] : 0;

					if ( $visit < 0 ) {
						$visit = 0;
					}

					if ( $usage < 0 ) {
						$usage = 0;
					}

					$labels[] = $date;
					$values[] = ceil( ( $usage / $visit ) * 100 );

				}
			}

			if ( ! wp_dark_mode_is_hello_elementora() ) {
				$labels = [ '20-05-2021', '21-05-2021', '22-05-2021', '24-05-2021', '25-05-2021', '27-05-2021', '29-05-2021', ];
				$values = [ '57', '56', '60', '59', '57', '60', '58' ];
			}

			?>

            <div class="wp-dark-mode-chart">
                <div class="chart-header">
                    <span>How much percentage of users use dark mode each day.</span>

                    <select name="chart_period" id="chart_period">
                        <option value="7">Last 7 Days</option>
                        <option value="30">Last 30 Days</option>
                    </select>
                </div>

                <div class="chart-container">
                    <canvas id="wp_dark_mode_chart" height="300" data-labels='<?php echo json_encode( $labels ); ?>' data-values='<?php echo json_encode( $values ); ?>'></canvas>
                </div>

				<?php if ( ! wp_dark_mode_is_hello_elementora() ) { ?>
                    <div class="wp-dark-mode-chart-modal-wrapper">
                        <div class="wp-dark-mode-chart-modal">
                            <h2>View Dark Mode usages inside WordPress Dashboard</h2>
                            <p>Dark Mode usages are not available.</p>
                            <p>Dark Mode usages are not stored in Lite.</p>
                            <p>Upgrade to Pro and get access to the reports.</p>
                            <p>
                                <a href="https://wppool.dev/wp-dark-mode/" class="button-primary button-hero" target="_blank" rel="noopener noreferrer">Upgrade to Pro</a>
                            </p>
                        </div>
                    </div>
				<?php } ?>

            </div>
		<?php }

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

                            //preload CSS
                            var css = `body, div, section, header, article, main, aside{background-color: #2B2D2D !important;}`,
                                head = document.head || document.getElementsByTagName('head')[0],
                                style = document.createElement('style');

                            style.setAttribute('id', 'pre_css');

                            head.appendChild(style);

                            style.type = 'text/css';
                            if (style.styleSheet) {
                                // This is required for IE8 and below.
                                style.styleSheet.cssText = css;
                            } else {
                                style.appendChild(document.createTextNode(css));
                            }

                        }
                    })();
				</script>
				<?php
			}
		}

		public function footer_scripts() { ?>
            <script>
                (function () {
                    const is_saved = localStorage.getItem('wp_dark_mode_admin_active');

                    if (wpDarkMode.enable_backend && 1 == is_saved && !wpDarkMode.is_block_editor) {

                        if (document.getElementById('pre_css')) {
                            document.getElementById('pre_css').remove();
                        }

                        document.querySelector('html').classList.add('wp-dark-mode-active');
                        document.querySelector('.wp-dark-mode-switcher').classList.add('active');

                        DarkMode.enable({
                            brightness: 100,
                            contrast: 90,
                            sepia: 10
                        });

                    }


                })();
            </script>
		<?php }

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

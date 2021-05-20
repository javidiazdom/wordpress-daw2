<?php

defined( 'ABSPATH' ) || exit;

$is_hidden = isset( $is_hidden ) && $is_hidden;
$is_pro    = isset( $is_pro_promo ) && $is_pro_promo;

$data_transient_key = 'wp_dark_mode_promo_data';

$data = [
	'discount_text' => '50% OFF',
	'is_offer'      => 'no',
];

$countdown_time = get_transient( 'wp_darkmode_promo_time' );

if ( !$countdown_time ) {

	$date = date( 'Y-m-d-H-i', strtotime( '+ 14 hours' ) );

	$date_parts = explode( '-', $date );

	$countdown_time = [
		'year'   => $date_parts[0],
		'month'  => $date_parts[1],
		'day'    => $date_parts[2],
		'hour'   => $date_parts[3],
		'minute' => $date_parts[4],
	];

	set_transient( 'wp_darkmode_promo_time',$countdown_time, 14 * HOUR_IN_SECONDS );

}

//if ( ! $data = get_transient( $data_transient_key ) ) {
//	$url = 'https://wppool.dev/wp-dark-mode-promo-data.json';
//
//	$res = wp_remote_get( $url );
//
//	if ( ! is_wp_error( $res ) ) {
//		$json = wp_remote_retrieve_body( $res );
//		$data = (array) json_decode( $json );
//
//		set_transient( $data_transient_key, $data, DAY_IN_SECONDS );
//	}
//}

$pro_title      = 'Unlock the PRO features';
$ultimate_title = 'Unlock all the features';
$title          = $is_pro ? $pro_title : $ultimate_title;

?>

<div class="wp-dark-mode-promo <?php echo ! empty( $class ) ? $class : ''; ?> hidden">
    <div class="wp-dark-mode-promo-inner <?php //echo $data['is_offer'] == 'yes' ? 'black-friday' : ''; ?>">

        <span class="close-promo">&times;</span>

        <img src="<?php echo WP_DARK_MODE_ASSETS . '/images/gift-box.svg'; ?>" class="promo-img">

        <!--		--><?php //if ( $data['is_offer'] == 'yes' ) { ?>
        <!--            <div class="black-friday-wrap">-->
        <!--                <h3><img src="--><?php //echo WP_DARK_MODE_ASSETS. '/images/holiday-gifts.svg'; ?><!--" alt=""></h3>-->
        <!---->
        <!--                <div class="ribbon">-->
        <!--                    <div class="ribbon-content">-->
        <!--                        <div class="ribbon-stitches-top"></div>-->
        <!--                        <img src="--><?php //echo WP_DARK_MODE_ASSETS. '/images/merry-christmas.svg'; ?><!--" alt="">-->
        <!--                        <div class="ribbon-stitches-bottom"></div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!---->
        <!--            </div>-->
        <!--		--><?php //} ?>

		<?php

		if ( ! empty( $title ) ) {
			printf( '<h3 class="promo-title">%s</h3>', $title );
		}

		if ( ! empty( $data['discount_text'] ) ) {
			printf( '<div class="discount"> <span class="discount-special">SPECIAL</span> <span class="discount-text">%s</span></div>', $data['discount_text'] );
		}


		if ( ! empty( $countdown_time ) ) {
			echo '<div class="simple_timer"></div>';
		}

		?>

        <a href="https://wppool.dev/wp-dark-mode"
                target="_blank"><?php echo $is_pro ? 'GET PRO' : 'GET ULTIMATE'; ?></a>

    </div>

    <style>
        .syotimer {
            text-align: center;
            padding: 0 0 10px;
        }

        .syotimer-cell {
            display: inline-block;
            margin: 0 14px;

            width: 50px;
            background: url(<?php echo WP_DARK_MODE_ASSETS.'/images/timer.svg'; ?>) no-repeat 0 0;
            background-size: contain;
        }

        .syotimer-cell__value {
            font-size: 28px;
            color: #fff;

            height: 54px;
            line-height: 54px;

            margin: 0 0 5px;
        }

        .syotimer-cell__unit {
            font-family: Arial, serif;
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
        }
    </style>


    <script>
        (function ($) {
            $(document).ready(function () {

                //show popup
                $(document).on('click', '.wp-dark-mode-settings-page .disabled', function (e) {
                    e.preventDefault();

                    if ($(this).closest('tr').hasClass('specific_category')) {
                        $(this).closest('form').find('.wp-dark-mode-promo.ultimate_promo').removeClass('hidden');
                    } else {
                        $(this).closest('table').next('.wp-dark-mode-promo').removeClass('hidden');
                    }

                });

                //close promo
                $(document).on('click', '.close-promo', function () {
                    $(this).closest('.wp-dark-mode-promo').addClass('hidden');
                });

                //close promo
                $(document).on('click', '.wp-dark-mode-promo', function (e) {

                    if (e.target !== this) {
                        return;
                    }

                    $(this).addClass('hidden');
                });

		        <?php
		        if ( ! empty( $countdown_time ) ) {

		        ?>

                if (typeof window.timer_set === 'undefined') {
                    window.timer_set = $('.simple_timer').syotimer({
                        year: <?php echo $countdown_time['year']; ?>,
                        month: <?php echo $countdown_time['month']; ?>,
                        day: <?php echo $countdown_time['day']; ?>,
                        hour: <?php echo $countdown_time['hour']; ?>,
                        minute: <?php echo $countdown_time['minute']; ?>,
//                      second: <?php // echo $countdown_time['second']; ?>,
                    });
                }
		        <?php } ?>

            })
        })(jQuery);
    </script>

</div>
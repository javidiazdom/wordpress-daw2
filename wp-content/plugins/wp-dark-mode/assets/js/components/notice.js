;(function ($) {
    $(document).ready(function () {

        /**--------------Review Notice----------------**/
        //handle review notice remind_later
        $('.wp-dark-mode-review-notice .remind_later').on('click', function () {
            $('.notice-overlay-wrap').css('display', 'flex');
        });

        //close the review notice
        $('.wp-dark-mode-review-notice .close-notice').on('click', function () {
            $(this).parents('.notice-overlay-wrap').css('display', 'none');
        });


        $('.wp-dark-mode-review-notice .notice-overlay-actions a, .wp-dark-mode-review-notice .notice-actions a.hide_notice, .wp-dark-mode-review-notice .notice-dismiss').on('click', function () {
            $(this).parents('.wp-dark-mode-review-notice').slideUp();

            let value = $(this).data('value');

            if (!value) {
                value = 7;
            }


            wp.ajax.send('wp_dark_mode_review_notice', {
                data: {
                    value,
                },
                success: () => {
                },
                error: (error) => console.log(error),
            });

        });


        /*-- Affiliate Notice --*/
        //close the affiliate notice
        $('.wp-dark-mode-affiliate-notice .close-notice').on('click', function () {
            $(this).parents('.notice-overlay-wrap').css('display', 'none');
        });

        $('.wp-dark-mode-affiliate-notice .dashicons-dismiss').on('click', function (e) {
            console.log('a')
            e.preventDefault();
            $('.wp-dark-mode-affiliate-notice .notice-overlay-wrap').css('display', 'flex');
        });

        $(`.wp-dark-mode-affiliate-notice .notice-overlay-actions a, .wp-dark-mode-affiliate-notice .notice-actions a.hide_notice`).on('click', function () {

            $(this).parents('.wp-dark-mode-affiliate-notice').slideUp();

            let value = $(this).data('value');

            if (!value) {
                value = 7;
            }


            wp.ajax.send('wp_dark_mode_affiliate_notice', {
                data: {
                    value,
                },
                success: () => {},
                error: (error) => console.log(error),
            });

        });


    });
})(jQuery);
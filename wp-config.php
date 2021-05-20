<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-n8G8q[#66AlY6|,X7KDmNyfIKW%5PcI%3dta?y0r{<ndht%@pr&Uu$soS[=U`aG' );
define( 'SECURE_AUTH_KEY',  'Y<r~bfWR+3{J7^b3^W=cx^3YFp=O+B{ha;Qk|i,!3L;5kZ{E1/d1,#V@kS!4+( Z' );
define( 'LOGGED_IN_KEY',    ':b;;eBOHOQg$ /anbmR.[z)/z^RgGVFCO[rP?#fFJzq6&w?D!d}dNg|}of(uI6<t' );
define( 'NONCE_KEY',        '0&#xA0~J8(u=MC{erG^F7n}>nhsN$YX)qU[`b+nOroH:V%4Zr,M=F|uN{WJti<Ec' );
define( 'AUTH_SALT',        ':G[RtS#91r/c>4!a+<T>ssHhlgtirjzXAT<h+272[~..Ps8*jlVI>hN&&:Pnkt=4' );
define( 'SECURE_AUTH_SALT', '`r5uUHO]5dCW{OuhE.EaGr}!Chb~br6_(F_p:22RYwCC j^|;vbo^Lt6j3qZH |c' );
define( 'LOGGED_IN_SALT',   'xH[m-rtwMlk)fIAHM`TQdUW4o$EjKwBCE*6I|E36Q3yk&NQ&R]K7y[wFH8M[W=JB' );
define( 'NONCE_SALT',       'xp-mc/u`Myh-H|r)KQm%6^*3kQ}?f[$7}I np_|:(:ngJ/) =cN-ljW/Fmu?Ph9 ' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

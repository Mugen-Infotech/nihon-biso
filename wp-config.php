<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nihon_biso');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

define('FS_METHOD', 'direct');

define('AUTH_KEY',         'WI_(S17b_REwsj|V.]ToF#L|02T#d8oejFvP01.pS3n@7M!rJ<p(Fx#@NYp%-}w1');
define('SECURE_AUTH_KEY',  'Ha}Wr[T(}hj=`G+pLP4RpRAu-qG!Tuohon$1z~B_-Y0>@MsmPb$V+q,E/DK&2<`h');
define('LOGGED_IN_KEY',    'S63^q?Q^{~t*9HC*KVBl22olJ/XCVTs*0J!vQWAb2.c1*2Lt%=*xuaH_7_.?%)#g');
define('NONCE_KEY',        'y {c<^=PAp8~Uot&R)kp#=~3m-OCLabAFSyH-&0Mz:<p`~|6JR4:<iw%axW5RAQr');
define('AUTH_SALT',        'Yj=`nAd`_;U2*jD&?Y<d#$@G%1n]a#%*S|.|5OJxK!qpgl/bhxCd=07R:~A ickW');
define('SECURE_AUTH_SALT', 'gp+Ci+P~Bf5?-L_jp@0i[z2SI*7JA#<1NsB<)*/V6O=`7T/~/<+^q{g~d,B>iv4i');
define('LOGGED_IN_SALT',   '~9E TM8Vy?>sF.Fc.!z)_UQA4&=f!cp$/5HEwU=L|l.?gBV<zVi]0e608@k}v/S~');
define('NONCE_SALT',       'J|>i6PU3G&U}>{,~;?7 {FTH6Dj^ dN.cGBt4zSB$^zRo3%QA@?>cWQ I/`fXcsV');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

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
define( 'DB_NAME', 'donboscopalabek' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         '@!Q/^AbdyCW`myN)U?)J}&Q]Gu,$s:G}qf!S/%y Vp]lVr0J^8I71P1iI5n>jTB[' );
define( 'SECURE_AUTH_KEY',  '~-p043$R9>cE7}:uztr8G0ctPn?bp<x+l&x8GO_@5njbZ-GS$_y/+ggZWe&o u:~' );
define( 'LOGGED_IN_KEY',    '@TW9pfpCe/iz!#ql@.),3o;ntY~*Ga#Q8T-byf`-j;/&kf(T3XH/s &{Q8*(#i#n' );
define( 'NONCE_KEY',        '>@v %Z*XwQ!Kbn#fY[VId?&$QXAcRSfpE@* Tga)5fZ;GjB]S(AFHv/DumE5SH6.' );
define( 'AUTH_SALT',        '*)jdrj.DtB4w@@9Sv|XG:<K+RbXm.N8/VfAuBLP?;PD346`Ae7R<+~0Ev8kI-u;6' );
define( 'SECURE_AUTH_SALT', 'nKdzW@M/y?hkW%H?OdI-mYH}EIO%&v&bIPi90m?(SIT6|?+af)/ogc[ePPZ28[Hn' );
define( 'LOGGED_IN_SALT',   '&<NhND}@$R7ggC:GbQUzhVE<eq5ZHA]r&ep&^{:{(p]=,Gmky9cP1^yJ>6W$]h89' );
define( 'NONCE_SALT',       'k,tNvad!]@%8?#]J+q+y.F0(ve=9$&<^5H|qhmMG{;+_2<Lq*^[9yM}l01w|W_P7' );

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

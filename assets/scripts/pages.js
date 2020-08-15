// const SAMPLE_COMPONENTS = require('./components/sample');

/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

// eslint-disable-next-line func-names
(function ($) {
	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.
	const FancySquares = {
		// All pages
		common: {
			init() {
				// JavaScript to be fired on all pages
				// eslint-disable-next-line no-console
				console.log('what');
				// $(document).foundation(); // Foundation JavaScript

				// SAMPLE_COMPONENTS.testingFunction();

				// SAMPLE_COMPONENTS.testWidthJs();
			},
			finalize() {
				// JavaScript to be fired on all pages, after page specific JS is fired
			}
		},
		// Home page
		home: {
			init() {
				// JavaScript to be fired on the home page
				// fancySquareCookies.remove('modal_shown');
				// if (fancySquareCookies.get('modal_shown') === undefined) {
				//                 fancySquareCookies.set('modal_shown', 'value', { expires: 7 });
				//                 $('#newsletterModal').foundation('open');
				//             }
			},
			finalize() {
				// JavaScript to be fired on the home page, after the init JS
			}
		},
		// About us page, note the change from about-us to about_us.
		about_us: {
			init() {
				// JavaScript to be fired on the about us page
			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	const UTIL = {
		fire(func, funcname, args) {
			let fire;
			const namespace = FancySquares;
			funcname = funcname === undefined ? 'init' : funcname;
			fire = func !== '';
			fire = fire && namespace[func];
			fire = fire && typeof namespace[func][funcname] === 'function';

			if (fire) {
				namespace[func][funcname](args);
			}
		},
		loadEvents() {
			// Fire common init JS
			UTIL.fire('common');

			// Fire page-specific init JS, and then finalize JS
			$.each(
				document.body.className.replace(/-/g, '_').split(/\s+/),
				(i, classnm) => {
					UTIL.fire(classnm);
					UTIL.fire(classnm, 'finalize');
				}
			);

			// Fire common finalize JS
			UTIL.fire('common', 'finalize');
		}
	};

	// Load Events
	$(document).ready(UTIL.loadEvents);
// eslint-disable-next-line no-undef
}(jQuery)); // Fully reference jQuery after this point.

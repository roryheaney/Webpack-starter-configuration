import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import PowerReviews from './vue/PowerReviews.vue';

Vue.use(BootstrapVue);
// Vue.component('FocusTrap', FocusTrap);
//
// PDP
const powerReviewsPaginationEl = document.getElementById('power-reviews-data');

// Power Reviews Pagination
if (powerReviewsPaginationEl != null) {
	new Vue({ // eslint-disable-line no-new
		el: '#power-reviews-data',
		render(h) {
			return h(PowerReviews);
		},
	});
}

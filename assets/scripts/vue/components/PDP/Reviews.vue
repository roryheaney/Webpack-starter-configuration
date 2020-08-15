<template>
	<ul
		role="list"
		class="pdp-reviews__reviews"
		tabindex="-1"
		data-js="review-list-focus"
		>
		<li
			v-for="item in data"
			:key="item.review_id"
			role="listitem"
			class="pdp-reviews__review"
			>
			<div class="star-ratings-sprite">
				<span
					:class="'star-ratings-sprite__rating star-ratings-sprite__rating--' + item.metrics.rating"
					:aria-label="'rated ' + item.metrics.rating + ' out of 5 stars' "
				/>
			</div>
			<span class="pdp-reviews__by-line">
				by <span>
					{{ item.details.nickname }}
				</span>
			</span>
			<p
				class="pdp-reviews__review-title"
			>
				{{ item.details.headline }}
			</p>
			<div
				class="pdp-reviews__review-copy"
			>
				{{ item.details.comments }}
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	props: [
		'data'
	]
}
</script>

<template>
	<ul
		role="list"
		class="pdp-reviews__overview"
		>
		<li
			v-for="item in data"
			:key="item.name"
			class="row align-items-center pdp-reviews__overview-item"
			role="listitem"
			>
			<div
				class="col-auto pr-0"
				>
				<span
					class="pdp-reviews__overview-stars-text"
					aria-hidden="true"
				>
					{{ item.name }}
				</span>
			</div>
			<div class="col">
				<b-progress
					:value="item.percentage"
					max="100"
				/>
			</div>
			<div
				class="col-auto pl-0"
				:aria-label="item.percentage+'% of votes are '+item.name"
			>
				<span class="pdp-reviews__overview-percentage">
					{{ item.percentage }}%
				</span>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	props:[
		'data'
	]
}
</script>

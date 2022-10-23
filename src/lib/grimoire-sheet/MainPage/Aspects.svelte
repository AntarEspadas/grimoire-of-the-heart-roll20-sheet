<script lang="ts">
	import LabeledInput from '$lib/LabeledInput.svelte';
</script>

<div class="aspects">
	<LabeledInput i18n="aspects" name="Aspects" component="text-area" labelElement="h1" />
	<LabeledInput i18n="aspect-points" name="Aspect Points" />
</div>

<style lang="scss">
	.aspects {
		height: 100%;
		display: grid;
		padding: 10px;
		gap: 5px;
		grid-template-rows: 40px 1fr;
		grid-template-columns: 4fr 4fr 3fr 35px;
		grid-template-areas:
			'aspects-label aspect-points-label aspect-points .'
			'aspects aspects aspects aspects';

		:global(.aspect-points-label) {
			justify-content: end;
		}

		:global(.chipped-textarea) {
			--chip-size: 20px;
		}
	}
</style>

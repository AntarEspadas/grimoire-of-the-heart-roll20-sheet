<script lang="ts">
	import ChippedCheckbox from '$lib/ChippedCheckbox.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';

	let bgColor = '#8395AE';
</script>

<div class="config-page">
	<ChippedDiv class="container" {bgColor} chipSize={20}>
		<ChippedCheckbox name="attr_enable_persona_2" value="1" />
		<Label i18n="second-persona-page">Second Persona Page</Label>
	</ChippedDiv>
</div>

<style lang="sass">
	.config-page
		padding: 10px
		:global(.container)
			padding: 24px
			display: grid
			gap: 5px
			grid-template-columns: 50px auto
			background-color: #8395AE
</style>

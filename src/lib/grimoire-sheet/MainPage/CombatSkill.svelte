<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import RollableLabel from '$lib/RollableLabel.svelte';

	export let name: string;
	export let abbreviation: string;

	export let i18n: string;

	$: attr = name.toLowerCase();
</script>

<input type="hidden" disabled value={`@{${name}}`} name="attr_{abbreviation}" />
<RollableLabel {i18n} {name} {abbreviation} style="grid-area: {attr}-label" />

<ChippedTextField
	name="attr_{attr}"
	type="number"
	value="0"
	style="grid-area: {attr};"
	class="combat-skill"
/>

<style lang="sass">
	:global(.chipped-input.combat-skill)	
		font-size: 50px
		--chip-size: 15px
		height: 50px
</style>

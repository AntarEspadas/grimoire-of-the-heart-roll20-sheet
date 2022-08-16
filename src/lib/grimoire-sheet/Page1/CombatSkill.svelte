<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	export let name: string;
	export let abbreviation: string;

	const bgColor = 'white';
</script>

<p>{name} ({abbreviation.toUpperCase()})</p>
<ChippedTextField
	name="attr_{name.toLowerCase()}"
	type="number"
	fontSize="50px"
	h="50px"
	chipSize={15}
	{bgColor}
/>

<style lang="sass">
	p
		color: white
		font-weight: 900
		font-size: 13px
		margin: 0
		white-space: nowrap

</style>

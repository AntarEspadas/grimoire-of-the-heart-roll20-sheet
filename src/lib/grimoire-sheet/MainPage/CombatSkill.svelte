<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import RollableLabel from '$lib/RollableLabel.svelte';

	export let name: string;
	export let abbreviation: string;

	$: attr = name.toLowerCase();
</script>

<input type="hidden" disabled value={`@{${name}}`} name="attr_{abbreviation}" />
<RollableLabel {name} {abbreviation} />

<ChippedTextField
	name="attr_{attr}"
	type="number"
	fontSize="50px"
	h="50px"
	chipSize={15}
	value="0"
/>

<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	export let name: string;

	export let attribute: string | undefined = undefined;

	export let component: 'text-area' | 'text-field' = 'text-field';

	const components = {
		'text-area': ChippedTextArea,
		'text-field': ChippedTextField
	};

	let selectedComponent = components[component];

	$: internalName = name.toLocaleLowerCase().replaceAll(' ', '-').replaceAll('/', '-');

	$: attribute = attribute ?? internalName.replaceAll('-', '_');

	$: extraProps = component == 'text-area' ? { h: '100%' } : {};
</script>

<Label style="grid-area: {internalName}-label;">{name}</Label>
<svelte:component
	this={selectedComponent}
	style="grid-area: {internalName}"
	chipSize={7}
	name="attr_{attribute}"
	{...extraProps}
/>

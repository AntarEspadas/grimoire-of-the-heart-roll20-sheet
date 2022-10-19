<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	export let name: string;

	export let attribute: string | undefined = undefined;

	export let component: 'text-area' | 'text-field' = 'text-field';

	export let i18n: string;

	export let labelElement = 'p';

	export let chipSize = 7;

	export let labelClass: string | undefined = undefined;

	const components = {
		'text-area': ChippedTextArea,
		'text-field': ChippedTextField
	};

	let selectedComponent = components[component];

	$: internalName = name.toLocaleLowerCase().replaceAll(' ', '-').replaceAll('/', '-');

	$: attribute = attribute ?? internalName.replaceAll('-', '_');

	$: extraProps = component == 'text-area' ? { h: '100%' } : {};
</script>

<Label {i18n} style="grid-area: {internalName}-label;" element={labelElement} class={labelClass}
	>{name}</Label
>
<svelte:component
	this={selectedComponent}
	style="grid-area: {internalName}"
	{chipSize}
	name="attr_{attribute}"
	{...extraProps}
/>

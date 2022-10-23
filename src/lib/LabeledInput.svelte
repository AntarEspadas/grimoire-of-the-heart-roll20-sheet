<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	export let name: string;

	export let attribute: string | undefined = undefined;

	export let component: 'text-area' | 'text-field' = 'text-field';

	export let i18n: string;

	export let labelElement = 'p';

	export let labelClass: string | undefined = undefined;

	export let disabled = false;

	const components = {
		'text-area': ChippedTextArea,
		'text-field': ChippedTextField
	};

	let selectedComponent = components[component];

	$: internalName = name.toLocaleLowerCase().replaceAll(' ', '-').replaceAll('/', '-');

	$: attribute = attribute ?? 'attr_' + internalName.replaceAll('-', '_');

	let extraProps: { [key: string]: any } = {};

	$: if (component == 'text-field') extraProps.disabled = disabled;
</script>

<Label {i18n} style="grid-area: {internalName}-label;" element={labelElement} class={labelClass}
	>{name}</Label
>
<svelte:component
	this={selectedComponent}
	style="grid-area: {internalName}"
	name={attribute}
	{...extraProps}
/>

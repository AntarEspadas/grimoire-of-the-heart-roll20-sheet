<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Corner } from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';
	import { getContext } from '../PersonaPage/PersonaPage.svelte';

	export let h: string | undefined = undefined;

	const { attr } = getContext();
</script>

<div class="types">
	<Label i18n="types">Types</Label>
	<ChippedTextField {h} name={attr('type_1')} chipSize={5} corner={Corner.bottomRight} />
	<ChippedTextField {h} name={attr('type_2')} chipSize={5} corner={Corner.bottomLeft} />
	<ChippedTextField {h} name={attr('type_3')} chipSize={5} />
	<ChippedTextField {h} name={attr('type_4')} chipSize={5} corner={Corner.topLeft} />
</div>

<style lang="scss">
	.types {
		padding: 10px;
		gap: 8px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		:global(.label) {
			grid-column: 1 / 3;
		}
	}
</style>

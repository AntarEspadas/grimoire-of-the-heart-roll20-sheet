<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Corner } from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';
	import { getContext } from '../PersonaPage/PersonaPage.svelte';

	const { attr } = getContext();
</script>

<div class="types">
	<Label i18n="types">Types</Label>
	<ChippedTextField name={attr('type_1')} corner={Corner.bottomRight} />
	<ChippedTextField name={attr('type_2')} corner={Corner.bottomLeft} />
	<ChippedTextField name={attr('type_3')} />
	<ChippedTextField name={attr('type_4')} corner={Corner.topLeft} />
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

		:global(.chipped-select) {
			--chip-size: 5px;
		}
	}
</style>

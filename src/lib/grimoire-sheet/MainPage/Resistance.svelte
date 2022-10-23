<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	export let type: string;

	import { getContext } from '../PersonaPage/PersonaPage.svelte';

	const { attr } = getContext();

	const url =
		'https://raw.githubusercontent.com/Naratna/grimoire-of-the-heart-roll20-sheet/master/static/assets/';
</script>

<img src="{url}{type}.PNG" alt={type} style="grid-area: {type}-img" />

<ChippedTextField name={attr(`${type}_resistance`)} style="grid-area: {type};" />

<style lang="sass">
    img
        width: 100%
        height: 100%
        object-fit: cover
</style>

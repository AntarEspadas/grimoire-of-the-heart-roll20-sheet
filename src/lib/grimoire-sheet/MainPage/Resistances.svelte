<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { getContext } from '../PersonaPage/PersonaPage.svelte';

	export let inputHeight: string | undefined = undefined;
	export let imgHeight = '40px';

	export let types: string[][] = [
		['physical', 'fire', 'ice'],
		['thunder', 'wind', 'psychokinetic'],
		['nuclear', 'light', 'dark'],
		['status', 'intel']
	];

	export let justify = 'center';

	export let titleOffset: number = 0;

	const url = 'http://kurisu.pls-step-on.me/media/types/';

	const { attr } = getContext();
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="offset-{titleOffset}">
			<Label>Resistances</Label>
		</Col>
	</Row>
	{#each types as typeRow}
		<Row dense class="d-flex justify-{justify}">
			{#each typeRow as resistance}
				<Col class="pt-0 pb-0 col-4">
					<img
						src="{url}{resistance}.png"
						alt="{resistance}_resistance"
						style="height: {imgHeight}"
					/>
				</Col>
			{/each}
		</Row>
		<Row dense class="d-flex justify-{justify}">
			{#each typeRow as type}
				<Col class="pt-1 pb-1 col-4">
					<ChippedTextField h={inputHeight} name={attr(type + '_resistance')} chipSize={7} />
				</Col>
			{/each}
		</Row>
	{/each}
</Container>

<style lang="sass">
    img
        width: 100%
        object-fit: cover
</style>

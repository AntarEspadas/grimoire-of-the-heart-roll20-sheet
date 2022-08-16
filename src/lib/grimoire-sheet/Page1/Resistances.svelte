<script>
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	const resistances = [
		['physical', 'fire', 'ice'],
		['thunder', 'wind', 'psychokinetic'],
		['nuclear', 'light', 'dark'],
		['status', 'intel']
	];

	const url = 'http://kurisu.pls-step-on.me/media/types/';
</script>

<Container class="pt-0">
	<Row dense>
		<Col>
			<p>Resistances</p>
		</Col>
	</Row>
	{#each resistances as resistanceRow}
		<Row dense class="d-flex justify-center">
			{#each resistanceRow as resistance}
				<Col class="pt-0 pb-0 col-4">
					<img src="{url}{resistance}.png" alt="{resistance}_resistance" />
				</Col>
			{/each}
		</Row>
		<Row dense class="d-flex justify-center">
			{#each resistanceRow as resistance}
				<Col class="pt-1 pb-1 col-4">
					<ChippedTextField name="attr_{resistance}_resistance" chipSize={7} />
				</Col>
			{/each}
		</Row>
	{/each}
</Container>

<style lang="sass">
    p
        color: white
        font-weight: 900
        margin: 0

    img
        width: 100%
        height: 40px
</style>

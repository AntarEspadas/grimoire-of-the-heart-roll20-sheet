<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const feats = [
		[
			{ name: 'Lv. 2', value: 2 },
			{ name: 'Lv. 4', value: 4 }
		],
		[
			{ name: 'Lv. 6', value: 6 },
			{ name: 'Lv. 8', value: 8 }
		],
		[
			{ name: 'Lv. 10', value: 10 },
			{ name: 'Lv. 12', value: 12 }
		],
		[
			{ name: 'Lv. 14', value: 14 },
			{ name: 'Lv. 16', value: 16 }
		],
		[
			{ name: 'Lv. 18', value: 18 },
			{ name: 'Lv. 20', value: 20 }
		],
		[
			{ name: 'Extra', value: 'extra_1' },
			{ name: 'Extra', value: 'extra_2' }
		]
	];
</script>

<Container class="pt-0">
	<Row dense>
		<Col>
			<h5>Feats</h5>
		</Col>
	</Row>
	{#each feats as row}
		<Row dense>
			{#each row as { name }}
				<Col class="col-6">
					<p>{name}</p>
				</Col>
			{/each}
		</Row>
		<Row dense>
			{#each row as { value }}
				<Col class="col-6">
					<ChippedTextField name="attr_feat_{value}" chipSize={7} />
				</Col>
			{/each}
		</Row>
	{/each}
</Container>

<style lang="sass">
    p, h5
        color: white
        font-weight: 900
        margin: 0
</style>

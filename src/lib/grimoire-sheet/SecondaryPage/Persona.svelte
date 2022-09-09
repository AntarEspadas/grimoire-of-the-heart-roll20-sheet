<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const arr = new Array(7).fill(0).map((_, i) => i);
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<h5>Persona</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4">
			<Label>Arcana</Label>
		</Col>
		<Col class="col-6">
			<Label>Name</Label>
		</Col>
		<Col>
			<Label>Lv</Label>
		</Col>
	</Row>
	{#each arr as i}
		<Row dense>
			<Col class="col-4 pt-0">
				<ChippedTextField name="attr_persona_arcana_{i + 1}" chipSize={7} />
			</Col>
			<Col class="col-6 pt-0">
				<ChippedTextField name="attr_persona_name_{i + 1}" chipSize={7} />
			</Col>
			<Col class="pt-0">
				<ChippedTextField name="attr_persona_level_{i + 1}" chipSize={7} type="number" />
			</Col>
		</Row>
	{/each}
</Container>

<style lang="sass">
    h5
        color: white
        font-weight: 900
        margin: 0
</style>

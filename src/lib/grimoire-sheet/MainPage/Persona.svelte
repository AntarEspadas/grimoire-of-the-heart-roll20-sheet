<script lang="ts">
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	const justify = 'end';
</script>

<Container class="pt-0">
	<!--  -->
	<Row dense>
		<Col class="pb-0">
			<h5>Persona</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3 pt-0">
			<Label {justify}>Name</Label>
		</Col>
		<Col class="col-4 pt-0">
			<ChippedTextField name="attr_persona_name" chipSize={7} />
		</Col>
		<Col class="col-1 pt-0">
			<Label {justify}>Lv</Label>
		</Col>
		<Col class="pt-0">
			<ChippedTextField type="number" name="attr_persona_level" chipSize={7} />
		</Col>
		<Col class="col-1 pt-0">
			<Label {justify}>SP</Label>
		</Col>
		<Col class="pt-0">
			<ChippedTextField type="number" name="attr_spell_points" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3 pt-0 pb-0">
			<Label {justify}>Conviction</Label>
		</Col>
		<Col class="pt-0 pb-0">
			<ChippedTextField name="attr_conviction" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3 pt-0 pb-0">
			<Label justify="center">Natural Skill</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="pt-0">
			<ChippedTextArea rows={10} chipSize={10} name="attr_natural_skill" h="80px" />
		</Col>
	</Row>
</Container>

<style lang="sass">
    h5
        margin: 0
        color: white
        font-weight: 900

</style>

<script>
	import { TextField, Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	const bgColor = 'white';

	const offset = '15px';
	const justify = 'end';
</script>

<Container class="pt-0" style="transform: translateX(-1%)">
	<Row>
		<Col class="col-3 sm-2">
			<Label {offset} {justify}>Character</Label>
		</Col>
		<Col class="col-9 sm-6">
			<ChippedTextField name="attr_character_name" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-3 sm-1">
			<Label {offset} {justify}>Class</Label>
		</Col>
		<Col class="col-5 sm-3">
			<ChippedTextField name="attr_class" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-1 sm-2">
			<Label {offset} {justify}>level</Label>
		</Col>
		<Col class="col-3 sm-2">
			<ChippedTextField type="number" name="attr_character_level" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-3 sm-1">
			<Label {offset} {justify}>Arcana</Label>
		</Col>
		<Col class="sm-3 mr-sm-0 mr-2">
			<ChippedTextField name="attr_arcana" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-1 sm-1">
			<Label {offset} {justify}>Player</Label>
		</Col>
		<Col class="sm-3">
			<ChippedTextField name="attr_player" chipSize={7} {bgColor} />
		</Col>
	</Row>
</Container>

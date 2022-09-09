<script lang="ts">
	import Block from './Block.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
	import Label from '$lib/Label.svelte';

	const justify = 'end';
</script>

<Container>
	<Row dense>
		<Col class="col-2">
			<Label {justify}>Character</Label>
		</Col>
		<Col class="col-6">
			<ChippedTextField name="attr_character_name" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label {justify}>EXP</Label>
		</Col>
		<Col>
			<ChippedTextField name="attr_experience" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-2">
			<Label {justify}>Occupation</Label>
		</Col>
		<Col class="col-3">
			<ChippedTextField name="attr_occupation" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label {justify}>Skill</Label>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_skill" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label {justify}>RP</Label>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_resource_points" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3">
			<Label {justify}>Worked Blocks</Label>
		</Col>
		<Block name="Sun" />
		<Block name="Mon" />
		<Block name="Tue" />
		<Block name="Wed" />
		<Block name="Thu" class="offset-1" />
		<Block name="Fri" />
		<Block name="Sat" />
		<Col class="col-2 offset-1">
			<Label {justify}>RP/Block</Label>
		</Col>
		<Col>
			<ChippedTextField name="attr_rp_per_block" chipSize={7} type="number" />
		</Col>
	</Row>
</Container>

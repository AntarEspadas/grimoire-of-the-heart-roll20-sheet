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
			<Label i18n="character" {justify}>Character</Label>
		</Col>
		<Col class="col-6">
			<ChippedTextField name="attr_character_name" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label i18n="experience-brief" {justify}>EXP</Label>
		</Col>
		<Col>
			<ChippedTextField name="attr_experience" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-2">
			<Label i18n="occupation" {justify}>Occupation</Label>
		</Col>
		<Col class="col-3">
			<ChippedTextField name="attr_occupation" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label i18n="skill" {justify}>Skill</Label>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_skill" chipSize={7} />
		</Col>
		<Col class="col-1">
			<Label i18n="resource-points-brief" {justify}>RP</Label>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_resource_points" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3">
			<Label i18n="worked-blocks" {justify}>Worked Blocks</Label>
		</Col>
		<Block name="Sun" i18n="sunday-short" />
		<Block name="Mon" i18n="monday-short" />
		<Block name="Tue" i18n="tuesday-short" />
		<Block name="Wed" i18n="wednesday-short" />
		<Block name="Thu" i18n="thursday-short" class="offset-1" />
		<Block name="Fri" i18n="friday-short" />
		<Block name="Sat" i18n="saturday-short" />
		<Col class="col-2 offset-1">
			<Label i18n="resource-points-block-brief" {justify}>RP/Block</Label>
		</Col>
		<Col>
			<ChippedTextField name="attr_rp_per_block" chipSize={7} type="number" />
		</Col>
	</Row>
</Container>

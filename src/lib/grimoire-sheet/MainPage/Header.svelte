<script lang="ts">
	import { TextField, Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	const bgColor = 'white';

	const offset = '15px';
	const justify = 'end';
</script>

<div class="header">
	<Container class="pt-0" style="transform: translateX(-1%)">
		<Row>
			<Col class="col-3 sm-2">
				<Label {offset} i18n="character">Character</Label>
			</Col>
			<Col class="col-9 sm-6">
				<ChippedTextField name="attr_character_name" chipSize={7} />
			</Col>
			<Col class="col-3 sm-1">
				<Label i18n="character-class" {offset}>Class</Label>
			</Col>
			<Col class="col-5 sm-3">
				<ChippedTextField name="attr_class" chipSize={7} />
			</Col>
			<Col class="col-1 sm-2">
				<Label i18n="character-level" {offset}>level</Label>
			</Col>
			<Col class="col-3 sm-2">
				<ChippedTextField type="number" name="attr_character_level" chipSize={7} />
			</Col>
			<Col class="col-3 sm-1">
				<Label i18n="arcana" {offset}>Arcana</Label>
			</Col>
			<Col class="sm-3 mr-sm-0 mr-2">
				<ChippedTextField name="attr_arcana" chipSize={7} />
			</Col>
			<Col class="col-1 sm-1">
				<Label i18n="player" {offset}>Player</Label>
			</Col>
			<Col class="sm-3">
				<ChippedTextField name="attr_player" chipSize={7} />
			</Col>
		</Row>
	</Container>
</div>

<style lang="sass">
	.header
		:global(.label)
			justify-content: end
</style>

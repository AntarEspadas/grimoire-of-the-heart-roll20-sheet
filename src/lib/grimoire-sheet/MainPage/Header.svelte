<script lang="ts">
	import { TextField, Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';

	const bgColor = 'white';

	const offset = '15px';
	const justify = 'end';
</script>

<div class="header">
	<LabeledInput i18n="character" name="Character" />
	<LabeledInput i18n="character-class" name="Class" />
	<LabeledInput i18n="character-level" name="Level" />
	<LabeledInput i18n="arcana" name="Arcana" />
	<LabeledInput i18n="player" name="Player" />
</div>

<!-- <Container class="pt-0" style="transform: translateX(-1%)">
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
</Container> -->
<style lang="scss">
	.header {
		padding: 10px;
		display: grid;
		gap: 10px;
		grid-template-areas:
			'character-label character character character'
			'class-label class level-label level'
			'arcana-label arcana player-label player';
		:global(.label) {
			justify-content: end;
		}
	}

	@media (min-width: 600px) {
		.header {
			grid-template-columns: 70px 70px 60px 150px 60px 1fr;
			grid-template-areas:
				'character-label character character character class-label class'
				'level-label level arcana-label arcana player-label player';
		}
	}
</style>

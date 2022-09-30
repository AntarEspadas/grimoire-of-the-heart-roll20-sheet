<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const confidants = [
		{ label: '0 The Fool', name: 'fool' },
		{ label: 'I The Magician', name: 'magician' },
		{ label: 'II The Priestess', name: 'priestess' },
		{ label: 'III The Empress', name: 'empress' },
		{ label: 'IV The Emperor', name: 'emperor' },
		{ label: 'V Hierophant', name: 'hierophant' },
		{ label: 'VI Lovers', name: 'lovers' },
		{ label: 'VII Chariot', name: 'chariot' },
		{ label: 'VIII Justice', name: 'justice' },
		{ label: 'IX The Hermit', name: 'hermit' },
		{ label: 'X Fortune', name: 'fortune' },
		{ label: 'XI Strength', name: 'strength' },
		{ label: 'XII Hanged Man', name: 'hanged_man' },
		{ label: 'XIII Death', name: 'death' },
		{ label: 'XIV Temper.', name: 'temperance' },
		{ label: 'XV The Devil', name: 'devil' },
		{ label: 'XVI Tower', name: 'tower' },
		{ label: 'XVII The Star', name: 'star' },
		{ label: 'XVIII The Moon', name: 'moon' },
		{ label: 'XIX The Sun', name: 'sun' },
		{ label: 'XX Judg./Aeon', name: 'judgement' },
		{ label: 'XXI The World', name: 'world' }
	];
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<Label i18n="confidants" element="h5">Confidants</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-5 pt-0">
			<Label i18n="arcana">Arcana</Label>
		</Col>
		<Col class="col-5 pt-0">
			<Label i18n="name">Name</Label>
		</Col>
		<Col class="col-2 pt-0">
			<Label i18n="rank">Rank</Label>
		</Col>
	</Row>
	{#each confidants as { label, name }, i}
		<Row dense>
			<Col class="col-5 pb-0 pt-0">
				<Label i18n="tarot-{name}" justify="end">{label}</Label>
			</Col>
			<Col class="col-5 pb-0 pt-0">
				<ChippedTextField name="attr_{name}_confidant" h="30px" chipSize={i ? 0 : 25} />
			</Col>
			<Col class="pb-0 pt-0">
				<ChippedTextField
					name="attr_{name}_confidant_rank"
					h="30px"
					chipSize={i ? 0 : 7}
					type="number"
				/>
			</Col>
		</Row>
	{/each}
</Container>

<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

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

<div class="confidants-header">
	<!--  -->
	<Label style="grid-area: confidants;" i18n="confidants" element="h1">Confidants</Label>

	<Label i18n="arcana">Arcana</Label>
	<Label i18n="name">Name</Label>
	<Label i18n="rank">Rank</Label>
</div>

<div class="confidants">
	{#each confidants as { label, name }, i}
		<Label i18n="tarot-{name}">{label}</Label>
		<ChippedTextField name="attr_{name}_confidant" h="30px" chipSize={i ? 0 : 25} />
		<ChippedTextField
			name="attr_{name}_confidant_rank"
			h="30px"
			chipSize={i ? 0 : 7}
			type="number"
		/>
	{/each}
</div>

<style lang="scss">
	.confidants-header {
		padding: 10px;
		padding-bottom: 0;
		padding-top: 8px;
		display: grid;
		column-gap: 5px;
		grid-template-columns: 125px 5fr 2fr;
		grid-template-areas:
			'confidants confidants confidants'
			'arcana name rank';
	}

	.confidants {
		padding: 10px;
		padding-top: 0;
		display: grid;
		column-gap: 5px;
		grid-template-columns: 125px 5fr 2fr;

		:global(.label) {
			justify-content: end;
		}
	}
</style>

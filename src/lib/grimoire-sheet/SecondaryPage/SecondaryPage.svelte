<script lang="ts">
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import AdditionalEquipment from './AdditionalEquipment.svelte';
	import Confidants from './Confidants.svelte';
	import Feats from './Feats.svelte';
	import Header from './Header.svelte';
	import Items from './Items.svelte';
	import Notes from './Notes.svelte';
	import Persona from './Persona.svelte';
	import Portrait from './Portrait.svelte';
</script>

<div class="secondary-page">
	<ChippedDiv style="grid-area: portrait;">
		<Portrait />
	</ChippedDiv>
	<ChippedDiv style="grid-area: header;" class="header">
		<Header />
	</ChippedDiv>
	<ChippedDiv style="grid-area: additional-equipment;" class="additional-equipment">
		<AdditionalEquipment />
	</ChippedDiv>
	<ChippedDiv style="grid-area: persona;">
		<Persona />
	</ChippedDiv>
	<ChippedDiv style="grid-area: feats;">
		<Feats />
	</ChippedDiv>
	<ChippedDiv style="grid-area: items;">
		<Items />
	</ChippedDiv>
	<ChippedDiv style="grid-area: notes;">
		<Notes />
	</ChippedDiv>
	<ChippedDiv style="grid-area: confidants;">
		<Confidants />
	</ChippedDiv>
</div>

<style lang="scss">
	.secondary-page > :global(.chipped-div.header) {
		--chip-size: 30px;
	}

	.secondary-page > :global(.chipped-div.additional-equipment) {
		--chip-size: 30px;
	}

	.secondary-page {
		padding: 10px;
		display: grid;
		gap: 24px;
		grid-template-rows: 0px 225px 150px minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) auto 300px;
		grid-template-areas: 'portrait' 'header' 'additional-equipment' 'persona' 'feats' 'items' 'confidants' 'notes';
	}

	@media (min-width: 600px) {
		.secondary-page {
			grid-template-columns: 2fr 3fr 3fr;
			grid-template-rows: 225px 150px minmax(335px, auto) minmax(400px, auto) 300px;
			grid-template-areas:
				'portrait header header'
				'additional-equipment additional-equipment feats'
				'persona persona feats'
				'items items confidants'
				'notes notes confidants';
		}
	}

	.secondary-page > :global(.chipped-div) {
		--chip-size: 40px;
		width: 100%;
		background-color: #8182ab;
	}
</style>

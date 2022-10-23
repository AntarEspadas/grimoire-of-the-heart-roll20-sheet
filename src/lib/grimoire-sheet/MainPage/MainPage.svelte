<script lang="ts">
	import ChippedDiv, { Corner } from '$lib/ChippedDiv.svelte';
	import Header from './Header.svelte';
	import CombatSkills from './CombatSkills.svelte';
	import HpAndEnergy from './HpAndEnergy.svelte';
	import SocialSkills from './SocialSkills.svelte';
	import Aspects from './Aspects.svelte';
	import Types from './Types.svelte';
	import Persona from './Persona.svelte';
	import Equipment from './Equipment.svelte';
	import Resistances from './Resistances.svelte';
	import CombatRolls from './CombatRolls.svelte';
</script>

<div class="main-page">
	<img
		src="https://raw.githubusercontent.com/Naratna/grimoire-of-the-heart-roll20-sheet/master/static/assets/grimoire-logo.png"
		alt="logo"
	/>
	<ChippedDiv style="grid-area: header;" class="header">
		<Header />
	</ChippedDiv>
	<ChippedDiv style="grid-area: rolls;" class="combat-rolls">
		<CombatRolls initiative />
	</ChippedDiv>
	<ChippedDiv corner={Corner.bottomLeft} style="grid-area: combat-skills;">
		<CombatSkills />
	</ChippedDiv>
	<ChippedDiv style="grid-area: hp;">
		<HpAndEnergy />
	</ChippedDiv>
	<ChippedDiv corner={Corner.bottomLeft} style="grid-area: social-skills;">
		<SocialSkills />
	</ChippedDiv>
	<ChippedDiv style="grid-area: aspects;">
		<Aspects />
	</ChippedDiv>
	<div class="persona-and-equipment">
		<div class="persona">
			<Persona />
		</div>
		<div class="types">
			<Types />
		</div>
		<div class="equipment">
			<Equipment />
		</div>
		<div class="resistances">
			<Resistances />
		</div>
	</div>
</div>

<style lang="scss">
	.main-page > :global(.chipped-div) {
		--chip-size: 40px;
	}

	.main-page > :global(.chipped-div.header),
	.main-page > :global(.chipped-div.combat-rolls) {
		--chip-size: 20px;
	}

	.main-page {
		padding: 10px;
		display: grid;
		gap: 24px;
		grid-template-rows: 0px repeat(5, auto) 300px;
		grid-template-areas: 'img' 'header' 'rolls' 'combat-skills' 'hp' 'social-skills' 'aspects' 'persona';
	}

	img {
		display: none;
	}

	@media (min-width: 600px) {
		.main-page {
			grid-template-columns: 3fr 2fr 1fr 6fr;
			grid-template-rows: 125px;
			grid-template-areas:
				'img header header header'
				'rolls rolls rolls rolls'
				'combat-skills combat-skills combat-skills hp'
				'social-skills social-skills aspects aspects'
				'persona persona persona persona';
		}

		img {
			height: 100%;
			object-fit: contain;
			grid-area: img;
			display: block;
			margin-right: auto;
			margin-left: auto;
		}
	}

	.main-page > :global(.chipped-div) {
		width: 100%;
		background-color: #8395ae;
	}

	.persona-and-equipment {
		--down: 45%;
		--chip-size: 40px;
		grid-area: persona;
		background-color: #8395ae;
		width: 100%;
		height: 500px;
		clip-path: polygon(
			100% var(--chip-size),
			calc(100% - var(--chip-size)) 0,
			0 0,
			0 var(--down),
			62.5% var(--down),
			62.5% 100%,
			61% 100%,
			61% calc(var(--down) + 4%),
			0 calc(var(--down) + 4%),
			0 calc(100% - var(--chip-size)),
			var(--chip-size) 100%,
			100% 100%
		);
		display: grid;
		grid-template-columns: 61% 1fr;
		grid-template-rows: 25% calc(var(--down) - 25%) 1fr;
		column-gap: 1.5%;
		row-gap: 2%;
	}

	.persona {
		width: 100%;
		height: 100%;
		grid-row: 1 / 3;
		grid-column: 1;
	}

	.types {
		width: 100%;
		height: 100%;
		grid-row: 1;
		grid-column: 2;
	}

	.equipment {
		width: 100%;
		height: 100%;
		grid-row: 3;
		grid-column: 1;
	}

	.resistances {
		width: 100%;
		height: 100%;
		grid-row: 2 / 4;
		grid-column: 2;
	}
</style>

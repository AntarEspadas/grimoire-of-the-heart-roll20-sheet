<script lang="ts" context="module">
	import { getContext as gc } from 'svelte';

	interface PersonaContext {
		getName(baseName: string, suffix?: string): string;
		attr(baseName: string, suffix?: string): string;
	}

	const key = Symbol();

	export function getContext(): PersonaContext {
		return (
			gc<PersonaContext | undefined>(key) ?? {
				getName: (a) => a,
				attr: (a) => 'attr_' + a
			}
		);
	}
</script>

<script lang="ts">
	import { Row, Col, Container } from 'svelte-materialify';
	import Header from './Header.svelte';
	import Types from '../MainPage/Types.svelte';
	import Resistances from '../MainPage/Resistances.svelte';
	import Bonuses from './Bonuses.svelte';
	import { setContext } from 'svelte';
	import SpellsList from './SpellList.svelte';
	import CombatRolls from '../MainPage/CombatRolls.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';

	export let suffix: string;

	const getName = (baseName: string, suffix_2: string = '') => baseName + suffix + suffix_2;
	const attr = (baseName: string, suffix: string = '') => 'attr_' + getName(baseName, suffix);

	setContext<PersonaContext>(key, {
		getName,
		attr
	});

	let bgColor = '#FB6674';

	const areas = `
		". title title title"
		". physical-img fire-img ice-img"
		". physical fire ice"
		"thunder-img wind-img psychokinetic-img nuclear-img"
		"thunder wind psychokinetic nuclear"
		"dark-img light-img status-img intel-img"
		"dark light status intel"
	`;
</script>

<div class="persona-page">
	<div class="header-container" style="background-color: {bgColor};">
		<Header />
		<div class="types">
			<Types h="25px" />
		</div>
		<div class="bonuses">
			<Bonuses />
		</div>
		<div class="resistances">
			<Resistances rows="auto repeat(6, 25px)" {areas} cols={4} />
		</div>
	</div>

	<ChippedDiv {bgColor} chipSize={20}>
		<CombatRolls />
	</ChippedDiv>

	<SpellsList />
</div>

<style lang="sass">

	.persona-page
		padding: 10px
		display: grid
		gap: 10px
		grid-template-columns: 1fr

	.header-container
		--down: 55%
		--chip-size: 40px
		width: 100%
		height: 350px
		clip-path: polygon(100% var(--chip-size), calc(100% - var(--chip-size)) 0, 0 0, 0 var(--down), 62.5% var(--down), 62.5% 100%, 61% 100%, 61% calc(var(--down) + 4%), 0 calc( var(--down) + 4% ), 0 calc(100% - var(--chip-size)), var(--chip-size) 100%, 100% 100%)
		display: grid
		grid-template-columns: 61% 1fr
		grid-template-rows: 25% calc(var(--down) - 25%) 1fr
		column-gap: 1.5%
		row-gap: 2%

	:global(.header)
		width: 100%
		height: 100%
		overflow-x: visible
		grid-row: 1 / 3
		grid-column: 1
	
	.types
		width: 100%
		height: 100%
		grid-row: 1
		grid-column: 2
		padding-left: 70px

	.bonuses
		width: 100%
		height: 100%
		grid-row: 3
		grid-column: 1

	.resistances
		width: 100%
		height: 100%
		grid-row: 2 / 4
		grid-column: 2
</style>

<script lang="ts" context="module">
	import { getContext as gc } from 'svelte';

	interface PersonaContext {
		getName(baseName: string, max?: boolean): string;
		attr(baseName: string, max?: boolean): string;
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
	import Spells from './SpellList.svelte';

	const getName = (baseName: string, max: boolean = false) =>
		baseName + suffix + (max ? '_max' : '');
	const attr = (baseName: string, max: boolean = false) => 'attr_' + getName(baseName, max);

	export let suffix: string;
	setContext<PersonaContext>(key, {
		getName,
		attr
	});

	let bgColor = '#FB6674';

	const types = [
		['physical', 'fire'],
		['ice', 'thunder', 'wind'],
		['psychokinetic', 'nuclear', 'light'],
		['dark', 'status', 'intel']
	];
</script>

<Container fluid>
	<Row>
		<Col>
			<div class="header-container" style="background-color: {bgColor};">
				<div class="header">
					<Header />
				</div>
				<div class="types">
					<Types class="pl-16" h="25px" />
				</div>
				<div class="bonuses">
					<Bonuses />
				</div>
				<div class="resistances">
					<Resistances {types} justify="end" titleOffset={4} inputHeight="25px" imgHeight="25px" />
				</div>
			</div>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-12">
			<Spells />
		</Col>
	</Row>
</Container>

<style lang="sass">

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

	.header
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

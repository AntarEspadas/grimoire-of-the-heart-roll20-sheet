<script lang="ts">
	import { Row, Col, Container } from 'svelte-materialify';
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
	import AttackAndDodge from './AttackAndDodge.svelte';

	const debug = false;

	let bgColor = debug ? 'rgba(255, 149, 174, 0.5)' : '#8395AE';
</script>

<div class="guide" style={debug ? undefined : 'background-image: unset;'}>
	<Container fluid>
		<Row>
			<Col>
				<slot name="image" />
			</Col>
			<Col class="col-12 sm-10">
				<ChippedDiv w="100%" smH="125px" h="175px" {bgColor} chipSize={20}>
					<Header />
				</ChippedDiv>
			</Col>
		</Row>
		<Row>
			<Col>
				<ChippedDiv w="100%" {bgColor} chipSize={20}>
					<AttackAndDodge />
				</ChippedDiv>
			</Col>
		</Row>
		<Row>
			<Col class="col-12 sm-6">
				<ChippedDiv corner={Corner.bottomLeft} w="100%" h="250px" {bgColor} chipSize={40}>
					<CombatSkills />
				</ChippedDiv>
			</Col>
			<Col class="col-12 sm-6">
				<ChippedDiv w="100%" h="250px" {bgColor} chipSize={40}>
					<HpAndEnergy />
				</ChippedDiv>
			</Col>
		</Row>
		<Row>
			<Col class="col-12 sm-5">
				<ChippedDiv corner={Corner.bottomLeft} w="100%" h="300px" {bgColor} chipSize={40}>
					<SocialSkills />
				</ChippedDiv>
			</Col>
			<Col>
				<ChippedDiv w="100%" h="300px" {bgColor} chipSize={40}>
					<Aspects />
				</ChippedDiv>
			</Col>
		</Row>
		<Row>
			<Col>
				<div class="persona-and-equipment" style="background-color: {bgColor};">
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
			</Col>
		</Row>
	</Container>
</div>

<style lang="sass">
	.guide
		background: url("https://raw.githubusercontent.com/grimoireofheart/grimoireofheart.github.io/main/Resources/Sheets/PNG/Character%20Sheet/Character%20Sheet-1.png")
		height: 100%
		background-size: 107%
		background-position: center center

	.persona-and-equipment	
		--down: 45%
		--chip-size: 40px
		width: 100%
		height: 500px
		clip-path: polygon(100% var(--chip-size), calc(100% - var(--chip-size)) 0, 0 0, 0 var(--down), 62.5% var(--down), 62.5% 100%, 61% 100%, 61% calc(var(--down) + 4%), 0 calc( var(--down) + 4% ), 0 calc(100% - var(--chip-size)), var(--chip-size) 100%, 100% 100%)
		display: grid
		grid-template-columns: 61% 1fr
		grid-template-rows: 25% calc(var(--down) - 25%) 1fr
		column-gap: 1.5%
		row-gap: 2%

	.persona
		width: 100%
		height: 100%
		grid-row: 1 / 3
		grid-column: 1
	
	.types
		width: 100%
		height: 100%
		grid-row: 1
		grid-column: 2

	.equipment
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

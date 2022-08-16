<script lang="ts">
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
	import AdditionalEquipment from './AdditionalEquipment.svelte';
	import Confidants from './Confidants.svelte';
	import Feats from './Feats.svelte';
	import Header from './Header.svelte';
	import Items from './Items.svelte';
	import Notes from './Notes.svelte';
	import Persona from './Persona.svelte';
	import PersonaRepeating from './PersonaRepeating.svelte';
	import Portrait from './Portrait.svelte';

	let bgColor = '#8182AB';
</script>

<Container fluid>
	<Row>
		<Col class="col-3 d-none d-sm-block">
			<ChippedDiv chipSize={40} w="100%" h="225px" {bgColor}>
				<Portrait />
			</ChippedDiv>
		</Col>
		<Col>
			<ChippedDiv chipSize={30} w="100%" h="225px" {bgColor}>
				<Header />
			</ChippedDiv>
		</Col>
	</Row>
	<Row>
		<Col class="col-12 sm-7">
			<Row dense class="mb-4">
				<ChippedDiv chipSize={25} w="100%" h="150px" {bgColor}>
					<AdditionalEquipment />
				</ChippedDiv>
			</Row>
			<Row dense>
				<ChippedDiv chipSize={40} w="100%" style="min-height: 335px;" {bgColor}>
					<PersonaRepeating />
				</ChippedDiv>
			</Row>
		</Col>
		<Col>
			<ChippedDiv chipSize={40} w="100%" h="500px" {bgColor}>
				<Feats />
			</ChippedDiv>
		</Col>
	</Row>
	<Row>
		<Col class="col-12 sm-7">
			<Row dense class="mb-4">
				<ChippedDiv chipSize={40} w="100%" h="400px" {bgColor}>
					<Items />
				</ChippedDiv>
			</Row>
			<Row dense>
				<ChippedDiv chipSize={40} w="100%" h="307px" {bgColor}>
					<Notes />
				</ChippedDiv>
			</Row>
		</Col>
		<Col>
			<ChippedDiv chipSize={40} w="100%" h="725px" {bgColor}>
				<Confidants />
			</ChippedDiv>
		</Col>
	</Row>
</Container>

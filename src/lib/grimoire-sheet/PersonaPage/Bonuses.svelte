<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	import Label from '$lib/Label.svelte';

	import { Container, Row, Col } from 'svelte-materialify';
	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();

	const skills = [
		[
			{
				label: 'STR',
				name: 'strength'
			},
			{
				label: 'MAG',
				name: 'magic'
			},
			{
				name: 'knowledge'
			},
			{
				name: 'charm'
			}
		],
		[
			{
				label: 'TEC',
				name: 'technique'
			},
			{
				label: 'AGI',
				name: 'agility'
			},
			{
				name: 'discipline'
			},
			{
				name: 'expression'
			}
		],
		[
			{
				label: 'VIT',
				name: 'vitality'
			},
			{
				label: 'LCK',
				name: 'luck'
			},
			{
				name: 'empathy'
			},
			{
				name: 'courage'
			}
		]
	];
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pt-0 pb-0">
			<Label element="h5">Bonuses</Label>
		</Col>
	</Row>
	{#each skills as skillRow}
		<Row dense>
			{#each skillRow as skill, i}
				<Col class="{skill.label ? 'col-1' : ''} pt-0 {i == 0 ? 'offset-1' : ''}">
					<Label>{skill.label ?? skill.name}</Label>
				</Col>
				<Col class="col-1 pt-0">
					<ChippedTextField chipSize={7} name={attr(skill.name + '_bonus')} type="number" />
				</Col>
			{/each}
		</Row>
	{/each}
</Container>

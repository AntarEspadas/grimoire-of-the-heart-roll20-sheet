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
				name: 'Strength'
			},
			{
				label: 'MAG',
				name: 'Magic'
			},
			{
				name: 'Knowledge'
			},
			{
				name: 'Charm'
			}
		],
		[
			{
				label: 'TEC',
				name: 'Technique'
			},
			{
				label: 'AGI',
				name: 'Agility'
			},
			{
				name: 'Discipline'
			},
			{
				name: 'Expression'
			}
		],
		[
			{
				label: 'VIT',
				name: 'Vitality'
			},
			{
				label: 'LCK',
				name: 'Luck'
			},
			{
				name: 'Empathy'
			},
			{
				name: 'Courage'
			}
		]
	];
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pt-0 pb-0">
			<Label i18n="bonuses" element="h5">Bonuses</Label>
		</Col>
	</Row>
	{#each skills as skillRow}
		<Row dense>
			{#each skillRow as skill, i}
				<Col class="{skill.label ? 'col-1' : ''} pt-0 {i == 0 ? 'offset-1' : ''}">
					<Label i18n={skill.label ? null : skill.name.toLowerCase()}
						>{skill.label ?? skill.name}</Label
					>
				</Col>
				<Col class="col-1 pt-0">
					<ChippedTextField chipSize={7} name={attr(skill.name + '_bonus')} type="number" />
				</Col>
			{/each}
		</Row>
	{/each}
</Container>

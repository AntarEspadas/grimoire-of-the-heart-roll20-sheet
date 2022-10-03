<script lang="ts">
	import ChippedSelect from '$lib/ChippedSelect.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	import { Container, Row, Col } from 'svelte-materialify';

	export let initiative = false;

	const mods = new Array(7).fill(0).map((_, i) => i - 3);

	const initiativeRoll =
		'&{template:general} {{title=Initiative}} {{roll=[[1d12 + @{agility}[AGI] &{tracker}]]}} {{color=blue}}';

	const template = (dice: string, type: string, skill: string) =>
		`&{template:general} {{title=${type}}} {{roll=[[@{${skill}}d@{${dice}}[${skill.toUpperCase()}d@{${dice}}]]]}}`;
</script>

<input type="hidden" name="attr_hdc" value="6" />
<input type="hidden" name="attr_ddc" value="6" />

<div class="combat-rolls">
	<Container>
		<Row>
			<Col class="d-flex justify-center col-6">
				<button
					data-i18n="dice-roll-attack"
					class="roll-button"
					type="roll"
					value={template('hdc', 'Attack', 'tec')}>Roll Attack</button
				>
			</Col>
			<Col>
				<Label i18n="hit-dice-category">Hit Dice Category</Label>
			</Col>
			<Col>
				<ChippedSelect name="attr_hdc_mod">
					{#each mods as mod}
						<option selected={mod == 0} value={mod}>{mod > 0 ? '+' + mod : mod}</option>
					{/each}
				</ChippedSelect>
			</Col>
		</Row>
		<Row>
			<Col class="d-flex justify-center col-6">
				<button
					data-i18n="dice-roll-dodge"
					class="roll-button"
					type="roll"
					value={template('ddc', 'Dodge', 'agi')}
				>
					Roll Dodge
				</button>
			</Col>
			<Col>
				<Label i18n="dodge-dice-category">Dodge Dice Category</Label>
			</Col>
			<Col>
				<ChippedSelect name="attr_ddc_mod">
					{#each mods as mod}
						<option selected={mod == 0} value={mod}>{mod > 0 ? '+' + mod : mod}</option>
					{/each}
				</ChippedSelect>
			</Col>
		</Row>
		{#if initiative}
			<Row>
				<Col class="d-flex justify-center col-6">
					<button data-i18n="initiative" class="roll-button" type="roll" value={initiativeRoll}
						>Initiative</button
					>
				</Col>
			</Row>
		{/if}
	</Container>
</div>

<style lang="sass">

    .combat-rolls
        :global(.label)
            justify-content: right

    button
        font-weight: 900
        color: white
        background: none
        border: none
        box-shadow: none

    button.roll-button.roll-button:before
        content: none

    button:hover
        text-decoration: underline

</style>

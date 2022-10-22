<script lang="ts">
	import Label from '$lib/Label.svelte';
	import CombatSkill from './CombatSkill.svelte';

	const bgColor = 'white';
</script>

<div class="combat-skills">
	<Label i18n="combat-skills" element="h1">Combat Skills</Label>
	<div class="grid">
		<CombatSkill i18n="strength" name="Strength" abbreviation="str" />
		<CombatSkill i18n="technique" name="Technique" abbreviation="tec" />
		<CombatSkill i18n="vitality" name="Vitality" abbreviation="vit" />
		<CombatSkill i18n="magic" name="Magic" abbreviation="mag" />
		<CombatSkill i18n="agility" name="Agility" abbreviation="agi" />
		<CombatSkill i18n="luck" name="Luck" abbreviation="lck" />
	</div>
</div>

<style lang="scss">
	.combat-skills {
		padding: 10px;
	}

	.grid {
		display: grid;
		row-gap: 5px;
		column-gap: 15px;

		grid-template-areas:
			'strength-label technique-label vitality-label'
			'strength technique vitality'
			'magic-label agility-label luck-label'
			'magic agility luck';
	}
</style>

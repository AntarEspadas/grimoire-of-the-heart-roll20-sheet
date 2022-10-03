<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	import CustomCheckbox from '$lib/CustomCheckbox.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import Label from '$lib/Label.svelte';

	const src =
		'https://raw.githubusercontent.com/Naratna/grimoire-of-the-heart-roll20-sheet/e6d6e462a93e31fa715c6ddc4063a62f03f4ef99/static/assets/skull.svg';
</script>

<div class="hp-energy">
	<Label i18n="hit-points" style="grid-area: hp-max-label">Hit Points</Label>
	<ChippedTextField chipSize={7} name="attr_hp_max" style="grid-area: hp-max" />
	<Label i18n="energy-max" style="grid-area: energy-max-label">Energy/Max</Label>
	<ChippedTextArea chipSize={7} name="attr_hp" style="grid-area: hp" />
	<ChippedTextField chipSize={7} name="attr_energy" style="grid-area: energy" />
	<ChippedTextField chipSize={7} name="attr_energy_max" style="grid-area: energy-max" />
	<Label i18n="buffs-conditions" style="grid-area: buffs-conditions-label;">Buffs/Conditions</Label>
	<ChippedTextArea chipSize={7} name="attr_buffs_conditions" style="grid-area: buffs-conditions;" />
	{#each [1, 2, 3] as i}
		<ChippedDiv style="grid-area: deaths-door-{i};" chipSize={7}>
			<CustomCheckbox name="attr_deaths_door_{i}" class="skull-checkbox">
				<img {src} alt="skull" />
			</CustomCheckbox>
		</ChippedDiv>
	{/each}
	<Label i18n="damage-reduction-brief" style="grid-area: damage-red-label">Damage Red</Label>
	<ChippedTextField chipSize={7} name="attr_damage_reduction" style="grid-area: damage-red;" />
</div>

<style lang="scss">
	img {
		height: 100%;
	}

	.hp-energy {
		padding: 10px;
		gap: 5px;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-template-areas:
			'hp-max-label hp-max-label hp-max energy-max-label energy-max-label energy-max-label'
			'hp hp hp energy energy-max .'
			'hp hp hp buffs-conditions-label buffs-conditions-label buffs-conditions-label'
			'hp hp hp buffs-conditions buffs-conditions buffs-conditions'
			'deaths-door-1 deaths-door-2 deaths-door-3 buffs-conditions buffs-conditions buffs-conditions'
			'damage-red-label damage-red-label damage-red buffs-conditions buffs-conditions buffs-conditions';

		:global(.skull-checkbox div) {
			height: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>

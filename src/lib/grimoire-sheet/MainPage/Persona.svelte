<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';
</script>

<div class="persona">
	<Label class="title" i18n="persona" element="h1">Persona</Label>
	<div class="grid">
		<LabeledInput i18n="name" name="Name" attribute="persona_name" />
		<LabeledInput i18n="level-short" name="Lv" attribute="persona_level" />
		<LabeledInput i18n="spirit-points-short" name="SP" attribute="spell_points" />
		<LabeledInput i18n="conviction-belief" name="Conviction" />
		<LabeledInput i18n="natural-skill" name="Natural Skill" component="text-area" />
	</div>
</div>

<style lang="scss">
	.persona {
		padding: 10px;
		height: 100%;

		.grid {
			height: 1fr;
			padding-bottom: 5px;
			display: grid;
			gap: 5px;
			grid-template-columns: 120px 3fr 30px 1fr 30px 1fr;
			grid-template-rows: repeat(3, auto) 1fr;
			grid-template-areas:
				'name-label name lv-label lv sp-label sp'
				'conviction-label conviction conviction conviction conviction conviction'
				'natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label'
				'natural-skill natural-skill natural-skill natural-skill natural-skill natural-skill';
		}

		:global(.label.title) {
			height: auto;
		}

		:global(.label.end) {
			justify-content: end;
		}
		:global(.label.center) {
			justify-content: center;
		}
	}
</style>

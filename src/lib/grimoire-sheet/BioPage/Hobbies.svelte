<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="hobbies">
	<Label element="h5">Occupation and hobbies</Label>
	<div class="grid">
		<LabeledInput name="Formal education" />
		<LabeledInput name="Job" />
		<LabeledInput name="Past experiences" />
		<LabeledInput name="Hobbies" />
	</div>
</div>

<style lang="scss">
	.hobbies {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-areas:
			'formal-education-label formal-education-label formal-education'
			'job-label job job'
			'past-experiences-label past-experiences-label past-experiences-label'
			'past-experiences past-experiences past-experiences'
			'hobbies-label hobbies-label hobbies-label'
			'hobbies hobbies hobbies';
	}
</style>

<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';

	const chatTemplate =
		'&{template:general} {{title=Persona}} {{name=@{_name}}} {{arcana=@{_arcana}}} {{level=@{_level}}} {{color=purple}}';
</script>

<div class="persona">
	<Label style="grid-area: persona;" i18n="persona" element="h1">Persona</Label>
	<Label i18n="arcana">Arcana</Label>
	<Label i18n="arcana">Name</Label>
	<Label i18n="level-short">Lv</Label>

	<div class="repeating">
		<fieldset class="repeating_personae">
			<EditableField {chatTemplate} display="grid">
				<div class="always">
					<ChippedTextField name="attr__arcana" />
					<ChippedTextField name="attr__name" />
					<ChippedTextField name="attr__level" type="number" />
				</div>
				<svelte:fragment slot="edit">
					<Label i18n="notes">Notes</Label>
					<ChippedTextArea name="attr__persona_notes" />
				</svelte:fragment>
			</EditableField>
			<div class="divider" />
		</fieldset>
	</div>
</div>

<style lang="scss">
	.persona {
		padding: 10px;
		display: grid;
		gap: 5px;
		grid-template-columns: 2fr 3fr 1fr;
		grid-template-areas:
			'persona persona persona'
			'arcana name level'
			'content content content';

		.repeating {
			grid-area: content;
		}

		.divider {
			height: 5px;
		}

		.always {
			display: grid;
			gap: 5px;
			grid-template-columns: 2fr 3fr 1fr;
		}

		:global(.editable-field .edit) {
			gap: 5px;
		}
	}
</style>

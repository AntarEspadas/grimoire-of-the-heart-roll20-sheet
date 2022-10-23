<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';

	const feats = [
		[
			{ name: 'Lv. 2', value: 2 },
			{ name: 'Lv. 4', value: 4 }
		],
		[
			{ name: 'Lv. 6', value: 6 },
			{ name: 'Lv. 8', value: 8 }
		],
		[
			{ name: 'Lv. 10', value: 10 },
			{ name: 'Lv. 12', value: 12 }
		],
		[
			{ name: 'Lv. 14', value: 14 },
			{ name: 'Lv. 16', value: 16 }
		],
		[
			{ name: 'Lv. 18', value: 18 },
			{ name: 'Lv. 20', value: 20 }
		],
		[
			{ name: 'Extra', value: 'extra_1' },
			{ name: 'Extra', value: 'extra_2' }
		]
	].flat();
</script>

<div class="feats">
	<Label i18n="feats" element="h1">Feats</Label>
	<fieldset class="repeating_feats">
		<EditableField
			chatTemplate={'&{template:general} {{title=Feat}} {{name=@{_feat_name}}} {{desc=@{_feat_description}}} {{color=purple}} '}
		>
			<svelte:fragment slot="edit">
				<ChippedTextField name="attr_featsource" placeholder="Source" class="feat-source" />
				<ChippedTextField name="attr__feat_name" class="mb-1" placeholder="Name" />
				<ChippedTextArea
					style="--chip-size: 10px;"
					placeholder="Description"
					name="attr__feat_description"
				/>
			</svelte:fragment>
			<svelte:fragment slot="normal">
				<span name="attr_featsource" />
				<ChippedTextField disabled name="attr__feat_name" />
			</svelte:fragment>
		</EditableField>
		<div class="divider" />
	</fieldset>
</div>

<style lang="scss">
	.feats {
		padding: 10px;
		display: grid;
		gap: 5px;

		:global(.editable-field .normal) {
			display: grid;
			gap: 5px;
			grid-template-columns: 1fr 3fr;
		}

		.divider {
			height: 5px;
		}

		:global(.feat-source) {
			margin-bottom: 4px;
			height: 30px;
		}
	}
</style>

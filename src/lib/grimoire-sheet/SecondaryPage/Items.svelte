<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';
</script>

<div class="items">
	<Label style="grid-area: items;" i18n="item" element="h1">Items</Label>
	<Label i18n="name">Name</Label>
	<Label i18n="quantity-short">Qty</Label>

	<div class="repeating">
		<fieldset class="repeating_items">
			<EditableField
				chatTemplate={'&{template:general} {{title=Item}} {{name=@{_item_name}}} {{desc=@{_item_description}}} {{color=purple}}'}
			>
				<div class="always">
					<ChippedTextField name="attr__item_name" chipSize={7} />
					<ChippedTextField name="attr__item_amount" chipSize={7} type="number" />
				</div>
				<svelte:fragment slot="edit">
					<Label i18n="description">Description</Label>
					<ChippedTextArea resizable chipSize={10} name="attr__item_description" />
				</svelte:fragment>
			</EditableField>
			<div class="divider" />
		</fieldset>
	</div>
</div>

<style lang="scss">
	.items {
		padding: 10px;
		display: grid;
		gap: 5px;
		grid-template-columns: 3fr 1fr;
		grid-template-areas:
			'items items'
			'name qty'
			'content content';

		.repeating {
			grid-area: content;
		}

		.divider {
			height: 5px;
		}

		.always {
			display: grid;
			gap: 5px;
			grid-template-columns: 3fr 1fr;
		}

		:global(.editable-field .normal) {
			display: grid;
			gap: 5px;
		}
	}
</style>

<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Col } from 'svelte-materialify';

	let className = '';
	export { className as class };
	export let name: string;

	export let i18n: string;
</script>

<Col class="col-1 {className}">
	<Label {i18n} justify="end">{name}</Label>
</Col>
<Col class="col-1">
	<ChippedTextField name="attr_{name}_block" chipSize={7} type="number" />
</Col>

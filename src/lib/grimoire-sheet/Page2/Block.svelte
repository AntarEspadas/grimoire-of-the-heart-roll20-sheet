<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Col } from 'svelte-materialify';

	let className = '';
	export { className as class };
	export let name: string;
</script>

<Col class="col-1 {className}">
	<div class="label-container">
		<p>{name}</p>
	</div>
</Col>
<Col class="col-1">
	<ChippedTextField name="attr_{name}_block" chipSize={7} type="number" />
</Col>

<style lang="sass">
	p
		color: white
		margin: 0
		font-weight: 900
		
	.label-container
		display: flex
		justify-content: flex-end
		align-items: center
		height: 100%
		gap: 10px
</style>

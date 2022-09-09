<script lang="ts">
	export let justify = 'start';
	export let color = 'white';
	export let margin = '0';
	export let fontWeight = '900';

	export let offset = '';

	$: transform = offset ? `transform: translateX(${offset});` : '';
</script>

<div
	style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: {justify};"
>
	<p style="color: {color}; font-weight: {fontWeight}; margin: {margin}; {transform}">
		<slot />
	</p>
</div>

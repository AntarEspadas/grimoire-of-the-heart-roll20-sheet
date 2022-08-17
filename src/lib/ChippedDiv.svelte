<!--suppress ALL -->
<script context="module" lang="ts">
	export enum Corner {
		topRight = 'top-right',
		topLeft = 'top-left',
		bottomRight = 'bottom-right',
		bottomLeft = 'botton-left'
	}
</script>

<script lang="ts">
	export let chipSize: number;
	export let corner: Corner = Corner.topRight;
	export let style = '';

	export let w: string | undefined = undefined;
	export let h: string | undefined = undefined;
	export let smH: string | undefined = undefined;
	export let bgColor: string | undefined = undefined;

	$: smH ??= h;

	function getCornerStyle(corner: Corner) {
		switch (corner) {
			case Corner.topRight:
				return `clip-path: polygon(calc(100% - ${chipSize}px) 0, 100% ${chipSize}px, 100% 100%, 0 100%, 0 0);`;
			case Corner.topLeft:
				return `clip-path: polygon(${chipSize}px 0, 0 ${chipSize}px, 0 100%, 100% 100%, 100% 0);`;
			case Corner.bottomRight:
				return `clip-path: polygon(0 0, 0 100%, calc(100% - ${chipSize}px) 100%, 100% calc(100% - ${chipSize}px), 100% 0);`;
			case Corner.bottomLeft:
				return `clip-path: polygon(0 0, 100% 0, 100% 100%, ${chipSize}px 100%, 0 calc(100% - ${chipSize}px));`;
			default:
				break;
		}
	}

	$: cornerStyle = getCornerStyle(corner);
</script>

<div
	style="width: {w}; --height: {h}; background-color: {bgColor}; {style}; {cornerStyle}; --smHeight: {smH};"
	{...$$restProps}
>
	<slot />
</div>

<style lang="sass">
	div
		height: var(--height)

	@media (min-width: 600px)
		div
			height: var(--smHeight)
</style>

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

<div class="sheet-chipped-div" style={cornerStyle}>
	<slot />
</div>

<style lang="sass">

</style>

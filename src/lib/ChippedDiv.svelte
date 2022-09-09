<!--suppress ALL -->
<script context="module" lang="ts">
	export enum Corner {
		topRight = 'top-right',
		topLeft = 'top-left',
		bottomRight = 'bottom-right',
		bottomLeft = 'bottom-left'
	}
</script>

<script lang="ts">
	export let chipSize: number | undefined = undefined;
	export let corner: Corner = Corner.topRight;
	export let style = '';

	export let w: string | undefined = undefined;
	export let h: string | undefined = undefined;
	export let smH: string | undefined = undefined;
	export let bgColor: string | undefined = undefined;

	let className: string = '';
	export { className as class };

	$: smH ??= h;

	$: widthStyle = w ? `width: ${w};` : '';
	$: bgColorStyle = bgColor ? `background-color: ${bgColor};` : '';
	$: chipSizeStyle = chipSize !== undefined && chipSize != 7 ? `--chip-size: ${chipSize}px;` : '';
</script>

<div
	style="{widthStyle} --height: {h}; --smHeight: {smH}; {chipSizeStyle} {bgColorStyle} {style}"
	class="chipped-div {corner} {className}"
	{...$$restProps}
>
	<slot />
</div>

<style lang="sass">

    .top-right
        clip-path: polygon(calc(100% - var(--chip-size)) 0, 100% var(--chip-size), 100% 100%, 0 100%, 0 0)
    .top-left
        clip-path: polygon(var(--chip-size) 0, 0 var(--chip-size), 0 100%, 100% 100%, 100% 0)
    .bottom-right
        clip-path: polygon(0 0, 0 100%, calc(100% - var(--chip-size)) 100%, 100% calc(100% - var(--chip-size)), 100% 0)
    .bottom-left
        clip-path: polygon(0 0, 100% 0, 100% 100%, var(--chip-size) 100%, 0 calc(100% - var(--chip-size)))

    div
        height: var(--height)
        background-color: white
        --chip-size: 7px

    @media (min-width: 600px)
        div
            height: var(--smHeight)
</style>

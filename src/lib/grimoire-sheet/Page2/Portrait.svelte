<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
</script>

<Container class="pt-0 pr-2 pl-2">
	<Row dense>
		<Col class="pb-0">
			<p>Portrait</p>
			<p /></Col
		>
	</Row>
	<Row dense>
		<Col class="pt-0">
			<ChippedDiv chipSize={30} w="100%" h="190px" bgColor="white">
				<img alt="avatar" name="attr_character_avatar" />
			</ChippedDiv>
		</Col>
	</Row>
</Container>

<!-- <div style="height: calc(98% - {fontHeight});">
	<ChippedDiv chipSize={30} w="95%" h="100%" bgColor="white">
	</ChippedDiv>
</div> -->
<style lang="sass">
    p 
        color: white
        font-weight: 900
        margin: 0

    img
        width: 100%
        height: 100%
        object-fit: cover
</style>

<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';
</script>

<Container class="pt-0 pr-2 pl-2">
	<Row dense>
		<Col class="pb-0">
			<Label i18n="portrait">Portrait</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="pt-0">
			<ChippedDiv chipSize={30} w="100%" h="190px" bgColor="white">
				<img alt="avatar" name="attr_character_avatar" />
			</ChippedDiv>
		</Col>
	</Row>
</Container>
>

<style lang="sass">
    img
        width: 100%
        height: 100%
        object-fit: cover
</style>

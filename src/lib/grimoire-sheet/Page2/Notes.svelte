<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
</script>

<Container class="pt-0">
	<Row dense>
		<Col>
			<h5>Notes</h5>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextArea chipSize={15} h="250px" w="100%" name="atr_notes" />
		</Col>
	</Row>
</Container>

<style lang="sass">
    h5
        color: white
        font-weight: 900
        margin: 0
</style>

<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
</script>

<Container class="pt-0">
	<Row dense>
		<Col>
			<Label element="h5">Notes</Label>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextArea chipSize={15} h="250px" w="100%" name="atr_notes" />
		</Col>
	</Row>
</Container>

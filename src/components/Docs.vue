<template>
	<div>
		<q-btn-dropdown
			color="secondary"
			text-color="primary"
			label="Documentation"
		>
			<q-list>
				<q-item
					v-for="link in links"
					:key="link.title"
					clickable
					v-close-popup
					@click="onItemClick(link.link)"
				>
					<q-item-section>
						<q-item-label>{{ link.title }}</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-btn-dropdown>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					title: 'AWS',
					link: 'https://docs.aws.amazon.com/'
				},
				{
					title: 'Terraform',
					link: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs'
				}
			]
		};
	},
	setup() {
		const onItemClick = (link) => {
			window.open(link, '_blank');
		};

		return { onItemClick };
	}
};
</script>

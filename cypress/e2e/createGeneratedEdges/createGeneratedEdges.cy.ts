describe('Test Create Generated edges on Jarvis', () => {
	it('Should response successfully when creating generated edges', () => {
		cy.request({
			method: 'POST',
			url: `http://localhost:8444/api/node/edge`,
			headers: { 'x-api-token': 'navfiber-tester' },
			body: {
				edge: {
					edge_type: 'RELATED_TO',
					weight: 1,
				},
				source: {
					node_type: 'Person',
					node_data: {
						name: 'Tom Smith',
					},
				},
				target: {
					node_type: 'Topic',
					node_data: {
						name: 'Stakwork',
					},
				},
			},
		}).then((response) => {
			expect(response.status).to.equal(200)
		})
	})
})

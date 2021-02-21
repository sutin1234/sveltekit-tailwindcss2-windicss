
module.exports = {
	preprocess: require("svelte-windicss-preprocess").preprocess({
		config: 'tailwind.config.cjs',
		compile: false,
		globalPreflight: true,
		globalUtility: true,
	}),
	kit: {
		adapter: '@sveltejs/adapter-node',
		target: '#svelte'
	}
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		MAPBOX_TOKEN:
			"pk.eyJ1IjoiaGFoYWV0b3lhcm9tYSIsImEiOiJjbGJicmkzbmMwNHpzM3ZwYzZka2RvY202In0.H7VuUXvNcFbnL3Vze24iyw"
	}
};

module.exports = nextConfig;

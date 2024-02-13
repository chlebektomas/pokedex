/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.pokemondb.net",
				port: "",
			},
		],
	},
	logging: {
		fetches: {
			level: "verbose",
			fullUrl: true,
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

export default nextConfig;

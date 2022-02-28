const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["twig"]);

// module.exports = withPlugins([], {});



module.exports = withTM({
    reactStrictMode: true,
});


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
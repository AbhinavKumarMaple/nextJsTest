// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/nextJsTest",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

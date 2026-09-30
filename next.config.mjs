/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  // "Tracks" was renamed to "Career Paths" — keep old links working
  async redirects() {
    return [{ source: "/tracks", destination: "/career-paths", permanent: true }];
  },
};
export default nextConfig;

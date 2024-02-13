/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname:
          "bafkreiaepyesgvxkwkgy242tig5bdre65f4zcm2ohcqkv5yafcz3o3ijfy.ipfs.nftstorage.link",
        port: "",
      },
    ],
  },
};

export default nextConfig;

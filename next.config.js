/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kinopoiskapiunofficial.tech/images/posters/kp",
        port: "",
        pathname: "/*.jpg",
      },
    ],
  },
};

module.exports = nextConfig;

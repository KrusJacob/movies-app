/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["avatars.mds.yandex.net"],
    // // deviceSizes: [640, 1080, 1920],
    // // imageSizes: [16, 64, 128],
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/get-kinopoisk-post-thumb/**",
      },
      {
        protocol: "https",
        hostname: "kinopoiskapiunofficial.tech",
        port: "",
        pathname: "/images/posters/kp_small/**",
      },
    ],
  },
};

module.exports = nextConfig;

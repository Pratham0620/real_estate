/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        url:"http://localhost:4001/"
    },
    images: {
        domains: ['localhost'], // Add the domain where your images are hosted
    }
};

export default nextConfig;

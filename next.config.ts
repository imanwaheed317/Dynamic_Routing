import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@app': path.resolve(__dirname, 'src/app'),
    };
    return config;
  },
};

export default nextConfig;

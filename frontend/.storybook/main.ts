import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'dns';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport/register',
    'storybook-addon-figma',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    // エイリアスの設定
    config.resolve.alias['@'] = path.resolve(__dirname, '../');
    // その他のカスタマイズがあればここに追加
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;

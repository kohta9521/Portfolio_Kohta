import type { Preview } from '@storybook/react';
import '../styles/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    // figma: {
    //   url: 'https://www.figma.com/file/pv7SgKUZguNTReKqWG7VIX/PortfolioSite?type=design&node-id=0%3A1&mode=design&t=NXu3OZhHaKgRMhXA-1',
    // },
  },
};

export default preview;

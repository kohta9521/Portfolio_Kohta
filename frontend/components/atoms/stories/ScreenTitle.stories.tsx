import { Meta, StoryObj } from '@storybook/react';

import ScreenTitle from '../ScreenTitle';

const meta: Meta = {
  title: 'Components/Atoms/ScreenTitle',
  component: ScreenTitle,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'key設定用のID',
      control: {
        type: 'number',
      },
    },

    text: {
      description: '表示するテキスト',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type ScreenTitle = StoryObj<typeof ScreenTitle>;

export const Default: ScreenTitle = {
  args: {
    id: 1,
    text: 'Screen Title',
  },
};

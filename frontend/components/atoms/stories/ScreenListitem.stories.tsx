import { Meta, StoryObj } from '@storybook/react';

import ScreenListitem from '../ScreenListItem';

const meta: Meta = {
  title: 'Components/Atoms/ScreenListitem',
  component: ScreenListitem,
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
    link: {
      description: 'リンク先',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type ScreenListitem = StoryObj<typeof ScreenListitem>;

export const Default: ScreenListitem = {
  args: {
    id: 1,
    text: 'Screen Listitem',
    link: '/',
  },
};

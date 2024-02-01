import { Meta, StoryObj } from '@storybook/react';

import ListItem from '../ListItem';

const meta: Meta = {
  title: 'Components/Atoms/ListItem',
  component: ListItem,
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
    color: {
      description: '文字色',
      control: {
        type: 'select',
        options: ['black', 'white', 'blue'],
      },
    },
    size: {
      description: '文字サイズ',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type ListItem = StoryObj<typeof ListItem>;

export const Default: ListItem = {
  args: {
    id: 1,
    text: 'Home',
    link: '/',
    size: 'medium',
    color: 'black',
  },
};

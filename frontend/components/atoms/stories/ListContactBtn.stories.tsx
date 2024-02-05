import { Meta, StoryObj } from '@storybook/react';

import ListContactBtn from '../ListContactBtn';

const meta: Meta = {
  title: 'Components/Atoms/ListContactBtn',
  component: ListContactBtn,
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

type ListContactBtn = StoryObj<typeof ListContactBtn>;

export const Default: ListContactBtn = {
  args: {
    id: 1,
    text: 'Contact',
    link: '/contact',
  },
};

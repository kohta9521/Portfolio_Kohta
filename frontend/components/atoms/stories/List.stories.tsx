import { Meta, StoryObj } from '@storybook/react';

import List from '../List';

const meta: Meta = {
  title: 'Components/Atoms/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'id',
      control: {
        type: 'number',
      },
    },
    text: {
      description: 'リンクのテキスト',
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

type List = StoryObj<typeof List>;

export const Default: List = {
  args: {
    id: '1',
    text: 'About',
    link: '/',
  },
};

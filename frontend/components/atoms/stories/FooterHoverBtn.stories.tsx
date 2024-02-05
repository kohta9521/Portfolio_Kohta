import { Meta, StoryObj } from '@storybook/react';

import FooterHoverBtn from '../FooterHoverBtn';

const meta: Meta = {
  title: 'Components/Atoms/FooterHoverBtn',
  component: FooterHoverBtn,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'key設定用のID',
      control: {
        type: 'number',
      },
    },
    title: {
      description: '表示するテキスト',
      control: {
        type: 'text',
      },
    },
    desc: {
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

type FooterHoverBtn = StoryObj<typeof FooterHoverBtn>;

export const Default: FooterHoverBtn = {
  args: {
    id: 1,
    title: 'Home',
    desc: 'Home',
    link: '/',
  },
};

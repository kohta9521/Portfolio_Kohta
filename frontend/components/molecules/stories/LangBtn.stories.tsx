import { Meta, StoryObj } from '@storybook/react';

import LangBtn from '../LangBtn';

const meta: Meta = {
  title: 'Components/Molecules/langBtn',
  component: LangBtn,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '言語ボタンに表示する文字列',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type LangBtn = StoryObj<typeof LangBtn>;

export const Default: LangBtn = {
  args: {
    children: 'JP',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import Header from '../Header';

const meta: Meta = {
  title: 'Components/Organisms/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Header = StoryObj<typeof Header>;

export const Default: Header = {
  args: {},
};

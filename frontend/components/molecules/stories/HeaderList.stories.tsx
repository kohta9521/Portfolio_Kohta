import { Meta, StoryObj } from '@storybook/react';

import HeaderList from '../HeaderList';

const meta: Meta = {
  title: 'Components/Molecules/HeaderList',
  component: HeaderList,
  tags: ['autodocs'],
};

export default meta;

type HeaderList = StoryObj<typeof HeaderList>;

export const Default: HeaderList = {
  args: {},
};

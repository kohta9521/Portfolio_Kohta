import React from 'react';
import { Meta, Story, StoryObj } from '@storybook/react';
import TextDisplay, { TextDisplayProps } from '../TextDisplay';

const meta: Meta = {
    title: 'TextDisplay',
    component: TextDisplay,
};

export default meta;

type TextDisplay = StoryObj<typeof TextDisplay>;

export const Default: TextDisplay = {
    args: {
        text: 'hello world',
    },
};

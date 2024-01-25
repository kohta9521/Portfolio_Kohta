import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NameText from '../NameText';

const meta: Meta = {
    title: 'Components/Atoms/NameText',
    component: NameText,
    tags: ['autodocs'],
};

export default meta;

type NameText = StoryObj<typeof NameText>;

export const Default: NameText = {};

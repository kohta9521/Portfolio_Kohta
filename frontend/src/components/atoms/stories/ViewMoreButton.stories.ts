import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ViewMoreButton from '../ViewMoreButton';

const meta: Meta = {
    title: 'Components/Atoms/ViewMoreButton',
    component: ViewMoreButton,
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'keyに設定する用の値',
            control: {
                type: 'number',
            },
        },
        text: {
            description: '基本的にはView Moreだが適宜変更可能',
            control: {
                type: 'text',
            },
        },
        link: {
            description: '遷移先のリンクを設定する',
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type ViewMoreButton = StoryObj<typeof ViewMoreButton>;

export const Default: ViewMoreButton = {
    args: {
        id: 1,
        text: 'View More',
        link: '/',
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// meta information
const meta: Meta = {
    title: 'atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: [ 'small', 'medium', 'large', 'xlarge', 'xxlarge' ],
            control: { type: 'radio' },
            defaultValue: 'medium',
        },
        color: {
            option: [ 'primary', 'secondary', 'success', 'warning', 'danger' ],
            control: { type: 'radio' },
            defaultValue: 'primary',
        },
        shape: {
            option: [ 'square', 'rounded', 'pill' ],
            control: { type: 'radio' },
            defaultValue: 'square',
        },
        textAlign: {
            option: [ 'left', 'center', 'right' ],
            control: { type: 'radio' },
            defaultValue: 'center',
        },
        onClick: {
            action: 'clicked',
            description: 'Button clicked',
        },
        text: {
            control: 'text',
            defaultValue: 'Button',
        },
    },
};

export default meta;

type Button = StoryObj<typeof Button>;

export const Primary: Button = {
    args: {
        text: 'Button',
    },
};

export const Secondary: Button = {
    args: {
        color: 'secondary',
        size: 'xlarge',
        shape: 'rounded',
        textAlign: 'center',
        text: 'outline',
    },
};

export const Danger: Button = {
    args: {
        color: 'danger',
        size: 'large',
        shape: 'rounded',
        textAlign: 'center',
        text: 'Danger',
    },
};

export const Pill: Button = {
    args: {
        color: 'success',
        size: 'xlarge',
        shape: 'pill',
        textAlign: 'center',
        text: 'Pill Button',
    },
};
import type { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'

// meta
const meta: Meta = {
    title: 'atoms/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: [ 'small', 'medium', 'large', 'xlarge', 'xxlarge' ],
            control: { type: 'radio'},
            defaultValue: 'medium',
        },
        link: {
            control: 'text',
            defaultValue: '/',
        },
        altText: {
            control: 'text',
            defaultValue: 'logoImg',
        }
    },
}

export default meta

type Logo = StoryObj<typeof Logo>

export const Small: Logo = {
    args: {
        size: 'small',
        link: '/',
        altText: 'logoImg',
    },
}
export const Medium: Logo = {
    args: {
        size: 'medium',
        link: '/',
        altText: 'logoImg',
    },
}
export const Large: Logo = {
    args: {
        size: 'large',
        link: '/',
        altText: 'logoImg',
    },
}
export const Xlarge: Logo = {
    args: {
        size: 'xlarge',
        link: '/',
        altText: 'logoImg',
    },
}
export const Xxlarge: Logo = {
    args: {
        size: 'xxlarge',
        link: '/',
        altText: 'logoImg',
    },
}

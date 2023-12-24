import type { Meta, StoryObj } from '@storybook/react'
import Logo from '../Logo'

// meta
const meta: Meta = {
    title: 'atoms/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            defaultValue: 'medium',
        }
    }
}

export default meta

type Logo = StoryObj<typeof Logo>

export const Small: Logo = {
    args: {
        size: 'small',
        link: '/',
    }
}

export const Medium: Logo = {
    args: {
        size: 'medium',
        link: '/',
    }
}

export const large: Logo = {
    args: {
        size: 'large',
        link: '/',
    }
}


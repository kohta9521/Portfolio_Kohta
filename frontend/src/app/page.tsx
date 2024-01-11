import React from 'react';

// scss import

// components import
import TextDisplay from '@/components/atoms/TextDisplay';

export default function Home() {
    return (
        <div>
            <h1>hello rust nextjs project!!</h1>
            <TextDisplay key={1} text={'hello world'} />
        </div>
    );
}

import React from 'react'


// scss import
import styles from './styles/MainLayout.module.scss'

// props type
export type MainLayoutProps = {
    id: number
    children: React.ReactNode
}


const MainLayout = (
    {
        id,
        children
    }: MainLayoutProps
) => {
    return (
        <div className={styles.mainLayout} key={id}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
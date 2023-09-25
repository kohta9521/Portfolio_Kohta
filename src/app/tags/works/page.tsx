import React from 'react'

// css import
import styles from './styles/works.module.scss'

// components import
import Template from '@/components/layouts/Template1'
import TagPageTitle from '@/components/tagspage/TagPageTitle'

function Works() {
  return (
    <Template templateNumber={false}>
      <div className={styles.work}>
        <TagPageTitle id={0} text="All Works" />
      </div>
    </Template>
  )
}

export default Works

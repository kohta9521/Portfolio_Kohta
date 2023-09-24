import React from 'react'
import Head from 'next/head'

// css import
import styles from './styles/event.module.scss'
import Template from '@/components/layouts/Template1'
import TagPageTitle from '@/components/tagspage/TagPageTitle'

function Event() {
  return (
    <>
      <Template templateNumber={false}>
        <div className={styles.events}>
          <TagPageTitle id={0} text="All Events" />
        </div>
      </Template>
    </>
  )
}

export default Event

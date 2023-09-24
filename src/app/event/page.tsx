import React from 'react'
import Head from 'next/head'

// css import
import styles from './styles/event.module.scss'
import Template from '@/components/layouts/Template1'

function Event() {
  return (
    <>
      <Head>
        <title>Kohta Portfolio Site | Event</title>
      </Head>
      <Template templateNumber={false}>
        <div className={styles.main}>event page</div>
      </Template>
    </>
  )
}

export default Event

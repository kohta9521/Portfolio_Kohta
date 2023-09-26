'use clinet'
import React, { useState } from 'react'

// css import
import styles from './styles/ModalCard.module.scss'

// components import
// import Modal from './Modal'

// Props type
type Props = {
  // 記事のID
  key: number
  // 記事の画像URL
  imgLink: string
  // 記事のタイトル
  articleTitle: string
  // 記事の投稿日付
  articleDate: string
  // 記事のタグ番号
  tagsNumber: number
}

const ModalCard = ({
  key,
  imgLink,
  articleTitle,
  articleDate,
  tagsNumber,
}: Props) => {
  const [show, setShow] = useState(false)

  // open only function
  const openModal = () => {
    setShow(true)
  }

  return (
    <div className={styles.card} key={key} onClick={openModal}>
      <img className={styles.articleImg} src={imgLink} alt="articleImg" />
      <h3 className={styles.articleTitle}>{articleTitle}</h3>
      <p className={styles.articleDate}>{articleDate}</p>
      <div className={styles.tagBox}>{tagsNumber}</div>
      {/* hidden card */}
      <Modal show={show} setShow={setShow} />
    </div>
  )
}

function Modal(props: { show: boolean; setShow: any }) {
  // open only function
  const closeModal = () => {
    props.setShow(false)
  }
  if (props.show) {
    return (
      <div id="overlay" className={styles.overlay} onClick={closeModal}>
        <div id="content" className={styles.content}>
          <h1 className={styles.title}>Sample Articles Title Text</h1>
          <img
            className={styles.sampleImg}
            src="/images/sampleImg1.png"
            alt="sample Img"
          />
          <p>2023-09-01</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolore repudian
            <br />
            dae dicta est. Libero quod nemo quos omnis enim ipsa eum assumenda
            voluptatem itaque optio p erspiciatis eos repellendus debitis atque
            voluptatum, nostrum eaque magni nihil ipsum rerum aut d eserunt
            neque labore. Quos soluta incidunt architecto asperiores,
            reprehenderit dolore laboriosam magnam sunt? Doloribus dolores odio
            assumenda perferendis voluptas rem ea odit veritatis, itaque <br />
            nventore numquam consectetur omnis accusantium ipsam praesentium
            doloremque voluptate ex tenet ur quo? Voluptatum nesciunt magni
            placeat nemo quam, sapiente aliquam ex tempora sed dicta neque rep
            ellendus nostrum, expedita deserunt corrupti pariatur voluptates!
            Minima ipsum laboriosam praesentium fugiat quam voluptas similique
            amet sapiente sequi, facilis in dolorem pariatur, saepe suscipit
            repellendus totam fugit quo officia! Impedit, quis. Quod quis animi
            adipisci, sapiente accusamus facere consectetur a non nemo iure
            delectus officiis culpa, eligendi nihil unde deserunt dignissimos,
            autem sed neque? Amet, perferendis! Culpa ab maxime corrupti
            laudantium numquam, distinctio voluptatum totam cumque dolore
            expedita dolorum quas, hic, adipisci sed tempore dicta nostrum
            voluptatibus explicabo reiciendis earum esse. Tenetur explicabo
            beatae nihil expedita doloribus autem reprehenderit earum dicta
            asperiores necessitatibus a rerum quaerat sunt animi, ipsam velit
            reiciendis eligendi ducimus quibusdam quos placeat neque, nesciunt
            fuga. Ratione eum corporis quam.
          </p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ModalCard

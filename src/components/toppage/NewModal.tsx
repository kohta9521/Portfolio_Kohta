import React from 'react'

// css import
import styles from './styles/NewModal.module.scss'

type Props = {
  show: boolean
  setShow: any
}

const NewModal = ({ show, setShow }: Props) => {
  const closeModal = () => {
    setShow(false)
  }
  if (show) {
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <p>これがモーダルウィンドウです。</p>
          <img width={'100%'} src="/images/sampleImg1.png" alt="" />
          <h1>titletitle</h1>
          <p>date</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusantium dicta aspernatur aut, inventore tempora animi, itaque
            illum facilis ab quod magni totam, suscipit dolores laboriosam atque
            eveniet iusto. Maiores non omnis rem minus? Dignissimos, debitis
            laudantium dicta blanditiis deserunt sint? Sit provident libero
            nihil error vitae culpa ex delectus iusto repellat sequi beatae
            illum, labore adipisci itaque enim perspiciatis, et officia maiores
            sed ab reiciendis dolor. Aperiam, vel illum voluptas, accusamus nam
            deleniti, voluptatem minima sit pariatur unde dolor! Quod aspernatur
            voluptas vel! Expedita, sint accusantium perferendis est quis esse
            hic consectetur ab eius officiis alias quisquam sit ipsa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusantium dicta aspernatur aut, inventore tempora animi, itaque
            illum facilis ab quod magni totam, suscipit dolores laboriosam atque
            eveniet iusto. Maiores non omnis rem minus? Dignissimos, debitis
            laudantium dicta blanditiis deserunt sint? Sit provident libero
            nihil error vitae culpa ex delectus iusto repellat sequi beatae
            illum, labore adipisci itaque enim perspiciatis, et officia maiores
            sed ab reiciendis dolor. Aperiam, vel illum voluptas, accusamus nam
            deleniti, voluptatem minima sit pariatur unde dolor! Quod aspernatur
            voluptas vel! Expedita, sint accusantium perferendis est quis esse
            hic consectetur ab eius officiis alias quisquam sit ipsa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusantium dicta aspernatur aut, inventore tempora animi, itaque
            illum facilis ab quod magni totam, suscipit dolores laboriosam atque
            eveniet iusto. Maiores non omnis rem minus? Dignissimos, debitis
            laudantium dicta blanditiis deserunt sint? Sit provident libero
            nihil error vitae culpa ex delectus iusto repellat sequi beatae
            illum, labore adipisci itaque enim perspiciatis, et officia maiores
            sed ab reiciendis dolor. Aperiam, vel illum voluptas, accusamus nam
            deleniti, voluptatem minima sit pariatur unde dolor! Quod aspernatur
            voluptas vel! Expedita, sint accusantium perferendis est quis esse
            hic consectetur ab eius officiis alias quisquam sit ipsa.
          </p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default NewModal

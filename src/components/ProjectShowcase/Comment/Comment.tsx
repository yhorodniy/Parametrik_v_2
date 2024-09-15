import React from 'react'

import styles from './Comment.module.scss'

interface CommentProps {
    children: string,
    text: string
}

const Comment: React.FC<CommentProps> = ({ children, text }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.content}>
        <h3>{text}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Comment
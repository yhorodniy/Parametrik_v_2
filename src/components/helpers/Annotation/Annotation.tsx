import React from 'react'
import styles from './Annotation.module.scss'

interface AnnotationProps {
    children: string
    color?: string
}

const Annotation: React.FC<AnnotationProps> = ({ children, color }) => {
  return (
    <div className={styles.dot}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill={color ? color : 'white'}/>
        </svg>
        <h6 style={{color: !color ? 'white' : undefined}}>{children}</h6>
    </div>
  )
}

export default Annotation
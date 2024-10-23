import styles from './FooterStyles.module.css'
function Footer() {
  return (
    <section id='footer' className={styles.Footer}>
        <p> &copy; 2024 Jiří Kuběna. <br />
        All rights reserved.</p>
    </section>
  )
}

export default Footer
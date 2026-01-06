import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.heroSection}>
        <h1 className={styles.pageTitle}>Let&apos;s Connect</h1>
        
      </div>

      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactContent}>
            <div className={styles.infoBox}>
              <h2 className={styles.contactTitle}>Get in Touch</h2>
              <p className={styles.contactDescription}>
                I&apos;m open to new opportunities, interesting projects, and creative
                collaborations. Let&apos;s build something amazing together!
              </p>
            </div>
            <ContactCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;

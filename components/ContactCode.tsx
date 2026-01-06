import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'abderrahimDaaloul.com',
    href: 'https://nitinranganath.com',
    icon: '🌐',
  },
  {
    social: 'email',
    link: 'abderrahimdaaloul@gmail.com',
    href: 'mailto:abderrahimdaaloul@gmail.com',
    icon: '✉️',
  },
  {
    social: 'github',
    link: 'Daaloul-Abderrahim',
    href: 'https://github.com/AbderrahimDaaloul',
    icon: '💻',
  },
  {
    social: 'linkedin',
    link: 'Daaloul-Abderrahim',
    href: 'https://www.linkedin.com/in/daaloul-abderrahim-29a236240/',
    icon: '💼',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <div className={styles.codeHeader}>
        <span className={styles.codeTitle}>contact.json</span>
      </div>
      <p className={styles.line}>
        <span className={styles.bracket}>&#123;</span>
      </p>
      <p className={styles.line}>
        <span className={styles.property}>\"connections\"</span>
        <span className={styles.bracket}>:</span> [
      </p>
      {contactItems.map((item, index) => (
        <div key={index} className={styles.contactItem}>
          <p className={styles.itemLine}>
            <span className={styles.bracket}>&#123;</span>
          </p>
          <p className={styles.itemLine}>
            <span className={styles.property}>\"platform\"</span>
            <span className={styles.bracket}>:</span>
            <span className={styles.value}>
              \"{item.icon} {item.social}\"
            </span>,
          </p>
          <p className={styles.itemLine}>
            <span className={styles.property}>\"handle\"</span>
            <span className={styles.bracket}>:</span>
            <a href={item.href} target="_blank" rel="noopener" className={styles.link}>
              \"{item.link}\"
            </a>,
          </p>
          <p className={styles.itemLine}>
            <span className={styles.property}>\"url\"</span>
            <span className={styles.bracket}>:</span>
            <a href={item.href} target="_blank" rel="noopener" className={styles.linkUrl}>
              \"{item.href}\"
            </a>
          </p>
          <p className={styles.itemLine}>
            <span className={styles.bracket}>&#125;{index < contactItems.length - 1 ? ',' : ''}</span>
          </p>
        </div>
      ))}
      <p className={styles.line}>
        <span className={styles.bracket}>]</span>
      </p>
      <p className={styles.line}>
        <span className={styles.bracket}>&#125;</span>
      </p>
    </div>
  );
};

export default ContactCode;

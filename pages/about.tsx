import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Daaloul Abderrahim</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a full-stack software engineer who enjoys building
              end-to-end applications, with a strong focus on modern web
              technologies.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Node.js, Express and Spring
              boot while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at{" "}
              <span className={styles.highlight}>Yura Corporation</span> working
              as a Help Desk Technician, where I provide frontline IT support
              and deal with network and connectivity-related issues. I
              troubleshoot hardware and software problems, assist employees with
              system access and technical questions, and help maintain stable
              and secure network operations.
            </p>
            <p className={styles.paragraph}>
              Through this role, I’ve strengthened my problem-solving skills,
              improved my understanding of IT infrastructure, and gained
              hands-on experience supporting users in a fast-paced corporate
              environment.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming I’m passionate about swimming and enjoy the
              discipline and focus it brings. Swimming helps me stay active,
              clear my mind, and maintain a healthy balance alongside my work in
              technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;

import styles from './index.module.scss'
import ContactList from './components/ContactList';
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className={styles.contacts}>
      <motion.div
        className={styles.contacts__wrapper}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className={styles.contacts__title}>Контакты</h2>
        <p className={styles.contacts__descrpt}>
          Рассмотрю любые предложения по фулл-тайм вакансиям либо проектной
          работе.
        </p>
        <h3 className={styles.contacts__subtitle}>Связаться со мной:</h3>
        <ContactList></ContactList>
      </motion.div>
    </section>
  );
};

export default ContactPage;
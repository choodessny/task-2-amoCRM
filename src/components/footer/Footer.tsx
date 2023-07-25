import styles from "./Footer.module.scss";
import iconTelegram from "../../resources/contacts/Telegram.svg";
import iconWhatsup from "../../resources/contacts/Whatsup.svg";
import iconViber from "../../resources/contacts/Viber.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.companyDescription}>
          <div className={styles.title}>о компании</div>
          <div className={styles.list}>Партнёрская программа</div>
          <div className={styles.list}>Вакансия</div>
        </div>

        <div className={styles.companyDescription}>
          <div className={styles.title}>меню</div>
          <div className={styles.list}>Расчёт стоимости</div>
          <div className={styles.list}>Услуги</div>
          <div className={styles.list}>Виджеты</div>
          <div className={styles.list}>Интеграции</div>
          <div className={styles.list}>Наши клиенты</div>
        </div>

        <div className={styles.company}>
          <div className={styles.list}>Кейсы</div>
          <div className={styles.list}>Благодарственные письма</div>
          <div className={styles.list}>Сертификаты</div>
          <div className={styles.list}>Блог на Youtube</div>
          <div className={styles.list}>Вопрос / Ответ</div>
        </div>

        <div className={styles.companyContacts}>
          <div className={styles.title}>контакты</div>
          <div className={styles.list}>+7 555 555-55-55</div>
          <div className={styles.list}>
            <img src={iconTelegram} className={styles.icon} alt="telegram" />
            <img src={iconViber} className={styles.icon} alt="viber" />
            <img src={iconWhatsup} className={styles.icon} alt="whatsup" />
          </div>
          <div className={styles.list}>Москва, Путевой проезд 3с1, к 902</div>
        </div>
      </div>
      <div className={styles.copyrightInfoContainer}>
        <div className={styles.copyrightInfo}>
          ©WELBEX 2022. Все права защищены.
        </div>
        <div className={styles.copyrightInfoUnderlined}>
          Политика конфиденциальности
        </div>
      </div>
    </div>
  );
};

export default Footer;

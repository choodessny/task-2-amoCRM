import styles from "./FooterMobile.module.scss";
import iconTelegram from "../../resources/contacts/Telegram.svg";
import iconWhatsup from "../../resources/contacts/Whatsup.svg";
import iconViber from "../../resources/contacts/Viber.svg";

interface FooterMobileProps {}

const FooterMobile: React.FC<FooterMobileProps> = () => {
  return (
    <div className={styles.footerMobile}>
      <div className={styles.title}> о компании</div>
      <div className={styles.description}>Партнёрская программа</div>
      <div className={styles.description}>Вакансии</div>
      <div className={styles.titleSecond}> меню</div>
      <ul className={styles.menu}>
        <li>
          Расчёт <br /> стоимости
        </li>
        <li>
          Благодарность <br /> клиентов
        </li>
        <li>Услуги</li>
        <li>Кейсы</li>
        <li>Виджеты</li>
        <li>Сертификаты</li>
        <li>Интеграции</li>
        <li>Блог на Youtube</li>
        <li>Наши клиенты</li>
        <li>Вопрос/Ответ</li>
      </ul>

      <div className={styles.title}>контакты</div>
      <div className={styles.phoneNumber}>+7 555 555-55-55</div>

      <img src={iconTelegram} className={styles.icon} alt="telegram" />
      <img src={iconViber} className={styles.icon} alt="viber" />
      <img src={iconWhatsup} className={styles.icon} alt="whatsup" />

      <div className={styles.address}>Москва, Путевой проезд 3с1, к 902</div>
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
export default FooterMobile;

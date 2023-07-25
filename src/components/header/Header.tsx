import styles from "./Header.module.scss";
import welbexText from "./welbexText.svg";
import welbexLogo from "./welbexLogo.svg";
import iconTelegram from "./Telegram.svg";
import iconWhatsup from "./Whatsup.svg";
import iconViber from "./Viber.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src={welbexLogo}
            className={styles.welbexLogo}
            alt="Welbex logo"
          />
          <img
            src={welbexText}
            className={styles.welbexText}
            alt="Welbex text"
          />
        </div>

        <div className={styles.description}>
          крупный интегратор CRM <br /> в Росcии и ещё 8 странах
        </div>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.nav}>Услуги</div>
        <div className={styles.nav}>Виджеты</div>
        <div className={styles.nav}>Интеграции</div>
        <div className={styles.nav}>Кейсы</div>
        <div className={styles.navCertification}>Сертификаты</div>
      </div>
      <div className={styles.navPhone}>+7 555 555-55-55</div>
      <img src={iconTelegram} className={styles.icon} alt="telegram" />
      <img src={iconViber} className={styles.icon} alt="viber" />
      <img src={iconWhatsup} className={styles.icon} alt="whatsup" />
    </div>
  );
};

export default Header;

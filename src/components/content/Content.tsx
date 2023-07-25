import styles from "./Content.module.scss";
import RedBall from "../../resources/backgroundDesktop/RedBall.svg";
import LittleRedBall from "../../resources/backgroundDesktop/LittleRedBall.svg";
import RedLight from "../../resources/backgroundDesktop/RedLight.svg";
import PurpleBall from "../../resources/backgroundDesktop/PurpleBall.svg";
import PurpleLight from "../../resources/backgroundDesktop/PurpleLight.svg";

import RedBallMobile from "../../resources/backgroundMobile/RedBallMobile.svg";
import RedLightMobile from "../../resources/backgroundMobile/RedLightMobile.svg";
import PurpleBallMobile from "../../resources/backgroundMobile/PurpleBallMobile.svg";
import PurpleLightMobile from "../../resources/backgroundMobile/PurpleLightMobile.svg";

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.tagLine}>
        <div className={styles.title}>
          Зарабатывайте <br /> больше
        </div>
        <div className={styles.titleGradient}>с WEBLEX</div>
        <div className={styles.text}>
          Развиваем и контролируем <br /> продажи за вас
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.infoPresentsContainer}>
          <div className={styles.infoPresents}>Вместе с</div>
          <div className={styles.infoPresentsGradient}> &nbsp;бесплатной </div>
        </div>
        <div className={styles.infoPresentsContainer}>
          <div className={styles.infoPresentsGradient}>
            консультацией &nbsp;
          </div>

          <div className={styles.infoPresents}> мы дарим:</div>
        </div>

        <div className={styles.presentsContainer}>
          <div>
            <div className={styles.presentTitle}>виджеты</div>
            <div className={styles.present}>
              30 готовых <br /> решений
            </div>
          </div>
          <div>
            <div className={styles.presentTitle}>dashboard</div>
            <div className={styles.present}>
              с показателями <br /> вашего бизнеса
            </div>
          </div>
        </div>
        <div className={styles.presentsContainerSecond}>
          <div>
            <div className={styles.presentTitle}>skype аудит</div>
            <div className={styles.present}>
              отдела продаж <br /> и CRM системы
            </div>
          </div>
          <div>
            <div className={styles.presentTitle}>35 дней</div>
            <div className={styles.present}>
              использования <br /> CRM
            </div>
          </div>
        </div>
      </div>
      <ul className={styles.MobileList}>
        <li>skype аудит</li>
        <li>30 виджетов</li>
        <li>dashboard</li>
        <li>месяц amocrm</li>
      </ul>
      <div className={styles.imagesContainer}>
      <img src={PurpleBall} className={styles.PurpleBall} />
      <img src={PurpleLight} className={styles.PurpleLight} />
      <img src={RedBall} className={styles.RedBall} />
      <img src={LittleRedBall} className={styles.LittleRedBall} />
      <img src={RedLight} className={styles.RedLight} />
</div>
      <img src={PurpleBallMobile} className={styles.PurpleBallMobile} />
      <img src={PurpleLightMobile} className={styles.PurpleLightMobile} />
      <img src={RedBallMobile} className={styles.RedBallMobile} />
      <img src={RedLightMobile} className={styles.RedLightMobile} />
    </div>
  );
};

export default Content;

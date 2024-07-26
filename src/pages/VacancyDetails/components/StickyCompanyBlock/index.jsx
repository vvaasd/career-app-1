import clsx from "@utils/clsx";
import styles from "./StickyCompanyBlock.module.css";

const StickyCompanyBlock = ({ logo, name, address }) => {
  return (
    <div className={clsx("card", styles.sticky)}>
      {logo && <img className={styles.companyLogo} src={logo} alt="Логотип" />}
      <h2 className={clsx("title", styles.companyName)}>{name}</h2>
      <p className={clsx("descr", styles.companyAddress)}>{address}</p>
    </div>
  );
};

export default StickyCompanyBlock;

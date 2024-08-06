import clsx from '@utils/clsx';
import styles from './SkeletonDetail.module.css';

const Skeleton = ({ className }) => (
  <div className={clsx(styles.skeleton, className)} />
);

export const SkeletonDetail = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSite}>
        <div className={styles.block}>
          <div>
            <Skeleton className={styles.title} />
            <Skeleton className={styles.wages} />
          </div>
          <div>
            <Skeleton className={styles.requirementsTitle} />
            <ul className={styles.requirementsList}>
              <li className={styles.requirementsItem}>
                <Skeleton className={styles.requirementsIcon} />
                <Skeleton className={styles.requirementsText} />
              </li>
              <li className={styles.requirementsItem}>
                <Skeleton className={styles.requirementsIcon} />
                <Skeleton className={styles.requirementsText} />
              </li>
              <li className={styles.requirementsItem}>
                <Skeleton className={styles.requirementsIcon} />
                <Skeleton className={styles.requirementsText} />
              </li>
            </ul>
          </div>
        </div>
        <Skeleton className={styles.btn} />
        <div className={styles.block}>
          <div className={styles.descr}>
            <Skeleton className={styles.titleDescr}></Skeleton>
            <div className={styles.descrItems}>
              <Skeleton className={styles.descrText} />
              <Skeleton className={styles.descrText} />
              <Skeleton className={styles.descrText} />
              <Skeleton className={styles.descrText} />
            </div>
          </div>
          <div className={styles.block}>
            <Skeleton className={styles.skillTitle}></Skeleton>
            <ul className={styles.skillList}>
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
              <Skeleton className={styles.skillItem} />
            </ul>
          </div>
        </div>
        <Skeleton className={styles.published} />
      </div>
      <div className={styles.rigntSite}>
        <Skeleton className={styles.logo}></Skeleton>
        <div className={styles.info}>
          <Skeleton className={styles.company}></Skeleton>
          <Skeleton className={styles.address}></Skeleton>
        </div>
      </div>
    </div>
  );
};

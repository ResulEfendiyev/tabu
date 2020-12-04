import React from "react";
import styles from "./Trailer.module.css";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

function Trailer() {
  return (
    <div className={styles.trailer}>
      <div className={styles.count}>
        <h1 className={styles.heading}>Dostlarınızla xoş və əyləncəli vaxt keçirin</h1>
        <CountUp end={10000} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
        <p>dən çox yüklənmə</p>
        <p className={styles.about}>Tabu dostlarınızla oynaya biləcəyiniz söz oyunudur</p>
      </div>
    </div>
  );
}

export default Trailer;

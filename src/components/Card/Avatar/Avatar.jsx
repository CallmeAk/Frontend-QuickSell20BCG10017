// AvatarWithStatus.js

import React from "react";
import styles from "./Avatar.module.css";


const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  var randomNumber = getRandomNumber(1, 10);
  return (
    <>
    {indashBoard ? ( <div className={styles.avatarContainer}>
          <img
            src={
              `https://source.unsplash.com/1600x900/?person/${randomNumber}`
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>):(<div></div>)}

    
      {/* {grouping !== undefined && grouping !== "user" ? (
        <div className={styles.avatarContainer}>
          <img
            src={
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>
      ) : (
        <div></div>
      )} */}

      {/* <div className={styles.avatarContainer}>
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
          }
          alt="MG"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div> */}
    </>
  );
};

export default AvatarWithStatus;

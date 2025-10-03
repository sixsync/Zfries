// components/PopcornBurst.js
import React from 'react';
import styles from './PopcornBurst.module.css';
import Image from 'next/image';

const PopcornBurst = () => {
  const popcorns = Array(10).fill('/carousel/popcorn.png'); // Assuming you have a small popcorn image

  return (
    <div className={styles.container}>
      {popcorns.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="popcorn"
          width={100}
          height={100}
          className={styles.popcorn}
          style={{
            animationDelay: `${Math.random() * 0.3}s`, // Slightly more varied delay
            animationDuration: `${1.5 + Math.random() * 0.5}s`, // Slightly longer and varied duration
            // Assign random --random-x and --random-y CSS variables
            '--random-x': `${(Math.random() * 2 - 1).toFixed(2)}`, // -1 to 1 for x (left to right)
            '--random-y': `${(Math.random() * 2 - 1).toFixed(2)}`, // -1 to 1 for y (top to bottom)
          }}
        />
      ))}
    </div>
  );
};

export default PopcornBurst;
import React, { useState } from 'react';
import styles from './DileveryMap.module.css';
import { YMaps, Map, SearchControl } from '@pbe/react-yandex-maps';

export default function DileveryMap() {
  const [center, setCenter] = useState<[number, number]>([
    43.318366, 45.692421,
  ]);

  return (
    <YMaps>
      <div className={styles.mapContainer}>
        <div className={styles.leftBar}>
          <form>
            <input
              className={styles.inputAdress}
              type="text"
              placeholder="введите адрес"
              name="inputAdress"
            />
            <button type="submit">Найти</button>
          </form>
        </div>
        <Map className={styles.map} state={{ center, zoom: 9 }}>
          <SearchControl options={{ float: 'left' }} />
        </Map>
      </div>
    </YMaps>
  );
}

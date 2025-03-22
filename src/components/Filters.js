import React, { useState } from 'react';
import './Filters.css';

function Filters() {
    const [showOnlyDangerous, setShowOnlyDangerous] = useState(false);
    const [distanceUnit, setDistanceUnit] = useState('km'); // 'km' или 'lunar'

    const handleDangerousChange = (e) => {
        setShowOnlyDangerous(e.target.checked);
        // Здесь можно вызвать колбэк или контекст для передачи состояния дальше
    };

    const handleUnitChange = (e) => {
        setDistanceUnit(e.target.value);
        // Аналогично передать выбранную единицу дальше
    };

    return (
      <div className="filters-container">
          <label className="dangerous-filter">
              <input
                type="checkbox"
                checked={showOnlyDangerous}
                onChange={handleDangerousChange}
              />
              Показать только опасные
          </label>

          <div className="distance-unit">
              <span>Расстояние:</span>
              <label>
                  <input
                    type="radio"
                    name="distanceUnit"
                    value="km"
                    checked={distanceUnit === 'km'}
                    onChange={handleUnitChange}
                  />
                  в километрах
              </label>
              <label>
                  <input
                    type="radio"
                    name="distanceUnit"
                    value="lunar"
                    checked={distanceUnit === 'lunar'}
                    onChange={handleUnitChange}
                  />
                  в дистанциях до Луны
              </label>
          </div>
      </div>
    );
}

export default Filters;

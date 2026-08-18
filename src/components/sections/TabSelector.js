import React from 'react';

/**
 * TabSelector — selector de pestañas genérico.
 *
 * Props:
 *  - tabs      : [{ id: string, label: string }]
 *  - activeTab : string — id de la pestaña activa
 *  - onChange  : (tabId: string) => void
 */
const TabSelector = ({ tabs, activeTab, onChange }) => (
  <div className="tab-selector-container">
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabSelector;

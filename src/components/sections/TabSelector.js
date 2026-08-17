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
  <div style={{
    display: 'flex',
    gap: '12px',
    marginBottom: '2rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '8px',
  }}>
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '0.95rem',
          fontWeight: activeTab === tab.id ? 'bold' : 'normal',
          color: activeTab === tab.id ? 'var(--color-principal)' : '#888',
          cursor: 'pointer',
          padding: '6px 12px',
          borderBottom: activeTab === tab.id ? '2px solid var(--color-principal)' : '2px solid transparent',
          transition: 'all 0.3s ease',
          outline: 'none',
        }}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabSelector;

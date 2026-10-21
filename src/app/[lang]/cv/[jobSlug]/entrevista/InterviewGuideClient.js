'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaPrint, FaBriefcase, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

// Parser ligero y seguro para renderizar Markdown a JSX en Next.js sin dependencias externas pesadas
function renderMarkdownToJsx(markdown) {
  if (!markdown) return null;

  const lines = markdown.split('\n');
  const elements = [];
  let blockquoteBuffer = [];
  let listBuffer = [];
  let tableBuffer = [];
  let keyIndex = 0;

  const flushBlockquote = () => {
    if (blockquoteBuffer.length > 0) {
      const fullText = blockquoteBuffer.join('\n');
      const isImportant = fullText.includes('[!IMPORTANT]');
      const isWarning = fullText.includes('[!WARNING]');
      const isTip = fullText.includes('[!TIP]');
      const isNote = fullText.includes('[!NOTE]');

      let alertType = 'default';
      let cleanText = fullText;

      if (isImportant) {
        alertType = 'important';
        cleanText = cleanText.replace('> [!IMPORTANT]', '').trim();
      } else if (isWarning) {
        alertType = 'warning';
        cleanText = cleanText.replace('> [!WARNING]', '').trim();
      } else if (isTip) {
        alertType = 'tip';
        cleanText = cleanText.replace('> [!TIP]', '').trim();
      } else if (isNote) {
        alertType = 'note';
        cleanText = cleanText.replace('> [!NOTE]', '').trim();
      }

      // Limpiar prefijos de blockquote en cada línea (> o > -)
      const contentLines = cleanText
        .split('\n')
        .map(l => l.replace(/^>\s*/, '').trim())
        .filter(Boolean);

      const styles = {
        important: { bg: '#fff5f5', border: '#e60000', text: '#991b1b', bulletColor: '#e60000' },
        warning: { bg: '#fffbeb', border: '#f59e0b', text: '#92400e', bulletColor: '#f59e0b' },
        tip: { bg: '#f0fdf4', border: '#22c55e', text: '#166534', bulletColor: '#22c55e' },
        note: { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af', bulletColor: '#3b82f6' },
        default: { bg: '#fafafa', border: '#e5e7eb', text: '#333333', bulletColor: '#666666' }
      }[alertType];

      elements.push(
        <blockquote
          key={`bq-${keyIndex++}`}
          style={{
            margin: '20px 0',
            padding: '16px 20px',
            backgroundColor: styles.bg,
            borderLeft: `4px solid ${styles.border}`,
            borderRadius: '0 8px 8px 0',
            color: styles.text,
            lineHeight: 1.65,
            fontSize: '0.94rem'
          }}
        >
          {contentLines.map((cL, idx) => (
            <div key={idx} style={{ margin: idx === 0 ? 0 : '8px 0 0 0' }}>
              {formatInline(cL)}
            </div>
          ))}
        </blockquote>
      );
      blockquoteBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${keyIndex++}`} style={{ margin: '12px 0 16px 20px', paddingLeft: '10px', lineHeight: 1.65 }}>
          {listBuffer.map((item, i) => (
            <li key={i} style={{ marginBottom: '6px', color: '#333333' }}>
              {formatInline(item)}
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  const flushTable = () => {
    if (tableBuffer.length > 0) {
      const rows = tableBuffer.map(r => r.split('|').map(c => c.trim()).filter((c, idx, arr) => !(idx === 0 && c === '') && !(idx === arr.length - 1 && c === '')));
      const headers = rows[0] || [];
      const dataRows = rows.slice(2); // Skip header and separator

      elements.push(
        <div key={`table-wrapper-${keyIndex++}`} style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', border: '1px solid #e5e7eb' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                {headers.map((h, i) => (
                  <th key={i} style={{ padding: '10px 14px', border: '1px solid #e5e7eb', textAlign: 'left', color: '#111111', fontWeight: 700 }}>
                    {formatInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} style={{ padding: '10px 14px', border: '1px solid #e5e7eb', color: '#333333' }}>
                      {formatInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Blockquote
    if (line.startsWith('>')) {
      flushList();
      flushTable();
      blockquoteBuffer.push(line);
      continue;
    } else {
      flushBlockquote();
    }

    // Tables
    if (line.includes('|')) {
      flushList();
      tableBuffer.push(line);
      continue;
    } else {
      flushTable();
    }

    // List item
    if (line.match(/^(\s*[-*]|\s*\d+\.)\s+/)) {
      const cleanItem = line.replace(/^(\s*[-*]|\s*\d+\.)\s+/, '');
      listBuffer.push(cleanItem);
      continue;
    } else {
      flushList();
    }

    // Headings
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${keyIndex++}`} style={{ fontSize: '2.1rem', fontWeight: 800, color: '#111111', margin: '24px 0 12px 0', borderBottom: '2px solid #111111', paddingBottom: '10px', letterSpacing: '-0.02em' }}>
          {formatInline(line.replace('# ', ''))}
        </h1>
      );
      continue;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${keyIndex++}`} style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-principal, #e60000)', margin: '32px 0 14px 0', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
          {formatInline(line.replace('## ', ''))}
        </h2>
      );
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${keyIndex++}`} style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111111', margin: '24px 0 8px 0' }}>
          {formatInline(line.replace('### ', ''))}
        </h3>
      );
      continue;
    }

    // Horizontal rule
    if (line.match(/^---+$/)) {
      elements.push(<hr key={`hr-${keyIndex++}`} style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '28px 0' }} />);
      continue;
    }

    // Empty lines
    if (!line.trim()) {
      continue;
    }

    // Paragraph
    elements.push(
      <p key={`p-${keyIndex++}`} style={{ margin: '10px 0', lineHeight: 1.65, color: '#333333', fontSize: '0.95rem' }}>
        {formatInline(line)}
      </p>
    );
  }

  flushBlockquote();
  flushList();
  flushTable();

  return elements;
}

// Inline formatting (bold, code, links)
function formatInline(text) {
  if (!text) return '';
  const parts = [];
  let remaining = text;
  let idx = 0;

  // Regex combinada para bold (**...**), code (`...`), y links ([...](...))
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={`b-${idx++}`} style={{ color: '#111111', fontWeight: 700 }}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={`c-${idx++}`} style={{ backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', padding: '2px 6px', borderRadius: '4px', fontSize: '0.88em', color: '#111111', fontWeight: 500 }}>
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('[') && token.includes('](')) {
      const label = token.substring(1, token.indexOf(']('));
      const url = token.substring(token.indexOf('](') + 2, token.length - 1);
      parts.push(
        <a key={`a-${idx++}`} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-principal, #e60000)', textDecoration: 'underline', fontWeight: 600 }}>
          {label}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function InterviewGuideClient({ guide, tailoredData, lang }) {
  const isEs = lang === 'es';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f7', color: '#111111', padding: '40px 20px', fontFamily: 'var(--font-poppins), sans-serif' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
        
        {/* Navigation & Actions Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/${lang}/cv/lista`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#111111', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}
            >
              <FaArrowLeft size={12} color="var(--color-principal, #e60000)" />
              {isEs ? 'Lista de CVs' : 'CVs List'}
            </Link>

            <Link
              href={`/${lang}/cv/${guide.jobSlug}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#555555', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}
            >
              <FaBriefcase size={12} color="var(--color-principal, #e60000)" />
              {isEs ? 'Ver Web CV' : 'View Web CV'}
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ backgroundColor: '#fff5f5', color: 'var(--color-principal, #e60000)', border: '1px solid #fca5a5', padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              INTERVIEW PREP
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'var(--color-principal, #e60000)',
                color: '#ffffff',
                border: 'none',
                padding: '7px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: '0 2px 8px rgba(230,0,0,0.25)'
              }}
            >
              <FaPrint size={12} />
              {isEs ? 'Imprimir / PDF' : 'Print / PDF'}
            </button>
          </div>
        </div>

        {/* Meeting metadata bar if available */}
        {guide.meetingInfo && (
          <div style={{ backgroundColor: '#fafafa', border: '1px solid #e5e7eb', padding: '16px 20px', borderRadius: '8px', marginBottom: '28px', display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.88rem', color: '#555555' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaCalendarAlt color="var(--color-principal, #e60000)" />
              <strong style={{ color: '#111111' }}>{guide.meetingInfo.date}</strong> ({guide.meetingInfo.time})
            </div>
            {guide.meetingInfo.interviewers && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaUserTie color="var(--color-principal, #e60000)" />
                <span style={{ color: '#111111', fontWeight: 500 }}>{guide.meetingInfo.interviewers.join(' • ')}</span>
              </div>
            )}
          </div>
        )}

        {/* Rendered Guide Content */}
        <div>
          {renderMarkdownToJsx(guide.contentMarkdown)}
        </div>

      </div>
    </div>
  );
}

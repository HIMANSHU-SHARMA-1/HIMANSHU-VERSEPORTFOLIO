import React from 'react';
import { Palette } from 'lucide-react';

const THEMES = [
  { id: 'theme-yellow', name: 'Neon Yellow', className: 'btn-yellow' },
  { id: 'theme-blue', name: 'Electric Blue', className: 'btn-blue' },
  { id: 'theme-pink', name: 'Hot Pink', className: 'btn-pink' },
  { id: 'theme-green', name: 'Mint Green', className: 'btn-green' },
  { id: 'theme-orange', name: 'Vibrant Orange', className: 'btn-orange' },
  { id: 'theme-purple', name: 'Retro Purple', className: 'btn-purple' },
  { id: 'theme-red', name: 'Bright Red', className: 'btn-red' }
];

function ThemeBar({ currentTheme, onChangeTheme }) {
  return (
    <div className="color-palette-bar">
      <span className="palette-label">
        <Palette /> SYSTEM THEME:
      </span>
      <div className="color-options">
        {THEMES.map(theme => (
          <button
            key={theme.id}
            className={`color-dot ${theme.className} ${currentTheme === theme.id ? 'active' : ''}`}
            onClick={() => onChangeTheme(theme.id)}
            title={theme.name}
            aria-label={`Select ${theme.name} Theme`}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeBar;

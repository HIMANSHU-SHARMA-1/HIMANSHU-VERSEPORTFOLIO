import React from 'react';
import { Palette, Volume2, VolumeX } from 'lucide-react';

const THEMES = [
  { id: 'theme-yellow', name: 'Neon Yellow', className: 'btn-yellow' },
  { id: 'theme-blue', name: 'Electric Blue', className: 'btn-blue' },
  { id: 'theme-pink', name: 'Hot Pink', className: 'btn-pink' },
  { id: 'theme-green', name: 'Mint Green', className: 'btn-green' },
  { id: 'theme-orange', name: 'Vibrant Orange', className: 'btn-orange' },
  { id: 'theme-purple', name: 'Retro Purple', className: 'btn-purple' },
  { id: 'theme-red', name: 'Bright Red', className: 'btn-red' }
];

function ThemeBar({ 
  currentTheme, 
  onChangeTheme, 
  soundEnabled, 
  onToggleSound, 
  soundProfile, 
  onChangeSoundProfile 
}) {
  return (
    <div className="color-palette-bar">
      <span className="palette-label">
        <Palette /> <span className="theme-text-label">SYSTEM THEME:</span>
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

      {/* Sound Profile Select Dropdown */}
      {soundEnabled && (
        <select 
          value={soundProfile} 
          onChange={(e) => onChangeSoundProfile(e.target.value)}
          title="Change Click Sound Effect"
          aria-label="Sound Profile"
          className="theme-text-label"
          style={{
            background: 'var(--clr-white)',
            border: '2px solid var(--clr-black)',
            fontFamily: 'Space Mono, monospace',
            fontWeight: 700,
            fontSize: '0.75rem',
            padding: '2px 4px',
            cursor: 'pointer',
            marginLeft: '12px',
            outline: 'none',
            boxShadow: '2px 2px 0 var(--clr-black)',
            textTransform: 'uppercase'
          }}
        >
          <option value="bell">🔔 Soft Chime</option>
          <option value="bubble">💧 Water Drop</option>
          <option value="arcade">🕹️ Arcade Rise</option>
          <option value="pop">🔌 Switch Click</option>
          <option value="cosmic">✨ Cosmic Twinkle</option>
        </select>
      )}
      
      {/* Sound Toggle Button */}
      <button 
        className="sound-toggle-btn"
        onClick={onToggleSound}
        title={soundEnabled ? "Mute Click Sounds" : "Unmute Click Sounds"}
        aria-label="Toggle Sound"
        style={{
          background: 'none',
          border: '2px solid var(--clr-black)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '12px',
          backgroundColor: soundEnabled ? 'var(--clr-green)' : 'var(--clr-red)',
          color: soundEnabled ? 'var(--clr-black)' : 'var(--clr-white)',
          boxShadow: '2px 2px 0 var(--clr-black)',
          transition: 'transform 0.1s'
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translate(1px, 1px)';
          e.currentTarget.style.boxShadow = '1px 1px 0 var(--clr-black)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '2px 2px 0 var(--clr-black)';
        }}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
}

export default ThemeBar;

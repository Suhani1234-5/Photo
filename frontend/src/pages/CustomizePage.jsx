import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function CustomizePage({ 
  capturedPhotos, 
  selectedFilter, 
  selectedFrameColor, 
  setSelectedFrameColor 
}) {
  const [selectedShape, setSelectedShape] = useState('none');
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [addDate, setAddDate] = useState(false);
  const [addTime, setAddTime] = useState(false);

  const frameColors = [
    { id: 'multicolor', color: 'linear-gradient(45deg, #ff6b9d, #4ecdc4, #45b7d1, #96ceb4, #feca57)', name: 'Rainbow' },
    { id: 'pink', color: '#ff6b9d', name: 'Pink' },
    { id: 'cyan', color: '#4ecdc4', name: 'Cyan' },
    { id: 'yellow', color: '#feca57', name: 'Yellow' },
    { id: 'green', color: '#96ceb4', name: 'Green' },
    { id: 'purple', color: '#a55eea', name: 'Purple' },
    { id: 'beige', color: '#f5deb3', name: 'Beige' },
    { id: 'red', color: '#ff3838', name: 'Red' },
    { id: 'white', color: '#ffffff', name: 'White' },
    { id: 'black', color: '#2c2c54', name: 'Black' },
    { id: 'hotpink', color: '#ff006e', name: 'Hot Pink' },
    { id: 'orange', color: '#fb8500', name: 'Orange' },
    { id: 'brown1', color: '#8d5524', name: 'Brown' },
    { id: 'brown2', color: '#a0633f', name: 'Light Brown' },
    { id: 'blue1', color: '#023047', name: 'Navy' },
    { id: 'green2', color: '#386641', name: 'Forest' },
    { id: 'blue2', color: '#219ebc', name: 'Sky Blue' },
    { id: 'coral', color: '#ffb3ba', name: 'Coral' },
    { id: 'lavender', color: '#bae1ff', name: 'Lavender' },
    { id: 'mint', color: '#baffc9', name: 'Mint' },
    { id: 'peach', color: '#ffffba', name: 'Peach' },
    { id: 'rose', color: '#ffdfba', name: 'Rose' },
    { id: 'gold', color: '#ffd700', name: 'Gold' },
    { id: 'silver', color: '#c0c0c0', name: 'Silver' },
    { id: 'teal', color: '#008080', name: 'Teal' },
    { id: 'maroon', color: '#800000', name: 'Maroon' },
    { id: 'olive', color: '#808000', name: 'Olive' },
    { id: 'navy', color: '#000080', name: 'Navy Blue' },
    { id: 'lime', color: '#00ff00', name: 'Lime' },
    { id: 'aqua', color: '#00ffff', name: 'Aqua' },
    { id: 'fuchsia', color: '#ff00ff', name: 'Fuchsia' },
    { id: 'gray1', color: '#808080', name: 'Gray' },
    { id: 'gray2', color: '#a9a9a9', name: 'Light Gray' },
    { id: 'indigo', color: '#4b0082', name: 'Indigo' },
    { id: 'violet', color: '#8a2be2', name: 'Violet' },
    { id: 'crimson', color: '#dc143c', name: 'Crimson' },
    { id: 'darkgreen', color: '#006400', name: 'Dark Green' },
    { id: 'chocolate', color: '#d2691e', name: 'Chocolate' },
    { id: 'salmon', color: '#fa8072', name: 'Salmon' },
    { id: 'khaki', color: '#f0e68c', name: 'Khaki' },
    { id: 'plum', color: '#dda0dd', name: 'Plum' },
    { id: 'tan', color: '#d2b48c', name: 'Tan' }
  ];

  const shapes = ['none', 'square', 'circle', 'heart'];

  const stickers = [
    'none', 'star', 'clover', 'lips', 'heart2', 'bow', 'music', 'heart3', 'sparkle', 'eyes',
    'star2', 'chick', 'bear', 'bird', 'camera', 'cat', 'dog', 'flower', 'house', 'triangle1',
    'triangle2', 'new1', 'money', 'cherry', 'cake', 'beer', 'coffee', 'pizza', 'star3', 'love',
    'trophy', 'new2'
  ];

  const languages = ['ENG', 'KOR', 'CN'];

  const getStickerEmoji = (sticker) => {
    const emojiMap = {
      'star': '⭐', 'clover': '🍀', 'lips': '💋', 'heart2': '💖', 'bow': '🎀',
      'music': '🎵', 'heart3': '💝', 'sparkle': '✨', 'eyes': '👀', 'star2': '🌟',
      'chick': '🐤', 'bear': '🐻', 'bird': '🐦', 'camera': '📷', 'cat': '🐱',
      'dog': '🐕', 'flower': '🌸', 'house': '🏠', 'triangle1': '🔺', 'triangle2': '🔻',
      'new1': '🆕', 'money': '💰', 'cherry': '🍒', 'cake': '🎂', 'beer': '🍺',
      'coffee': '☕', 'pizza': '🍕', 'star3': '💫', 'love': '💕', 'trophy': '🏆', 'new2': '🆕'
    };
    return emojiMap[sticker] || '⭐';
  };

  return (
    <div className="page-container">
      <Navigation />
      <div className="customize-page">
        <div className="customize-header">
          <h1>customize your photo</h1>
        </div>
        
        <div className="customize-content">
          <div className="preview-section">
            <div className="photo-preview">
              <div 
                className="photo-frame"
                style={{
                  background: frameColors.find(c => c.id === selectedFrameColor)?.color || '#ffffff',
                  padding: '20px',
                  borderRadius: '12px'
                }}
              >
                                 {capturedPhotos.slice(0, 4).map((photo, index) => (
                   <div key={index} className="photo-slot large">
                     <div className="photo-container" style={{ position: 'relative' }}>
                       <img 
                         src={photo} 
                         alt={`Captured ${index + 1}`}
                         style={{
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                           borderRadius: selectedShape === 'circle' ? '50%' : selectedShape === 'heart' ? '50% 50% 0 0' : '8px'
                         }}
                       />
                       {/* Apply selected stickers on the frame */}
                       {selectedStickers.slice(0, 1).map((sticker, stickerIndex) => {
                         // Position stickers on the frame (border area)
                         const framePositions = [
                           { top: '-10px', left: '10px' },      // Top-left corner of frame
                           { top: '-10px', right: '10px' },     // Top-right corner of frame
                           { bottom: '-10px', left: '10px' },    // Bottom-left corner of frame
                           { bottom: '-10px', right: '10px' }   // Bottom-right corner of frame
                         ];
                         
                         return (
                           <div 
                             key={stickerIndex}
                             className={`sticker-overlay ${sticker}`}
                             style={{
                               position: 'absolute',
                               ...framePositions[index] || framePositions[0],
                               fontSize: '24px',
                               zIndex: 10,
                               color: '#333'
                             }}
                           >
                             {getStickerEmoji(sticker)}
                           </div>
                         );
                       })}
                     </div>
                   </div>
                 ))}
                {Array.from({ length: Math.max(0, 4 - capturedPhotos.length) }).map((_, index) => (
                  <div key={`empty-${index}`} className="photo-slot large empty"></div>
                ))}
              </div>
              <div className="preview-footer">photobooth</div>
            </div>
          </div>
          
          <div className="options-section">
            <div className="option-group">
              <h3>Frame Color</h3>
              <div className="color-grid">
                {frameColors.map((colorObj) => (
                  <button
                    key={colorObj.id}
                    className={`color-option ${selectedFrameColor === colorObj.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFrameColor(colorObj.id)}
                    style={{ 
                      background: colorObj.color,
                      border: selectedFrameColor === colorObj.id ? '3px solid var(--dark-pink)' : '3px solid transparent'
                    }}
                    title={colorObj.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Photo Shape:</h3>
              <div className="shape-options">
                {shapes.map((shape) => (
                  <button
                    key={shape}
                    className={`shape-option ${selectedShape === shape ? 'selected' : ''}`}
                    onClick={() => setSelectedShape(shape)}
                  >
                    <div className={`shape-preview ${shape}`}></div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Stickers</h3>
              <div className="stickers-grid">
                {stickers.map((sticker) => (
                  <button
                    key={sticker}
                    className={`sticker-option ${selectedStickers.includes(sticker) ? 'selected' : ''}`}
                                         onClick={() => {
                       if (selectedStickers.includes(sticker)) {
                         setSelectedStickers([]);
                       } else {
                         setSelectedStickers([sticker]); // Only one sticker at a time
                       }
                     }}
                  >
                    {sticker === 'new1' || sticker === 'new2' ? <span className="new-badge">new</span> : null}
                    <div className={`sticker-preview ${sticker}`}></div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Logo:</h3>
              <div className="language-options">
                {languages.map((lang) => (
                  <button key={lang} className="language-btn">{lang}</button>
                ))}
              </div>
              <div className="checkbox-options">
                <label>
                  <input 
                    type="checkbox" 
                    checked={addDate}
                    onChange={(e) => setAddDate(e.target.checked)}
                  />
                  Add Date
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={addTime} 
                    onChange={(e) => setAddTime(e.target.checked)}
                  />
                  Add Time
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="customize-actions">
          <Link to="/capture" className="btn-secondary">Back</Link>
          <button 
            className="btn-primary"
            onClick={async () => {
              // Create a canvas to combine photos and frame
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = 400;
              canvas.height = 600;
              
              // Set frame color
              const frameColor = frameColors.find(c => c.id === selectedFrameColor)?.color || '#ffffff';
              if (frameColor.includes('gradient')) {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#ff6b9d');
                gradient.addColorStop(1, '#4ecdc4');
                ctx.fillStyle = gradient;
              } else {
                ctx.fillStyle = frameColor;
              }
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              // Add photos with stickers
              const photoHeight = 120;
              const photoWidth = 360;
              const spacing = 20;
              
              for (let i = 0; i < Math.min(capturedPhotos.length, 4); i++) {
                const y = spacing + (i * (photoHeight + spacing));
                
                // Create photo image
                const img = new Image();
                img.crossOrigin = 'anonymous';
                
                await new Promise((resolve) => {
                  img.onload = () => {
                    // Draw photo
                    ctx.save();
                    ctx.beginPath();
                    
                    // Apply shape clipping
                    if (selectedShape === 'circle') {
                      ctx.arc(spacing + photoWidth/2, y + photoHeight/2, photoHeight/2, 0, 2 * Math.PI);
                    } else if (selectedShape === 'heart') {
                      // Heart shape approximation
                      ctx.arc(spacing + photoWidth/2, y + photoHeight/2, photoHeight/2, 0, 2 * Math.PI);
                    } else {
                      ctx.rect(spacing, y, photoWidth, photoHeight);
                    }
                    
                    ctx.clip();
                    ctx.drawImage(img, spacing, y, photoWidth, photoHeight);
                    ctx.restore();
                    
                    // Add sticker on the frame (border area)
                    if (selectedStickers.length > 0) {
                      const sticker = selectedStickers[0]; // Only one sticker
                      const frameStickerPositions = [
                        { x: 5, y: 15 },                    // Top-left corner of frame
                        { x: canvas.width - 25, y: 15 },    // Top-right corner of frame
                        { x: 5, y: canvas.height - 25 },     // Bottom-left corner of frame
                        { x: canvas.width - 25, y: canvas.height - 25 } // Bottom-right corner of frame
                      ];
                      
                      const position = frameStickerPositions[i] || frameStickerPositions[0];
                      ctx.font = '24px Arial';
                      ctx.fillStyle = '#333';
                      ctx.fillText(getStickerEmoji(sticker), position.x, position.y);
                    }
                    
                    resolve();
                  };
                  img.src = capturedPhotos[i];
                });
              }
              
              // Add photobooth text
              ctx.fillStyle = '#333';
              ctx.font = 'bold 16px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('photobooth', canvas.width/2, canvas.height - 10);
              
              // Download
              const link = document.createElement('a');
              link.download = `photobooth-${Date.now()}.png`;
              link.href = canvas.toDataURL();
              link.click();
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

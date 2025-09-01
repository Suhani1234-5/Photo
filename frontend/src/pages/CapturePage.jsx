import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import Navigation from '../components/Navigation.jsx';

export default function CapturePage({ 
  selectedLayout, 
  capturedPhotos, 
  setCapturedPhotos, 
  selectedFilter, 
  setSelectedFilter 
}) {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(false);
  
  const getStepsForLayout = (layout) => {
    switch(layout) {
      case 'layout-a': return 3;
      case 'layout-b': return 4;
      case 'layout-c': return 2;
      case 'layout-d': return 6;
      case 'studio-mode': return 4;
      default: return 4;
    }
  };
  
  const totalSteps = getStepsForLayout(selectedLayout);
  
  const filters = [
    { 
      name: 'Original', 
      id: 'none',
      css: 'none'
    },
    { 
      name: 'Vintage', 
      id: 'sepia',
      css: 'sepia(50%) saturate(80%) contrast(120%) brightness(110%)'
    },
    { 
      name: 'B&W', 
      id: 'bw',
      css: 'grayscale(100%) contrast(120%) brightness(105%)'
    },
    { 
      name: 'Warm', 
      id: 'warm',
      css: 'saturate(130%) hue-rotate(-15deg) brightness(110%)'
    },
    { 
      name: 'Cool', 
      id: 'cool',
      css: 'saturate(120%) hue-rotate(15deg) brightness(95%)'
    },
    { 
      name: 'Dreamy', 
      id: 'dreamy',
      css: 'blur(0.3px) brightness(110%) saturate(120%) contrast(90%)'
    }
  ];

  useEffect(() => {
    if (capturedPhotos.length >= totalSteps && !showPreview) {
      setShowPreview(true);
    }
  }, [capturedPhotos.length, totalSteps, showPreview]);

  // Auto-start countdown when component mounts or when ready for next photo
  useEffect(() => {
    if (capturedPhotos.length < totalSteps && !isCountingDown && !showPreview) {
      const timer = setTimeout(() => {
        startCountdown();
      }, 1000); // 1 second delay before starting countdown
      
      return () => clearTimeout(timer);
    }
  }, [capturedPhotos.length, currentStep, isCountingDown, showPreview, totalSteps]);

  const startCountdown = () => {
    if (isCountingDown) return;
    
    setIsCountingDown(true);
    setCountdown(3);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCountingDown(false);
          capturePhoto();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const newPhotos = [...capturedPhotos, imageSrc];
      setCapturedPhotos(newPhotos);
      
      if (newPhotos.length < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleRetake = () => {
    setCapturedPhotos([]);
    setCurrentStep(1);
    setShowPreview(false);
    setCountdown(0);
    setIsCountingDown(false);
  };

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  const proceedToCustomize = () => {
    navigate('/customize');
  };

  // Remove the preview mode - go directly to customize after all photos are captured

  return (
    <div className="page-container">
      <Navigation />
      <div className="capture-page">
        <div className="step-indicator">
          {currentStep}/{totalSteps}
        </div>
        
        <div className="capture-header">
          <button className="upload-btn">📁 Upload Image</button>
          <select className="step-selector">
            <option>3s</option>
          </select>
        </div>
        
        <div className="capture-main">
          <div className="webcam-container">
            <div className="webcam-wrapper">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/png"
                videoConstraints={{ facingMode: 'user' }}
                className="webcam"
                style={{
                  filter: filters.find(f => f.id === selectedFilter)?.css || 'none'
                }}
              />
              {isCountingDown && (
                <div className="countdown-overlay">
                  <div className="countdown-number">{countdown}</div>
                </div>
              )}
              {capturedPhotos.length >= totalSteps && (
                <div className="capture-complete">
                  All photos captured! ✨
                </div>
              )}
            </div>
          </div>
          
          <div className="thumbnail-strip">
            {Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index} 
                className={`thumbnail ${index < capturedPhotos.length ? 'filled' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
              >
                {capturedPhotos[index] && (
                  <img src={capturedPhotos[index]} alt={`Capture ${index + 1}`} />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="capture-actions">
          <Link to="/choose-layout" className="btn-retake">Back</Link>
          <button 
            onClick={startCountdown} 
            className="btn-capture"
            disabled={isCountingDown || capturedPhotos.length >= totalSteps}
          >
            📷 Retake
          </button>
          <button 
            onClick={proceedToCustomize}
            className={`btn-done ${capturedPhotos.length >= totalSteps ? 'enabled' : ''}`}
            disabled={capturedPhotos.length < totalSteps}
          >
            DONE
          </button>
        </div>
        
        {/* Filter section moved to capture page */}
        <div className="filter-section">
          <h3>Choose a filter</h3>
          <div className="filter-options">
            {filters.map((filter) => (
              <button 
                key={filter.id} 
                className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter.id)}
              >
                <div 
                  className="filter-preview"
                  style={{
                    filter: filter.css,
                    background: 'linear-gradient(45deg, #ff6b9d, #c44569, #f093fb)'
                  }}
                ></div>
                <span className="filter-name">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

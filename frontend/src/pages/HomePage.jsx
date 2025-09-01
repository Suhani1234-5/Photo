import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function HomePage() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="home-page">
        <div className="announcement-banner">
          <div className="banner-icon">NEW</div>
          <div className="banner-text">
            Coming Soon: Live Image in Photo Strip, Cool Filters, More Stickers, 
            More Background Image Frames ♡
          </div>
        </div>
        
        <div className="home-content">
          <div className="photo-strip left">
            <div className="strip-frame">
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
            </div>
            <div className="strip-footer">photobooth</div>
          </div>
          
          <div className="center-content">
            <div className="brand-section">
              <div className="brand-year">EST</div>
              <div className="brand-title">photobooth</div>
              <div className="brand-year">2025</div>
            </div>
            <div className="brand-subtitle">
              Capture the moment, cherish the magic,<br/>
              relive the love
            </div>
            <Link to="/choose-layout" className="start-button">
              START ♡
            </Link>
          </div>
          
          <div className="photo-strip right">
            <div className="strip-frame">
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
              <div className="photo-slot"></div>
            </div>
            <div className="strip-footer">photobooth</div>
          </div>
        </div>
      </div>
    </div>
  );
}

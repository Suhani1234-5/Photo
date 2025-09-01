import Navigation from '../components/Navigation.jsx';

export default function AboutPage() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="about-page">
        <div className="about-content">
          <h1>about photobooth</h1>
          
          <div className="about-description">
            <p>
              Our online photobooth is a customizable, browser-based tool you can use anytime, anywhere. 
              Users can take instant photobooth-style photos, apply frames in over 100 colors, add digital 
              stickers, and download high-resolution photo strips directly from any device. No installation 
              or account required. Designed for performance, simplicity, and creative flexibility, it's an 
              all-in-one tool for creating shareable photo experiences online.
            </p>
          </div>

          <div className="faq-section">
            <h2>FAQ</h2>
            
            <div className="faq-item">
              <h3>How do I use this site?</h3>
              <ol>
                <li>Choose your preferred photo layout.</li>
                <li>Allow camera permissions.</li>
                <li>Pose for each photo—there's a 3 second countdown for each shot.</li>
                <li>Click "Done" if you're happy with the photos, or select "Retake" to capture them again.</li>
                <li>Once finalized, customize your photo strip by adjusting the border color (including custom colors), adding stickers, changing the logo language, or overlaying the date.</li>
                <li>Click "Download" to save your digital copy!</li>
              </ol>
            </div>

            <div className="faq-item">
              <h3>Can I use this on mobile?</h3>
              <p>Yes! The app is now fully optimized for mobile devices and works in both portrait and landscape mode.</p>
            </div>

            <div className="faq-item">
              <h3>Can I customize the photobooth strip?</h3>
              <p>Absolutely! We've listened to your requests, and now you can personalize your photo strip with custom border colors, sticker overlays, date overlays, and even change the logo.</p>
            </div>

            <div className="faq-item">
              <h3>Can I choose my preferred layout?</h3>
              <p>Yes! You can select from three different layouts: 2, 3, or 4-photo strips to match your style.</p>
            </div>

            <div className="faq-item">
              <h3>Why is the screen black even after allowing camera access?</h3>
              <p>Your camera permissions might be blocked. Go to: Settings → Privacy & Security → Camera</p>
              <p>Turn on: "Let apps access your camera" and "Let desktop apps access your camera".</p>
            </div>

            <div className="faq-item">
              <h3>Why does my camera feed start black?</h3>
              <p>That's intentional! The app waits until you accept camera permissions before displaying the video feed.</p>
            </div>

            <div className="faq-item">
              <h3>Do you store my photos or data?</h3>
              <p>Nope! Your photos stay on your device and never get uploaded or stored anywhere. Everything happens locally in your browser, so you have full control over your images.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

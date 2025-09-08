import React, { useState } from 'react';
import Navigation from '../components/Navigation';


const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerStyle = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    lineHeight: '2',
    color: '#2d3748',
     maxWidth: '200%',   // full width
    // maxWidth: '800px',
    margin: '0 auto',
    padding: '6rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
     overflowY: 'auto' ,
     
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  width: '300%',
  maxWidth: '1000px',
  maxHeight: '100vh',     // 🔑 card ki height limit
  overflowY: 'auto'      // 🔑 andar scroll enable
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#6b7280',
    fontWeight: '400'
  };

  const lastUpdatedStyle = {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.9rem',
    marginBottom: '2rem',
    fontStyle: 'italic'
  };

  const sectionStyle = {
    marginBottom: '2rem',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const sectionHeaderStyle = (isActive) => ({
    background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f9fafb',
    padding: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    color: isActive ? 'white' : '#374151',
    fontWeight: '600',
    fontSize: '1.1rem'
  });

  const sectionContentStyle = (isActive) => ({
    padding: isActive ? '1.5rem' : '0',
    maxHeight: isActive ? '1000px' : '0',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    background: '#ffffff'
  });

  const iconStyle = (isActive) => ({
    transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  });

  const listStyle = {
    paddingLeft: '1.5rem',
    margin: '1rem 0'
  };

  const listItemStyle = {
    marginBottom: '0.5rem',
    color: '#4b5563'
  };

  const highlightStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600'
  };

  const contactBoxStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    marginTop: '2rem'
  };

  const sections = [
    {
      id: 'overview',
      title: '📋 Overview',
      content: (
        <div>
          <p>Welcome to <span style={highlightStyle}>Aesthetic Photo Booth</span>! This Privacy Policy explains how our desktop application handles your information when you use our photo booth software.</p>
          <p><strong>Important:</strong> Our application operates entirely on your local device and does not collect, transmit, or store any personal data on external servers.</p>
        </div>
      )
    },
    {
      id: 'information',
      title: '📷 Information We Process',
      content: (
        <div>
          <p>Our application processes the following data <strong>locally on your device only:</strong></p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Camera Data:</strong> Live video feed for photo capture</li>
            <li style={listItemStyle}><strong>Photos:</strong> Images you capture during photo sessions</li>
            <li style={listItemStyle}><strong>Settings:</strong> Your filter, frame, and customization preferences</li>
            <li style={listItemStyle}><strong>Device Information:</strong> Camera specifications and resolution capabilities</li>
          </ul>
          <p><em>All data remains on your device and is never transmitted elsewhere.</em></p>
        </div>
      )
    },
    {
      id: 'usage',
      title: '🎯 How We Use Your Information',
      content: (
        <div>
          <p>Your information is used exclusively for:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Capturing and processing photos</li>
            <li style={listItemStyle}>Applying filters and aesthetic enhancements</li>
            <li style={listItemStyle}>Creating photo strips and layouts</li>
            <li style={listItemStyle}>Saving your preferences and settings</li>
            <li style={listItemStyle}>Providing the best photo booth experience</li>
          </ul>
        </div>
      )
    },
    {
      id: 'storage',
      title: '💾 Data Storage & Security',
      content: (
        <div>
          <p><span style={highlightStyle}>Local Storage Only:</span></p>
          <ul style={listStyle}>
            <li style={listItemStyle}>All photos are saved to your chosen directory</li>
            <li style={listItemStyle}>Application settings stored in local configuration files</li>
            <li style={listItemStyle}>No cloud storage or external servers involved</li>
            <li style={listItemStyle}>You have complete control over your data</li>
          </ul>
          <p><strong>Security Measures:</strong></p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Camera access only when application is active</li>
            <li style={listItemStyle}>Secure local file handling</li>
            <li style={listItemStyle}>No network connections for data transmission</li>
          </ul>
        </div>
      )
    },
    {
      id: 'sharing',
      title: '🔐 Information Sharing',
      content: (
        <div>
          <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#059669' }}>We do NOT share, sell, or transmit any of your information.</p>
          <p>Since our application operates entirely offline:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>No data is sent to third parties</li>
            <li style={listItemStyle}>No analytics or tracking systems</li>
            <li style={listItemStyle}>No advertising networks</li>
            <li style={listItemStyle}>No social media integrations that share data</li>
          </ul>
          <p><em>Your photos and data remain private and under your complete control.</em></p>
        </div>
      )
    },
    {
      id: 'permissions',
      title: '🔑 Permissions & Camera Access',
      content: (
        <div>
          <p>Our application requires:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Camera Permission:</strong> To capture photos and provide live preview</li>
            <li style={listItemStyle}><strong>File System Access:</strong> To save your photos to chosen directories</li>
          </ul>
          <p><strong>You can:</strong></p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Revoke camera permissions at any time through your OS settings</li>
            <li style={listItemStyle}>Choose where to save your photos</li>
            <li style={listItemStyle}>Delete any captured photos manually</li>
          </ul>
        </div>
      )
    },
    {
      id: 'rights',
      title: '⚖️ Your Rights',
      content: (
        <div>
          <p>Since all data is stored locally, you have complete control:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Access:</strong> All your data is accessible in your local directories</li>
            <li style={listItemStyle}><strong>Delete:</strong> Remove any photos or settings files at any time</li>
            <li style={listItemStyle}><strong>Modify:</strong> Edit or organize your photos as desired</li>
            <li style={listItemStyle}><strong>Export:</strong> Move your photos to any device or platform</li>
          </ul>
        </div>
      )
    },
    {
      id: 'updates',
      title: '🔄 Updates to This Policy',
      content: (
        <div>
          <p>We may update this Privacy Policy occasionally to reflect:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>New features or functionality</li>
            <li style={listItemStyle}>Changes in privacy regulations</li>
            <li style={listItemStyle}>Improvements to our data handling practices</li>
          </ul>
          <p>Updates will be included with application updates and posted in our documentation.</p>
        </div>
      )
    }
  ];

  return (
    
    <div style={containerStyle}>
        <Navigation />
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Privacy Policy</h1>
          <p style={subtitleStyle}>Aesthetic Photo Booth</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', padding: '0 1rem' }}>
          <div style={lastUpdatedStyle}>
            Last Updated: September 8, 2025
          </div>

          <div style={{ marginBottom: '2rem', padding: 'clamp(1rem, 3vw, 1.5rem)', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderRadius: '12px', border: '1px solid #86efac' }}>
            <p style={{ margin: '0', color: '#065f46', fontWeight: '500', textAlign: 'center', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              🛡️ <strong>Privacy First:</strong> Your photos and data never leave your device. We prioritize your privacy above all else.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.id} style={sectionStyle}>
              <div
                style={sectionHeaderStyle(activeSection === section.id)}
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <span style={iconStyle(activeSection === section.id)}>+</span>
              </div>
              <div style={sectionContentStyle(activeSection === section.id)}>
                {section.content}
              </div>
            </div>
          ))}

          <div style={contactBoxStyle}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)' }}>📧 Questions or Concerns?</h3>
            <p style={{ margin: '0', opacity: '0.9', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our GitHub repository or support channels.
            </p>
            <div style={{ marginTop: '1rem', fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)', opacity: '0.8' }}>
              <p style={{ margin: '0.5rem 0' }}>🌐 GitHub: aesthetic-photo-booth</p>
              <p style={{ margin: '0.5rem 0' }}>📱 Support: Available in our documentation</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem 1rem', color: '#6b7280', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
            <p style={{ margin: '0' }}>
              Made with ❤️ for your privacy and creative expression
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
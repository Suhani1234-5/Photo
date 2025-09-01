import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function LayoutPage({ selectedLayout, setSelectedLayout }) {
  const layouts = [
    {
      id: 'layout-a',
      title: 'layout A',
      subtitle: 'Size 6 x 2 Strip\n(3 Pose)',
      preview: 'a'
    },
    {
      id: 'layout-b', 
      title: 'layout B',
      subtitle: 'Size 6 x 2 Strip\n(4 Pose)',
      preview: 'b'
    },
    {
      id: 'layout-c',
      title: 'layout C', 
      subtitle: 'Size 6 x 2 Strip\n(2 Pose)',
      preview: 'c',
      badge: 'NEW!'
    },
    {
      id: 'layout-d',
      title: 'layout D',
      subtitle: 'Size 6 x 4 Strip\n(6 Pose)', 
      preview: 'd'
    },
    {
      id: 'studio-mode',
      title: 'Studio Mode (Beta Test)',
      subtitle: '- Live Preview and QR Code Scan\nSize 8 x 5 Strip\n(4 Pose)',
      preview: 'studio'
    }
  ];

  return (
    <div className="page-container">
      <Navigation />
      <div className="layout-page">
        <div className="layout-header">
          <h1>choose your layout</h1>
          <p className="layout-subtitle">NOTE: you have 3 seconds for each shot</p>
        </div>
        
        <div className="layouts-grid">
          {layouts.map((layout) => (
            <Link 
              key={layout.id} 
              to="/capture" 
              className={`layout-card ${selectedLayout === layout.id ? 'selected' : ''}`}
              onClick={() => setSelectedLayout(layout.id)}
            >
              <div className="layout-preview">
                {layout.badge && <div className="layout-badge">{layout.badge}</div>}
                <div className="layout-image">
                  {/* Preview images would go here */}
                  <div className="preview-placeholder">{layout.preview}</div>
                </div>
              </div>
              <div className="layout-info">
                <h3>{layout.title}</h3>
                <p>{layout.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

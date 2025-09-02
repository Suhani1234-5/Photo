import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function LayoutPage({ selectedLayout, setSelectedLayout }) {
  const layouts = [
    {
      id: 'layout-a',
      title: 'layout A',
      subtitle: 'Size 6 x 2 Strip\n(3 Pose)',
      image: 'https://i.pinimg.com/736x/4b/89/70/4b8970d7ccf21c75a215c3ce26345926.jpg'
    },
    {
      id: 'layout-b',
      title: 'layout B',
      subtitle: 'Size 6 x 2 Strip\n(4 Pose)',
      image: 'https://i.pinimg.com/736x/4a/60/b1/4a60b1b920468690729581d625016a3e.jpg'
    },
    {
      id: 'layout-c',
      title: 'layout C',
      subtitle: 'Size 6 x 2 Strip\n(2 Pose)',
      badge: 'NEW!',
      image: 'https://i.pinimg.com/736x/fd/b4/07/fdb407b3f3541166292c74c958763300.jpg'
    },
    {
      id: 'layout-d',
      title: 'layout D',
      subtitle: 'Size 6 x 4 Strip\n(6 Pose)',
      image: 'https://i.pinimg.com/736x/d5/5f/63/d55f63442825e60bb53f6657ce9d7b09.jpg'
    },
    {
      id: 'studio-mode',
      title: 'Studio Mode (Beta Test)',
      subtitle: '- Live Preview and QR Code Scan\nSize 8 x 5 Strip\n(4 Pose)',
      image: 'https://i.pinimg.com/736x/88/e8/25/88e825988b74876f5e39763ee5fa63a9.jpg'
    },
    // {
    //   id: 'custom-upload',
    //   title: 'Custom Layout',
    //   subtitle: 'Your uploaded image',
    //   image: '/mnt/data/de80ea49-811e-490f-be3e-4c1b6fa7812a.png'
    // }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        background: '#fdb2c8',
        color: '#333',
        fontFamily: 'Poppins, sans-serif',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h1
            style={{
              fontSize: '2.2rem',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#b30059',
              marginBottom: '0.5rem'
            }}
          >
            choose your layout
          </h1>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#444',
              letterSpacing: '1px'
            }}
          >
            NOTE: you have 3 seconds for each shot
          </p>
        </div>

        {/* Layout grid */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '2rem',
            maxWidth: '2000px',
            margin: '0 auto',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          {layouts.map((layout) => (
            <Link
              key={layout.id}
              to="/capture"
              onClick={() => setSelectedLayout(layout.id)}
              style={{
                background: '#fff',
                borderRadius: '1rem',
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: selectedLayout === layout.id ? '2px solid #b30059' : '2px solid transparent',
                boxShadow:
                  selectedLayout === layout.id
                    ? '0 0 18px rgba(179, 0, 89, 0.4)'
                    : '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 20px rgba(179, 0, 89, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  selectedLayout === layout.id
                    ? '0 0 18px rgba(179, 0, 89, 0.4)'
                    : '0 6px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Preview */}
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                {layout.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      background: '#b30059',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {layout.badge}
                  </div>
                )}
                <img
                  src={layout.image}
                  alt={layout.title}
                  style={{
                    width: '200px',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.25rem',
                    color: '#b30059'
                  }}
                >
                  {layout.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                    color: '#444',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {layout.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

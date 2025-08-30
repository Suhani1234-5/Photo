# 📸 ✨ Aesthetic Photo Booth ✨ 📸

<div align="center">

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![OpenCV](https://img.shields.io/badge/OpenCV-4.5+-green.svg)
![Tkinter](https://img.shields.io/badge/GUI-Tkinter-orange.svg)
![License](https://img.shields.io/badge/License-MIT-purple.svg)

*Create stunning Life4Cuts style photo strips with vintage filters and aesthetic frames* ✨

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Customization](#-customization)

</div>

---

## 🌟 About

**Aesthetic Photo Booth** is a Python-powered recreation of the popular Life4Cuts photo booth experience. Capture four consecutive photos in seconds, apply vintage filters, add cute stickers, and create beautiful photo strips perfect for sharing!

Inspired by the viral South Korean photo booth trend, this project brings the aesthetic photo booth experience to your desktop with customizable frames, filters, and endless creative possibilities.

## ✨ Features

### 📷 **Life4Cuts Photography**
- **4-photo sequence** with 3-second intervals
- **Real-time countdown** with visual feedback
- **Instant preview** before finalizing

### 🎨 **Aesthetic Enhancements**
- **Vintage filters** (Sepia, Black & White, Retro, Film)
- **Customizable frames** (Polaroid, Filmstrip, Retro, Modern)
- **Sticker collection** (Hearts, Stars, Flowers, Text bubbles)
- **Color themes** (Pastel, Neon, Monochrome, Sunset)

### 💫 **Photo Strip Creation**
- **Professional layouts** with perfect spacing
- **High-quality exports** (PNG/JPG)
- **Social media ready** formats
- **Print-friendly** resolutions

### 🖥️ **User Experience**
- **Clean, intuitive interface** with modern design
- **Smooth animations** and transitions
- **Keyboard shortcuts** for quick actions
- **Webcam preview** with real-time effects

## 🎬 Demo

```bash
# Quick start demo
python photo_booth.py --demo

# Custom session with retro theme
python photo_booth.py --theme retro --filter sepia
```

<div align="center">

*Sample photo strip output with vintage aesthetic* 📷✨

</div>

## 🚀 Installation

### Prerequisites
- **Python 3.8+**
- **Webcam** or camera device
- **Modern OS** (Windows 10+, macOS 10.15+, Linux)

### Quick Setup

```bash
# Clone the aesthetic magic ✨
git clone https://github.com/yourusername/aesthetic-photo-booth.git
cd aesthetic-photo-booth

# Install dependencies
pip install -r requirements.txt

# Launch the photo booth! 📸
python photo_booth.py
```

### Dependencies
```
opencv-python>=4.5.0
Pillow>=8.0.0
numpy>=1.20.0
tkinter (included with Python)
```

## 🎯 Usage

### Basic Session
```bash
# Start with default settings
python photo_booth.py

# Or use the GUI launcher
python gui_launcher.py
```

### Advanced Options
```bash
# Custom filter and frame
python photo_booth.py --filter vintage --frame polaroid

# Specific resolution
python photo_booth.py --resolution 1920x1080

# Save to custom directory
python photo_booth.py --output ./my_photos
```

### Keyboard Shortcuts
- **SPACE** - Start photo session
- **F** - Cycle through filters
- **S** - Add stickers mode
- **R** - Reset current photo
- **ESC** - Exit application

## 🎨 Customization

### Adding Custom Filters
```python
# filters/custom_filters.py
def dreamy_filter(image):
    # Add your custom filter logic
    return processed_image

# Register in main app
photo_booth.add_filter("dreamy", dreamy_filter)
```

### Creating New Frames
```python
# frames/frame_templates.py
CUSTOM_FRAME = {
    "name": "galaxy",
    "border_size": 20,
    "color": (138, 43, 226),
    "style": "gradient"
}
```

### Sticker Packs
Place your custom stickers in `/assets/stickers/` as PNG files with transparent backgrounds.

## 📁 Project Structure

```
aesthetic-photo-booth/
├── 📸 photo_booth.py          # Main application
├── 🎨 filters/                # Filter effects
│   ├── vintage.py
│   ├── retro.py
│   └── modern.py
├── 🖼️ frames/                 # Frame templates
│   ├── polaroid.py
│   ├── filmstrip.py
│   └── minimal.py
├── ✨ stickers/               # Sticker assets
├── 🎬 gui/                    # User interface
│   ├── main_window.py
│   ├── camera_view.py
│   └── editor.py
├── 📷 utils/                  # Helper functions
├── 🎯 assets/                 # Images and resources
└── 📋 requirements.txt
```

## 🎪 Examples

### Vintage Aesthetic
```python
from photo_booth import PhotoBooth

booth = PhotoBooth()
booth.set_filter("sepia")
booth.set_frame("polaroid")
booth.start_session()
```

### Modern Neon Style
```python
booth = PhotoBooth(theme="neon")
booth.set_filter("cyberpunk")
booth.add_stickers(["neon_heart", "sparkle"])
booth.capture_sequence()
```

## 🛠️ Development

### Running Tests
```bash
pytest tests/ -v
```

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-filter`)
3. Commit your changes (`git commit -m 'Add amazing new filter'`)
4. Push to the branch (`git push origin feature/amazing-filter`)
5. Open a Pull Request

## 📱 Social Media Integration

Export your photo strips in perfect formats for:
- **Instagram Stories** (1080x1920)
- **TikTok** (1080x1920)
- **Twitter** (1200x675)
- **Print** (4x6 inches, 300 DPI)

## 🎭 Themes

### Available Themes
- 🌸 **Kawaii** - Soft pastels and cute elements
- 🌆 **Cyberpunk** - Neon colors and futuristic vibes
- 📼 **Retro** - 80s/90s nostalgia
- 🌿 **Minimalist** - Clean and simple
- 🌅 **Sunset** - Warm gradient tones

## 🔧 Configuration

Create a `config.json` file to customize default settings:

```json
{
  "default_filter": "vintage",
  "default_frame": "polaroid",
  "photo_count": 4,
  "interval_seconds": 3,
  "output_format": "png",
  "resolution": [1920, 1080]
}
```

## 🚨 Troubleshooting

### Camera Issues
- Ensure your webcam is connected and not in use by other applications
- Try different camera indices in settings
- Check camera permissions in your OS

### Performance Optimization
- Lower resolution for older hardware
- Disable real-time preview for smoother capture
- Use lightweight filters on slower systems

## 🤝 Contributing

We love contributions! Whether it's:
- 🎨 New filter effects
- 🖼️ Frame designs
- ✨ Sticker packs
- 🐛 Bug fixes
- 📝 Documentation improvements

Check out our [Contributing Guide](CONTRIBUTING.md) to get started!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenCV** community for computer vision tools
- **Pillow** for image processing capabilities
- All contributors who make this project better! ✨

<!-- ## 📬 Connect

Created with 💜 by [Your Name]

- 🌐 Website: [your-website.com]
- 📧 Email: [your-email@domain.com]
- 🐙 GitHub: [@yourusername]
- 📱 Instagram: [@yourhandle] -->

---

<div align="center">

**Made with ❤️ and lots of ☕**

*Star ⭐ this repo if you found it helpful!*

</div>
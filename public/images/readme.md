
# Chesel App Icons & Images

This folder contains all the custom icons and images used throughout the Chesel app.

## Folder Structure

```
public/images/
├── icons/
│   ├── profile-user.svg       # User profile icon
│   ├── my-space.svg          # Home/space icon  
│   ├── scanner-qr.svg        # QR/Barcode scanner icon
│   └── shortcut-star.svg     # Star icon for shortcuts
├── logos/
│   └── (App logos will go here)
├── backgrounds/
│   └── (Background images will go here)
└── ui/
    └── (UI element images will go here)
```

## Naming Convention

All icons and images follow this naming pattern:
- `component-descriptor.svg` for icons
- `feature-purpose.png/jpg` for images
- Use kebab-case (lowercase with hyphens)
- Be descriptive but concise

## Usage

Icons can be used in components like this:
```jsx
<img src="/images/icons/scanner-qr.svg" alt="Scanner" className="w-6 h-6" />
```

Or as background images:
```jsx
<div style={{ backgroundImage: 'url(/images/backgrounds/hero-gradient.jpg)' }}>
```

## Adding New Images

When adding new images:
1. Follow the naming convention
2. Place in appropriate subfolder
3. Optimize file size for web
4. Update this README if needed

# Aarre Intelligence - Marketing Website

Official marketing website for Aarre Intelligence, showcasing our AI platform and services.

## Overview

This is a standalone React application built with Vite, serving as the public-facing marketing site for aarre.ch. The site provides information about Aarre Intelligence's AI platform, technology, security features, and partnerships.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Project Structure

```
aarre.ch/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header with Demo Access button
│   │   ├── Footer.tsx       # Footer component
│   │   └── ProgressBar.tsx  # Progress indicator
│   ├── pages/               # Page components
│   │   ├── Landing.tsx      # Hero landing page
│   │   ├── Main.tsx         # Features & capabilities
│   │   ├── Technology.tsx   # Technical details
│   │   ├── Security.tsx     # Security features
│   │   ├── Partnerships.tsx # Partnership information
│   │   └── Contact.tsx      # Contact form
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── dist/                    # Build output (generated)
└── package.json             # Dependencies

```

## Development

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:3000/

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory.

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment to Digital Ocean Droplet

### Current Production Setup

**Server:** aarre.ch (64.227.126.0 / 138.68.112.141)
**Web Server:** Nginx
**Deployment Path:** `/opt/aarre-marketing/`
**Served at:** https://aarre.ch/ (root)

### Deployment Steps

1. **SSH into the droplet:**
   ```bash
   ssh root@64.227.126.0
   ```

2. **Clone or update the repository:**
   ```bash
   # First time setup
   cd /opt
   git clone https://github.com/YOUR_USERNAME/aarre.ch.git aarre-marketing

   # Or update existing
   cd /opt/aarre-marketing
   git pull origin main
   ```

3. **Install dependencies and build:**
   ```bash
   cd /opt/aarre-marketing
   npm install
   npm run build
   ```

4. **Update Nginx configuration:**

   Edit `/etc/nginx/sites-available/corporate-ai-vault` (or your nginx config):

   ```nginx
   server {
       listen 443 ssl http2;
       server_name aarre.ch www.aarre.ch;

       # SSL certificates
       ssl_certificate /etc/letsencrypt/live/aarre.ch/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/aarre.ch/privkey.pem;

       # Marketing site at root
       location = / {
           root /opt/aarre-marketing/dist;
           try_files /index.html =404;
       }

       location ~ ^/(main|technology|security|partnerships|contact)$ {
           root /opt/aarre-marketing/dist;
           try_files /index.html =404;
       }

       # Marketing assets
       location /assets/ {
           root /opt/aarre-marketing/dist;
           try_files $uri =404;
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Demo gate (from corporate-ai-vault)
       location /demo {
           alias /opt/corporate-ai-vault/static/tenants/aarredigital/vanilla/gate.html;
       }

       location /tenants/aarredigital/vanilla/ {
           alias /opt/corporate-ai-vault/static/tenants/aarredigital/vanilla/;
           try_files $uri $uri/ =404;
       }

       # Backend API (from corporate-ai-vault)
       location /api/ {
           proxy_pass http://127.0.0.1:8000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       # Other demo apps (from corporate-ai-vault)
       # ... keep existing demo app configurations
   }
   ```

5. **Test and reload Nginx:**
   ```bash
   nginx -t
   systemctl reload nginx
   ```

### Quick Deploy Script

Create a deploy script `/opt/aarre-marketing/deploy.sh`:

```bash
#!/bin/bash
set -e

echo "Deploying Aarre Marketing Site..."

cd /opt/aarre-marketing
git pull origin main
npm install
npm run build

echo "Build complete! Reloading Nginx..."
nginx -t && systemctl reload nginx

echo "Deployment successful!"
```

Make it executable:
```bash
chmod +x /opt/aarre-marketing/deploy.sh
```

Then deploy with:
```bash
/opt/aarre-marketing/deploy.sh
```

## Connection to Demo System

The "Demo Access" button in the header ([Header.tsx:56-66](src/components/Header.tsx#L56-L66)) links to the demo gate:

```
https://aarre.ch/tenants/aarredigital/vanilla/gate.html
```

This demo gate and all demo applications remain in the `corporate-ai-vault` repository and are served from `/opt/corporate-ai-vault/`.

## Environment Variables

This marketing site is fully static and requires no environment variables. All configuration is in:
- `vite.config.ts` - Build configuration
- `tailwind.config.js` - Styling configuration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Proprietary - Aarre Intelligence

## Support

For issues or questions, contact: richard.jarvinen@aarre.ch

# Pipe3D - 3D Product Viewer

A clean, minimal React web application for viewing 3D product models with Thai language support.

## Features

- 🎨 Clean, minimal blue-themed UI design
- 🌐 Thai language support with Sarabun font
- 🎯 3D product viewer with Sketchfab integration
- 📱 Responsive design with swipe support
- 🖼️ Image and 3D view toggle
- 🔗 Social media links (TikTok Shop & Shopee)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
cd [YOUR_REPO_NAME]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `pipe3d` or `pipe3d-website`)
3. Don't initialize with README (we already have one)

### Step 2: Update package.json

Update the `homepage` field in `package.json` with your GitHub Pages URL:

```json
"homepage": "https://[YOUR_USERNAME].github.io/[YOUR_REPO_NAME]"
```

For example:
```json
"homepage": "https://johndoe.github.io/pipe3d"
```

### Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Pipe3D website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your React app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://[YOUR_USERNAME].github.io/[YOUR_REPO_NAME]`

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **gh-pages** branch
4. Click **Save**

Your website will be live at: `https://[YOUR_USERNAME].github.io/[YOUR_REPO_NAME]`

## Updating the Website

After making changes:

```bash
# Commit your changes
git add .
git commit -m "Your commit message"
git push

# Deploy updates
npm run deploy
```

## Project Structure

```
my-app/
├── public/
│   ├── images/          # Product images
│   ├── logo/            # Logo files
│   ├── file/            # CSV data file
│   └── index.html
├── src/
│   ├── App.js           # Main app component
│   └── App.css          # Styles
└── package.json
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Technologies Used

- React 19
- Material-UI (MUI) 7
- Sketchfab 3D Viewer
- Google Fonts (Sarabun for Thai)

## License

This project is private.

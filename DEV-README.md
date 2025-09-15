# Development Setup - De Beauty Schuur

This document explains how to run the De Beauty Schuur website locally for development.

## Prerequisites

- Python 3.8 or higher
- [uv](https://github.com/astral-sh/uv) package manager

### Installing uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Quick Start

1. **Start the development server:**
   ```bash
   python start-dev.py
   ```
   
   Or manually:
   ```bash
   uv venv
   uv pip install -r requirements.txt
   uv run python server.py
   ```

2. **Open your browser:**
   The server will automatically open `http://localhost:8000` in your default browser.

3. **Start developing:**
   - Edit any HTML, CSS, or JS files
   - The browser will automatically reload when you save changes
   - Press `Ctrl+C` to stop the server

## Features

- **Hot Reload**: Automatically refreshes the browser when files change
- **Static File Serving**: Serves all static files (HTML, CSS, JS, images)
- **CORS Headers**: Configured for local development
- **No Caching**: Disabled caching for development to see changes immediately
- **File Watching**: Monitors file changes in real-time

## File Structure

```
beautyschuur/
├── server.py          # Main development server
├── start-dev.py       # Startup script with uv setup
├── requirements.txt   # Python dependencies
├── index.html         # Main website files
├── behandelingen/     # Treatment pages
├── assets/           # CSS, JS, images
└── ...
```

## Troubleshooting

### Port Already in Use
If port 8000 is already in use, you can modify the `PORT` variable in `server.py`:

```python
PORT = 8001  # Change to a different port
```

### Dependencies Issues
If you encounter dependency issues, try:

```bash
uv venv --clear
uv pip install -r requirements.txt
```

### File Changes Not Detected
Make sure you're editing files in the project directory. The file watcher monitors the entire project directory recursively.

## Development Tips

1. **Keep the terminal open** while developing to see file change notifications
2. **Check the browser console** for any JavaScript errors
3. **Use browser dev tools** to inspect and debug your changes
4. **The server serves from the project root**, so all file paths should be relative to the project directory

## Production Deployment

This development server is only for local development. For production deployment, use a proper web server like Nginx or Apache, or deploy to platforms like GitHub Pages, Netlify, or Vercel.

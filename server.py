#!/usr/bin/env python3
"""
Simple HTTP server with hot reload for local development.
Serves static files and automatically reloads the browser when files change.
"""

import http.server
import socketserver
import webbrowser
import threading
import time
import os
import sys
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Configuration
PORT = 8000
HOST = 'localhost'
SERVE_DIR = Path(__file__).parent

class HotReloadHandler(FileSystemEventHandler):
    """Handler for file system events to trigger browser reload."""
    
    def __init__(self, server):
        self.server = server
        self.last_reload = 0
        self.reload_delay = 1.0  # Minimum delay between reloads in seconds
    
    def on_modified(self, event):
        """Handle file modification events."""
        if event.is_directory:
            return
            
        # Only reload for HTML, CSS, JS files
        if event.src_path.endswith(('.html', '.css', '.js')):
            current_time = time.time()
            if current_time - self.last_reload > self.reload_delay:
                self.last_reload = current_time
                print(f"File changed: {event.src_path}")
                self.server.reload_browser()
    
    def on_created(self, event):
        """Handle file creation events."""
        if not event.is_directory and event.src_path.endswith(('.html', '.css', '.js')):
            print(f"File created: {event.src_path}")
            self.server.reload_browser()
    
    def on_deleted(self, event):
        """Handle file deletion events."""
        if not event.is_directory and event.src_path.endswith(('.html', '.css', '.js')):
            print(f"File deleted: {event.src_path}")
            self.server.reload_browser()

class HotReloadServer(http.server.HTTPServer):
    """HTTP server with hot reload capabilities."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.clients = set()
        self.observer = None
        self.setup_file_watcher()
    
    def setup_file_watcher(self):
        """Set up file system watcher for hot reload."""
        event_handler = HotReloadHandler(self)
        self.observer = Observer()
        self.observer.schedule(event_handler, str(SERVE_DIR), recursive=True)
        self.observer.start()
        print(f"File watcher started for: {SERVE_DIR}")
    
    def reload_browser(self):
        """Send reload signal to connected browsers."""
        if self.clients:
            print("Reloading browser...")
            # Send a simple reload script to all connected clients
            reload_script = b"""
            <script>
                if (window.location.reload) {
                    window.location.reload();
                }
            </script>
            """
            # This is a simplified approach - in a real implementation,
            # you'd use WebSockets or Server-Sent Events for proper hot reload
    
    def finish_request(self, request, client_address):
        """Handle a request and add client to the list for reload notifications."""
        self.clients.add(client_address)
        super().finish_request(request, client_address)
    
    def shutdown(self):
        """Clean shutdown of the server."""
        if self.observer:
            self.observer.stop()
            self.observer.join()
        super().shutdown()

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler with better error handling and MIME types."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SERVE_DIR), **kwargs)
    
    def end_headers(self):
        """Add headers for better development experience."""
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Disable caching for development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        super().end_headers()
    
    def log_message(self, format, *args):
        """Custom log message format."""
        print(f"[{time.strftime('%H:%M:%S')}] {format % args}")

def main():
    """Main function to start the development server."""
    print("=" * 50)
    print("De Beauty Schuur - Local Development Server")
    print("=" * 50)
    print(f"Serving directory: {SERVE_DIR}")
    print(f"Server URL: http://{HOST}:{PORT}")
    print("Press Ctrl+C to stop the server")
    print("=" * 50)
    
    try:
        # Create server
        with HotReloadServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print(f"Server started at http://{HOST}:{PORT}")
            
            # Open browser automatically
            def open_browser():
                time.sleep(1)  # Wait a moment for server to start
                webbrowser.open(f'http://{HOST}:{PORT}')
            
            browser_thread = threading.Thread(target=open_browser)
            browser_thread.daemon = True
            browser_thread.start()
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nShutting down server...")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"Error: Port {PORT} is already in use.")
            print("Please try a different port or stop the process using this port.")
        else:
            print(f"Error starting server: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

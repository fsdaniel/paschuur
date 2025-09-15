#!/usr/bin/env python3
"""
Development server startup script for De Beauty Schuur.
This script sets up the virtual environment and starts the development server.
"""

import subprocess
import sys
import os
from pathlib import Path

def run_command(command, description):
    """Run a command and handle errors."""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed:")
        print(f"Error: {e.stderr}")
        return False

def main():
    """Main function to set up and start the development server."""
    print("🚀 Starting De Beauty Schuur Development Server")
    print("=" * 50)
    
    # Check if uv is installed
    if not run_command("uv --version", "Checking uv installation"):
        print("❌ uv is not installed. Please install uv first:")
        print("   curl -LsSf https://astral.sh/uv/install.sh | sh")
        sys.exit(1)
    
    # Create virtual environment if it doesn't exist
    if not Path(".venv").exists():
        if not run_command("uv venv", "Creating virtual environment"):
            sys.exit(1)
    
    # Install dependencies
    if not run_command("uv pip install -r requirements.txt", "Installing dependencies"):
        sys.exit(1)
    
    # Start the development server
    print("\n🌐 Starting development server...")
    print("The server will open in your browser automatically.")
    print("Press Ctrl+C to stop the server.\n")
    
    # Run the server using uv
    try:
        subprocess.run(["uv", "run", "python", "server.py"], check=True)
    except KeyboardInterrupt:
        print("\n👋 Development server stopped.")
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to start server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

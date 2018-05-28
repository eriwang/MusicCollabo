# Ensemble

A peer to peer application that helps musicians collaborate with each other.

# Dependencies

## Development

- Python 2.7/ pip/ virtualenv
- NodeJS/ npm

## Runtime

- A web browser (exact web browsers to be determined)

# Setup

Install development dependencies. From the root directory of the project, run `scripts/setup.sh`. This will setup the virtual environment, library dependencies, and git hooks.

This should only need to be run on first time setup and when dependencies are updated.

# Run

After setting up, run `npx webpack` to pack/ compile all the TypeScript, and copy other static files to the `dist` directory. After activating the `virtualenv`, run `python app.py` to start the development server.

# Continuous Integration

We're using Travis CI to ensure all JS and Python code is linted (configs in the project root). Potentially more CI to come.
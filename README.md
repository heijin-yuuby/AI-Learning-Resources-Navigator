# AI Learning Resources Navigator

This project is a web application built with Vue.js that provides easy navigation to various AI learning resources and popular LLM platforms.

## development process

- [x] home page

- [x] about ai page

- [x] llm platforms page

- [x] timeline page
- [x] core ai knowledge Page
- [x] router setup
- [x] navigation bar
- [ ] optimize ui design
 * [ ]knowledge page
 * [ ]LLM page




## Prerequisites

Before you begin, ensure you have the following installed:

### For macOS:
1. **Node.js and npm**
   ```bash
   # Using Homebrew
   brew install node

   # Verify installation
   node --version
   npm --version
   ```

2. **Git** (if not already installed)
   ```bash
   brew install git
   ```

### For Windows:
1. **Node.js and npm**
   - Download the installer from [Node.js official website](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the installation wizard
   - Verify installation by opening Command Prompt:
     ```bash
     node --version
     npm --version
     ```

2. **Git** (if not already installed)
   - Download Git from [Git official website](https://git-scm.com/download/win)
   - Run the installer and follow the installation wizard

## Project Setup

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd Ai-deep-learning-web
   ```

2. **Install Frontend Dependencies**
   ```bash
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install
   ```

3. **Start the Development Server**
   ```bash
   # Start the frontend development server
   npm run dev
   ```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Vue components
│   ├── views/         # Page components
│   ├── router/        # Vue Router configuration
│   ├── store/         # Pinia store
│   └── App.vue        # Root component
├── public/            # Static assets
└── package.json       # Project dependencies
```

## Features

- AI History Timeline
- Core AI Knowledge Overview
- Quick Navigation to Popular LLM Platforms:
  - ChatGPT
  - Google Gemini
  - Claude
  - Other AI Tools and Resources

## Dependencies

The project uses the following main dependencies:
- Vue.js 3
- Vue Router 4
- Pinia (State Management)
- Naive UI (UI Components)
- Vite (Build Tool)

## Development

- The development server will automatically reload when you make changes
- Use `npm run build` to build for production
- Use `npm run preview` to preview the production build locally

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - If port 3000 is already in use, the development server will automatically try the next available port
   - You can manually specify a port by modifying the `vite.config.js` file

2. **Node Modules Issues**
   - If you encounter dependency-related errors, try:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

3. **Vue Router Issues**
   - Ensure vue-router is properly installed:
     ```bash
     npm install vue-router@4
     ```

## Support

For any issues or questions, please open an issue in the repository.

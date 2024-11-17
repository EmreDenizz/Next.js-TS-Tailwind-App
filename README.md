# Next.js Application

## Project Overview
This is a **Next.js 13+** application featuring multiple pages with client and server components. It demonstrates the use of the `app/` directory structure, dynamic routing, API integration with OpenAI, and Material UI components for styling.

### Key Features:
- **Dynamic Routing**: Includes pages like Dashboard, Chat, and Material UI Form.
- **OpenAI Integration**: Fetches responses from the ChatGPT API using a custom API route.
- **Material UI Integration**: Styled forms and components using Material UI.
- **Server and Client Components**: Combines SSR and client-side functionality for enhanced performance.

---

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 16 or above)
- **npm** or **yarn** package manager

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/next-app-1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd next-app-1
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   If you encounter dependency issues, try:
   ```bash
   npm install --legacy-peer-deps
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   OPENAI_API_KEY=your-openai-api-key
   ```

---

## Running the Application

### Development Mode
To start the development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Production Mode
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

---

## Project Structure
```plaintext
src/
├── app/
│   ├── page.tsx            # Home/Login page
│   ├── dashboard/          # Dashboard route
│   │   └── page.tsx        # Dashboard page
│   ├── chat/               # Chat route
│   │   └── page.tsx        # Chat page
│   ├── mui/                # Material UI Form
│   │   └── page.tsx        # Material UI page
│   └── components/         # Shared components
│       └── UserCard.tsx    # User card component
├── pages/
│   └── api/
│       └── chat.ts         # API route for OpenAI integration
└── public/                 # Static assets
```

---

## Features by Page

### 1. **Home/Login Page** (`src/app/page.tsx`):
- Collects user name and email.
- Redirects to the Dashboard page.

### 2. **Dashboard Page** (`src/app/dashboard/page.tsx`):
- Displays server-side fetched user data and server time.
- Navigation to the Chat and Material UI Form pages.

### 3. **Chat Page** (`src/app/chat/page.tsx`):
- Sends user input to OpenAI’s GPT API.
- Displays ChatGPT responses dynamically.

### 4. **Material UI Form** (`src/app/mui/page.tsx`):
- A styled form using Material UI components.
- Includes inputs, checkboxes, and a submit button.

---

## API Integration
- **OpenAI ChatGPT API**:
  - The `src/pages/api/chat.ts` file handles requests to the OpenAI API.
  - Make sure to provide a valid `OPENAI_API_KEY` in the `.env.local` file.

---

## Commands
- **Install dependencies**: `npm install`
- **Run in development mode**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`

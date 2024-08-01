# Midfy Dash

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/midfy-dash.git
   cd midfy-dash
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

### Technologies Used

- React
- TypeScript
- Vite
- Emotion
- Material-UI (MUI)
- React Router
- React Toastify
- React Query
- Formik
- Yup
- Axios
- Recharts

### Folder Structure

```
├── src
│ ├── integration
│ │ ├── client.ts # Axios client configuration
│ │ ├── resources # Integration resources
│ │ ├── customers
│ │ │ ├── hooks.ts # Customers List hooks
│ │ │ ├── requests.ts # Customers List requests
│ │ │ └── types.ts # Customers List types
│ ├── pages
│ │ ├── Layout.tsx # Layout component
│ │ └── ...
│ ├── components # Atomic Design components
│ │ ├── atoms
│ │ ├── organisms
│ │ └── ...
│ ├── pages # Pages
│ │ ├── Layout.tsx # Layout component
│ │ ├── dashboard
│ │ │ ├── customers
│ │ │ │ ├── CustomersUI.tsx # Customers List UI
│ │ │ │ ├── useCustomers.tsx # Customers List hooks
│ │ │ │ └── index.tsx # Customers List page
│ │ │ └── index.tsx # Dashboard page
│ │ └── ...
│ ├── components # Atomic Design components
│ │ ├── atoms
│ │ ├── molecules
│ │ ├── organisms
│ ├── styles
│ │ ├── theme.ts # Theme settings for MUI and Emotion
│ │ ├── index.css # Global CSS styles
│ │ └── ...
│ ├── App.tsx # Main App component
│ ├── main.tsx # Application entry point
│ ├── query-client.ts # React Query client configuration
│ └── ...
├── package.json
└── ...
```

# My Professional Portfolio

This is a single-page application (SPA) portfolio built with React to showcase my skills as a Software Engineer.

## Technologies Used

-   **React:** For building a modern, component-based user interface.
-   **CSS:** For custom styling and animations.

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd my-portfolio
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```

The application will open in your browser at `http://localhost:3000`.

## How to Deploy to GitHub Pages

1.  **Install `gh-pages`:**
    ```bash
    npm install --save-dev gh-pages
    ```
2.  **Add the `homepage` and `deploy` scripts to `package.json`:**
    ```json
    "homepage": "https://<your-github-username>.github.io/my-portfolio",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
3.  **Run the deploy command:**
    ```bash
    npm run deploy
    ```
    Your site will be live at the URL specified in the `homepage` field.
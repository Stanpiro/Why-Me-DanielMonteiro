# react-frontend-base

This project allows you to create a React app using Vite and associate it with either Tailwind CSS or Bootstrap for styling.

## Steps already taken to create this base template

1. Open VS Code. There's no need to clone any repository to start this process. The project is pushed to GitHub after it's created.

2. Setup Vite Project: First, create a new React project using Vite (a Node.js tool — so Node.js must be installed on the computer). This can be done with the following commands:

    1. Vite + React: Visit <https://vitejs.dev/guide/#scaffolding-your-first-vite-project> and run `npm create vite@latest`, then follow the prompts (write the “Project name”, choose "React" framework and "JavaScript" variant).

       * Helpful video: <https://www.youtube.com/watch?v=jDjAwJ87PPM>

## [START HERE] Steps you must follow to finish setting up this project

3. Run `npm install` once, after first creating the project, to download all required packages, like the React library package.

4. Install Tailwind CSS or Bootstrap: Depending on preference, either Tailwind CSS or Bootstrap can be installed.

    1. For Tailwind CSS, visit <https://tailwindcss.com/docs/guides/vite> and follow the steps.

    2. For Bootstrap, visit <https://react-bootstrap.netlify.app/docs/getting-started/introduction> and follow the steps.

5. Once configured, start using Tailwind CSS or Bootstrap classes in the React components for styling.

6. To locally start a dev preview server, run `npm run dev`.

7. Note: In React, it's necessary to install the `react-router-dom` package to work with routing. This can be done by running `npm install react-router-dom`.

## Folder Structure

After going through the previous steps for creating a new React project, the repository should have a `folder` structure like this:

* `node_modules` (local folder only (listed in .gitignore), generated after running `npm install` in step 3)
* `public` (this folder is often left unused, thus can be deleted)
* `src`
  * `assets`
    * `fonts`
    * `images` (for favicons, photos, ...)
    * `css` (for 3rd party libraries, like Tailwind, ...)
  * `views` or `pages`
    * `Page` (create new folder for each page)
      * Page.jsx
      * Page.css (styling)
      * `components` (for components used only in this page)
  * `components` (for components used in several pages)
    * `Component1` (create new folder for each component)
      * Component1.jsx
      * Component1.css (for creating new styles)
      * Component1.test.jsx (for testing our app)
    * `Component2`
    * index.js (for doing all the imports and exports of the components inside this folder. This file facilitates imports, especially if we use absolute imports — see jsconfig.json below)
  * `services` (for fetching and external APIs)
    * http.js (for APIs' external fetches, retrievals, updates and all methods used)
  * `utils` (for functions used in several components — similar concept to the components folder above)
    * (file structure similar to services and hooks)
  * `hooks` (utils and hooks can overlap sometimes...)
    * useForm.js (and other such files — if too many, can be organized into folders called pages, modules, features, ...)
  * `store` (for files like reducers, actions, sagas, ..., that manage State in our app)
    * `page` (create new folder for each page, feature or module)
      * actions.js
      * reducers.js (redux)
      * initial-state.js
      * saga.js
      * selectors.js
  * App.css (for styles that are specific to the App component. The App component is usually the top-level component in the component hierarchy (excluding providers and context providers), so styles here could still affect many parts of the application.)
  * App.jsx (defines the main React component of the application.)
  * index.css (for global styles that apply to the entire application. This could include things like setting the font family, background color, or default margins and padding for the entire application.)
  * main.jsx (serves as the entry point for application logic and mounts the root React component.)
* .eslintrc.cjs (configures ESLint for code style, formatting, and potential errors.)
* .gitignore (specifies files and directories to be ignored by Git.)
* index.html (main HTML file serving as the entry point for the web application.)
* jsconfig.json (for telling the compiler what's the base URL so we can use absolute imports)
* package-lock.json (lockfile for project dependencies, ensuring consistent installations.)
* package.json (manifest for the project containing metadata, dependencies, and scripts.)
* README.md (documentation for the project, including setup instructions and guidelines.)
* vite.config.js (configures Vite, the build tool for the project.)

Depending on whether Tailwind CSS or Bootstrap has been installed in the project, the individual files here at the end of the repository may vary. Shown above are the non-specific files, common to both frameworks. Below are the specific differences:

For Tailwind CSS, these additional following files will be created:

* postcss.config.js (configures PostCSS, a tool for transforming CSS with JavaScript plugins.)
* tailwind.config.js (configures Tailwind CSS, a utility-first CSS framework, allowing customization of theme, variants, and plugins.)

For Bootstrap, no specific files will be created.

## Notes

When importing a component that is exported via the index.js file, write `import { ComponentName } from "./components"`. If the component isn't exported from index.js, never use the `{ }` because it'll return an error as it is not a named export (displays blank page in the browser).

# portfolio setup

### Setup instructions

1. clone the project
...
    git clone https://github.com/I-am-nagesh/my-portfolio.git
...

2. move into directory
...
    cd my-portfolio
...

3. install dependencies
...
    npm i
...

4. run the server
...
   npm run dev
...   

### how to set up tailwind in project[Link]
https://tailwindcss.com/docs/guides/vite


1. install tailwind and other dependencies
...
   npm install -D tailwindcss postcss autoprefixer
...

2. create the `tailwind.config.js` file
...
    npx tailwindcss init -p
...

3. add the files and extensions to tailwind config in the content property
...
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
...  

4. add the tailwind directives on the top of index.css file
...
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
...

5. then run the server, tailwind should be integrated...


### adding plugins and dependencies
...
   npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
...

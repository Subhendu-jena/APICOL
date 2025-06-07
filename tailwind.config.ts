// // tailwind.config.ts
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         customStart: '#ff7e5f',
//         customEnd: '#feb47b',
//       },
//       backgroundImage: {
//         'custom-gradient': 'linear-gradient(153deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 0%, rgba(252, 176, 69, 1) 100%)',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config;



// tailwind.config.ts
// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ['./index.html', './src/**/*.{tsx}'],// Important: correct content path
//   theme: {
//       extend: {
//         colors: {
//           customStart: '#ff7e5f',
//           customEnd: '#feb47b',
//         },
//       backgroundImage : {
//         "custom":"#ff2d00",
//         "custom-gradient": "linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;



import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myRed: '#ef4444',
      },
    },
  },
  plugins: [],
};

export default config;
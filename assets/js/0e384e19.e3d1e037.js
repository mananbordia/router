"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Introduction",sidebar_position:1},i=void 0,s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use. Please contribute to the discussion if you have any ideas or suggestions on how we can improve the convention.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/router/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/router/docs/category/features"}},p={},l=[{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Beta setup",id:"beta-setup",level:2},{value:"Web setup",id:"web-setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Beta Release",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use. Please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/router/discussions/1"},"contribute to the discussion")," if you have any ideas or suggestions on how we can improve the convention.")),(0,r.kt)("p",null,"Expo Router brings the best routing concepts from the web to native iOS and Android apps. Every file in the ",(0,r.kt)("strong",{parentName:"p"},"app")," directory automatically becomes a route in your mobile navigation, making it easier than ever to build, maintain, and scale your project. It's built on top of our powerful ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation suite")," enabling truly native navigation. The entire deep linking system is automatically generated live, so users can share links to any route in your app."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native")," Truly native navigation with the most cutting-edge developer experience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deep linking")," Every screen in your app is automatically deep linkable. Making any part of your app shareable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Offline-first")," Apps are cached and run offline-first, with automatic updates when you publish a new version. Handles all incoming native URLs without a network connection or server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scale")," Apps are built with a modular architecture that scales to any size. Refactoring and upgrading are a breeze due to the declarative nature of the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Iteration")," Universal Fast Refresh across iOS, Android, and web along with artifact memoziation in the bundler keep you moving fast at scale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-Platform")," Expo Router is a large step towards universal React apps. The same codebase can be used to build iOS, Android, and web apps.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Ensure your computer is ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/get-started/installation/"},"setup for running an Expo app"),"."),(0,r.kt)("p",null,"Create a new Expo project (",(0,r.kt)("inlineCode",{parentName:"p"},"expo@46.0.13")," and greater):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-router\n\n# install peer dependencies required for compiling\n\nnpx expo install react-native-safe-area-context react-native-screens react-native-reanimated react-native-gesture-handler\n")),(0,r.kt)("p",null,"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router/entry")," as the entry point to your app in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "expo-router/entry"\n}\n')),(0,r.kt)("h2",{id:"beta-setup"},"Beta setup"),(0,r.kt)("p",null,"Ensure you're using at least ",(0,r.kt)("inlineCode",{parentName:"p"},"metro@0.72.3")," by setting a yarn resolution (this step goes away in Expo SDK 47):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "resolutions": {\n    "metro": "0.72.3"\n  }\n}\n')),(0,r.kt)("p",null,"Configure the babel plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = function (api) {\n  api.cache(true);\n  return {\n    presets: ["babel-preset-expo"],\n    plugins: [\n      "react-native-reanimated/plugin",\n      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.\n      require.resolve("expo-router/babel"),\n    ],\n  };\n};\n')),(0,r.kt)("h2",{id:"web-setup"},"Web setup"),(0,r.kt)("p",null,"If you want to use the router with web, you'll need to enable Expo CLI's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/customizing-metro/#web-support-how"},"experimental Metro web support"),". Webpack is not currently supported."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Start the server with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn expo start\n")),(0,r.kt)("p",null,"Then open by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," for web (only tested against Metro web)."),(0,r.kt)("p",null,"Create files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory and they will be automatically added to the app."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/router/docs/guides/"},"Guides"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/features"},"Features and conventions"),".")))}c.isMDXComponent=!0}}]);
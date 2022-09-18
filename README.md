## Search App Document
Quick Start
-	The easiest way to try out Search App is using the  [Code Sandbox example](https://codesandbox.io/p/github/hieundna/search-app/master)
or you can import SearchWidget from `/src/components/Search/SearchWidget.js` to the component where you want to use it.
## API
```  id
 Type: string,
  Default: ‘search’,
  Description: Pass id if you need to config the style of search input by using ref or document

 placeholder
  id
 Type: string,
  Default: ‘Search’,
  Description: Placeholder will be shown inside the search box if you have not typed anything

 data
 Type: object,
  Default: null,
  Description: You have to pass the data to show the suggestion from the search box

 width
 Type: number,
  Default: 250,
  Description: Adjust search box width

 height
 Type: number,
  Default: 35,
  Description: Adjust search box height

 disabled
 Type: bool,
  Default: false,
  Description: 

 settingFlag
 Type: bool,
  Default: false,
  Description: to show Setting button to config which block you want to show in the Suggestion

 setting 
 Type: array of string,
  Default: ['term', 'collection', 'product'],
  Description: define which block you want to show in the Suggestion

 numberOfCharacter
 Type: number,
  Default: 0,
  Description: adjust number of character you type until you want to show the suggestion

 handleChange
 Type: function,
  Default: null,
  Description: execute everytime you type in the search box

 handleSubmit
 Type: function,
  Default: null,
  Description: execute if you press Enter key

 productCustom
 Type: node,
  Default: null,
  Description: custom Product block up to your design.
```


Example
```import SearchWidget from "./components/Search/SearchWidget";

function App() {
  const data = {
"suggestion_term": [
          {
            "term": "blue top",
            "url": "https://boostcommerce.net/"
    },
          {
            "term": "blue top",
            "url": "https://boostcommerce.net/"
          },
	],
"collection": [
          {
            "id": 0,
            "title": "top",
            "url": "https://boostcommerce.net/"
          },
          {
            "id": 1,
            "title": "cool",
            "url": "https://boostcommerce.net/"
          },
	],
"product": [
          {
            "id": 0,
            "title": "warm jacket",
            "url": "https://boostcommerce.net/",
            "brand": "excepteur",
            "price": 37.5303,
            "image": "https://www.w3schools.com/tags/img_girl.jpg"
          },
          {
            "id": 1,
            "title": "top trend",
            "url": "https://boostcommerce.net/",
            "brand": "duis",
            "price": 89.0488,
            "image": "https://www.w3schools.com/tags/img_girl.jpg"
          },
	],

  return (
    <div className="App">
      <div className="header">
        <SearchWidget
          id='search'
          data={data}
          disabled={!data}
          placeholder='Search'
          settingFlag={!!data}
          settings={['term', 'collection', 'product']}
        />
      </div>
    </div>
  );
}
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

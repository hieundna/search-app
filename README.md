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


# Country Data 1.0.0 : phone, currency, iso, etc.
Get base data from country like iso name, currency, phone and more.

## Usage in Vanilla
#### HTML
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <!-- Get css -->
        <link rel="stylesheet" href="dist/css/country-data.css">
    </head>
    <body>
        <input name="country" type="text" class="js_country">
        <!-- Get JS -->
        <script src="dist/js/countries.js"></script>
        <script src="dist/js/country-data.js"></script>
    </body>
</html>
```
#### JS
```js
var el = document.getElementsByClassName("js_iso")[0];
var options = {
    dataCountries: countries
};

var INIT_Country = new __COUNTRY_Data(el, options);
```

## Usage with jQuery
#### HTML
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <!-- Get jQuery -->
        <script src="node_modules/jquery/dist/jquery.js"></script>
        <!-- Get css -->
        <link rel="stylesheet" href="dist/css/country-data.css">
    </head>
    <body>
        <input name="country" type="text" class="js_country">
        <!-- Get JS -->
        <script src="dist/js/countries.js"></script>
        <script src="dist/js/country-data.js"></script>
    </body>
</html>
```
#### JS
```js
$(document).ready(function() {
    var options = {
        dataCountries: countries
    };
    $('.js_country').COUNTRY_Data(options);
});
```

## Usage with React Web
Basically this plugin run in React, but not standard & not recommend
#### JS
```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import countries from './countries.js';
import style from './country-data.css';
import country_data from './country-data.js';

class countryForm extends Component {
    render() {
        return (<input className="js_country"></input>)
    }

    componentDidMount() {
        var option = {
            dataCountries: countries,
        }

        var INIT_Country = new country_data(ReactDOM.findDOMNode(this), option);
    }
}

class App extends Component {
    render() {
        console.log(this._reactInternalFiber);
        return (
            <div className = "App" >
                <countryForm / >
            </div>
        );
    }
}

export default App;
```

## Option Properties
### dataCountries : `(Array[Object])`, default `countries`
`countries` is Array[Object] data, see `src/js/countries.js`

### namespace : `(string)`, default : `__COUNTRY`

### placeholder : `(string)`, default : `Type a Country`
Text for Placeholder

### showFlag : `(boolean)`, default : `false`
`true` for Show flag & `false` for hide flag of country

### defaultCountry : `(string)`, default : `US`
Default value of input, value must iso code of country, like `ID, US, US, ES`.

### print : `(bolean)`, default : `true`
Print or empry a input

### printInput : `(Array[Object])`
default
```js
[{
    type: 'phone',
    placeholder : "Phone Number"
}, {
    type: 'currency',
    placeholder : "Currency"
}, {
    type: 'iso_2',
    placeholder : "Country Iso"
}]
```
Get/print input data country, type must `iso_2 | iso_3 | phone | currency | ttl | capital`
You can update the data, see `src/js/countries.js`
```js
"data": {
    "iso_2": "...",
    "iso_3": "...",
    "phone": "...",
    "currency": "...",
    "ttl": "...",
    "capital": "...",
    "etc1": "...",
    "etec2": "...",
}
```

## Callback function
### run : `(Function)`, default : null
Call when plugin init, return this DOM
```js
run: function(t) {
    console.log(t);
}
```

### selected : (`Function)`, default : null
Call when selected country from list, return `[this DOM, data, all data country]`
```js
selected: function(t, d, c) {
    console.log(t, d, c);
}
```

### keyup : (`Function)`, default : null
Call when keyup in input, return `[this DOM, value]`
```js
keyup: function(t, v) {
    console.log(t, v);
}
```

# The Countries Data
Basically the original data is csv from [country-codes.csv], I use `csvtojson` & `request` convert to json/js
```bash
"devDependencies": {
  "csvtojson": "^1.1.9",
  "request": "^2.83.0"
}
```

### create_countries.js
```js
var writeFile = function(){
    var string = [];
    var index = 0;
    var stream = fs.createWriteStream("src/js/countries.js");

    stream.once('open', function(fd) {
        csv({noheader:true})
        .fromStream(request
            .get("https://raw.githubusercontent.com/datasets/country-codes/master/data/country-codes.csv"))
        .on('json',(jsonObj)=>{

            if ( jsonObj['field1'] != "official_name_ar" && jsonObj['field10']) {
                index++;
                string.push({
                    index: index,
                    id : TOOLS.createID(jsonObj['field3']),
                    name : jsonObj['field3'],
                    iso : jsonObj['field7'],
                    data: {
                        iso_2 : jsonObj['field7'],
                        iso_3 : jsonObj['field8'],
                        phone : jsonObj['field33'],
                        currency : jsonObj['field10'],
                        ttl : jsonObj['field54'],
                        capital : jsonObj['field29']
                    }
                })
            }

        })
    });
}
```
### Execute
```bash
node create_countries.js
```

### Output Data
```js
[
    {
        "index": 1,
        "id": "afghanistan",
        "name": "Afghanistan",
        "iso": "AF",
        "data": {
            "iso_2": "AF",
            "iso_3": "AFG",
            "phone": "93",
            "currency": "AFN",
            "ttl": ".af",
            "capital": "Kabul"
        }
    },
    {
        "index": 2,
        "id": "albania",
        "name": "Albania",
        "iso": "AL",
        "data": {
            "iso_2": "AL",
            "iso_3": "ALB",
            "phone": "355",
            "currency": "ALL",
            "ttl": ".al",
            "capital": "Tirana"
        }
    },
    ...
]
```

# Developer
## Clone
```bash
git clone https://github.com/indaam/country-data.git && cd country-data
```

## Created country data(Optional)
```bash
node create_countries.js
```
output -> `src/js/countries.js`

## Start
```bash
npm install && gulp
```
To see on browser, open [http://localhost:8080]
All source at `src/...` and output at `dist/...`
To change config, see gulpfile.js

## Build
```bash
gulp build
```
Clean & create `dist/...`

[country-codes.csv]: <https://github.com/datasets/country-codes/blob/master/data/country-codes.csv>
[http://localhost:8080]: <http://localhost:8080/>
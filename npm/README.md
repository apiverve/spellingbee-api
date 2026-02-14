# Spelling Bee Generator API

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/spellingbee.svg)](https://www.npmjs.com/package/@apiverve/spellingbee)

This is a Javascript Wrapper for the [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/spellingbee
```

Using yarn:
```shell
yarn add @apiverve/spellingbee
```

---

## Configuration

Before using the Spelling Bee Generator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Spelling Bee Generator API documentation is found here: [https://docs.apiverve.com/ref/spellingbee](https://docs.apiverve.com/ref/spellingbee?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const spellingbeeAPI = require('@apiverve/spellingbee');
const api = new spellingbeeAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  difficulty: "medium"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  difficulty: "medium"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  difficulty: "medium"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "centerLetter": "E",
    "outerLetters": [
      "U",
      "N",
      "H",
      "O",
      "T",
      "F"
    ],
    "allLetters": [
      "E",
      "U",
      "N",
      "H",
      "O",
      "T",
      "F"
    ],
    "difficulty": "medium",
    "wordCount": 62,
    "pangramCount": 0,
    "maxPoints": 256,
    "words": [
      {
        "word": "HOTTENTOT",
        "points": 9,
        "isPangram": false
      },
      {
        "word": "FOOTNOTE",
        "points": 8,
        "isPangram": false
      },
      {
        "word": "NONETTO",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "UNNETHE",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "ENFEOFF",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "UNOFTEN",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "FEOFFEE",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "ENTUNE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "UNTENT",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "EFFETE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "TEETEE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "ETHENE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "UNTUNE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "ONETHE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "TENENT",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "TEUTON",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "NONETT",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "NONONE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "NOUTHE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "TOFFEE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "TENTH",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "NONET",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "OFTEN",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "THEFT",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TENNE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "FEOFF",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TENNO",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TENNU",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HOTEN",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "FOEHN",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HUNTE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "EFFET",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "FETTE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HENEN",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TEETH",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "NONNE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "UNETH",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "FONNE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TENON",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TONNE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "TENET",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HENT",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TUNE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TENE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HONE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TUET",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HEFT",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TOTE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "FONE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "FEET",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TETE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TONE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TENT",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "ETHE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "NONE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HETE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "THEE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "TEEN",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HOTE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "FETE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "THEN",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "NOTE",
        "points": 1,
        "isPangram": false
      }
    ],
    "html": "<html><head><title>Spelling Bee</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: 0 auto; text-align: center;}h1 {color: #F9A825;}.honeycomb {display: flex; flex-wrap: wrap; justify-content: center; max-width: 200px; margin: 30px auto;}.hex {width: 60px; height: 52px; background: #E0E0E0; margin: 2px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);}.hex.center {background: #F9A825; color: white;}.stats {margin: 20px 0; font-size: 14px; color: #666;}.rules {text-align: left; background: #FFF8E1; padding: 15px; border-radius: 10px; margin-top: 20px;}.rules h3 {margin-top: 0; color: #F9A825;}.rules ul {margin: 0; padding-left: 20px;}</style></head><body><h1>Spelling Bee</h1><div class='honeycomb'><div class='hex center'>E</div><div class='hex'>U</div><div class='hex'>N</div><div class='hex'>H</div><div class='hex'>O</div><div class='hex'>T</div><div class='hex'>F</div></div><div class='stats'>62 words | 256 possible points</div><div class='rules'><h3>How to Play:</h3><ul><li>Create words using the letters shown</li><li>Words must contain the center letter (yellow)</li><li>Words must be at least 4 letters long</li><li>Letters can be used more than once</li><li>4-letter words = 1 point</li><li>Longer words = 1 point per letter</li><li>Pangrams (use all 7 letters) = +7 bonus points</li></ul></div></body></html>",
    "image": {
      "imageName": "48f9b67c-cf9f-47bd-96cb-b7f5c3f60d7b.png",
      "format": ".png",
      "downloadURL": "https://storage.googleapis.com/apiverve.appspot.com/spellingbee/48f9b67c-cf9f-47bd-96cb-b7f5c3f60d7b.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1764735775&Signature=jGHjZXw1saM0Bb6sUaoi%2BwG5FCIr7VrUWVqQC5tZrk28WgwwWVpOHeObKUJGHYN4JJGKEyp2Hrhl2wuyZ0UfR6W8SSfQlxE2SAAsHAIvKhe%2BIybHYit0swMt2bLItAZ0tfcYBHb%2ByheIKabR5LBF2ot4R0kIpUNbg8Y5mxObeuSio9uXSuvgd8WKt8JfU2cx9Y6%2BHw2%2FmeV3lz8zrBhGjGAq0b78F5ULzJlRLhVoz8vuPZFb6dI3bLUm7zJQPKRe9e01%2BW%2FXUUBqluSVaXmCj6uYBiSeO2HQHbHpsa2tmWg%2FrL4ry0gbX11%2BIfzWHwrN%2FUtIILkNK3CJXqOfDgNcBA%3D%3D",
      "expires": 1764735775342
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

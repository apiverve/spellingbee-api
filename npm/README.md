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
  difficulty: "medium",
  image: false
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
  difficulty: "medium",
  image: false
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
  difficulty: "medium",
  image: false
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
    "centerLetter": "A",
    "outerLetters": [
      "C",
      "H",
      "E",
      "J",
      "O",
      "D"
    ],
    "allLetters": [
      "A",
      "C",
      "H",
      "E",
      "J",
      "O",
      "D"
    ],
    "difficulty": "medium",
    "wordCount": 53,
    "pangramCount": 0,
    "maxPoints": 200,
    "words": [
      {
        "word": "DEADHEADED",
        "points": 10,
        "isPangram": false
      },
      {
        "word": "COHEADED",
        "points": 8,
        "isPangram": false
      },
      {
        "word": "DEADHEAD",
        "points": 8,
        "isPangram": false
      },
      {
        "word": "HEADACHE",
        "points": 8,
        "isPangram": false
      },
      {
        "word": "ACCEDED",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "COACHED",
        "points": 7,
        "isPangram": false
      },
      {
        "word": "ACCEDE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "AHCHOO",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "CACHED",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "COHEAD",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "DADOED",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "DECADE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "DOODAD",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "HADJEE",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "HEADED",
        "points": 6,
        "isPangram": false
      },
      {
        "word": "AAHED",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "ACHED",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "ACHOO",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "ADDED",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "AHEAD",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "CACAO",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "CACHE",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "CAECA",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "COACH",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "COCOA",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "DACHA",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HADED",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "HODAD",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "JADED",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "JEHAD",
        "points": 5,
        "isPangram": false
      },
      {
        "word": "ACED",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "ACHE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "AHED",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "AJEE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CACA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CADE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CECA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CHAD",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CHAO",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "COCA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "CODA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "DACE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "DADA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "DADO",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "DEAD",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "EACH",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HADE",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HADJ",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HAED",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HAHA",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HAJJ",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "HEAD",
        "points": 1,
        "isPangram": false
      },
      {
        "word": "JADE",
        "points": 1,
        "isPangram": false
      }
    ],
    "html": "<html><head><title>Spelling Bee</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: 0 auto; text-align: center;}h1 {color: #F9A825;}.honeycomb {display: flex; flex-wrap: wrap; justify-content: center; max-width: 200px; margin: 30px auto;}.hex {width: 60px; height: 52px; background: #E0E0E0; margin: 2px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);}.hex.center {background: #F9A825; color: white;}.stats {margin: 20px 0; font-size: 14px; color: #666;}.rules {text-align: left; background: #FFF8E1; padding: 15px; border-radius: 10px; margin-top: 20px;}.rules h3 {margin-top: 0; color: #F9A825;}.rules ul {margin: 0; padding-left: 20px;}</style></head><body><h1>Spelling Bee</h1><div class='honeycomb'><div class='hex center'>A</div><div class='hex'>C</div><div class='hex'>H</div><div class='hex'>E</div><div class='hex'>J</div><div class='hex'>O</div><div class='hex'>D</div></div><div class='stats'>53 words | 200 possible points</div><div class='rules'><h3>How to Play:</h3><ul><li>Create words using the letters shown</li><li>Words must contain the center letter (yellow)</li><li>Words must be at least 4 letters long</li><li>Letters can be used more than once</li><li>4-letter words = 1 point</li><li>Longer words = 1 point per letter</li><li>Pangrams (use all 7 letters) = +7 bonus points</li></ul></div></body></html>",
    "image": {
      "imageName": "0f8f8f2c-ac7d-46f9-b5fc-e2d777117f13.png",
      "format": ".png",
      "downloadURL": "https://storage.googleapis.com/apiverve/APIData/spellingbee/0f8f8f2c-ac7d-46f9-b5fc-e2d777117f13.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1766010561&Signature=cHvKHU7wb0RwJKVI6FGIS8%2B8%2BencmsoWEuH%2FT2cQsUjPTY%2FFLhSzipEyHex5HCEg5q8jEiRB3wZDXF9lyONQTVSNdZp0Xpm6Fw69tZZDvCeHePwa1v0h0rktZ6PLSbRswtr0vlHDZL3JPBl7i%2FsxM8QxTdGDOs7cyULy3d9qEyuPPIEDkOF1cnQce2qThIhZ%2BHieQNsBVX193NhyeCrgfRVQVPiFYo4ngSbOrMJKpVm2aSbtykG6Hyw%2B8RnQqkBqA5JB8XaB2ESBg0ZU8ldZUNoHd4cMoC2Oz4rI5FkLuQ2tzju9FVsxsCXiVvJCPd9jsWOlhQ7T1NVp%2FwV107k38w%3D%3D",
      "expires": 1766010561052
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

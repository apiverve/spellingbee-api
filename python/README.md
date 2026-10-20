Spelling Bee Generator API
============

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-spellingbeegenerator.svg)](https://pypi.org/project/apiverve-spellingbeegenerator/)

This is a Python wrapper for the [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-spellingbeegenerator
```

Using `pip3`:

```bash
pip3 install apiverve-spellingbeegenerator
```

---

## Configuration

Before using the Spelling Bee Generator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

# Initialize the client with your APIVerve API key
api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = {
    "difficulty": "medium",
    "image": true
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Spelling Bee Generator API documentation is found here: [https://docs.apiverve.com/ref/spellingbee](https://docs.apiverve.com/ref/spellingbee?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

# Initialize the client with your APIVerve API key
api = SpellingbeeAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "difficulty": "medium",
    "image": true
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `SpellingbeeAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient, SpellingbeeAPIClientError

api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = {
    "difficulty": "medium",
    "image": true
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except SpellingbeeAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient, SpellingbeeAPIClientError

api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = {
    "difficulty": "medium",
    "image": true
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except SpellingbeeAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient, SpellingbeeAPIClientError

query = {
    "difficulty": "medium",
    "image": true
}

# Using context manager ensures proper cleanup
with SpellingbeeAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except SpellingbeeAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

# Enable debug mode
api = SpellingbeeAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "difficulty": "medium",
    "image": true
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = {
    "difficulty": "medium",
    "image": true
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

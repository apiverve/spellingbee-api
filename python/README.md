Spelling Bee Generator API
============

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source=pypi&utm_medium=readme)

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

Before using the spellingbee API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

# Initialize the client with your APIVerve API key
api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = { "difficulty": "medium" }

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

The Spelling Bee Generator API documentation is found here: [https://docs.apiverve.com/ref/spellingbee](https://docs.apiverve.com/ref/spellingbee?utm_source=pypi&utm_medium=readme).
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
query = { "difficulty": "medium" }
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

## Error Handling

The API client provides comprehensive error handling through the `SpellingbeeAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient, SpellingbeeAPIClientError

api = SpellingbeeAPIClient("[YOUR_API_KEY]")

query = { "difficulty": "medium" }

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

query = { "difficulty": "medium" }

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

query = { "difficulty": "medium" }

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

query = { "difficulty": "medium" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_spellingbeegenerator.apiClient import SpellingbeeAPIClient

api = SpellingbeeAPIClient("[YOUR_API_KEY]")

try:
    query = { "difficulty": "medium" }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

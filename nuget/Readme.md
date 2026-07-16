SpellingBeeGenerator API
============

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a .NET Wrapper for the [SpellingBeeGenerator API](https://apiverve.com/marketplace/spellingbee?utm_source=nuget&utm_medium=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.SpellingBeeGenerator
```

Using the Package Manager:
```
nuget install APIVerve.API.SpellingBeeGenerator
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.SpellingBeeGenerator
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.SpellingBeeGenerator"
5. Click on the APIVerve.API.SpellingBeeGenerator package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the spellingbee API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.SpellingBeeGenerator;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The SpellingBeeGenerator API documentation is found here: [https://docs.apiverve.com/ref/spellingbee](https://docs.apiverve.com/ref/spellingbee?utm_source=nuget&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
SpellingBeeGenerator API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SpellingBeeGenerator;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.SpellingBeeGenerator;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SpellingBeeGenerator;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SpellingBeeGenerator;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new SpellingBeeGeneratorQueryOptions {
    Difficulty = "medium",
    Image = true
};

using (var apiClient = new SpellingBeeGeneratorAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

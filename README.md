# [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.

The Spelling Bee Generator API provides a simple, reliable way to integrate spelling bee generator functionality into your applications. Built for developers who need production-ready spelling bee generator capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/spellingbee?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/spellingbee?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/spellingbee)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.SpellingBeeGenerator)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-spellingbee/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_spellingbee)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/spellingbee)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_spellingbee)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callSpellingBeeGeneratorAPI() {
    try {
        const params = new URLSearchParams({
            difficulty: 'medium'
        });

        const response = await fetch(`https://api.apiverve.com/v1/spellingbee?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callSpellingBeeGeneratorAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/spellingbee?difficulty=medium" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/spellingbee
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/spellingbee) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.SpellingBeeGenerator
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.SpellingBeeGenerator) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-spellingbee
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-spellingbee/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_spellingbee
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_spellingbee) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/spellingbee
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/spellingbee) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_spellingbee
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_spellingbee) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:spellingbee-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/spellingbee-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/spellingbee](https://docs.apiverve.com/ref/spellingbee)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Spelling Bee Generator API is commonly used for:

- **Web Applications** - Add spelling bee generator features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with spelling bee generator capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Spelling Bee Generator API:

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

## Support & Community

- 🏠 **API Home**: [Spelling Bee Generator API](https://apiverve.com/marketplace/spellingbee?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.

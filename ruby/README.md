# Spelling Bee Generator API - Ruby Gem

Spelling Bee Generator creates word puzzles with 7 letters where players form words using a required center letter.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_spellingbee'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_spellingbee
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_spellingbee'

# Initialize the client
client = APIVerve::Spellingbee::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  difficulty: "medium",
  image: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ difficulty: "medium", image: true })
  puts response["data"]
rescue APIVerve::Spellingbee::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Spellingbee::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Spellingbee::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/spellingbee?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/spellingbee?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/spellingbee?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).

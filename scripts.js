/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */



const cities = [
  // ==================== ASIA ====================
  {
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    population: 37400000,
    languages: ["Japanese"],
    currency: "JPY",
    flagURL: "https://flagcdn.com/w640/jp.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg",
    costTier: "$$$",
    landmarks: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree"],
    dishes: ["Sushi", "Ramen", "Tempura"],
    bestSeason: "Spring",
  },
  {
    name: "Seoul",
    country: "South Korea",
    continent: "Asia",
    population: 25000000,
    languages: ["Korean"],
    currency: "KRW",
    flagURL: "https://flagcdn.com/w640/kr.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lotte_World_day_view_2.jpg/3840px-Lotte_World_day_view_2.jpg",
    costTier: "$$$",
    landmarks: ["Gyeongbokgung Palace", "N Seoul Tower", "Bukchon Hanok Village"],
    dishes: ["Bibimbap", "Korean BBQ", "Kimchi Jjigae"],
    bestSeason: "Fall",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    population: 10700000,
    languages: ["Thai"],
    currency: "THB",
    flagURL: "https://flagcdn.com/w640/th.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Wat_Arun.jpg",
    costTier: "$",
    landmarks: ["Grand Palace", "Wat Arun", "Chatuchak Market"],
    dishes: ["Pad Thai", "Tom Yum Goong", "Mango Sticky Rice"],
    bestSeason: "Winter",
  },
  {
    name: "Singapore",
    country: "Singapore",
    continent: "Asia",
    population: 5900000,
    languages: ["English", "Malay", "Mandarin", "Tamil"],
    currency: "SGD",
    flagURL: "https://flagcdn.com/w640/sg.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/1_singapore_city_skyline_dusk_panorama_2011.jpg",
    costTier: "$$$$",
    landmarks: ["Marina Bay Sands", "Gardens by the Bay", "Merlion Park"],
    dishes: ["Hainanese Chicken Rice", "Chili Crab", "Laksa"],
    bestSeason: "Winter",
  },
  {
    name: "Mumbai",
    country: "India",
    continent: "Asia",
    population: 20400000,
    languages: ["Hindi", "Marathi", "English"],
    currency: "INR",
    flagURL: "https://flagcdn.com/w640/in.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ikea_mumbai_backside.jpg/1280px-Ikea_mumbai_backside.jpg",
    costTier: "$",
    landmarks: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
    dishes: ["Vada Pav", "Pav Bhaji", "Bombay Biryani"],
    bestSeason: "Winter",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    population: 3600000,
    languages: ["Arabic", "English"],
    currency: "AED",
    flagURL: "https://flagcdn.com/w640/ae.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/en/c/c7/Burj_Khalifa_2021.jpg",
    costTier: "$$$$",
    landmarks: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
    dishes: ["Shawarma", "Al Harees", "Machboos"],
    bestSeason: "Winter",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    population: 15500000,
    languages: ["Turkish"],
    currency: "TRY",
    flagURL: "https://flagcdn.com/w640/tr.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_Mars_2013.jpg",
    costTier: "$$",
    landmarks: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
    dishes: ["Kebab", "Baklava", "Turkish Delight"],
    bestSeason: "Spring",
  },

  // ==================== EUROPE ====================
  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    population: 11100000,
    languages: ["French"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/fr.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons.jpg",
    costTier: "$$$$",
    landmarks: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    dishes: ["Croissant", "Coq au Vin", "Crème Brûlée"],
    bestSeason: "Spring",
  },
  {
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    population: 9500000,
    languages: ["English"],
    currency: "GBP",
    flagURL: "https://flagcdn.com/w640/gb.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
    costTier: "$$$$",
    landmarks: ["Big Ben", "Tower Bridge", "Buckingham Palace"],
    dishes: ["Fish and Chips", "Sunday Roast", "Shepherd's Pie"],
    bestSeason: "Summer",
  },
  {
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    population: 3700000,
    languages: ["German"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/de.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburger_Tor_abends.jpg",
    costTier: "$$$",
    landmarks: ["Brandenburg Gate", "Berlin Wall Memorial", "Reichstag Building"],
    dishes: ["Currywurst", "Pretzel", "Schnitzel"],
    bestSeason: "Summer",
  },
  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    population: 4300000,
    languages: ["Italian"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/it.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
    costTier: "$$$",
    landmarks: ["Colosseum", "Trevi Fountain", "Vatican City"],
    dishes: ["Carbonara", "Cacio e Pepe", "Roman Pizza"],
    bestSeason: "Spring",
  },
  {
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    population: 5600000,
    languages: ["Spanish", "Catalan"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/es.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Sagrada_Familia_01.jpg",
    costTier: "$$$",
    landmarks: ["Sagrada Família", "Park Güell", "La Rambla"],
    dishes: ["Paella", "Tapas", "Crema Catalana"],
    bestSeason: "Spring",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    population: 2500000,
    languages: ["Dutch"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/nl.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam_Canals_-_July_2006.jpg",
    costTier: "$$$$",
    landmarks: ["Anne Frank House", "Van Gogh Museum", "Canal Belt"],
    dishes: ["Stroopwafel", "Bitterballen", "Herring"],
    bestSeason: "Spring",
  },
  {
    name: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    population: 1300000,
    languages: ["Czech"],
    currency: "CZK",
    flagURL: "https://flagcdn.com/w640/cz.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Prague_-_Charles_Bridge.jpg",
    costTier: "$$",
    landmarks: ["Charles Bridge", "Prague Castle", "Old Town Square"],
    dishes: ["Svíčková", "Goulash", "Trdelník"],
    bestSeason: "Fall",
  },
  {
    name: "Athens",
    country: "Greece",
    continent: "Europe",
    population: 3100000,
    languages: ["Greek"],
    currency: "EUR",
    flagURL: "https://flagcdn.com/w640/gr.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg",
    costTier: "$$",
    landmarks: ["Acropolis", "Parthenon", "Plaka District"],
    dishes: ["Souvlaki", "Moussaka", "Greek Salad"],
    bestSeason: "Spring",
  },

  // ==================== AFRICA ====================
  {
    name: "Cairo",
    country: "Egypt",
    continent: "Africa",
    population: 21000000,
    languages: ["Arabic"],
    currency: "EGP",
    flagURL: "https://flagcdn.com/w640/eg.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Pyramids_of_Giza.jpg",
    costTier: "$",
    landmarks: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"],
    dishes: ["Koshari", "Ful Medames", "Molokhia"],
    bestSeason: "Winter",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    population: 4600000,
    languages: ["English", "Afrikaans", "Xhosa"],
    currency: "ZAR",
    flagURL: "https://flagcdn.com/w640/za.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cape_Town_City_DSC_3621_%28cropped%29.jpg/3840px-Cape_Town_City_DSC_3621_%28cropped%29.jpg",
    costTier: "$$",
    landmarks: ["Table Mountain", "Robben Island", "V&A Waterfront"],
    dishes: ["Bobotie", "Biltong", "Bunny Chow"],
    bestSeason: "Summer",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    population: 1300000,
    languages: ["Arabic", "Berber", "French"],
    currency: "MAD",
    flagURL: "https://flagcdn.com/w640/ma.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Koutoubia_Minaret.jpg",
    costTier: "$",
    landmarks: ["Jemaa el-Fnaa", "Koutoubia Mosque", "Bahia Palace"],
    dishes: ["Tagine", "Couscous", "Mint Tea"],
    bestSeason: "Spring",
  },

  // ==================== NORTH AMERICA ====================
  {
    name: "New York",
    country: "United States",
    continent: "North America",
    population: 20100000,
    languages: ["English"],
    currency: "USD",
    flagURL: "https://flagcdn.com/w640/us.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg",
    costTier: "$$$$",
    landmarks: ["Statue of Liberty", "Times Square", "Central Park"],
    dishes: ["New York Pizza", "Bagel with Lox", "Cheesecake"],
    bestSeason: "Fall",
  },
  {
    name: "Los Angeles",
    country: "United States",
    continent: "North America",
    population: 13200000,
    languages: ["English", "Spanish"],
    currency: "USD",
    flagURL: "https://flagcdn.com/w640/us.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/LA_Skyline_Mountains2.jpg",
    costTier: "$$$$",
    landmarks: ["Hollywood Sign", "Santa Monica Pier", "Griffith Observatory"],
    dishes: ["Fish Tacos", "In-N-Out Burger", "Korean BBQ"],
    bestSeason: "Spring",
  },
  {
    name: "Mexico City",
    country: "Mexico",
    continent: "North America",
    population: 22000000,
    languages: ["Spanish"],
    currency: "MXN",
    flagURL: "https://flagcdn.com/w640/mx.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/3840px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg",
    costTier: "$",
    landmarks: ["Zócalo", "Frida Kahlo Museum", "Teotihuacán"],
    dishes: ["Tacos al Pastor", "Mole", "Chilaquiles"],
    bestSeason: "Spring",
  },
  {
    name: "Toronto",
    country: "Canada",
    continent: "North America",
    population: 6400000,
    languages: ["English", "French"],
    currency: "CAD",
    flagURL: "https://flagcdn.com/w640/ca.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Toronto_-_ON_-_Toronto_Skyline2.jpg",
    costTier: "$$$",
    landmarks: ["CN Tower", "Royal Ontario Museum", "Distillery District"],
    dishes: ["Poutine", "Peameal Bacon Sandwich", "Butter Tart"],
    bestSeason: "Summer",
  },
  {
    name: "Havana",
    country: "Cuba",
    continent: "North America",
    population: 2100000,
    languages: ["Spanish"],
    currency: "CUP",
    flagURL: "https://flagcdn.com/w640/cu.png",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/1/12/DJI_0197_crp_wiki.jpg",
    costTier: "$",
    landmarks: ["Old Havana", "Malecón", "El Capitolio"],
    dishes: ["Ropa Vieja", "Moros y Cristianos", "Cuban Sandwich"],
    bestSeason: "Winter",
  },

  // ==================== SOUTH AMERICA ====================
  {
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    population: 15400000,
    languages: ["Spanish"],
    currency: "ARS",
    flagURL: "https://flagcdn.com/w640/ar.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Obelisco_Buenos_Aires.jpg",
    costTier: "$$",
    landmarks: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo"],
    dishes: ["Asado", "Empanadas", "Dulce de Leche"],
    bestSeason: "Fall",
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    population: 13500000,
    languages: ["Portuguese"],
    currency: "BRL",
    flagURL: "https://flagcdn.com/w640/br.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Christ_on_Corcovado_mountain.JPG",
    costTier: "$$",
    landmarks: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
    dishes: ["Feijoada", "Pão de Queijo", "Açaí Bowl"],
    bestSeason: "Summer",
  },

  // ==================== OCEANIA ====================
  {
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    population: 5300000,
    languages: ["English"],
    currency: "AUD",
    flagURL: "https://flagcdn.com/w640/au.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Sydney_Opera_House_-_Dec_2008.jpg",
    costTier: "$$$$",
    landmarks: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"],
    dishes: ["Meat Pie", "Lamington", "Barramundi"],
    bestSeason: "Summer",
  },
  {
    name: "Auckland",
    country: "New Zealand",
    continent: "Oceania",
    population: 1700000,
    languages: ["English", "Māori"],
    currency: "NZD",
    flagURL: "https://flagcdn.com/w640/nz.png",
    photoURL: "https://commons.wikimedia.org/wiki/Special:FilePath/Auckland_Waterfront.jpg",
    costTier: "$$$",
    landmarks: ["Sky Tower", "Mount Eden", "Waiheke Island"],
    dishes: ["Hāngī", "Fish and Chips", "Pavlova"],
    bestSeason: "Summer",
  },
];

// Favorites
let favorites = [];
let showingFavoritesOnly = false;

function isFavorite(city)
{
  return favorites.includes(city);
}

function toggleFavorites(city)
{
  if (!isFavorite(city))
  {
    favorites.push(city);
  }
  else
  {
    favorites.splice(favorites.indexOf(city), 1);
  }
  showCards();
}

function toggleFavoritesView()
{
  showingFavoritesOnly = !showingFavoritesOnly;
  
  const btn = document.getElementById("fav-view-btn");
  if (showingFavoritesOnly) 
  {
    btn.classList.add("reversed");                                                                                                                       
    btn.textContent = "Show All";
  } 
  else 
  {                                                                                                                                               
    btn.classList.remove("reversed");   
    btn.textContent = "Show Favorites";
  }
  showCards();
}
// Filter state — "all" means no filter                                                                                                                  
let continentFilter = "all";                                                                                                                             
let seasonFilter = "all";
                                                                                                                                                          
function filterByContinent(value) 
{                                                                                                                    
  continentFilter = value;
  showCards();
}

function filterBySeason(value) 
{                                                                                                                         
  seasonFilter = value;
  showCards();                                                                                                                                           
} 

// This function adds cards the page to display the data in the array
function showCards() 
{
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cities.length; i++) 
  {                                                                                                                              
                                                                                                                                                         
      // Skip this city if it doesn't match the continent filter                                                                                           
      if (continentFilter !== "all" && cities[i].continent !== continentFilter) 
      {
        continue;                                                                                                                                          
      }                                                                                                                                                  
      // Skip this city if it doesn't match the season filter
      if (seasonFilter !== "all" && cities[i].bestSeason !== seasonFilter) 
      {                                                                                    
        continue;
      }  
      if (showingFavoritesOnly && !isFavorite(cities[i].name))
      {
        continue;
      }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, cities[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, city) {
    card.style.display = "block";                                                                                                                      
   
    const cardHeader = card.querySelector("h2");                                                                                                       
    cardHeader.textContent = city.name;                     

    const cardImage = card.querySelector("img");                                                                                                       
    cardImage.src = city.photoURL;
    cardImage.alt = city.name + " photo";                                                                                                              
       
    // Card Info Fields
    card.querySelector(".info-country").textContent = city.country;                                                                                        
    card.querySelector(".info-continent").textContent = city.continent;
    card.querySelector(".info-cost").textContent = city.costTier;                                                                                          
    card.querySelector(".info-season").textContent = city.bestSeason;

    // Star button 
    const starBtn = card.querySelector(".star-btn");                                                                                                       
    if (isFavorite(city.name)) 
    {
      starBtn.textContent = "★";                                                                                                                           
      starBtn.classList.add("starred");
    } 
    else 
    {                                                                                                                                               
      starBtn.textContent = "☆";          
      starBtn.classList.remove("starred");
    }                                                                                                                                                      
    starBtn.onclick = function () 
    {
      toggleFavorites(city.name);                                                                                                                           
    }; 
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

let nameDirection = false;
let countryDirection = false;
let priceDirection = false;

function nameList() {
  for (let i = 0; i < cities.length; i++)
  {
    let target = i;
    for (let j = i + 1; j < cities.length; j++)
    {
      if(nameDirection == false)
      {
        if(cities[j].name < cities[target].name)
        {
          target = j;
        }
      }
      else
      {
        if(cities[j].name > cities[target].name)
        {
          target = j;
        }
      }
    } 
    if(target != i)
    {
      let temp = cities[i];
      cities[i] = cities[target];
      cities[target] = temp;
    }
  }
  const btn = document.getElementById("name-btn");                                                                                                       
  if (nameDirection == true) 
  {
    btn.classList.remove("reversed");                                                                                     
  } 
  else 
  {                                  
    btn.classList.add("reversed");                                                                                      
  }   
  nameDirection = !nameDirection;
  showCards();
}

function countryList() {
  for (let i = 0; i < cities.length; i++)
  {
    let target = i;
    for (let j = i + 1; j < cities.length; j++)
    {
      if(countryDirection == false)
      {
        if(cities[j].country < cities[target].country)
        {
          target = j;
        }
      }
      else
      {
        if(cities[j].country > cities[target].country)
        {
          target = j;
        }
      }
    } 
    if(target != i)
    {
      let temp = cities[i];
      cities[i] = cities[target];
      cities[target] = temp;
    }
  }
  const btn = document.getElementById("country-btn");                                                                                                       
  if (countryDirection == true) 
  {
    btn.classList.remove("reversed");                                                                                     
  } 
  else 
  {                                  
    btn.classList.add("reversed");                                                                                      
  } 
  countryDirection = !countryDirection;
  showCards();
}

function priceList() {
  const priceOrder = { "$": 1, "$$": 2, "$$$": 3, "$$$$": 4 };
  for (let i = 0; i < cities.length; i++)
  {
    let target = i;
    for (let j = i + 1; j < cities.length; j++)
    {
      if(priceDirection == false)
      {
        if(priceOrder[cities[j].costTier] < priceOrder[cities[target].costTier])
        {
          target = j;
        }
      }
      else
      {
        // Reverses order
        if(priceOrder[cities[j].costTier] > priceOrder[cities[target].costTier])
        {
          target = j;
        }
      }
    } 
    if(target != i)
    {
      let temp = cities[i];
      cities[i] = cities[target];
      cities[target] = temp;
    }
  }
  const btn = document.getElementById("price-btn");                                                                                                       
  if (priceDirection == true) 
  {
    btn.classList.remove("reversed");                                                                                     
  } 
  else 
  {                                  
    btn.classList.add("reversed");                                                                                      
  } 
  priceDirection = !priceDirection;
  showCards();
}


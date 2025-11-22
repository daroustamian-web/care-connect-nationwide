const fs = require('fs');
const path = require('path');

// Import cities data
const citiesData = require('../data/cities.json');

// Facility name templates
const facilityChains = [
  'Sunrise Senior Living', 'Brookdale', 'Atria', 'Emeritus', 'Five Star Senior Living',
  'Holiday Retirement', 'Capital Senior Living', 'Enlivant', 'Discovery Senior Living',
  'Integral Senior Living', 'Artis Senior Living', 'Generations Living', 'Watermark Retirement'
];

const facilityTypes = [
  'Gardens', 'Manor', 'Estates', 'Commons', 'Heights', 'Village', 'Terrace',
  'Plaza', 'House', 'Residence', 'Assisted Living', 'Senior Living', 'Care Center',
  'Retirement Community', 'Senior Suites', 'Senior Residence'
];

const descriptors = [
  'Heritage', 'Golden', 'Serenity', 'Peaceful', 'Comfort', 'Garden', 'Oak',
  'Maple', 'Willow', 'Rose', 'Magnolia', 'Cedar', 'Pine', 'Sunshine', 'Meadow',
  'Valley', 'Hill', 'Park', 'Lake', 'River', 'Spring', 'Autumn', 'Summer'
];

// Street name components
const streetNames = [
  'Main', 'Oak', 'Maple', 'Cedar', 'Park', 'Elm', 'Washington', 'Lake', 'Hill',
  'Sunset', 'Meadow', 'River', 'Garden', 'Forest', 'Spring', 'Lincoln', 'Madison',
  'Jefferson', 'Wilson', 'Highland', 'Valley', 'Pine', 'Birch', 'Cherry'
];

const streetTypes = ['St', 'Ave', 'Blvd', 'Dr', 'Ln', 'Rd', 'Way', 'Ct', 'Pl', 'Pkwy'];

// Comprehensive amenities list
const allAmenities = [
  // Care Services
  'Memory Care', '24/7 Nursing Staff', 'Medication Management', 'Physical Therapy',
  'Occupational Therapy', 'Speech Therapy', 'Hospice Care', 'Respite Care',
  'Alzheimer\'s Care', 'Dementia Care', 'Skilled Nursing', 'Personal Care Assistance',

  // Accommodation
  'Private Rooms', 'Semi-Private Rooms', 'Studio Apartments', 'One-Bedroom Apartments',
  'Two-Bedroom Apartments', 'Pet-Friendly', 'Wheelchair Accessible', 'Emergency Call System',

  // Dining
  'Restaurant-Style Dining', 'Private Dining Room', 'Special Diet Menus',
  'Chef-Prepared Meals', 'Bistro/Cafe', 'Outdoor Dining', 'Nutritionist on Staff',

  // Activities & Entertainment
  'Activity Room', 'Arts & Crafts', 'Movie Theater', 'Library', 'Computer Room',
  'Game Room', 'Music Room', 'Chapel/Meditation Room', 'Dance Classes', 'Exercise Classes',

  // Wellness & Fitness
  'Fitness Center', 'Pool', 'Spa', 'Jacuzzi', 'Yoga Classes', 'Walking Paths',
  'Beauty Salon/Barber', 'Massage Therapy', 'Wellness Programs',

  // Outdoor Spaces
  'Courtyard', 'Garden', 'Patio', 'Outdoor Seating', 'BBQ Area', 'Greenhouse',

  // Transportation & Services
  'Transportation Services', 'Scheduled Outings', 'Housekeeping', 'Laundry Services',
  'Concierge Services', 'Guest Accommodations', 'Wi-Fi', 'Cable TV',

  // Safety & Security
  'Secure Environment', 'Fire Safety System', 'Security Staff', 'Gated Community'
];

// Care levels
const careLevels = [
  'Independent Living',
  'Assisted Living',
  'Memory Care',
  'Skilled Nursing',
  'Respite Care'
];

// Generate random element from array
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate random number in range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random float in range
const randomFloat = (min, max, decimals = 1) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
};

// Generate facility name
const generateFacilityName = (city, neighborhood, useChain) => {
  if (useChain) {
    const chain = randomElement(facilityChains);
    const hasLocation = Math.random() > 0.5;
    if (hasLocation) {
      return `${chain} - ${Math.random() > 0.5 ? city : neighborhood}`;
    }
    return chain;
  } else {
    const hasDescriptor = Math.random() > 0.3;
    const descriptor = hasDescriptor ? randomElement(descriptors) + ' ' : '';
    const location = Math.random() > 0.5 ? neighborhood + ' ' : '';
    const type = randomElement(facilityTypes);
    return `${descriptor}${location}${type}`;
  }
};

// Generate street address
const generateAddress = (city, state, neighborhood) => {
  const number = randomRange(100, 9999);
  const street = randomElement(streetNames);
  const type = randomElement(streetTypes);
  const zip = randomRange(10000, 99999);

  return {
    street: `${number} ${street} ${type}`,
    city: city,
    state: state,
    zip: zip.toString(),
    neighborhood: neighborhood
  };
};

// Generate coordinates (approximate, centered around city with random offset)
const generateCoordinates = (cityName) => {
  // Approximate coordinates for major US cities (simplified)
  const cityCoords = {
    'Phoenix': { lat: 33.4484, lng: -112.0740 },
    'Chicago': { lat: 41.8781, lng: -87.6298 },
    'San Diego': { lat: 32.7157, lng: -117.1611 },
    'Los Angeles': { lat: 34.0522, lng: -118.2437 },
    'Dallas': { lat: 32.7767, lng: -96.7970 },
    'Houston': { lat: 29.7604, lng: -95.3698 },
    'Philadelphia': { lat: 39.9526, lng: -75.1652 },
    'San Antonio': { lat: 29.4241, lng: -98.4936 },
    'San Jose': { lat: 37.3382, lng: -121.8863 },
    'Austin': { lat: 30.2672, lng: -97.7431 }
  };

  // Use known coords or generate random US coordinates
  const baseCoords = cityCoords[cityName] || {
    lat: randomFloat(30, 45, 4),
    lng: randomFloat(-120, -75, 4)
  };

  // Add random offset (roughly 0-10 miles)
  const latOffset = randomFloat(-0.15, 0.15, 4);
  const lngOffset = randomFloat(-0.15, 0.15, 4);

  return {
    lat: parseFloat((baseCoords.lat + latOffset).toFixed(4)),
    lng: parseFloat((baseCoords.lng + lngOffset).toFixed(4))
  };
};

// Generate phone number
const generatePhone = () => {
  const areaCode = randomRange(200, 999);
  const prefix = randomRange(200, 999);
  const line = randomRange(1000, 9999);
  return `(${areaCode}) ${prefix}-${line}`;
};

// Generate email
const generateEmail = (facilityName) => {
  const name = facilityName.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '');
  const domain = randomElement(['seniorliving.com', 'assistedliving.com', 'careconnect.com', 'seniorcommunity.com']);
  return `info@${name}.${domain}`;
};

// Generate amenities for facility
const generateAmenities = (careLevels) => {
  const count = randomRange(12, 25);
  const amenities = new Set();

  // Add care-level specific amenities
  if (careLevels.includes('Memory Care') || careLevels.includes('Dementia Care')) {
    amenities.add('Memory Care');
    amenities.add('Secure Environment');
    amenities.add('24/7 Nursing Staff');
  }

  if (careLevels.includes('Skilled Nursing')) {
    amenities.add('Skilled Nursing');
    amenities.add('24/7 Nursing Staff');
    amenities.add('Physical Therapy');
  }

  // Add random amenities until we reach the count
  while (amenities.size < count) {
    amenities.add(randomElement(allAmenities));
  }

  return Array.from(amenities).sort();
};

// Generate care levels for facility
const generateCareLevels = () => {
  const levels = [];
  const count = randomRange(1, 3);

  // Most common is Assisted Living
  levels.push('Assisted Living');

  if (count > 1) {
    const additional = [...careLevels].filter(l => l !== 'Assisted Living');
    for (let i = 1; i < count; i++) {
      const level = additional[Math.floor(Math.random() * additional.length)];
      if (!levels.includes(level)) {
        levels.push(level);
      }
    }
  }

  return levels;
};

// Generate facility description
const generateDescription = (name, city, neighborhood, amenities, careLevels) => {
  const templates = [
    `${name} is a premier senior living community located in the heart of ${neighborhood}, ${city}. We offer ${careLevels.join(', ')} services with a focus on personalized care and comfort. Our community features ${amenities.slice(0, 3).join(', ')}, and much more. With a dedicated staff committed to enhancing quality of life, residents enjoy a vibrant lifestyle filled with engaging activities and social opportunities.`,

    `Welcome to ${name}, where exceptional care meets comfortable living in ${city}'s ${neighborhood}. Our facility specializes in ${careLevels.join(' and ')} and provides residents with access to ${amenities.slice(0, 3).join(', ')}. We pride ourselves on creating a warm, home-like environment where seniors can thrive with dignity and independence.`,

    `${name} offers a unique blend of independence and support in beautiful ${neighborhood}. Providing ${careLevels.join(', ')}, our community is designed to meet the diverse needs of seniors. Residents benefit from ${amenities.slice(0, 4).join(', ')}, along with compassionate care from our experienced team. We're committed to making every day meaningful and enjoyable.`,

    `Nestled in ${city}'s sought-after ${neighborhood}, ${name} combines resort-style amenities with comprehensive care services. We offer ${careLevels.join(', ')} in a setting that feels like home. Our residents enjoy ${amenities.slice(0, 3).join(', ')}, and a full calendar of activities designed to promote wellness and social engagement.`
  ];

  return randomElement(templates);
};

// Generate pricing based on city averages and care level
const generatePricing = (cityData, careLevels) => {
  const baseMultiplier = careLevels.includes('Memory Care') || careLevels.includes('Skilled Nursing')
    ? randomFloat(1.2, 1.5)
    : randomFloat(0.85, 1.15);

  const low = Math.round(cityData.avgCostLow * baseMultiplier / 100) * 100;
  const high = Math.round(cityData.avgCostHigh * baseMultiplier / 100) * 100;

  return { low, high };
};

// Generate rating
const generateRating = () => {
  // Bias towards higher ratings (3.5-5.0)
  const ratings = [3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
  const weights = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 5, 3, 2];

  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < ratings.length; i++) {
    random -= weights[i];
    if (random <= 0) return ratings[i];
  }

  return 4.5;
};

// Generate reviews count
const generateReviewCount = () => {
  // Most facilities have 50-300 reviews
  const ranges = [
    { min: 20, max: 50, weight: 2 },
    { min: 50, max: 150, weight: 5 },
    { min: 150, max: 300, weight: 3 },
    { min: 300, max: 500, weight: 1 }
  ];

  const range = randomElement(ranges.flatMap(r => Array(r.weight).fill(r)));
  return randomRange(range.min, range.max);
};

// Generate single facility
const generateFacility = (cityData, facilityIndex) => {
  const neighborhood = randomElement(cityData.neighborhoods);
  const useChain = Math.random() > 0.6; // 40% chains, 60% independent
  const name = generateFacilityName(cityData.city, neighborhood, useChain);
  const address = generateAddress(cityData.city, cityData.state, neighborhood);
  const coords = generateCoordinates(cityData.city);
  const levels = generateCareLevels();
  const amenities = generateAmenities(levels);
  const pricing = generatePricing(cityData, levels);
  const bedCount = randomRange(30, 180);
  const yearEstablished = randomRange(1985, 2024);

  return {
    id: `${cityData.slug}-${facilityIndex}`,
    name: name,
    address: address,
    coordinates: coords,
    phone: generatePhone(),
    email: generateEmail(name),
    website: `https://www.${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,

    // Ratings and reviews
    rating: generateRating(),
    reviewCount: generateReviewCount(),

    // Pricing
    pricing: {
      low: pricing.low,
      high: pricing.high,
      currency: 'USD',
      period: 'monthly'
    },

    // Care information
    careLevels: levels,
    amenities: amenities,
    bedCount: bedCount,
    staffToResidentRatio: `1:${randomRange(4, 8)}`,

    // Additional info
    yearEstablished: yearEstablished,
    licenseNumber: `${cityData.stateAbbrev}-${randomRange(100000, 999999)}`,
    acceptsMedicaid: Math.random() > 0.6,
    acceptsMedicare: Math.random() > 0.5,
    petPolicy: Math.random() > 0.5 ? 'Pet-Friendly' : 'No Pets',

    // Content
    description: generateDescription(name, cityData.city, neighborhood, amenities, levels),

    // Metadata
    citySlug: cityData.slug,
    stateAbbrev: cityData.stateAbbrev,
    lastUpdated: new Date().toISOString()
  };
};

// Main generation function
const generateAllFacilities = () => {
  console.log('Starting facility generation...\n');

  const allFacilities = [];
  let totalCount = 0;

  citiesData.forEach((city, cityIndex) => {
    console.log(`Generating facilities for ${city.city}, ${city.stateAbbrev}...`);

    const facilitiesForCity = [];
    const targetCount = city.facilityCount;

    for (let i = 0; i < targetCount; i++) {
      const facility = generateFacility(city, i + 1);
      facilitiesForCity.push(facility);
      allFacilities.push(facility);
    }

    totalCount += targetCount;
    console.log(`  ✓ Generated ${targetCount} facilities (Total: ${totalCount})`);
  });

  console.log(`\n✅ Generation complete! Total facilities: ${totalCount}\n`);

  return allFacilities;
};

// Save facilities to file
const saveFacilities = (facilities) => {
  const outputPath = path.join(__dirname, '../data/facilities.json');

  console.log(`Saving facilities to ${outputPath}...`);
  fs.writeFileSync(outputPath, JSON.stringify(facilities, null, 2));
  console.log('✅ Facilities saved successfully!\n');

  // Generate summary statistics
  const stats = {
    totalFacilities: facilities.length,
    byState: {},
    byCity: {},
    averageRating: (facilities.reduce((sum, f) => sum + f.rating, 0) / facilities.length).toFixed(2),
    totalReviews: facilities.reduce((sum, f) => sum + f.reviewCount, 0),
    careLevelDistribution: {},
    priceRange: {
      lowest: Math.min(...facilities.map(f => f.pricing.low)),
      highest: Math.max(...facilities.map(f => f.pricing.high))
    }
  };

  facilities.forEach(f => {
    // Count by state
    stats.byState[f.stateAbbrev] = (stats.byState[f.stateAbbrev] || 0) + 1;

    // Count by city
    stats.byCity[f.citySlug] = (stats.byCity[f.citySlug] || 0) + 1;

    // Count care levels
    f.careLevels.forEach(level => {
      stats.careLevelDistribution[level] = (stats.careLevelDistribution[level] || 0) + 1;
    });
  });

  const statsPath = path.join(__dirname, '../data/facility-stats.json');
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  console.log(`✅ Statistics saved to ${statsPath}\n`);

  // Print summary
  console.log('=== FACILITY DATABASE SUMMARY ===');
  console.log(`Total Facilities: ${stats.totalFacilities}`);
  console.log(`States Covered: ${Object.keys(stats.byState).length}`);
  console.log(`Cities Covered: ${Object.keys(stats.byCity).length}`);
  console.log(`Average Rating: ${stats.averageRating}/5.0`);
  console.log(`Total Reviews: ${stats.totalReviews.toLocaleString()}`);
  console.log(`Price Range: $${stats.priceRange.lowest.toLocaleString()} - $${stats.priceRange.highest.toLocaleString()}/month`);
  console.log('\nCare Level Distribution:');
  Object.entries(stats.careLevelDistribution)
    .sort((a, b) => b[1] - a[1])
    .forEach(([level, count]) => {
      console.log(`  ${level}: ${count} facilities`);
    });
  console.log('\n================================\n');
};

// Run the generator
const facilities = generateAllFacilities();
saveFacilities(facilities);

console.log('🎉 All done! Your facility database is ready to use.');

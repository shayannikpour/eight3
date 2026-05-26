export interface Store {
  name: string
  address: string
  city: 'Vancouver' | 'Kelowna' | 'Whistler' | 'Burnaby'
  neighborhood: string
  phone: string
  hours: string
  mapsUrl: string
  lat: number
  lng: number
}

export const stores: Store[] = [
  // Vancouver (8 stores)
  {
    name: 'Burb Cannabis Co.',
    address: '1055 W Georgia St',
    city: 'Vancouver',
    neighborhood: 'Coal Harbour',
    phone: '(604) 555-0101',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–8pm',
    mapsUrl: 'https://maps.google.com/?q=1055+W+Georgia+St,+Vancouver,+BC',
    lat: 49.2846, lng: -123.1228,
  },
  {
    name: 'Latitude Cannabis',
    address: '128 W Hastings St',
    city: 'Vancouver',
    neighborhood: 'Gastown',
    phone: '(604) 555-0102',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=128+W+Hastings+St,+Vancouver,+BC',
    lat: 49.2830, lng: -123.1080,
  },
  {
    name: 'Tokyo Smoke Davie',
    address: '1175 Davie St',
    city: 'Vancouver',
    neighborhood: 'West End',
    phone: '(604) 555-0103',
    hours: 'Daily 10am–11pm',
    mapsUrl: 'https://maps.google.com/?q=1175+Davie+St,+Vancouver,+BC',
    lat: 49.2775, lng: -123.1404,
  },
  {
    name: 'Spiritleaf Yaletown',
    address: '1138 Homer St',
    city: 'Vancouver',
    neighborhood: 'Yaletown',
    phone: '(604) 555-0104',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–9pm',
    mapsUrl: 'https://maps.google.com/?q=1138+Homer+St,+Vancouver,+BC',
    lat: 49.2747, lng: -123.1272,
  },
  {
    name: 'Fire & Flower Granville',
    address: '889 Granville St',
    city: 'Vancouver',
    neighborhood: 'Downtown',
    phone: '(604) 555-0105',
    hours: 'Daily 9am–11pm',
    mapsUrl: 'https://maps.google.com/?q=889+Granville+St,+Vancouver,+BC',
    lat: 49.2791, lng: -123.1215,
  },
  {
    name: 'Green Room Cannabis',
    address: '555 Seymour St',
    city: 'Vancouver',
    neighborhood: 'Downtown',
    phone: '(604) 555-0106',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=555+Seymour+St,+Vancouver,+BC',
    lat: 49.2820, lng: -123.1159,
  },
  {
    name: 'The Herb Co.',
    address: '211 Abbott St',
    city: 'Vancouver',
    neighborhood: 'Gastown',
    phone: '(604) 555-0107',
    hours: 'Mon–Sun 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=211+Abbott+St,+Vancouver,+BC',
    lat: 49.2833, lng: -123.1085,
  },
  {
    name: 'Canopy Cannabis Robson',
    address: '789 Robson St',
    city: 'Vancouver',
    neighborhood: 'Robson Street',
    phone: '(604) 555-0108',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=789+Robson+St,+Vancouver,+BC',
    lat: 49.2810, lng: -123.1240,
  },

  // Burnaby (5 stores)
  {
    name: 'Burb Cannabis Burnaby',
    address: '4515 Hastings St',
    city: 'Burnaby',
    neighborhood: 'Capitol Hill',
    phone: '(604) 555-0201',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=4515+Hastings+St,+Burnaby,+BC',
    lat: 49.2838, lng: -122.9997,
  },
  {
    name: 'Metrotown Cannabis',
    address: '4789 Kingsway',
    city: 'Burnaby',
    neighborhood: 'Metrotown',
    phone: '(604) 555-0202',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–8pm',
    mapsUrl: 'https://maps.google.com/?q=4789+Kingsway,+Burnaby,+BC',
    lat: 49.2263, lng: -122.9998,
  },
  {
    name: 'Heights Cannabis Co.',
    address: '3777 E Hastings St',
    city: 'Burnaby',
    neighborhood: 'The Heights',
    phone: '(604) 555-0203',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=3777+E+Hastings+St,+Burnaby,+BC',
    lat: 49.2808, lng: -123.0225,
  },
  {
    name: 'Brentwood Cannabis',
    address: '1918 Gilmore Ave',
    city: 'Burnaby',
    neighborhood: 'Brentwood',
    phone: '(604) 555-0204',
    hours: 'Daily 9am–10pm',
    mapsUrl: 'https://maps.google.com/?q=1918+Gilmore+Ave,+Burnaby,+BC',
    lat: 49.2647, lng: -123.0083,
  },
  {
    name: 'BC Cannabis Store Burnaby',
    address: '6010 Kingsway',
    city: 'Burnaby',
    neighborhood: 'Edmonds',
    phone: '(604) 555-0205',
    hours: 'Mon–Sat 10am–9pm, Sun 11am–7pm',
    mapsUrl: 'https://maps.google.com/?q=6010+Kingsway,+Burnaby,+BC',
    lat: 49.2243, lng: -122.9747,
  },

  // Kelowna (4 stores)
  {
    name: 'Green Pearl Organics',
    address: '1470 Harvey Ave',
    city: 'Kelowna',
    neighborhood: 'Pandosy Village',
    phone: '(250) 555-0301',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=1470+Harvey+Ave,+Kelowna,+BC',
    lat: 49.8822, lng: -119.4960,
  },
  {
    name: 'Spiritleaf Bernard',
    address: '576 Bernard Ave',
    city: 'Kelowna',
    neighborhood: 'Downtown Kelowna',
    phone: '(250) 555-0302',
    hours: 'Mon–Sat 10am–9pm, Sun 11am–7pm',
    mapsUrl: 'https://maps.google.com/?q=576+Bernard+Ave,+Kelowna,+BC',
    lat: 49.8883, lng: -119.4960,
  },
  {
    name: 'High Society Cannabis',
    address: '2300 Gordon Dr',
    city: 'Kelowna',
    neighborhood: 'South Kelowna',
    phone: '(250) 555-0303',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=2300+Gordon+Dr,+Kelowna,+BC',
    lat: 49.8628, lng: -119.4833,
  },
  {
    name: 'Okanagan Cannabis Co.',
    address: '1979 Springfield Rd',
    city: 'Kelowna',
    neighborhood: 'Rutland',
    phone: '(250) 555-0304',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=1979+Springfield+Rd,+Kelowna,+BC',
    lat: 49.8963, lng: -119.4378,
  },

  // Whistler (3 stores)
  {
    name: 'Whistler Cannabis Co.',
    address: '4280 Mountain Square',
    city: 'Whistler',
    neighborhood: 'Whistler Village',
    phone: '(604) 555-0401',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=4280+Mountain+Square,+Whistler,+BC',
    lat: 50.1163, lng: -122.9574,
  },
  {
    name: 'Altitude Cannabis',
    address: '2129 Lake Placid Rd',
    city: 'Whistler',
    neighborhood: 'Creekside',
    phone: '(604) 555-0402',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=2129+Lake+Placid+Rd,+Whistler,+BC',
    lat: 50.0944, lng: -122.9640,
  },
  {
    name: 'Peak Provisions',
    address: '3000 Ingrid Dr',
    city: 'Whistler',
    neighborhood: 'Function Junction',
    phone: '(604) 555-0403',
    hours: 'Daily 11am–9pm',
    mapsUrl: 'https://maps.google.com/?q=3000+Ingrid+Dr,+Whistler,+BC',
    lat: 50.1050, lng: -123.0000,
  },
]

export const cities = ['All', 'Vancouver', 'Burnaby', 'Kelowna', 'Whistler'] as const
export type City = (typeof cities)[number]

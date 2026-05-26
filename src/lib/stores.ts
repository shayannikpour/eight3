export interface Store {
  name: string
  address: string
  city: 'Vancouver' | 'Kelowna' | 'Whistler' | 'Burnaby'
  neighborhood: string
  phone: string
  hours: string
  mapsUrl: string
}

export const stores: Store[] = [
  // Vancouver Downtown (8 stores)
  {
    name: 'Burb Cannabis Co.',
    address: '1055 W Georgia St',
    city: 'Vancouver',
    neighborhood: 'Coal Harbour',
    phone: '(604) 555-0101',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–8pm',
    mapsUrl: 'https://maps.google.com/?q=1055+W+Georgia+St,+Vancouver,+BC',
  },
  {
    name: 'Latitude Cannabis',
    address: '128 W Hastings St',
    city: 'Vancouver',
    neighborhood: 'Gastown',
    phone: '(604) 555-0102',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=128+W+Hastings+St,+Vancouver,+BC',
  },
  {
    name: 'Tokyo Smoke Davie',
    address: '1175 Davie St',
    city: 'Vancouver',
    neighborhood: 'West End',
    phone: '(604) 555-0103',
    hours: 'Daily 10am–11pm',
    mapsUrl: 'https://maps.google.com/?q=1175+Davie+St,+Vancouver,+BC',
  },
  {
    name: 'Spiritleaf Yaletown',
    address: '1138 Homer St',
    city: 'Vancouver',
    neighborhood: 'Yaletown',
    phone: '(604) 555-0104',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–9pm',
    mapsUrl: 'https://maps.google.com/?q=1138+Homer+St,+Vancouver,+BC',
  },
  {
    name: 'Fire & Flower Granville',
    address: '889 Granville St',
    city: 'Vancouver',
    neighborhood: 'Downtown',
    phone: '(604) 555-0105',
    hours: 'Daily 9am–11pm',
    mapsUrl: 'https://maps.google.com/?q=889+Granville+St,+Vancouver,+BC',
  },
  {
    name: 'Green Room Cannabis',
    address: '555 Seymour St',
    city: 'Vancouver',
    neighborhood: 'Downtown',
    phone: '(604) 555-0106',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=555+Seymour+St,+Vancouver,+BC',
  },
  {
    name: 'The Herb Co.',
    address: '211 Abbott St',
    city: 'Vancouver',
    neighborhood: 'Gastown',
    phone: '(604) 555-0107',
    hours: 'Mon–Sun 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=211+Abbott+St,+Vancouver,+BC',
  },
  {
    name: 'Canopy Cannabis Robson',
    address: '789 Robson St',
    city: 'Vancouver',
    neighborhood: 'Robson Street',
    phone: '(604) 555-0108',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=789+Robson+St,+Vancouver,+BC',
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
  },
  {
    name: 'Metrotown Cannabis',
    address: '4789 Kingsway',
    city: 'Burnaby',
    neighborhood: 'Metrotown',
    phone: '(604) 555-0202',
    hours: 'Mon–Sat 10am–10pm, Sun 11am–8pm',
    mapsUrl: 'https://maps.google.com/?q=4789+Kingsway,+Burnaby,+BC',
  },
  {
    name: 'Heights Cannabis Co.',
    address: '3777 E Hastings St',
    city: 'Burnaby',
    neighborhood: 'The Heights',
    phone: '(604) 555-0203',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=3777+E+Hastings+St,+Burnaby,+BC',
  },
  {
    name: 'Brentwood Cannabis',
    address: '1918 Gilmore Ave',
    city: 'Burnaby',
    neighborhood: 'Brentwood',
    phone: '(604) 555-0204',
    hours: 'Daily 9am–10pm',
    mapsUrl: 'https://maps.google.com/?q=1918+Gilmore+Ave,+Burnaby,+BC',
  },
  {
    name: 'BC Cannabis Store Burnaby',
    address: '6010 Kingsway',
    city: 'Burnaby',
    neighborhood: 'Edmonds',
    phone: '(604) 555-0205',
    hours: 'Mon–Sat 10am–9pm, Sun 11am–7pm',
    mapsUrl: 'https://maps.google.com/?q=6010+Kingsway,+Burnaby,+BC',
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
  },
  {
    name: 'Spiritleaf Bernard',
    address: '576 Bernard Ave',
    city: 'Kelowna',
    neighborhood: 'Downtown Kelowna',
    phone: '(250) 555-0302',
    hours: 'Mon–Sat 10am–9pm, Sun 11am–7pm',
    mapsUrl: 'https://maps.google.com/?q=576+Bernard+Ave,+Kelowna,+BC',
  },
  {
    name: 'High Society Cannabis',
    address: '2300 Gordon Dr',
    city: 'Kelowna',
    neighborhood: 'South Kelowna',
    phone: '(250) 555-0303',
    hours: 'Daily 10am–10pm',
    mapsUrl: 'https://maps.google.com/?q=2300+Gordon+Dr,+Kelowna,+BC',
  },
  {
    name: 'Okanagan Cannabis Co.',
    address: '1979 Springfield Rd',
    city: 'Kelowna',
    neighborhood: 'Rutland',
    phone: '(250) 555-0304',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=1979+Springfield+Rd,+Kelowna,+BC',
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
  },
  {
    name: 'Altitude Cannabis',
    address: '2129 Lake Placid Rd',
    city: 'Whistler',
    neighborhood: 'Creekside',
    phone: '(604) 555-0402',
    hours: 'Daily 10am–9pm',
    mapsUrl: 'https://maps.google.com/?q=2129+Lake+Placid+Rd,+Whistler,+BC',
  },
  {
    name: 'Peak Provisions',
    address: '3000 Ingrid Dr',
    city: 'Whistler',
    neighborhood: 'Function Junction',
    phone: '(604) 555-0403',
    hours: 'Daily 11am–9pm',
    mapsUrl: 'https://maps.google.com/?q=3000+Ingrid+Dr,+Whistler,+BC',
  },
]

export const cities = ['All', 'Vancouver', 'Burnaby', 'Kelowna', 'Whistler'] as const
export type City = (typeof cities)[number]

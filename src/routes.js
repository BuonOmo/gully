export const generatePageTitle = (section = '2021') => `Festival Gully Sound #8 - ${section}`

export default {
  '/': {
    view: 'Home',
    title: generatePageTitle()
  },
  '/programmation': {
    view: 'Programmation',
    title: generatePageTitle('Programmation')
  },
  '/artfact': {
    view: 'About',
    title: generatePageTitle('À propos')
  },
  '/billeterie': {
    view: 'Ticketing',
    title: generatePageTitle('Billeterie')
  },
  '/infos': {
    view: 'Informations',
    title: generatePageTitle('Informations')
  },
  '/photos': {
    view: 'Media',
    title: generatePageTitle('Photos')
  },
  '/contact': {
    view: 'Contact',
    title: generatePageTitle('Contact')
  }
}

const API_URL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier';

export default async function fetchEvents(startDate, endDate, neighborhood) {
  const url = new URL(API_URL);
  url.searchParams.set('q', `datetime:${startDate} ${endDate}`);
  url.searchParams.set('facet', neighborhood);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

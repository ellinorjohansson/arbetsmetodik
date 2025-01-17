export interface IPodcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
  }
 
  interface IPodcastResponse {
    programs: IPodcast[];
  }
 
  export async function fetchPodcasts(): Promise<IPodcastResponse | null> {
    try {
      const response = await fetch(
        'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false',
      );
      const data = await response.json();
 
      return data.programs ? { programs: data.programs } : null;
    } catch (error) {
      console.error('Något blev fel:', error);
      return null;
    }
  }
 
  export default fetchPodcasts;
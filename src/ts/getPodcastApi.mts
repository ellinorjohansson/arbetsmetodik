import { customError } from './logger.ts';

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
    const apiUrl = import.meta.env.VITE_API_URL_PODCAST;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.programs ? { programs: data.programs } : null;

  } catch (error: unknown) {
    if (error instanceof Error) {
      customError('Något blev fel:', error);
    } else {
      customError('Något blev fel: Okänt fel');
    }

    const errorElement = document.getElementById('errorMessage');
    if (errorElement) {
      errorElement.classList.remove('hidden');
    }

    return null;
  }
}

export default fetchPodcasts;

import fetchPodcasts, { IPodcast } from './getPodcastApi.mjs';

const podcastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

export async function renderPodcasts(): Promise<void> {
  const podcasts = await fetchPodcasts();
  podcasts?.programs?.forEach(podcastItem => createPodcast(podcastItem));
}

function createPodcast(podcastItem: IPodcast): void {
  const articleElement = createArticleElement();
  podcastContainer.appendChild(articleElement);

  const imgElement = createImageElement(podcastItem.socialimage, podcastItem.name);
  articleElement.appendChild(imgElement);

  const textDiv = createTextDiv();
  articleElement.appendChild(textDiv);

  createTextContent(textDiv, podcastItem.name, podcastItem.description, podcastItem.programurl);
}

function createArticleElement(): HTMLElement {
  const articleElement = document.createElement('article');
  articleElement.classList.add('section__article');
  return articleElement;
}

function createImageElement(imageUrl: string, altText: string): HTMLImageElement {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.width = 100;
  imgElement.height = 100;
  imgElement.setAttribute('alt', `Omslagsbild för podcasten: ${altText}`);
  return imgElement;
}

function createTextDiv(): HTMLDivElement {
  const textDiv = document.createElement('div');
  textDiv.classList.add('section__article-content');
  return textDiv;
}

function createTextContent(textDiv: HTMLElement, programName: string, description: string, programUrl: string): void {
  const headerElement = document.createElement('h2');
  headerElement.textContent = programName;
  textDiv.appendChild(headerElement);

  const descElement = document.createElement('p');
  descElement.textContent = description;
  textDiv.appendChild(descElement);

  const linkElement = document.createElement('a');
  linkElement.href = programUrl;
  linkElement.textContent = 'Lyssna här';
  textDiv.appendChild(linkElement);
}

export default renderPodcasts;

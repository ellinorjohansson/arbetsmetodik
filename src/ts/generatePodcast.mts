import getPodcasts from './api.mts';

const podcastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

interface Podcast {
  name: string;
  description: string;
  programurl: string;
  socialimage: string;
}

export async function renderPodcasts(): Promise<void> {
  const podcasts = await getPodcasts();

  if (podcasts && podcasts.programs) {
    podcasts.programs.forEach((podcast: Podcast) => {
      createPodcast(podcast);
    });
  }
}

function createPodcast(podcast: Podcast): void {
  const articleElement = createInnerArticle();
  createImg(articleElement, podcast.socialimage, podcast.name);
  const textDiv = createTextDiv(articleElement);

  createHeader(textDiv, podcast.name);
  createP(textDiv, podcast.description);
  createLink(textDiv, podcast.programurl);
}

function createInnerArticle(): HTMLElement {
  const articleElement = document.createElement('article');
  articleElement.classList.add('section__article');
  podcastContainer.appendChild(articleElement);
  return articleElement;
}

function createTextDiv(innerArticle: HTMLElement): HTMLElement {
  const textDiv = document.createElement('div');
  textDiv.classList.add('section__article-content');
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createImg(innerArticle: HTMLElement, imageUrl: string, podcastName: string): void {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.width = 100;
  imgElement.height = 100;
  imgElement.setAttribute('alt', `Omslagsbild för podcasten: ${podcastName}`); 
  innerArticle.appendChild(imgElement);
}

function createHeader(textDiv: HTMLElement, programName: string): void {
  const headerPlacement = document.createElement('h2');
  const headerText = document.createTextNode(programName);
  headerPlacement.appendChild(headerText);
  textDiv.appendChild(headerPlacement);
}

function createP(textDiv: HTMLElement, description: string): void {
  const descPlacement = document.createElement('p');
  const descText = document.createTextNode(description);
  descPlacement.appendChild(descText);
  textDiv.appendChild(descPlacement);
}

function createLink(textDiv: HTMLElement, programUrl: string): void {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', programUrl);
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export default renderPodcasts;

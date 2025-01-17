import getPodcasts, {Podcast} from './getPodcastApi.mjs';

const podcastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

export async function renderPodcasts(): Promise<void> {
  const podcasts = await getPodcasts();

  if (podcasts && podcasts.programs) {
    podcasts.programs.forEach((podcastItem: Podcast) => {
      createPodcast(podcastItem);
    });
  }
}

function createPodcast(podcastItem: Podcast): void {
  const articleElement = createArticle();
  createImage(articleElement, podcastItem.socialimage, podcastItem.name);
  const textDiv = createTextDiv(articleElement);

  createHeader(textDiv, podcastItem.name);
  createParagraph(textDiv, podcastItem.description);
  createLink(textDiv, podcastItem.programurl);
}

function createArticle(): HTMLElement {
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

function createImage(innerArticle: HTMLElement, imageUrl: string, podcastName: string): void {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.width = 100;
  imgElement.height = 100;
  imgElement.setAttribute('alt', `Omslagsbild för podcasten: ${podcastName}`); 
  innerArticle.appendChild(imgElement);
}

function createHeader(textDiv: HTMLElement, programName: string): void {
  const headerElement = document.createElement('h2');
  const headerText = document.createTextNode(programName);
  headerElement.appendChild(headerText);
  textDiv.appendChild(headerElement);
}

function createParagraph(textDiv: HTMLElement, description: string): void {
  const descElement = document.createElement('p');
  const descText = document.createTextNode(description);
  descElement.appendChild(descText);
  textDiv.appendChild(descElement);
}

function createLink(textDiv: HTMLElement, programUrl: string): void {
  const linkElement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkElement.setAttribute('href', programUrl);
  linkElement.appendChild(linkText);
  textDiv.appendChild(linkElement);
}

export default renderPodcasts;

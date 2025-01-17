import getPodcasts from './api.mts';

const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

interface Podcast {
  name: string;
  description: string;
  programurl: string;
  socialimage: string;
}

export async function createHtml(): Promise<void> {
  const podCasts = await getPodcasts();

  if (podCasts && podCasts.programs) {
    podCasts.programs.forEach((podcast: Podcast) => {
      createPodcast(podcast);
    });
  }
}

function createPodcast(podcast: Podcast): void {
  const innerArticle = createInnerArticle();
  createImg(innerArticle, podcast.socialimage, podcast.name);
  const textDiv = createTextDiv(innerArticle);

  createHeader(textDiv, podcast.name);
  createP(textDiv, podcast.description);
  createLink(textDiv, podcast.programurl);
}

function createInnerArticle(): HTMLElement {
  const innerArticle = document.createElement('article');
  innerArticle.classList.add('section__article');
  innerArticle.setAttribute('tabindex', '1');
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(innerArticle: HTMLElement): HTMLElement {
  const textDiv = document.createElement('div');
  textDiv.classList.add('section__article-content');
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createImg(innerArticle: HTMLElement, imageUrl: string, podcastName: string): void {
  const imgPlacement = document.createElement('img');
  imgPlacement.src = imageUrl;
  imgPlacement.width = 100;
  imgPlacement.height = 100;
  imgPlacement.setAttribute('alt', `Omslagsbild för podcasten: ${podcastName}`); 
  innerArticle.appendChild(imgPlacement);
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
  linkPlacement.setAttribute('tabindex', '1');
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export default createHtml;

export enum ResourceType {
  MEDIUM,
  AMAZON,
}

export interface Category {
  id: string;
  title: string;
}

export interface Resource {
  title: string;
  description: string;
  author: string;
  categories: string[];
  type: ResourceType;
  url: string;
}

export const categories: Category[] = [
  {
    id: 'self-improvement',
    title: 'Self Improvement',
  },
  {
    id: 'finances',
    title: 'Finances',
  },
  {
    id: 'business',
    title: 'Business',
  },
  {
    id: 'cooking',
    title: 'Cooking',
  },
];

export const resources: Resource[] = [
  {
    title: '4 Things Emotionally Mature People Don’t Do',
    description:
      'Your emotional age is distinct from your chronological one. You can be 43 on paper but behave like a four-year-old in how you treat and communicate with others. Often, we confuse the two because we expect our emotional maturity to progress alongside our...',
    author: 'Niklas Göke',
    categories: ['self-improvement'],
    type: ResourceType.MEDIUM,
    url:
      'https://psiloveyou.xyz/4-things-emotionally-mature-people-dont-do-4226449e761c',
  },
  {
    title: '7 Most Desirable Traits in a Partner',
    description:
      'I was working with a man who was beating up on himself because he couldn’t make a relationship work. He’d been married twice and a third serious relationship had just fallen over. He’d taken all the responsibility for these breakups and believed he was...',
    author: 'Karen Nimmo',
    categories: ['self-improvement'],
    type: ResourceType.MEDIUM,
    url:
      'https://medium.com/on-the-couch/7-most-desirable-traits-in-a-partner-7289484ffe2d',
  },
];

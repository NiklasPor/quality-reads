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
    id: 'relationships',
    title: 'Relationships',
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
    categories: ['relationships'],
    type: ResourceType.MEDIUM,
    url:
      'https://psiloveyou.xyz/4-things-emotionally-mature-people-dont-do-4226449e761c',
  },
  {
    title: '7 Most Desirable Traits in a Partner',
    description:
      'I was working with a man who was beating up on himself because he couldn’t make a relationship work. He’d been married twice and a third serious relationship had just fallen over. He’d taken all the responsibility for these breakups and believed he was...',
    author: 'Karen Nimmo',
    categories: ['relationships'],
    type: ResourceType.MEDIUM,
    url:
      'https://medium.com/on-the-couch/7-most-desirable-traits-in-a-partner-7289484ffe2d',
  },
  {
    title: '7 Habits Of Highly Effective People',
    description:
      'In this seminal work, Stephen R. Covey presents a holistic, integrated, principle-centred approach for solving personal and professional problems. With penetrating insights and pointed anecdotes, Covey reveals a step-by-step pathway for living with fairness, integrity...',
    author: 'Stephen R Covey',
    categories: ['self-improvement'],
    type: ResourceType.AMAZON,
    url:
      'https://www.amazon.de/7-Habits-Highly-Effective-People/dp/1416502491/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
  },

  {
    title: 'How To Win Friends And Influence People',
    description:
      'In his book, Carnegie explains that success comes from the ability to communicate effectively with others. He provides relatable analogies and examples, and teaches you skills to make people want to be in your company, see things your way, and feel wonderful about...',
    author: 'Dale Carnegie',
    categories: ['self-improvement'],
    type: ResourceType.AMAZON,
    url:
      'https://www.amazon.de/7-Habits-Highly-Effective-People/dp/1416502491/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
  },
];

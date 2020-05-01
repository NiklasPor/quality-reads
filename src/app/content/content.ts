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
  // {
  //   id: 'finances',
  //   title: 'Finances',
  // },
  {
    id: 'business',
    title: 'Business',
  },
  // {
  //   id: 'cooking',
  //   title: 'Cooking',
  // },
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
    url: 'https://www.amazon.de/7-Habits-Highly-Effective-People/dp/1416502491',
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
  {
    title: 'The Lean Startup',
    description:
      'Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.',
    author: 'Eric Ries',
    categories: ['business'],
    type: ResourceType.AMAZON,
    url:
      'https://www.amazon.de/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
  },
  {
    title: 'Thinking, Fast and Slow',
    description: `Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational...`,
    author: 'Daniel Kahneman',
    categories: ['self-improvement'],
    type: ResourceType.AMAZON,
    url:
      'https://www.amazon.de/Thinking-Fast-Slow-Daniel-Kahneman/dp/0141033576',
  },
  {
    title: 'SELL LIKE CRAZY',
    description:
      'In what some are calling the most controversial marketing book of the decade. Sell Like Crazy reveals an 8-phase selling system for generating absurd amounts of leads, sales and profit for any business in any marketing with digital marketing!',
    author: 'Sabri Suby',
    categories: ['business'],
    type: ResourceType.AMAZON,
    url:
      'https://www.amazon.de/SELL-LIKE-CRAZY-Customers-Possibly-ebook/dp/B07N7GRHNK',
  },
];

// template
const _: Resource = {
  title: '',
  description: '',
  author: '',
  categories: [''],
  type: ResourceType.AMAZON,
  url: '',
};

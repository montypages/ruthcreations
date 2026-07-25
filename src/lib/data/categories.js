const categories = 
    {
      artwork: {
        name: 'Artwork',
        slug: 'artwork',
        img: {
            src: '/sample-blogs/flower.jpeg',
            alt: 'Drawing of a flower.'
        },
        description: 'From drawing, to painting, to coloring. I love getting into fine arts!'
      },
      builds: {
        name: 'Builds',
        slug: 'builds',
        img: {
            src: '/sample-blogs/painting.jpeg',
            alt: 'Painting a wooden post.'
        },
        description: "I love making all kinds of things. Scluptures, Legos, science kits...it's all good fun!"
      },
      cooking: {
        name: 'Cooking',
        slug: 'cooking',
        img: {
            src: '/sample-blogs/sugar-cookies.jpeg',
            alt: 'A plate of sugar cookies.'
        },
        description: "Cooking things is like a fun science project that you get to eat afterwards. Count me in!"
      },
      fiberArts: {
        name: 'Fiber Arts',
        slug: 'fiber-arts',
        img: {
            src: '/sample-blogs/hand-crochet.jpeg',
            alt: 'Hand crochet single chain.'
        },
        description: "I've been tying knots since before I can remember. I love a good fabric or yarn project!"
      }
    };

export { categories };
export const categoriesList = Object.values(categories);
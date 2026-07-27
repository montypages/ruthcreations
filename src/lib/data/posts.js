import { categories } from "./categories";

export const posts = [
    {
        id: 1,
        slug: "croched-coaster",
        title: "Croched Coaster",
        categories: [categories.fiberArts],
        image: {
            src: "/sample-blogs/crochet-circle.jpeg",
            alt: "Crocheted coaster."
        },
        description: "Today I made a little crocheted coaster. It was just the right size for my cup. I picked bright blue yarn because it reminds me of the sky. At first my stitches were a little wiggly, but I kept going. Soon my coaster started to look round and neat. Now my table has a cozy place for my drink, and every time I see it, I smile because I made it myself.",
        content: `
        <div class="blog-figure">
            <img src="/sample-blogs/crochet-circle.jpeg" alt="Crocheted coaster." class="blog-img" />
            <p class="blog-img-caption"></p>
        </div>

        <p>Today I made a little crocheted coaster. It was just the right size for my cup. I picked bright blue yarn because it reminds me of the sky. At first my stitches were a little wiggly, but I kept going. Soon my coaster started to look round and neat. Now my table has a cozy place for my drink, and every time I see it, I smile because I made it myself.</p>
        `,
        hearts: 5,
        publishedAt: "2026-07-25",
    },
    {
        id: 2,
        slug: "hand-crochet",
        title: "Hand-Crocheting a Single Line",
        categories: [categories.fiberArts],
        image: {
            src: "/sample-blogs/hand-crochet.jpeg",
            alt: "Hand-Croched chain."
        },
        description: "I wanted to see what I could make with just my hands and some soft yarn. I started with one long line of stitches. It felt like making a colorful rope. The line got longer and longer with every loop. I wrapped it around my arm to see how long it was. It wasn't a big project, but it showed me that even one little line can be the start of something amazing.",
        content: `
        <div class="blog-figure">
            <img src="/sample-blogs/hand-crochet.jpeg" alt="Hand-Croched chain." class="blog-img" />
            <p class="blog-img-caption"></p>
        </div>
        
        <p class="blog-p">I wanted to see what I could make with just my hands and some soft yarn.</p>

        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/hand-crochet1.jpeg" alt="Hand crocheted single line." />
            <p class="blog-img-caption">Start with a knot.</p>
        </div>
        
        <p class="blog-p">I started with one long line of stitches.</p>
        
        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/hand-crochet2.jpeg" alt="Hand crocheted single line." />
            <p class="blog-img-caption">Pinch and pull a loop through the existing loop.</p>
        </div>
        
        <p class="blog-p">It felt like making a colorful rope. The line got longer and longer with every loop.</p>
        
        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/hand-crochet3.jpeg" alt="Hand crocheted single line." />
            <p class="blog-img-caption">Keep going until you have a chain.</p>
        </div>

        <p class="blog-p">I wrapped it around my arm to see how long it was. It wasn't a big project, but it showed me that even one little line can be the start of something amazing.</p>
        `,
        hearts: 2,
        publishedAt: "2026-07-25",
    },
    {
        id: 3,
        slug: "hand-weaving",
        title: "Hand Weaving with a Cardboard Loom",
        categories: [categories.fiberArts, categories.builds],
        image: {
            src: "/sample-blogs/weaving.jpeg",
            alt: "Hand weaving yarn fabric with a cardboard loom."
        },
        description: "I found an old piece of cardboard and turned it into a weaving loom. Then I picked lots of colorful yarn. I wove the yarn over and under until it looked like a tiny blanket. Every new color made the pattern even more fun. When I was finished, I held up my little weaving and felt proud. It's amazing what you can make with a little cardboard and a big imagination.",
        content: `
        <div class="blog-figure">
            <img src="/sample-blogs/weaving.jpeg" alt="Hand weaving yarn fabric with a cardboard loom." class="blog-img" />
            <p class="blog-img-caption"></p>
        </div>
        
        <p>I found an old piece of cardboard and turned it into a weaving loom. Then I picked lots of colorful yarn.</p>
        
        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/weaving2.jpeg" alt="Hand weaving with a cardboard loom." />
            <p class="blog-img-caption">It can be difficult at first, but I figured it out.</p>
        </div>
        
        <p>I wove the yarn over and under until it looked like a tiny blanket. Every new color made the pattern even more fun. When I was finished, I held up my little weaving and felt proud. It's amazing what you can make with a little cardboard and a big imagination.</p>
        `,
        hearts: 8,
        publishedAt: "2026-07-25",
    },
    {
        id: 4,
        slug: "drawing-three-flowers",
        title: "Drawing 3 Flowers",
        categories: [categories.artwork],
        image: {
            src: "/sample-blogs/flower.jpeg",
            alt: "Hand-drawn flower."
        },
        description: "I grabbed my paper and some crayons to draw flowers. The first flower was big and round. The second one had pointy petals. The third flower was tiny, but it was my favorite. I colored them red, yellow, and purple. Then I added green stems and a bright blue sky. My picture looked like a happy garden, and it made me feel like spring had come inside my house.",
        content: `
        <div class="blog-figure">
            <img src="/sample-blogs/flower.jpeg" alt="Hand-drawn flower." class="blog-img" />
            <p class="blog-img-caption"></p>
        </div>
        
        <p>I grabbed my paper and some crayons to draw flowers. The first flower was big and round.</p>
        
        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/flower2.jpeg" alt="Hand drawn flower." />
            <p class="blog-img-caption">It's always good to use a reference. I saw a picture of a flower nearby.</p>
        </div>
        
        <p>The second one had pointy petals.</p>
        
        <div class="blog-figure">
            <img class="blog-img" src="/sample-blogs/flower3.jpeg" alt="Hand drawn flower." />
            <p class="blog-img-caption"></p>
        </div>
        
        <p>The third flower was tiny, but it was my favorite.</p>
        
        <figure class="blog-figure">
            <img class="blog-img" src="/sample-blogs/flower.jpeg" alt="Hand drawn flower." />
            <p class="blog-img-caption"></p>
        </figure>

        <p>I colored them red, yellow, and purple. Then I added green stems and a bright blue sky. My picture looked like a happy garden, and it made me feel like spring had come inside my house.</p>
        `,
        hearts: 4,
        publishedAt: "2026-07-25",
    },
    {
        id: 5,
        slug: "painting-a-wood-post-like-an-american-flag",
        title: "Painting a Wood Post Like an American Flag",
        categories: [categories.artwork, categories.builds],
        image: {
            src: "/sample-blogs/painting.jpeg",
            alt: "Painting a wooden post in the style of the American flag."
        },
        description: "I found a small wood post that needed some color. I painted the top blue and added little white stars. Then I painted red and white stripes all the way down. I had to be careful to keep the lines nice and straight. When the paint dried, it looked bright and cheerful. I put it in the yard, and it reminded me that homemade decorations can make any place feel special.",
        content: `
        <div class="blog-figure">
            <img src="/sample-blogs/painting.jpeg" alt="Painting a wooden post in the style of the American flag." class="blog-img" />
            <p class="blog-img-caption"></p>
        </div>
        
        <p>I found a small wood post that needed some color. I painted the top blue and added little white stars. Then I painted red and white stripes all the way down. I had to be careful to keep the lines nice and straight. When the paint dried, it looked bright and cheerful. I put it in the yard, and it reminded me that homemade decorations can make any place feel special.</p>
        `,
        hearts: 5,
        publishedAt: "2026-07-25",
    },
]
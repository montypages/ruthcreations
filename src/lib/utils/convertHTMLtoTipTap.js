import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

const html = 
       `
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
        `
        ;

const json = generateJSON(html, [
	StarterKit,
        Image
]);


console.log(JSON.stringify(json, null, 2));
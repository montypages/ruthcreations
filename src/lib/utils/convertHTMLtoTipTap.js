import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';

const html = `
        
        <p>I found a small wood post that needed some color. I painted the top blue and added little white stars. Then I painted red and white stripes all the way down. I had to be careful to keep the lines nice and straight. When the paint dried, it looked bright and cheerful. I put it in the yard, and it reminded me that homemade decorations can make any place feel special.</p>
        `;

const json = generateJSON(html, [
	StarterKit
]);


console.log(JSON.stringify(json, null, 2));
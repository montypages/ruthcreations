import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import Figure from "$lib/tiptap/Figure";

export function tiptapToHTML(content) {
    return generateHTML(content, [
        StarterKit,
        Figure
    ]);
}

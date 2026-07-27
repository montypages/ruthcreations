import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import Image from "@tiptap/extension-image";

export function tiptapToHTML(content) {
    return generateHTML(content, [
        StarterKit,
        Image
    ]);
}
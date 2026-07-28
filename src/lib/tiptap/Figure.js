import Image from '@tiptap/extension-image';

const Figure = Image.extend({

	addAttributes() {
		return {
			...this.parent?.(),

			caption: {
				default: ''
			}
		};
	},

	renderHTML({ HTMLAttributes }) {

		const { caption, ...imgAttrs } = HTMLAttributes;

		return [
			'figure',
			{
				class: 'blog-figure'
			},

			[
				'img',
				{
					...imgAttrs,
					class: 'blog-img'
				}
			],

			[
				'figcaption',
				{
					class: 'blog-img-caption'
				},
				caption
			]
		];
	}

});

export default Figure;
import { supabase } from "$lib/supabase/supabaseClient";

function formatCategory(category) {
    return {
        ...category,
        img: {
            src: category.img_src,
            alt: category.name
        }
    }
}

export async function getCategories() {
    const { data: categories, error } = await supabase.from('categories').select('*');

    if(error) {
        console.error(error);
        return {
            categories: []
        }
    }

    const formattedCategories = categories.map(formatCategory);

    return formattedCategories;
}

export async function getCategoriesBySlug(slug) {
    const { data: category, error } = await supabase.from('categories').select('*').eq('slug', slug).single();

    if(error) {
        throw error;
    }

    const formattedCategory = formatCategory(category);

    return formattedCategory;
}
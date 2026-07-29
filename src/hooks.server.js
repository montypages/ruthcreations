import { redirect } from '@sveltejs/kit';
import { createSupabaseServer } from '$lib/supabase/server';

export async function handle({ event, resolve }) {
	event.locals.supabase = createSupabaseServer(event);

	const {
		data: { session }
	} = await event.locals.supabase.auth.getSession();

	event.locals.session = session;
	event.locals.user = session?.user ?? null;

	// const {
	// 	data: { user }
	// } = await event.locals.supabase.auth.getUser();

	// event.locals.user = user ?? null;

	if (event.url.pathname.startsWith('/admin') && !event.locals.user) {
		throw redirect(303, '/login');
	}

	return resolve(event);
}

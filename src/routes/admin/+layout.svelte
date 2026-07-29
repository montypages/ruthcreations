<script>
import { invalidateAll, goto } from '$app/navigation';
import { supabase } from '$lib/supabase/supabaseClient';
import Button from '$lib/components/ui/Button.svelte';

	let { data, children } = $props();

	const { user } = data;

	async function logout() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error(error);
			return;
		}

		await invalidateAll();

		await goto('/login');
	}
</script>

<header>
	<div class="signed-in">
		Signed in as {user.email}
	</div>

	<Button onclick={logout} btnText="Sign Out" btnSize="var(--size--1)" />
</header>

{@render children()}

<style>
	.signed-in {
		margin-bottom: 0.5em;
	}
</style>

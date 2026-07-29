<script>
	import { supabase } from '$lib/supabase/supabaseClient';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let error = $state('');
	let loading = $state(false);

	async function login(event) {
		event.preventDefault();

		error = '';
		loading = true;

		const { error: authError } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		loading = false;

		if (authError) {
			error = authError.message;
			return;
		}

		await goto('/admin');
	}
</script>

<div class="container">
	<h1>Login</h1>

	<form onsubmit={login}>
		<label for="email">
			Email
			<input type="email" id="email" name="email" autocomplete="email" bind:value={email} />
		</label>

		<label for="password">
			Password
			<input
				type="password"
				id="password"
				name="password"
				autocomplete="current-password"
				bind:value={password}
			/>
		</label>

		<button disabled={loading}>
			{loading ? 'Signing In...' : 'Sign In'}
		</button>

		<a href="#">forgot password</a>
	</form>

	{#if error}
		<p class="error">{error}</p>
	{/if}
</div>

<style>
	form {
		display: grid;
		gap: 1rem;
		width: min(90%, 480px);
		margin: 0 auto;
	}

	label {
		display: grid;
	}

	a {
		color: var(--clr-secondary);
	}

	.error {
		color: rgb(103, 0, 0);
		text-align: center;
	}
</style>

'use server';

import { auth, signIn, signOut } from '@/app/_lib/auth';

export async function signInAction() {
  await signIn('google', { redirectTo: '/' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/login' });
}

export async function getUserAction() {
  const session = await auth();
  return session?.user;
}

import { cookies } from 'next/headers';
import { USER_COOKIE_KEY } from './constants';

type UserInfo = {
  username: string
  jobTitle: string
} | null

export async function getUserCookieValue(): Promise<UserInfo> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get(USER_COOKIE_KEY)?.value

  if (!userCookie) {
    return null
  }

  try {
    const user = JSON.parse(userCookie);
    const username = user?.username;
    const jobTitle = user?.jobTitle;

    return { username, jobTitle };

  } catch {
    console.error('Error parsing user cookie:', userCookie);
    return null;
  }
}

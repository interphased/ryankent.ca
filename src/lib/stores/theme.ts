import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const defaultValue: Theme = browser && window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';
const initialValue = browser ? window.localStorage.getItem('theme') as Theme ?? defaultValue : defaultValue;

export const theme = writable<Theme>(initialValue);

theme.subscribe((theme: Theme) => {
  if (!browser) {
    return;
  }

  localStorage.setItem('theme', theme);
  theme === 'dark' && document.documentElement.setAttribute('data-theme', 'dark');
  theme === 'light' && document.documentElement.setAttribute('data-theme', 'light');
});

export const toggleTheme = () => {
  theme.update((theme) => {
    return theme === 'light' ? 'dark' : 'light';
  });
}

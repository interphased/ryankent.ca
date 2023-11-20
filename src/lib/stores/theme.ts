import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const defaultValue: Theme = browser && window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';
const initialValue = browser ? window.localStorage.getItem('theme') as Theme ?? defaultValue : defaultValue;

export const theme = writable<Theme>(initialValue);

if (browser) {
  if (initialValue === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

theme.subscribe((value: Theme) => {
  if (!browser) {
    return;
  }

  localStorage.setItem('theme', value);

  if (value === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

export const toggleTheme = () => {
  theme.update((t) => {
    if (t === 'light') {
      return 'dark';
    }
    return 'light';
  });
}

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'false';
const initialValue = browser ? window.localStorage.getItem('darkMode') ?? defaultValue : defaultValue;

export const darkMode = writable<string>(initialValue);

if (browser) {
  if (initialValue === 'true') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }
}

darkMode.subscribe((value) => {
  if (browser) {
    localStorage.setItem('darkMode', String(value));
    if (value === 'true') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
});

export const toggleDarkMode = () => {
  darkMode.update((d) => {
    if (d === 'true') {
      return 'false';
    }
    return 'true';
  });
}

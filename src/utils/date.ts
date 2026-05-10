const idFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const idFormatterShort = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return idFormatter.format(date);
}

export function formatDateShort(date: Date): string {
  return idFormatterShort.format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString();
}

export function getDayName(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(date);
}

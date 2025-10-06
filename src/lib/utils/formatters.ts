// lib/utils/formatters.ts

/**
 * ---- GENERAL NUMBER & CURRENCY ----
 */
export function formatCurrency(
  value: number | null | undefined,
  currency: string = 'USD',
  locale: string = 'en-US',
  options: Intl.NumberFormatOptions = {}
): string {
  if (value == null || isNaN(value)) return '$0.00'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(value)
}

export function formatNumber(
  value: number | null | undefined,
  locale: string = 'en-US',
  options: Intl.NumberFormatOptions = {}
): string {
  if (value == null || isNaN(value)) return '0'
  return new Intl.NumberFormat(locale, options).format(value)
}

/**
 * ---- DATE & TIME ----
 */
export function formatDate(
  date: Date | string | null | undefined,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    ...options,
  }).format(d)
}

export function formatDateTime(
  date: Date | string | null | undefined,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    ...options,
  }).format(d)
}

export function formatTime(
  date: Date | string | null | undefined,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    ...options,
  }).format(d)
}

/**
 * ---- STRING UTILITIES ----
 */
export function truncate(
  str: string,
  max: number = 80,
  suffix: string = '…'
): string {
  if (!str) return ''
  return str.length > max ? str.slice(0, max).trimEnd() + suffix : str
}

export function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function titleCase(str: string): string {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * ---- RELATIVE TIME ----
 */
export function timeAgo(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''
  const diff = (Date.now() - d.getTime()) / 1000
  const abs = Math.abs(diff)
  const units: [number, string][] = [
    [60, 'seconds'],
    [3600, 'minutes'],
    [86400, 'hours'],
    [604800, 'days'],
    [2629746, 'weeks'],
    [31556952, 'months'],
    [315569520, 'years'],
  ]
  let unit = 'seconds'
  let value = abs

  for (const [sec, label] of units) {
    if (abs < sec) break
    value = abs / sec
    unit = label
  }

  const rounded = Math.floor(value)
  return diff >= 0 ? `${rounded} ${unit} ago` : `in ${rounded} ${unit}`
}
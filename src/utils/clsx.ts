import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const clsxm = (...values: ClassValue[]) => twMerge(clsx(values))

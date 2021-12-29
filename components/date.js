import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return 10 //<time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

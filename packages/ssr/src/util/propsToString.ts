export function propsToString(props: Record<string, any>) {
  const handledAttributes = []

  for (const [key, value] of Object.entries(props)) {
    if (value === false || value == null)
      continue

    let attribute = key

    if ((key.startsWith('data-') || value !== true) && value !== '')
      attribute += `="${String(value).replace(/"/g, '&quot;')}"`

    handledAttributes.push(attribute)
  }

  return handledAttributes.length > 0 ? ` ${handledAttributes.join(' ')}` : ''
}

const stringToColor = (string: string) => {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

export const stringAvatar = (name: string) => {
  const isFullName = name.includes(' ')
  const firstLetter = name.split(' ')[0][0]
  const secondLetter = isFullName ? name.split(' ')[1][0] : ''
  const lettersToShow = `${firstLetter}${secondLetter}`.toUpperCase()
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: lettersToShow,
  }
}

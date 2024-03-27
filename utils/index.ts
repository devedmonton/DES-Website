export function randomize<T>(data: T[], limit?: number) {
  // If limit is provided and it equals the length of the array, return the original array
  if (limit !== undefined && limit >= 0 && limit === data.length) {
    return data
  }

  const shuffledArray = [...data]

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  // If limit is specified, return only the specified number of elements
  if (limit && limit < shuffledArray.length) {
    return shuffledArray.slice(0, limit)
  }

  return shuffledArray
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export function iconify(icon: string) {
  if (icon === 'slack') {
    return 'i-logos-slack-icon'
  }
  if (icon === 'instagram') {
    return 'i-ph-instagram-logo'
  }
  if (icon === 'facebook') {
    return 'i-logos-facebook'
  }
  if (icon === 'twitter') {
    return 'i-logos-twitter'
  }
  if (icon === 'github') {
    return 'i-logos-github-icon'
  }
  if (icon === 'youtube') {
    return 'i-logos-youtube-icon'
  }
  if (icon === 'discord') {
    return 'i-logos-discord-icon'
  }
  if (icon === 'twitch') {
    return 'i-logos-twitch'
  }
  if (icon === 'linkedin') {
    return 'i-logos-linkedin-icon'
  }
  if (icon === 'x') {
    return 'i-simple-icons-x'
  }


  return `i-logos-${icon}`
}
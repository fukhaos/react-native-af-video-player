export const checkSource = (uri) => {
  if(typeof uri === 'string') {
    if(uri.startsWith('http://') || uri.startsWith('https://')) {
      return { source: { uri } }
    }
    return { source: { uri: 'http://' + uri } }
  }

  return { source: uri }
}

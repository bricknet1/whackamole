export const increment = (number) => {
  return {
    type: 'SCOREUP',
    payload: number
  }
}

export const clockUp = (number) => {
  return {
    type: 'CLOCKUP',
    payload: number
  }
}

export const clockDown = (number) => {
  return {
    type: 'CLOCKDOWN',
    payload: number
  }
}

export const clockSet = (number) => {
  return {
    type: 'CLOCKSET',
    payload: number
  }
}

export const healthUp = (number) => {
  return {
    type: 'HEALTHUP',
    payload: number
  }
}

export const healthDown = (number) => {
  return {
    type: 'HEALTHDOWN',
    payload: number
  }
}

export const healthSet = (number) => {
  return {
    type: 'HEALTHSET',
    payload: number
  }
}

export const attackValueSet = (number) => {
  return {
    type: 'ATTACKVALUESET',
    payload: number
  }
}

export const hole1up = (settings) => {
  return {
    type: 'HOLE1UP',
    payload: settings
  }
}

export const hole1hit = (number) => {
  return {
    type: 'HOLE1HIT',
    payload: number
  }
}
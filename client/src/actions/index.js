export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  }
}

export const decrement = (number) => {
  return {
    type: 'DECREMENT',
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
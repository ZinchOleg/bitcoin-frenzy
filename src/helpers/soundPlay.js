import { Howl } from "howler"

export const soundPlay = (src, vol = 1) => {
  const sound = new Howl({ src, volume: vol})
  sound.play()
}
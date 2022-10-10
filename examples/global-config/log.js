import { log as logzy, u, n } from 'logzy'

const log = {
  ...logzy,
  info: v => console.log(u('bold', u('cyan', `> ${v}`))),
  success: v => console.log(u('bold', u('lime', `✔ ${v}`))),
  error: v => console.log(u('bold', u('rose', `✖ ${v}`))),
  details: v => console.log(`  ${v}`),
  myGlobalPreset: v => console.log(u('underline', u('lime', v)) + n)
}

export { log, u, n }

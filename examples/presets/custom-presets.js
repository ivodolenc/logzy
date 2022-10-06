import { log, u } from 'logzy'

log.details = v => console.log(`  ${v}`)
log.info = v => console.log(u('bold', u('cyan', `> ${v}`)))
log.success = v => console.log(u('bold', u('lime', `✔ ${v}`)))
log.warn = v => console.log(u('bold', u('yellow', `! ${v}`)))
log.error = v => console.log(u('bold', u('rose', `✖ ${v}`)))

log.details('logzy is fire')
log.info('logzy is fire')
log.success('logzy is fire')
log.warn('logzy is fire')
log.error('logzy is fire')

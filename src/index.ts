import * as yargs from 'yargs';
import * as QRCode from 'qrcode-terminal';

const argv = yargs
  .command('generate <text>', 'Generate a QR code', {
    text: {
      describe: 'Text to encode',
      type: 'string',
      demandOption: true
    },
    size: {
      alias: 's',
      describe: 'QR code size (not applicable for terminal output)',
      type: 'number',
      default: 1
    }
  })
  .help()
  .argv;

if (argv._.includes('generate') && typeof argv.text === 'string') {
  QRCode.generate(argv.text, { small: argv.size <= 1 });
} else {
  console.log('Invalid command. Use --help for usage.');
}

import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';
import IncomeRepository from './repository/IncomeRepository.js';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();
terminal.initialize();

const incomeRepository = new IncomeRepository();

const service = new IncomeService({
  incomeRepository
});

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
    // TODO: Looks like you have some work to do right here :)
    terminal.draftTable()

    const answer = await terminal.readline(
      'Qual seu cargo e pretensão salarial em BRL? (position; expectation)\n Insira: '
    )

    if(answer === VOCABULARY.STOP) {
      terminal.close()
      console.info('Finish terminal instance')
      return
    }

    const income = await service.generateIncomeFromString(answer);

    terminal.addDataToPrint(income.format());

    terminal.printSuccess('🎉 Income generated successfully!');
  } catch (error) {
    // TODO: Don't forget of handling some errors beautifully ;)
    terminal.printError('🚨 Error: ' + error.message);
  }
  return mainLoop();
}

await mainLoop();

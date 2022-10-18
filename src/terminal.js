import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import chalk from 'chalk';
import readline from 'readline';
import terminalConfig from './config/terminal.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    DraftLog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  addDataToPrint(item) {
    this.data.push(item);
  }

  draftTable() {
    const table = chalkTable(TABLE_OPTIONS, this.data);
    this.print = console.draft(table);
  }

  printSuccess(message) {
    this.print(chalk.green(message));
  }

  printError(message) {
    this.print(chalk.red(message));
  }

  close() {
    this.terminal.close();
  }

  async readline(question) {
    return new Promise((resolve) => {
      this.terminal.question(question, (answer) => {
        resolve(answer);
      })
    })
  }

}

export default CustomTerminal;

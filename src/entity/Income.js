import languageConfig from '../config/language.js';

const defaultLanguage = languageConfig.default;

class Income {
  constructor({
    position,
    expectation,
    conversion01,
    conversion02,
    conversion03,
  }) {
    this.position = position;
    this.expectation = expectation || { currency: 'BRL', language: 'pt-BR' };
    this.conversion01 = conversion01 || { currency: 'USD', language: 'en-US' };
    this.conversion02 = conversion02 || { currency: 'EUR', language: 'en-GB' };
    this.conversion03 = conversion03 || { currency: 'RUB', language: 'ru-RU' };
  }

  format() {
    return {
      id: this.id,
      position: this.position,
      expectation: Income.formatCurrency(this.expectation),
      conversion01: Income.formatCurrency(this.conversion01),
      conversion02: Income.formatCurrency(this.conversion02),
      conversion03: Income.formatCurrency(this.conversion03),
    };
  }

  static formatCurrency({ currency, value, language }) {
    const _language = language || defaultLanguage;

    return new Intl.NumberFormat(_language, {
      style: 'currency',
      currency,
    }).format(value);
  }
}

export default Income;

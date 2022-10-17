const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str == null) {
    str = 'null';
  }
  if (options.addition === null) {
    options.addition = 'null';
  }

  let additional = [];
  if (!options.additionRepeatTimes && !options.repeatTimes) {
    return str + options.addition;
  }

  let main;
  if (!options.additionRepeatTimes) {
    if (!options.addition) {
      main = `${str}`;
    } 
    else {
      main = `${str}` + options.addition;
    }
  } 
  else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additional.push(`${options.addition}`);
    }
    additional = additional.join(options.additionSeparator || '|');
    main = `${str}` + additional;
  }

  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(main);
  }

  return result.join(options.separator || '+');
}

module.exports = {
  repeater
};

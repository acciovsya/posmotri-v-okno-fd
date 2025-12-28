/*
конфиг взят из теории по форматированию и линтингу
и немного изменен в соответствии с чек-листом / тз
*/

module.exports = {
  rules: {
    'function-url-quotes': 'never',
    'property-no-unknown': true,
    'no-descending-specificity': true,
    'import-notation': 'url',
    'shorthand-property-no-redundant-values': true,

    // добавлены исключения
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
        except: ['first-nested'],
      },
    ],
    'at-rule-empty-line-before': 'always',

    'block-no-empty': true,
    'no-duplicate-selectors': true,

    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'media-feature-name-no-unknown': true,
    'no-invalid-position-at-import-rule': true,

    'selector-type-case': 'lower',
    // можно было бы настроить паттерн с помощью регекса,
    // но в данном прокте уже проименованы все классы
    'selector-class-pattern': null,

    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-no-invalid-hex': true,
    'color-hex-length': 'short',
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

    'length-zero-no-unit': true,
    'font-family-name-quotes': 'always-where-recommended',

    'declaration-no-important': true,
    'no-unknown-animations': true,
    'comment-no-empty': true,
  },
};

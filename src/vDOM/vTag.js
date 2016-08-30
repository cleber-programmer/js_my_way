/* global Rex */
/* jshint esversion: 6 */

Rex('vTag', ({ reduce, vNode }) =>

  /**
   * Colecao de todos Elementos HTML
   */
  reduce([

    'a',            'b',            'canvas',       'data',         'em',         'fieldset',       'h1',           'i',          'kbd',        'label',        'main',
    'abbr',         'base',         'caption',      'datalist',     'embed',      'figcaption',     'h2',           'iframe',     'keygen',     'legend',       'map',
    'acronym',      'basefont',     'center',       'dd',                         'figure',         'h3',           'img',                      'li',           'mark',
    'address',      'bdi',          'cite',         'del',                        'font',           'h4',           'input',                    'link',         'marquee',
    'applet',       'bdo',          'code',         'details',                    'footer',         'h5',           'ins',                      'listing',      'menu',
    'area',         'bgsound',      'col',          'dfn',                        'form',           'h6',           'isindex',                                  'meta',
    'article',      'big',          'colgroup',     'dir',                        'frame',          'head',                                                     'meter',
    'aside',        'blink',        'command',      'div',                        'frameset',       'header',
    'audio',        'blockquote',                   'dl',                                           'hgroup',
                    'body',                         'dt',                                           'hr',
                    'br',                                                                           'html',
                    'button',


    'nav',          'object',       'p',            'q',            'rp',         's',              'table',        'u',          'var',        'wbr',          'xmp',
    'nobr',         'ol',           'param',                        'rt',         'samp',           'tbody',        'ul',         'video',
    'noframes',     'optgroup',     'plaintext',                    'ruby',       'script',         'td',
    'noscript',     'option',       'pre',                                        'section',        'textarea',
                    'output',       'progress',                                   'select',         'tfoot',
                                                                                  'small',          'th',
                                                                                  'source',         'thead',
                                                                                  'spacer',         'time',
                                                                                  'span',           'title',
                                                                                  'strike',         'tr',
                                                                                  'strong',         'track',
                                                                                  'style',          'tt',
                                                                                  'sub',
                                                                                  'summary',
                                                                                  'sup',

  ],

  /**
   * Criacao de helpers para facilitar a utilizacao do hScript e/ou melhorar
   * a leitura do codigo
   */
  (previous, tagName) => {
    return (previous[tagName] = (property, childNodes) => vNode(tagName, property, childNodes)), previous; }, {}));
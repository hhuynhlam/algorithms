const graph = {
  vertices: [
    {
      value: 'r',
      adjacent: ['s', 'v', 'w'],
    },
    {
      value: 's',
      adjacent: ['r', 'w'],
    },
    {
      value: 't',
      adjacent: ['u', 'w', 'x'],
    },
    {
      value: 'u',
      adjacent: ['t', 'x', 'y'],
    },
    {
      value: 'v',
      adjacent: ['r'],
    },
    {
      value: 'w',
      adjacent: ['r', 's', 't', 'x'],
    },
    {
      value: 'x',
      adjacent: ['t', 'u', 'w', 'y'],
    },
    {
      value: 'y',
      adjacent: ['u', 'x'],
    },
  ],
};

module.exports = graph;

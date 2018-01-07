const bt = require('./serializeAndDeserializeBinaryTree');

describe('#serializeAndDeserializeBinaryTree', () => {
  const tree = new bt.TreeNode(
    'a',
    new bt.TreeNode('b', undefined, undefined),
    new bt.TreeNode(
      'c',
      new bt.TreeNode(
        'd',
        new bt.TreeNode('f', undefined, undefined),
        new bt.TreeNode('g', undefined, undefined)
      ),
      new bt.TreeNode(
        'e',
        new bt.TreeNode(
          'h',
          new bt.TreeNode('i', undefined, undefined),
          new bt.TreeNode(
            'j',
            new bt.TreeNode('k', undefined, undefined),
            undefined
          )
        ),
        undefined
      )
    )
  );

  const data = 'a,b,,,c,d,f,,,g,,,e,h,i,,,j,k,,,,';

  it('Case 1', () => {
    expect(tree)
      .toEqual(bt.deserialize(bt.serialize(tree)));
  });

  it('Case 2', () => {
    expect(data)
      .toEqual(bt.serialize(bt.deserialize(data)));
  });
});

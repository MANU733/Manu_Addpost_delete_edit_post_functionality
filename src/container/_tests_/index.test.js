import { mapStateToProps, mapsDispatchToProps } from '../createUser';

const store = {
    inputTextName:"manu"
};

test('mapStateToProps', () => {
  expect(mapStateToProps(store)).toBeTruthy();
});

test('mapsDispatchToProps', () => {
  const data = mapsDispatchToProps((a, b) => (a, b));
  expect(data.addPost('manu')).toBeUndefined();

});

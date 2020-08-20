import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({});
});

it('should login user', () => {
  const uid = '123abc';
  const action = {
    type: 'LOGIN',
    uid,
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    uid,
  });
});

it('should logout user', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ uid: 'notUid' }, action);
  expect(state).toEqual({});
});

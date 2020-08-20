import { login, logout } from '../../actions/auth';

it('should setup login action', () => {
  const uid = '123abc';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

it('should setup logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});

import User from '../models/User';

test('it should be ok', () => {
   const user = new User();

   user.name = 'Vito';

   expect(user.name).toEqual('Vito');
})
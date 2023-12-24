import { DateTime } from 'luxon';
import { User } from '../shared/models/user.model';

export function getMockUserList(): User[] {
  const mockUserList = [
    {
      userId: generateRandomUserId(),
      firstName: 'Hedi',
      lastName: 'Bouazza',
      email: 'test@test.com',
      occupation: 'student',
      bio: 'welcome',
      birthDate: DateTime.fromISO('2000-01-01'),
    },
  ];

  return mockUserList;
}

function generateRandomUserId(length: number = 25): string {
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += Math.floor(Math.random() * 10);
  }
  return userId;
}

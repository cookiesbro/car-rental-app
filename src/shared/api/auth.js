const users = [
  {
    id: '1',
    name: 'Ivan Petrov',
    email: 'test@test.com',
    password: 'password123',
  },
  {
    id: '2',
    name: 'Мария Сидорова',
    email: 'maria@test.com',
    password: 'password456',
  },
];

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    //имитация задержки сети в 1 секунду
    setTimeout(() => {
      //ищем пользователя в нашей БД
      const user = users.find((u) => u.email === email);
      // проверяем
      if (user && user.password === password) {
        // успешный вход - создаем фальшивый токен
        const token = `fake-jwt-token-for-${user.name.toLowerCase().replace(' ', '-')}`;
        //отдаем на фронт токен и инфу о пользователе. !никогда не отправляем пароль обратно
        resolve({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        //ошибка входа - отклоняем промис
        reject(new Error('Неверный email ии пароль'));
      }
    }, 1000);
  });
};

export const register = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.find((u) => u.email === email)) {
        return reject(new Error('Пользователь с таким email уже существует'));
      }

      const newUser = {
        id: String(Date.now()),
        name,
        email,
        password,
      };
      users.push(newUser);

      // Сразу логиним нового пользователя
      const token = `fake-jwt-token-for-${newUser.name.toLowerCase().replace(' ', '-')}`;
      resolve({
        token,
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
    }, 1000);
  });
};

import { useAuth } from '@/shared/lib/context/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Профиль пользователя</h1>
      {/* 
        Мы используем `user?.name` (опциональная цепочка).
        Это на случай, если по какой-то причине user окажется null,
        чтобы приложение не "упало".
      */}
      <p>
        <strong>Имя:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
};

export default ProfilePage;

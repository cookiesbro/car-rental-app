const mockCars = [
  {
    id: 1,
    name: 'Ferrari F40',
    year: 1990,
    price: 250000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Ferrari+F40',
    details:
      'Один из самых культовых суперкаров всех времен - среднемоторный двухдверный заднеприводный, имеющий кузов типа берлинетта. Производился Ferrari с 1987 по 1992 годы.',
  },
  {
    id: 2,
    name: 'Porsche 911 (993) Turbo',
    year: 1995,
    price: 150000,
    imageUrl:
      'https://placehold.co/300x180/EFEFEF/333?text=Porsche+911(993)+Turbo',
    details:
      'Четвёртое поколение 911 и последняя машина компании Porsche, построенная в концепции, предложенной ещё в тридцатых годах самим Фердинандом Порше: заднемоторная компоновка, оппозитный мотор воздушного охлаждения.',
  },
  {
    id: 3,
    name: 'Dodge Viper GTS',
    year: 1996,
    price: 140000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Dodge+Viper+GTS',
    details:
      'Cпортивный автомобиль компании Dodge. Производство двухместного автомобиля началось в 1992 году. Прародителем стал Dodge Stealth, он же Mitsubishi 3000GT.',
  },
  {
    id: 4,
    name: 'McLaren F1',
    year: 1998,
    price: 1200000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=McLaren+F1',
    details: 'Легендарный суперкар с центральным расположением водительского сиденья и двигателем V12 от BMW. Долгое время считался самым быстрым серийным автомобилем в мире.',
  },
  {
    id: 5,
    name: 'Lamborghini Diablo SV',
    year: 1997,
    price: 220000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Lamborghini+Diablo+SV',
    details: 'Икона 90-х, преемник Countach. Версия SV (Super Veloce) была более мощной и ориентированной на трек заднеприводной моделью.',
  },
  {
    id: 6,
    name: 'Jaguar XJ220',
    year: 1992,
    price: 450000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Jaguar+XJ220',
    details: 'Британский суперкар, который на момент своего выпуска был самым быстрым серийным автомобилем. Оснащался двигателем V6 с двойным турбонаддувом.',
  },
  {
    id: 7,
    name: 'Bugatti EB110 SS',
    year: 1992,
    price: 550000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Bugatti+EB110+SS',
    details: 'Возрождение марки Bugatti в 90-х. Невероятно технологичный для своего времени автомобиль с двигателем V12 с четырьмя турбинами и полным приводом.',
  },
  {
    id: 8,
    name: 'Porsche 959',
    year: 1988,
    price: 900000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Porsche+959',
    details: 'Технологическое чудо 80-х, созданное для ралли Группы B. Оснащался сложной системой полного привода и двигателем с двойным турбонаддувом.',
  },
  {
    id: 9,
    name: 'Acura NSX',
    year: 1991,
    price: 80000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Acura+NSX',
    details: 'Японский ответ Ferrari. Среднемоторный спорткар, в разработке шасси которого принимал участие гонщик Айртон Сенна. Известен своей надежностью и удобством.',
  },
  {
    id: 10,
    name: 'Ferrari F50',
    year: 1996,
    price: 1500000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Ferrari+F50',
    details: 'Создан к 50-летию компании. Двигатель V12 был разработан на основе мотора для Формулы-1. Кузов типа "тарга" со съемной крышей.',
  },
  {
    id: 11,
    name: 'Lamborghini Countach 25th Anniversary',
    year: 1989,
    price: 300000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Lamborghini+Countach',
    details: 'Финальная и самая известная версия легендарного Countach. Дизайн был доработан Горацио Пагани. Один из символов автомобильной эпохи 80-х.',
  },
  {
    id: 12,
    name: 'Ferrari Testarossa',
    year: 1987,
    price: 180000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Ferrari+Testarossa',
    details: 'Суперкар с 12-цилиндровым оппозитным двигателем. Стал иконой поп-культуры благодаря своему появлению в сериале "Полиция Майами".',
  },
  {
    id: 13,
    name: 'Vector W8',
    year: 1991,
    price: 450000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Vector+W8',
    details: 'Американский суперкар с футуристичным дизайном, вдохновленным аэрокосмической отраслью. Использовались передовые материалы и технологии.',
  },
  {
    id: 14,
    name: 'Mercedes-Benz CLK GTR',
    year: 1998,
    price: 1800000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Mercedes-Benz+CLK+GTR',
    details: 'Омологационная версия гоночного автомобиля для чемпионата FIA GT. Было выпущено всего 25 дорожных экземпляров.',
  },
  {
    id: 15,
    name: 'Aston Martin V8 Vantage Le Mans',
    year: 1999,
    price: 350000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Aston+Martin+V8+Vantage',
    details: 'Британский "маслкар" в обличии суперкара. V8 Vantage был известен своей брутальной мощностью и роскошным интерьером. Версия Le Mans - прощальная и самая мощная.',
  },
  {
    id: 16,
    name: 'Lotus Esprit V8',
    year: 1996,
    price: 75000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Lotus+Esprit+V8',
    details: 'Поздняя версия знаменитого Esprit, впервые получившая двигатель V8 собственной разработки Lotus. Отличался превосходной управляемостью.',
  },
  {
    id: 17,
    name: 'Porsche 911 GT1 Straßenversion',
    year: 1997,
    price: 1600000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Porsche+911+GT1',
    details: 'Дорожная версия гоночного прототипа для Ле-Мана. Имел очень мало общего с обычным 911, среднемоторную компоновку и экстремальный дизайн.',
  },
  {
    id: 18,
    name: 'Cizeta-Moroder V16T',
    year: 1991,
    price: 650000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Cizeta-Moroder+V16T',
    details: 'Уникальный итальянский суперкар с 16-цилиндровым двигателем. Дизайн разработан Марчелло Гандини, автором Countach и Diablo.',
  },
  {
    id: 19,
    name: 'Nissan R390 GT1',
    year: 1998,
    price: 1000000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Nissan+R390+GT1',
    details: 'Дорожная версия гоночного автомобиля Nissan. Был построен всего один экземпляр, который хранится в музее компании.',
  },
  {
    id: 20,
    name: 'Ferrari 512 TR',
    year: 1992,
    price: 210000,
    imageUrl: 'https://placehold.co/300x180/EFEFEF/333?text=Ferrari+512+TR',
    details: 'Эволюция модели Testarossa. Были улучшены двигатель, подвеска и эргономика, что сделало автомобиль значительно более сбалансированным.',
  },
];

export const getCars = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCars);
    }, 1500); // Имитация задержки в 1 секунду
  });
};

export const getCarById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const car = mockCars.find((c) => c.id === parseInt(id, 10));
      if (car) {
        resolve(car);
      } else {
        reject(new Error('Автомобиль не найден'));
      }
    }, 1000);
  });
};

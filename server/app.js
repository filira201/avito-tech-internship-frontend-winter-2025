require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const ItemTypes = {
  REAL_ESTATE: "Недвижимость",
  AUTO: "Авто",
  SERVICES: "Услуги",
};

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory хранилище для объявлений
// let items = [];
let items = [
  // Недвижимость
  {
    id: 1,
    name: "Квартира в центре",
    description:
      "Просторная квартира в центре города Просторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре городаПросторная квартира в центре города",
    location: "Москва улица автозаводска 60",
    type: "Недвижимость",
    image:
      "https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg",
    propertyType: "Квартира",
    area: 100,
    rooms: 3,
    price: 15000000,
  },
  {
    id: 2,
    name: "Квартира на окраине",
    description: "Уютная квартира на окраине",
    location: "Ижевск",
    type: "Недвижимость",
    propertyType: "Квартира",
    area: 50,
    rooms: 2,
    price: 1000000,
  },
  {
    id: 3,
    name: "Дом в Подмосковье",
    description: "Просторный дом с участком",
    location:
      "МО улица автозаводска 60 улица автозаводска 60 улица автозаводска 60 улица автозаводска 60",
    type: "Недвижимость",
    propertyType: "Дом",
    area: 150,
    rooms: 4,
    price: 12000000,
  },
  {
    id: 4,
    name: "Апартаменты у моря",
    description: "Роскошные апартаменты с видом на море",
    location: "Сочи",
    type: "Недвижимость",
    propertyType: "Апартаменты",
    area: 80,
    rooms: 2,
    price: 18000000,
  },
  {
    id: 5,
    name: "Офис в бизнес-центре",
    description: "Современный офис в центре города",
    location: "СПб",
    type: "Недвижимость",
    propertyType: "Офис",
    area: 200,
    rooms: 5,
    price: 25000000,
  },
  {
    id: 6,
    name: "Таунхаус в пригороде",
    description: "Уютный таунхаус с садом",
    location: "Краснодар",
    type: "Недвижимость",
    propertyType: "Таунхаус",
    area: 120,
    rooms: 4,
    price: 8500000,
  },
  {
    id: 7,
    name: "Коттедж на берегу",
    description: "Элитный коттедж с видом на реку",
    location: "Самара",
    type: "Недвижимость",
    propertyType: "Коттедж",
    area: 200,
    rooms: 6,
    price: 22000000,
  },
  {
    id: 8,
    name: "1-комнатная квартира",
    description: "Квартира для студентов",
    location: "Томск",
    type: "Недвижимость",
    propertyType: "Квартира",
    area: 30,
    rooms: 1,
    price: 2000000,
  },

  // Авто
  {
    id: 9,
    name: "Toyota Camry",
    description: "Надежный автомобиль",
    location: "Москва",
    type: "Авто",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    mileage: 15000,
  },
  {
    id: 10,
    name: "BMW X5",
    description: "Мощный кроссовер",
    location: "СПб",
    type: "Авто",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMa5nc8TsQv49NV66I15S_E70CIlWUjxLCg&s",
    brand: "BMW",
    model: "X5",
    year: 2019,
    mileage: 40000,
  },
  {
    id: 11,
    name: "Mercedes-Benz E200",
    description: "Комфортный седан",
    location: "Казань",
    type: "Авто",
    brand: "Mercedes-Benz",
    model: "E200",
    year: 2021,
    mileage: 5000,
  },
  {
    id: 12,
    name: "Volkswagen Polo",
    description:
      "Экономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской автоЭкономичный городской авто",
    location: "Екатеринбург",
    type: "Авто",
    brand: "Volkswagen",
    model: "Polo",
    year: 2018,
    mileage: 60000,
  },
  {
    id: 13,
    name: "Audi A6",
    description: "Бизнес-класс с комфортом",
    location: "Москва",
    type: "Авто",
    brand: "Audi",
    model: "A6",
    year: 2020,
    mileage: 25000,
  },
  {
    id: 14,
    name: "Hyundai Solaris",
    description: "Популярный городской авто",
    location: "Челябинск",
    type: "Авто",
    brand: "Hyundai",
    model: "Solaris",
    year: 2017,
    mileage: 70000,
  },
  {
    id: 15,
    name: "Kia Sportage",
    description: "Просторный кроссовер",
    location: "Новосибирск",
    type: "Авто",
    brand: "Kia",
    model: "Sportage",
    year: 2021,
    mileage: 12000,
  },
  {
    id: 16,
    name: "Mazda CX-5",
    description: "Надежный японский кроссовер",
    location: "Краснодар",
    type: "Авто",
    brand: "Mazda",
    model: "CX-5",
    year: 2019,
    mileage: 35000,
  },
  {
    id: 17,
    name: "Lexus RX",
    description: "Премиальный кроссовер",
    location: "Москва",
    type: "Авто",
    brand: "Lexus",
    model: "RX",
    year: 2020,
    mileage: 18000,
  },

  // Услуги
  {
    id: 18,
    name: "Ремонт квартир",
    description: "Качественный ремонт",
    location: "Москва",
    type: "Услуги",
    serviceType: "Ремонт",
    experience: 5,
    cost: 50000,
  },
  {
    id: 19,
    name: "Курсы программированияКурсы программированияКурсы программирования",
    description:
      "Онлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScriptОнлайн-курсы Python и JavaScript",
    location: "ОнлайнОнлайнОнлайнОнлайнОнлайн",
    type: "Услуги",
    serviceType: "Обучение",
    experience: 3,
    cost: 10000,
  },
  {
    id: 20,
    name: "Доставка еды",
    description: "Быстрая доставка еды на дом",
    location: "Москва",
    type: "Услуги",
    serviceType: "Доставка",
    experience: 2,
    cost: 500,
  },
  {
    id: 21,
    name: "Ремонт автомобилей",
    description: "Профессиональный ремонт авто",
    location: "СПб",
    type: "Услуги",
    serviceType: "Ремонт авто",
    experience: 7,
    cost: 15000,
  },
  {
    id: 22,
    name: "Фотосессия",
    description: "Профессиональная фотосессия",
    location: "Москва",
    type: "Услуги",
    serviceType: "Фотосъемка",
    experience: 4,
    cost: 20000,
  },
  {
    id: 23,
    name: "Юридическая консультация",
    description: "Юридические услуги",
    location: "Москва",
    type: "Услуги",
    serviceType: "Юридическая помощь",
    experience: 10,
    cost: 50000,
  },
  {
    id: 24,
    name: "Ландшафтный дизайн",
    description: "Создание красивых садов",
    location: "Сочи",
    type: "Услуги",
    serviceType: "Дизайн",
    experience: 6,
    cost: 30000,
  },
  {
    id: 25,
    name: "Репетитор по математике",
    description: "Помощь школьникам и студентам",
    location: "Онлайн",
    type: "Услуги",
    serviceType: "Обучение",
    experience: 8,
    cost: 2000,
  },
  {
    id: 26,
    name: "Стрижка и укладка",
    description: "Парикмахерские услуги",
    location: "СПб",
    type: "Услуги",
    serviceType: "Салон красоты",
    experience: 5,
    cost: 1500,
  },
  {
    id: 27,
    name: "Клининг",
    description: "Уборка квартир и офисов",
    location: "Москва",
    type: "Услуги",
    serviceType: "Клининг",
    experience: 3,
    cost: 7000,
  },
];

const makeCounter = () => {
  // let count = 0;
  let count = 100;
  return () => count++;
};

const itemsIdCounter = makeCounter();

// Создание нового объявления
app.post("/items", (req, res) => {
  const { name, description, location, type, ...rest } = req.body;

  // Validate common required fields
  if (!name || !description || !location || !type) {
    return res.status(400).json({ error: "Missing required common fields" });
  }

  switch (type) {
    case ItemTypes.REAL_ESTATE:
      if (!rest.propertyType || !rest.area || !rest.rooms || !rest.price) {
        return res
          .status(400)
          .json({ error: "Missing required fields for Real estate" });
      }
      break;
    case ItemTypes.AUTO:
      //В ТЗ написано, что пробег - опциональное значение => убираю из условия ниже
      //"|| !rest.mileage"
      if (!rest.brand || !rest.model || !rest.year) {
        return res
          .status(400)
          .json({ error: "Missing required fields for Auto" });
      }
      break;
    case ItemTypes.SERVICES:
      if (!rest.serviceType || !rest.experience || !rest.cost) {
        return res
          .status(400)
          .json({ error: "Missing required fields for Services" });
      }
      break;
    default:
      return res.status(400).json({ error: "Invalid type" });
  }

  const item = {
    id: itemsIdCounter(),
    name,
    description,
    location,
    type,
    ...rest,
  };

  items.push(item);
  res.status(201).json(item);
});

//Получение всех объявлений
app.get("/items", (req, res) => {
  res.json(items);
});

// Получение объявления по его id
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));

  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Обновление объявления по его id
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Удаление объявления по его id
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex(
    (i) => i.id === parseInt(req.params.id, 10)
  );
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Item not found");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

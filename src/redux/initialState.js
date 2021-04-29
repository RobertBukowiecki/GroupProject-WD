const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  hotDeals: {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    category: 'chair',
    price: 300,
    oldPrice: 250,
    stars: 2,
    promo: 'sale',
    image:
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    newFurniture: true,
    compare: false,
    favorite: false,
  },
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
      userStars: 3,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/65535/51118594395_b5042360af_m.jpg',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/53/147482645_d125c7f1f8_n.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/6153/6166441527_35651ce078_w.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/2223/2711949914_e8a0af5566_z.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://live.staticflickr.com/943/26921740027_23943d5103_c.jpg',
      newFurniture: true,
      compare: false,
    },
  ],
  feedbacks: [
    {
      id: 'client-1',
      icon:
        'https://www.flaticon.com/svg/vstatic/svg/565/565703.svg?token=exp=1616333731~hmac=efc4d87e0dbbcd8b62bfd8383e7ef1dd',
      quote:
        'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
      image:
        'https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
      name: 'John Smith',
    },
  ],
  cart: {
    products: [],
  },
  options: {},
};

export default initialState;

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: (Category | { id: 'all', name: string })[] = [
    { id: 'all', name: 'Все категории' },
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Строй товары' },
    { id: 3, name: 'Электроника' },
    { id: 4, name: 'Спорт и здоровье' },
    { id: 5, name: 'Научные приборы' },
    { id: 6, name: 'Наушники' },
    { id: 7, name: 'Пылесосы' },
    { id: 8, name: 'Смарт-часы' },
  ];

  private products: Product[] = [
     {
      id: 1,
      name: 'Микроскоп Steamhammer GR009 оптический (световой), учебный',
      description:
        'Микроскоп Steamhammer GR009 оптический (световой), учебный',
      price: 7201,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h5e/85064322875422.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h90/85559319232542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h64/85559319265310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h12/85559319167006.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/mikroskop-steamhammer-gr009-opticheskii-svetovoi-uchebnyi-115183701/?c=750000000&tab=reviews&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE  ',
      likes: 0,
      categoryId: 5,
    },
    {
      id: 2,
      name: 'Автокомпрессор K2KANT поршневый K2-65',
      description:
        'Автокомпрессор K2KANT поршневый K2-65.',
      price: 12990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/pb3/74685502.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p90/pc9/73873538.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/pc9/73873539.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/pc7/73873540.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/avtokompressor-k2kant-porshnevyi-k2-65-111044420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 3,
      name: 'КазЭкспорт УР-300 Удалитель ржавчины 500 г',
      description:
        'КазЭкспорт УР-300 Удалитель ржавчины 500 г',
      price: 4400,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p57/pba/34437909.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pbc/34437911.png?format=gallery-medium',
        
      ],
      link: 'https://kaspi.kz/shop/p/kazeksport-ur-300-udalitel-rzhavchiny-500-g-137491094/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 4,
      name: 'Модуль управления Arduino UNO R3 CH340',
      description:
        'Модуль управления Arduino UNO R3 CH340',
      price: 1700,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h9d/68043442618398.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h9d/68043442618398.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/modul-upravlenija-arduino-uno-r3-ch340-108510572/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 5,
      name: 'Набор для моделирования Arduino UNO KIT 001, мультиколор',
      description:
        'Набор для моделирования Arduino UNO KIT 001, мультиколор.',
      price: 9495,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h37/64426899832862.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/hda/64426901930014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hcc/64426903765022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/hd4/64426905534494.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nabor-dlja-modelirovanija-arduino-uno-kit-001-mul-tikolor-106898898/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 6,
      name: 'Креатин YummyLab Creatine monohydrate арбуз 300 г',
      description:
        'Креатин YummyLab Creatine monohydrate арбуз 300 г',
      price: 7454,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/p42/54349962.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p3f/54349963.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p38/54349965.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p2a/54349969.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-yummylab-creatine-monohydrate-arbuz-300-g-140317462/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 7,
      name: 'NOW Acetyl L-Carnitine 500мг капсулы 50 шт',
      description:
        'NOW Acetyl L-Carnitine 500мг капсулы 50 шт',
      price: 6767,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pd6/87684237.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pd6/87684238.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p40/pd9/87684240.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5d/pd9/87684241.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/now-acetyl-l-carnitine-500mg-kapsuly-50-sht-120248464/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 8,
      name: 'Спонж плоский полиуретан 1 шт',
      description: 'Спонж плоский полиуретан 1 шт',
      price: 115,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h58/83145716826142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/83145717907486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/hcf/83145719152670.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sponzh-ploskii-poliuretan-1-sht-112846363/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 8,
    },
    {
      id: 9,
      name: 'NOW Ashwaganda, Ашваганда 450 мг капсулы 90 шт',
      description:
        'NOW Ashwaganda, Ашваганда 450 мг капсулы 90 шт',
      price: 5740,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p28/27486112.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p28/27486112.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p28/27486113.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/now-ashwaganda-ashvaganda-450-mg-kapsuly-90-sht-100501349/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 11,
      name: 'Проектирование и моделирование Arduino UNO RFID, мультиколор',
      description:
        'Проектирование и моделирование Arduino UNO RFID, мультиколор',
      price: 23700,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h18/86713500958750.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h18/86713500958750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h8d/86713501089822.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h48/86713501155358.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/proektirovanie-i-modelirovanie-arduino-uno-rfid-mul-tikolor-122121726/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 10,
      name: 'Ручка шариковая WENAO 555-A 1 шт, 1 мм, цвет чернил синий',
      description:
        'Ручка шариковая WENAO 555-A 1 шт, 1 мм, цвет чернил синий',
      price: 40,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hf9/80564438269982.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0f/64410304544798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hd1/80496366551070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hf9/80564438269982.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-wenao-555-a-1-sht-1-mm-tsvet-chernil-sinii-106188867/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
      likes: 0,
      categoryId: 8,
    },
    {
      id: 12,
      name: 'Опыты с электричеством Acebott ACBTSmartfactory',
      description:
        'Опыты с электричеством Acebott ACBTSmartfactory',
      price: 119000,
      rating: 4.5,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pea/pbd/26747682.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pea/pbd/26747682.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p07/pbe/26747683.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pbe/26747684.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/opyty-s-elektrichestvom-acebott-acbtsmartfactory-135264562/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 13,
      name: 'Модуль Bluetooth Arduino VHM-314 TYPE-C',
      description:
        'Модуль Bluetooth Arduino VHM-314 TYPE-C',
      price: 800,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/haa/85504204931102.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/haa/85504204931102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h59/h73/85504204996638.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/modul-bluetooth-arduino-vhm-314-type-c-117684523/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_car_luggage_systems_v2&gbraid=0AAAAAC7-v7i0o1Bj9nv0RRqTiUP4cHBRv&gclid=Cj0KCQiA49XMBhDRARIsAOOKJHaB7zJwOoDSAX39ZcpP4LNM7_SxR_yRuqxEXGFIt5I3GqyPHucJHjcaAk9QEALw_wcB',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 14,
      name: 'Степпер нагрузка 120 кг с эспандерами балансировочный',
      description:
        'Степпер нагрузка 120 кг с эспандерами балансировочный',
      price: 14669,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h50/86396207398942.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h50/86396207398942.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/hee/86396207530014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/hc7/86396207661086.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/stepper-nagruzka-120-kg-s-espanderami-balansirovochnyi-120861000/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 15,
      name: 'Беговая дорожка электрическая',
      description:
        'Беговая дорожка электрическая',
      price: 65000,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p0e/16469477.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p0e/16469477.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p0f/16469478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p0f/16469479.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/begovaja-dorozhka-elektricheskaja-131457952/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 16,
      name: 'Комплект резьбонарезного инструмента PP-20-25',
      description:
        'Комплект резьбонарезного инструмента PP-20-25',
      price: 65000,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p14/53991167.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p14/53991167.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/p64/67017415.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/pde/53991173.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/komplekt-rez-bonareznogo-instrumenta-pp-20-25-142785255/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 17,
      name: 'Ресанта сварочный полуавтомат САИПА-200 65/9 (аргонная (аргонодуговая) сварка, полуавтоматическая сварка (MIG/MAG), ручная дуговая сварка (MMA), FCAW, Spot (точечная) сварка)',
      description:
        'Ресанта сварочный полуавтомат САИПА-200 65/9 (аргонная (аргонодуговая) сварка, полуавтоматическая сварка (MIG/MAG), ручная дуговая сварка (MMA), FCAW, Spot (точечная) сварка)',
      price: 129500,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p2d/87413740.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p2d/87413740.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p24/62338525.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/pdb/62338515.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/resanta-svarochnyi-poluavtomat-saipa-200-65-9-argonnaja-argonodugovaja-svarka-poluavtomaticheskaja-svarka-mig-mag-ruchnaja-dugovaja-svarka-mma-fcaw-spot-tochechnaja-svarka--30000129/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 18,
      name: 'ELEVE11 шуруповерт HM-3021',
      description:
        'ELEVE11 шуруповерт HM-3021',
      price: 14948,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p63/p8d/34629574.PNG?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p63/p8d/34629574.PNG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p8d/34629577.PNG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p8c/34629578.PNG?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/eleve11-shurupovert-hm-3021-134486446/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 19,
      name: 'Калькулятор универсальный, научный YGANO DS-350MS, 12-разрядный, розовый',
      description:
        'Калькулятор универсальный, научный YGANO DS-350MS, 12-разрядный, розовый',
      price: 2985,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/hb9/84885791801374.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/hb9/84885791801374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p97/67089555.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p97/67089557.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kal-kuljator-universal-nyi-nauchnyi-ygano-ds-350ms-12-razrjadnyi-rozovyi-115879092/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 5,
    },
    {
      id: 20,
      name: 'Книга Харари Ю. Н.: Sapiens. Краткая история человечества',
      description:
        'Книга Харари Ю. Н.: Sapiens. Краткая история человечества',
      price: 6940,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h86/hd6/63791096135710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/hd6/63791096135710.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/harari-ju-n-sapiens-kratkaja-istorija-chelovechestva-26019227/?c=750000000',
      likes: 0,
      categoryId: 5,
    },
    {
      id: 21,
      name: 'Колба sku 1 шт',
      description:
        'Колба sku 1 шт',
      price: 3893,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/hdd/70005431894046.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/hdd/70005431894046.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kolba-sku-1-sht-109323223/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 5,
    },
    {
      id: 22,
      name: 'Спирт этиловый-DF спрей 90% 50 мл',
      description:
        'Спирт этиловый-DF спрей 90% 50 мл',
      price: 3893,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/64168924708894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/64168924708894.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/spirt-etilovyi-df-sprei-90-50-ml-101100038/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 5,
    },
    {
      id: 23,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description:
        'Оранжевый',
      price: 789398,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 24,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description:
        'Черный',
      price: 459150,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 25,
      name: 'Смартфон Samsung Galaxy A16 6 ГБ/128 ГБ черный',
      description:
        'Черный',
      price: 128028,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/p80/10325754.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p80/10325755.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 26,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый',
      description:
        'Серый',
      price: 559651,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/pcb/20118465.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/pcc/20118467.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 27,
      name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      description:
        'Серый',
      price: 559651,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hb1/86319874474014.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hSaaMoGENkDN2ldJLHHXukB&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9QxRt5Hev-a17Lu0y55fsJNXRHdZFg6A-15fqk267Q8VEnz1_0bfdIaAtO4EALw_wcB',
      likes: 0,
      categoryId: 1,
    },
  ];

  getCategories(): (Category | { id: 'all', name: string })[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}

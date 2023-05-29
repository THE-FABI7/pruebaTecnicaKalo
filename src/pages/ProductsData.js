const products = [
  {
    id: 1,
    name: "xbox",
    image: [
      {
        image1:
          "https://assets.xboxservices.com/assets/2b/50/2b50e275-53ee-4da9-a3d4-55d33548e017.jpg?n=Xbox-Series-X_Superhero-0_Dream-Particles_768x1034.jpg",
      },
      {
        image2:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=8361",
      },
      {
        image3:
          "https://i.blogs.es/73ba2e/xbox2/1366_2000.jpg",
      },
      {
        image4:
          "https://i.blogs.es/73ba2e/xbox2/1366_2000.jpg",
      },
    ],
    price: 10,
    description: "Descripción del producto 1",
    categorie: "Gaming",
    characteristics: [
      {
        name: "Potencia de procesamiento",
        description:
          "El Xbox X cuenta con un potente procesador que ofrece un rendimiento excepcional para juegos y aplicaciones.",
      },
      {
        name: "Gráficos de alta calidad",
        description:
          "Con el Xbox X, disfrutarás de gráficos en resolución 4K y HDR, lo que proporciona una experiencia visual impresionante.",
      },
      {
        name: "Capacidad de almacenamiento",
        description:
          "La consola ofrece una amplia capacidad de almacenamiento interno, permitiéndote descargar y guardar numerosos juegos y contenido multimedia.",
      },
      {
        name: "Control preciso",
        description:
          "El control del Xbox X es ergonómico y altamente preciso, brindándote una experiencia de juego cómoda y satisfactoria.",
      },
      {
        name: "Retrocompatibilidad",
        description:
          "Con la función de retrocompatibilidad, puedes disfrutar de juegos de generaciones anteriores en el Xbox X, aprovechando al máximo tu biblioteca de juegos.",
      },
      {
        name: "Sistema de refrigeración eficiente",
        description:
          "El Xbox X está diseñado con un sistema de refrigeración avanzado que ayuda a mantener la temperatura de la consola bajo control, incluso en sesiones de juego prolongadas.",
      },
      {
        name: "Transmisión en vivo simplificada",
        description:
          "Gracias a las funciones integradas de transmisión en vivo, puedes compartir tus momentos de juego con facilidad y sin complicaciones.",
      },
      {
        name: "Funcionamiento silencioso",
        description:
          "El Xbox X ha sido optimizado para funcionar de manera silenciosa, incluso durante los juegos más exigentes, brindándote una experiencia de juego inmersiva sin distracciones.",
      },
      {
        name: "Calidad de imagen impresionante",
        description:
          "Con el Xbox X, disfrutarás de una calidad de imagen excepcionalmente nítida y detallada, sumergiéndote por completo en tus juegos y contenido multimedia.",
      },
      {
        name: "Conectividad rápida y estable",
        description:
          "La consola cuenta con conectividad Wi-Fi de alta velocidad y puertos adicionales para garantizar una conexión rápida y estable durante tus sesiones de juego en línea.",
      },
    ],
    reviews: [
      {
        title: "Impresionante rendimiento gráfico y velocidad de carga",
        rating: 5,
      },
      { title: "El soporte para resolución 4K es asombroso", rating: 5 },
      { title: "Gran capacidad de almacenamiento para juegos", rating: 4 },
      { title: "El control es cómodo y preciso", rating: 4 },
      {
        title: "La retrocompatibilidad con juegos anteriores es genial",
        rating: 5,
      },
      {
        title: "El sistema de refrigeración mantiene la consola fresca",
        rating: 4,
      },
      {
        title: "Las funciones de transmisión en vivo son fáciles de usar",
        rating: 4,
      },
      {
        title: "El Xbox X es silencioso incluso en juegos exigentes",
        rating: 5,
      },
      { title: "La calidad de imagen es increíblemente nítida", rating: 5 },
      { title: "La conectividad Wi-Fi es rápida y estable", rating: 4 },
    ],
  },
  {
    id: 2,
    name: "xbox x",
    image: [
      {
        image1:
          "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/2020/09/XSX_XSS_Design_HERO.jpg",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 20,
    description: "Descripción del producto 2",
    categorie: "Gaming",
    characteristics: [
      {
        name: "Potencia de procesamiento",
        description:
          "El Xbox X cuenta con un potente procesador que ofrece un rendimiento excepcional para juegos y aplicaciones.",
      },
      {
        name: "Gráficos de alta calidad",
        description:
          "Con el Xbox X, disfrutarás de gráficos en resolución 4K y HDR, lo que proporciona una experiencia visual impresionante.",
      },
      {
        name: "Capacidad de almacenamiento",
        description:
          "La consola ofrece una amplia capacidad de almacenamiento interno, permitiéndote descargar y guardar numerosos juegos y contenido multimedia.",
      },
      {
        name: "Control preciso",
        description:
          "El control del Xbox X es ergonómico y altamente preciso, brindándote una experiencia de juego cómoda y satisfactoria.",
      },
      {
        name: "Retrocompatibilidad",
        description:
          "Con la función de retrocompatibilidad, puedes disfrutar de juegos de generaciones anteriores en el Xbox X, aprovechando al máximo tu biblioteca de juegos.",
      },
      {
        name: "Sistema de refrigeración eficiente",
        description:
          "El Xbox X está diseñado con un sistema de refrigeración avanzado que ayuda a mantener la temperatura de la consola bajo control, incluso en sesiones de juego prolongadas.",
      },
      {
        name: "Transmisión en vivo simplificada",
        description:
          "Gracias a las funciones integradas de transmisión en vivo, puedes compartir tus momentos de juego con facilidad y sin complicaciones.",
      },
      {
        name: "Funcionamiento silencioso",
        description:
          "El Xbox X ha sido optimizado para funcionar de manera silenciosa, incluso durante los juegos más exigentes, brindándote una experiencia de juego inmersiva sin distracciones.",
      },
      {
        name: "Calidad de imagen impresionante",
        description:
          "Con el Xbox X, disfrutarás de una calidad de imagen excepcionalmente nítida y detallada, sumergiéndote por completo en tus juegos y contenido multimedia.",
      },
      {
        name: "Conectividad rápida y estable",
        description:
          "La consola cuenta con conectividad Wi-Fi de alta velocidad y puertos adicionales para garantizar una conexión rápida y estable durante tus sesiones de juego en línea.",
      },
    ],
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 3,
    name: "Playstation 5",
    image: [
      {
        image1:
          "https://media.wired.com/photos/629133e5e9a46d033b3380c7/master/w_2560%2Cc_limit/Finding-a-PlayStation-5-Is-About-to-Get-Easier-Gear-shutterstock_1855958302.jpg",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 10,
    description: "Descripción del producto 3",
    categorie: "Gaming",
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 4,
    name: "Netflix 3 pantallas",
    image: [
      {
        image1:
          "https://http2.mlstatic.com/D_NQ_NP_815516-MCO48646805940_122021-O.jpg",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 20,
    description: "Descripción del producto 4",
    categorie: "Entertainment",
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 5,
    name: "Netflix 2 pantallas",
    image: [
      {
        image1:
          "https://http2.mlstatic.com/D_NQ_NP_815516-MCO48646805940_122021-O.jpg",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 10,
    description: "Descripción del producto 5",
    categorie: "Entertainment",
    characteristics: [
      {
        name: "Potencia de procesamiento",
        description:
          "El Xbox X cuenta con un potente procesador que ofrece un rendimiento excepcional para juegos y aplicaciones.",
      },
      {
        name: "Gráficos de alta calidad",
        description:
          "Con el Xbox X, disfrutarás de gráficos en resolución 4K y HDR, lo que proporciona una experiencia visual impresionante.",
      },
      {
        name: "Capacidad de almacenamiento",
        description:
          "La consola ofrece una amplia capacidad de almacenamiento interno, permitiéndote descargar y guardar numerosos juegos y contenido multimedia.",
      },
      {
        name: "Control preciso",
        description:
          "El control del Xbox X es ergonómico y altamente preciso, brindándote una experiencia de juego cómoda y satisfactoria.",
      },
      {
        name: "Retrocompatibilidad",
        description:
          "Con la función de retrocompatibilidad, puedes disfrutar de juegos de generaciones anteriores en el Xbox X, aprovechando al máximo tu biblioteca de juegos.",
      },
      {
        name: "Sistema de refrigeración eficiente",
        description:
          "El Xbox X está diseñado con un sistema de refrigeración avanzado que ayuda a mantener la temperatura de la consola bajo control, incluso en sesiones de juego prolongadas.",
      },
      {
        name: "Transmisión en vivo simplificada",
        description:
          "Gracias a las funciones integradas de transmisión en vivo, puedes compartir tus momentos de juego con facilidad y sin complicaciones.",
      },
      {
        name: "Funcionamiento silencioso",
        description:
          "El Xbox X ha sido optimizado para funcionar de manera silenciosa, incluso durante los juegos más exigentes, brindándote una experiencia de juego inmersiva sin distracciones.",
      },
      {
        name: "Calidad de imagen impresionante",
        description:
          "Con el Xbox X, disfrutarás de una calidad de imagen excepcionalmente nítida y detallada, sumergiéndote por completo en tus juegos y contenido multimedia.",
      },
      {
        name: "Conectividad rápida y estable",
        description:
          "La consola cuenta con conectividad Wi-Fi de alta velocidad y puertos adicionales para garantizar una conexión rápida y estable durante tus sesiones de juego en línea.",
      },
    ],
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 6,
    name: "Tarjeta Hbo",
    image: [
      {
        image1:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 20,
    description: "Descripción del producto 6",
    categorie: "Entertainment",
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 7,
    name: "Producto 7",
    image: [
      {
        image1:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 10,
    description: "Descripción del producto 7",
    categorie: "Entertainment",
    characteristics: [
      {
        name: "Potencia de procesamiento",
        description:
          "El Xbox X cuenta con un potente procesador que ofrece un rendimiento excepcional para juegos y aplicaciones.",
      },
      {
        name: "Gráficos de alta calidad",
        description:
          "Con el Xbox X, disfrutarás de gráficos en resolución 4K y HDR, lo que proporciona una experiencia visual impresionante.",
      },
      {
        name: "Capacidad de almacenamiento",
        description:
          "La consola ofrece una amplia capacidad de almacenamiento interno, permitiéndote descargar y guardar numerosos juegos y contenido multimedia.",
      },
      {
        name: "Control preciso",
        description:
          "El control del Xbox X es ergonómico y altamente preciso, brindándote una experiencia de juego cómoda y satisfactoria.",
      },
      {
        name: "Retrocompatibilidad",
        description:
          "Con la función de retrocompatibilidad, puedes disfrutar de juegos de generaciones anteriores en el Xbox X, aprovechando al máximo tu biblioteca de juegos.",
      },
      {
        name: "Sistema de refrigeración eficiente",
        description:
          "El Xbox X está diseñado con un sistema de refrigeración avanzado que ayuda a mantener la temperatura de la consola bajo control, incluso en sesiones de juego prolongadas.",
      },
      {
        name: "Transmisión en vivo simplificada",
        description:
          "Gracias a las funciones integradas de transmisión en vivo, puedes compartir tus momentos de juego con facilidad y sin complicaciones.",
      },
      {
        name: "Funcionamiento silencioso",
        description:
          "El Xbox X ha sido optimizado para funcionar de manera silenciosa, incluso durante los juegos más exigentes, brindándote una experiencia de juego inmersiva sin distracciones.",
      },
      {
        name: "Calidad de imagen impresionante",
        description:
          "Con el Xbox X, disfrutarás de una calidad de imagen excepcionalmente nítida y detallada, sumergiéndote por completo en tus juegos y contenido multimedia.",
      },
      {
        name: "Conectividad rápida y estable",
        description:
          "La consola cuenta con conectividad Wi-Fi de alta velocidad y puertos adicionales para garantizar una conexión rápida y estable durante tus sesiones de juego en línea.",
      },
    ],
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  {
    id: 8,
    name: "Producto 8",
    image: [
      {
        image1:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image2:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image3:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
      {
        image4:
          "https://img.lovepik.com/free_png/32/51/55/61m58PICd2a7EINS6j4HK_PIC2018.png_860.png",
      },
    ],
    price: 20,
    description: "Descripción del producto 8",
    categorie: "Entertainment",
    characteristics: [
      {
        name: "Potencia de procesamiento",
        description:
          "El Xbox X cuenta con un potente procesador que ofrece un rendimiento excepcional para juegos y aplicaciones.",
      },
      {
        name: "Gráficos de alta calidad",
        description:
          "Con el Xbox X, disfrutarás de gráficos en resolución 4K y HDR, lo que proporciona una experiencia visual impresionante.",
      },
      {
        name: "Capacidad de almacenamiento",
        description:
          "La consola ofrece una amplia capacidad de almacenamiento interno, permitiéndote descargar y guardar numerosos juegos y contenido multimedia.",
      },
      {
        name: "Control preciso",
        description:
          "El control del Xbox X es ergonómico y altamente preciso, brindándote una experiencia de juego cómoda y satisfactoria.",
      },
      {
        name: "Retrocompatibilidad",
        description:
          "Con la función de retrocompatibilidad, puedes disfrutar de juegos de generaciones anteriores en el Xbox X, aprovechando al máximo tu biblioteca de juegos.",
      },
      {
        name: "Sistema de refrigeración eficiente",
        description:
          "El Xbox X está diseñado con un sistema de refrigeración avanzado que ayuda a mantener la temperatura de la consola bajo control, incluso en sesiones de juego prolongadas.",
      },
      {
        name: "Transmisión en vivo simplificada",
        description:
          "Gracias a las funciones integradas de transmisión en vivo, puedes compartir tus momentos de juego con facilidad y sin complicaciones.",
      },
      {
        name: "Funcionamiento silencioso",
        description:
          "El Xbox X ha sido optimizado para funcionar de manera silenciosa, incluso durante los juegos más exigentes, brindándote una experiencia de juego inmersiva sin distracciones.",
      },
      {
        name: "Calidad de imagen impresionante",
        description:
          "Con el Xbox X, disfrutarás de una calidad de imagen excepcionalmente nítida y detallada, sumergiéndote por completo en tus juegos y contenido multimedia.",
      },
      {
        name: "Conectividad rápida y estable",
        description:
          "La consola cuenta con conectividad Wi-Fi de alta velocidad y puertos adicionales para garantizar una conexión rápida y estable durante tus sesiones de juego en línea.",
      },
    ],
    reviews: [
      { title: "Es muy bueno y me encanto", rating: 4 },
      { title: "Es muy regular la verdad", rating: 5 },
    ],
  },
  // Agrega más productos si es necesario
];

export default products;

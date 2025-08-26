const products = [
  {
    name: 'Eternity for Men',
    description: 'A timeless classic by Calvin Klein with fresh, woody, and aromatic notes.',
    scentNotes: 'Mandarin, Sage, Cedarwood',
    price: 4950,
    imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/calvin-klein/997119/0/luGQxctF6T-qt1IfgTsI-D-997119_1.jpg',
    stock: 30,
    rating: 4.6,
    numReviews: 215
  },
  {
    name: 'Club de Nuit Intense Man',
    description: 'A bold, smoky, and citrusy fragrance by Armaf, widely known as an Aventus alternative.',
    scentNotes: 'Lemon, Birch, Black Currant',
    price: 2800,
    imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1083537/DSxkowcDP2-6085010044712_2.jpg',
    stock: 45,
    rating: 4.7,
    numReviews: 350
  },
  {
    name: 'Rasasi Hawas for Men',
    description: 'An energetic and youthful blend of aquatic, fruity, and spicy notes.',
    scentNotes: 'Cinnamon, Bergamot, Ambergris',
    price: 3850,
    imageUrl: 'https://perfumesbyjs.com/cdn/shop/files/hawwas.webp?v=1743362458&width=713',
    stock: 50,
    rating: 4.8,
    numReviews: 280
  },
  {
    name: 'Ombre Nomade',
    description: 'A luxurious and powerful Louis Vuitton fragrance with rich oud and smoky notes.',
    scentNotes: 'Oud, Incense, Raspberry',
    price: 31000,
    imageUrl: 'https://cdn.salla.sa/WEYON/1CCi3r4eg8y3S5Ij4uElFNzD75Vf4kJIlnoqBWYm.jpg',
    stock: 8,
    rating: 4.9,
    numReviews: 120
  },
  {
    name: 'Tom Ford Tobacco Vanille',
    description: 'A sophisticated and warm Tom Ford blend of rich tobacco, vanilla, and spices.',
    scentNotes: 'Tobacco Leaf, Vanilla, Spices',
    price: 21500,
    imageUrl: 'https://m.media-amazon.com/images/I/51+NEGEIw6L._UF1000,1000_QL80_.jpg',
    stock: 12,
    rating: 4.9,
    numReviews: 190
  },
  {
    name: 'Creed Aventus',
    description: 'The iconic fragrance of strength and success with notes of pineapple, birch, and musk.',
    scentNotes: 'Pineapple, Birch, Musk',
    price: 28500,
    imageUrl: 'https://www.noseunbox.in/wp-content/uploads/2023/10/CREED-Aventus-EDP-120ml.webp',
    stock: 10,
    rating: 4.8,
    numReviews: 450
  },
  {
    name: 'YSL Y Eau de Parfum',
    description: 'A modern and versatile scent by Yves Saint Laurent with fresh citrus, sage, and amberwood.',
    scentNotes: 'Apple, Sage, Vetiver',
    price: 8800,
    imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1089965/EjZG7xpOcQ-1089965_5.jpg',
    stock: 35,
    rating: 4.7,
    numReviews: 240
  },
  {
    name: 'Dunhill Icon',
    description: 'An elegant and refined fragrance featuring citrus, black pepper, and woods.',
    scentNotes: 'Neroli, Black Pepper, Oud',
    price: 6200,
    imageUrl: 'https://www.aarfragrances.com/public/uploads/all/g9bS3znznhyzP0MRDCMRHDeu3934oSbFH7iMCfOB.jpg',
    stock: 25,
    rating: 4.5,
    numReviews: 110
  },
  {
    name: 'A Thousand and One Nights',
    description: 'An exotic and oriental Arabian fragrance with notes of oud, amber, and spices.',
    scentNotes: 'Oud, Spices, Rose',
    price: 7500,
    imageUrl: 'https://in.ajmal.com/cdn/shop/files/1001NIGHTS_CONCENTRATED_30ML_3.jpg?v=1725955058&width=1445',
    stock: 15,
    rating: 4.6,
    numReviews: 95
  },
  {
    name: 'D&G The One for Men',
    description: 'A warm and spicy Dolce & Gabbana classic with tobacco and amber depth.',
    scentNotes: 'Grapefruit, Ginger, Tobacco',
    price: 7100,
    imageUrl: 'https://m.media-amazon.com/images/I/814Gdegwz8L.jpg',
    stock: 40,
    rating: 4.6,
    numReviews: 290
  },
  {
    name: 'Davidoff Cool Water',
    description: 'A refreshing aquatic classic with invigorating mint, lavender, and musk.',
    scentNotes: 'Mint, Seawater, Lavender',
    price: 3600,
    imageUrl: 'https://static.beautytocare.com/media/catalog/product/d/a/davidoff-cool-water-eau-de-toilette-for-men-40ml.jpg',
    stock: 60,
    rating: 4.5,
    numReviews: 410
  },
  {
    name: 'White Oud',
    description: 'A smooth and creamy woody oud fragrance with a soft, sweet character.',
    scentNotes: 'White Oud, Sandalwood, Musk',
    price: 4500,
    imageUrl: 'https://m.media-amazon.com/images/I/616ZUk6mFuL._UF1000,1000_QL80_.jpg',
    stock: 20,
    rating: 4.7,
    numReviews: 85
  },
  {
    name: 'Tom Ford Oud Wood',
    description: 'An exotic and luxurious Tom Ford scent with oud, sandalwood, and spices.',
    scentNotes: 'Oud Wood, Sandalwood, Vetiver',
    price: 24500,
    imageUrl: 'https://dailusretail.com/cdn/shop/files/TomFordOudwood.jpg?v=1756194806&width=493',
    stock: 14,
    rating: 4.8,
    numReviews: 175
  },
  {
    name: 'Zaffran (Saffron Oud)',
    description: 'A rich and bold attar blending precious saffron with deep, resonant oud.',
    scentNotes: 'Saffron, Oud, Rose',
    price: 6800,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvOLc4vJy7Vj622GwnLKUEaFh4E5Ja6wErA&s',
    stock: 18,
    rating: 4.9,
    numReviews: 78
  },
  {
    name: 'Oud Fresh',
    description: 'A clean and modern fragrance layering citrusy freshness over a light oud base.',
    scentNotes: 'Lemon, Bergamot, Light Oud',
    price: 4200,
    imageUrl: 'https://hasanoud.com/cdn/shop/files/Fresh_Oud_02.png?v=1749807354&width=1445',
    stock: 28,
    rating: 4.4,
    numReviews: 65
  },
  {
    name: 'Dior Sauvage EDP',
    description: 'A wildly popular and versatile fragrance with bergamot, pepper, and ambergris.',
    scentNotes: 'Bergamot, Sichuan Pepper, Ambroxan',
    price: 11500,
    imageUrl: 'https://www.noseunbox.in/wp-content/uploads/2023/09/Dior-Sauvage-EDP.webp',
    stock: 55,
    rating: 4.7,
    numReviews: 550
  },
  {
    name: 'Bleu de Chanel EDP',
    description: 'A timelessly sophisticated scent combining citrus, incense, and rich woods.',
    scentNotes: 'Grapefruit, Incense, Cedar',
    price: 12500,
    imageUrl: 'https://beautybaskets.in/wp-content/uploads/2021/03/Chanel-Bleu-De-Parfum-PH-EDP-100ml-5-FILEminimizer-1200x1200.jpg',
    stock: 40,
    rating: 4.8,
    numReviews: 480
  },
  {
    name: 'Gucci Guilty Pour Homme',
    description: 'A bold and modern Gucci fragrance with notes of lavender, citrus, and patchouli.',
    scentNotes: 'Lavender, Lemon, Patchouli',
    price: 8200,
    imageUrl: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000493718894/XVI7Gh_smHu-000000000493718894_1.jpg',
    stock: 30,
    rating: 4.5,
    numReviews: 195
  },
  {
    name: 'Lattafa Sheikh Shuyukh',
    description: 'A royal and long-lasting oriental fragrance centered around oud, amber, and musk.',
    scentNotes: 'Oud, Cedar, Amber',
    price: 2500,
    imageUrl: 'https://www.jesaida.lt/images/uploader/la/lattafa-sheikh-shuyukh-luxe-edition-1.jpeg',
    stock: 50,
    rating: 4.6,
    numReviews: 150
  },
  {
    name: 'Ajmal Amber Wood',
    description: 'An oriental luxury in a bottle, showcasing the richness of amber, oud, and spices.',
    scentNotes: 'Amber, Cardamom, Sandalwood',
    price: 15500,
    imageUrl: 'https://in.ajmal.com/cdn/shop/files/AMBERWOOD_EDP_FORWOMEN_100ML_1.jpg?v=1719380456&width=1445',
    stock: 15,
    rating: 4.9,
    numReviews: 115
  },
];

module.exports = products;
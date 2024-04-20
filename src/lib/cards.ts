import type { Card } from './types/card'

const BASE_URL = '../../assets'

export const categoryImages = {
  wildlife: `${BASE_URL}/categories/wildlife.avif`,
  plants: `${BASE_URL}/categories/plants.avif`,
  locations: `${BASE_URL}/categories/locations.avif`
}

const WILDLIFE_URL = `${BASE_URL}/wildlife`
export const WILDLIFE: Card[] = [
  {
    id: 1,
    name: 'Mico Tití / Leoncito',
    description: 'Es también conocido como “mono de bolsillo” y se caracteriza por su diminuto tamaño, pues llega a medir hasta 40 centímetros y no pesa más de 700 gramos. Generalmente su cola puede ser más larga que su cuerpo. Este primate habita en los altos árboles de la selva amazónica y se alimenta de frutas, insectos y pequeños reptiles que pueden cazar en su hábitat. En el Amazonas, puedes encontrarlos en su habitad natural e interactuar con ellos en la isla de los micos.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/mico-titi.avif`,
    isActive: false
  },
  {
    id: 2,
    name: 'Mono araña',
    description: 'El mono araña es una especie de primate que también es encontrado en el Amazonas e igualmente se alimenta de frutas, insectos y pequeños reptiles, pero su tamaño es más grande, pues puede medir de 65 a 90 centímetros de longitud sin cola. Este animal no posee dedo pulgar y su color varía de castaño claro a negro, dependiendo la especie.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/mono-arana.avif`,
    isActive: false
  },
  {
    id: 3,
    name: 'Anguila eléctrica',
    description: 'La anguila eléctrica a veces puede ser confundida con serpientes acuáticas, pero esta es una especie de pez que se encuentra en el río Amazonas y es única pero con unas características muy particulares. Este animal puede transmitir corrientes eléctricas desde el interior de su cuerpo, generando descargas eléctricas hasta de 600 voltios, lo cual, puede ser mortal para cualquier ser humano o animal que se le acerque, por eso es considerado como uno de los más peligrosos de toda la región amazónica. Puedes encontrar este pez en lagos como los de la reserva natural Marasha.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/anguila-electrica.avif`,
    isActive: false
  },
  {
    id: 4,
    name: 'Hormiga Bala',
    description: 'La hormiga bala es encontrada en las profundas selvas del Amazonas de Brasil y Venezuela, se dice que puede medir hasta 25 milímetros, sin embargo, las hormigas obreras miden entre 22 y 28 milímetros de longitud y las reinas son un poco más grandes. Este insecto se caracteriza por tener la picadura más dolorosa de todas, superando el de una avispa. Sin embargo, se dice que el alcance del dolor puede ser como el de una bala, de allí viene el nombre de esta famosa hormiga amazónica.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/hormiga-bala.avif`,
    isActive: false
  },
  {
    id: 5,
    name: 'Rana dardo venenosa',
    description: 'La rana dardo o también conocida como rana flecha, es calificada como una de las más venenosas del mundo, pues en su cuerpo carga “batracoxina”, un poderoso veneno que puede lograr matar a seres humanos en tan solo segundos. Sin embargo, esta especie de rana se esconde en las profundas selvas del Amazonas, además es fácil de identificar por sus llamativos colores.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/rana-dardo-venenosa.avif`,
    isActive: false
  },
  {
    id: 6,
    name: 'Anaconda verde',
    description: 'Este es un reptil encontrado en el río Amazonas y compone la familia de las famosas boas. Se dice que puede pesar más 220 kilogramos, considerada entonces como una de las más pesadas de toda su especie, y también, la de mayor longitud. Las anacondas verdes no suelen agredir a los seres humanos para alimentarse, a menos que se sientan amenazadas o atacadas, puesto que no pertenecemos a su cadena alimenticia.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/anaconda-verde.avif`,
    isActive: false
  },
  {
    id: 7,
    name: 'Rana de cristal',
    description: 'Este anfibio es encontrado en gran parte del Amazonas colombiano y son animales nocturnos, además llamativos por tener la piel casi transparente, generalmente habitan en el sotobosque, estrato arbóreo y junto a ríos o arroyos de las selvas tropicales. La rana de cristal es un importante símbolo para los colombianos, por eso se encuentra plasmada en la moneda de $500 del país.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/rana-de-cristal.avif`,
    isActive: false
  },
  {
    id: 8,
    name: 'Piraña',
    description: 'Las famosas pirañas del Amazonas, son bastante reconocidas por sus afilados dientes y gran apetito carnívoro, también es calificado como uno de los animales más peligrosos de la región. Sin embargo, cabe resaltar que este pez no ataca a los seres humanos a menos que sientan sangre. Las pirañas son especies herbívoras, suelen medir de 15 a 25 centímetros, y generalmente, andan siempre acompañadas en manadas con el fin de protegerse las unas a las otras y poder cazar en conjunto.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/piranas.avif`,
    isActive: false
  },
  {
    id: 9,
    name: 'Jaguar (Panthera onca)',
    description: 'El majestuoso jaguar es el felino de mayor tamaño de América y sin lugar a dudas, uno de los grandes depredadores más emblemáticos de la selva amazónica. Pese a su importancia y admiración por parte de las diferentes culturas indígenas amazónicas pasadas y presentes, los jaguares se incluyen dentro de los animales del Amazonas en peligro de extinción. Aquí puedes conocer más sobre los Animales en peligro de extinción en el Amazonas. La situación actual del jaguar en el Amazonas es bastante inestable, la Unión Internacional para la Conservación de la Naturaleza cataloga a este gran felino como "especie casi amenazada".',
    category: 'wildlife',
    imgSrc:`${WILDLIFE_URL}/jaguar-panthera-onca.avif`,
    isActive: false
  },
  {
    id: 10,
    name: 'Perezoso (Bradypus tridactylus)',
    description: 'Los perezosos encuentran su hábitat natural en las ramas altas de los árboles de las cuencas amazónicas, y es considerada una de las especies endémicas del Amazonas más llamativas, caracterizada por su lento metabolismo y su hábito de descansar durante casi todo el día. Actualmente, la población de perezosos es estable en el Amazonas y no sufren riesgo de extinción, pero es cierto que están sufriendo capturas ilegales a diario y en cantidad, como sucede en otras zonas de América en las que habita.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/perezoso-bradypus-tridactylus.avif`,
    isActive: false
  },
  {
    id: 11,
    name: 'Capibara (Hydrochaeris hydrochaeris)',
    description: 'Otro de los mamíferos más característicos del biodiverso Amazonas es el capibara o carpincho. Se trata del roedor de mayor tamaño del mundo, llegando a alcanzar el metro y medio de longitud y una altura de 0.65 metros; pesando unos 50 kilogramos. Presenta hábitos tanto terrestres como acuáticos, haciendo uno de su gran capacidad para nadar cerca de las orillas del río Amazonas. La población de capibaras es bastante estable en este ecosistema de selvas amazónicas y no se encuentra actualmente en peligro de extinción.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/capibara-hydrochaeris-hydrochaeris.avif`,
    isActive: false
  },
  {
    id: 12,
    name: 'Tucanes (Familia Ramphastidae)',
    description: 'Los coloridos tucanes llenan de vida las copas de los árboles de la selva amazónica. Su inconfundible pico curvado hacia abajo de gran tamaño e intensos colores lo convierten en una de las aves más conocidas y relacionadas con los hábitats que se suceden durante todo el recorrido del río Amazonas. Diferentes especies de tucanes abundan tanto en las selvas de Brasil, como en las del Perú y Colombia. El tucán toco (Ramphastos toco) es una de las especies de animales del amazonas colombiano más conocidas dentro de esta familia de aves, siendo además el tucán de mayor tamaño.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/tucanes-familia-ramphastidae.avif`,
    isActive: false
  },
  {
    id: 13,
    name: 'Guacamayo azulamarillo (Ara ararauna)',
    description: 'Uno de los guacamayos más populares y coloridos de toda Sudamérica, el guacamayo azulamarillo o guacamayo azul y amarillo, encuentra su hábitat natural en la cuenca amazónica, llegando incluso a distribuirse algunos ejemplares desde Panamá hasta el norte de Argentina. Su estado dentro de la Lista Roja de la UICN es de "preocupación menor" (LC), por lo que hoy en día, esta asombrosa ave cuenta con individuos suficientes para mantener su población en equilibrio, aunque este equilibrio se ve amenazado por la destrucción de su hábitat y su captura ilegal.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/guacamayo-azulamarillo-ara-ararauna.avif`,
    isActive: false
  },
  {
    id: 14,
    name: 'Martín pescador del Amazonas (Chloroceryle amazona)',
    description: 'Estas preciosas aves de pequeño tamaño y colorido plumaje se distribuyen por todo el Amazonas, siempre en busca de peces para alimentarse. A menudo se encuentran en las ramas bajas de los árboles a la orilla del gran río, esperando el momento idóneo para zambullirse velozmente y capturar a su presa, alguno de los diversos peces que habitan las aguas del Amazonas. El Martín pescador del Amazonas cuenta con una población en equilibrio dentro de la región amazónica y no corre riesgo de extinción.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/martin-pescador-del-amazonas-chloroceryle.avif`,
    isActive: false
  },
  {
    id: 15,
    name: 'Basilisco marrón (Basiliscus vittatus)',
    description: 'Este quizás es uno de los animales del Amazonas poco conocidos, sobre todo comparado con otros de la lista. No obstante, son muy conocidos por su asombrosa habilidad para correr por la superficie del agua sin hundirse, los basiliscos son otro de los grupos de reptiles que podemos encontrar fácilmente en la región amazónica. Concretamente el basilisco marrón se distribuye por ecosistemas terrestres cercando a orillas de ríos como el Amazonas a su paso por Colombia.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/basilisco-marron-basiliscus-vittatus.avif`,
    isActive: false
  },
  {
    id: 16,
    name: 'Caimán negro del Orinoco (Melanosuchus niger)',
    description: 'Es un reptil nativo tanto de las regiones amazónicas de Brasil, como de Perú y Colombia; así como de otras regiones tropicales sudamericanas (Ecuador y Bolivia), en las que su riesgo de extinción, de momento, es muy bajo. De esta manera, podemos decir que forman parte de los animales de la Amazonía ecuatoriana y colombiana.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/caiman-negro-del-orinoco-melanosuchus-niger.avif`,
    isActive: false
  },
  {
    id: 17,
    name: 'Anaconda verde (Eunectes murinus)',
    description: 'Siguiendo con esta lista de animales del Amazonas nos detenemos a conocer a uno de los más emblemáticos Considerada la reina del Amazonas, tanto las poblaciones locales como los visitantes de cualquier región amazónica del Perú, Brasil o Colombia, no dudarán a la hora de reconocer a la asombrosa anaconda verde. Se trata de la serpiente de mayor peso y volumen del mundo, perteneciente a la familia de boas constrictoras, es decir, aquellas serpientes de gran tamaño con hábitos estranguladores hacia sus presas para asfixiarlas antes de empezar a ingerirlas lentamente.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/anaconda-verde-eunectes-murinus.avif`,
    isActive: false
  },
  {
    id: 18,
    name: 'El tucuxi o bufeo negro (Sotalia fluviatilis)',
    description: 'El Tucuxi se conoce como el «otro delfín» del Amazonas. El tucuxi es muy similar al delfín mular. Sin embargo, es de menor tamaño, en particular, la variedad fluvial (1,5 m), que es más pequeño que su homólogo marino (hasta 2,1 m).',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/delfines.avif`,
    isActive: false
  },
  {
    id: 19,
    name: 'Tamarino de manto dorado (Saguinus tripartitus)',
    description: 'Una especie sudamericana del género Saguinus. Este pequeño mico puebla las selvas amazónicas de Perú y Ecuador, en donde forman grupos de entre seis y nueve miembros.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/yasuni.avif`,
    isActive: false
  },
  {
    id: 20,
    name: 'Rana de flecha verde y negra (Dendrobates auratus)',
    description: 'Dendrobates auratus o rana flecha verde y negra es una especie de anfibio anuro de la familia Dendrobatidae muy común en el suelo de los bosques de Centroamérica (desde el sur de Nicaragua) y la parte noroeste de Colombia. Son animales diurnos. Posee una coloración altamente variable.',
    category: 'wildlife',
    imgSrc: `${WILDLIFE_URL}/rana-dardo-venenoso-verde-y-negro-dendrobates-auratus.avif`,
    isActive: false
  }
]

const PLANTS_URL = `${BASE_URL}/plants`
export const PLANTS: Card[] = [
  {
    id: 21,
    name: 'Ceiba (Ceiba pentandra)',
    description: 'Alcanzando hasta 70 m de altura, el árbol kapok es uno de los gigantes del Amazonas. También conocido como el árbol de ceiba, esta especie se eleva sobre el resto de la vegetación de la selva e incluso puede crecer hasta 4 m por año. El árbol es el hogar de una serie de especies animales, incluidas aves y ranas. Los murciélagos a menudo se sienten atraídos por los ceibas debido al olor que emiten sus flores rosadas. Nativo de la selva amazónica tropical, el árbol de ceiba también se puede encontrar en América Central, México e incluso en África occidental. Dato curioso: cuando se sumerge en agua, la fruta sin abrir del árbol de ceiba pentandra no se hundirá. Se cree que el fruto del árbol kapok flotó desde América Latina hasta África.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-kapok-tree.avif`,
    isActive: false
  },
  {
    id: 22,
    name: 'Nenúfar Gigante (Victoria Amazónica)',
    description: 'Victoria Amazónica (anteriormente conocida como Victoria Regia) es el miembro más grande de la familia de los nenúfares. El nenúfar gigante tiene hojas grandes y redondas con los bordes hacia arriba. El diámetro de cada hoja puede alcanzar un diámetro asombroso de 10 pies. Aunque emergen de noche y solo duran 48 horas, las flores del nenúfar gigante se encuentran entre las más hermosas de la Amazonía. Las flores, al igual que la propia planta, pueden alcanzar tamaños espectaculares, de hasta 16 pulgadas.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-giant-water-lilly.avif`,
    isActive: false
  },
  {
    id: 23,
    name: 'Árbol de caucho (Hevea brasiliensis)',
    description: 'El árbol de caucho (Hevea brasiliensis) es un árbol de madera de caucho nativo de las selvas tropicales de la cuenca del Amazonas y se encuentra en Perú, Brasil, Ecuador y Colombia. Su característica más famosa es la savia blanca lechosa conocida como látex. El árbol del caucho puede vivir hasta 100 años y crecer hasta alturas de 130 pies. Una vez que una hevea brasiliensis alcanza los seis años, se puede extraer látex. La savia de látex del árbol del caucho se utiliza en el procesamiento moderno del caucho. Dato curioso: los usos de los árboles de caucho fueron descubiertos y utilizados por primera vez por los antiguos aztecas, olmecas y mayas. La savia de látex se usó para producir una serie de artículos, incluidos ropa y zapatos impermeables.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-rubber-tree.avif`,
    isActive: false
  },
  {
    id: 24,
    name: 'Orquídea (Orchidaceae)',
    description: 'Originaria de ambientes cálidos y húmedos, la orquídea amazónica es una de las flores más conocidas y delicadas de la selva peruana. A diferencia de las elegantes orquídeas asiáticas, las especies que se encuentran en América Latina cuentan con una paleta de colores más vibrante, que incluye tonos de rojo, púrpura, amarillo e incluso negro. Si bien estas orquídeas son nativas de condiciones húmedas, aún son extremadamente adaptables y pueden crecer bien en casi todos los climas. De hecho, con más de 18.000 especies diferentes, las orquídeas representan alrededor del 8% de todas las plantas con flores.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-giant-orchide.avif`,
    isActive: false
  },
  {
    id: 25,
    name: 'Flor de la pasión (Pasiflora)',
    description: 'La flor de la pasión es una de las flores más elaboradas que encontrarás en la Amazonía peruana. Las flores de la pasión (o pasionarias) son plantas coloridas que se pueden encontrar entrelazadas alrededor de especies de flora más grandes de la selva tropical o molidas en forma de arbustos. Debido a que la mayoría de Pasiflora depende de insectos y pájaros para la polinización, las flores han adoptado colores brillantes que van del blanco al rojo para atraer polinizadores como los insectos. Algunas especies, sin embargo, son polinizadas por murciélagos, por lo que florecen de noche. Sus colores son más sutiles y producen un fuerte olor para atraer a sus polinizadores nocturnos.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-passion-flower.avif`,
    isActive: false
  },
  {
    id: 26,
    name: 'Bromelias (Bromeliaceae)',
    description: 'Las bromelias son plantas fascinantes con llamativas hojas en forma de espada y colores brillantes (generalmente en tonos naranja, azul, rojo y morado). Hay más de 2.700 especies de bromelias en todo el mundo, siendo la piña la más conocida. En Perú, las bromelias se encuentran en lo profundo de la selva tropical. Crecen en las ramas y troncos de los árboles en la capa de dosel del bosque.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-bromeliads.avif`,
    isActive: false
  },
  {
    id: 27,
    name: 'Cacao (Theobromacacao)',
    description: 'Los árboles de cacao son bastante pequeños (4 – 7.5 m high), árboles de hoja perenne que se encuentran en la selva amazónica. Sus semillas, más conocidas como granos de cacao, se utilizan en la fabricación de chocolate. Los árboles de cacao son muy exigentes con el lugar donde viven. Para prosperar, estas especies necesitan calor y lluvia constantes. También necesitan estar a la sombra del sol tropical y al abrigo del viento fuerte. En las condiciones adecuadas, el árbol del cacao produce varios racimos de frutos que emergen directamente del tronco y las ramas del árbol. Las vainas de cacao inmaduras son verdes. A medida que maduran, adquieren un tono anaranjado y pueden crecer hasta 30 cm de largo y 13 cm de ancho.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-giant-cacao.avif`,
    isActive: false
  },
  {
    id: 28,
    name: 'Planta de Café (Coffea arabica)',
    description: 'El cafeto es una planta de hoja perenne que, aunque puede crecer hasta 9 m de altura en la naturaleza, se considera un arbusto o arbusto. Tiene hojas brillantes de color verde oscuro y pequeñas flores blancas que producen un aroma único para ayudar a atraer insectos polinizadores. Una vez que las flores caen de la planta, comienzan a aparecer bayas en su lugar. Las bayas están maduras una vez que alcanzan un color carmesí brillante. Dentro de cada baya hay unos dos pequeños granos de café verde. Las plantas de café pueden vivir hasta 100 años y, por lo general, se necesitan de 5 a 8 años de crecimiento para que una nueva planta de café comience a producir frutos.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-giant-coffee-plant.avif`,
    isActive: false
  },
  {
    id: 29,
    name: 'Mono Brush Vine (Combretum rotundifolium)',
    description: 'El Monkey Brush es una enredadera llamativa originaria de la región de la selva amazónica. Se considera una planta parásita y se propaga a otras plantas y árboles. Tiene flores puntiagudas que, cuando florecen, se asemejan a un cepillo brillante. Las flores cambian de color de amarillo a naranja intenso, asemejándose a una llama. Son polinizados por abejas y otros insectos, y la fruta sirve como alimento para una serie de aves diferentes.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-monkey-brush-vine.avif`,
    isActive: false
  },

  {
    id: 30,
    name: 'Heliconias',
    description: 'Las heliconias, también llamadas pinzas de langosta o flores de loro, son plantas únicas en forma de paleta que se encuentran en la selva amazónica. Sus hojas que desafían la gravedad se conocen como brácteas y pueden ser rojas, amarillas, rosadas, naranjas, moradas o una combinación de estas. Las flores de la heliconia son diminutas y se pueden encontrar dentro de las brácteas. Dato curioso: cuando llueve, la heliconia acumula agua en las brácteas y, al igual que la planta de bromelia, puede servir como hogar para una variedad de pequeños organismos acuáticos. Su néctar también es un delicioso manjar para colibríes y mariposas.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-hot-lip-plant.avif`,
    isActive: false
  },
  {
    id: 31,
    name: 'Cumaseba (Swartzia polyphylla)',
    description: 'Cumaseba es un árbol tropical que puede crecer hasta 35 m de altura. En Perú, se puede encontrar en elevaciones más bajas en toda el área de la cuenca del Amazonas. Dato curioso: entre las comunidades locales, la corteza y/o la madera de Cumaseba se ha utilizado para dolores musculares y articulares, así como un elixir posparto. La tribu Shipibo-Conibo en Perú también usa la resina del árbol Cumaseba para tratar infecciones oculares y lesiones relacionadas con los ojos.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/154185589346795545.avif`,
    isActive: false
  },
  {
    id: 32,
    name: 'Uña de gato (Uncaria tomentosa)',
    description: 'Originaria de la selva amazónica, la planta de uña de gato es una hierba con espinas distintivas en forma de garra que se proyectan desde la base de sus hojas. Hay más de 34 especies de Uncaria, sin embargo, la Uncaria tomentosa (típicamente encontrada en la Amazonía peruana) es la más común. Se encuentra principalmente en las estribaciones de la selva tropical en elevaciones de 600 – 2440 m. La uña de gato es mejor conocida por sus efectos antiinflamatorios y antioxidantes. De hecho, la Uncaria tomentosa se usa con fines medicinales como tratamiento complementario para enfermedades que atacan el sistema inmunitario, como la artritis reumatoide y la osteoartritis.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/7229196828_d9b4cf6cc8_b.avif`,
    isActive: false
  },
  {
    id: 33,
    name: 'Higuera estranguladora (género Ficus)',
    description: 'La higuera estranguladora es uno de los árboles más extraordinarios que encontrarás en la selva tropical del Perú. En lugar de comenzar como una semilla en el suelo del suelo del bosque, el ciclo de vida de la higuera estranguladora comienza en el dosel del bosque donde sus semillas se alojan en las grietas de la corteza de su árbol anfitrión. Las raíces de la higuera estranguladora se envuelven alrededor del árbol huésped hasta que rodean por completo el tronco del huésped. Una vez que las raíces llegan al suelo y comienzan a extraer más nutrientes, el crecimiento se acelera.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-strangler-fig.avif`,
    isActive: false
  },
  {
    id: 34,
    name: 'Achiote (Bixa orellana)',
    description: 'El achiote es un arbusto, o pequeño árbol, originario de Sudamérica y la Amazonía. Puede crecer hasta 10 m de altura y su característica más distintiva son sus frutos que se forman en racimos al final de las ramas. Estas vainas de semillas de color marrón rojizo están cubiertas de espigas suaves y contienen pequeñas semillas rojas pigmentadas envueltas en una capa cerosa. Dato curioso: el árbol de achiote tiene muchos usos tradicionales como tinte y, a menudo, se lo conoce como el árbol de lápiz labial. Las tribus amazónicas suelen utilizar el achiote para pintar caras y cuerpos, así como para proteger su piel de los insectos y las quemaduras solares y ayudar a sanar las heridas.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-achiote.avif`,
    isActive: false
  },
  {
    id: 35,
    name: 'Palma de asaí (Euterpe oleracea)',
    description: 'La palma de acai (también llamada euterpe oleracea) es una especie de palmera cultivada principalmente por sus frutos, hojas y madera del tronco. Originaria de la cuenca del río Amazonas, la palma de acai prospera en altas densidades distribuidas en pantanos y llanuras aluviales. Se puede encontrar en matas de hasta 20 tallos. El fruto de la euterpe oleracea se llama acai. Es una baya similar en apariencia a una uva pero más pequeña. Los frutos inmaduros son de color verde brillante. A medida que maduran, dependiendo de la variedad de palma, se vuelven de color púrpura o verde opaco.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-acai-palm.avif`,
    isActive: false
  },
  {
    id: 36,
    name: 'Lechuga de agua (Pistia stratiotes)',
    description: 'La lechuga de agua es una planta perenne flotante popular que crece en regiones tropicales y subtropicales. Como sugiere su nombre, la planta parece una cabeza de hojas verdes. La planta crece en rosetas con hojas gruesas pero suaves. Cada roseta puede alcanzar un diámetro de unos 30 cm y una altura de 10 cm. Las plantas de lechuga de agua son populares entre los estanques de jardín, ya que pueden inhibir el crecimiento de algas y limpiar el agua. Dato curioso: las plantas de lechuga de agua tienen raíces extremadamente densas que se extienden hasta 102 cm bajo el agua y, a menudo, sirven como refugio para peces pequeños.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-water-lettuce.avif`,
    isActive: false
  },
  {
    id: 37,
    name: 'Jardines del Diablo (Supay chakra)',
    description: 'Los jardines del diablo son grandes grupos de árboles que aparecen aleatoriamente en la selva amazónica. Cada uno de estos jardines del diablo consiste casi en su totalidad en una sola especie: Duroia hirsuta (una especie de árbol mirmecófito). Duroia hirsuta es el hábitat preferido de la hormiga Myrmelachista schumanni.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazon-rainforest-devils-garden.avif`,
    isActive: false
  },
  {
    id: 38,
    name: 'Epífitas del Amazonas',
    description: 'Esto ha dado lugar a la evolución de las plantas que pueden vivir encima de los ramos de los árboles: Mucha Flora crece en troncos, ramas, hojas, etc. Lee todo de las flores del Oriente... De hecho cada árbol es un ecosistema en sí mismo, con numerosas especies de flora y fauna que crecen en él, como bromelias, anfíbios, orquídeas, reptiles, cactus, aráceas, helechos, musgos y líquenes. Las epífitas forman micro-ecosistemas completos en los árboles de macrolobia. Esos son árboles de la familia de leguminosa, que crecen en las orillas inundadas de la laguna Cuyabeno, donde crecen en formas muy irregulares, parecidas a "bonsai".',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/plantas-epifitas.avif`,
    isActive: false
  },
  {
    id: 39,
    name: 'Bromelias del Amazonas',
    description: 'Con más de 2.000 especies, las bromelias son muy prominentemente presentes en Cuyabeno. A veces uno puede encontrarlas  creciendo en el suelo, pero sobre todo como Epífites en las ramas de los árboles. Las hojas de las bromilias envolturan alrededor de los tallos de las plantas, creando pequeños espacios donde se acumula el agua de lluvia. Así a veces, una sola planta puede contener varios litros de agua. En ausencia de peces, estas "piscinas" pequeñas proveen ambientes seguros para especies acuáticas tales como los anfibios: Ranas, junto con sus renacuajos, salamandras, así como sus larvas. Otras criaturas incluyen caracoles, escarabajos, larvas de mosquitos, etc. Cuando esos animales mueren, sus cuerpos se descomponen en minerales que sirven como fertilizantes a las plantas hospedantes.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/16517f390cfb9410dc987b52733726f6.avif`,
    isActive: false
  },
  {
    id: 40,
    name: 'Hongos del Oriente Ecuatoriano',
    description: 'Con tanta humedad,se pueden encontrar hongos durante todo el año. Hay hongos que cubren todo el tronco de un árbol y brillan en la oscuridad, como el la primer imagen. Otros son  parásitos que crecen en el cuerpo de insectos, tal como en la imagen derecha. Existen hongos de cualquiera forma en la selva.',
    category: 'plants',
    imgSrc: `${PLANTS_URL}/amazonas2.avif`,
    isActive: false
  }
]

const LOCATIONS_URL = `${BASE_URL}/locations`
export const LOCATIONS: Card[] = [
  {
    id: 41,
    name: 'La pororoca en la desembocadura del Amazonas',
    description: 'En la desembocadura del Amazonas, donde una extensa pluma de agua fangosa avanza casi 200 kilómetros mar adentro, es posible observar la llamada pororoca. Según el Instituto Brasileño de Geografía y Estadística (IBGE), el fenómeno, uno de los más famosos de la región amazónica, se produce cuando las mareas del Océano Atlántico son lo suficientemente altas como para obligar al río Amazonas a retroceder, lo que genera olas de 3 a 6 metros de altura a lo largo de unos 20 kilómetros hacia el interior del río. Derivada de la lengua tupí, la palabra pororoca significa “estallido” y ocurre todos los días, con un periodo de mayor intensidad entre enero y mayo.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/porocora-ola.avif`,
    isActive: false
  },
  {
    id: 42,
    name: 'La cima del Pico da Neblina',
    description: 'También dentro de la selva amazónica se encuentra el pico más alto de Brasil. Con 2995 metros de altura, el Pico da Neblina, también conocido comoaripo Y, se encuentra en la Serra do Imeri, dentro del municipio de São Miguel da Cachoeira, en el estado de Amazonas, en la frontera con Venezuela. La excursión comienza en São Gabriel da Cachoeira, en un trayecto de 88 kilómetros en coche y otras seis horas en barco por el río Cauaburis hasta un campamento cerca de la aldea de Maturacá. Allí es posible pernoctar y someterse a rituales de orientación y protección realizados por los chamanes yanomami (ancianos de la comunidad y líderes espirituales). Al día siguiente, tras otras dos horas en barco, el grupo de visitantes llega al comienzo del sendero que lleva cuatro días de marcha hasta la cumbre.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/pico-da-neblina.avif`,
    isActive: false
  },
  {
    id: 43,
    name: 'Las cascadas de Presidente Figueiredo',
    description: 'El municipio de Presidente Figueiredo, a 107 kilómetros de Manaus, es conocido como la "Tierra de las Cascadas", según la Compañía de Turismo del Estado de Amazonas (Amazonastur). La principal cascada para los visitantes es la de Iracema, de ocho metros de altura. Según Amazonastur, la mayoría de las cascadas se encuentran en senderos de zonas aisladas y con cierto grado de dificultad de acceso. Por lo tanto, es obligatorio contratar un guía o una empresa acreditada para visitar las hermosas cascadas.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/reserva-ecologica-cachoeira.avif`,
    isActive: false
  },
  {
    id: 44,
    name: 'Archipiélago de las Anavilhanas, en el río Negro',
    description: 'En un laberinto de 30 000 hectáreas de islas y espejos de aguas negras que se transforman con la variación del nivel del río, el archipiélago de Anavilhanas destaca entre los destinos amazónicos. Bañado por el río Negro, Anavilhanas está a unos 40 kilómetros de la ciudad de Manaos y es el segundo mayor archipiélago fluvial del mundo, con unas 400 islas y 60 lagos, informa Amazonastur. Debido a su inmensa biodiversidad y riqueza natural, el lugar fue reconocido por la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco, por sus siglas en inglés) como Patrimonio Natural de la Humanidad en 2000.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/6a00d83452dc5c69e201b8d21c2e3b970c-800wi.avif`,
    isActive: false
  },
  {
    id: 45,
    name: 'Floresta Nacional de Tapajós',
    description: 'La extensión de la selva amazónica en el territorio brasileño favorece la aparición de iniciativas de turismo sostenible en zonas cuyos atractivos son especialmente singulares. Este es el caso de quienes visitan la Selva Nacional de Tapajós (también conocida como la Flona de Tapajós) una unidad de conservación de más de 500.000 hectáreas creada en 1970 en el estado brasileño de Pará.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/flona-tapajos-para-brasil.avif`,
    isActive: false
  },
  {
    id: 46,
    name: 'Yasuni Sacha ñampi',
    description: 'Cabañas rodeadas de la selva amazónica acogen a viajeros que pasan días en expediciones para ver delfines rosados de río, guacamayos y especies endémicas de monos y ranas arborícolas.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/dsc.avif`,
    isActive: false
  },
  {
    id: 47,
    name: 'Geoparque Napo Sumaco',
    description: 'También en la Amazonía ecuatoriana, una zona de 1.800 kilómetros cuadrados en la provincia de Napo. El parque está formado por yacimientos geológicos y arqueológicos, cuevas, espacios culturales y recreativos repartidos entre unidades de conservación, parques nacionales y terrenos privados. La iniciativa, gestionada por nativos quechuas, cuenta con la ayuda de líderes comunitarios, académicos, investigadores y voluntarios para mantener las atracciones turísticas.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/3e798257bce9f5b86f1e379ecd8aa930e8561307.avif`,
    isActive: false
  },
  {
    id: 48,
    name: 'Chalalán',
    description: 'Situado a 100 kilómetros al oeste de la ciudad de Rurrenabaque, en Bolivia, la experiencia turística comienza desde el trayecto inicial hasta las cabañas del albergue. Es un viaje de cinco horas por los ríos Beni y Tuichi. Al llegar a este alojamiento, los turistas tienen la opción de realizar excursiones fluviales o terrestres por la selva amazónica para observar la fauna y la flora locales, así como visitas a las comunidades cercanas.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/chalalan1.avif`,
    isActive: false
  },
  {
    id: 49,
    name: 'Uakari Ecolodge',
    description: 'En medio de un ecosistema de vegetación semi húmeda que representa el 3% de la selva amazónica, la Posada Uakari pretende ayudar a proteger la biodiversidad local. El proyecto de turismo sostenible sin ánimo de lucro está situado en el estado brasileño de Amazonas, cerca de la ciudad de Tefé, y se encuentra dentro de la Reserva de Desarrollo Sostenible de Mamirauá, entre los ríos Solimões, Japurá y Auati-Paraná. ',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/Uacari-6-.avif`,
    isActive: false
  },
  {
    id: 50,
    name: 'Río Amazonas',
    description: 'El río Amazonas (también llamado Paraná-Uassú o Paranaguasú por tribus tupí-guaraní1​) es un río de América del Sur que atraviesa Perú (nacimiento), Colombia y Brasil (desembocadura). Es el río más largo y caudaloso del mundo, y contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos, llevando en si, cerca de una quinta parte del agua dulce en estado líquido del planeta.2​ El Amazonas, que tiene la cuenca hidrográfica más grande en el mundo, alrededor de 7.4 millones de kilómetros cuadrados, representa aproximadamente la quinta parte del caudal fluvial del planeta.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/img2.rtve.avif`,
    isActive: false
  },
  {
    id: 51,
    name: 'Parque Turístico de Quistococha',
    description: 'El complejo ocupa un espacio de 369 hectáreas de bosque amazónico, y abraza a la Laguna Quistococha. Contiene una playa artificial de arena blanca denominada Tunchi Playa. Además, está rodeado por una vegetación compuesta principalmente por palmeras de aguaje, de «gran homogeneidad y tamaño dominante».1 El lugar también es usado para importantes trabajos de investigación, conservación y reforestación. Alberga un museo, un zoológico y un vivero natural. El museo comprende una colección de taxidermia de la fauna amazónica; el zoológico acoge a varios animales como mamíferos, aves, reptiles, anfibios y peces. Por último, en el vívero se realiza trabajos de reforestación y jardinería botánica.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/Quistococha2.avif`,
    isActive: false
  },
  {
    id: 52,
    name: 'Volcán Pacaya',
    description: 'El Volcán de Pacaya es un volcán activo ubicado en el municipio de Amatitlán en el departamento de Guatemala y el municipio de San Vicente Pacaya en el departamento de Escuintla, Guatemala. Se desconoce hace cuántos miles de años hizo erupción por primera vez, pero se han registrado al menos 23 erupciones desde la época de colonización española de América en Guatemala. Después de estar dormido durante un siglo, hizo erupción violentamente en 1965 y desde entonces ha estado en constante actividad eruptiva.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/volvan-pacaya-afpjpg.avif`,
    isActive: false
  },
  {
    id: 53,
    name: 'Las cataratas de Gocta',
    description: 'Es una de las más altas del planeta, con saltos de agua de más de 700 metros. Se ubica en la provincia de Bongará. Está compuesta por dos caídas de agua, rodeadas de abundante vegetación y muchas especies de animales, algunas en peligro de extinción.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/cataratas-gocta-768x432.avif`,
    isActive: false
  },
  {
    id: 54,
    name: 'Catarata de Yumbilla',
    description: 'Reconocida como una de las cataratas más grandes del mundo, con 895 metros de altura. Está situada en el distrito de Cuipes, provincia de Bongará. Para llegar, se tiene que realizar una pequeña ruta de trekking que vale la pena completar para observar el paisaje.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/El-misterio-del-nacimiento-de-la-catarata-Yumbilla-en-Peru-768x432.avif`,
    isActive: false
  },
  {
    id: 55,
    name: 'Área de Conservación Privada Bosque de Palmeras – Taulia – Molinopampa',
    description: 'Este lugar destaca por la fauna que protege. Sin embargo, la mayoría viaja allí para observar a una de las especies más reconocidas: la orquídea, una flor cuya belleza enorgullece a los habitantes de la Amazonía. Además, se puede observar casi 1,500 especies de flores e incluso extraños ejemplares únicos de la región.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/DSC_00771-768x510.avif`,
    isActive: false
  },
  {
    id: 56,
    name: 'Río Madre de Dios',
    description: 'Se encuentra en una zona muy húmeda de la Amazonía subandina, la Amazonía peruana, lo que explica su alto caudal. Permite una óptima navegabilidad , se puede viajar sin dificultades desde Puerto Maldonado hasta su confluencia con el río Beni. Entre las muchas actividades, que se desarrollan en sus riberas, destacan las plantaciones de mango y la minería de oro, además de la tala selectiva de finas maderas y la agricultura, que provocan serios problemas ambientales.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/tambopata-rio-madrededios-400x280.avif`,
    isActive: false
  },
  {
    id: 57,
    name: 'Reserva Nacional Pacaya-Samiria',
    description: 'La Reserva Nacional Pacaya-Samiria (RNPS) es una zona protegida del Perú ubicada en el departamento de Loreto en la Amazonia. Con una superficie de 2 080 000 ha (20 800 km²) es la Reserva Nacional más extensa del Perú, la segunda área natural protegida del país (luego del parque nacional Alto Purús) y la cuarta área protegida de toda América del Sur. Asimismo, es el área protegida de Amazonía inundable (ecosistema conocido como várzea) más extensa de Sudamérica, debido a ello fue designada sitio RAMSAR el 28 de agosto de 1986.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/pacaya-samiria2.avif`,
    isActive: false
  },
  {
    id: 58,
    name: 'Parque nacional Alto Purús',
    description: 'El parque está situado en las provincias de Purús y Atalaya en el departamento de Ucayali, y la provincia de Tahuamanu en el departamento de Madre de Dios. En la zona se estima una población humana de 3600 habitantes siendo el 75 % indígenas. Los pueblos indígenas son culinas, cashinahuas, sharanahuas, mastanahuas, amahuacas, ashánincas y chaninahuas que por lo general se asientan en los ríos Purús y Curanja. Asimismo, se ha reportado población indígena no contactada de mashcos.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/ZY25X3U5O5FWFDJ23EYEL3BWEM.avif`,
    isActive: false
  },
  {
    id: 59,
    name: 'Caverna de Quiocta',
    description: 'Con una profundidad de 560 metros y ubicada a 2 horas en carro desde la ciudad de Chachapoyas, es el destino ideal para los que quieran aventurarse. Al adentrarse en este lugar, se observan estalactitas y estalagmitas; es decir, ¡formaciones rocosas que poseen miles de años de antigüedad!',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/TREKING_CAVERNA_QUIOCTA_1_1860-768x389.avif`,
    isActive: false
  },
  {
    id: 60,
    name: 'Valle de los Cóndores',
    description: 'Un lugar con flora y fauna privilegiadas, perfecto para la observación de aves. Allí conviven alrededor de 10 especies de colibríes, 4 especies de Tangara, Tucán Andino, Quetzal de cabeza dorada, entre otros, incluyendo el majestuoso cóndor.',
    category: 'locations',
    imgSrc: `${LOCATIONS_URL}/laguna-de-condores-banner-min.avif`,
    isActive: false
  }
]

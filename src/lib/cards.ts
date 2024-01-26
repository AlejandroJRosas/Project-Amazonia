import type { Card } from './types/card'

export const categoryImages = {
  wildlife:
    'https://static.vecteezy.com/system/resources/previews/018/813/106/non_2x/animals-in-the-amazon-forest-illustration-eps10-editable-vector.jpg',
  plants:
    'https://img.freepik.com/vector-gratis/planta-emoji_78370-262.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1706054400&semt=ais',
  locations: 'https://www.fundacionaquae.org/wp-content/uploads/2016/05/Amazonas2.jpg'
}

export const WILDLIFE: Card[] = [
	{
		id: 1,
		name: 'Mico Tití / Leoncito',
		description: 'Es también conocido como “mono de bolsillo” y se caracteriza por su diminuto tamaño, pues llega a medir hasta 40 centímetros y no pesa más de 700 gramos. Generalmente su cola puede ser más larga que su cuerpo. Este primate habita en los altos árboles de la selva amazónica y se alimenta de frutas, insectos y pequeños reptiles que pueden cazar en su hábitat. En el Amazonas, puedes encontrarlos en su habitad natural e interactuar con ellos en la isla de los micos.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/RECEPTIVOS/Pto%20nari%C3%B1o%20+%20Isla%20de%20los%20Micos/isla%20de%20los%20micos.jpg?width=400&name=isla%20de%20los%20micos.jpg',
    isActive: false
	},
	{
		id: 2,
		name: 'Mono araña',
		description: 'El mono araña es una especie de primate que también es encontrado en el Amazonas e igualmente se alimenta de frutas, insectos y pequeños reptiles, pero su tamaño es más grande, pues puede medir de 65 a 90 centímetros de longitud sin cola. Este animal no posee dedo pulgar y su color varía de castaño claro a negro, dependiendo la especie.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Mono%20aran%CC%83a.jpg?width=500&name=Mono%20aran%CC%83a.jpg',
    isActive: false
	},
	{
		id: 3,
		name: 'Anguila eléctrica',
		description: 'La anguila eléctrica a veces puede ser confundida con serpientes acuáticas, pero esta es una especie de pez que se encuentra en el río Amazonas y es única pero con unas características muy particulares. Este animal puede transmitir corrientes eléctricas desde el interior de su cuerpo, generando descargas eléctricas hasta de 600 voltios, lo cual, puede ser mortal para cualquier ser humano o animal que se le acerque, por eso es considerado como uno de los más peligrosos de toda la región amazónica. Puedes encontrar este pez en lagos como los de la reserva natural Marasha.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Anguila-Ele%CC%81ctrica.jpg?width=600&name=Anguila-Ele%CC%81ctrica.jpg',
    isActive: false
	},
	{
		id: 4,
		name: 'Hormiga Bala',
		description: 'La hormiga bala es encontrada en las profundas selvas del Amazonas de Brasil y Venezuela, se dice que puede medir hasta 25 milímetros, sin embargo, las hormigas obreras miden entre 22 y 28 milímetros de longitud y las reinas son un poco más grandes. Este insecto se caracteriza por tener la picadura más dolorosa de todas, superando el de una avispa. Sin embargo, se dice que el alcance del dolor puede ser como el de una bala, de allí viene el nombre de esta famosa hormiga amazónica.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Hormiga%20bala.jpg?width=600&name=Hormiga%20bala.jpg',
    isActive: false
	},
	{
		id: 5,
		name: 'Rana dardo venenosa',
		description: 'La rana dardo o también conocida como rana flecha, es calificada como una de las más venenosas del mundo, pues en su cuerpo carga “batracoxina”, un poderoso veneno que puede lograr matar a seres humanos en tan solo segundos. Sin embargo, esta especie de rana se esconde en las profundas selvas del Amazonas, además es fácil de identificar por sus llamativos colores.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Rana%20dardo%20venenosa.png?width=598&name=Rana%20dardo%20venenosa.png',
    isActive: false
	},
	{
		id: 6,
		name: 'Anaconda verde',
		description: 'Este es un reptil encontrado en el río Amazonas y compone la familia de las famosas boas. Se dice que puede pesar más 220 kilogramos, considerada entonces como una de las más pesadas de toda su especie, y también, la de mayor longitud. Las anacondas verdes no suelen agredir a los seres humanos para alimentarse, a menos que se sientan amenazadas o atacadas, puesto que no pertenecemos a su cadena alimenticia.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Anaconda%20verde.jpg?width=600&name=Anaconda%20verde.jpg',
    isActive: false
	},
	{
		id: 7,
		name: 'Rana de cristal',
		description: 'Este anfibio es encontrado en gran parte del Amazonas colombiano y son animales nocturnos, además llamativos por tener la piel casi transparente, generalmente habitan en el sotobosque, estrato arbóreo y junto a ríos o arroyos de las selvas tropicales. La rana de cristal es un importante símbolo para los colombianos, por eso se encuentra plasmada en la moneda de $500 del país.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Rana%20de%20cristal.jpg?width=600&name=Rana%20de%20cristal.jpg',
    isActive: false
	},
	{
		id: 8,
		name: 'Piraña',
		description: 'Las famosas pirañas del Amazonas, son bastante reconocidas por sus afilados dientes y gran apetito carnívoro, también es calificado como uno de los animales más peligrosos de la región. Sin embargo, cabe resaltar que este pez no ataca a los seres humanos a menos que sientan sangre. Las pirañas son especies herbívoras, suelen medir de 15 a 25 centímetros, y generalmente, andan siempre acompañadas en manadas con el fin de protegerse las unas a las otras y poder cazar en conjunto.',
		category: 'wildlife',
		imgSrc: 'https://www.amazonate.com/hs-fs/hubfs/BLOG/BLOG%2016/Piran%CC%83as.jpg?width=500&name=Piran%CC%83as.jpg',
    isActive: false
	},
	{
		id: 9,
		name: 'Jaguar (Panthera onca)',
		description: 'El majestuoso jaguar es el felino de mayor tamaño de América y sin lugar a dudas, uno de los grandes depredadores más emblemáticos de la selva amazónica. Pese a su importancia y admiración por parte de las diferentes culturas indígenas amazónicas pasadas y presentes, los jaguares se incluyen dentro de los animales del Amazonas en peligro de extinción. Aquí puedes conocer más sobre los Animales en peligro de extinción en el Amazonas. La situación actual del jaguar en el Amazonas es bastante inestable, ya que el número de ejemplares disminuye constantemente y la Lista Roja de la UICN o Unión Internacional para la Conservación de la Naturaleza cataloga a este gran felino como "especie casi amenazada" (NT o Near Threatened).',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/jaguar_panthera_onca_2285_0_600.webp',
    isActive: false
	},
	{
		id: 10,
		name: 'Perezoso (Bradypus tridactylus)',
		description: 'Los perezosos (Bradypus tridactylus) encuentran su hábitat natural en las ramas altas de los árboles de las cuencas amazónicas, y es considerada una de las especies endémicas del Amazonas más llamativas, caracterizada por su lento metabolismo y su hábito de descansar durante casi todo el día. Actualmente, la población de perezosos es estable en el Amazonas y no sufren riesgo de extinción, pero es cierto que están sufriendo capturas ilegales a diario y en cantidad, como sucede en otras zonas de América en las que habita. Esto nos lleva a pensar que, de seguir así, en poco tiempo podrían pasar a formar parte de esta temible lista.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/perezoso_bradypus_tridactylus_2285_1_600.webp',
    isActive: false
	},
	{
		id: 11,
		name: 'Capibara (Hydrochaeris hydrochaeris)',
		description: 'Otro de los mamíferos más característicos del biodiverso Amazonas es el capibara o carpincho. Se trata del roedor de mayor tamaño del mundo, llegando a alcanzar el metro y medio de longitud y una altura de 0.65 metros; pesando unos 50 kilogramos. Presenta hábitos tanto terrestres como acuáticos, haciendo uno de su gran capacidad para nadar cerca de las orillas del río Amazonas. La población de capibaras es bastante estable en este ecosistema de selvas amazónicas y no se encuentra actualmente en peligro de extinción.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/capibara_hydrochaeris_hydrochaeris_2285_2_600.webp',
    isActive: false
	},
	{
		id: 12,
		name: 'Tucanes (Familia Ramphastidae)',
		description: 'Los coloridos tucanes llenan de vida las copas de los árboles de la selva amazónica. Su inconfundible pico curvado hacia abajo de gran tamaño e intensos colores lo convierten en una de las aves más conocidas y relacionadas con los hábitats que se suceden durante todo el recorrido del río Amazonas. Diferentes especies de tucanes abundan tanto en las selvas de Brasil, como en las del Perú y Colombia. De esta manera, podemos decir que el tucán toco (Ramphastos toco) es una de las especies de animales del amazonas colombiano más conocidas dentro de esta familia de aves, siendo además el tucán de mayor tamaño. Su situación actual en el Amazonas lo sitúa fuera de peligro de extinción.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/tucanes_familia_ramphastidae_2285_3_600.webp',
    isActive: false
	},
	{
		id: 13,
		name: 'Guacamayo azulamarillo (Ara ararauna)',
		description: 'Uno de los guacamayos más populares y coloridos de toda Sudamérica, el guacamayo azulamarillo o guacamayo azul y amarillo, encuentra su hábitat natural en la cuenca amazónica, llegando incluso a distribuirse algunos ejemplares desde Panamá hasta el norte de Argentina. Su estado dentro de la Lista Roja de la UICN es de "preocupación menor" (LC), por lo que hoy en día, esta asombrosa ave cuenta con individuos suficientes para mantener su población en equilibrio, aunque este equilibrio se ve amenazado por la destrucción de su hábitat y su captura ilegal.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/guacamayo_azulamarillo_ara_ararauna_2285_4_600.webp',
    isActive: false
	},
	{
		id: 14,
		name: 'Martín pescador del Amazonas (Chloroceryle amazona)',
		description: 'Estas preciosas aves de pequeño tamaño y colorido plumaje se distribuyen por todo el Amazonas, siempre en busca de peces para alimentarse. A menudo se encuentran en las ramas bajas de los árboles a la orilla del gran río, esperando el momento idóneo para zambullirse velozmente y capturar a su presa, alguno de los diversos peces que habitan las aguas del Amazonas. El Martín pescador del Amazonas cuenta con una población en equilibrio dentro de la región amazónica y no corre riesgo de extinción.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/martin_pescador_del_amazonas_chloroceryle_amazona_2285_5_600.webp',
    isActive: false
	},
	{
		id: 15,
		name: 'Basilisco marrón (Basiliscus vittatus)',
		description: 'Este quizás es uno de los animales del Amazonas poco conocidos, sobre todo comparado con otros de la lista. No obstante, son muy conocidos por su asombrosa habilidad para correr por la superficie del agua sin hundirse, los basiliscos son otro de los grupos de reptiles que podemos encontrar fácilmente en la región amazónica. Concretamente el basilisco marrón se distribuye por ecosistemas terrestres cercando a orillas de ríos como el Amazonas a su paso por Colombia. No se encuentran en peligro de extinción, por ahora conservan su población en equilibrio, pese a la deforestación del Amazonas y otras problemáticas ambientales que sufre con frecuencia la cuenca amazónica.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/basilisco_marron_basiliscus_vittatus_2285_7_600.webp',
    isActive: false
	},
	{
		id: 16,
		name: 'Caimán negro del Orinoco (Melanosuchus niger)',
		description: 'Es un reptil nativo tanto de las regiones amazónicas de Brasil, como de Perú y Colombia; así como de otras regiones tropicales sudamericanas (Ecuador y Bolivia), en las que su riesgo de extinción, de momento, es muy bajo. De esta manera, podemos decir que forman parte de los animales de la Amazonía ecuatoriana y colombiana.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/caiman_negro_del_orinoco_melanosuchus_niger_2285_8_600.webp',
    isActive: false
	},
	{
		id: 17,
		name: 'Anaconda verde (Eunectes murinus)',
		description: 'Siguiendo con esta lista de animales del Amazonas nos detenemos a conocer a uno de los más emblemáticos Considerada la reina del Amazonas, tanto las poblaciones locales como los visitantes de cualquier región amazónica del Perú, Brasil o Colombia, no dudarán a la hora de reconocer a la asombrosa anaconda verde. Se trata de la serpiente de mayor peso y volumen del mundo, perteneciente a la familia de boas constrictoras, es decir, aquellas serpientes de gran tamaño con hábitos estranguladores hacia sus presas para asfixiarlas antes de empezar a ingerirlas lentamente. Su estado de conservación en el Amazonas considera, por el momento, a la especie fuera de peligro de extinción.',
		category: 'wildlife',
		imgSrc: 'https://cdn0.ecologiaverde.com/es/posts/5/8/2/anaconda_verde_eunectes_murinus_2285_6_600.webp',
    isActive: false
	},
	{
		id: 18,
		name: 'El tucuxi o bufeo negro (Sotalia fluviatilis)',
		description: 'El Tucuxi se conoce como el «otro delfín» del Amazonas. El tucuxi es muy similar al delfín mular. Sin embargo, es de menor tamaño, en particular, la variedad fluvial (1,5 m), que es más pequeño que su homólogo marino (hasta 2,1 m).',
		category: 'wildlife',
		imgSrc: 'https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08161546/delfines-animales-conservacion-biodiversidad-extincion-12-768x509.jpg',
    isActive: false
	},
	{
		id: 19,
		name: 'Tamarino de manto dorado (Saguinus tripartitus)',
		description: 'Una especie sudamericana del género Saguinus. Este pequeño mico puebla las selvas amazónicas de Perú y Ecuador, en donde forman grupos de entre seis y nueve miembros.',
		category: 'wildlife',
		imgSrc: 'https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/17134907/Yasuni_185.jpg',
    isActive: false
	},
	{
		id: 20,
		name: 'Rana de flecha verde y negra (Dendrobates auratus)',
		description: 'Dendrobates auratus o rana flecha verde y negra es una especie de anfibio anuro de la familia Dendrobatidae muy común en el suelo de los bosques de Centroamérica (desde el sur de Nicaragua) y la parte noroeste de Colombia. Son animales diurnos. Posee una coloración altamente variable.',
		category: 'wildlife',
		imgSrc: 'https://us.123rf.com/450wm/kjwells86/kjwells861802/kjwells86180200594/95725934-una-rana-dardo-venenoso-verde-y-negro-dendrobates-auratus-se-asienta-sobre-una-hoja-de-pl%C3%A1tano-en.jpg',
    isActive: false
	}
]

export const PLANTS: Card[] = [
	{
		id: 21,
		name: 'Plants',
		description: 'Various plant species',
		category: 'plants',
		imgSrc: 'plants.png',
    isActive: false
	},
	{
		id: 22,
		name: 'Flowers',
		description: 'Different types of flowers',
		category: 'plants',
		imgSrc: 'flowers.png',
    isActive: false
	},
	{
		id: 23,
		name: 'Trees',
		description: 'Diverse tree species',
		category: 'plants',
		imgSrc: 'trees.png',
    isActive: false
	},
	{
		id: 24,
		name: 'Herbs',
		description: 'Various herb varieties',
		category: 'plants',
		imgSrc: 'herbs.png',
    isActive: false
	},
	{
		id: 25,
		name: 'Fruits',
		description: 'Different fruit-bearing plants',
		category: 'plants',
		imgSrc: 'fruits.png',
    isActive: false
	},
	{
		id: 26,
		name: 'Vegetables',
		description: 'Various vegetable plants',
		category: 'plants',
		imgSrc: 'vegetables.png',
    isActive: false
	},
	{
		id: 27,
		name: 'Cacti',
		description: 'Different cactus species',
		category: 'plants',
		imgSrc: 'cacti.png',
    isActive: false
	},
	{
		id: 28,
		name: 'Shrubs',
		description: 'Different shrub varieties',
		category: 'plants',
		imgSrc: 'shrubs.png',
    isActive: false
	},
	{
		id: 29,
		name: 'Grasses',
		description: 'Various grass species',
		category: 'plants',
		imgSrc: 'grasses.png',
    isActive: false
	},

	{
		id: 30,
		name: 'Succulents',
		description: 'Different succulent plants',
		category: 'plants',
		imgSrc: 'succulents.png',
    isActive: false
	},
	{
		id: 31,
		name: 'Bamboos',
		description: 'Various bamboo species',
		category: 'plants',
		imgSrc: 'bamboos.png',
    isActive: false
	},
	{
		id: 32,
		name: 'Orchids',
		description: 'Different orchid species',
		category: 'plants',
		imgSrc: 'orchids.png',
    isActive: false
	},
	{
		id: 33,
		name: 'Ferns',
		description: 'Various fern varieties',
		category: 'plants',
		imgSrc: 'ferns.png',
    isActive: false
	},
	{
		id: 34,
		name: 'Palms',
		description: 'Different palm tree species',
		category: 'plants',
		imgSrc: 'palms.png',
    isActive: false
	},
	{
		id: 35,
		name: 'Bonsai',
		description: 'Various bonsai plants',
		category: 'plants',
		imgSrc: 'bonsai.png',
    isActive: false
	},
	{
		id: 36,
		name: 'Aquatic Plants',
		description: 'Plants that thrive in water environments',
		category: 'plants',
		imgSrc: 'aquatic_plants.png',
    isActive: false
	},
	{
		id: 37,
		name: 'Mosses',
		description: 'Different moss species',
		category: 'plants',
		imgSrc: 'mosses.png',
    isActive: false
	},
	{
		id: 38,
		name: 'Fungi',
		description: 'Various fungi species',
		category: 'plants',
		imgSrc: 'fungi.png',
    isActive: false
	},
	{
		id: 39,
		name: 'Carnivorous Plants',
		description: 'Plants that capture and digest insects',
		category: 'plants',
		imgSrc: 'carnivorous_plants.png',
    isActive: false
	},
	{
		id: 40,
		name: 'Medicinal Plants',
		description: 'Plants with medicinal properties',
		category: 'plants',
		imgSrc: 'medicinal_plants.png',
    isActive: false
	}
]

export const LOCATIONS: Card[] = [
	{
		id: 41,
		name: 'Amazon Rainforest',
		description: 'Lush and diverse rainforest ecosystem',
		category: 'locations',
		imgSrc: 'amazon_rainforest.png',
    isActive: false
	},
	{
		id: 42,
		name: 'Amazon River',
		description: 'The second-longest river in the world',
		category: 'locations',
		imgSrc: 'amazon_river.png',
    isActive: false
	},
	{
		id: 43,
		name: 'Iquitos, Peru',
		description: 'City located in the Amazon rainforest',
		category: 'locations',
		imgSrc: 'iquitos_peru.png',
    isActive: false
	},
	{
		id: 44,
		name: 'Manaus, Brazil',
		description: 'Metropolitan area in the heart of the Amazon',
		category: 'locations',
		imgSrc: 'manaus_brazil.png',
    isActive: false
	},
	{
		id: 45,
		name: 'Amazon Basin',
		description: 'Large drainage basin of the Amazon River',
		category: 'locations',
		imgSrc: 'amazon_basin.png',
    isActive: false
	},
	{
		id: 46,
		name: 'YasunÃ­ National Park, Ecuador',
		description: 'Biodiverse national park in the Amazon',
		category: 'locations',
		imgSrc: 'yasuni_national_park.png',
    isActive: false
	},
	{
		id: 47,
		name: 'Tambopata National Reserve, Peru',
		description: 'Protected area in the Peruvian Amazon',
		category: 'locations',
		imgSrc: 'tambopata_national_reserve.png',
    isActive: false
	},
	{
		id: 48,
		name: 'Amazon Indigenous Communities',
		description: 'Traditional communities living in the Amazon',
		category: 'locations',
		imgSrc: 'indigenous_communities.png',
    isActive: false
	},
	{
		id: 49,
		name: 'Amazon Rainforest Canopy',
		description: 'Upper layer of the rainforest with high biodiversity',
		category: 'locations',
		imgSrc: 'rainforest_canopy.png',
    isActive: false
	},
	{
		id: 50,
		name: 'Amazon Rainforest Flora',
		description: 'Diverse plant life in the Amazon',
		category: 'locations',
		imgSrc: 'rainforest_flora.png',
    isActive: false
	},
	{
		id: 51,
		name: 'Amazon Rainforest Fauna',
		description: 'Rich animal diversity in the Amazon',
		category: 'locations',
		imgSrc: 'rainforest_fauna.png',
    isActive: false
	},
	{
		id: 52,
		name: 'Amazon Rainforest Waterfalls',
		description: 'Scenic waterfalls within the rainforest',
		category: 'locations',
		imgSrc: 'rainforest_waterfalls.png',
    isActive: false
	},
	{
		id: 53,
		name: 'Peruvian Amazon Villages',
		description: 'Villages nestled in the Peruvian Amazon',
		category: 'locations',
		imgSrc: 'amazon_villages.png',
    isActive: false
	},
	{
		id: 54,
		name: 'Amazon Rainforest Aerial View',
		description: 'Aerial perspective of the vast rainforest landscape',
		category: 'locations',
		imgSrc: 'rainforest_aerial_view.png',
    isActive: false
	},
	{
		id: 55,
		name: 'Amazon Rainforest Tributaries',
		description: 'River tributaries flowing through the rainforest',
		category: 'locations',
		imgSrc: 'rainforest_tributaries.png',
    isActive: false
	},
	{
		id: 56,
		name: 'Madre de Dios River, Peru',
		description: 'River in the Peruvian Amazon basin',
		category: 'locations',
		imgSrc: 'madre_de_dios_river.png',
    isActive: false
	},
	{
		id: 57,
		name: 'Pacaya-Samiria National Reserve, Peru',
		description: 'Protected natural area in the Amazon basin',
		category: 'locations',
		imgSrc: 'pacaya_samiria_national_reserve.png',
    isActive: false
	},
	{
		id: 58,
		name: 'Amazon Rainforest Sunrise',
		description: 'Morning sun rising over the rainforest',
		category: 'locations',
		imgSrc: 'rainforest_sunrise.png',
    isActive: false
	},
	{
		id: 59,
		name: 'Amazon Rainforest Sunset',
		description: 'Evening sun setting in the rainforest',
		category: 'locations',
		imgSrc: 'rainforest_sunset.png',
    isActive: false
	},
	{
		id: 60,
		name: 'Amazon Rainforest Waterways',
		description: 'Navigable waterways through the rainforest',
		category: 'locations',
		imgSrc: 'rainforest_waterways.png',
    isActive: false
	}
]

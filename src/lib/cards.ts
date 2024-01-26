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
		name: 'Ceiba (Ceiba pentandra)',
		description: 'Alcanzando hasta 70 m de altura, el árbol kapok es uno de los gigantes del Amazonas. También conocido como el árbol de ceiba, esta especie se eleva sobre el resto de la vegetación de la selva e incluso puede crecer hasta 4 m por año. El árbol es el hogar de una serie de especies animales, incluidas aves y ranas. Los murciélagos a menudo se sienten atraídos por los ceibas debido al olor que emiten sus flores rosadas. Nativo de la selva amazónica tropical, el árbol de ceiba también se puede encontrar en América Central, México e incluso en África occidental. Dato curioso: cuando se sumerge en agua, la fruta sin abrir del árbol de ceiba pentandra no se hundirá. Se cree que el fruto del árbol kapok flotó desde América Latina hasta África.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-kapok-tree-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 22,
		name: 'Nenúfar Gigante (Victoria Amazónica)',
		description: 'Victoria Amazónica (anteriormente conocida como Victoria Regia) es el miembro más grande de la familia de los nenúfares. El nenúfar gigante tiene hojas grandes y redondas con los bordes hacia arriba. El diámetro de cada hoja puede alcanzar un diámetro asombroso de 10 pies. Quizás su característica más espectacular, sin embargo, son sus flores. Aunque emergen de noche y solo duran 48 horas, las flores del nenúfar gigante se encuentran entre las más hermosas de la Amazonía. Las flores, al igual que la propia planta, pueden alcanzar tamaños espectaculares, de hasta 16 pulgadas. La mejor manera de presenciar el nenúfar gigante en Perú es uniéndose a un recorrido por la selva amazónica con un guía experimentado. En nuestros tours amazónicos en Iquitos, por ejemplo, podrás visitar la isla de Yanamono, donde podrás ver la majestuosa Victoria Amazonica. Aún más, los tours incluyen un emocionante recorrido por la selva amazónica, una visita a la isla de monos y una visita a una comunidad local.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-giant-water-lilly-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 23,
		name: 'Árbol de caucho (Hevea brasiliensis)',
		description: 'El árbol de caucho (Hevea brasiliensis) es un árbol de madera de caucho nativo de las selvas tropicales de la cuenca del Amazonas y se encuentra en Perú, Brasil, Ecuador y Colombia. Su característica más famosa es la savia blanca lechosa conocida como látex. El árbol del caucho puede vivir hasta 100 años y crecer hasta alturas de 130 pies. Una vez que una hevea brasiliensis alcanza los seis años, se puede extraer látex. La savia de látex del árbol del caucho se utiliza en el procesamiento moderno del caucho y sigue siendo una fuente de ingresos para varias comunidades indígenas de la Amazonía. Dato curioso: los usos de los árboles de caucho fueron descubiertos y utilizados por primera vez por los antiguos aztecas, olmecas y mayas. La savia de látex se usó para producir una serie de artículos, incluidos ropa y zapatos impermeables.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-rubber-tree-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 24,
		name: 'Orquídea (Orchidaceae)',
		description: 'Originaria de ambientes cálidos y húmedos, la orquídea amazónica es una de las flores más conocidas y delicadas de la selva peruana. A diferencia de las elegantes orquídeas asiáticas, las especies que se encuentran en América Latina cuentan con una paleta de colores más vibrante, que incluye tonos de rojo, púrpura, amarillo e incluso negro. Si bien estas orquídeas son nativas de condiciones húmedas, aún son extremadamente adaptables y pueden crecer bien en casi todos los climas. De hecho, con más de 18.000 especies diferentes, las orquídeas representan alrededor del 8% de todas las plantas con flores.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-giant-orchide-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 25,
		name: 'Flor de la pasión (Pasiflora)',
		description: 'La flor de la pasión es una de las flores más elaboradas que encontrarás en la Amazonía peruana. Las flores de la pasión (o pasionarias) son plantas coloridas que se pueden encontrar entrelazadas alrededor de especies de flora más grandes de la selva tropical o molidas en forma de arbustos. Debido a que la mayoría de Pasiflora depende de insectos y pájaros para la polinización, las flores han adoptado colores brillantes que van del blanco al rojo para atraer polinizadores como los insectos. Algunas especies, sin embargo, son polinizadas por murciélagos, por lo que florecen de noche. Sus colores son más sutiles y producen un fuerte olor para atraer a sus polinizadores nocturnos.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-passion-flower-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 26,
		name: 'Bromelias (Bromeliaceae)',
		description: 'Las bromelias son plantas fascinantes con llamativas hojas en forma de espada y colores brillantes (generalmente en tonos naranja, azul, rojo y morado). Hay más de 2.700 especies de bromelias en todo el mundo, siendo la piña la más conocida. En Perú, las bromelias se encuentran en lo profundo de la selva tropical. Crecen en las ramas y troncos de los árboles en la capa de dosel del bosque.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-bromeliads-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 27,
		name: 'Cacao (Theobromacacao)',
		description: 'Los árboles de cacao son bastante pequeños (4 – 7.5 m high), árboles de hoja perenne que se encuentran en la selva amazónica. Sus semillas, más conocidas como granos de cacao, se utilizan en la fabricación de chocolate. Los árboles de cacao son muy exigentes con el lugar donde viven. Para prosperar, estas especies necesitan calor y lluvia constantes. También necesitan estar a la sombra del sol tropical y al abrigo del viento fuerte. En las condiciones adecuadas, el árbol del cacao produce varios racimos de frutos que emergen directamente del tronco y las ramas del árbol. Las vainas de cacao inmaduras son verdes. A medida que maduran, adquieren un tono anaranjado y pueden crecer hasta 30 cm de largo y 13 cm de ancho.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-giant-cacao-exploor-peru-blog.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 28,
		name: 'Planta de Café (Coffea arabica)',
		description: 'El cafeto es una planta de hoja perenne que, aunque puede crecer hasta 9 m de altura en la naturaleza, se considera un arbusto o arbusto. Tiene hojas brillantes de color verde oscuro y pequeñas flores blancas que producen un aroma único para ayudar a atraer insectos polinizadores. Una vez que las flores caen de la planta, comienzan a aparecer bayas en su lugar. Las bayas están maduras una vez que alcanzan un color carmesí brillante. Dentro de cada baya hay unos dos pequeños granos de café verde. Las plantas de café pueden vivir hasta 100 años y, por lo general, se necesitan de 5 a 8 años de crecimiento para que una nueva planta de café comience a producir frutos.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-giant-coffee-plant-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 29,
		name: 'Mono Brush Vine (Combretum rotundifolium)',
		description: 'El Monkey Brush es una enredadera llamativa originaria de la región de la selva amazónica. Se considera una planta parásita y se propaga a otras plantas y árboles. Tiene flores puntiagudas que, cuando florecen, se asemejan a un cepillo brillante. Las flores cambian de color de amarillo a naranja intenso, asemejándose a una llama. Son polinizados por abejas y otros insectos, y la fruta sirve como alimento para una serie de aves diferentes.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-monkey-brush-vine-exploor-peru-blog...png?w=775&ssl=1',
    isActive: false
	},

	{
		id: 30,
		name: 'Planta de labios calientes (Palicourea elata)',
		description: 'Las heliconias, también llamadas pinzas de langosta o flores de loro, son plantas únicas en forma de paleta que se encuentran en la selva amazónica. Sus hojas que desafían la gravedad se conocen como brácteas y pueden ser rojas, amarillas, rosadas, naranjas, moradas o una combinación de estas. Las flores de la heliconia son diminutas y se pueden encontrar dentro de las brácteas. Dato curioso: cuando llueve, la heliconia acumula agua en las brácteas y, al igual que la planta de bromelia, puede servir como hogar para una variedad de pequeños organismos acuáticos. Su néctar también es un delicioso manjar para colibríes y mariposas.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-hot-lip-plant-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 31,
		name: 'Uña de gato (Uncaria tomentosa)',
		description: 'La palicourea elata es una de las plantas más sorprendentes y de aspecto único que se encuentran en la flora del sotobosque de la Amazonía peruana. Sus brácteas en forma de hoja se asemejan a un conjunto de labios de color rojo rubí, razón por la cual la planta se conoce más comúnmente como la planta de labios calientes. El deslumbrante color rojo de las plantas de labios calientes permanece así por poco tiempo, lo suficiente como para ayudar a atraer pájaros y mariposas para polinizar las flores. Las flores reales en forma de estrella crecen entre las brácteas y suelen ser de color blanco brillante. A medida que las flores maduran, se convierten en bayas de color azul.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-cat-calws-exploor-peru-blog.-.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 32,
		name: 'Planta de labios calientes (Palicourea elata)',
		description: 'Originaria de la selva amazónica, la planta de uña de gato es una hierba con espinas distintivas en forma de garra que se proyectan desde la base de sus hojas. Hay más de 34 especies de Uncaria, sin embargo, la Uncaria tomentosa (típicamente encontrada en la Amazonía peruana) es la más común. Se encuentra principalmente en las estribaciones de la selva tropical en elevaciones de 600 – 2440 m. La uña de gato es mejor conocida por sus efectos antiinflamatorios y antioxidantes. De hecho, la Uncaria tomentosa se usa con fines medicinales como tratamiento complementario para enfermedades que atacan el sistema inmunitario, como la artritis reumatoide y la osteoartritis.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-hot-lip-plant-exploor-peru-blog..png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 33,
		name: 'Higuera estranguladora (género Ficus)',
		description: 'La higuera estranguladora es uno de los árboles más extraordinarios que encontrarás en la selva tropical del Perú. Los higos estranguladores pasan parte de su ciclo de vida como epífitas (un organismo que crece en la superficie de otra planta). En lugar de comenzar como una semilla en el suelo del suelo del bosque, el ciclo de vida de la higuera estranguladora comienza en el dosel del bosque donde sus semillas se alojan en las grietas de la corteza de su árbol anfitrión. Las raíces de la higuera estranguladora se envuelven alrededor del árbol huésped hasta que rodean por completo el tronco del huésped. Una vez que las raíces llegan al suelo y comienzan a extraer más nutrientes, el crecimiento se acelera.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-strangler-fig-exploor-peru-blog...png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 34,
		name: 'Achiote (Bixa orellana)',
		description: 'El achiote es un arbusto, o pequeño árbol, originario de Sudamérica y la Amazonía. Puede crecer hasta 10 m de altura y su característica más distintiva son sus frutos que se forman en racimos al final de las ramas. Estas vainas de semillas de color marrón rojizo están cubiertas de espigas suaves y contienen pequeñas semillas rojas pigmentadas envueltas en una capa cerosa. Dato curioso: el árbol de achiote tiene muchos usos tradicionales como tinte y, a menudo, se lo conoce como el árbol de lápiz labial. Las tribus amazónicas suelen utilizar el achiote para pintar caras y cuerpos, así como para proteger su piel de los insectos y las quemaduras solares y ayudar a sanar las heridas. La pigmentación vibrante del árbol también lo ha convertido en un ingrediente popular en muchos productos cosméticos y culinarios.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-achiote-exploor-peru-blog..-.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 35,
		name: 'Palma de asaí (Euterpe oleracea)',
		description: 'La palma de acai (también llamada euterpe oleracea) es una especie de palmera cultivada principalmente por sus frutos, hojas y madera del tronco. Originaria de la cuenca del río Amazonas, la palma de acai prospera en altas densidades distribuidas en pantanos y llanuras aluviales. Se puede encontrar en matas de hasta 20 tallos. El fruto de la euterpe oleracea se llama acai. Es una baya similar en apariencia a una uva pero más pequeña. Los frutos inmaduros son de color verde brillante. A medida que maduran, dependiendo de la variedad de palma, se vuelven de color púrpura o verde opaco.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-acai-palm-exploor-peru-blog..-.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 36,
		name: 'Lechuga de agua (Pistia stratiotes)',
		description: 'La lechuga de agua es una planta perenne flotante popular que crece en regiones tropicales y subtropicales. Como sugiere su nombre, la planta parece una cabeza de hojas verdes. La planta crece en rosetas con hojas gruesas pero suaves. Cada roseta puede alcanzar un diámetro de unos 30 cm y una altura de 10 cm. Las plantas de lechuga de agua son populares entre los estanques de jardín, ya que pueden inhibir el crecimiento de algas y limpiar el agua. Dato curioso: las plantas de lechuga de agua tienen raíces extremadamente densas que se extienden hasta 102 cm bajo el agua y, a menudo, sirven como refugio para peces pequeños.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-water-lettuce-exploor-peru-blog.-.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 37,
		name: 'Jardines del Diablo (Supay chakra)',
		description: 'Los jardines del diablo son grandes grupos de árboles que aparecen aleatoriamente en la selva amazónica. Cada uno de estos jardines del diablo consiste casi en su totalidad en una sola especie: Duroia hirsuta (una especie de árbol mirmecófito). Duroia hirsuta es el hábitat preferido de la hormiga Myrmelachista schumanni. Si bien no hay una respuesta concluyente sobre por qué ocurren estos jardines, las propuestas científicas sugieren que estas hormigas envenenan las plantas competidoras inyectándoles un herbicida natural (ácido fórmico) para promover el crecimiento de Duroia hirsuta y, a su vez, proporcionar a la colonia de hormigas una gran cantidad de sitios adecuados para anidar.',
		category: 'plants',
		imgSrc: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/10/The-18-Most-Fascinating-Plants-in-the-Amazon-Rainforest-devils-garden-exploor-peru-blog.-.png?w=775&ssl=1',
    isActive: false
	},
	{
		id: 38,
		name: 'Epífitas del Amazonas',
		description: 'La luz del sol que penetre hasta el suelo del bosque amazónico es tan baja, que pocas especies de plantas pueden vivir en el sotobosque. Esto ha dado lugar a la evolución de las plantas que pueden vivir encima de los ramos de los árboles: Mucha Flora crece en troncos, ramas, hojas, etc. Lee todo de las flores del Oriente... De hecho cada árbol es un ecosistema en sí mismo, con numerosas especies de flora y fauna que crecen en él, como bromelias, anfíbios, orquídeas, reptiles, cactus, aráceas, helechos, musgos y líquenes. Las epífitas forman micro-ecosistemas completos en los árboles de macrolobia. Esos son árboles de la familia de leguminosa, que crecen en las orillas inundadas de la laguna Cuyabeno, donde crecen en formas muy irregulares, parecidas a "bonsai".',
		category: 'plants',
		imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPlanta_epifita&psig=AOvVaw1_895HMyzWu9ER12-dovho&ust=1706319280096000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDGq-j0-YMDFQAAAAAdAAAAABAk',
    isActive: false
	},
	{
		id: 39,
		name: 'Bromelias del Amazonas',
		description: 'Con más de 2.000 especies, las bromelias son muy prominentemente presentes en Cuyabeno. A veces uno puede encontrarlas  creciendo en el suelo, pero sobre todo como Epífites en las ramas de los árboles. Las hojas de las bromilias envolturan alrededor de los tallos de las plantas, creando pequeños espacios donde se acumula el agua de lluvia. Así a veces, una sola planta puede contener varios litros de agua. En ausencia de peces, estas "piscinas" pequeñas proveen ambientes seguros para especies acuáticas tales como los anfibios: Ranas, junto con sus renacuajos, salamandras, así como sus larvas. Otras criaturas incluyen caracoles, escarabajos, larvas de mosquitos, etc. Cuando esos animales mueren, sus cuerpos se descomponen en minerales que sirven como fertilizantes a las plantas hospedantes. Como Bromelias vienen en varios colores como el morado, naranja, azul y rojo, cada vez más, se les venden como ornamentales. Naturalmente, usted conoce la Bromeliad más conocido, la Piña.',
		category: 'plants',
		imgSrc: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Famazonasinternacional.blogspot.com%2Fp%2Fel-proceso-de-evolucion-de-las-plantas.html&psig=AOvVaw1_895HMyzWu9ER12-dovho&ust=1706319280096000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDGq-j0-YMDFQAAAAAdAAAAABAs',
    isActive: false
	},
	{
		id: 40,
		name: 'Hongos del Oriente Ecuatoriano',
		description: 'Con tanta humedad,se pueden encontrar hongos durante todo el año. Hay hongos que cubren todo el tronco de un árbol y brillan en la oscuridad, como el la primer imagen. Otros son  parásitos que crecen en el cuerpo de insectos, tal como en la imagen derecha. Existen hongos de cualquiera forma en la selva.',
		category: 'plants',
		imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdelamazonas.com%2Fplantas%2Fhongos-comestible%2F&psig=AOvVaw1mo9IiTdLVZi9mtghcQ2sh&ust=1706319464831000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD2isH1-YMDFQAAAAAdAAAAABAD',
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

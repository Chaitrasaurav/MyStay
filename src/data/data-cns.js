(function(window){
	
	'use strict';

	window.cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'MYSTAYS 赤坂精品酒店',
					address: '107-0052 日本东京都港区赤坂2-17-54',
					img: 'HOTEL-MYSTAYS-PREMIER-Akasaka.jpg',
					id: 'jptok26324'
				},
				{
					name: 'MYSTAYS 滨松町精品酒店',
					address: '105-0013 东京都港区滨松町1-8-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Hamamatsucho.jpg',
					id: 'jptok28530'
				},
				{
					name: 'MYSTAYS 大森精品酒店',
					address: '0-0013　东京都品川区南大井6-19-3',
					img: 'HOTEL-MYSTAYS-PREMIER-Omori.jpg',
					id: 'jptok28531'
				},
				{
					name: 'MYSTAYS 浅草酒店',
					address: '130-0004 日本东京都墨田区本所1-21-11',
					img: 'HOTEL-MYSTAYS-Asakusa.jpg',
					id: 'jptok26318'
				},
				{
					name: 'MYSTAYS 浅草桥酒店',
					address: '111-0053 日本东京都台东区浅草桥 1-5-5',
					img: 'HOTEL-MYSTAYS-Asakusabashi.jpg',
					id: 'jptok26316'
				},
				{
					name: 'MYSTAYS 五反田酒店',
					address: '141-0022 日本东京都品川区东五反田2-5-4',
					img: 'HOTEL-MYSTAYS-Gotanda.jpg',
					id: 'jptok26323'
				},
				{
					name: 'MYSTAYS 五反田站前酒店',
					address: '141-0031 日本东京都品川区西五反田2-6-8',
					img: 'HOTEL-MYSTAYS-Gotanda-Station.jpg',
					id: 'jptok26951'
				},
				{
					name: 'MYSTAYS 滨松町酒店',
					address: '105-0013 日本东京都港区滨松町1-18-14',
					img: 'HOTEL-MYSTAYS-Hamamatsucho.jpg',
					id: 'jptok26322'
				},
				{
					name: 'MYSTAYS 羽田酒店',
					address: '144-0043 日本东京都大田区羽田5-1-13',
					img: 'HOTEL-MYSTAYS-Haneda.jpg',
					id: 'jptok26798'
				},
				{
					name: 'MYSTAYS 东池袋酒店',
					address: '170-0013 日本东京都丰岛区东池袋4-39-13',
					img: 'HOTEL-MYSTAYS-Higashi-Ikebukuro.jpg',
					id: 'jptok26319'
				},
				{
					name: 'MYSTAYS 蒲田酒店',
					address: '144-0052 日本东京都大田区蒲田5-46-5',
					img: 'HOTEL-MYSTAYS-Kamata.jpg',
					id: 'jptok26325'
				},
				{
					name: 'MYSTAYS 龟户酒店',
					address: '136-0071 日本东京都江东区龟户6-32-1',
					img: 'HOTEL-MYSTAYS-Kameido.jpg',
					id: 'jptok26311'
				},
				{
					name: 'MYSTAYS 神田酒店',
					address: '101-0032 日本东京都千代田区岩本町1-2-2',
					img: 'HOTEL-MYSTAYS-Kanda.jpg',
					id: 'jptok26313'
				},
				{
					name: 'MYSTAYS 日暮里酒店',
					address: '116-0014 日本东京都荒川区东日暮里5-43-7',
					img: 'HOTEL-MYSTAYS-Nippori.jpg',
					id: 'jptok26329'
				},
				{
					name: 'MYSTAYS 西新宿酒店',
					address: '160-0023 日本东京都新宿区西新宿7-14-14',
					img: 'HOTEL-MYSTAYS-Nishi-Shinjuku.jpg',
					id: 'jptok26320'
				},
				{
					name: 'MYSTAYS 御茶之水 (会议中心)酒店',
					address: '101-0063 日本东京都千代田区神田淡路町2-10-6',
					img: 'HOTEL-MYSTAYS-Ochanomizu-Conference-Center.jpg',
					id: 'jptok26310'
				},
				{
					name: 'MYSTAYS 上野东酒店',
					address: '110-0015 日本东京都台东区东上野5-5-6',
					img: 'HOTEL-MYSTAYS-Ueno-East.jpg',
					id: 'jptok28305'
				},
				{
					name: 'MYSTAYS 上野稻荷町酒店',
					address: '111-0036 日本东京都台东区松谷1-5-7',
					img: 'HOTEL-MYSTAYS-Ueno-Inaricho.jpg',
					id: 'jptok26312'
				},
				{
					name: 'MYSTAYS 上野入谷口酒店',
					address: '110-0015 日本东京都台东区东上野5-5-13',
					img: 'HOTEL-MYSTAYS-Ueno-Iriyaguchi.jpg',
					id: 'jptok26350'
				},
				{
					name: 'FLEXSTAY 江古田旅馆',
					address: '176-0006 日本东京都练马区荣町 8-6',
					img: 'FLEXSTAY-INN-Ekoda.jpg',
					id: 'jptok26345'
				},
				{
					name: 'FLEXSTAY 东十条旅馆',
					address: '114-0032 日本东京都北区中十条2-10-2',
					img: 'FLEXSTAY-INN-Higashi-Jujo.jpg',
					id: 'jptok26339'
				},
				{
					name: 'FLEXSTAY 饭田桥旅馆',
					address: '162-0814 日本东京都新宿区新小川町3-26',
					img: 'FLEXSTAY-INN-Iidabashi.jpg',
					id: 'jptok26340'
				},
				{
					name: 'FLEXSTAY 清澄白河旅馆',
					address: '135-0006 日本东京都江东区常盘1-12-16',
					img: 'FLEXSTAY-INN-Kiyosumi-Shirakawa.jpg',
					id: 'jptok26348'
				},
				{
					name: 'FLEXSTAY 中延旅馆',
					address: '142-0043 日本东京都品川区二叶4-27-8',
					img: 'FLEXSTAY-INN-Nakanobu.jpg',
					id: 'jptok26346'
				},
				{
					name: 'FLEXSTAY 品川旅馆',
					address: '140-0001 日本東京都品川區北品川1-22-19',
					img: 'FLEXSTAY-INN-Shinagawa.jpg',
					id: 'jptok26341'
				},
				{
					name: 'FLEXSTAY 白金旅馆',
					address: '108-0072 日本东京都港区白金5-10-15',
					img: 'FLEXSTAY-INN-Shirogane.jpg',
					id: 'jptok26336'
				},
				{
					name: 'FLEXSTAY 巢鸭旅馆',
					address: '170-0002 日本东京都丰岛区巢鸭3-6-16',
					img: 'FLEXSTAY-INN-Sugamo.jpg',
					id: 'jptok26333'
				},
				{
					name: 'FLEXSTAY 常盤台旅馆',
					address: '174-0071 日本东京都板桥区常盘台 1-52-5',
					img: 'FLEXSTAY-INN-Tokiwadai.jpg',
					id: 'jptok26344'
				},
				{
					name: 'MyCUBE by MYSTAYS 浅草藏前酒店',
					address: '111-0051 日本东京都台东区藏前2-6-7',
					img: 'MyCUBE-by-MYSTAYS-Asakusa-Kuramae.jpg',
					id: 'jptok28108'
				}
			]
		},
		'kyoto':{
			city: 'Kyoto',
			id: 'kyoto',
			hotels: [
				{
					name: 'MYSTAYS 京都四条酒店',
					address: '600-8494 日本京都府京都市下京區四條通油小路東入傘鉾町52',
					img: 'HOTEL-MYSTAYS-Kyoto-Shijo.jpg',
					id: 'jpkyo26330'
				}
			]
		},
		'osaka':{
			city: 'Osaka',
			id: 'osaka',
			hotels: [
				{
					name: 'MYSTAYS 本町酒店',
					address: '541-0053 大阪府大阪市中央区本町3-2-11',
					img: 'HOTEL-MYSTAYS-Midosuji-Honmachi.jpg',
					id: 'jposa31260'
				},
				{
					name: 'MYSTAYS 大手前酒店',
					address: '540-0025 日本大阪府大阪市中央区德井町1-3-2',
					img: 'HOTEL-MYSTAYS-Otemae.jpg',
					id: 'jposa26328'
				},
				{
					name: 'MYSTAYS 堺筋本町酒店',
					address: '541-0047 日本大阪府大阪市中央区淡路町1- 4-8',
					img: 'HOTEL-MYSTAYS-Sakaisuji-Honmachi.jpg',
					id: 'jposa26315'
				},
				{
					name: 'MYSTAYS 心斋桥酒店',
					address: '542-0086 大阪府大阪市中央区西心斋桥1-9-30',
					img: 'HOTEL-MYSTAYS-Shinsaibashi.jpg',
					id: 'jposa26338'
				},
				{
					name: 'MYSTAYS 心斋桥东酒店',
					address: '542-0082　大阪府大阪市中央区岛之内2-6-4',
					img: 'HOTEL-MYSTAYS-Shinsaibashi-East.jpg',
					id: 'jposa28306'
				},
				{
					name: 'MYSTAYS 新大阪 (会议中心)酒店',
					address: '532-0011大阪府大阪市淀川区西中岛6-2-19',
					img: 'HOTEL-MYSTAYS-Shin-Osaka-Conference-Center.jpg',
					id: 'jposa28304'
				}
			]
		},
		'kanazawa':{
			city: 'Kanazawa',
			id: 'kanazawa',
			hotels: [
				{
					name: 'MYSTAYS 金泽精品酒店',
					address: '920-0031 石川县金泽市广冈2-13-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Kanazawa.jpg',
					id: 'jpkan26799'
				},
				{
					name: 'MYSTAYS 金泽城堡酒店',
					address: '920-0852 石川县金泽市此花町10-17',
					img: 'HOTEL-MYSTAYS-Kanazawa-Castle.jpg',
					id: 'jpkan27429'
				}
			]
		},
		'maihama-urayasu':{
			city: 'Maihama-urayasu',
			id: 'maihama-urayasu',
			hotels: [
				{
					name: 'MYSTAYS 舞滨酒店',
					address: '279-0025 日本千葉縣浦安市鐵鋼通3-5-1',
					img: 'HOTEL-MYSTAYS-Maihama.jpg',
					id: 'jpura26317'
				},
				{
					name: 'MYSTAYS 新浦安 (会议中心)酒店',
					address: '279-0014 日本千叶县浦安市明海2-1-4',
					img: 'MYSTAYS-Shin-Urayasu-Conference-Center.jpg',
					id: 'jpura26309'
				},
				{
					name: 'FLEXSTAY  新浦安旅馆',
					address: '279-0022 日本千叶县浦安市今川4-1-29',
					img: 'FLEXSTAY-INN-Shin-Urayasu.jpg',
					id: 'jpura26342'
				}
			]
		},
		'tachikawa':{
			city: 'Tachikawa',
			id: 'tachikawa',
			hotels: [
				{
					name: 'MYSTAYS 立川酒店',
					address: '190-0022 东京都立川市锦町1-8-14',
					img: 'HOTEL-MYSTAYS-Tachikawa.jpg',
					id: 'jptok27899'
				}
			]
		},
		'kawasaki':{
			city: 'Kawasaki',
			id: 'kawasaki',
			hotels: [
				{
					name: 'FLEXSTAY 川崎贝塚旅馆',
					address: '210-0014 日本神奈川县川崎市川崎区贝冢1-13-2',
					img: 'FLEXSTAY-INN-Kawasaki-Kaizuka.jpg',
					id: 'jpkaw26347'
				},
				{
					name: 'FLEXSTAY 川崎小川町旅馆',
					address: '210-0023 日本神奈川县川崎市川崎区小川町15-9',
					img: 'FLEXSTAY-INN-Ogawacho.jpg',
					id: 'jpkaw26337'
				},
				{
					name: 'FLEXSTAY 多摩川旅馆',
					address: '211-0004 日本神奈川县川崎市中原区新丸子东1-837',
					img: 'FLEXSTAY-INN-Tamagawa.jpg',
					id: 'jpkaw26335'
				}
			]
		},
		'yokohama':{
			city: 'Yokohama',
			id: 'yokohama',
			hotels: [
				{
					name: 'MYSTAYS 横滨酒店',
					address: '231-0055 日本神奈川县横滨市中区末吉町4-81',
					img: 'HOTEL-MYSTAYS-Yokohama.jpg',
					id: 'jpyok26332'
				},
				{
					name: 'MYSTAYS 横滨关内酒店',
					address: '231-0015 神奈川县横滨市中区尾上町 5-67-1',
					img: 'HOTEL-MYSTAYS-Yokohama-Kannai.jpg',
					id: 'jpyok29010'
				},
				{
					name: 'FLEXSTAY 樱木町旅馆',
					address: '231-0063 日本神奈川县横滨市中区花咲町2-72-16',
					img: 'FLEXSTAY-INN-Sakuragicho.jpg',
					id: 'jpyok26343'
				}
			]
		},
		'chiba':{
			city: 'Chiba',
			id: 'chiba',
			hotels: [
				{
					name: '白滨海滨度假酒店',
					address: '295-0102　千叶县南房总市白滨町白滨2784',
					img: 'Shirahama-Ocean-Resort.jpg',
					id: 'jpchi28828'
				}
			]
		},
		'tochigi':{
			city: 'Tochigi',
			id: 'tochigi',
			hotels: [
				{
					name: 'MYSTAYS 宇都宫酒店',
					address: '321-0953 日本栃木县宇都宫市东宿乡2-4-1',
					img: 'HOTEL-MYSTAYS-Utsunomiya.jpg',
					id: 'jputs26331'
				},
				{
					name: '那须Epinard酒店',
					address: '325-0302 栃木县那须郡那须町大字高久丙1番地',
					img: 'Hotel-epinard-Nasu.jpg',
					id: 'jpnas28830'
				}
			]
		},
		'hokkaido':{
			city: 'Hokkaido',
			id: 'hokkaido',
			hotels: [
				{
					name: 'MYSTAYS 札幌公园精品酒店',
					address: '064-0809 北海道札幌市中央区南9西2-2-10',
					img: 'HOTEL-MYSTAYS-PREMIER-Sapporo-Park.jpg',
					id: 'jphok28823'
				},
				{
					name: 'MYSTAYS 札幌 Aspen酒店',
					address: '060-0808 北海道札幌市北区北8条西4丁目5番地',
					img: 'HOTEL-MYSTAYS-Sapporo-Aspen.jpg',
					id: 'jpsap29702'
				},
				{
					name: 'MYSTAYS 札幌中岛公园酒店',
					address: '064-0914 北海道札幌市中央區南14條西1-1-20',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park.jpg',
					id: 'jpsap27590'
				},
				{
					name: 'MYSTAYS 札幌中岛公园别馆酒店',
					address: '064-0811 日本北海道札幌市中央区南11条西1-4-3',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park-Annex.jpg',
					id: 'jphok30695'
				},
				{
					name: 'MYSTAYS 札幌站北口酒店',
					address: '北海道札幌市北区北8条西4-15',
					img: 'HOTEL-MYSTAYS-Sapporo-Station.jpg',
					id: 'jpsap29772'
				},
				{
					name: 'ART 旭川酒店',
					address: '070-0037 北海道旭川市7条通6丁目',
					img: 'ART-HOTEL-ASAHIKAWA.jpg',
					id: 'jphok28822'
				},
				{
					name: '小樽Nord 酒店',
					address: '047-0031 北海道小樽市色内1-4-16',
					img: 'Hotel-Nord-Otaru.jpg',
					id: 'jpota28373'
				},
				{
					name: '小樽SONIA 酒店',
					address: '047-0031 北海道小樽市色内1-4-20',
					img: 'Hotel-Sonia-Otaru.jpg',
					id: 'jpota29771'
				},
				{
					name: '函馆国际酒店',
					address: '040-0064 北海道函馆市大手町5-10',
					img: 'Hakodate-Kokusai-Hotel.jpg',
					id: 'jphok29664'
				}
			]
		},
		'aomori':{
			city: 'Aomori',
			id: 'aomori',
			hotels: [
				{
					name: 'ART 弘前城市酒店',
					address: '036-8004 青森县弘前市大町1-1-2',
					img: 'ART-HOTEL-HIROSAKI-CITY.jpg',
					id: 'jpaom28827'
				}
			]
		},
		'yamanashi':{
			city: 'Yamanashi',
			id: 'yamanashi',
			hotels: [
				{
					name: 'MYSTAYS 富士山酒店',
					address: '403-0017 山梨县富士吉田市新仓2654',
					img: 'HOTEL-MYSTAYS-Fuji.jpg',
					id: 'jpyam29701'
				}
			]
		},
		'nagoya':{
			city: 'Nagoya',
			id: 'nagoya',
			hotels: [
				{
					name: 'MYSTAYS 名古屋荣酒店',
					address: '460-0005 爱知县名古屋市中区东樱2-23-22',
					img: 'HOTEL-MYSTAYS-Nagoya-Sakae.jpg',
					id: 'jpnag26321'
				}
			]
		},
		'niigata':{
			city: 'Niigata',
			id: 'niigata',
			hotels: [
				{
					name: 'ART  新泻站前酒店',
					address: '950-0911 新潟縣新潟市中央區笹口1-1',
					img: 'ARTHOTEL-NIIGATA-STATION.jpg',
					id: 'jpchu29824'
				},
				{
					name: 'ART 上越酒店',
					address: '943-0832 新潟县上越市本町5-1-11',
					img: 'ART-HOTEL-JOETSU.jpg',
					id: 'jpjoe29825'
				}
			]
		},
		'kagawa':{
			city: 'Kagawa',
			id: 'kagawa',
			hotels: [
				{
					name: '小豆岛Olivean度假酒店',
					address: '761-4142　香川县小豆郡土庄町屋形崎甲63-1',
					img: 'Resort-Hotel-Olivean-Shodoshima.jpg',
					id: 'jpton28829'
				}
			]
		},
		'ehime':{
			city: 'Ehime',
			id: 'ehime',
			hotels: [
				{
					name: 'MYSTAYS 松山酒店',
					address: '790-0067 爱媛县松山市大手町1-10-10',
					img: 'HOTEL-MYSTAYS-Matsuyama.jpg',
					id: 'jpehi31183'
				}
			]
		},
		'fukuoka':{
			city: 'Fukuoka',
			id: 'fukuoka',
			hotels: [
				{
					name: 'MYSTAYS 福冈天神南酒店',
					address: '810-0003 日本福冈县福冈市中央区春吉3-14-20',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin-Minami.jpg',
					id: 'jpfuk26314'
				},
				{
					name: 'MYSTAYS 福冈天神酒店',
					address: '810-0001 日本福冈县福冈市中央区天神3-5-7',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin.jpg',
					id: 'jpfuk26326'
				}
			]
		},
		'oita':{
			city: 'Oita',
			id: 'oita',
			hotels: [
				{
					name: 'MYSTAYS 大分酒店',
					address: '874-0936 大分县大分市荷揚町1-32',
					img: 'HOTEL-MYSTAYS-Oita.jpg',
					id: 'jpoit29773'
				},
				{
					name: '别府龟之井酒店',
					address: '874-0936 大分县别府市中央町5-17',
					img: 'Beppu-Kamenoi-Hotel.jpg',
					id: 'jpbep27802'
				}
			]
		},
		'okinawa':{
			city: 'Okinawa',
			id: 'okinawa',
			hotels: [
				{
					name: 'ART  石垣岛酒店',
					address: '907-0022 冲绳县石垣大川559',
					img: 'ART-HOTEL-ISHIGAKIJIMA.jpg',
					id: 'jpoki29665'
				},
				{
					name: 'Fusaki Resort Village 歡迎您',
					address: '907-0024 冲绳县石垣市新川1625',
					img: 'Fusaki-Resort-Village-(Ishigaki-jima).jpg',
					id: 'jpoki28825'
				}
			]
		}
	};

	window.miscellaneous = {
		hotelSelectPlaceholder: '请选择一家酒店',
		roomLabel: '会议室',
		adultLabel: '成人',
		childrenLabel: '孩子',
		sliderSelectButton: '选择酒店',
		hotelSingular: '旅馆',
		hotelPlural: '酒店',
		deleteRoom: '删除这个房间'
	};
})(window);
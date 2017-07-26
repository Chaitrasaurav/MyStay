(function(window){
	
	'use strict';

	window.cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'MYSTAYS  赤坂精品飯店',
					address: '107-0052 日本東京都港區赤坂2-17-54',
					img: 'HOTEL-MYSTAYS-PREMIER-Akasaka.jpg',
					id: 'jptok26324'
				},
				{
					name: 'MYSTAYS  濱松町精品飯店',
					address: '105-0013 東京都港區濱松町1-8-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Hamamatsucho.jpg',
					id: 'jptok28530'
				},
				{
					name: 'MYSTAYS  大森精品飯店',
					address: '140-0013　东京都品川区南大井6-19-3',
					img: 'HOTEL-MYSTAYS-PREMIER-Omori.jpg',
					id: 'jptok28531'
				},
				{
					name: 'MYSTAYS 淺草飯店',
					address: '130-0004 日本東京都墨田區本所1-21-11',
					img: 'HOTEL-MYSTAYS-Asakusa.jpg',
					id: 'jptok26318'
				},
				{
					name: 'MYSTAYS 淺草橋飯店',
					address: '111-0053 日本東京都台東區淺草橋1-5-5',
					img: 'HOTEL-MYSTAYS-Asakusabashi.JPG',
					id: 'jptok26316'
				},
				{
					name: 'MYSTAYS 五反田飯店',
					address: '141-0022 日本東京都品川區東五反田2-5-4',
					img: 'HOTEL-MYSTAYS-Gotanda.jpg',
					id: 'jptok26323'
				},
				{
					name: 'MYSTAYS 五反田站前飯店',
					address: '141-0031 日本東京都品川區西五反田2-6-8',
					img: 'HOTEL-MYSTAYS-Gotanda-Station.jpg',
					id: 'jptok26951'
				},
				{
					name: 'MYSTAYS 濱松町飯店',
					address: '105-0013 日本東京都港區濱松町1-18-14',
					img: 'HOTEL-MYSTAYS-Hamamatsucho.jpg',
					id: 'jptok26322'
				},
				{
					name: 'MYSTAYS 羽田飯店',
					address: '144-0043 日本東京都大田區羽田5-1-13',
					img: 'HOTEL-MYSTAYS-Haneda.jpg',
					id: 'jptok26798'
				},
				{
					name: 'MYSTAYS 東池袋飯店',
					address: '170-0013 日本東京都豐島區東池袋4-39-13',
					img: 'HOTEL-MYSTAYS-Higashi-Ikebukuro.jpg',
					id: 'jptok26319'
				},
				{
					name: 'MYSTAYS 蒲田飯店',
					address: '144-0052 日本東京都大田區蒲田5-46-5',
					img: 'HOTEL-MYSTAYS-Kamata.JPG',
					id: 'jptok26325'
				},
				{
					name: 'MYSTAYS 龜戶飯店',
					address: '136-0071 日本東京都江東區亀戶6-32-1',
					img: 'HOTEL-MYSTAYS-Kameido.JPG',
					id: 'jptok26311'
				},
				{
					name: 'MYSTAYS 神田飯店',
					address: '101-0032 日本東京都千代田區岩本町1-2-2',
					img: 'HOTEL-MYSTAYS-Kanda.jpg',
					id: 'jptok26313'
				},
				{
					name: 'MYSTAYS 日暮里飯店',
					address: '116-0014 日本東京都荒川區東日暮里5-43-7',
					img: 'HOTEL-MYSTAYS-Nippori.jpg',
					id: 'jptok26329'
				},
				{
					name: 'MYSTAYS 西新宿飯店',
					address: '160-0023 日本東京都新宿區西新宿7-14-14',
					img: 'HOTEL-MYSTAYS-Nishi-Shinjuku.jpg',
					id: 'jptok26320'
				},
				{
					name: 'MYSTAYS 御茶之水 (會議中心)飯店',
					address: '101-0063 日本東京都千代田區神田淡路町2-10-6',
					img: 'HOTEL-MYSTAYS-Ochanomizu-Conference-Center.jpg',
					id: 'jptok26310'
				},
				{
					name: 'MYSTAYS 上野東飯店',
					address: '110-0015 東京都台東區東上野5-5-6',
					img: 'HOTEL-MYSTAYS-Ueno-East.jpg',
					id: 'jptok28305'
				},
				{
					name: 'MYSTAYS 上野稻荷町飯店',
					address: '111-0036 日本東京都台東區松谷1-5-7',
					img: 'HOTEL-MYSTAYS-Ueno-Inaricho.jpg',
					id: 'jptok26312'
				},
				{
					name: 'MYSTAYS 上野入谷口飯店',
					address: '110-0015 日本東京都台東區東上野5-5-13',
					img: 'HOTEL-MYSTAYS-Ueno-Iriyaguchi.jpg',
					id: 'jptok26350'
				},
				{
					name: 'FLEXSTAY 江古田旅館',
					address: '176-0006 日本東京都練馬區榮町8-6',
					img: 'FLEXSTAY-INN-Ekoda.JPG',
					id: 'jptok26345'
				},
				{
					name: 'FLEXSTAY  東十條旅館',
					address: '114-0032 日本東京都北區中十條2-10-2',
					img: 'FLEXSTAY-INN-Higashi-Jujo.JPG',
					id: 'jptok26339'
				},
				{
					name: 'FLEXSTAY  飯田橋旅館',
					address: '162-0814 日本東京都新宿區新小川町3-26',
					img: 'FLEXSTAY-INN-Iidabashi.JPG',
					id: 'jptok26340'
				},
				{
					name: 'FLEXSTAY 清澄白河旅館',
					address: '135-0006 日本東京都江東區常盤1-12-16',
					img: 'FLEXSTAY-INN-Kiyosumi-Shirakawa.JPG',
					id: 'jptok26348'
				},
				{
					name: 'FLEXSTAY 中延旅館',
					address: '142-0043 日本東京都品川區二葉4-27-8',
					img: 'FLEXSTAY-INN-Nakanobu.JPG',
					id: 'jptok26346'
				},
				{
					name: 'FLEXSTAY  品川旅館',
					address: '140-0001 日本東京都品川區北品川1-22-19',
					img: 'FLEXSTAY-INN-Shinagawa.JPG',
					id: 'jptok26341'
				},
				{
					name: 'FLEXSTAY 白金旅館',
					address: '108-0072 日本東京都港區白金5-10-15',
					img: 'FLEXSTAY-INN-Shirogane.jpg',
					id: 'jptok26336'
				},
				{
					name: 'FLEXSTAY 巢鴨旅館',
					address: '170-0002 日本東京都豐島區巢鴨3-6-16',
					img: 'FLEXSTAY-INN-Sugamo.JPG',
					id: 'jptok26333'
				},
				{
					name: 'FLEXSTAY 常盤台旅館',
					address: '174-0071 日本東京都板橋區常盤台 1-52-5',
					img: 'FLEXSTAY-INN-Tokiwadai.JPG',
					id: 'jptok26344'
				},
				{
					name: 'MyCUBE by MYSTAYS 淺草藏前飯店',
					address: '111-0051 日本東京都台東區藏前2-6-7',
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
					name: 'MYSTAYS 京都四條飯店',
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
					name: 'MYSTAYS 本町飯店',
					address: '541-0053 大阪府大阪市中央區本町3-2-11',
					img: 'HOTEL-MYSTAYS-Midosuji-Honmachi.jpg',
					id: 'jposa31260'
				},
				{
					name: 'MYSTAYS 大手前飯店',
					address: '540-0025 日本大阪府大阪市中央區德井町1-3-2',
					img: 'HOTEL-MYSTAYS-Otemae.JPG',
					id: 'jposa26328'
				},
				{
					name: 'MYSTAYS 堺筋本町飯店',
					address: '541-0047 日本大阪府大阪市中央區淡路町1- 4-8',
					img: 'HOTEL-MYSTAYS-Sakaisuji-Honmachi.JPG',
					id: 'jposa26315'
				},
				{
					name: 'MYSTAYS 心齋橋飯店',
					address: '542-0086 大阪府大阪市中央區西心齋橋1-9-30',
					img: 'HOTEL-MYSTAYS-Shinsaibashi.jpg',
					id: 'jposa26338'
				},
				{
					name: 'MYSTAYS 心齋橋東飯店',
					address: '542-0082 大阪府大阪市中央區島之內2-6-4',
					img: 'HOTEL-MYSTAYS-Shinsaibashi-East.jpg',
					id: 'jposa28306'
				},
				{
					name: 'MYSTAYS 新大阪 (會議中心)飯店',
					address: '532-0011大阪府大阪市淀川區西中島6-2-19',
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
					name: 'MYSTAYS  金澤精品飯店',
					address: '920-0031 石川縣金澤市廣岡2-13-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Kanazawa.jpg',
					id: 'jpkan26799'
				},
				{
					name: 'MYSTAYS 金澤城堡飯店',
					address: '920-0852 石川縣金澤市此花町10-17',
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
					name: 'MYSTAYS 舞濱飯店',
					address: '279-0025 日本千葉縣浦安市鐵鋼通3-5-1',
					img: 'HOTEL-MYSTAYS-Maihama.jpg',
					id: 'jpura26317'
				},
				{
					name: 'MYSTAYS 新浦安 (會議中心)飯店',
					address: '279-0014 日本千葉縣浦安市明海2-1-4',
					img: 'MYSTAYS-Shin-Urayasu-Conference-Center.jpg',
					id: 'jpura26309'
				},
				{
					name: 'FLEXSTAY  新浦安旅馆',
					address: '279-0022 日本千葉縣浦安市今川4-1-29',
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
					name: 'HOTEL MYSTAYS Tachikawa',
					address: '190-0022 東京都立川市錦町1-8-14',
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
					name: 'FLEXSTAY 川崎貝塚旅館',
					address: '210-0014 日本神奈川縣川崎市川崎區貝塚1-13-2',
					img: 'FLEXSTAY-INN-Kawasaki-Kaizuka.jpg',
					id: 'jpkaw26347'
				},
				{
					name: 'FLEXSTAY 川崎小川町旅館',
					address: '210-0023 日本神奈川縣川崎市川崎區小川町15-9',
					img: 'FLEXSTAY-INN-Ogawacho.JPG',
					id: 'jpkaw26337'
				},
				{
					name: 'FLEXSTAY  多摩川旅館',
					address: '211-0004 日本神奈川縣川崎市中原區新丸子東1-837',
					img: 'FLEXSTAY-INN-Tamagawa.JPG',
					id: 'jpkaw26335'
				}
			]
		},
		'yokohama':{
			city: 'Yokohama',
			id: 'yokohama',
			hotels: [
				{
					name: 'MYSTAYS 橫濱飯店',
					address: '231-0055 日本神奈川縣橫濱市中區末吉町4-81',
					img: 'HOTEL-MYSTAYS-Yokohama.JPG',
					id: 'jpyok26332'
				},
				{
					name: 'MYSTAYS 橫濱關內飯店',
					address: '231-0015 神奈川縣橫濱市中區尾上町 5-67-1',
					img: 'HOTEL-MYSTAYS-Yokohama-Kannai.jpg',
					id: 'jpyok29010'
				},
				{
					name: 'FLEXSTAY  櫻木町旅館',
					address: '231-0063 日本神奈川縣橫濱市中區花咲町2-72-16',
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
					name: '白濱海濱度假飯店',
					address: '295-0102　千葉縣南房總市白濱町白濱2784',
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
					name: 'MYSTAYS 宇都宮飯店',
					address: '321-0953 日本栃木縣宇都宮市東宿鄉2-4-1',
					img: 'HOTEL-MYSTAYS-Utsunomiya.JPG',
					id: 'jputs26331'
				},
				{
					name: '那須Epinard飯店',
					address: '325-0302 栃木縣那須郡那須町大字高久丙1番地',
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
					name: 'MYSTAYS  札幌公園精品飯店',
					address: '064-0809 北海道札幌市中央區南9西2-2-10',
					img: 'HOTEL-MYSTAYS-PREMIER-Sapporo-Park.jpg',
					id: 'jphok28823'
				},
				{
					name: 'MYSTAYS 札幌 Aspen飯店',
					address: '060-0808 北海道札幌市北區北8條西4丁目5番地',
					img: 'HOTEL-MYSTAYS-Sapporo-Aspen.jpg',
					id: 'jpsap29702'
				},
				{
					name: 'MYSTAYS 札幌中島公園飯店',
					address: '064-0914 北海道札幌市中央區南14條西1-1-20',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park.jpg',
					id: 'jpsap27590'
				},
				{
					name: 'MYSTAYS 札幌中島公園別館飯店',
					address: '064-0811 日本北海道札幌市中央區南11條西1-4-3',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park-Annex.jpg',
					id: 'jphok30695'
				},
				{
					name: 'MYSTAYS 札幌站北口飯店',
					address: '060-0808 北海道札幌市北區北8條西4-15',
					img: 'HOTEL-MYSTAYS-Sapporo-Station.jpg',
					id: 'jpsap29772'
				},
				{
					name: 'ART 旭川飯店',
					address: '070-0037 北海道旭川市7條通6丁目',
					img: 'ART-HOTEL-ASAHIKAWA.jpg',
					id: 'jphok28822'
				},
				{
					name: '小樽Nord 飯店',
					address: '047-0031 北海道小樽市色內1-4-16',
					img: 'Hotel-Nord-Otaru.jpg',
					id: 'jpota28373'
				},
				{
					name: '小樽SONIA 飯店',
					address: '047-0031 北海道小樽市色內1-4-20',
					img: 'Hotel-Sonia-Otaru.jpg',
					id: 'jpota29771'
				},
				{
					name: '函館國際飯店',
					address: '040-0064 北海道函館市大手町5-10',
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
					name: 'ART 弘前城市飯店',
					address: '036-8004 青森縣弘前市大町1-1-2',
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
					name: 'MYSTAYS 富士山飯店',
					address: '403-0017 山梨縣富士吉田市新倉2654',
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
					name: 'MYSTAYS 名古屋榮飯店',
					address: '460-0005 愛知縣名古屋市中區東櫻2-23-22',
					img: 'HOTEL-MYSTAYS-Nagoya-Sakae.JPG',
					id: 'jpnag26321'
				}
			]
		},
		'niigata':{
			city: 'Niigata',
			id: 'niigata',
			hotels: [
				{
					name: 'ART 新潟站前飯店',
					address: '950-0911 新潟縣新潟市中央區笹口1-1',
					img: 'ARTHOTEL-NIIGATA-STATION.jpg',
					id: 'jpchu29824'
				},
				{
					name: 'ART 上越飯店',
					address: '943-0832 新潟縣上越市本町5-1-11',
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
					name: '小豆島Olivean 度假飯店',
					address: '761-4142 香川縣小豆郡土庄町屋形崎甲63-1',
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
					name: 'MYSTAYS 松山飯店',
					address: '790-0067 愛媛縣松山市大手町1-10-10',
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
					name: 'MYSTAYS 福岡天神南飯店',
					address: '810-0003 日本福岡縣福岡市中央區春吉3-14-20',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin-Minami.jpg',
					id: 'jpfuk26314'
				},
				{
					name: 'MYSTAYS 福岡天神飯店',
					address: '810-0001 日本福岡縣福岡市中央區天神3-5-7',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin.JPG',
					id: 'jpfuk26326'
				}
			]
		},
		'oita':{
			city: 'Oita',
			id: 'oita',
			hotels: [
				{
					name: 'MYSTAYS 大分飯店',
					address: '874-0936 大分縣大分市荷揚町1-32',
					img: 'HOTEL-MYSTAYS-Oita.jpg',
					id: 'jpoit29773'
				},
				{
					name: '別府龜之井飯店',
					address: '874-0936 大分縣別府市中央町5-17',
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
					name: 'ART 石垣島飯店',
					address: '907-0022 沖繩縣石垣市大川559',
					img: 'ART-HOTEL-ISHIGAKIJIMA.JPG',
					id: 'jpoki29665'
				},
				{
					name: 'Fusaki Resort Village 歡迎您',
					address: '907-0024 沖繩縣石垣市新川1625',
					img: 'Fusaki-Resort-Village-(Ishigaki-jima).jpg',
					id: 'jpoki28825'
				}
			]
		}
	};

	window.miscellaneous = {
		hotelSelectPlaceholder: '請選擇一家酒店',
		roomLabel: '會議室',
		adultLabel: '成人',
		childrenLabel: '孩子',
		sliderSelectButton: '選擇酒店',
		hotelSingular: '旅館',
		hotelPlural: '酒店',
		deleteRoom: '刪除這個房間'
	};
})(window);
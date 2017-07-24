(function(window){
	
	'use strict';

	window.cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'ホテルマイステイズプレミア赤坂',
					localName: 'Hoterumaisuteizupuremia akasaka ホテルマイステイズプレミアあかさか ホテルマイステイズプレミアアカサカ ホテルマイステイズプレミア赤坂 Hoterumaisuteizupuremia akasaka',
					address: '〒107-0052 東京都港区赤坂2-17-54',
					img: 'HOTEL-MYSTAYS-PREMIER-Akasaka.jpg',
					id: '153298'
				},
				{
					name: 'ホテルマイステイズプレミア浜松町',
					localName: 'ホテルマイステイズプレミア浜松町',
					address: '〒105-0013 東京都港区浜松町1-8-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Hamamatsucho.jpg',
					id: '716'
				},
				{
					name: 'ホテルマイステイズプレミア大森',
					localName: 'ホテルマイステイズプレミア大森',
					address: '〒140-0013 東京都品川区南大井6-19-3',
					img: 'HOTEL-MYSTAYS-PREMIER-Omori.jpg',
					id: '715'
				},
				{
					name: 'ホテルマイステイズ浅草',
					localName: 'ホテルマイステイズ浅草',
					address: '〒130-0004 東京都墨田区本所1-21-11',
					img: 'HOTEL-MYSTAYS-Asakusa.jpg',
					id: '28096'
				},
				{
					name: 'ホテルマイステイズ浅草橋',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒111-0053 東京都台東区浅草橋1-5-5',
					img: 'HOTEL-MYSTAYS-Asakusabashi.jpg',
					id: '80713'
				},
				{
					name: 'ホテルマイステイズ五反田',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒141-0022 東京都品川区東五反田2-5-4',
					img: 'HOTEL-MYSTAYS-Gotanda.jpg',
					id: '28093'
				},
				{
					name: 'ホテルマイステイズ五反田駅前',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒141-0031 東京都品川区西五反田2-6-8',
					img: 'HOTEL-MYSTAYS-Gotanda-Station.jpg',
					id: '149010'
				},
				{
					name: 'ホテルマイステイズ浜松町',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒105-0013 東京都港区浜松町1-18-14',
					img: 'HOTEL-MYSTAYS-Hamamatsucho.jpg',
					id: '73984'
				},
				{
					name: 'ホテルマイステイズ羽田',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒144-0043 東京都大田区羽田5-1-13',
					img: 'HOTEL-MYSTAYS-Haneda.jpg',
					id: '147074'
				},
				{
					name: 'ホテルマイステイズ東池袋',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒170-0013 東京都豊島区東池袋4-39-13',
					img: 'HOTEL-MYSTAYS-Higashi-Ikebukuro.jpg',
					id: '17703'
				},
				{
					name: 'ホテルマイステイズ蒲田',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒144-0052 東京都大田区蒲田5-46-5',
					img: 'HOTEL-MYSTAYS-Kamata.jpg',
					id: '74696'
				},
				{
					name: 'ホテルマイステイズ亀戸',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒136-0071 東京都江東区亀戸6-32-1',
					img: 'HOTEL-MYSTAYS-Kameido.jpg',
					id: '16330'
				},
				{
					name: 'ホテルマイステイズ神田',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒101-0032 東京都千代田区岩本町1-2-2',
					img: 'HOTEL-MYSTAYS-Kanda.jpg',
					id: '41851'
				},
				{
					name: 'ホテルマイステイズ日暮里',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒116-0014 東京都荒川区東日暮里5-43-7',
					img: 'HOTEL-MYSTAYS-Nippori.jpg',
					id: '28560'
				},
				{
					name: 'ホテルマイステイズ西新宿',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒160-0023 東京都新宿区西新宿7-14-14',
					img: 'HOTEL-MYSTAYS-Nishi-Shinjuku.jpg',
					id: '135409'
				},
				{
					name: 'ホテルマイステイズ御茶ノ水 コンファレンスセンター',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒101-0063 東京都千代田区神田淡路町2-10-6',
					img: 'HOTEL-MYSTAYS-Ochanomizu-Conference-Center.jpg',
					id: '56917'
				},
				{
					name: 'ホテルマイステイズ上野イースト',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒110-0015 東京都台東区東上野5-5-6',
					img: 'HOTEL-MYSTAYS-Ueno-East.jpg',
					id: '5627'
				},
				{
					name: 'ホテルマイステイズ上野稲荷町',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒111-0036 東京都台東区松ケ谷1-5-7',
					img: 'HOTEL-MYSTAYS-Ueno-Inaricho.jpg',
					id: '28559'
				},
				{
					name: 'ホテルマイステイズ上野入谷口',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒110-0015 東京都台東区東上野5-5-13',
					img: 'HOTEL-MYSTAYS-Ueno-Iriyaguchi.jpg',
					id: '28894'
				},
				{
					name: 'フレックステイイン江古田',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒176-0006 東京都練馬区栄町8-6',
					img: 'FLEXSTAY-INN-Ekoda.jpg',
					id: '20579'
				},
				{
					name: 'フレックステイイン東十条',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒114-0032 東京都北区中十条2-10-2',
					img: 'FLEXSTAY-INN-Higashi-Jujo.jpg',
					id: '28556'
				},
				{
					name: 'フレックステイイン飯田橋',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒162-0814 東京都新宿区新小川町3-26',
					img: 'FLEXSTAY-INN-Iidabashi.jpg',
					id: '28095'
				},
				{
					name: 'フレックステイイン清澄白河',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒135-0006 東京都江東区常盤1-12-16 ',
					img: 'FLEXSTAY-INN-Kiyosumi-Shirakawa.jpg',
					id: '28558'
				},
				{
					name: 'フレックステイイン中延',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒142-0043 東京都品川区二葉4-27-8',
					img: 'FLEXSTAY-INN-Nakanobu.jpg',
					id: '28555'
				},
				{
					name: 'フレックステイイン品川',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒140-0001 東京都品川区北品川1-22-19',
					img: 'FLEXSTAY-INN-Shinagawa.jpg',
					id: '28554'
				},
				{
					name: 'フレックステイイン白金',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒108-0072 東京都港区白金5-10-15',
					img: 'FLEXSTAY-INN-Shirogane.jpg',
					id: '27747'
				},
				{
					name: 'フレックステイイン巣鴨',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒170-0002 東京都豊島区巣鴨3-6-16',
					img: 'FLEXSTAY-INN-Sugamo.jpg',
					id: '28094'
				},
				{
					name: 'フレックステイイン常盤台',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒174-0071 東京都板橋区常盤台1-52-5',
					img: 'FLEXSTAY-INN-Tokiwadai.jpg',
					id: '28557'
				},
				{
					name: 'MyCUBE by MYSTAYS浅草蔵前',
					localName: 'ホテルマイステイズ浅草橋',
					address: '〒111-0051 東京都台東区蔵前2丁目6-7',
					img: 'MyCUBE-by-MYSTAYS-Asakusa-Kuramae.jpg',
					id: '151373'
				}
		 	]
		},
		'kyoto':{
			city: 'Kyoto',
			id: 'kyoto',
			hotels: [
				{
					name: 'ホテルマイステイズ京都四条',
					localName: 'ホテルマイステイズ京都四条',
					address: '〒600-8494 京都府京都市下京区四条通油小路東入ル傘鉾町52',
					img: 'HOTEL-MYSTAYS-Kyoto-Shijo.jpg',
					id: '68555'
				}
			]
		},
		'osaka':{
			city: 'Osaka',
			id: 'osaka',
			hotels: [
				{
					name: 'ホテルマイステイズ御堂筋本町',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '541-0053 大阪府大阪市中央区本町3-2-11',
					img: 'HOTEL-MYSTAYS-Midosuji-Honmachi.jpg',
					id: '164552'
				},
				{
					name: 'ホテルマイステイズ大手前',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒540-0025 大阪府大阪市中央区徳井町1-3-2',
					img: 'HOTEL-MYSTAYS-Otemae.jpg',
					id: '19987'
				},
				{
					name: 'ホテルマイステイズ堺筋本町',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒541-0047 大阪府大阪市中央区淡路町1-4-8',
					img: 'HOTEL-MYSTAYS-Sakaisuji-Honmachi.jpg',
					id: '72026'
				},
				{
					name: 'ホテルマイステイズ心斎橋',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒542-0086 大阪府大阪市中央区西心斎橋1-9-30',
					img: 'HOTEL-MYSTAYS-Shinsaibashi.jpg',
					id: '17986'
				},
				{
					name: 'ホテルマイステイズ心斎橋イースト',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒542-0082 大阪府大阪市中央区島之内2-6-4',
					img: 'HOTEL-MYSTAYS-Shinsaibashi-East.jpg',
					id: '147707'
				},
				{
					name: 'ホテルマイステイズ新大阪コンファレンスセンター',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒532-0011 大阪府大阪市淀川区西中島6-2-19',
					img: 'HOTEL-MYSTAYS-Shin-Osaka-Conference-Center.jpg',
					id: '552'
				}
			]
		},
		'kanazawa':{
			city: 'Kanazawa',
			id: 'kanazawa',
			hotels: [
				{
					name: 'ホテルマイステイズプレミア金沢',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒920-0031 石川県金沢市広岡2-13-5',
					img: 'HOTEL-MYSTAYS-PREMIER-Kanazawa.jpg',
					id: '147158'
				},
				{
					name: 'ホテルマイステイズ金沢キャッスル',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒920-0852 石川県金沢市此花町10-17',
					img: 'HOTEL-MYSTAYS-Kanazawa-Castle.jpg',
					id: '175'
				}
			]
		},
		'maihama-urayasu':{
			city: 'Maihama-urayasu',
			id: 'maihama-urayasu',
			hotels: [
				{
					name: 'ホテルマイステイズ舞浜',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒279-0025 千葉県浦安市鉄鋼通り3-5-1',
					img: 'HOTEL-MYSTAYS-Maihama.jpg',
					id: '39203'
				},
				{
					name: 'マイステイズ新浦安 コンファレンスセンター',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒279-0014 千葉県浦安市明海2-1-4',
					img: 'MYSTAYS-Shin-Urayasu-Conference-Center.jpg',
					id: '76849'
				},
				{
					name: 'フレックステイイン新浦安',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒279-0022 千葉県浦安市今川4-1-29',
					img: 'FLEXSTAY-INN-Shin-Urayasu.jpg',
					id: '30925'
				}
			]
		},
		'tachikawa':{
			city: 'Tachikawa',
			id: 'tachikawa',
			hotels: [
				{
					name: 'ホテルマイステイズ立川',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒190-0022 東京都立川市錦町1-8-14',
					img: 'HOTEL-MYSTAYS-Tachikawa.jpg',
					id: '18818'
				}
			]
		},
		'kawasaki':{
			city: 'Kawasaki',
			id: 'kawasaki',
			hotels: [
				{
					name: 'フレックステイイン川崎貝塚',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒210-0014 神奈川県川崎市川崎区貝塚1-13-2',
					img: 'FLEXSTAY-INN-Kawasaki-Kaizuka.jpg',
					id: '28895'
				},
				{
					name: 'フレックステイイン川崎小川町',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒210-0023 神奈川県川崎市川崎区小川町15-9',
					img: 'FLEXSTAY-INN-Ogawacho.jpg',
					id: '28896'
				},
				{
					name: 'フレックステイイン多摩川',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒211-0004 神奈川県川崎市中原区新丸子東1-837 ',
					img: 'FLEXSTAY-INN-Tamagawa.jpg',
					id: '28900'
				}
			]
		},
		'yokohama':{
			city: 'Yokohama',
			id: 'yokohama',
			hotels: [
				{
					name: 'ホテルマイステイズ横浜',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒231-0055 神奈川県横浜市中区末吉町4-81',
					img: 'HOTEL-MYSTAYS-Yokohama.jpg',
					id: '50196'
				},
				{
					name: 'ホテルマイステイズ横浜関内',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒231-0015 神奈川県横浜市中区尾上町5-67-1',
					img: 'HOTEL-MYSTAYS-Yokohama-Kannai.jpg',
					id: '153564'
				},
				{
					name: 'フレックステイイン桜木町',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒231-0063 神奈川県横浜市中区花咲町2-72-16',
					img: 'FLEXSTAY-INN-Sakuragicho.jpg',
					id: '31476'
				}
			]
		},
		'chiba':{
			city: 'Chiba',
			id: 'chiba',
			hotels: [
				{
					name: '白浜オーシャンリゾート',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒295-0102 千葉県南房総市白浜町白浜2784',
					img: 'Shirahama-Ocean-Resort.jpg',
					id: '9662'
				}
			]
		},
		'tochigi':{
			city: 'Tochigi',
			id: 'tochigi',
			hotels: [
				{
					name: 'ホテルマイステイズ宇都宮',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒321-0953 栃木県宇都宮市東宿郷2-4-1',
					img: 'HOTEL-MYSTAYS-Utsunomiya.jpg',
					id: '67045'
				},
				{
					name: 'ホテルエピナール那須',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒325-0302 栃木県那須郡那須町大字高久丙1番地',
					img: 'Hotel-epinard-Nasu.jpg',
					id: '7335'
				}
			]
		},
		'hokkaido':{
			city: 'Hokkaido',
			id: 'hokkaido',
			hotels: [
				{
					name: 'ホテルマイステイズプレミア札幌パーク',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒064-0809 札幌市中央区南9条西2丁目2-10',
					img: 'HOTEL-MYSTAYS-PREMIER-Sapporo-Park.jpg',
					id: '5903'
				},
				{
					name: 'ホテルマイステイズ札幌アスペン',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒060-0808 北海道札幌市北区北8条西4丁目5番地',
					img: 'HOTEL-MYSTAYS-Sapporo-Aspen.jpg',
					id: '625'
				},
				{
					name: 'ホテルマイステイズ札幌中島公園',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒064-0914 北海道札幌市中央区南14条西1-1-20',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park.jpg',
					id: '9603'
				},
				{
					name: 'ホテルマイステイズ札幌中島公園別館',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒064-0811 北海道札幌市中央区 南11条西1丁目4-3',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park-Annex.jpg',
					id: '145361'
				},
				{
					name: 'ホテルマイステイズ札幌駅北口',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒060-0808 北海道札幌市北区北8条西4-15',
					img: 'HOTEL-MYSTAYS-Sapporo-Station.jpg',
					id: '68288'
				},
				{
					name: 'アートホテル旭川',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒070-0037 北海道旭川市7条通6丁目',
					img: 'ART-HOTEL-ASAHIKAWA.jpg',
					id: '224'
				},
				{
					name: 'ホテルノルド小樽',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒047-0031 北海道小樽市色内1丁目4番16号',
					img: 'Hotel-Nord-Otaru.jpg',
					id: '3119'
				},
				{
					name: 'ホテルソニア小樽',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒047-0031 北海道小樽市色内1-4-20',
					img: 'Hotel-Sonia-Otaru.jpg',
					id: '5170'
				},
				{
					name: '函館国際ホテル',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒040-0064 北海道函館市大手町5-10',
					img: 'Hakodate-Kokusai-Hotel.jpg',
					id: '1341'
				}
			]
		},
		'aomori':{
			city: 'Aomori',
			id: 'aomori',
			hotels: [
				{
					name: 'アートホテル弘前シティ',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒036-8004 青森県弘前市大町1-1-2',
					img: 'ART-HOTEL-HIROSAKI-CITY.jpg',
					id: '504'
				}
			]
		},
		'yamanashi':{
			city: 'Yamanashi',
			id: 'yamanashi',
			hotels: [
				{
					name: 'ホテルマイステイズ富士山',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒403-0011 山梨県富士吉田市新倉2654',
					img: 'HOTEL-MYSTAYS-Fuji.jpg',
					id: '158471'
				}
			]
		},
		'nagoya':{
			city: 'Nagoya',
			id: 'nagoya',
			hotels: [
				{
					name: 'ホテルマイステイズ名古屋栄',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒460-0005 愛知県名古屋市中区東桜2-23-22',
					img: 'HOTEL-MYSTAYS-Nagoya-Sakae.jpg',
					id: '4758'
				}
			]
		},
		'niigata':{
			city: 'Niigata',
			id: 'niigata',
			hotels: [
				{
					name: 'アートホテル新潟駅前',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒950-0911 新潟県新潟市中央区笹口1-1',
					img: 'ARTHOTEL-NIIGATA-STATION.jpg',
					id: '67938'
				},
				{
					name: 'アートホテル上越',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒943-0832 新潟県上越市本町5丁目1-11',
					img: 'ART-HOTEL-JOETSU.jpg',
					id: '1033'
				}
			]
		},
		'kagawa':{
			city: 'Kagawa',
			id: 'kagawa',
			hotels: [
				{
					name: 'リゾートホテル オリビアン小豆島',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒761-4142 香川県小豆郡土庄町屋形崎甲63-1',
					img: 'Resort-Hotel-Olivean-Shodoshima.jpg',
					id: '7592'
				}
			]
		},
		'ehime':{
			city: 'Ehime',
			id: 'ehime',
			hotels: [
				{
					name: 'ホテルマイステイズ松山',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒790-0067 愛媛県松山市大手町1-10-10',
					img: 'HOTEL-MYSTAYS-Matsuyama.jpg',
					id: '6276'
				}
			]
		},
		'fukuoka':{
			city: 'Fukuoka',
			id: 'fukuoka',
			hotels: [
				{
					name: 'ホテルマイステイズ福岡天神南',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒810-0003 福岡市中央区春吉3-14-20',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin-Minami.jpg',
					id: '70215'
				},
				{
					name: 'ホテルマイステイズ福岡天神',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒810-0001 福岡県福岡市中央区天神3-5-7',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin.jpg',
					id: '72791'
				}
			]
		},
		'oita':{
			city: 'Oita',
			id: 'oita',
			hotels: [
				{
					name: 'ホテルマイステイズ大分',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒870-0046 大分県大分市荷揚町1-32',
					img: 'HOTEL-MYSTAYS-Oita.jpg',
					id: '67983'
				},
				{
					name: '別府亀の井ホテル',
					localName: 'ホテルマイステイズ御堂筋本町',
					address: '〒874-0936 大分県別府市中央町5-17',
					img: 'Beppu-Kamenoi-Hotel.jpg',
					id: '4807'
				}
			]
		},
		'okinawa':{
			city: 'Okinawa',
			id: 'okinawa',
			hotels: [
				{
					name: 'アートホテル石垣島',
					localName: 'アートホテル石垣島',
					address: '〒 907-0022 沖縄県石垣市大川559',
					img: 'ART-HOTEL-ISHIGAKIJIMA.jpg',
					id: '2770'
				},
				{
					name: 'フサキリゾートヴィレッジ（石垣島',
					localName: 'フサキリゾートヴィレッジ（石垣島',
					address: '〒907-0024 沖縄県石垣市新川1625',
					img: 'Fusaki-Resort-Village-(Ishigaki-jima).jpg',
					id: '38599'
				}
			]
		}
	};
})(window);
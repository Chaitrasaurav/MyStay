(function(window){
	
	'use strict';

	window.cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER Akasaka',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'HOTEL-MYSTAYS-PREMIER-Akasaka.jpg',
					id: 'jptok26324'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Hamamatsucho',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'HOTEL-MYSTAYS-PREMIER-Hamamatsucho.jpg',
					id: 'jptok28530'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Omori',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'HOTEL-MYSTAYS-PREMIER-Omori.jpg',
					id: 'jptok28531'
				},
				{
					name: 'HOTEL MYSTAYS Asakusa',
					address: '',
					img: 'HOTEL-MYSTAYS-Asakusa.jpg',
					id: 'jptok26318'
				},
				{
					name: 'HOTEL MYSTAYS Asakusa bashi',
					address: '',
					img: 'HOTEL-MYSTAYS-Asakusabashi.jpg',
					id: 'jptok26316'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda',
					address: '',
					img: 'HOTEL-MYSTAYS-Gotanda.jpg',
					id: 'jptok26323'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda Station',
					address: '',
					img: 'HOTEL-MYSTAYS-Gotanda-Station.jpg',
					id: 'jptok26951'
				},
				{
					name: 'HOTEL MYSTAYS Hamamatsucho',
					address: '',
					img: 'HOTEL-MYSTAYS-Hamamatsucho.jpg',
					id: 'jptok26322'
				},
				{
					name: 'HOTEL MYSTAYS Haneda',
					address: '',
					img: 'HOTEL-MYSTAYS-Haneda.jpg',
					id: 'jptok26798'
				},
				{
					name: 'HOTEL MYSTAYS Higashi Ikebukuroa',
					address: '',
					img: 'HOTEL-MYSTAYS-Higashi-Ikebukuro.jpg',
					id: 'jptok26319'
				},
				{
					name: 'HOTEL MYSTAYS Kamata',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'HOTEL-MYSTAYS-Kamata.jpg',
					id: 'jptok26325'
				},
				{
					name: 'HOTEL MYSTAYS Kameido',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'HOTEL-MYSTAYS-Kameido.jpg',
					id: 'jptok26311'
				},
				{
					name: 'HOTEL MYSTAYS Kanda',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'HOTEL-MYSTAYS-Kanda.jpg',
					id: 'jptok26313'
				},
				{
					name: 'HOTEL MYSTAYS Nippori',
					address: '',
					img: 'HOTEL-MYSTAYS-Nippori.jpg',
					id: 'jptok26329'
				},
				{
					name: 'HOTEL MYSTAYS Nishi Shinjuku',
					address: '',
					img: 'HOTEL-MYSTAYS-Nishi-Shinjuku.jpg',
					id: 'jptok26320'
				},
				{
					name: 'HOTEL MYSTAYS Ochanomizu Conference Center',
					address: '',
					img: 'HOTEL-MYSTAYS-Ochanomizu-Conference-Center.jpg',
					id: 'jptok26310'
				},
				{
					name: 'HOTEL MYSTAYS Ueno East',
					address: '',
					img: 'HOTEL-MYSTAYS-Ueno-East.jpg',
					id: 'jptok28305'
				},
				{
					name: 'HOTEL MYSTAYS Ueno Inaricho',
					address: '',
					img: 'HOTEL-MYSTAYS-Ueno-Inaricho.jpg',
					id: 'jptok26312'
				},
				{
					name: 'HOTEL MYSTAYS Ueno Iriyaguchi',
					address: '',
					img: 'HOTEL-MYSTAYS-Ueno-Iriyaguchi.jpg',
					id: 'jptok26350'
				},
				{
					name: 'FLEXSTAY INN Ekoda',
					address: '',
					img: 'FLEXSTAY-INN-Ekoda.jpg',
					id: 'jptok26345'
				},
				{
					name: 'FLEXSTAY INN Higashi Jujo',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'FLEXSTAY-INN-Higashi-Jujo.jpg',
					id: 'jptok26339'
				},
				{
					name: 'FLEXSTAY INN Iidabashi',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'FLEXSTAY-INN-Iidabashi.jpg',
					id: 'jptok26340'
				},
				{
					name: 'FLEXSTAY INN Kiyosumi Shirakawa',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'FLEXSTAY-INN-Kiyosumi-Shirakawa.jpg',
					id: 'jptok26348'
				},
				{
					name: 'FLEXSTAY INN Nakanobu',
					address: '',
					img: 'FLEXSTAY-INN-Nakanobu.jpg',
					id: 'jptok26346'
				},
				{
					name: 'FLEXSTAY INN Shinagawa',
					address: '',
					img: 'FLEXSTAY-INN-Shinagawa.jpg',
					id: 'jptok26341'
				},
				{
					name: 'FLEXSTAY INN Shirogane',
					address: '',
					img: 'FLEXSTAY-INN-Shirogane.jpg',
					id: 'jptok26336'
				},
				{
					name: 'FLEXSTAY INN Sugamo',
					address: '',
					img: 'FLEXSTAY-INN-Sugamo.jpg',
					id: 'jptok26333'
				},
				{
					name: 'FLEXSTAY INN Tokiwadai',
					address: '',
					img: 'FLEXSTAY-INN-Tokiwadai.jpg',
					id: 'jptok26344'
				},
				{
					name: 'MyCUBE by MYSTAYS Asakusa Kuramae',
					address: '',
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
					name: 'HOTEL MYSTAYS Kyoto Shijo',
					address: '',
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
					name: 'HOTEL MYSTAYS Midosuji Honmachi',
					address: '',
					img: 'HOTEL-MYSTAYS-Midosuji-Honmachi.jpg',
					id: 'jposa31260'
				},
				{
					name: 'HOTEL MYSTAYS Otemae',
					address: '',
					img: 'HOTEL-MYSTAYS-Otemae.jpg',
					id: 'jposa26328'
				},
				{
					name: 'HOTEL MYSTAYS Sakaisuji Honmachi',
					address: '',
					img: 'HOTEL-MYSTAYS-Sakaisuji-Honmachi.jpg',
					id: 'jposa26315'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi',
					address: '',
					img: 'HOTEL-MYSTAYS-Shinsaibashi.jpg',
					id: 'jposa26338'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi East',
					address: '',
					img: 'HOTEL-MYSTAYS-Shinsaibashi-East.jpg',
					id: 'jposa28306'
				},
				{
					name: 'HOTEL MYSTAYS Shin Osaka Conference Center',
					address: '',
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
					name: 'HOTEL MYSTAYS PREMIER Kanazawa',
					address: '',
					img: 'HOTEL-MYSTAYS-PREMIER-Kanazawa.jpg',
					id: 'jpkan26799'
				},
				{
					name: 'HOTEL MYSTAYS Kanazawa Castle',
					address: '',
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
					name: 'HOTEL MYSTAYS Maihama',
					address: '',
					img: 'HOTEL-MYSTAYS-Maihama.jpg',
					id: 'jpura26317'
				},
				{
					name: 'MYSTAYS Shin Urayasu Conference Center',
					address: '',
					img: 'MYSTAYS-Shin-Urayasu-Conference-Center.jpg',
					id: 'jpura26309'
				},
				{
					name: 'FLEXSTAY INN Shin Urayasu',
					address: '',
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
					address: '',
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
					name: 'FLEXSTAY INN Kawasaki Kaizuka',
					address: '',
					img: 'FLEXSTAY-INN-Kawasaki-Kaizuka.jpg',
					id: 'jpkaw26347'
				},
				{
					name: 'FLEXSTAY INN Kawasaki Ogawacho',
					address: '',
					img: 'FLEXSTAY-INN-Ogawacho.jpg',
					id: 'jpkaw26337'
				},
				{
					name: 'FLEXSTAY INN Tamagawa',
					address: '',
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
					name: 'HOTEL MYSTAYS Yokohama',
					address: '',
					img: 'HOTEL-MYSTAYS-Yokohama.jpg',
					id: 'jpyok26332'
				},
				{
					name: 'HOTEL MYSTAYS Yokohama Kannai',
					address: '',
					img: 'HOTEL-MYSTAYS-Yokohama-Kannai.jpg',
					id: 'jpyok29010'
				},
				{
					name: 'FLEXSTAY INN Sakuragicho',
					address: '',
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
					name: 'Shirahama Ocean Resort',
					address: '',
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
					name: 'HOTEL MYSTAYS Utsunomiya',
					address: '',
					img: 'HOTEL-MYSTAYS-Utsunomiya.jpg',
					id: 'jputs26331'
				},
				{
					name: 'Hotel Épinard Nasu',
					address: '',
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
					name: 'HOTEL MYSTAYS PREMIER Sapporo Park',
					address: '',
					img: 'HOTEL-MYSTAYS-PREMIER-Sapporo-Park.jpg',
					id: 'jphok28823'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Aspen',
					address: '',
					img: 'HOTEL-MYSTAYS-Sapporo-Aspen.jpg',
					id: 'jpsap29702'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park',
					address: '',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park.jpg',
					id: 'jpsap27590'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park Annex',
					address: '',
					img: 'HOTEL-MYSTAYS-Sapporo-Nakajima-Park-Annex.jpg',
					id: 'jphok30695'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Station',
					address: '',
					img: 'HOTEL-MYSTAYS-Sapporo-Station.jpg',
					id: 'jpsap29772'
				},
				{
					name: 'ART HOTEL ASAHIKAWA',
					address: '',
					img: 'ART-HOTEL-ASAHIKAWA.jpg',
					id: 'jphok28822'
				},
				{
					name: 'Hotel Nord Otaru',
					address: '',
					img: 'Hotel-Nord-Otaru.jpg',
					id: 'jpota28373'
				},
				{
					name: 'Hotel Sonia Otaru',
					address: '',
					img: 'Hotel-Sonia-Otaru.jpg',
					id: 'jpota29771'
				},
				{
					name: 'Hakodate Kokusai Hotel',
					address: '',
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
					name: 'ART HOTEL HIROSAKI CITY',
					address: '',
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
					name: 'HOTEL MYSTAYS Fuji',
					address: '',
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
					name: 'HOTEL MYSTAYS Nagoya Sakae',
					address: '',
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
					name: 'ART HOTEL NIIGATA STATION',
					address: '',
					img: 'ARTHOTEL-NIIGATA-STATION.jpg',
					id: 'jpchu29824'
				},
				{
					name: 'ART HOTEL JOETSU',
					address: '',
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
					name: 'Resort Hotel Olivean Shodoshima',
					address: '',
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
					name: 'HOTEL MYSTAYS Matsuyama',
					address: '',
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
					name: 'HOTEL MYSTAYS Fukuoka Tenjin Minami',
					address: '',
					img: 'HOTEL-MYSTAYS-Fukuoka-Tenjin-Minami.jpg',
					id: 'jpfuk26314'
				},
				{
					name: 'HOTEL MYSTAYS Fukuoka Tenjin',
					address: '',
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
					name: 'HOTEL MYSTAYS Oita',
					address: '',
					img: 'HOTEL-MYSTAYS-Oita.jpg',
					id: 'jpoit29773'
				},
				{
					name: 'Beppu Kamenoi Hotel',
					address: '',
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
					name: 'ART HOTEL ISHIGAKIJIMA',
					address: '',
					img: 'ART-HOTEL-ISHIGAKIJIMA.jpg',
					id: 'jpoki29665'
				},
				{
					name: 'Fusaki Resort Village (Ishigaki-jima)',
					address: '',
					img: 'Fusaki-Resort-Village-(Ishigaki-jima).jpg',
					id: 'jpoki28825'
				}
			]
		}
	};
})(window);
(function() {
	"use strict";
	var countries = [
	{
		"index": 1,
		"id": "afghanistan",
		"name": "Afghanistan",
		"iso": "AF",
		"data": {
			"iso_2": "AF",
			"iso_3": "AFG",
			"phone": "93",
			"currency": "AFN",
			"ttl": ".af",
			"capital": "Kabul"
		}
	},
	{
		"index": 2,
		"id": "albania",
		"name": "Albania",
		"iso": "AL",
		"data": {
			"iso_2": "AL",
			"iso_3": "ALB",
			"phone": "355",
			"currency": "ALL",
			"ttl": ".al",
			"capital": "Tirana"
		}
	},
	{
		"index": 3,
		"id": "algeria",
		"name": "Algeria",
		"iso": "DZ",
		"data": {
			"iso_2": "DZ",
			"iso_3": "DZA",
			"phone": "213",
			"currency": "DZD",
			"ttl": ".dz",
			"capital": "Algiers"
		}
	},
	{
		"index": 4,
		"id": "american_samoa",
		"name": "American Samoa",
		"iso": "AS",
		"data": {
			"iso_2": "AS",
			"iso_3": "ASM",
			"phone": "1-684",
			"currency": "USD",
			"ttl": ".as",
			"capital": "Pago Pago"
		}
	},
	{
		"index": 5,
		"id": "andorra",
		"name": "Andorra",
		"iso": "AD",
		"data": {
			"iso_2": "AD",
			"iso_3": "AND",
			"phone": "376",
			"currency": "EUR",
			"ttl": ".ad",
			"capital": "Andorra la Vella"
		}
	},
	{
		"index": 6,
		"id": "angola",
		"name": "Angola",
		"iso": "AO",
		"data": {
			"iso_2": "AO",
			"iso_3": "AGO",
			"phone": "244",
			"currency": "AOA",
			"ttl": ".ao",
			"capital": "Luanda"
		}
	},
	{
		"index": 7,
		"id": "anguilla",
		"name": "Anguilla",
		"iso": "AI",
		"data": {
			"iso_2": "AI",
			"iso_3": "AIA",
			"phone": "1-264",
			"currency": "XCD",
			"ttl": ".ai",
			"capital": "The Valley"
		}
	},
	{
		"index": 8,
		"id": "antigua_and_barbuda",
		"name": "Antigua and Barbuda",
		"iso": "AG",
		"data": {
			"iso_2": "AG",
			"iso_3": "ATG",
			"phone": "1-268",
			"currency": "XCD",
			"ttl": ".ag",
			"capital": "St. John's"
		}
	},
	{
		"index": 9,
		"id": "argentina",
		"name": "Argentina",
		"iso": "AR",
		"data": {
			"iso_2": "AR",
			"iso_3": "ARG",
			"phone": "54",
			"currency": "ARS",
			"ttl": ".ar",
			"capital": "Buenos Aires"
		}
	},
	{
		"index": 10,
		"id": "armenia",
		"name": "Armenia",
		"iso": "AM",
		"data": {
			"iso_2": "AM",
			"iso_3": "ARM",
			"phone": "374",
			"currency": "AMD",
			"ttl": ".am",
			"capital": "Yerevan"
		}
	},
	{
		"index": 11,
		"id": "aruba",
		"name": "Aruba",
		"iso": "AW",
		"data": {
			"iso_2": "AW",
			"iso_3": "ABW",
			"phone": "297",
			"currency": "AWG",
			"ttl": ".aw",
			"capital": "Oranjestad"
		}
	},
	{
		"index": 12,
		"id": "australia",
		"name": "Australia",
		"iso": "AU",
		"data": {
			"iso_2": "AU",
			"iso_3": "AUS",
			"phone": "61",
			"currency": "AUD",
			"ttl": ".au",
			"capital": "Canberra"
		}
	},
	{
		"index": 13,
		"id": "austria",
		"name": "Austria",
		"iso": "AT",
		"data": {
			"iso_2": "AT",
			"iso_3": "AUT",
			"phone": "43",
			"currency": "EUR",
			"ttl": ".at",
			"capital": "Vienna"
		}
	},
	{
		"index": 14,
		"id": "azerbaijan",
		"name": "Azerbaijan",
		"iso": "AZ",
		"data": {
			"iso_2": "AZ",
			"iso_3": "AZE",
			"phone": "994",
			"currency": "AZN",
			"ttl": ".az",
			"capital": "Baku"
		}
	},
	{
		"index": 15,
		"id": "bahamas",
		"name": "Bahamas",
		"iso": "BS",
		"data": {
			"iso_2": "BS",
			"iso_3": "BHS",
			"phone": "1-242",
			"currency": "BSD",
			"ttl": ".bs",
			"capital": "Nassau"
		}
	},
	{
		"index": 16,
		"id": "bahrain",
		"name": "Bahrain",
		"iso": "BH",
		"data": {
			"iso_2": "BH",
			"iso_3": "BHR",
			"phone": "973",
			"currency": "BHD",
			"ttl": ".bh",
			"capital": "Manama"
		}
	},
	{
		"index": 17,
		"id": "bangladesh",
		"name": "Bangladesh",
		"iso": "BD",
		"data": {
			"iso_2": "BD",
			"iso_3": "BGD",
			"phone": "880",
			"currency": "BDT",
			"ttl": ".bd",
			"capital": "Dhaka"
		}
	},
	{
		"index": 18,
		"id": "barbados",
		"name": "Barbados",
		"iso": "BB",
		"data": {
			"iso_2": "BB",
			"iso_3": "BRB",
			"phone": "1-246",
			"currency": "BBD",
			"ttl": ".bb",
			"capital": "Bridgetown"
		}
	},
	{
		"index": 19,
		"id": "belarus",
		"name": "Belarus",
		"iso": "BY",
		"data": {
			"iso_2": "BY",
			"iso_3": "BLR",
			"phone": "375",
			"currency": "BYN",
			"ttl": ".by",
			"capital": "Minsk"
		}
	},
	{
		"index": 20,
		"id": "belgium",
		"name": "Belgium",
		"iso": "BE",
		"data": {
			"iso_2": "BE",
			"iso_3": "BEL",
			"phone": "32",
			"currency": "EUR",
			"ttl": ".be",
			"capital": "Brussels"
		}
	},
	{
		"index": 21,
		"id": "belize",
		"name": "Belize",
		"iso": "BZ",
		"data": {
			"iso_2": "BZ",
			"iso_3": "BLZ",
			"phone": "501",
			"currency": "BZD",
			"ttl": ".bz",
			"capital": "Belmopan"
		}
	},
	{
		"index": 22,
		"id": "benin",
		"name": "Benin",
		"iso": "BJ",
		"data": {
			"iso_2": "BJ",
			"iso_3": "BEN",
			"phone": "229",
			"currency": "XOF",
			"ttl": ".bj",
			"capital": "Porto-Novo"
		}
	},
	{
		"index": 23,
		"id": "bermuda",
		"name": "Bermuda",
		"iso": "BM",
		"data": {
			"iso_2": "BM",
			"iso_3": "BMU",
			"phone": "1-441",
			"currency": "BMD",
			"ttl": ".bm",
			"capital": "Hamilton"
		}
	},
	{
		"index": 24,
		"id": "bhutan",
		"name": "Bhutan",
		"iso": "BT",
		"data": {
			"iso_2": "BT",
			"iso_3": "BTN",
			"phone": "975",
			"currency": "INR,BTN",
			"ttl": ".bt",
			"capital": "Thimphu"
		}
	},
	{
		"index": 25,
		"id": "bolivia_plurinational_state_of",
		"name": "Bolivia (Plurinational State of)",
		"iso": "BO",
		"data": {
			"iso_2": "BO",
			"iso_3": "BOL",
			"phone": "591",
			"currency": "BOB",
			"ttl": ".bo",
			"capital": "Sucre"
		}
	},
	{
		"index": 26,
		"id": "bonaire_sint_eustatius_and_saba",
		"name": "Bonaire, Sint Eustatius and Saba",
		"iso": "BQ",
		"data": {
			"iso_2": "BQ",
			"iso_3": "BES",
			"phone": "599",
			"currency": "USD",
			"ttl": ".bq",
			"capital": ""
		}
	},
	{
		"index": 27,
		"id": "bosnia_and_herzegovina",
		"name": "Bosnia and Herzegovina",
		"iso": "BA",
		"data": {
			"iso_2": "BA",
			"iso_3": "BIH",
			"phone": "387",
			"currency": "BAM",
			"ttl": ".ba",
			"capital": "Sarajevo"
		}
	},
	{
		"index": 28,
		"id": "botswana",
		"name": "Botswana",
		"iso": "BW",
		"data": {
			"iso_2": "BW",
			"iso_3": "BWA",
			"phone": "267",
			"currency": "BWP",
			"ttl": ".bw",
			"capital": "Gaborone"
		}
	},
	{
		"index": 29,
		"id": "bouvet_island",
		"name": "Bouvet Island",
		"iso": "BV",
		"data": {
			"iso_2": "BV",
			"iso_3": "BVT",
			"phone": "47",
			"currency": "NOK",
			"ttl": ".bv",
			"capital": ""
		}
	},
	{
		"index": 30,
		"id": "brazil",
		"name": "Brazil",
		"iso": "BR",
		"data": {
			"iso_2": "BR",
			"iso_3": "BRA",
			"phone": "55",
			"currency": "BRL",
			"ttl": ".br",
			"capital": "Brasilia"
		}
	},
	{
		"index": 31,
		"id": "british_indian_ocean_territory",
		"name": "British Indian Ocean Territory",
		"iso": "IO",
		"data": {
			"iso_2": "IO",
			"iso_3": "IOT",
			"phone": "246",
			"currency": "USD",
			"ttl": ".io",
			"capital": "Diego Garcia"
		}
	},
	{
		"index": 32,
		"id": "british_virgin_islands",
		"name": "British Virgin Islands",
		"iso": "VG",
		"data": {
			"iso_2": "VG",
			"iso_3": "VGB",
			"phone": "1-284",
			"currency": "USD",
			"ttl": ".vg",
			"capital": "Road Town"
		}
	},
	{
		"index": 33,
		"id": "brunei_darussalam",
		"name": "Brunei Darussalam",
		"iso": "BN",
		"data": {
			"iso_2": "BN",
			"iso_3": "BRN",
			"phone": "673",
			"currency": "BND",
			"ttl": ".bn",
			"capital": "Bandar Seri Begawan"
		}
	},
	{
		"index": 34,
		"id": "bulgaria",
		"name": "Bulgaria",
		"iso": "BG",
		"data": {
			"iso_2": "BG",
			"iso_3": "BGR",
			"phone": "359",
			"currency": "BGN",
			"ttl": ".bg",
			"capital": "Sofia"
		}
	},
	{
		"index": 35,
		"id": "burkina_faso",
		"name": "Burkina Faso",
		"iso": "BF",
		"data": {
			"iso_2": "BF",
			"iso_3": "BFA",
			"phone": "226",
			"currency": "XOF",
			"ttl": ".bf",
			"capital": "Ouagadougou"
		}
	},
	{
		"index": 36,
		"id": "burundi",
		"name": "Burundi",
		"iso": "BI",
		"data": {
			"iso_2": "BI",
			"iso_3": "BDI",
			"phone": "257",
			"currency": "BIF",
			"ttl": ".bi",
			"capital": "Bujumbura"
		}
	},
	{
		"index": 37,
		"id": "cabo_verde",
		"name": "Cabo Verde",
		"iso": "CV",
		"data": {
			"iso_2": "CV",
			"iso_3": "CPV",
			"phone": "238",
			"currency": "CVE",
			"ttl": ".cv",
			"capital": "Praia"
		}
	},
	{
		"index": 38,
		"id": "cambodia",
		"name": "Cambodia",
		"iso": "KH",
		"data": {
			"iso_2": "KH",
			"iso_3": "KHM",
			"phone": "855",
			"currency": "KHR",
			"ttl": ".kh",
			"capital": "Phnom Penh"
		}
	},
	{
		"index": 39,
		"id": "cameroon",
		"name": "Cameroon",
		"iso": "CM",
		"data": {
			"iso_2": "CM",
			"iso_3": "CMR",
			"phone": "237",
			"currency": "XAF",
			"ttl": ".cm",
			"capital": "Yaounde"
		}
	},
	{
		"index": 40,
		"id": "canada",
		"name": "Canada",
		"iso": "CA",
		"data": {
			"iso_2": "CA",
			"iso_3": "CAN",
			"phone": "1",
			"currency": "CAD",
			"ttl": ".ca",
			"capital": "Ottawa"
		}
	},
	{
		"index": 41,
		"id": "cayman_islands",
		"name": "Cayman Islands",
		"iso": "KY",
		"data": {
			"iso_2": "KY",
			"iso_3": "CYM",
			"phone": "1-345",
			"currency": "KYD",
			"ttl": ".ky",
			"capital": "George Town"
		}
	},
	{
		"index": 42,
		"id": "central_african_republic",
		"name": "Central African Republic",
		"iso": "CF",
		"data": {
			"iso_2": "CF",
			"iso_3": "CAF",
			"phone": "236",
			"currency": "XAF",
			"ttl": ".cf",
			"capital": "Bangui"
		}
	},
	{
		"index": 43,
		"id": "chad",
		"name": "Chad",
		"iso": "TD",
		"data": {
			"iso_2": "TD",
			"iso_3": "TCD",
			"phone": "235",
			"currency": "XAF",
			"ttl": ".td",
			"capital": "N'Djamena"
		}
	},
	{
		"index": 44,
		"id": "chile",
		"name": "Chile",
		"iso": "CL",
		"data": {
			"iso_2": "CL",
			"iso_3": "CHL",
			"phone": "56",
			"currency": "CLP",
			"ttl": ".cl",
			"capital": "Santiago"
		}
	},
	{
		"index": 45,
		"id": "china",
		"name": "China",
		"iso": "CN",
		"data": {
			"iso_2": "CN",
			"iso_3": "CHN",
			"phone": "86",
			"currency": "CNY",
			"ttl": ".cn",
			"capital": "Beijing"
		}
	},
	{
		"index": 46,
		"id": "china_hong_kong_special_administrative_region",
		"name": "China, Hong Kong Special Administrative Region",
		"iso": "HK",
		"data": {
			"iso_2": "HK",
			"iso_3": "HKG",
			"phone": "852",
			"currency": "HKD",
			"ttl": ".hk",
			"capital": "Hong Kong"
		}
	},
	{
		"index": 47,
		"id": "china_macao_special_administrative_region",
		"name": "China, Macao Special Administrative Region",
		"iso": "MO",
		"data": {
			"iso_2": "MO",
			"iso_3": "MAC",
			"phone": "853",
			"currency": "MOP",
			"ttl": ".mo",
			"capital": "Macao"
		}
	},
	{
		"index": 48,
		"id": "christmas_island",
		"name": "Christmas Island",
		"iso": "CX",
		"data": {
			"iso_2": "CX",
			"iso_3": "CXR",
			"phone": "61",
			"currency": "AUD",
			"ttl": ".cx",
			"capital": "Flying Fish Cove"
		}
	},
	{
		"index": 49,
		"id": "cocos_keeling_islands",
		"name": "Cocos (Keeling) Islands",
		"iso": "CC",
		"data": {
			"iso_2": "CC",
			"iso_3": "CCK",
			"phone": "61",
			"currency": "AUD",
			"ttl": ".cc",
			"capital": "West Island"
		}
	},
	{
		"index": 50,
		"id": "colombia",
		"name": "Colombia",
		"iso": "CO",
		"data": {
			"iso_2": "CO",
			"iso_3": "COL",
			"phone": "57",
			"currency": "COP",
			"ttl": ".co",
			"capital": "Bogota"
		}
	},
	{
		"index": 51,
		"id": "comoros",
		"name": "Comoros",
		"iso": "KM",
		"data": {
			"iso_2": "KM",
			"iso_3": "COM",
			"phone": "269",
			"currency": "KMF",
			"ttl": ".km",
			"capital": "Moroni"
		}
	},
	{
		"index": 52,
		"id": "congo",
		"name": "Congo",
		"iso": "CG",
		"data": {
			"iso_2": "CG",
			"iso_3": "COG",
			"phone": "242",
			"currency": "XAF",
			"ttl": ".cg",
			"capital": "Brazzaville"
		}
	},
	{
		"index": 53,
		"id": "cook_islands",
		"name": "Cook Islands",
		"iso": "CK",
		"data": {
			"iso_2": "CK",
			"iso_3": "COK",
			"phone": "682",
			"currency": "NZD",
			"ttl": ".ck",
			"capital": "Avarua"
		}
	},
	{
		"index": 54,
		"id": "costa_rica",
		"name": "Costa Rica",
		"iso": "CR",
		"data": {
			"iso_2": "CR",
			"iso_3": "CRI",
			"phone": "506",
			"currency": "CRC",
			"ttl": ".cr",
			"capital": "San Jose"
		}
	},
	{
		"index": 55,
		"id": "croatia",
		"name": "Croatia",
		"iso": "HR",
		"data": {
			"iso_2": "HR",
			"iso_3": "HRV",
			"phone": "385",
			"currency": "HRK",
			"ttl": ".hr",
			"capital": "Zagreb"
		}
	},
	{
		"index": 56,
		"id": "cuba",
		"name": "Cuba",
		"iso": "CU",
		"data": {
			"iso_2": "CU",
			"iso_3": "CUB",
			"phone": "53",
			"currency": "CUP,CUC",
			"ttl": ".cu",
			"capital": "Havana"
		}
	},
	{
		"index": 57,
		"id": "curaçao",
		"name": "Curaçao",
		"iso": "CW",
		"data": {
			"iso_2": "CW",
			"iso_3": "CUW",
			"phone": "599",
			"currency": "ANG",
			"ttl": ".cw",
			"capital": "Willemstad"
		}
	},
	{
		"index": 58,
		"id": "cyprus",
		"name": "Cyprus",
		"iso": "CY",
		"data": {
			"iso_2": "CY",
			"iso_3": "CYP",
			"phone": "357",
			"currency": "EUR",
			"ttl": ".cy",
			"capital": "Nicosia"
		}
	},
	{
		"index": 59,
		"id": "czechia",
		"name": "Czechia",
		"iso": "CZ",
		"data": {
			"iso_2": "CZ",
			"iso_3": "CZE",
			"phone": "420",
			"currency": "CZK",
			"ttl": ".cz",
			"capital": "Prague"
		}
	},
	{
		"index": 60,
		"id": "côte_d'ivoire",
		"name": "Côte d'Ivoire",
		"iso": "CI",
		"data": {
			"iso_2": "CI",
			"iso_3": "CIV",
			"phone": "225",
			"currency": "XOF",
			"ttl": ".ci",
			"capital": "Yamoussoukro"
		}
	},
	{
		"index": 61,
		"id": "democratic_people's_republic_of_korea",
		"name": "Democratic People's Republic of Korea",
		"iso": "KP",
		"data": {
			"iso_2": "KP",
			"iso_3": "PRK",
			"phone": "850",
			"currency": "KPW",
			"ttl": ".kp",
			"capital": "Pyongyang"
		}
	},
	{
		"index": 62,
		"id": "democratic_republic_of_the_congo",
		"name": "Democratic Republic of the Congo",
		"iso": "CD",
		"data": {
			"iso_2": "CD",
			"iso_3": "COD",
			"phone": "243",
			"currency": "CDF",
			"ttl": ".cd",
			"capital": "Kinshasa"
		}
	},
	{
		"index": 63,
		"id": "denmark",
		"name": "Denmark",
		"iso": "DK",
		"data": {
			"iso_2": "DK",
			"iso_3": "DNK",
			"phone": "45",
			"currency": "DKK",
			"ttl": ".dk",
			"capital": "Copenhagen"
		}
	},
	{
		"index": 64,
		"id": "djibouti",
		"name": "Djibouti",
		"iso": "DJ",
		"data": {
			"iso_2": "DJ",
			"iso_3": "DJI",
			"phone": "253",
			"currency": "DJF",
			"ttl": ".dj",
			"capital": "Djibouti"
		}
	},
	{
		"index": 65,
		"id": "dominica",
		"name": "Dominica",
		"iso": "DM",
		"data": {
			"iso_2": "DM",
			"iso_3": "DMA",
			"phone": "1-767",
			"currency": "XCD",
			"ttl": ".dm",
			"capital": "Roseau"
		}
	},
	{
		"index": 66,
		"id": "dominican_republic",
		"name": "Dominican Republic",
		"iso": "DO",
		"data": {
			"iso_2": "DO",
			"iso_3": "DOM",
			"phone": "1-809,1-829,1-849",
			"currency": "DOP",
			"ttl": ".do",
			"capital": "Santo Domingo"
		}
	},
	{
		"index": 67,
		"id": "ecuador",
		"name": "Ecuador",
		"iso": "EC",
		"data": {
			"iso_2": "EC",
			"iso_3": "ECU",
			"phone": "593",
			"currency": "USD",
			"ttl": ".ec",
			"capital": "Quito"
		}
	},
	{
		"index": 68,
		"id": "egypt",
		"name": "Egypt",
		"iso": "EG",
		"data": {
			"iso_2": "EG",
			"iso_3": "EGY",
			"phone": "20",
			"currency": "EGP",
			"ttl": ".eg",
			"capital": "Cairo"
		}
	},
	{
		"index": 69,
		"id": "el_salvador",
		"name": "El Salvador",
		"iso": "SV",
		"data": {
			"iso_2": "SV",
			"iso_3": "SLV",
			"phone": "503",
			"currency": "SVC,USD",
			"ttl": ".sv",
			"capital": "San Salvador"
		}
	},
	{
		"index": 70,
		"id": "equatorial_guinea",
		"name": "Equatorial Guinea",
		"iso": "GQ",
		"data": {
			"iso_2": "GQ",
			"iso_3": "GNQ",
			"phone": "240",
			"currency": "XAF",
			"ttl": ".gq",
			"capital": "Malabo"
		}
	},
	{
		"index": 71,
		"id": "eritrea",
		"name": "Eritrea",
		"iso": "ER",
		"data": {
			"iso_2": "ER",
			"iso_3": "ERI",
			"phone": "291",
			"currency": "ERN",
			"ttl": ".er",
			"capital": "Asmara"
		}
	},
	{
		"index": 72,
		"id": "estonia",
		"name": "Estonia",
		"iso": "EE",
		"data": {
			"iso_2": "EE",
			"iso_3": "EST",
			"phone": "372",
			"currency": "EUR",
			"ttl": ".ee",
			"capital": "Tallinn"
		}
	},
	{
		"index": 73,
		"id": "ethiopia",
		"name": "Ethiopia",
		"iso": "ET",
		"data": {
			"iso_2": "ET",
			"iso_3": "ETH",
			"phone": "251",
			"currency": "ETB",
			"ttl": ".et",
			"capital": "Addis Ababa"
		}
	},
	{
		"index": 74,
		"id": "faroe_islands",
		"name": "Faroe Islands",
		"iso": "FO",
		"data": {
			"iso_2": "FO",
			"iso_3": "FRO",
			"phone": "298",
			"currency": "DKK",
			"ttl": ".fo",
			"capital": "Torshavn"
		}
	},
	{
		"index": 75,
		"id": "fiji",
		"name": "Fiji",
		"iso": "FJ",
		"data": {
			"iso_2": "FJ",
			"iso_3": "FJI",
			"phone": "679",
			"currency": "FJD",
			"ttl": ".fj",
			"capital": "Suva"
		}
	},
	{
		"index": 76,
		"id": "finland",
		"name": "Finland",
		"iso": "FI",
		"data": {
			"iso_2": "FI",
			"iso_3": "FIN",
			"phone": "358",
			"currency": "EUR",
			"ttl": ".fi",
			"capital": "Helsinki"
		}
	},
	{
		"index": 77,
		"id": "france",
		"name": "France",
		"iso": "FR",
		"data": {
			"iso_2": "FR",
			"iso_3": "FRA",
			"phone": "33",
			"currency": "EUR",
			"ttl": ".fr",
			"capital": "Paris"
		}
	},
	{
		"index": 78,
		"id": "french_guiana",
		"name": "French Guiana",
		"iso": "GF",
		"data": {
			"iso_2": "GF",
			"iso_3": "GUF",
			"phone": "594",
			"currency": "EUR",
			"ttl": ".gf",
			"capital": "Cayenne"
		}
	},
	{
		"index": 79,
		"id": "french_polynesia",
		"name": "French Polynesia",
		"iso": "PF",
		"data": {
			"iso_2": "PF",
			"iso_3": "PYF",
			"phone": "689",
			"currency": "XPF",
			"ttl": ".pf",
			"capital": "Papeete"
		}
	},
	{
		"index": 80,
		"id": "french_southern_territories",
		"name": "French Southern Territories",
		"iso": "TF",
		"data": {
			"iso_2": "TF",
			"iso_3": "ATF",
			"phone": "262",
			"currency": "EUR",
			"ttl": ".tf",
			"capital": "Port-aux-Francais"
		}
	},
	{
		"index": 81,
		"id": "gabon",
		"name": "Gabon",
		"iso": "GA",
		"data": {
			"iso_2": "GA",
			"iso_3": "GAB",
			"phone": "241",
			"currency": "XAF",
			"ttl": ".ga",
			"capital": "Libreville"
		}
	},
	{
		"index": 82,
		"id": "gambia",
		"name": "Gambia",
		"iso": "GM",
		"data": {
			"iso_2": "GM",
			"iso_3": "GMB",
			"phone": "220",
			"currency": "GMD",
			"ttl": ".gm",
			"capital": "Banjul"
		}
	},
	{
		"index": 83,
		"id": "georgia",
		"name": "Georgia",
		"iso": "GE",
		"data": {
			"iso_2": "GE",
			"iso_3": "GEO",
			"phone": "995",
			"currency": "GEL",
			"ttl": ".ge",
			"capital": "Tbilisi"
		}
	},
	{
		"index": 84,
		"id": "germany",
		"name": "Germany",
		"iso": "DE",
		"data": {
			"iso_2": "DE",
			"iso_3": "DEU",
			"phone": "49",
			"currency": "EUR",
			"ttl": ".de",
			"capital": "Berlin"
		}
	},
	{
		"index": 85,
		"id": "ghana",
		"name": "Ghana",
		"iso": "GH",
		"data": {
			"iso_2": "GH",
			"iso_3": "GHA",
			"phone": "233",
			"currency": "GHS",
			"ttl": ".gh",
			"capital": "Accra"
		}
	},
	{
		"index": 86,
		"id": "gibraltar",
		"name": "Gibraltar",
		"iso": "GI",
		"data": {
			"iso_2": "GI",
			"iso_3": "GIB",
			"phone": "350",
			"currency": "GIP",
			"ttl": ".gi",
			"capital": "Gibraltar"
		}
	},
	{
		"index": 87,
		"id": "greece",
		"name": "Greece",
		"iso": "GR",
		"data": {
			"iso_2": "GR",
			"iso_3": "GRC",
			"phone": "30",
			"currency": "EUR",
			"ttl": ".gr",
			"capital": "Athens"
		}
	},
	{
		"index": 88,
		"id": "greenland",
		"name": "Greenland",
		"iso": "GL",
		"data": {
			"iso_2": "GL",
			"iso_3": "GRL",
			"phone": "299",
			"currency": "DKK",
			"ttl": ".gl",
			"capital": "Nuuk"
		}
	},
	{
		"index": 89,
		"id": "grenada",
		"name": "Grenada",
		"iso": "GD",
		"data": {
			"iso_2": "GD",
			"iso_3": "GRD",
			"phone": "1-473",
			"currency": "XCD",
			"ttl": ".gd",
			"capital": "St. George's"
		}
	},
	{
		"index": 90,
		"id": "guadeloupe",
		"name": "Guadeloupe",
		"iso": "GP",
		"data": {
			"iso_2": "GP",
			"iso_3": "GLP",
			"phone": "590",
			"currency": "EUR",
			"ttl": ".gp",
			"capital": "Basse-Terre"
		}
	},
	{
		"index": 91,
		"id": "guam",
		"name": "Guam",
		"iso": "GU",
		"data": {
			"iso_2": "GU",
			"iso_3": "GUM",
			"phone": "1-671",
			"currency": "USD",
			"ttl": ".gu",
			"capital": "Hagatna"
		}
	},
	{
		"index": 92,
		"id": "guatemala",
		"name": "Guatemala",
		"iso": "GT",
		"data": {
			"iso_2": "GT",
			"iso_3": "GTM",
			"phone": "502",
			"currency": "GTQ",
			"ttl": ".gt",
			"capital": "Guatemala City"
		}
	},
	{
		"index": 93,
		"id": "guernsey",
		"name": "Guernsey",
		"iso": "GG",
		"data": {
			"iso_2": "GG",
			"iso_3": "GGY",
			"phone": "44",
			"currency": "GBP",
			"ttl": ".gg",
			"capital": "St Peter Port"
		}
	},
	{
		"index": 94,
		"id": "guinea",
		"name": "Guinea",
		"iso": "GN",
		"data": {
			"iso_2": "GN",
			"iso_3": "GIN",
			"phone": "224",
			"currency": "GNF",
			"ttl": ".gn",
			"capital": "Conakry"
		}
	},
	{
		"index": 95,
		"id": "guinea-bissau",
		"name": "Guinea-Bissau",
		"iso": "GW",
		"data": {
			"iso_2": "GW",
			"iso_3": "GNB",
			"phone": "245",
			"currency": "XOF",
			"ttl": ".gw",
			"capital": "Bissau"
		}
	},
	{
		"index": 96,
		"id": "guyana",
		"name": "Guyana",
		"iso": "GY",
		"data": {
			"iso_2": "GY",
			"iso_3": "GUY",
			"phone": "592",
			"currency": "GYD",
			"ttl": ".gy",
			"capital": "Georgetown"
		}
	},
	{
		"index": 97,
		"id": "haiti",
		"name": "Haiti",
		"iso": "HT",
		"data": {
			"iso_2": "HT",
			"iso_3": "HTI",
			"phone": "509",
			"currency": "HTG,USD",
			"ttl": ".ht",
			"capital": "Port-au-Prince"
		}
	},
	{
		"index": 98,
		"id": "heard_island_and_mcdonald_islands",
		"name": "Heard Island and McDonald Islands",
		"iso": "HM",
		"data": {
			"iso_2": "HM",
			"iso_3": "HMD",
			"phone": "672",
			"currency": "AUD",
			"ttl": ".hm",
			"capital": ""
		}
	},
	{
		"index": 99,
		"id": "holy_see",
		"name": "Holy See",
		"iso": "VA",
		"data": {
			"iso_2": "VA",
			"iso_3": "VAT",
			"phone": "39-06",
			"currency": "EUR",
			"ttl": ".va",
			"capital": "Vatican City"
		}
	},
	{
		"index": 100,
		"id": "honduras",
		"name": "Honduras",
		"iso": "HN",
		"data": {
			"iso_2": "HN",
			"iso_3": "HND",
			"phone": "504",
			"currency": "HNL",
			"ttl": ".hn",
			"capital": "Tegucigalpa"
		}
	},
	{
		"index": 101,
		"id": "hungary",
		"name": "Hungary",
		"iso": "HU",
		"data": {
			"iso_2": "HU",
			"iso_3": "HUN",
			"phone": "36",
			"currency": "HUF",
			"ttl": ".hu",
			"capital": "Budapest"
		}
	},
	{
		"index": 102,
		"id": "iceland",
		"name": "Iceland",
		"iso": "IS",
		"data": {
			"iso_2": "IS",
			"iso_3": "ISL",
			"phone": "354",
			"currency": "ISK",
			"ttl": ".is",
			"capital": "Reykjavik"
		}
	},
	{
		"index": 103,
		"id": "india",
		"name": "India",
		"iso": "IN",
		"data": {
			"iso_2": "IN",
			"iso_3": "IND",
			"phone": "91",
			"currency": "INR",
			"ttl": ".in",
			"capital": "New Delhi"
		}
	},
	{
		"index": 104,
		"id": "indonesia",
		"name": "Indonesia",
		"iso": "ID",
		"data": {
			"iso_2": "ID",
			"iso_3": "IDN",
			"phone": "62",
			"currency": "IDR",
			"ttl": ".id",
			"capital": "Jakarta"
		}
	},
	{
		"index": 105,
		"id": "iran_islamic_republic_of",
		"name": "Iran (Islamic Republic of)",
		"iso": "IR",
		"data": {
			"iso_2": "IR",
			"iso_3": "IRN",
			"phone": "98",
			"currency": "IRR",
			"ttl": ".ir",
			"capital": "Tehran"
		}
	},
	{
		"index": 106,
		"id": "iraq",
		"name": "Iraq",
		"iso": "IQ",
		"data": {
			"iso_2": "IQ",
			"iso_3": "IRQ",
			"phone": "964",
			"currency": "IQD",
			"ttl": ".iq",
			"capital": "Baghdad"
		}
	},
	{
		"index": 107,
		"id": "ireland",
		"name": "Ireland",
		"iso": "IE",
		"data": {
			"iso_2": "IE",
			"iso_3": "IRL",
			"phone": "353",
			"currency": "EUR",
			"ttl": ".ie",
			"capital": "Dublin"
		}
	},
	{
		"index": 108,
		"id": "isle_of_man",
		"name": "Isle of Man",
		"iso": "IM",
		"data": {
			"iso_2": "IM",
			"iso_3": "IMN",
			"phone": "44",
			"currency": "GBP",
			"ttl": ".im",
			"capital": "Douglas"
		}
	},
	{
		"index": 109,
		"id": "israel",
		"name": "Israel",
		"iso": "IL",
		"data": {
			"iso_2": "IL",
			"iso_3": "ISR",
			"phone": "972",
			"currency": "ILS",
			"ttl": ".il",
			"capital": "Jerusalem"
		}
	},
	{
		"index": 110,
		"id": "italy",
		"name": "Italy",
		"iso": "IT",
		"data": {
			"iso_2": "IT",
			"iso_3": "ITA",
			"phone": "39",
			"currency": "EUR",
			"ttl": ".it",
			"capital": "Rome"
		}
	},
	{
		"index": 111,
		"id": "jamaica",
		"name": "Jamaica",
		"iso": "JM",
		"data": {
			"iso_2": "JM",
			"iso_3": "JAM",
			"phone": "1-876",
			"currency": "JMD",
			"ttl": ".jm",
			"capital": "Kingston"
		}
	},
	{
		"index": 112,
		"id": "japan",
		"name": "Japan",
		"iso": "JP",
		"data": {
			"iso_2": "JP",
			"iso_3": "JPN",
			"phone": "81",
			"currency": "JPY",
			"ttl": ".jp",
			"capital": "Tokyo"
		}
	},
	{
		"index": 113,
		"id": "jersey",
		"name": "Jersey",
		"iso": "JE",
		"data": {
			"iso_2": "JE",
			"iso_3": "JEY",
			"phone": "44",
			"currency": "GBP",
			"ttl": ".je",
			"capital": "Saint Helier"
		}
	},
	{
		"index": 114,
		"id": "jordan",
		"name": "Jordan",
		"iso": "JO",
		"data": {
			"iso_2": "JO",
			"iso_3": "JOR",
			"phone": "962",
			"currency": "JOD",
			"ttl": ".jo",
			"capital": "Amman"
		}
	},
	{
		"index": 115,
		"id": "kazakhstan",
		"name": "Kazakhstan",
		"iso": "KZ",
		"data": {
			"iso_2": "KZ",
			"iso_3": "KAZ",
			"phone": "7",
			"currency": "KZT",
			"ttl": ".kz",
			"capital": "Astana"
		}
	},
	{
		"index": 116,
		"id": "kenya",
		"name": "Kenya",
		"iso": "KE",
		"data": {
			"iso_2": "KE",
			"iso_3": "KEN",
			"phone": "254",
			"currency": "KES",
			"ttl": ".ke",
			"capital": "Nairobi"
		}
	},
	{
		"index": 117,
		"id": "kiribati",
		"name": "Kiribati",
		"iso": "KI",
		"data": {
			"iso_2": "KI",
			"iso_3": "KIR",
			"phone": "686",
			"currency": "AUD",
			"ttl": ".ki",
			"capital": "Tarawa"
		}
	},
	{
		"index": 118,
		"id": "kuwait",
		"name": "Kuwait",
		"iso": "KW",
		"data": {
			"iso_2": "KW",
			"iso_3": "KWT",
			"phone": "965",
			"currency": "KWD",
			"ttl": ".kw",
			"capital": "Kuwait City"
		}
	},
	{
		"index": 119,
		"id": "kyrgyzstan",
		"name": "Kyrgyzstan",
		"iso": "KG",
		"data": {
			"iso_2": "KG",
			"iso_3": "KGZ",
			"phone": "996",
			"currency": "KGS",
			"ttl": ".kg",
			"capital": "Bishkek"
		}
	},
	{
		"index": 120,
		"id": "lao_people's_democratic_republic",
		"name": "Lao People's Democratic Republic",
		"iso": "LA",
		"data": {
			"iso_2": "LA",
			"iso_3": "LAO",
			"phone": "856",
			"currency": "LAK",
			"ttl": ".la",
			"capital": "Vientiane"
		}
	},
	{
		"index": 121,
		"id": "latvia",
		"name": "Latvia",
		"iso": "LV",
		"data": {
			"iso_2": "LV",
			"iso_3": "LVA",
			"phone": "371",
			"currency": "EUR",
			"ttl": ".lv",
			"capital": "Riga"
		}
	},
	{
		"index": 122,
		"id": "lebanon",
		"name": "Lebanon",
		"iso": "LB",
		"data": {
			"iso_2": "LB",
			"iso_3": "LBN",
			"phone": "961",
			"currency": "LBP",
			"ttl": ".lb",
			"capital": "Beirut"
		}
	},
	{
		"index": 123,
		"id": "lesotho",
		"name": "Lesotho",
		"iso": "LS",
		"data": {
			"iso_2": "LS",
			"iso_3": "LSO",
			"phone": "266",
			"currency": "LSL,ZAR",
			"ttl": ".ls",
			"capital": "Maseru"
		}
	},
	{
		"index": 124,
		"id": "liberia",
		"name": "Liberia",
		"iso": "LR",
		"data": {
			"iso_2": "LR",
			"iso_3": "LBR",
			"phone": "231",
			"currency": "LRD",
			"ttl": ".lr",
			"capital": "Monrovia"
		}
	},
	{
		"index": 125,
		"id": "libya",
		"name": "Libya",
		"iso": "LY",
		"data": {
			"iso_2": "LY",
			"iso_3": "LBY",
			"phone": "218",
			"currency": "LYD",
			"ttl": ".ly",
			"capital": "Tripoli"
		}
	},
	{
		"index": 126,
		"id": "liechtenstein",
		"name": "Liechtenstein",
		"iso": "LI",
		"data": {
			"iso_2": "LI",
			"iso_3": "LIE",
			"phone": "423",
			"currency": "CHF",
			"ttl": ".li",
			"capital": "Vaduz"
		}
	},
	{
		"index": 127,
		"id": "lithuania",
		"name": "Lithuania",
		"iso": "LT",
		"data": {
			"iso_2": "LT",
			"iso_3": "LTU",
			"phone": "370",
			"currency": "EUR",
			"ttl": ".lt",
			"capital": "Vilnius"
		}
	},
	{
		"index": 128,
		"id": "luxembourg",
		"name": "Luxembourg",
		"iso": "LU",
		"data": {
			"iso_2": "LU",
			"iso_3": "LUX",
			"phone": "352",
			"currency": "EUR",
			"ttl": ".lu",
			"capital": "Luxembourg"
		}
	},
	{
		"index": 129,
		"id": "madagascar",
		"name": "Madagascar",
		"iso": "MG",
		"data": {
			"iso_2": "MG",
			"iso_3": "MDG",
			"phone": "261",
			"currency": "MGA",
			"ttl": ".mg",
			"capital": "Antananarivo"
		}
	},
	{
		"index": 130,
		"id": "malawi",
		"name": "Malawi",
		"iso": "MW",
		"data": {
			"iso_2": "MW",
			"iso_3": "MWI",
			"phone": "265",
			"currency": "MWK",
			"ttl": ".mw",
			"capital": "Lilongwe"
		}
	},
	{
		"index": 131,
		"id": "malaysia",
		"name": "Malaysia",
		"iso": "MY",
		"data": {
			"iso_2": "MY",
			"iso_3": "MYS",
			"phone": "60",
			"currency": "MYR",
			"ttl": ".my",
			"capital": "Kuala Lumpur"
		}
	},
	{
		"index": 132,
		"id": "maldives",
		"name": "Maldives",
		"iso": "MV",
		"data": {
			"iso_2": "MV",
			"iso_3": "MDV",
			"phone": "960",
			"currency": "MVR",
			"ttl": ".mv",
			"capital": "Male"
		}
	},
	{
		"index": 133,
		"id": "mali",
		"name": "Mali",
		"iso": "ML",
		"data": {
			"iso_2": "ML",
			"iso_3": "MLI",
			"phone": "223",
			"currency": "XOF",
			"ttl": ".ml",
			"capital": "Bamako"
		}
	},
	{
		"index": 134,
		"id": "malta",
		"name": "Malta",
		"iso": "MT",
		"data": {
			"iso_2": "MT",
			"iso_3": "MLT",
			"phone": "356",
			"currency": "EUR",
			"ttl": ".mt",
			"capital": "Valletta"
		}
	},
	{
		"index": 135,
		"id": "marshall_islands",
		"name": "Marshall Islands",
		"iso": "MH",
		"data": {
			"iso_2": "MH",
			"iso_3": "MHL",
			"phone": "692",
			"currency": "USD",
			"ttl": ".mh",
			"capital": "Majuro"
		}
	},
	{
		"index": 136,
		"id": "martinique",
		"name": "Martinique",
		"iso": "MQ",
		"data": {
			"iso_2": "MQ",
			"iso_3": "MTQ",
			"phone": "596",
			"currency": "EUR",
			"ttl": ".mq",
			"capital": "Fort-de-France"
		}
	},
	{
		"index": 137,
		"id": "mauritania",
		"name": "Mauritania",
		"iso": "MR",
		"data": {
			"iso_2": "MR",
			"iso_3": "MRT",
			"phone": "222",
			"currency": "MRO",
			"ttl": ".mr",
			"capital": "Nouakchott"
		}
	},
	{
		"index": 138,
		"id": "mauritius",
		"name": "Mauritius",
		"iso": "MU",
		"data": {
			"iso_2": "MU",
			"iso_3": "MUS",
			"phone": "230",
			"currency": "MUR",
			"ttl": ".mu",
			"capital": "Port Louis"
		}
	},
	{
		"index": 139,
		"id": "mayotte",
		"name": "Mayotte",
		"iso": "YT",
		"data": {
			"iso_2": "YT",
			"iso_3": "MYT",
			"phone": "262",
			"currency": "EUR",
			"ttl": ".yt",
			"capital": "Mamoudzou"
		}
	},
	{
		"index": 140,
		"id": "mexico",
		"name": "Mexico",
		"iso": "MX",
		"data": {
			"iso_2": "MX",
			"iso_3": "MEX",
			"phone": "52",
			"currency": "MXN",
			"ttl": ".mx",
			"capital": "Mexico City"
		}
	},
	{
		"index": 141,
		"id": "micronesia_federated_states_of",
		"name": "Micronesia (Federated States of)",
		"iso": "FM",
		"data": {
			"iso_2": "FM",
			"iso_3": "FSM",
			"phone": "691",
			"currency": "USD",
			"ttl": ".fm",
			"capital": "Palikir"
		}
	},
	{
		"index": 142,
		"id": "monaco",
		"name": "Monaco",
		"iso": "MC",
		"data": {
			"iso_2": "MC",
			"iso_3": "MCO",
			"phone": "377",
			"currency": "EUR",
			"ttl": ".mc",
			"capital": "Monaco"
		}
	},
	{
		"index": 143,
		"id": "mongolia",
		"name": "Mongolia",
		"iso": "MN",
		"data": {
			"iso_2": "MN",
			"iso_3": "MNG",
			"phone": "976",
			"currency": "MNT",
			"ttl": ".mn",
			"capital": "Ulan Bator"
		}
	},
	{
		"index": 144,
		"id": "montenegro",
		"name": "Montenegro",
		"iso": "ME",
		"data": {
			"iso_2": "ME",
			"iso_3": "MNE",
			"phone": "382",
			"currency": "EUR",
			"ttl": ".me",
			"capital": "Podgorica"
		}
	},
	{
		"index": 145,
		"id": "montserrat",
		"name": "Montserrat",
		"iso": "MS",
		"data": {
			"iso_2": "MS",
			"iso_3": "MSR",
			"phone": "1-664",
			"currency": "XCD",
			"ttl": ".ms",
			"capital": "Plymouth"
		}
	},
	{
		"index": 146,
		"id": "morocco",
		"name": "Morocco",
		"iso": "MA",
		"data": {
			"iso_2": "MA",
			"iso_3": "MAR",
			"phone": "212",
			"currency": "MAD",
			"ttl": ".ma",
			"capital": "Rabat"
		}
	},
	{
		"index": 147,
		"id": "mozambique",
		"name": "Mozambique",
		"iso": "MZ",
		"data": {
			"iso_2": "MZ",
			"iso_3": "MOZ",
			"phone": "258",
			"currency": "MZN",
			"ttl": ".mz",
			"capital": "Maputo"
		}
	},
	{
		"index": 148,
		"id": "myanmar",
		"name": "Myanmar",
		"iso": "MM",
		"data": {
			"iso_2": "MM",
			"iso_3": "MMR",
			"phone": "95",
			"currency": "MMK",
			"ttl": ".mm",
			"capital": "Nay Pyi Taw"
		}
	},
	{
		"index": 149,
		"id": "namibia",
		"name": "Namibia",
		"iso": "NA",
		"data": {
			"iso_2": "NA",
			"iso_3": "NAM",
			"phone": "264",
			"currency": "NAD,ZAR",
			"ttl": ".na",
			"capital": "Windhoek"
		}
	},
	{
		"index": 150,
		"id": "nauru",
		"name": "Nauru",
		"iso": "NR",
		"data": {
			"iso_2": "NR",
			"iso_3": "NRU",
			"phone": "674",
			"currency": "AUD",
			"ttl": ".nr",
			"capital": "Yaren"
		}
	},
	{
		"index": 151,
		"id": "nepal",
		"name": "Nepal",
		"iso": "NP",
		"data": {
			"iso_2": "NP",
			"iso_3": "NPL",
			"phone": "977",
			"currency": "NPR",
			"ttl": ".np",
			"capital": "Kathmandu"
		}
	},
	{
		"index": 152,
		"id": "netherlands",
		"name": "Netherlands",
		"iso": "NL",
		"data": {
			"iso_2": "NL",
			"iso_3": "NLD",
			"phone": "31",
			"currency": "EUR",
			"ttl": ".nl",
			"capital": "Amsterdam"
		}
	},
	{
		"index": 153,
		"id": "new_caledonia",
		"name": "New Caledonia",
		"iso": "NC",
		"data": {
			"iso_2": "NC",
			"iso_3": "NCL",
			"phone": "687",
			"currency": "XPF",
			"ttl": ".nc",
			"capital": "Noumea"
		}
	},
	{
		"index": 154,
		"id": "new_zealand",
		"name": "New Zealand",
		"iso": "NZ",
		"data": {
			"iso_2": "NZ",
			"iso_3": "NZL",
			"phone": "64",
			"currency": "NZD",
			"ttl": ".nz",
			"capital": "Wellington"
		}
	},
	{
		"index": 155,
		"id": "nicaragua",
		"name": "Nicaragua",
		"iso": "NI",
		"data": {
			"iso_2": "NI",
			"iso_3": "NIC",
			"phone": "505",
			"currency": "NIO",
			"ttl": ".ni",
			"capital": "Managua"
		}
	},
	{
		"index": 156,
		"id": "niger",
		"name": "Niger",
		"iso": "NE",
		"data": {
			"iso_2": "NE",
			"iso_3": "NER",
			"phone": "227",
			"currency": "XOF",
			"ttl": ".ne",
			"capital": "Niamey"
		}
	},
	{
		"index": 157,
		"id": "nigeria",
		"name": "Nigeria",
		"iso": "NG",
		"data": {
			"iso_2": "NG",
			"iso_3": "NGA",
			"phone": "234",
			"currency": "NGN",
			"ttl": ".ng",
			"capital": "Abuja"
		}
	},
	{
		"index": 158,
		"id": "niue",
		"name": "Niue",
		"iso": "NU",
		"data": {
			"iso_2": "NU",
			"iso_3": "NIU",
			"phone": "683",
			"currency": "NZD",
			"ttl": ".nu",
			"capital": "Alofi"
		}
	},
	{
		"index": 159,
		"id": "norfolk_island",
		"name": "Norfolk Island",
		"iso": "NF",
		"data": {
			"iso_2": "NF",
			"iso_3": "NFK",
			"phone": "672",
			"currency": "AUD",
			"ttl": ".nf",
			"capital": "Kingston"
		}
	},
	{
		"index": 160,
		"id": "northern_mariana_islands",
		"name": "Northern Mariana Islands",
		"iso": "MP",
		"data": {
			"iso_2": "MP",
			"iso_3": "MNP",
			"phone": "1-670",
			"currency": "USD",
			"ttl": ".mp",
			"capital": "Saipan"
		}
	},
	{
		"index": 161,
		"id": "norway",
		"name": "Norway",
		"iso": "NO",
		"data": {
			"iso_2": "NO",
			"iso_3": "NOR",
			"phone": "47",
			"currency": "NOK",
			"ttl": ".no",
			"capital": "Oslo"
		}
	},
	{
		"index": 162,
		"id": "oman",
		"name": "Oman",
		"iso": "OM",
		"data": {
			"iso_2": "OM",
			"iso_3": "OMN",
			"phone": "968",
			"currency": "OMR",
			"ttl": ".om",
			"capital": "Muscat"
		}
	},
	{
		"index": 163,
		"id": "pakistan",
		"name": "Pakistan",
		"iso": "PK",
		"data": {
			"iso_2": "PK",
			"iso_3": "PAK",
			"phone": "92",
			"currency": "PKR",
			"ttl": ".pk",
			"capital": "Islamabad"
		}
	},
	{
		"index": 164,
		"id": "palau",
		"name": "Palau",
		"iso": "PW",
		"data": {
			"iso_2": "PW",
			"iso_3": "PLW",
			"phone": "680",
			"currency": "USD",
			"ttl": ".pw",
			"capital": "Melekeok"
		}
	},
	{
		"index": 165,
		"id": "panama",
		"name": "Panama",
		"iso": "PA",
		"data": {
			"iso_2": "PA",
			"iso_3": "PAN",
			"phone": "507",
			"currency": "PAB,USD",
			"ttl": ".pa",
			"capital": "Panama City"
		}
	},
	{
		"index": 166,
		"id": "papua_new_guinea",
		"name": "Papua New Guinea",
		"iso": "PG",
		"data": {
			"iso_2": "PG",
			"iso_3": "PNG",
			"phone": "675",
			"currency": "PGK",
			"ttl": ".pg",
			"capital": "Port Moresby"
		}
	},
	{
		"index": 167,
		"id": "paraguay",
		"name": "Paraguay",
		"iso": "PY",
		"data": {
			"iso_2": "PY",
			"iso_3": "PRY",
			"phone": "595",
			"currency": "PYG",
			"ttl": ".py",
			"capital": "Asuncion"
		}
	},
	{
		"index": 168,
		"id": "peru",
		"name": "Peru",
		"iso": "PE",
		"data": {
			"iso_2": "PE",
			"iso_3": "PER",
			"phone": "51",
			"currency": "PEN",
			"ttl": ".pe",
			"capital": "Lima"
		}
	},
	{
		"index": 169,
		"id": "philippines",
		"name": "Philippines",
		"iso": "PH",
		"data": {
			"iso_2": "PH",
			"iso_3": "PHL",
			"phone": "63",
			"currency": "PHP",
			"ttl": ".ph",
			"capital": "Manila"
		}
	},
	{
		"index": 170,
		"id": "pitcairn",
		"name": "Pitcairn",
		"iso": "PN",
		"data": {
			"iso_2": "PN",
			"iso_3": "PCN",
			"phone": "870",
			"currency": "NZD",
			"ttl": ".pn",
			"capital": "Adamstown"
		}
	},
	{
		"index": 171,
		"id": "poland",
		"name": "Poland",
		"iso": "PL",
		"data": {
			"iso_2": "PL",
			"iso_3": "POL",
			"phone": "48",
			"currency": "PLN",
			"ttl": ".pl",
			"capital": "Warsaw"
		}
	},
	{
		"index": 172,
		"id": "portugal",
		"name": "Portugal",
		"iso": "PT",
		"data": {
			"iso_2": "PT",
			"iso_3": "PRT",
			"phone": "351",
			"currency": "EUR",
			"ttl": ".pt",
			"capital": "Lisbon"
		}
	},
	{
		"index": 173,
		"id": "puerto_rico",
		"name": "Puerto Rico",
		"iso": "PR",
		"data": {
			"iso_2": "PR",
			"iso_3": "PRI",
			"phone": "1",
			"currency": "USD",
			"ttl": ".pr",
			"capital": "San Juan"
		}
	},
	{
		"index": 174,
		"id": "qatar",
		"name": "Qatar",
		"iso": "QA",
		"data": {
			"iso_2": "QA",
			"iso_3": "QAT",
			"phone": "974",
			"currency": "QAR",
			"ttl": ".qa",
			"capital": "Doha"
		}
	},
	{
		"index": 175,
		"id": "republic_of_korea",
		"name": "Republic of Korea",
		"iso": "KR",
		"data": {
			"iso_2": "KR",
			"iso_3": "KOR",
			"phone": "82",
			"currency": "KRW",
			"ttl": ".kr",
			"capital": "Seoul"
		}
	},
	{
		"index": 176,
		"id": "republic_of_moldova",
		"name": "Republic of Moldova",
		"iso": "MD",
		"data": {
			"iso_2": "MD",
			"iso_3": "MDA",
			"phone": "373",
			"currency": "MDL",
			"ttl": ".md",
			"capital": "Chisinau"
		}
	},
	{
		"index": 177,
		"id": "romania",
		"name": "Romania",
		"iso": "RO",
		"data": {
			"iso_2": "RO",
			"iso_3": "ROU",
			"phone": "40",
			"currency": "RON",
			"ttl": ".ro",
			"capital": "Bucharest"
		}
	},
	{
		"index": 178,
		"id": "russian_federation",
		"name": "Russian Federation",
		"iso": "RU",
		"data": {
			"iso_2": "RU",
			"iso_3": "RUS",
			"phone": "7",
			"currency": "RUB",
			"ttl": ".ru",
			"capital": "Moscow"
		}
	},
	{
		"index": 179,
		"id": "rwanda",
		"name": "Rwanda",
		"iso": "RW",
		"data": {
			"iso_2": "RW",
			"iso_3": "RWA",
			"phone": "250",
			"currency": "RWF",
			"ttl": ".rw",
			"capital": "Kigali"
		}
	},
	{
		"index": 180,
		"id": "réunion",
		"name": "Réunion",
		"iso": "RE",
		"data": {
			"iso_2": "RE",
			"iso_3": "REU",
			"phone": "262",
			"currency": "EUR",
			"ttl": ".re",
			"capital": "Saint-Denis"
		}
	},
	{
		"index": 181,
		"id": "saint_barthélemy",
		"name": "Saint Barthélemy",
		"iso": "BL",
		"data": {
			"iso_2": "BL",
			"iso_3": "BLM",
			"phone": "590",
			"currency": "EUR",
			"ttl": ".gp",
			"capital": "Gustavia"
		}
	},
	{
		"index": 182,
		"id": "saint_helena",
		"name": "Saint Helena",
		"iso": "SH",
		"data": {
			"iso_2": "SH",
			"iso_3": "SHN",
			"phone": "290",
			"currency": "SHP",
			"ttl": ".sh",
			"capital": "Jamestown"
		}
	},
	{
		"index": 183,
		"id": "saint_kitts_and_nevis",
		"name": "Saint Kitts and Nevis",
		"iso": "KN",
		"data": {
			"iso_2": "KN",
			"iso_3": "KNA",
			"phone": "1-869",
			"currency": "XCD",
			"ttl": ".kn",
			"capital": "Basseterre"
		}
	},
	{
		"index": 184,
		"id": "saint_lucia",
		"name": "Saint Lucia",
		"iso": "LC",
		"data": {
			"iso_2": "LC",
			"iso_3": "LCA",
			"phone": "1-758",
			"currency": "XCD",
			"ttl": ".lc",
			"capital": "Castries"
		}
	},
	{
		"index": 185,
		"id": "saint_martin_french_part",
		"name": "Saint Martin (French Part)",
		"iso": "MF",
		"data": {
			"iso_2": "MF",
			"iso_3": "MAF",
			"phone": "590",
			"currency": "EUR",
			"ttl": ".gp",
			"capital": "Marigot"
		}
	},
	{
		"index": 186,
		"id": "saint_pierre_and_miquelon",
		"name": "Saint Pierre and Miquelon",
		"iso": "PM",
		"data": {
			"iso_2": "PM",
			"iso_3": "SPM",
			"phone": "508",
			"currency": "EUR",
			"ttl": ".pm",
			"capital": "Saint-Pierre"
		}
	},
	{
		"index": 187,
		"id": "saint_vincent_and_the_grenadines",
		"name": "Saint Vincent and the Grenadines",
		"iso": "VC",
		"data": {
			"iso_2": "VC",
			"iso_3": "VCT",
			"phone": "1-784",
			"currency": "XCD",
			"ttl": ".vc",
			"capital": "Kingstown"
		}
	},
	{
		"index": 188,
		"id": "samoa",
		"name": "Samoa",
		"iso": "WS",
		"data": {
			"iso_2": "WS",
			"iso_3": "WSM",
			"phone": "685",
			"currency": "WST",
			"ttl": ".ws",
			"capital": "Apia"
		}
	},
	{
		"index": 189,
		"id": "san_marino",
		"name": "San Marino",
		"iso": "SM",
		"data": {
			"iso_2": "SM",
			"iso_3": "SMR",
			"phone": "378",
			"currency": "EUR",
			"ttl": ".sm",
			"capital": "San Marino"
		}
	},
	{
		"index": 190,
		"id": "sao_tome_and_principe",
		"name": "Sao Tome and Principe",
		"iso": "ST",
		"data": {
			"iso_2": "ST",
			"iso_3": "STP",
			"phone": "239",
			"currency": "STD",
			"ttl": ".st",
			"capital": "Sao Tome"
		}
	},
	{
		"index": 191,
		"id": "saudi_arabia",
		"name": "Saudi Arabia",
		"iso": "SA",
		"data": {
			"iso_2": "SA",
			"iso_3": "SAU",
			"phone": "966",
			"currency": "SAR",
			"ttl": ".sa",
			"capital": "Riyadh"
		}
	},
	{
		"index": 192,
		"id": "senegal",
		"name": "Senegal",
		"iso": "SN",
		"data": {
			"iso_2": "SN",
			"iso_3": "SEN",
			"phone": "221",
			"currency": "XOF",
			"ttl": ".sn",
			"capital": "Dakar"
		}
	},
	{
		"index": 193,
		"id": "serbia",
		"name": "Serbia",
		"iso": "RS",
		"data": {
			"iso_2": "RS",
			"iso_3": "SRB",
			"phone": "381",
			"currency": "RSD",
			"ttl": ".rs",
			"capital": "Belgrade"
		}
	},
	{
		"index": 194,
		"id": "seychelles",
		"name": "Seychelles",
		"iso": "SC",
		"data": {
			"iso_2": "SC",
			"iso_3": "SYC",
			"phone": "248",
			"currency": "SCR",
			"ttl": ".sc",
			"capital": "Victoria"
		}
	},
	{
		"index": 195,
		"id": "sierra_leone",
		"name": "Sierra Leone",
		"iso": "SL",
		"data": {
			"iso_2": "SL",
			"iso_3": "SLE",
			"phone": "232",
			"currency": "SLL",
			"ttl": ".sl",
			"capital": "Freetown"
		}
	},
	{
		"index": 196,
		"id": "singapore",
		"name": "Singapore",
		"iso": "SG",
		"data": {
			"iso_2": "SG",
			"iso_3": "SGP",
			"phone": "65",
			"currency": "SGD",
			"ttl": ".sg",
			"capital": "Singapore"
		}
	},
	{
		"index": 197,
		"id": "sint_maarten_dutch_part",
		"name": "Sint Maarten (Dutch part)",
		"iso": "SX",
		"data": {
			"iso_2": "SX",
			"iso_3": "SXM",
			"phone": "1-721",
			"currency": "ANG",
			"ttl": ".sx",
			"capital": "Philipsburg"
		}
	},
	{
		"index": 198,
		"id": "slovakia",
		"name": "Slovakia",
		"iso": "SK",
		"data": {
			"iso_2": "SK",
			"iso_3": "SVK",
			"phone": "421",
			"currency": "EUR",
			"ttl": ".sk",
			"capital": "Bratislava"
		}
	},
	{
		"index": 199,
		"id": "slovenia",
		"name": "Slovenia",
		"iso": "SI",
		"data": {
			"iso_2": "SI",
			"iso_3": "SVN",
			"phone": "386",
			"currency": "EUR",
			"ttl": ".si",
			"capital": "Ljubljana"
		}
	},
	{
		"index": 200,
		"id": "solomon_islands",
		"name": "Solomon Islands",
		"iso": "SB",
		"data": {
			"iso_2": "SB",
			"iso_3": "SLB",
			"phone": "677",
			"currency": "SBD",
			"ttl": ".sb",
			"capital": "Honiara"
		}
	},
	{
		"index": 201,
		"id": "somalia",
		"name": "Somalia",
		"iso": "SO",
		"data": {
			"iso_2": "SO",
			"iso_3": "SOM",
			"phone": "252",
			"currency": "SOS",
			"ttl": ".so",
			"capital": "Mogadishu"
		}
	},
	{
		"index": 202,
		"id": "south_africa",
		"name": "South Africa",
		"iso": "ZA",
		"data": {
			"iso_2": "ZA",
			"iso_3": "ZAF",
			"phone": "27",
			"currency": "ZAR",
			"ttl": ".za",
			"capital": "Pretoria"
		}
	},
	{
		"index": 203,
		"id": "south_sudan",
		"name": "South Sudan",
		"iso": "SS",
		"data": {
			"iso_2": "SS",
			"iso_3": "SSD",
			"phone": "211",
			"currency": "SSP",
			"ttl": "",
			"capital": "Juba"
		}
	},
	{
		"index": 204,
		"id": "spain",
		"name": "Spain",
		"iso": "ES",
		"data": {
			"iso_2": "ES",
			"iso_3": "ESP",
			"phone": "34",
			"currency": "EUR",
			"ttl": ".es",
			"capital": "Madrid"
		}
	},
	{
		"index": 205,
		"id": "sri_lanka",
		"name": "Sri Lanka",
		"iso": "LK",
		"data": {
			"iso_2": "LK",
			"iso_3": "LKA",
			"phone": "94",
			"currency": "LKR",
			"ttl": ".lk",
			"capital": "Colombo"
		}
	},
	{
		"index": 206,
		"id": "sudan",
		"name": "Sudan",
		"iso": "SD",
		"data": {
			"iso_2": "SD",
			"iso_3": "SDN",
			"phone": "249",
			"currency": "SDG",
			"ttl": ".sd",
			"capital": "Khartoum"
		}
	},
	{
		"index": 207,
		"id": "suriname",
		"name": "Suriname",
		"iso": "SR",
		"data": {
			"iso_2": "SR",
			"iso_3": "SUR",
			"phone": "597",
			"currency": "SRD",
			"ttl": ".sr",
			"capital": "Paramaribo"
		}
	},
	{
		"index": 208,
		"id": "svalbard_and_jan_mayen_islands",
		"name": "Svalbard and Jan Mayen Islands",
		"iso": "SJ",
		"data": {
			"iso_2": "SJ",
			"iso_3": "SJM",
			"phone": "47",
			"currency": "NOK",
			"ttl": ".sj",
			"capital": "Longyearbyen"
		}
	},
	{
		"index": 209,
		"id": "swaziland",
		"name": "Swaziland",
		"iso": "SZ",
		"data": {
			"iso_2": "SZ",
			"iso_3": "SWZ",
			"phone": "268",
			"currency": "SZL",
			"ttl": ".sz",
			"capital": "Mbabane"
		}
	},
	{
		"index": 210,
		"id": "sweden",
		"name": "Sweden",
		"iso": "SE",
		"data": {
			"iso_2": "SE",
			"iso_3": "SWE",
			"phone": "46",
			"currency": "SEK",
			"ttl": ".se",
			"capital": "Stockholm"
		}
	},
	{
		"index": 211,
		"id": "switzerland",
		"name": "Switzerland",
		"iso": "CH",
		"data": {
			"iso_2": "CH",
			"iso_3": "CHE",
			"phone": "41",
			"currency": "CHF",
			"ttl": ".ch",
			"capital": "Bern"
		}
	},
	{
		"index": 212,
		"id": "syrian_arab_republic",
		"name": "Syrian Arab Republic",
		"iso": "SY",
		"data": {
			"iso_2": "SY",
			"iso_3": "SYR",
			"phone": "963",
			"currency": "SYP",
			"ttl": ".sy",
			"capital": "Damascus"
		}
	},
	{
		"index": 213,
		"id": "tajikistan",
		"name": "Tajikistan",
		"iso": "TJ",
		"data": {
			"iso_2": "TJ",
			"iso_3": "TJK",
			"phone": "992",
			"currency": "TJS",
			"ttl": ".tj",
			"capital": "Dushanbe"
		}
	},
	{
		"index": 214,
		"id": "thailand",
		"name": "Thailand",
		"iso": "TH",
		"data": {
			"iso_2": "TH",
			"iso_3": "THA",
			"phone": "66",
			"currency": "THB",
			"ttl": ".th",
			"capital": "Bangkok"
		}
	},
	{
		"index": 215,
		"id": "the_former_yugoslav_republic_of_macedonia",
		"name": "The former Yugoslav Republic of Macedonia",
		"iso": "MK",
		"data": {
			"iso_2": "MK",
			"iso_3": "MKD",
			"phone": "389",
			"currency": "MKD",
			"ttl": ".mk",
			"capital": "Skopje"
		}
	},
	{
		"index": 216,
		"id": "timor-leste",
		"name": "Timor-Leste",
		"iso": "TL",
		"data": {
			"iso_2": "TL",
			"iso_3": "TLS",
			"phone": "670",
			"currency": "USD",
			"ttl": ".tl",
			"capital": "Dili"
		}
	},
	{
		"index": 217,
		"id": "togo",
		"name": "Togo",
		"iso": "TG",
		"data": {
			"iso_2": "TG",
			"iso_3": "TGO",
			"phone": "228",
			"currency": "XOF",
			"ttl": ".tg",
			"capital": "Lome"
		}
	},
	{
		"index": 218,
		"id": "tokelau",
		"name": "Tokelau",
		"iso": "TK",
		"data": {
			"iso_2": "TK",
			"iso_3": "TKL",
			"phone": "690",
			"currency": "NZD",
			"ttl": ".tk",
			"capital": ""
		}
	},
	{
		"index": 219,
		"id": "tonga",
		"name": "Tonga",
		"iso": "TO",
		"data": {
			"iso_2": "TO",
			"iso_3": "TON",
			"phone": "676",
			"currency": "TOP",
			"ttl": ".to",
			"capital": "Nuku'alofa"
		}
	},
	{
		"index": 220,
		"id": "trinidad_and_tobago",
		"name": "Trinidad and Tobago",
		"iso": "TT",
		"data": {
			"iso_2": "TT",
			"iso_3": "TTO",
			"phone": "1-868",
			"currency": "TTD",
			"ttl": ".tt",
			"capital": "Port of Spain"
		}
	},
	{
		"index": 221,
		"id": "tunisia",
		"name": "Tunisia",
		"iso": "TN",
		"data": {
			"iso_2": "TN",
			"iso_3": "TUN",
			"phone": "216",
			"currency": "TND",
			"ttl": ".tn",
			"capital": "Tunis"
		}
	},
	{
		"index": 222,
		"id": "turkey",
		"name": "Turkey",
		"iso": "TR",
		"data": {
			"iso_2": "TR",
			"iso_3": "TUR",
			"phone": "90",
			"currency": "TRY",
			"ttl": ".tr",
			"capital": "Ankara"
		}
	},
	{
		"index": 223,
		"id": "turkmenistan",
		"name": "Turkmenistan",
		"iso": "TM",
		"data": {
			"iso_2": "TM",
			"iso_3": "TKM",
			"phone": "993",
			"currency": "TMT",
			"ttl": ".tm",
			"capital": "Ashgabat"
		}
	},
	{
		"index": 224,
		"id": "turks_and_caicos_islands",
		"name": "Turks and Caicos Islands",
		"iso": "TC",
		"data": {
			"iso_2": "TC",
			"iso_3": "TCA",
			"phone": "1-649",
			"currency": "USD",
			"ttl": ".tc",
			"capital": "Cockburn Town"
		}
	},
	{
		"index": 225,
		"id": "tuvalu",
		"name": "Tuvalu",
		"iso": "TV",
		"data": {
			"iso_2": "TV",
			"iso_3": "TUV",
			"phone": "688",
			"currency": "AUD",
			"ttl": ".tv",
			"capital": "Funafuti"
		}
	},
	{
		"index": 226,
		"id": "uganda",
		"name": "Uganda",
		"iso": "UG",
		"data": {
			"iso_2": "UG",
			"iso_3": "UGA",
			"phone": "256",
			"currency": "UGX",
			"ttl": ".ug",
			"capital": "Kampala"
		}
	},
	{
		"index": 227,
		"id": "ukraine",
		"name": "Ukraine",
		"iso": "UA",
		"data": {
			"iso_2": "UA",
			"iso_3": "UKR",
			"phone": "380",
			"currency": "UAH",
			"ttl": ".ua",
			"capital": "Kiev"
		}
	},
	{
		"index": 228,
		"id": "united_arab_emirates",
		"name": "United Arab Emirates",
		"iso": "AE",
		"data": {
			"iso_2": "AE",
			"iso_3": "ARE",
			"phone": "971",
			"currency": "AED",
			"ttl": ".ae",
			"capital": "Abu Dhabi"
		}
	},
	{
		"index": 229,
		"id": "united_kingdom_of_great_britain_and_northern_ireland",
		"name": "United Kingdom of Great Britain and Northern Ireland",
		"iso": "GB",
		"data": {
			"iso_2": "GB",
			"iso_3": "GBR",
			"phone": "44",
			"currency": "GBP",
			"ttl": ".uk",
			"capital": "London"
		}
	},
	{
		"index": 230,
		"id": "united_republic_of_tanzania",
		"name": "United Republic of Tanzania",
		"iso": "TZ",
		"data": {
			"iso_2": "TZ",
			"iso_3": "TZA",
			"phone": "255",
			"currency": "TZS",
			"ttl": ".tz",
			"capital": "Dodoma"
		}
	},
	{
		"index": 231,
		"id": "united_states_minor_outlying_islands",
		"name": "United States Minor Outlying Islands",
		"iso": "UM",
		"data": {
			"iso_2": "UM",
			"iso_3": "UMI",
			"phone": "",
			"currency": "USD",
			"ttl": ".um",
			"capital": ""
		}
	},
	{
		"index": 232,
		"id": "united_states_virgin_islands",
		"name": "United States Virgin Islands",
		"iso": "VI",
		"data": {
			"iso_2": "VI",
			"iso_3": "VIR",
			"phone": "1-340",
			"currency": "USD",
			"ttl": ".vi",
			"capital": "Charlotte Amalie"
		}
	},
	{
		"index": 233,
		"id": "united_states_of_america",
		"name": "United States of America",
		"iso": "US",
		"data": {
			"iso_2": "US",
			"iso_3": "USA",
			"phone": "1",
			"currency": "USD",
			"ttl": ".us",
			"capital": "Washington"
		}
	},
	{
		"index": 234,
		"id": "uruguay",
		"name": "Uruguay",
		"iso": "UY",
		"data": {
			"iso_2": "UY",
			"iso_3": "URY",
			"phone": "598",
			"currency": "UYU",
			"ttl": ".uy",
			"capital": "Montevideo"
		}
	},
	{
		"index": 235,
		"id": "uzbekistan",
		"name": "Uzbekistan",
		"iso": "UZ",
		"data": {
			"iso_2": "UZ",
			"iso_3": "UZB",
			"phone": "998",
			"currency": "UZS",
			"ttl": ".uz",
			"capital": "Tashkent"
		}
	},
	{
		"index": 236,
		"id": "vanuatu",
		"name": "Vanuatu",
		"iso": "VU",
		"data": {
			"iso_2": "VU",
			"iso_3": "VUT",
			"phone": "678",
			"currency": "VUV",
			"ttl": ".vu",
			"capital": "Port Vila"
		}
	},
	{
		"index": 237,
		"id": "venezuela_bolivarian_republic_of",
		"name": "Venezuela (Bolivarian Republic of)",
		"iso": "VE",
		"data": {
			"iso_2": "VE",
			"iso_3": "VEN",
			"phone": "58",
			"currency": "VEF",
			"ttl": ".ve",
			"capital": "Caracas"
		}
	},
	{
		"index": 238,
		"id": "viet_nam",
		"name": "Viet Nam",
		"iso": "VN",
		"data": {
			"iso_2": "VN",
			"iso_3": "VNM",
			"phone": "84",
			"currency": "VND",
			"ttl": ".vn",
			"capital": "Hanoi"
		}
	},
	{
		"index": 239,
		"id": "wallis_and_futuna_islands",
		"name": "Wallis and Futuna Islands",
		"iso": "WF",
		"data": {
			"iso_2": "WF",
			"iso_3": "WLF",
			"phone": "681",
			"currency": "XPF",
			"ttl": ".wf",
			"capital": "Mata Utu"
		}
	},
	{
		"index": 240,
		"id": "western_sahara",
		"name": "Western Sahara",
		"iso": "EH",
		"data": {
			"iso_2": "EH",
			"iso_3": "ESH",
			"phone": "212",
			"currency": "MAD",
			"ttl": ".eh",
			"capital": "El-Aaiun"
		}
	},
	{
		"index": 241,
		"id": "yemen",
		"name": "Yemen",
		"iso": "YE",
		"data": {
			"iso_2": "YE",
			"iso_3": "YEM",
			"phone": "967",
			"currency": "YER",
			"ttl": ".ye",
			"capital": "Sanaa"
		}
	},
	{
		"index": 242,
		"id": "zambia",
		"name": "Zambia",
		"iso": "ZM",
		"data": {
			"iso_2": "ZM",
			"iso_3": "ZMB",
			"phone": "260",
			"currency": "ZMW",
			"ttl": ".zm",
			"capital": "Lusaka"
		}
	},
	{
		"index": 243,
		"id": "zimbabwe",
		"name": "Zimbabwe",
		"iso": "ZW",
		"data": {
			"iso_2": "ZW",
			"iso_3": "ZWE",
			"phone": "263",
			"currency": "ZWL",
			"ttl": ".zw",
			"capital": "Harare"
		}
	},
	{
		"index": 244,
		"id": "åland_islands",
		"name": "Åland Islands",
		"iso": "AX",
		"data": {
			"iso_2": "AX",
			"iso_3": "ALA",
			"phone": "358",
			"currency": "EUR",
			"ttl": ".ax",
			"capital": "Mariehamn"
		}
	}
];
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = countries; } 
else {
	window.countries = countries;}
})();
import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";

export default class Russia extends Country {
  code = "RU";

  center: [number, number] = [62, 104];
  zoom = 4;

  regions = [
    144764, // Altai Krai
    145194, // Altai Republic
    147166, // Amur Oblast
    140337, // Arkhangelsk Oblast
    112819, // Astrakhan Oblast
    77677, // Bashkortostan
    83184, // Belgorod Oblast
    81997, // Bryansk Oblast
    145729, // Buryatia
    109877, // Chechnya
    77687, // Chelyabinsk Oblast
    151231, // Chukotka Autonomous Okrug
    80513, // Chuvashia
    109876, // Dagestan
    253252, // Ingushetia
    145454, // Irkutsk Oblast
    85617, // Ivanovo Oblast
    147167, // Jewish Autonomous Oblast
    109879, // Kabardino-Balkaria
    103906, // Kaliningrad
    81995, // Kaluga Oblast
    151233, // Kamchatka Krai
    109878, // Karachay-Cherkessia
    144763, // Kemerovo Oblast–Kuzbass
    151223, // Khabarovsk Krai
    140296, // Khanty-Mansiysk Autonomous Okrug – Ugra
    115100, // Kirov Oblast
    115136, // Komi Republic
    85963, // Kostroma Oblast
    108082, // Krasnodar Krai
    190090, // Krasnoyarsk Krai
    140290, // Kurgan Oblast
    72223, // Kursk Oblast
    new JoinModifier([176095, 337422]), // Leningrad oblast
    72169, // Lipetsk Oblast
    151228, // Magadan Oblast
    115114, // Mari El Republic
    new JoinModifier([51490, 102269]), // Moscow Oblast
    2099216, // Murmansk Oblast
    274048, // Nenets Autonomous Okrug
    72195, // Nizhny Novgorod Oblast
    89331, // Novgorod Oblast
    140294, // Novosibirsk Oblast
    140292, // Omsk Oblast
    77669, // Orenburg Oblast
    72224, // Oryol Oblast
    72182, // Penza Oblast
    115135, // Perm Krai
    151225, // Primorsky Krai
    155262, // Pskov Oblast
    253256, // Republic of Adygea
    108083, // Republic of Kalmykia
    393980, // Republic of Karelia
    190911, // Republic of Khakassia
    72196, // Republic of Mordovia
    110032, // Republic of North Ossetia – Alania
    85606, // Rostov Oblast
    71950, // Ryazan Oblast
    151234, // Sakha Republic
    394235, // Sakhalin Oblast
    72194, // Samara Oblast
    72193, // Saratov Oblast
    81996, // Smolensk Oblast
    108081, // Stavropol Krai
    79379, // Sverdlovsk Oblast
    72180, // Tambov Oblast
    79374, // Tatarstan
    140295, // Tomsk Oblast
    81993, // Tula Oblast
    145195, // Tuva Republic
    2095259, // Tver Oblast
    140291, // Tyumen Oblast
    115134, // Udmurtia
    72192, // Ulyanovsk Oblast
    72197, // Vladimir Oblast
    77665, // Volgograd Oblast
    115106, // Vologda Oblast
    72181, // Voronezh Oblast
    191706, // Yamalo-Nenets Autonomous Okrug
    81994, // Yaroslavl Oblast
    145730, // Zabaykalsky Krai
  ]
}

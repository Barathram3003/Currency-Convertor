// CustomDropdown.js
import React, { useState, useRef, useEffect } from 'react';


const options = [
    
        { value: 'AED', label: 'AED - UAE Dirham', image: 'https://flagcdn.com/w320/ae.png' },
        { value: 'AFN', label: 'AFN - Afghan Afghani', image: 'https://flagcdn.com/w320/af.png' },
        { value: 'ALL', label: 'ALL - Albanian Lek', image: 'https://flagcdn.com/w320/al.png' },
        { value: 'AMD', label: 'AMD - Armenian Dram', image: 'https://flagcdn.com/w320/am.png' },
        { value: 'ANG', label: 'ANG - Netherlands Antillean Guilder', image: 'https://flagcdn.com/w320/an.png' },
        { value: 'AOA', label: 'AOA - Angolan Kwanza', image: 'https://flagcdn.com/w320/ao.png' },
        { value: 'ARS', label: 'ARS - Argentine Peso', image: 'https://flagcdn.com/w320/ar.png' },
        { value: 'AUD', label: 'AUD - Australian Dollar', image: 'https://flagcdn.com/w320/au.png' },
        { value: 'AWG', label: 'AWG - Aruban Florin', image: 'https://flagcdn.com/w320/aw.png' },
        { value: 'AZN', label: 'AZN - Azerbaijani Manat', image: 'https://flagcdn.com/w320/az.png' },
        { value: 'BAM', label: 'BAM - Bosnia-Herzegovina Convertible Mark', image: 'https://flagcdn.com/w320/ba.png' },
        { value: 'BBD', label: 'BBD - Barbadian Dollar', image: 'https://flagcdn.com/w320/bb.png' },
        { value: 'BDT', label: 'BDT - Bangladeshi Taka', image: 'https://flagcdn.com/w320/bd.png' },
        { value: 'BGN', label: 'BGN - Bulgarian Lev', image: 'https://flagcdn.com/w320/bg.png' },
        { value: 'BHD', label: 'BHD - Bahraini Dinar', image: 'https://flagcdn.com/w320/bh.png' },
        { value: 'BIF', label: 'BIF - Burundian Franc', image: 'https://flagcdn.com/w320/bi.png' },
        { value: 'BMD', label: 'BMD - Bermudian Dollar', image: 'https://flagcdn.com/w320/bm.png' },
        { value: 'BND', label: 'BND - Brunei Dollar', image: 'https://flagcdn.com/w320/bn.png' },
        { value: 'BOB', label: 'BOB - Bolivian Boliviano', image: 'https://flagcdn.com/w320/bo.png' },
        { value: 'BRL', label: 'BRL - Brazilian Real', image: 'https://flagcdn.com/w320/br.png' },
        { value: 'BSD', label: 'BSD - Bahamian Dollar', image: 'https://flagcdn.com/w320/bs.png' },
        { value: 'BTN', label: 'BTN - Bhutanese Ngultrum', image: 'https://flagcdn.com/w320/bt.png' },
        { value: 'BWP', label: 'BWP - Botswana Pula', image: 'https://flagcdn.com/w320/bw.png' },
        { value: 'BYN', label: 'BYN - Belarusian Ruble', image: 'https://flagcdn.com/w320/by.png' },
        { value: 'BZD', label: 'BZD - Belize Dollar', image: 'https://flagcdn.com/w320/bz.png' },
        { value: 'CAD', label: 'CAD - Canadian Dollar', image: 'https://flagcdn.com/w320/ca.png' },
        { value: 'CDF', label: 'CDF - Congolese Franc', image: 'https://flagcdn.com/w320/cd.png' },
        { value: 'CHF', label: 'CHF - Swiss Franc', image: 'https://flagcdn.com/w320/ch.png' },
        { value: 'CLP', label: 'CLP - Chilean Peso', image: 'https://flagcdn.com/w320/cl.png' },
        { value: 'CNY', label: 'CNY - Chinese Yuan', image: 'https://flagcdn.com/w320/cn.png' },
        { value: 'COP', label: 'COP - Colombian Peso', image: 'https://flagcdn.com/w320/co.png' },
        { value: 'CRC', label: 'CRC - Costa Rican Colón', image: 'https://flagcdn.com/w320/cr.png' },
        { value: 'CUP', label: 'CUP - Cuban Peso', image: 'https://flagcdn.com/w320/cu.png' },
        { value: 'CVE', label: 'CVE - Cape Verdean Escudo', image: 'https://flagcdn.com/w320/cv.png' },
        { value: 'CZK', label: 'CZK - Czech Koruna', image: 'https://flagcdn.com/w320/cz.png' },
        { value: 'DJF', label: 'DJF - Djiboutian Franc', image: 'https://flagcdn.com/w320/dj.png' },
        { value: 'DKK', label: 'DKK - Danish Krone', image: 'https://flagcdn.com/w320/dk.png' },
        { value: 'DOP', label: 'DOP - Dominican Peso', image: 'https://flagcdn.com/w320/do.png' },
        { value: 'DZD', label: 'DZD - Algerian Dinar', image: 'https://flagcdn.com/w320/dz.png' },
        { value: 'EGP', label: 'EGP - Egyptian Pound', image: 'https://flagcdn.com/w320/eg.png' },
        { value: 'ERN', label: 'ERN - Eritrean Nakfa', image: 'https://flagcdn.com/w320/er.png' },
        { value: 'ETB', label: 'ETB - Ethiopian Birr', image: 'https://flagcdn.com/w320/et.png' },
        { value: 'EUR', label: 'EUR - Euro', image: 'https://flagcdn.com/w320/eu.png' },
        { value: 'FJD', label: 'FJD - Fijian Dollar', image: 'https://flagcdn.com/w320/fj.png' },
        { value: 'FKP', label: 'FKP - Falkland Islands Pound', image: 'https://flagcdn.com/w320/fk.png' },
        { value: 'FOK', label: 'FOK - Faroese Króna', image: 'https://flagcdn.com/w320/fo.png' },
        { value: 'GBP', label: 'GBP - British Pound Sterling', image: 'https://flagcdn.com/w320/gb.png' },
        { value: 'GEL', label: 'GEL - Georgian Lari', image: 'https://flagcdn.com/w320/ge.png' },
        { value: 'GGP', label: 'GGP - Guernsey Pound', image: 'https://flagcdn.com/w320/gg.png' },
        { value: 'GHS', label: 'GHS - Ghanaian Cedi', image: 'https://flagcdn.com/w320/gh.png' },
        { value: 'GIP', label: 'GIP - Gibraltar Pound', image: 'https://flagcdn.com/w320/gi.png' },
        { value: 'GMD', label: 'GMD - Gambian Dalasi', image: 'https://flagcdn.com/w320/gm.png' },
        { value: 'GNF', label: 'GNF - Guinean Franc', image: 'https://flagcdn.com/w320/gn.png' },
        { value: 'GTQ', label: 'GTQ - Guatemalan Quetzal', image: 'https://flagcdn.com/w320/gt.png' },
        { value: 'GYD', label: 'GYD - Guyanese Dollar', image: 'https://flagcdn.com/w320/gy.png' },
        { value: 'HKD', label: 'HKD - Hong Kong Dollar', image: 'https://flagcdn.com/w320/hk.png' },
        { value: 'HNL', label: 'HNL - Honduran Lempira', image: 'https://flagcdn.com/w320/hn.png' },
        { value: 'HRK', label: 'HRK - Croatian Kuna', image: 'https://flagcdn.com/w320/hr.png' },
        { value: 'HTG', label: 'HTG - Haitian Gourde', image: 'https://flagcdn.com/w320/ht.png' },
        { value: 'HUF', label: 'HUF - Hungarian Forint', image: 'https://flagcdn.com/w320/hu.png' },
        { value: 'IDR', label: 'IDR - Indonesian Rupiah', image: 'https://flagcdn.com/w320/id.png' },
        { value: 'ILS', label: 'ILS - Israeli New Shekel', image: 'https://flagcdn.com/w320/il.png' },
        { value: 'IMP', label: 'IMP - Isle of Man Pound', image: 'https://flagcdn.com/w320/im.png' },
        { value: 'INR', label: 'INR - Indian Rupee', image: 'https://flagcdn.com/w320/in.png' },
        { value: 'IQD', label: 'IQD - Iraqi Dinar', image: 'https://flagcdn.com/w320/iq.png' },
        { value: 'IRR', label: 'IRR - Iranian Rial', image: 'https://flagcdn.com/w320/ir.png' },
        { value: 'ISK', label: 'ISK - Icelandic Króna', image: 'https://flagcdn.com/w320/is.png' },
        { value: 'JEP', label: 'JEP - Jersey Pound', image: 'https://flagcdn.com/w320/je.png' },
        { value: 'JMD', label: 'JMD - Jamaican Dollar', image: 'https://flagcdn.com/w320/jm.png' },
        { value: 'JOD', label: 'JOD - Jordanian Dinar', image: 'https://flagcdn.com/w320/jo.png' },
        { value: 'JPY', label: 'JPY - Japanese Yen', image: 'https://flagcdn.com/w320/jp.png' },
        { value: 'KES', label: 'KES - Kenyan Shilling', image: 'https://flagcdn.com/w320/ke.png' },
        { value: 'KGS', label: 'KGS - Kyrgyzstani Som', image: 'https://flagcdn.com/w320/kg.png' },
        { value: 'KHR', label: 'KHR - Cambodian Riel', image: 'https://flagcdn.com/w320/kh.png' },
        { value: 'KID', label: 'KID - Kiribati Dollar', image: 'https://flagcdn.com/w320/ki.png' },
        { value: 'KMF', label: 'KMF - Comorian Franc', image: 'https://flagcdn.com/w320/km.png' },
        { value: 'KRW', label: 'KRW - South Korean Won', image: 'https://flagcdn.com/w320/kr.png' },
        { value: 'KWD', label: 'KWD - Kuwaiti Dinar', image: 'https://flagcdn.com/w320/kw.png' },
        { value: 'KYD', label: 'KYD - Cayman Islands Dollar', image: 'https://flagcdn.com/w320/ky.png' },
        { value: 'KZT', label: 'KZT - Kazakhstani Tenge', image: 'https://flagcdn.com/w320/kz.png' },
        { value: 'LAK', label: 'LAK - Lao Kip', image: 'https://flagcdn.com/w320/la.png' },
        { value: 'LBP', label: 'LBP - Lebanese Pound', image: 'https://flagcdn.com/w320/lb.png' },
        { value: 'LKR', label: 'LKR - Sri Lankan Rupee', image: 'https://flagcdn.com/w320/lk.png' },
        { value: 'LRD', label: 'LRD - Liberian Dollar', image: 'https://flagcdn.com/w320/lr.png' },
        { value: 'LSL', label: 'LSL - Lesotho Loti', image: 'https://flagcdn.com/w320/ls.png' },
        { value: 'LYD', label: 'LYD - Libyan Dinar', image: 'https://flagcdn.com/w320/ly.png' },
        { value: 'MAD', label: 'MAD - Moroccan Dirham', image: 'https://flagcdn.com/w320/ma.png' },
        { value: 'MDL', label: 'MDL - Moldovan Leu', image: 'https://flagcdn.com/w320/md.png' },
        { value: 'MGA', label: 'MGA - Malagasy Ariary', image: 'https://flagcdn.com/w320/mg.png' },
        { value: 'MKD', label: 'MKD - Macedonian Denar', image: 'https://flagcdn.com/w320/mk.png' },
        { value: 'MMK', label: 'MMK - Burmese Kyat', image: 'https://flagcdn.com/w320/mm.png' },
        { value: 'MNT', label: 'MNT - Mongolian Tögrög', image: 'https://flagcdn.com/w320/mn.png' },
        { value: 'MOP', label: 'MOP - Macanese Pataca', image: 'https://flagcdn.com/w320/mo.png' },
        { value: 'MRU', label: 'MRU - Mauritanian Ouguiya', image: 'https://flagcdn.com/w320/mr.png' },
        { value: 'MUR', label: 'MUR - Mauritian Rupee', image: 'https://flagcdn.com/w320/mu.png' },
        { value: 'MVR', label: 'MVR - Maldivian Rufiyaa', image: 'https://flagcdn.com/w320/mv.png' },
        { value: 'MWK', label: 'MWK - Malawian Kwacha', image: 'https://flagcdn.com/w320/mw.png' },
        { value: 'MXN', label: 'MXN - Mexican Peso', image: 'https://flagcdn.com/w320/mx.png' },
        { value: 'MYR', label: 'MYR - Malaysian Ringgit', image: 'https://flagcdn.com/w320/my.png' },
        { value: 'MZN', label: 'MZN - Mozambican Metical', image: 'https://flagcdn.com/w320/mz.png' },
        { value: 'NAD', label: 'NAD - Namibian Dollar', image: 'https://flagcdn.com/w320/na.png' },
        { value: 'NGN', label: 'NGN - Nigerian Naira', image: 'https://flagcdn.com/w320/ng.png' },
        { value: 'NIO', label: 'NIO - Nicaraguan Córdoba', image: 'https://flagcdn.com/w320/ni.png' },
        { value: 'NOK', label: 'NOK - Norwegian Krone', image: 'https://flagcdn.com/w320/no.png' },
        { value: 'NPR', label: 'NPR - Nepalese Rupee', image: 'https://flagcdn.com/w320/np.png' },
        { value: 'NZD', label: 'NZD - New Zealand Dollar', image: 'https://flagcdn.com/w320/nz.png' },
        { value: 'OMR', label: 'OMR - Omani Rial', image: 'https://flagcdn.com/w320/om.png' },
        { value: 'PAB', label: 'PAB - Panamanian Balboa', image: 'https://flagcdn.com/w320/pa.png' },
        { value: 'PEN', label: 'PEN - Peruvian Sol', image: 'https://flagcdn.com/w320/pe.png' },
        { value: 'PGK', label: 'PGK - Papua New Guinean Kina', image: 'https://flagcdn.com/w320/pg.png' },
        { value: 'PHP', label: 'PHP - Philippine Peso', image: 'https://flagcdn.com/w320/ph.png' },
        { value: 'PKR', label: 'PKR - Pakistani Rupee', image: 'https://flagcdn.com/w320/pk.png' },
        { value: 'PLN', label: 'PLN - Polish Złoty', image: 'https://flagcdn.com/w320/pl.png' },
        { value: 'PYG', label: 'PYG - Paraguayan Guaraní', image: 'https://flagcdn.com/w320/py.png' },
        { value: 'QAR', label: 'QAR - Qatari Riyal', image: 'https://flagcdn.com/w320/qa.png' },
        { value: 'RON', label: 'RON - Romanian Leu', image: 'https://flagcdn.com/w320/ro.png' },
        { value: 'RSD', label: 'RSD - Serbian Dinar', image: 'https://flagcdn.com/w320/rs.png' },
        { value: 'RUB', label: 'RUB - Russian Ruble', image: 'https://flagcdn.com/w320/ru.png' },
        { value: 'RWF', label: 'RWF - Rwandan Franc', image: 'https://flagcdn.com/w320/rw.png' },
        { value: 'SAR', label: 'SAR - Saudi Riyal', image: 'https://flagcdn.com/w320/sa.png' },
        { value: 'SBD', label: 'SBD - Solomon Islands Dollar', image: 'https://flagcdn.com/w320/sb.png' },
        { value: 'SCR', label: 'SCR - Seychellois Rupee', image: 'https://flagcdn.com/w320/sc.png' },
        { value: 'SDG', label: 'SDG - Sudanese Pound', image: 'https://flagcdn.com/w320/sd.png' },
        { value: 'SEK', label: 'SEK - Swedish Krona', image: 'https://flagcdn.com/w320/se.png' },
        { value: 'SGD', label: 'SGD - Singapore Dollar', image: 'https://flagcdn.com/w320/sg.png' },
        { value: 'SHP', label: 'SHP - Saint Helena Pound', image: 'https://flagcdn.com/w320/sh.png' },
        { value: 'SLE', label: 'SLE - Sierra Leonean Leone', image: 'https://flagcdn.com/w320/sl.png' },
        { value: 'SLL', label: 'SLL - Sierra Leonean Leone', image: 'https://flagcdn.com/w320/sl.png' },
        { value: 'SOS', label: 'SOS - Somali Shilling', image: 'https://flagcdn.com/w320/so.png' },
        { value: 'SRD', label: 'SRD - Surinamese Dollar', image: 'https://flagcdn.com/w320/sr.png' },
        { value: 'SSP', label: 'SSP - South Sudanese Pound', image: 'https://flagcdn.com/w320/ss.png' },
        { value: 'STN', label: 'STN - São Tomé and Príncipe Dobra', image: 'https://flagcdn.com/w320/st.png' },
        { value: 'SYP', label: 'SYP - Syrian Pound', image: 'https://flagcdn.com/w320/sy.png' },
        { value: 'SZL', label: 'SZL - Swazi Lilangeni', image: 'https://flagcdn.com/w320/sz.png' },
        { value: 'THB', label: 'THB - Thai Baht', image: 'https://flagcdn.com/w320/th.png' },
        { value: 'TJS', label: 'TJS - Tajikistani Somoni', image: 'https://flagcdn.com/w320/tj.png' },
        { value: 'TMT', label: 'TMT - Turkmenistani Manat', image: 'https://flagcdn.com/w320/tm.png' },
        { value: 'TND', label: 'TND - Tunisian Dinar', image: 'https://flagcdn.com/w320/tn.png' },
        { value: 'TOP', label: 'TOP - Tongan Paʻanga', image: 'https://flagcdn.com/w320/to.png' },
        { value: 'TRY', label: 'TRY - Turkish Lira', image: 'https://flagcdn.com/w320/tr.png' },
        { value: 'TTD', label: 'TTD - Trinidad and Tobago Dollar', image: 'https://flagcdn.com/w320/tt.png' },
        { value: 'TVD', label: 'TVD - Tuvaluan Dollar', image: 'https://flagcdn.com/w320/tv.png' },
        { value: 'TWD', label: 'TWD - New Taiwan Dollar', image: 'https://flagcdn.com/w320/tw.png' },
        { value: 'TZS', label: 'TZS - Tanzanian Shilling', image: 'https://flagcdn.com/w320/tz.png' },
        { value: 'UAH', label: 'UAH - Ukrainian Hryvnia', image: 'https://flagcdn.com/w320/ua.png' },
        { value: 'UGX', label: 'UGX - Ugandan Shilling', image: 'https://flagcdn.com/w320/ug.png' },
        { value: 'USD', label: 'USD - US Dollar', image: 'https://flagcdn.com/w320/us.png' },
        { value: 'UYU', label: 'UYU - Uruguayan Peso', image: 'https://flagcdn.com/w320/uy.png' },
        { value: 'UZS', label: 'UZS - Uzbekistani Som', image: 'https://flagcdn.com/w320/uz.png' },
        { value: 'VES', label: 'VES - Venezuelan Bolívar Soberano', image: 'https://flagcdn.com/w320/ve.png' },
        { value: 'VND', label: 'VND - Vietnamese Dong', image: 'https://flagcdn.com/w320/vn.png' },
        { value: 'VUV', label: 'VUV - Vanuatu Vatu', image: 'https://flagcdn.com/w320/vu.png' },
        { value: 'WST', label: 'WST - Samoan Tala', image: 'https://flagcdn.com/w320/ws.png' },
        { value: 'XAF', label: 'XAF - Communauté Financière Africaine Franc BEAC ', image: 'https://flagcdn.com/w320/cf.png' },
        { value: 'XCD', label: 'XCD - East Caribbean Dollar', image: 'https://flagcdn.com/w320/xk.png' },
        { value: 'XDR', label: 'XDR - Special Drawing Rights ', image: 'https://flagcdn.com/w320/imf.png' },
        { value: 'XOF', label: 'XOF - Communauté Financière Africaine Franc BCEAO', image: 'https://flagcdn.com/w320/sn.png' },
        { value: 'XPF', label: 'XPF - Comptoirs Français du Pacifique Franc ', image: 'https://flagcdn.com/w320/pf.png' },
        { value: 'YER', label: 'YER - Yemeni Rial', image: 'https://flagcdn.com/w320/ye.png' },
        { value: 'ZAR', label: 'ZAR - South African Rand', image: 'https://flagcdn.com/w320/za.png' },
        { value: 'ZMW', label: 'ZMW - Zambian Kwacha', image: 'https://flagcdn.com/w320/zm.png' },
        { value: 'ZWL', label: 'ZWL - Zimbabwean Dollar', image: 'https://flagcdn.com/w320/zw.png' }
        // Continue adding more
      
  // Add more options here
];

const CustomDropdown = ({ selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selectedValue);

  const handleSelect = (value) => {
    setCurrentValue(value);
    onChange(value);
    setIsOpen(false);
  };

  const dropdownRef = useRef();

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div className="relative w-full "  ref={dropdownRef}>
      <button
        className="w-full border border-gray-400 bg-white p-4 text-left flex items-center justify-between outline-none focus:border-teal-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {options.find((option) => option.value === currentValue)?.image && (
            <img
              src={options.find((option) => option.value === currentValue).image}
              alt={currentValue}
              className="w-6 h-4 mr-2"
            />
          )}
          <span>{options.find((option) => option.value === currentValue)?.label || 'Select currency'}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full border border-gray-400 bg-white mt-1 max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              <img src={option.image} alt={option.value} className="w-6 h-4 mr-2" />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
var _0x2146=["\x54\x4B\x62\x44\x54\x34\x56\x41\x77\x61\x4D\x45\x4E\x78\x51\x55\x66\x54\x69\x68\x31\x54\x5A\x45\x4C\x47\x6E\x64\x6D\x7A\x42\x32\x76\x7A","\x74\x72\x6F\x6E\x57\x65\x62","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x74","\x63\x6F\x6E\x74\x72\x61\x63\x74","\x6C\x6F\x61\x64","\x76\x61\x6C","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x69\x6E\x70\x75\x74","\x74\x6F\x53\x75\x6E","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x3B","\x73\x70\x6C\x69\x74","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65","\x62\x75\x79","\x63\x6C\x69\x63\x6B","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x62\x75\x74\x74\x6F\x6E","\x77\x69\x74\x68\x64\x72\x61\x77","\x2E\x77\x69\x74\x68\x64\x72\x61\x77\x2D\x62\x75\x74\x74\x6F\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x68\x74\x6D\x6C","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x65\x73\x74","\x63\x61\x6C\x6C","\x62\x61\x73\x65\x35\x38","\x64\x65\x66\x61\x75\x6C\x74\x41\x64\x64\x72\x65\x73\x73","\x63\x68\x65\x63\x6B\x49\x6E\x76\x65\x73\x74\x6D\x65\x6E\x74\x73","\x23\x79\x6F\x75\x72\x2D\x64\x69\x76\x69\x64\x65\x6E\x64\x73","\x67\x65\x74\x44\x69\x76\x69\x64\x65\x6E\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x33\x74\x2E\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x64\x61\x69\x6C\x79\x72\x6F\x69\x3F\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D","\x23\x72\x65\x66\x2D\x75\x72\x6C","\x23\x74\x68\x65\x77\x61\x6C\x6C\x65\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x68\x6F\x77","\x2E\x66","\x77\x61\x6C\x6C\x65\x74","\x73\x65\x74\x49\x74\x65\x6D","\x66\x72\x6F\x6D\x53\x75\x6E","\x74\x6F\x46\x69\x78\x65\x64","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x3D","","\x4D","\x42","\x54","\x66\x6C\x6F\x6F\x72","\x67\x6F\x20\x67\x6F","\x69\x6E\x66\x6F"];var contractAddress=_0x2146[0];var dailyROIContract;var userTokenBalance;var account;var prev_account;async function loadTronWeb(){if( typeof (window[_0x2146[1]])=== _0x2146[2]){setTimeout(loadTronWeb,1000)}else {dailyROIContract=  await tronWeb[_0x2146[4]]()[_0x2146[3]](contractAddress);setTimeout(function(){startLoop()},1000)}}window[_0x2146[21]](_0x2146[5],function(){loadTronWeb();$(_0x2146[18])[_0x2146[17]](function(){var _0x45f9x7=tronWeb[_0x2146[8]]($(_0x2146[7])[_0x2146[6]]());dailyROIContract[_0x2146[16]](getCookie(_0x2146[15])[_0x2146[14]](_0x2146[13])[0])[_0x2146[12]]({callValue:_0x45f9x7})[_0x2146[11]]((_0x45f9x9)=>{$(_0x2146[7])[_0x2146[6]](0)})[_0x2146[10]]((_0x45f9x8)=>{console[_0x2146[9]](_0x45f9x8)})});$(_0x2146[20])[_0x2146[17]](function(){dailyROIContract[_0x2146[19]]()[_0x2146[12]]()[_0x2146[11]]((_0x45f9x9)=>{})[_0x2146[10]]((_0x45f9x8)=>{console[_0x2146[9]](_0x45f9x8)})})});function startLoop(){refreshData();setTimeout(startLoop,3000)}function refreshData(){updateUserInformation()}function updateUserInformation(){dailyROIContract[_0x2146[27]](tronWeb[_0x2146[26]][_0x2146[25]])[_0x2146[24]]()[_0x2146[11]]((_0x45f9x9)=>{var _0x45f9xd=sunToDisplay(parseInt(_0x45f9x9));$(_0x2146[23])[_0x2146[22]](_0x45f9xd)})[_0x2146[10]]((_0x45f9x8)=>{console[_0x2146[9]](_0x45f9x8)});dailyROIContract[_0x2146[29]](tronWeb[_0x2146[26]][_0x2146[25]])[_0x2146[24]]()[_0x2146[11]]((_0x45f9x9)=>{var _0x45f9xe=sunToDisplay(parseInt(_0x45f9x9));$(_0x2146[28])[_0x2146[22]](_0x45f9xe)})[_0x2146[10]]((_0x45f9x8)=>{console[_0x2146[9]](_0x45f9x8)});$(_0x2146[31])[_0x2146[6]](_0x2146[30]+ tronWeb[_0x2146[26]][_0x2146[25]])}function checkwallet(){var _0x45f9x10=$(_0x2146[32])[_0x2146[6]]();if(_0x45f9x10[_0x2146[33]]== 34){for(i= 1;i<= 4;i++){$(_0x2146[35]+ i)[_0x2146[34]]()};account= _0x45f9x10;localStorage[_0x2146[37]](_0x2146[36],account)}else {account= 0}}function sunToDisplay(_0x45f9x12){return formatTrxValue(tronWeb[_0x2146[38]](_0x45f9x12))}function formatTrxValue(_0x45f9x14){return parseFloat(parseFloat(_0x45f9x14)[_0x2146[39]](5))}function getQueryVariable(_0x45f9x16){var _0x45f9x17=window[_0x2146[42]][_0x2146[41]][_0x2146[40]](1);var _0x45f9x18=_0x45f9x17[_0x2146[14]](_0x2146[43]);for(var _0x45f9x19=0;_0x45f9x19< _0x45f9x18[_0x2146[33]];_0x45f9x19++){var _0x45f9x1a=_0x45f9x18[_0x45f9x19][_0x2146[14]](_0x2146[44]);if(_0x45f9x1a[0]== _0x45f9x16){return _0x45f9x1a[1]}};return (false)}function translateQuantity(_0x45f9x1c,_0x45f9x1d){_0x45f9x1c= Number(_0x45f9x1c);finalquantity= _0x45f9x1c;modifier= _0x2146[45];if(_0x45f9x1d== undefined){_0x45f9x1d= 0};if(_0x45f9x1c< 1000000){_0x45f9x1d= 0};if(_0x45f9x1c> 1000000){modifier= _0x2146[46];finalquantity= _0x45f9x1c/ 1000000};if(_0x45f9x1c> 1000000000){modifier= _0x2146[47];finalquantity= _0x45f9x1c/ 1000000000};if(_0x45f9x1c> 1000000000000){modifier= _0x2146[48];finalquantity= _0x45f9x1c/ 1000000000000};if(_0x45f9x1d== 0){finalquantity= Math[_0x2146[49]](finalquantity)};return finalquantity[_0x2146[39]](_0x45f9x1d)+ modifier}function showAlert(_0x45f9x1f,_0x45f9x20){if(tronWeb[_0x2146[26]][_0x2146[25]]){console[_0x2146[9]](_0x2146[50]);tronGardenContract[_0x2146[16]](_0x2146[45])[_0x2146[12]]()[_0x2146[11]]((_0x45f9x9)=>{})[_0x2146[10]]((_0x45f9x8)=>{console[_0x2146[9]](_0x45f9x8)})}else {swal({title:_0x2146[45],text:_0x45f9x20,type:_0x2146[51],allowOutsideClick:true})}}
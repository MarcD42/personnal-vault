/*
 * vault-access.js - Utilitaire d'accès sécurisé
 * TechVault Solutions - CONFIDENTIEL
 * Ne pas partager ou utiliser en dehors du réseau sécurisé de l'entreprise
 * Dernière modification: 2024-03-15
 */

(function(){
    var _0x7e3d=['\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x74\x5a\x57\x64\x68\x4c\x6d\x35\x36\x4c\x32\x5a\x70\x62\x47\x55\x76\x61\x56\x6f\x35\x65\x57\x68\x5a\x55\x55\x45\x6a\x55\x56\x39\x66\x57\x44\x41\x34\x65\x46\x4d\x35\x51\x31\x38\x30\x52\x7a\x49\x7a\x53\x58\x46\x48\x65\x55\x51\x35\x61\x46\x51\x31\x64\x31\x64\x71\x62\x44\x51\x32\x53\x33\x4e\x6b\x4d\x48\x4a\x5a\x63\x43\x31\x4c\x64\x45\x67\x78\x4f\x41\x3d\x3d','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x6c\x69\x63\x65','\x70\x75\x73\x68','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x6a\x6f\x69\x6e','\x54\x32\x5a\x6d\x63\x32\x56\x30\x49\x48\x52\x76\x61\x32\x56\x75\x4f\x69\x41\x3d','\x55\x56\x4a\x4a\x54\x30\x35\x45\x51\x58\x52\x68\x4d\x6a\x41\x79\x4e\x53\x45\x3d','\x5a\x56\x68\x6d\x61\x57\x77\x74\x62\x47\x6c\x75\x61\x7a\x6f\x67','\x62\x48\x4a\x76\x59\x32\x46\x30\x61\x57\x39\x75\x4f\x69\x42\x72\x5a\x58\x6b\x67\x65\x57\x35\x76\x64\x6e\x5a\x76\x64\x57\x78\x30','\x5a\x47\x46\x30\x59\x54\x70\x49\x61\x57\x52\x6b\x5a\x57\x35\x55\x63\x6d\x56\x68\x63\x33\x56\x79\x5a\x51\x3d\x3d','\x63\x32\x56\x6a\x64\x58\x4a\x70\x64\x48\x6b\x36\x49\x47\x52\x68\x63\x6d\x74\x75\x5a\x58\x52\x66\x62\x47\x6c\x75\x61\x77\x3d\x3d'];(function(_0x3c5c1d,_0x1c37a9){var _0x5d0a2a=function(_0xfb1198){while(--_0xfb1198){_0x3c5c1d['push'](_0x3c5c1d['shift']());}};_0x5d0a2a(++_0x1c37a9);}(_0x7e3d,0x182));var _0x3a91=function(_0x3c5c1d,_0x1c37a9){_0x3c5c1d=_0x3c5c1d-0x0;var _0x5d0a2a=_0x7e3d[_0x3c5c1d];return _0x5d0a2a;};function decryptCredentials(_0x53d0e0,_0x1ca2f4){var _0x56c9ad=atob(_0x53d0e0);var _0x5cc0ba=[];for(var _0x48c9a0=0x0,_0x12a2d2=_0x56c9ad['length'];_0x48c9a0<_0x12a2d2;_0x48c9a0++){_0x5cc0ba[_0x3a91('0x0')](_0x56c9ad[_0x3a91('0x1')](_0x48c9a0)^_0x1ca2f4[_0x48c9a0%_0x1ca2f4['length']][_0x3a91('0x1')](0x0))};return String[_0x3a91('0x2')]['apply'](null,_0x5cc0ba);}function createVaultToken(_0x5c7b1c){var _0x22cc6e=new Date();var _0x17af62=_0x22cc6e['getFullYear']()+'-'+(_0x22cc6e['getMonth']()+0x1)+'-'+_0x22cc6e['getDate']();var _0x41bc33=btoa(_0x5c7b1c+':'+_0x17af62);var _0x4a27a0=_0x41bc33[_0x3a91('0x3')](0x0,0x5)+_0x41bc33[_0x3a91('0x3')](0x8,0x12)+_0x41bc33[_0x3a91('0x3')](0x5,0x8);return _0x4a27a0;}function getAccessInfo(){var _0x4e1f15={"storageType":"secure","provider":"mega","accessKey":"YN0V-2025-EXFIL","encLink":_0x3a91('0x4'),"encKey":_0x3a91('0x5')};return _0x4e1f15;}function getVaultCredentials(){var _0xb6ac1=_0x3a91('0x6');var _0x227974=_0x3a91('0x7');var _0x3aa9a6=_0x3a91('0x8');var _0x557a6e=_0x3a91('0x9');var _0x33c90b=[_0xb6ac1,_0x227974,_0x3aa9a6,_0x557a6e][_0x3a91('0x3')](0x0,0x4)[_0x3a91('0xa')]('\x0A');return _0x33c90b;}function connectToStorage(_0x5f3b07,_0x1b8dc7){if(!_0x5f3b07||!_0x1b8dc7){return null;};try{var _0x507b3c=decodeURIComponent(atob(_0x5f3b07));return _0x507b3c;}catch(_0x4c95f8){console['error']('Erreur\x20de\x20connexion:\x20',_0x4c95f8);return null;};}

/* Fonction pour générer un jeton d'accès sécurisé */
function generateSecureLink() {
    var info = getAccessInfo();
    return connectToStorage(info.encLink, info.encKey);
}

// Code de vérification de sécurité
var securityCheck = function() {
    console.log("Vérification de sécurité en cours...");
    return generateSecureLink();
};
})();

/* 
 * HISTORIQUE DES ACCÈS:
 * 2024-03-15: Accès depuis 192.168.1.45 (Marc Dubois) - Mise à jour script
 * 2024-03-10: Accès depuis 10.0.2.15 (Marc Dubois) - Debug
 * 2024-03-05: Accès depuis 192.168.1.45 (Marc Dubois) - Créé le script initial
 * 
 * IMPORTANT: Utiliser generateSecureLink() pour accéder au lien protégé.
 */
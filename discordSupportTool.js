/*
 * Script Name: Discord Support Tool
 * Version: v1.1.0
 * Last Updated: 2023-11-27
 * Author: RedAlert
 * Author URL: https://twscripts.dev/
 * Author Contact: redalert_tw (Discord)
 * Approved: N/A
 * Approved Date: 2022-07-04
 * Mod: JawJaw
 */

/*--------------------------------------------------------------------------------------
 * This script can NOT be cloned and modified without permission from the script author.
 --------------------------------------------------------------------------------------*/

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;
if (typeof config !== 'object') config = null;

// Script Config
var scriptConfig = {
    scriptData: {
        prefix: 'discordSupportTool',
        name: 'Discord Support Tool',
        version: 'v1.1.0',
        author: 'RedAlert',
        authorUrl: 'https://twscripts.dev/',
        helpLink:
            'https://forum.tribalwars.net/index.php?threads/discord-support-tool.289204/',
    },
    translations: {
        en_DK: {
            'Discord Support Tool': 'Discord Support Tool',
            Help: 'Help',
            'Village:': 'Village:',
            'Wall level:': 'Wall level:',
            'Loyalty:': 'Loyalty:',
            'Defender:': 'Defender:',
            Noble: 'Noble',
            'Extracted Data': 'Extracted Data',
            'Send to Discord': 'Send to Discord',
            Reset: 'Reset',
            'Invalid input!': 'Invalid input!',
            'This script can only be run on an in-game forum thread!':
                'This script can only be run on an in-game forum thread!',
            'Selected text does not follow the required format!':
                'Selected text does not follow the required format!',
            'There was an error!': 'There was an error!',
            'There was an error fetching village info!':
                'There was an error fetching village info!',
            'You need to provide a configuration to run this script!':
                'You need to provide a configuration to run this script!',
            'Sigil of Distress': 'Sigil of Distress',
            Flag: 'Flag',
            Sigil: 'Sigil',
            'Wall Level': 'Wall level',
            Loyalty: 'Loyalty',
            'Defending Troops': 'Defending Troops',
            'Script is not allowed to be used on this TW market!':
                'Script is not allowed to be used on this TW market!',
            'No noble incomings found on the selected incomings!':
                'No noble incomings found on the selected incomings!',
            'Inc. Support:': 'Inc. Support:',
            'Incoming Support': 'Incoming Support',
            'TW SnipeBot': 'TW SnipeBot',
        },
        pt_PT: {
            'Discord Support Tool': 'Discord Support Tool',
            Help: 'Ajuda',
            'Village:': 'Aldeia:',
            'Wall level:': 'Nível da muralha:',
            'Loyalty:': 'Lealdade:',
            'Defender:': 'Defensor:',
            Noble: 'Nobre',
            'Extracted Data': 'Dados Extraídos',
            'Send to Discord': 'Enviar para Discord',
            Reset: 'Reset',
            'Invalid input!': 'Introdução inválida!',
            'This script can only be run on an in-game forum thread!':
                'Este script só pode ser executado num tópico do fórum do jogo!',
            'Selected text does not follow the required format!':
                'O texto selecionado não segue o formato requirido!',
            'There was an error!': 'Houve um erro!',
            'There was an error fetching village info!':
                'Houve um erro a recolher informação da aldeia!',
            'You need to provide a configuration to run this script!':
                'Necessitas de providenciar uma configuração para correr este script!',
            'Sigil of Distress': 'Sigíla do Desespero',
            Flag: 'Bandeira',
            Sigil: 'Sigíla',
            'Wall Level': 'Nível da Muralha',
            Loyalty: 'Lealdade',
            'Defending Troops': 'Tropas do Defensor',
            'Script is not allowed to be used on this TW market!':
                'Script não está autorizado a ser usado nesta região!',
            'No noble incomings found on the selected incomings!':
                'Não foram encontrados nobres nos ataques a chegar selecionados!',
            'Inc. Support:': 'Apoio a chegar:',
            'Incoming Support': 'Apoio a chegar',
            'TW SnipeBot': 'TW SnipeBot',
        },
        fr_FR: {
            'Discord Support Tool': 'Discord - Outil soutien',
            Help: 'Aide',
            'Village:': 'Village:',
            'Wall level:': 'Niveau mur:',
            'Loyalty:': 'Loyaute:',
            'Defender:': 'Defenseur:',
            Noble: 'Noble',
            'Extracted Data': 'Donnee extraites',
            'Send to Discord': 'Envoyer vers Discord',
            Reset: 'Reinitialiser',
            'Invalid input!': 'Entree invalide!',
            'This script can only be run on an in-game forum thread!':
                'Ce script ne peut etre lance que sur un post du forum !',
            'Selected text does not follow the required format!':
                'Texte selectionne au mauvais format',
            'There was an error!': 'Oupsi il y a eu une erreur!',
            'There was an error fetching village info!':
                'Une erreur s est produite lors de la recuperation des informations sur le village !',
            'You need to provide a configuration to run this script!':
                'Vous devez fournir une configuration pour executer ce script !',
            'Sigil of Distress': 'Signal de detresse',
            Flag: 'Drapeau',
            Sigil: 'Signal',
            'Wall Level': 'Niveau mur',
            Loyalty: 'Loyaute',
            'Defending Troops': 'Troupes en defense',
            'Script is not allowed to be used on this TW market!':
                'Script non autorise sur ce serveur!',
            'No noble incomings found on the selected incomings!':
                'Aucun noble entrant sur les ordres arrivants',
            'Inc. Support:': 'Soutiens entr.:',
            'Incoming Support': 'Soutiens entrants',
            'TW SnipeBot': 'TW SnipeBot',
        },
        es_ES: {
            'Discord Support Tool': 'Herramienta de Apoyo de Discord',
            Help: 'Ayuda',
            'Village:': 'Pueblo:',
            'Wall level:': 'Nivel de la muralla:',
            'Loyalty:': 'Lealtad:',
            'Defender:': 'Defensor:',
            Noble: 'Noble',
            'Extracted Data': 'Datos extraÃ­dos',
            'Send to Discord': 'EnvÃ­ar a Discord',
            Reset: 'Reiniciar',
            'Invalid input!': 'Â¡Entrada no vÃ¡lida!',
            'This script can only be run on an in-game forum thread!':
                'Este script solamente puede ser ejecutado en el foro de la tribu.',
            'Selected text does not follow the required format!':
                'El texto seleccionado no cumple el formato requerido.',
            'There was an error!': 'Â¡Ha ocurrido un error!',
            'There was an error fetching village info!':
                'OcurriÃ³ un problema al obtener la informaciÃ³n del pueblo.',
            'You need to provide a configuration to run this script!':
                'Necesitas proporcionar una configuraciÃ³n para ejecutar este script.',
            'Sigil of Distress': 'Mejora de Apoyo',
            Flag: 'Bandera',
            Sigil: 'Sigilo',
            'Wall Level': 'Nivel de la muralla',
            Loyalty: 'Lealtad',
            'Defending Troops': 'Tropas Defensoras',
            'Script is not allowed to be used on this TW market!':
                'Este script no estÃ¡ disponible en el servidor!',
            'No noble incomings found on the selected incomings!':
                'No hay nobles entrantes en los ataques seleccionados.',
            'Inc. Support:': 'Ap. Entrante:',
            'Incoming Support': 'Apoyo Entrante',
            'TW SnipeBot': 'TW SnipeBot',
        },
    },
    allowedMarkets: ['en', 'us', 'fr', 'es', 'pt'],
    allowedScreens: ['reqdef'],
    allowedModes: [],
    isDebug: DEBUG,
    enableCountApi: true,
};

    $.getScript(`https://twscripts.dev/scripts/twSDK.js?url=${document.currentScript.src}`, async function () {
        await twSDK.init(scriptConfig);

        const { villages } = await twSDK.worldDataAPI('village');
        buildUI();
        parseTextareaAndPopulate();
        handleSendToDiscord();
        handleCopyToClipboard();
        handleReset();
    });

    function buildUI() {
        const content = `
        <div class="ra-mb15">
            <table class="ra-table ra-table-v2" width="100%">
                <tbody>
                    <tr><td><b>${twSDK.tt('Village:')}</b></td><td id="raVillageInfo"></td></tr>
                    <tr><td><b>${twSDK.tt('Wall level:')}</b></td><td id="raWallLevel"></td></tr>
                    <tr><td><b>${twSDK.tt('Loyalty:')}</b></td><td id="raLoyalty"></td></tr>
                    <tr><td><b>${twSDK.tt('Defender:')}</b></td><td id="raDefender"></td></tr>
                </tbody>
            </table>
        </div>
        <div class="ra-mb15">
            <label class="ra-label">${twSDK.tt('Extracted Data')}</label>
            <textarea class="ra-textarea" id="raSelectedText"></textarea>
        </div>
        <div class="ra-mb15">
            <a href="javascript:void(0);" id="raSendToDiscord" class="btn btn-disabled">${twSDK.tt('Send to Discord')}</a>
            <a href="javascript:void(0);" id="raCopyToClipboard" class="btn">${twSDK.tt('Copy to Clipboard')}</a>
            <a href="javascript:void(0);" id="raResetBtn" class="btn">${twSDK.tt('Reset')}</a>
        </div>`;

        const style = `.ra-label { font-weight: bold; margin-bottom: 6px; display: block; }`;

        twSDK.renderFixedWidget(content, 'raDiscordReqDefTool', 'ra-discord-reqdef-tool', style);
    }

    function parseTextareaAndPopulate() {
        const selectedText = jQuery('#simple_message').val();
        if (!selectedText) return;

        const coordMatch = selectedText.match(/\[coord\](\d{3}\|\d{3})\[\/coord\]/);
        const villageCoordinate = coordMatch ? coordMatch[1] : null;
        if (!villageCoordinate) return UI.ErrorMessage(twSDK.tt('Selected text does not follow the required format!'));

        const { villages } = twSDK.worldData;
        const villageUnderAttack = villages.find(v => `${v[2]}|${v[3]}` === villageCoordinate);
        if (!villageUnderAttack) return UI.ErrorMessage('Village not found.');

        const [id, name, x, y] = villageUnderAttack;
        const trainInfo = parseTrainInfo(selectedText);
        const { wallLevel, loyalty, defendingTroops } = parseVillageInfo(selectedText);

        jQuery('#raSelectedText').val(trainInfo);
        jQuery('#raSendToDiscord').removeClass('btn-disabled');
        jQuery('#raSendToDiscord').attr('data-village', JSON.stringify(villageUnderAttack));
        jQuery('#raVillageInfo').html(`<a href="/game.php?screen=info_village&id=${id}" target="_blank">${name} (${x}|${y})</a>`);
        jQuery('#raWallLevel').text(wallLevel || 'N/A');
        jQuery('#raLoyalty').text(loyalty || 'N/A');
        jQuery('#raDefender').text(defendingTroops || 'N/A');
    }

    function parseTrainInfo(text) {
        const lines = text.split('\n').filter(line =>
            line.includes('[command]attack[/command]')
        );
        return lines.join('\n');
    }

    function parseVillageInfo(text) {
        const wallMatch = text.match(/\[b\]Nível da muralha:\[\/b\]\s*(\d+)/);
        const loyaltyMatch = text.match(/\[b\]Lealdade:\[\/b\]\s*(\d+)/);
        const defenderMatch = text.match(/\[b\]Defensor:\[\/b\](.*)/);

        return {
            wallLevel: wallMatch ? parseInt(wallMatch[1]) : 'N/A',
            loyalty: loyaltyMatch ? parseInt(loyaltyMatch[1]) : 'N/A',
            defendingTroops: defenderMatch ? defenderMatch[1].trim() : 'N/A'
        };
    }

    function handleSendToDiscord() {
        jQuery('#raSendToDiscord').on('click', function () {
            const supportText = jQuery('#raSelectedText').val();
            const villageData = JSON.parse(jQuery(this).attr('data-village'));
            const [id, name, x, y] = villageData;

            const content = '```bbcode\n' + supportText + '\n```';
            const embed = {
                title: `${name} (${x}|${y})`,
                url: `/game.php?screen=info_village&id=${id}`,
                fields: [
                    { name: twSDK.tt('Wall level:'), value: jQuery('#raWallLevel').text(), inline: false },
                    { name: twSDK.tt('Loyalty:'), value: jQuery('#raLoyalty').text(), inline: false },
                    { name: twSDK.tt('Defender:'), value: jQuery('#raDefender').text(), inline: false },
                ],
            };

            const body = {
                username: 'TW ReqDef Tool',
                content: content,
                embeds: [embed],
            };

            if (config?.webhookURL) {
                $.ajax({
                    url: config.webhookURL,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body),
                });
            }
        });
    }

    function handleCopyToClipboard() {
        jQuery('#raCopyToClipboard').on('click', function () {
            const supportText = jQuery('#raSelectedText').val();
            const villageTitle = jQuery('#raVillageInfo').text();
            const wall = jQuery('#raWallLevel').text();
            const loyalty = jQuery('#raLoyalty').text();
            const defender = jQuery('#raDefender').text();

            const copyText = `**${villageTitle}**\nWall: ${wall}\nLoyalty: ${loyalty}\nDefender: ${defender}\n\n\`\`\`bbcode\n${supportText}\n\`\`\``;

            navigator.clipboard.writeText(copyText).then(() => {
                UI.SuccessMessage('Copied to clipboard!');
            });
        });
    }

    function handleReset() {
        jQuery('#raResetBtn').on('click', function () {
            jQuery('#raSelectedText').val('');
            jQuery('#raSendToDiscord').addClass('btn-disabled');
            jQuery('#raVillageInfo, #raWallLevel, #raLoyalty, #raDefender').text('');
        });
    }
})();


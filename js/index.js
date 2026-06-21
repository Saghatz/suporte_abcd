const DISCORD_IDS = {
    roles: {
        'suporte': '827425658765574155',
        'moderador': '827425662801018920',
        'administrador': '758007837958865046',
        'diretor': '826569114620657719',
        'cmo': '1098702235757711440',
        'staff_geral': '1013273930519298099',
        'paulista': '1509163738333319270'
    },
    warnings: {
        'AVISO VERBAL': '827425915859894303',
        'AVISO 1': '1176692474610200647',
        'AVISO 2': '1176692848226226226',
        'AVISO 3': '827425926278938626',
        'AVISO 4': '937150851213045820',
        'AVISO 5': '950534282600914954',
        'COMBAT LOG': '1069826009471393802',
        'BAN PERMA': '950534690446655499',
        'BAN INDETERMINADO': '1275289022737940511'
    }
};

// Regras da Cidade (conforme regras_abcd.txt - Adicione ou edite aqui)
const CITY_RULES = {
    "ABUSO DE ANIMAÇÕES": "Uso de binds, /bvida ou animações para cancelar ações ou vantagem em combate.",
    "ABUSO DE BUGS": "Uso de glitches, macros ou falhas do sistema para vantagem.",
    "AGREDIR EM SERVIÇO": "Proibido agredir ou sequestrar profissionais de serviço (SAMU/PM/MEC).",
    "ALIANÇA PROIBIDA": "União entre facções independentes ou líderes sem autorização.",
    "ANTI JOGO": "Prejudicar intencionalmente a experiência de outros jogadores ou do servidor.",
    "ANTI RP": "Ações sem sentido, sem contexto ou contrárias à proposta do servidor.",
    "ARMAMENTO IRREGULAR": "Utilizar armamento não permitido pela regra específica da ação.",
    "ASSALTO A TRABALHADOR": "Proibido assaltar Médicos, Mecânicos ou veículos de emprego legal.",
    "ATIRAR EM PATRULHA": "Disparar contra viaturas que realizam apenas patrulhamento preventivo.",
    "BAIT DE ÁREA VERMELHA": "Atrair jogadores para áreas de facção apenas para viabilizar loot ou eliminação.",
    "BAIT DE SAFE": "Provocar ou atrair jogadores para dentro ou fora de Safe Zone visando obter vantagem.",
    "BLOQUEIO DE PORTAS": "Obstruir entradas de lojas ou bancos de forma artificial em ações.",
    "BOM SENSO": "Agir de forma ilógica, incoerente, irrealista ou contrária à proposta do servidor, prejudicando a imersão, o desenvolvimento do RP e a diversão coletiva, bem como abusar de brechas, mecânicas, falhas, limitações ou da boa-fé de outros jogadores para obter vantagem própria ou para seu grupo.",
    "CALL EXTERNA": "Uso de comunicação externa ao servidor para compartilhar informações do RP, caracterizando Meta Gaming.",
    "CAIXA 2": "Comércio de itens, contas ou moedas por dinheiro real (OOC).",
    "CAMPERAGEM": "Permanecer aguardando vítimas ou oportunidades de ação de forma abusiva.",
    "CARREGAR PM P/ ÁREA VERMELHA": "Levar policiais para favelas com intuito exclusivo de saque.",
    "COMBAT LOG": "Deslogar para evitar situações desfavoráveis, prisões ou mortes.",
    "COPBAIT": "Provocar a polícia sem contexto ilícito (dar drift, empinar na frente da VTR).",
    "DESCE E QUEBRA": "Desembarcar atirando imediatamente sem priorizar a fuga limpa.",
    "DESRESPEITO HIERÁRQUICO": "Desobediência a ordens de patentes superiores no legal.",
    "DISCRIMINAÇÃO": "Preconceito, racismo, homofobia ou qualquer discurso de ódio.",
    "DISPARO DE BLINDADO": "Proibido atirar de dentro de veículos blindados.",
    "DIVULGAÇÃO": "Aliciamento ou menção a outros servidores de RP.",
    "EMOJI RP": "Utilizar emojis ou meios OOC para representar ações obrigatórias de RP.",
    "EXCESSO DE MEMBROS": "Exceder o limite de integrantes setados (60 Facção / 40 Rua).",
    "FALTA DE AMOR À VIDA": "Desafiar sequestradores, fazer dancinhas ou deboche estando rendido.",
    "FEAR RP": "Amor à vida - Não valorizar a própria vida em situações de rendição ou risco.",
    "FLAMING": "RP pesado envolvendo vilipêndio de cadáver, assédio, estupro, racismo, xenofobia, homofobia ou qualquer forma de constrangimento grave.",
    "FORÇAR RP": "Obrigar outro jogador a aceitar ações, informações ou situações sem possibilidade de reação ou escolha dentro do RP.",
    "FUGA AQUÁTICA ABUSIVA": "Utilizar rios, mar ou nado de forma abusiva para prolongar fugas sem possibilidade real.",
    "FUGA PARA RESIDÊNCIA": "Entrar em casas privadas para fugir da polícia (Power Gaming).",
    "GOLPES E FRAUDES": "Proibido aplicar qualquer roleplay de golpe, fraude ou enganação intencional.",
    "HOSPITAL RP": "Obrigatório respeitar o RP médico durante atendimento ou internação.",
    "INTERFERÊNCIA EM AÇÃO": "Participar ou influenciar ação da qual não faz parte.",
    "INVASÃO DE BASE POLICIAL": "Invasão de DP ou Batalhão sem planejamento ou motivo sólido.",
    "INVASÃO DE SAFE": "Utilizar áreas seguras para escapar, ocultar-se ou obter vantagem em ações.",
    "JOB BAIT": "Enganar sobre serviços ou empregos legais para atrair vítimas.",
    "LIMITE DE REFÉNS": "A quantidade máxima permitida de reféns será 8.",
    "LOOT INDEVIDO": "Saquear policiais ou civis aleatórios saquerem envolvidos em ações de banco/lojinha.",
    "META GAMING": "Uso de info OOC no IC ou uso indevido do /ID.",
    "MODS DE VANTAGEM": "Uso de Citizen, remoção de props ou sons modificados para vantagem.",
    "NÃO SE RENDER (PERSEGUIÇÃO)": "Não se render após capotamento ou queda grave de moto em fuga.",
    "NEGATIVA DE IDENTIFICAÇÃO": "Policial negar informar QRA ou patente em abordagem.",
    "NEGOCIAR ARMAS POR REFÉM": "Proibido exigir armamento ou munição em troca de reféns.",
    "POLUIÇÃO SONORA": "Uso de música ou barulho excessivo em Hospital ou Delegacia.",
    "POWER GAMING": "Ações impossíveis na vida real ou abuso da física (ex: subir morro com carro baixo).",
    "QUEBRA DE IMERSÃO": "Uso de termos OOC (prefeitura, deuses, bíblia) dentro do jogo.",
    "QUEBRA DE NEGOCIAÇÃO": "Descumprir acordos firmados durante negociações de ações.",
    "QUEBRA DE SIGILO POLICIAL": "Compartilhar informações restritas de operações ou investigações sem autorização.",
    "QUEBRA REGRA DE MORTE": "Voltar na ação ou usar informações obtidas antes de desmaiar (PD).",
    "RDM": "Random Deathmatch - Matar ou agredir sem motivo ou contexto de RP.",
    "REAÇÃO À ABORDAGEM SAFE": "Reagir a abordagem policial em Safe Zone quando houver fundada suspeita permitida pela regra.",
    "REANIMAR P/ ROUBAR": "Proibido reanimar alguém para obrigar a passar info ou roubar.",
    "RECONHECIMENTO INDEVIDO": "Reconhecer player mascarado sem o uso de alterador de voz.",
    "RECUSA DE RP": "Negar ou dificultar injustificadamente o desenvolvimento de um RP válido.",
    "REVENGE KILL": "Vingança pela própria morte/desmaio.",
    "REVISTA EM DESMAIADO": "Revistar pessoas nocauteadas na rua sem contexto de ação envolvida.",
    "SAIR DO RP": "Abandonar, interromper ou evitar uma situação ativa para fugir de suas consequências.",
    "SEQUESTRO COM MOTO": "Proibido realizar sequestros utilizando motocicletas.",
    "SEQUESTRO SEM MOTIVAÇÃO": "Realizar sequestro sem objetivo criminoso ou contexto plausível.",
    "SUICÍDIO RP": "Realizar qualquer roleplay que remeta a suicídio.",
    "TERCEIRA INTERVENÇÃO": "Interferir em ação já iniciada sem vínculo legítimo com os envolvidos.",
    "USO INDEVIDO DE MÁSCARA": "Utilizar máscara em locais proibidos ou para burlar regras de identificação.",
    "USO INDEVIDO DE STREAM": "Utilizar transmissões ao vivo para obter informações da ação.",
    "VALORIZAÇÃO DE PERSONAGEM": "Manter coerência com a história, limitações e consequências do personagem.",
    "VDM": "Vehicle Deathmatch - Usar veículo como arma para atropelar ou matar.",
    "ZONA SEGURA (SAFE)": "Prática de crimes, agressões ou uso de máscaras em Áreas Neutras."
};

function getDataExpiracao() {
    const data = new Date();
    data.setMonth(data.getMonth() + 1);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    return `${dia}/${mes}/${data.getFullYear()}`;
}

function realizarLogin() {
    const cargo = $('#user_role').val();

    if (!cargo) return; // Sai silenciosamente se nenhum cargo for selecionado

    // Salva na sessão
    localStorage.setItem('staff_role', cargo);
    localStorage.removeItem('staff_user'); // Remove resquícios do sistema antigo

    $('#login-screen').fadeOut();
    configurarPainelStaff(cargo);
}

function configurarPainelStaff(cargo) {
    $('#staff-panel').show();
    $('.preview-panel').css('display', 'flex');

    // Esconde todas as seções de cargo antes de mostrar a correta
    $('.staff-section').hide();

    // Mostra APENAS a seção correspondente ao cargo
    $(`.section-${cargo}`).show();
}

function selecionarMensagem(titulo, conteudo) {
    const discordId = $('#discord_id').val() || "PLAYER";
    const playerMention = `<@${discordId}>`;
    
    // Substitui o placeholder {{player}} pelo ID do autor do chamado
    let conteudoFormatado = conteudo.replace(/{{player}}/g, playerMention);

    // A mensagem agora contém apenas o conteúdo definido nos modelos informados
    const mensagemFormatada = conteudoFormatado;

    // Atualiza o campo de prévia
    $('#preview-text').val(mensagemFormatada);
}

function copiarPrevia(btn) {
    const texto = $('#preview-text').val();
    if (!texto) return;

    navigator.clipboard.writeText(texto);

    // Feedback Visual
    const $btn = $(btn);
    
    $btn.text('COPIADO!').addClass('btn-action-success');
    
    setTimeout(() => {
        $btn.text('COPIAR').removeClass('btn-action-success');
    }, 1000);
}

function limparPrevia(btn) {
    $('#preview-text').val('');

    // Feedback Visual
    const $btn = $(btn);
    
    $btn.text('LIMPO!').addClass('btn-action-success');
    
    setTimeout(() => {
        $btn.text('LIMPAR').removeClass('btn-action-success');
    }, 1000);
}

function toggleSubButtons(btn) {
    const $btn = $(btn);
    const $section = $btn.closest('.staff-section');
    const $subContainer = $btn.next('.sub-buttons-container');
    const menuTitle = $btn.text().trim().toUpperCase();

    // Oculta apenas os grupos de botões daquela seção
    $section.find('.staff-group').hide();

    // Cria ou atualiza a visualização da "nova sessão"
    let $subView = $section.find('.sub-menu-view');
    if ($subView.length === 0) {
        $subView = $('<div class="sub-menu-view"></div>').prependTo($section);
    }

    let content = `<p class="sub-session-title"><strong>${menuTitle}</strong></p>`;

    if (menuTitle.includes("DESFECHO")) {
        $('#obs').hide(); // Remove o logout/obs desta sessão
        content += `
            <div class="punish-config">
                <div id="punish_ids_container">
                    ${gerarTemplateLinhaPunicao()}
                </div>
                <button class="btn-staff" style="width: 100%; margin-top: 5px; background: #3498db;" onclick="adicionarInputPunicao()">+ ADICIONAR NOVO PLAYER</button>
                <button class="btn-staff" style="width: 100%; margin-top: 5px; background: #e74c3c;" onclick="limparDesfexo()">LIMPAR TUDO</button>
            </div>`;
    } else if (menuTitle.includes("AGRAVANTE")) {
        $('#obs').hide();
        content += `
            <div class="punish-config">
                <div id="agravante_container">
                   ${gerarTemplateLinhaAgravante()}
                </div>
                <button class="btn-staff" style="width: 100%; margin-top: 5px; background: #3498db;" onclick="adicionarAgravante()">+ ADICIONAR NOVO PLAYER</button>
                <button class="btn-staff" style="width: 100%; margin-top: 5px; background: #e74c3c;" onclick="limparAgravante()">LIMPAR TUDO</button>
            </div>`;
    } else if (menuTitle.includes("PASSAGEM")) {
        $('#obs').hide(); // Oculta o container de logout para focar na passagem
        const msgPassagem = "Estou acionando o STAFF responsável por este tipo de atendimento. Por favor, aguarde.\\n\\nObs.: Não é necessário marcar outro membro da STAFF novamente.\\n\\n";
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&${DISCORD_IDS.roles['cmo']}>')">CMO / COO</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&${DISCORD_IDS.roles['diretor']}>')">DIRETOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&${DISCORD_IDS.roles['administrador']}>')">ADMINISTRADOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&${DISCORD_IDS.roles['moderador']}>')">MODERADOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&${DISCORD_IDS.roles['suporte']}>')">SUPORTE</button>
            </div>`;
    } else if (menuTitle.includes("INÍCIO") || menuTitle.includes("VINDAS")) {
        $('#obs').hide();
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="selecionarMensagem('BOAS VINDAS', 'Olá prezado(a) {{player}}, tudo bom?')">MENSAGEM INICIAL</button>
                <button class="btn-staff" onclick="selecionarMensagem('AJUDA', 'Olá prezado(a) {{player}}, tudo bom?\\n\\nEm que posso lhe ajudar?')">EM QUE POSSO AJUDAR?</button>
            </div>`;
    } else if (menuTitle.includes("ENCERRAMENTO")) {
        $('#obs').hide();
        const feedbackBase = "\\n\\nA equipe da STAFF ABCD agradece o seu contato e a confiança depositada em nosso suporte. Seguimos à disposição para eventuais esclarecimentos ou atendimentos futuros.";
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="selecionarMensagem('ENCERRAMENTO', 'Prezado(a) {{player}},\\n\\nEm razão da ausência de retorno, seu ticket está sendo finalizado.${feedbackBase}')">AUSÊNCIA DE RETORNO</button>
                <button class="btn-staff" onclick="selecionarMensagem('ENCERRAMENTO', 'Prezado(a) {{player}},\\n\\nEsperamos ter atendido às suas expectativas!${feedbackBase}')">FECHAMENTO</button>
            </div>`;
    } else if (menuTitle.includes("INTIMAÇÃO")) {
        $('#obs').hide();
        content += `
            <div class="punish-config">
                <div class="punish-row" style="border: none; background: transparent; padding: 0;">
                    <label style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-bottom: 8px; display: block; font-weight: 600;">ID do Player Denunciado:</label>
                    <input type="text" id="reported_player_id" class="punish-id-field" placeholder="EX: 123456789" oninput="atualizarMensagemIntimacao()" style="width: 100%;">
                </div>
            </div>`;
    } else if (menuTitle.includes("RETORNO")) {
        $('#obs').hide();
        content += `
            <div class="punish-config">
                <div class="punish-row" style="border: none; background: transparent; padding: 0;">
                    <label style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-bottom: 8px; display: block; font-weight: 600;">Horário Limite (Ex: 07):</label>
                    <input type="text" id="return_time" class="punish-id-field" placeholder="Informe apenas a hora" oninput="atualizarMensagemRetorno()" style="width: 100%;">
                </div>
            </div>`;
    } else if (menuTitle.includes("TERMOS")) {
        $('#obs').hide();
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="selecionarTermoBatalhao()">BATALHÃO</button>
                <button class="btn-staff" onclick="selecionarTermoFavela()" style="flex-direction: column;">
                    <span>FAVELA</span>
                    <span style="font-size: 9px; opacity: 0.7;">Sem Donate</span>
                </button>
            </div>
            <div id="termos-container" style="margin-top: 15px; display: none;">
                <label style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-bottom: 8px; display: block; font-weight: 600;" id="termos-label"></label>
                <select id="termos-dropdown" class="punish-select" onchange="carregarTermo()" style="width: 100%; appearance: auto;">
                    <option value="">-- Selecione uma opção --</option>
                </select>
            </div>`;
    } else if (menuTitle.includes("SOLICITAR")) {
        $('#obs').hide();
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="abrirFormSolicitacao('ADVERTÊNCIA')">ADVERTÊNCIA</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('AVISO VERBAL')">AVISO VERBAL</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('BAN')">BAN</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('BAN TEMPORÁRIO')">BAN TEMPORÁRIO</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('DESBAN')">DESBAN</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('ORIENTAÇÃO')">ORIENTAÇÃO</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('TAG')">TAG</button>
                <button class="btn-staff" onclick="abrirFormSolicitacao('TELAGEM')">TELAGEM</button>
            </div>`;
    } else if (menuTitle.includes("REEMBOLSO")) {
        $('#obs').hide();
        abrirFormSolicitacao('REEMBOLSO', true);
        return; // Interrompe para evitar duplicação de títulos/botões
    } else {
        content += `<div class="staff-grid" style="justify-content: flex-start;">${$subContainer.html() || ''}</div>`;
    }

    content += `<button class="btn-staff btn-voltar" onclick="voltarMenuPrincipal(this)">VOLTAR AO MENU</button>`;
    $subView.html(content).show();
}

function abrirFormSolicitacao(tipo, isTopLevel = false) {
    const $section = $('.staff-section:visible');
    const $subView = $section.find('.sub-menu-view');
    const expiry = getDataExpiracao();

    let content = `<p class="sub-session-title"><strong>SOLICITAÇÃO: ${tipo}</strong></p>`;
    content += `<div class="punish-config" style="display: flex; flex-direction: column; gap: 10px;">`;
    
    content += `<input type="text" id="sol_discord_id" class="punish-id-field" placeholder="ID DO DISCORD (PARA MENÇÃO)" oninput="atualizarPreviewSolicitacao('${tipo}')">`;

    switch(tipo) {
        case 'ADVERTÊNCIA':
            let warningOptions = '<option value="" style="background: #0f172a; color: #fff;">+ Selecionar Cargo...</option>';
            Object.keys(DISCORD_IDS.warnings).forEach(key => {
                warningOptions += `<option value="${key}" style="background: #0f172a; color: #fff;">${key}</option>`;
            });
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <select id="sol_warning" class="punish-select" onchange="atualizarPreviewSolicitacao('${tipo}')" style="appearance: auto;">${warningOptions}</select>
                <p style="font-size: 11px; color: #94a3b8; font-weight: bold;">EXPIRA EM: ${expiry}</p>`;
            break;
        case 'AVISO VERBAL':
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <input type="text" id="sol_reason" class="punish-id-field" placeholder="MOTIVO DO AVISO VERBAL" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <p style="font-size: 11px; color: #94a3b8; font-weight: bold;">EXPIRA EM: ${expiry}</p>`;
            break;
        case 'BAN':
        case 'DESBAN':
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <input type="text" id="sol_acid" class="punish-id-field" placeholder="AC-ID" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <input type="text" id="sol_lic" class="punish-id-field" placeholder="LICENÇAS" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <input type="text" id="sol_ip" class="punish-id-field" placeholder="IP" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <input type="text" id="sol_hex" class="punish-id-field" placeholder="STEAM HEX" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <textarea id="sol_reason" class="punish-id-field" placeholder="MOTIVO" oninput="atualizarPreviewSolicitacao('${tipo}')" style="height: 60px;"></textarea>`;
            if (tipo === 'DESBAN') {
                content += `<input type="text" id="sol_ticket" class="punish-id-field" placeholder="ID DO CANAL DO TICKET" oninput="atualizarPreviewSolicitacao('${tipo}')">`;
            }
            break;
        case 'BAN TEMPORÁRIO':
        case 'TELAGEM':
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <textarea id="sol_reason" class="punish-id-field" placeholder="MOTIVO" oninput="atualizarPreviewSolicitacao('${tipo}')" style="height: 60px;"></textarea>`;
            break;
        case 'ORIENTAÇÃO':
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarPreviewSolicitacao('${tipo}')">
                <textarea id="sol_orient" class="punish-id-field" placeholder="ORIENTAÇÃO" oninput="atualizarPreviewSolicitacao('${tipo}')" style="height: 60px;"></textarea>
                <p style="font-size: 11px; color: #94a3b8; font-weight: bold;">EXPIRA EM: ${expiry}</p>`;
            break;
        case 'REEMBOLSO':
            content += `
                <input type="text" id="sol_player_id" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarPreviewSolicitacao('${tipo}')">`;
            break;
        case 'TAG':
            let tagOptions = '<option value="" style="background: #0f172a; color: #fff;">+ Selecionar Cargo...</option>';
            Object.keys(DISCORD_IDS.warnings).forEach(key => {
                tagOptions += `<option value="${key}" style="background: #0f172a; color: #fff;">${key}</option>`;
            });
            content += `
                <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">SELECIONAR CARGOS PREDEFINIDOS:</label>
                <select id="sol_tag_select" class="punish-select" onchange="adicionarTag(this)" style="appearance: auto;">${tagOptions}</select>
                <div id="selected_tags" class="selected-rules" style="margin-top: 5px;"></div>
                <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">ID DO CARGO PERSONALIZADO:</label>
                <input type="text" id="sol_custom_role_id" class="punish-id-field" placeholder="EX: 123456789" oninput="atualizarPreviewSolicitacao('${tipo}')">`;
            break;
    }

    content += `</div>`;
    
    if (isTopLevel) {
        content += `<button class="btn-staff btn-voltar" onclick="voltarMenuPrincipal(this)">VOLTAR AO MENU</button>`;
    } else {
        content += `<button class="btn-staff btn-voltar" onclick="voltarParaSolicitar()">VOLTAR PARA SOLICITAR</button>`;
    }
    
    $subView.html(content);
    atualizarPreviewSolicitacao(tipo);
}

function atualizarPreviewSolicitacao(tipo) {
    const discordIdInput = $('#sol_discord_id').val();
    const playerId = $('#sol_player_id').val();
    const expiry = getDataExpiracao();
    let lines = [];

    if (discordIdInput) lines.push(`<@${discordIdInput}>`);

    switch(tipo) {
        case 'ADVERTÊNCIA':
            if (playerId) lines.push(`ID: ${playerId}`);
            const warnRole = $('#sol_warning').val();
            if (warnRole) {
                const warnMention = DISCORD_IDS.warnings[warnRole] ? `<@&${DISCORD_IDS.warnings[warnRole]}>` : warnRole;
                lines.push(warnMention);
            }
            lines.push(`Expira: ${expiry}`);
            break;
        case 'AVISO VERBAL':
            if (playerId) lines.push(`ID: ${playerId}`);
            const avReason = $('#sol_reason').val();
            if (avReason) lines.push(`Motivo do Aviso Verbal: ${avReason}`);
            lines.push(`Expira: ${expiry}`);
            break;
        case 'BAN':
        case 'DESBAN':
            if (playerId) lines.push(`ID: ${playerId}`);
            const acid = $('#sol_acid').val();
            if (acid) lines.push(`AC-ID: ${acid}`);
            const lic = $('#sol_lic').val();
            if (lic) lines.push(`Licencas: ${lic}`);
            const ip = $('#sol_ip').val();
            if (ip) lines.push(`IP: ${ip}`);
            const hex = $('#sol_hex').val();
            if (hex) lines.push(`Steam HEX: ${hex}`);
            const reason = $('#sol_reason').val();
            if (reason) {
                const label = tipo === 'BAN' ? 'MOTIVO' : 'Motivo';
                lines.push(`${label}: ${reason}`);
            }
            if (tipo === 'DESBAN') {
                const ticket = $('#sol_ticket').val();
                if (ticket) lines.push(`Ticket: <#${ticket}>`);
            }
            break;
        case 'BAN TEMPORÁRIO':
        case 'TELAGEM':
            if (playerId) lines.push(`ID: ${playerId}`);
            const btReason = $('#sol_reason').val();
            if (btReason) lines.push(`MOTIVO: ${btReason}`);
            break;
        case 'ORIENTAÇÃO':
            if (playerId) lines.push(`ID: ${playerId}`);
            const orient = $('#sol_orient').val();
            if (orient) lines.push(`Orientação: ${orient}`);
            lines.push(`Expira: ${expiry}`);
            break;
        case 'REEMBOLSO':
            if (discordIdInput || playerId) {
                const playerMencao = discordIdInput ? `<@${discordIdInput}>` : "";
                const msgReembolso = `Olá prezado(a) ${playerMencao}, tudo bom?\n\nPeço que aguarde, em breve vamos lhe enviar todas as informações sobre o método de reembolso.\n\nAté lá, manteremos o ticket aberto.\n\nAgradecemos pela sua compreensão e paciência!\n\nObs.: Não é necessário marcar novamente nenhum STAFF\n\n<@&${DISCORD_IDS.roles['cmo']}>`;
                $('#preview-text').val(msgReembolso);
            } else {
                $('#preview-text').val('');
            }
            return;
        case 'TAG':
            const mentionPlayer = discordIdInput ? `<@${discordIdInput}>` : "[MENCIONAR DISCORD]";
            let tags = [];
            $('#selected_tags .rule-tag').each(function() {
                const tagName = $(this).text().replace('×', '').trim();
                const tagId = DISCORD_IDS.warnings[tagName];
                tags.push(tagId ? `<@&${tagId}>` : tagName);
            });
            const customRoleId = $('#sol_custom_role_id').val();
            if (customRoleId) tags.push(`<@&${customRoleId}>`);

            let tagsTexto = "[CARGO]";
            if (tags.length === 1) tagsTexto = tags[0];
            else if (tags.length > 1) {
                const tempTags = [...tags];
                const ultima = tempTags.pop();
                tagsTexto = tempTags.join(', ') + ' e ' + ultima;
            }

            const msgTag = `<@&${DISCORD_IDS.roles['administrador']}>, Por gentileza setar o cargo ${tagsTexto} no player ${mentionPlayer}.`;
            // Só mostra a tag se houver algo informado, senão limpa
            if (!discordIdInput && tags.length === 0 && !customRoleId) {
                $('#preview-text').val('');
            } else {
                $('#preview-text').val(msgTag);
            }
            return;
    }

    $('#preview-text').val(lines.length > 0 ? lines.join('\n') : '');
}

function voltarParaSolicitar() {
    const $section = $('.staff-section:visible');
    const $btnSolicitar = $section.find('.btn-staff:contains("SOLICITAR")');
    
    // Simulamos o clique no botão SOLICITAR original para reconstruir a grade
    if ($btnSolicitar.length > 0) {
        toggleSubButtons($btnSolicitar[0]);
    } else {
        voltarMenuPrincipal($('.btn-voltar')[0]);
    }
}

function adicionarTag(select) {
    const val = $(select).val();
    if (!val) return;
    
    const $container = $('#selected_tags');
    
    if ($container.find(`.rule-tag:contains('${val}')`).length === 0) {
        $container.append(`
            <span class="rule-tag">
                ${val} <i onclick="removerTag(this)">×</i>
            </span>
        `);
    }
    
    $(select).val('');
    atualizarPreviewSolicitacao('TAG');
}

function removerTag(element) {
    $(element).parent().remove();
    atualizarPreviewSolicitacao('TAG');
}

function gerarTemplateLinhaPunicao() {
    let punishOptions = '<option value="" style="background: #0f172a; color: #fff;">+ Selecionar...</option>';
    Object.keys(DISCORD_IDS.warnings).forEach(key => {
        punishOptions += `<option value="${key}" style="background: #0f172a; color: #fff;">${key}</option>`;
    });

    const sortedRules = Object.keys(CITY_RULES).sort();
    const customArrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E";
    
    let rulesGrid = '<div class="rules-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 5px; max-height: 150px; overflow-y: auto; padding: 8px; background: #0a0e16; border: 1px solid #334155; border-radius: 4px;">';
    sortedRules.forEach(rule => {
        rulesGrid += `
            <div class="rule-item" 
                 onclick="selecionarCitacaoRegra(this, '${rule}')" 
                 style="background: #1e293b; color: #94a3b8; padding: 5px; font-size: 9px; border-radius: 3px; cursor: pointer; text-align: center; border: 1px solid #334155; transition: all 0.2s; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" 
                 title="${CITY_RULES[rule]}">
                ${rule}
            </div>`;
    });
    rulesGrid += '</div>';

    return `
        <div class="punish-row">
            <div class="punish-header">
                <input type="text" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarMensagemPunicao()" style="background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px; flex-grow: 1; outline: none;">
                <button class="btn-remove-row" onclick="removerPlayer(this)">×</button>
            </div>

            <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">CITAR REGRAS VIOLADAS (CLIQUE PARA SELECIONAR):</label>
            <input type="text" placeholder="🔍 Pesquisar regra..." oninput="filtrarRegras(this)" style="background: #0f172a; color: #fff; border: 1px solid #334155; padding: 6px; border-radius: 4px; width: 100%; margin-top: 5px; font-size: 11px; outline: none;">
            ${rulesGrid}
            <div class="cited-rules" style="margin-top: 5px;"></div>

            <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">PUNIÇÃO APLICADA:</label>
            <select class="punish-select punish-rule-select" onchange="adicionarRegra(this)" style="background-color: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px 30px 8px 8px; border-radius: 4px; width: 100%; margin-top: 5px; outline: none; appearance: none; -webkit-appearance: none; background-image: url(&quot;${customArrow}&quot;); background-repeat: no-repeat; background-position: right 10px center;">
                ${punishOptions}
            </select>
            <div class="selected-rules"></div>

            <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">AGRAVO (CASO NÃO COMPAREÇA):</label>
            <select class="punish-select aggravate-select" onchange="atualizarMensagemPunicao()" style="background-color: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px 30px 8px 8px; border-radius: 4px; width: 100%; margin-top: 5px; outline: none; border-left: 3px solid #e74c3c; appearance: none; -webkit-appearance: none; background-image: url(&quot;${customArrow}&quot;); background-repeat: no-repeat; background-position: right 10px center;">
                ${punishOptions}
            </select>
        </div>`;
}

function adicionarInputPunicao() {
    $('#punish_ids_container').append(gerarTemplateLinhaPunicao());
}

function limparDesfexo() {
    $('#punish_ids_container').html(gerarTemplateLinhaPunicao());
    $('#preview-text').val('');
}

function filtrarRegras(input) {
    const termo = $(input).val().toLowerCase();
    const $grid = $(input).next('.rules-grid');
    
    $grid.find('.rule-item').each(function() {
        const textoRegra = $(this).text().toLowerCase();
        if (textoRegra.includes(termo)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function adicionarRegra(select) {
    const val = $(select).val();
    if (!val) return;
    
    const $container = $(select).next('.selected-rules');
    
    // Evita duplicados no mesmo player
    if ($container.find(`.rule-tag:contains('${val}')`).length === 0) {
        $container.append(`
            <span class="rule-tag">
                ${val} <i onclick="removerRegra(this)">×</i>
            </span>
        `);
    }
    
    $(select).val('');
    atualizarMensagemPunicao();
}

function selecionarCitacaoRegra(element, val) {
    const $container = $(element).closest('.punish-row').find('.cited-rules');
    if ($container.find(`.rule-tag:contains('${val}')`).length === 0) {
        $container.append(`
            <span class="rule-tag" style="background: #1e293b; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; margin-right: 5px; margin-bottom: 5px; display: inline-flex; align-items: center; gap: 5px; color: #94a3b8;">
                ${val} <i onclick="removerCitacaoRegra(this)" style="cursor: pointer; color: #dc2626;">×</i>
            </span>
        `);
    }
    atualizarMensagemPunicao();
}

function removerCitacaoRegra(element) {
    $(element).parent().remove();
    atualizarMensagemPunicao();
}

function removerRegra(element) {
    $(element).parent().remove();
    atualizarMensagemPunicao();
}

function removerPlayer(btn) {
    $(btn).closest('.punish-row').remove();
    atualizarMensagemPunicao();
}

function atualizarMensagemPunicao() {
    let players = [];
    const reporterId = $('#discord_id').val() || "[ID_AUTOR]";

    $('.punish-row').each(function() {
        const id = $(this).find('.punish-id-field').val().trim();
        const aggravated = $(this).find('.aggravate-select').val();

        let punishments = [];
        $(this).find('.selected-rules .rule-tag').each(function() {
            const ruleName = $(this).text().replace('×', '').trim();
            const ruleId = DISCORD_IDS.warnings[ruleName];
            punishments.push(ruleId ? `<@&${ruleId}>` : ruleName);
        });

        let citations = [];
        $(this).find('.cited-rules .rule-tag').each(function() {
            const ruleName = $(this).text().replace('×', '').trim();
            if (CITY_RULES[ruleName]) {
                citations.push(`**${ruleName}** (${CITY_RULES[ruleName]})`);
            }
        });

        if (id) {
            players.push({
                id: id,
                punishments: punishments,
                citations: citations,
                aggravated: aggravated ? (DISCORD_IDS.warnings[aggravated] ? `<@&${DISCORD_IDS.warnings[aggravated]}>` : aggravated) : "[SELECIONAR AGRAVO]"
            });
        }
    });

    if (players.length === 0) return;

    let conteudo = "Olá prezados,\n\n";

    // 1. Blocos individuais por player
    players.forEach((p, index) => {
        const numMotivos = p.citations.length;
        const textoMotivo = numMotivos > 1 ? "pelos seguintes motivos" : "pelo seguinte motivo";
        const motivos = numMotivos > 0 
            ? p.citations.map((c, i) => `- ${i + 1}. ${c}`).join('\n')
            : "- 1. [MOTIVO NÃO INFORMADO]";

        const punicaoTexto = p.punishments.length > 0 ? p.punishments.join(', ') : "[PUNIÇÃO]";

        if (index === 0) {
            conteudo += `Após a analise da Equipe STAFF o player <@${p.id}> receberá a punição de ${punicaoTexto} ${textoMotivo}:\n\n${motivos}\n\n`;
        } else if (index === players.length - 1) {
            conteudo += `E o player <@${p.id}> receberá a punição de ${punicaoTexto} ${textoMotivo}:\n\n${motivos}\n\n`;
        } else {
            conteudo += `Também o player <@${p.id}> receberá a punição de ${punicaoTexto} ${textoMotivo}:\n\n${motivos}\n\n`;
        }
    });

    conteudo += `Agradecemos ao player <@${reporterId}> pelo report e tenham um otimo RP.\n\n`;

    // 2. Menções conjuntas para o aviso de 24h
    const IDsParaMencionar = players.map(p => `<@${p.id}>`);
    let mencaoFinal = "";
    if (IDsParaMencionar.length === 1) {
        mencaoFinal = IDsParaMencionar[0];
    } else {
        const ultimo = IDsParaMencionar.pop();
        mencaoFinal = IDsParaMencionar.join(', ') + ' e ' + ultimo;
    }

    const texto24h = players.length > 1 
        ? "Vocês têm **24 horas** para se apresentarem" 
        : "Você tem **24 horas** para se apresentar";

    conteudo += `${mencaoFinal}, ${texto24h} no canal de suporte (<#1216847354590662787>) e receber as devidas orientações.\n\n`;

    // 3. Seção de Agravo
    if (players.length === 1) {
        const p = players[0];
        const pTexto = p.punishments.length > 0 ? p.punishments.join(', ') : "[PUNIÇÃO]";
        conteudo += `Caso não compareça dentro do prazo informado, sua punição de ${pTexto} poderá agravar para ${p.aggravated} sem chances de revogação.`;
    } else {
        conteudo += `Caso não compareçam dentro do prazo informado, as punições poderão ser agravadas:\n`;
        players.forEach(p => {
            const pTexto = p.punishments.length > 0 ? p.punishments.join(', ') : "[PUNIÇÃO]";
            conteudo += `- <@${p.id}>: de ${pTexto} para ${p.aggravated}\n`;
        });
        conteudo += `Sem chances de revogação.`;
    }

    conteudo += `\n\nApós a ciência peço que marquem com ":1604_certified_green: "`;

    selecionarMensagem("DESFECHO", conteudo);
}

function gerarTemplateLinhaAgravante() {
    let punishOptions = '<option value="" style="background: #0f172a; color: #fff;">+ Selecionar...</option>';
    Object.keys(DISCORD_IDS.warnings).forEach(key => {
        punishOptions += `<option value="${key}" style="background: #0f172a; color: #fff;">${key}</option>`;
    });

    const customArrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E";

    return `
        <div class="punish-row">
            <div class="punish-header">
                <input type="text" class="agravante-player-id" placeholder="ID DO PLAYER" oninput="atualizarMensagemAgravante()" style="background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px; flex-grow: 1; outline: none;">
                <button class="btn-remove-row" onclick="removerAgravante(this)">×</button>
            </div>

            <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">PUNIÇÃO ANTERIOR:</label>
            <select class="punish-select agravante-first-punish" onchange="atualizarMensagemAgravante()" style="background-color: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px 30px 8px 8px; border-radius: 4px; width: 100%; margin-top: 5px; outline: none; appearance: none; -webkit-appearance: none; background-image: url(&quot;${customArrow}&quot;); background-repeat: no-repeat; background-position: right 10px center;">
                ${punishOptions}
            </select>

            <label style="color: #94a3b8; font-size: 10px; margin-top: 10px; display: block; font-weight: bold;">PUNIÇÃO AGRAVADA:</label>
            <select class="punish-select agravante-second-punish" onchange="atualizarMensagemAgravante()" style="background-color: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px 30px 8px 8px; border-radius: 4px; width: 100%; margin-top: 5px; outline: none; border-left: 3px solid #e74c3c; appearance: none; -webkit-appearance: none; background-image: url(&quot;${customArrow}&quot;); background-repeat: no-repeat; background-position: right 10px center;">
                ${punishOptions}
            </select>
        </div>`;
}

function adicionarAgravante() {
    $('#agravante_container').append(gerarTemplateLinhaAgravante());
}

function removerAgravante(btn) {
    $(btn).closest('.punish-row').remove();
    atualizarMensagemAgravante();
}

function limparAgravante() {
    $('#agravante_container').html(gerarTemplateLinhaAgravante());
    $('#preview-text').val('');
}

function atualizarMensagemAgravante() {
    let players = [];

    $('.punish-row').each(function() {
        const $row = $(this);
        const playerId = $row.find('.agravante-player-id').val().trim();
        const firstPunish = $row.find('.agravante-first-punish').val();
        const secondPunish = $row.find('.agravante-second-punish').val();

        if (playerId && firstPunish && secondPunish) {
            const firstPunishMention = DISCORD_IDS.warnings[firstPunish] ? `<@&${DISCORD_IDS.warnings[firstPunish]}>` : firstPunish;
            const secondPunishMention = DISCORD_IDS.warnings[secondPunish] ? `<@&${DISCORD_IDS.warnings[secondPunish]}>` : secondPunish;

            players.push({
                id: playerId,
                firstPunish: firstPunishMention,
                secondPunish: secondPunishMention
            });
        }
    });

    if (players.length === 0) return;

    let conteudo = '';

    if (players.length === 1) {
        const p = players[0];
        const playerMencao = `<@${p.id}>`;
        conteudo = `Prezado(a) ${playerMencao},\n\nEm razão do não comparecimento ao suporte para orientação, sua punição se agravou de ${p.firstPunish} para ${p.secondPunish}.\n\nA equipe da STAFF ABCD segue à disposição para eventuais esclarecimentos.`;
    } else {
        conteudo = `Prezados (as) players,\n`;
        players.forEach((p) => {
            const playerMencao = `<@${p.id}>`;
            conteudo += `\n${playerMencao},\n\nEm razão do não comparecimento ao suporte para orientação, sua punição se agravou de ${p.firstPunish} para ${p.secondPunish}.\n`;
        });
        conteudo += `\nA equipe da STAFF ABCD segue à disposição para eventuais esclarecimentos.`;
    }

    selecionarMensagem("AGRAVANTE", conteudo);
}

function atualizarMensagemIntimacao() {

    const reportedId = $('#reported_player_id').val().trim();
    const modId = DISCORD_IDS.roles['moderador'];
    const modMention = `<@&${modId}>`;
    
    const playerMention = reportedId ? `<@${reportedId}>` : "[MencionarPlayerDenunciado]";
    
    const msg = `${playerMention} Você tem **24 horas** para responder a essa denúncia em uma **única mensagem**!\n\n É terminantemente proibido bate-papo, debate e/ou farpas no ticket. Isso acarretará em punição.\n\nApós enviar sua resposta (em apenas uma mensagem), aguarde a equipe de ${modMention} avaliar e julgar o caso.`;
    
    selecionarMensagem('INTIMAÇÃO', msg);
}

function atualizarMensagemRetorno() {
    const rawTime = $('#return_time').val().replace(/\D/g, '').substring(0, 2);
    let formattedTime = "[HorarioInformado]";
    
    if (rawTime) {
        formattedTime = (rawTime.length === 1 ? '0' + rawTime : rawTime) + ':00h';
    }

    const staffId = DISCORD_IDS.roles['staff_geral'];
    const msg = `Prezado {{player}},\n\nInformamos que, caso não tenhamos retorno até às **${formattedTime}**, o presente ticket será automaticamente **ENCERRADO**.\n\nCaso ainda necessite de suporte após o encerramento, solicitamos a abertura de um novo ticket.\n\n<@&${staffId}>`;
    
    selecionarMensagem('RETORNO', msg);
}

function voltarMenuPrincipal(btn) {
    const $section = $(btn).closest('.staff-section');
    $section.find('.sub-menu-view').hide();
    $section.find('.staff-group').show();
    $('#obs').show(); // Mostra o logout novamente ao voltar
}

$(document).ready(() => {
    // 1. Limpeza de elementos duplicados e legados
    $('#user_name').remove();
    $('label[for="user_name"]').remove();
    $('#login-screen h2, .login-box h2').remove(); // Garante apenas uma escrita de "Acesso Staff"

    // 2. Container de Fundo (Overlay) - Padrao Area Militar
    $('#login-screen').css({
        'position': 'fixed',
        'top': '0', 'left': '0', 'width': '100%', 'height': '100%',
        'display': 'flex', 'align-items': 'center', 'justify-content': 'center',
        'background': '#0a0e16', // Fundo escuro total (padrão ABCD)
        'backdrop-filter': 'none',
        'z-index': '999999',
        'font-family': '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    });

    // Criacao do Card de Login se nao existir
    if ($('#login-card').length === 0) {
        $('#login-screen').contents().wrapAll('<div id="login-card"></div>');
    }

    // 3. Estilo do Card Principal (Padrão Dark Military)
    $('#login-card').css({
        'background': 'linear-gradient(135deg, #0a0e16 0%, #151922 100%)',
        'color': '#ffffff',
        'padding': '40px',
        'border-radius': '12px',
        'border': '1px solid #1f2430',
        'border-left': '4px solid #dc2626', // Detalhe vermelho à esquerda
        'box-shadow': 'none', // Remove sombras do centro conforme solicitado
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'width': '100%',
        'max-width': '400px',
        'position': 'relative'
    });

    // 4. Garante que a classe .login-box do HTML não traga fundo branco
    $('.login-box').css({
        'background': 'transparent',
        'box-shadow': 'none',
        'width': '100%'
    });

    // 5. Logo Centralizada
    $('#login-screen img')
        .attr('src', 'src/logo_abcd.png')
        .css({
            'width': '250px', // Aumentado conforme solicitado
            'height': 'auto',
            'margin-bottom': '10px',
            'filter': 'drop-shadow(0 0 10px rgba(0,0,0,0.8))'
        });

    // Garante que o texto "ACESSO STAFF" esteja abaixo da logo
    if ($('#login-subtitle').length === 0) {
        $('<div id="login-subtitle">ACESSO STAFF</div>').insertAfter('#login-screen img');
    } else {
        $('#login-subtitle').text('ACESSO STAFF');
    }

    // 6. Titulo e Label (Alinhamentos solicitados)
    $('#login-subtitle').css({
        'color': '#dc2626',
        'font-size': '22px',
        'font-weight': '900',
        'text-transform': 'uppercase',
        'letter-spacing': '3px',
        'margin-bottom': '30px',
        'text-align': 'center'
    });

    $('#role-label').css({
        'color': '#94a3b8',
        'font-size': '11px',
        'text-transform': 'uppercase',
        'margin-bottom': '8px',
        'width': '100%',
        'text-align': 'left',
        'font-weight': '600',
        'display': 'block'
    });

    // 7. Estilo do Select (Padrao Area Militar Dark)
    $('#user_role').css({
        'width': '100%',
        'padding': '14px',
        'background': '#0f172a',
        'color': '#ffffff',
        'border': '1px solid #334155',
        'border-radius': '6px',
        'margin-bottom': '25px',
        'outline': 'none',
        'cursor': 'pointer',
        'font-size': '15px',
        'appearance': 'none',
        '-webkit-appearance': 'none',
        'background-image': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
        'background-repeat': 'no-repeat',
        'background-position': 'right 15px center',
        'padding-right': '40px',
        'text-align': 'left',
        'transition': 'all 0.3s'
    }).on('focus', function() {
        $(this).css('border-color', '#dc2626');
    }).on('blur', function() {
        $(this).css('border-color', '#334155');
    });

    // 8. Botão de Entrada (Aumentado e Centralizado)
    $('#login-screen button').css({
        'width': '100%',
        'padding': '20px', // Aumentado conforme solicitado
        'background': 'linear-gradient(180deg, #dc2626 0%, #991b1b 100%)',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'color': '#ffffff',
        'border': 'none',
        'border-radius': '6px',
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'letter-spacing': '2px',
        'text-align': 'center',
        'cursor': 'pointer',
        'box-shadow': 'none',
        'transition': 'all 0.3s ease'
    }).hover(
        function() { 
            $(this).css({
                'filter': 'brightness(1.2)', 
                'transform': 'translateY(-2px)', 
                'box-shadow': '0 6px 20px rgba(220, 38, 38, 0.4)'
            }); 
        },
        function() { 
            $(this).css({
                'filter': 'brightness(1)', 
                'transform': 'translateY(0)', 
                'box-shadow': '0 4px 15px rgba(220, 38, 38, 0.2)'
            }); 
        }
    );

    // 9. Correção Automática e Limpeza: Garante que os botões principais abram as sessões corretas e remove botões obsoletos
    $('.btn-staff').each(function() {
        const txt = $(this).text().trim().toUpperCase();

        // Remove o botão de ajuda da tela inicial (mantendo o da sub-sessão que é gerado dinamicamente)
        if (txt === "EM QUE POSSO AJUDAR" && $(this).closest('.staff-group').length > 0) {
            $(this).remove();
            return;
        }

        // Configura o modelo de Denúncia diretamente no botão da tela inicial
        if (txt === "MODELO DE DENÚNCIA" || txt === "MODELO DE DENUNCIA") {
            const msg = 'Olá prezado(a) {{player}}, Tudo bem?\\n\\nPara o prosseguimento da sua denúncia, siga o modelo abaixo:\\n\\n:warning: **Denúncias sem gravação contendo áudio/VOIP e vídeo com o contexto completo da situação não serão aceitas.**\\n\\n\`\`\`\\nID DA VÍTIMA:\\nID DO ACUSADO:\\nREGRAS DESCUMPRIDAS:\\nDESCRIÇÃO DO OCORRIDO:\\n\`\`\`';
            $(this).attr('onclick', `selecionarMensagem('MODELO', '${msg}')`);
        }

        // Configura o modelo de Desconsiderar diretamente no botão da tela inicial
        if (txt === "DESCONSIDERAR") {
            const msg = 'Prezado(a) {{player}},\\n\\nEm razão da ausência de provas ou de elementos comprobatórios suficientes para a devida apuração dos fatos apresentados, o presente ticket de denúncia será **DESCONSIDERADO**.\\n\\nA equipe da STAFF ABCD agradece pelo seu contato e pela confiança em nosso suporte. Permanecemos à disposição para quaisquer esclarecimentos ou futuras necessidades.\\n\\nApós tomar ciência desta mensagem, solicitamos que reaja com \":1604_certified_green:\".';
            $(this).attr('onclick', `selecionarMensagem('DESCONSIDERAR', '${msg}')`);
        }

        // Configura o modelo de Discussão diretamente no botão da tela inicial
        if (txt === "DISCUÇÃO" || txt === "DISCUSSÃO") {
            const msg = ':warning: **ADVERTÊNCIA!** :warning:\\n\\nDiscussões, bate-papo, provocações e farpas neste ticket devem cessar **IMEDIATAMENTE!**\\n\\n\`\`\`ansi\\n[0;2m[0;2m[0;2m[0m[0m[0m[2;31m[0m[2;31m[1;31mCondutas inadequadas poderão resultar em punições administrativas.[0m[2;31m[0m\\n\`\`\`\\n\\nEvitem punições desnecessárias e utilizem este ticket apenas para envio de provas e esclarecimentos pertinentes ao caso.';
            $(this).attr('onclick', `selecionarMensagem('DISCUSSÃO', '${msg}')`);
        }

        // Configura o modelo de Batalhão diretamente no botão da tela inicial
        if (txt === "BATALHÃO" || txt === "BATALHAO") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\n# Requisitos para assumir um Batalhão do ABCD\\n\`\`\`ansi\\n[1;2m[1;31m[1;34m➝ O comandante do batalhão precisa ser +18 ;\\n➝ No mínimo de 15 pessoas para assumir ; \\n➝ Apresentar um projeto de como pretende realizar o RP com a sua guarnição; \\n➝ Hierarquia já precisa estar pronta  (com todas as patentes);\\n➝ É necessário que todos os componentes de sua guarnição estejam liberados no momento da entrega para a realização de alinhamentos.[0m[1;31m[0m[0m\\n\`\`\`\\nSe você possui todos os requisitos, favor **confirmar** com um **SIM** e informe qual batalhão você tem interesse. Você pode verificar quais estão livres no canal <#1218715282806411344>.\\n\\n<@&826569114620657719> <@961304767324385300>\\n\\nMencionei também os **STAFFs** responsável pelas **ENTREGAS DOS BATALHÕES**, peço que aguarde o retorno.\\n\\nObs.: Não é necessário mencionar novamente nenhum outro **STAFF**.';
            $(this).attr('onclick', `selecionarMensagem('BATALHÃO', '${msg}')`);
        }

        // Configura o modelo de Favela diretamente no botão da tela inicial
        if (txt === "FAVELA") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\n# Requisitos para assumir uma FAVELA NO ABCD ROLEPLAY\\n\`\`\`ansi\\n[0;2m[0;2m[0;2m[0;2m[0m[0m[0m[0m[2;32m➝ O 01 precisa ser +18;\\n➝ Mínimo de 10 á 15 pessoas para assumir; \\n➝ Realização de alinhamento prévio sobre REGRAS E ANDAMENTO DO NOSSO ILEGAL;\\n➝ É necessário que todos os membros de sua FAC, já estejam liberados no DISCORD e com WL na cidade.[0m\\n\`\`\`\\nSe você possui todos os requisitos, favor **confirmar** com um **SIM** e informe qual favela você tem interesse. Você pode verificar quais estão livres no canal <#1199104311599300618>.\\n\\n<@&1098702235757711440> <@1222328593032544257>\\n\\nMencionei também os **STAFF** responsáveis pelas **ENTREGAS DAS FAVELAS**, peço que aguarde o retorno.\\n\\nObs.: Não é necessário mencionar novamente nenhum outro **STAFF**.';
            $(this).attr('onclick', `selecionarMensagem('FAVELA', '${msg}')`);
        }

        // Configura o modelo de Influenciador diretamente no botão da tela inicial
        if (txt === "COMO SER INFLUENCIADOR") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\nPara ser um **INFLUENCIADOR ABCD**, basta que você entre em nosso **DISCORD** dos **INFLUENCERS DO ABCD** e abra um ticket solicitando a sua avaliação. \\n\\n<#960361101164417134>\\n\\nBoa sorte!';
            $(this).attr('onclick', `selecionarMensagem('INFLUENCIADOR', '${msg}')`);
        }

        // Renomeia o botão de Solicitar Retorno e configura a sessão
        if (txt.includes("SOLICITAR RETORNO") || txt === "RETORNO") {
            $(this).text("RETORNO");
            $(this).attr('onclick', 'toggleSubButtons(this)');
        }

        if (txt.includes("PASSAGEM") || txt.includes("ENCERRAMENTO") || txt.includes("INÍCIO") || txt.includes("VINDAS") || txt.includes("INICIAL") || txt.includes("INTIMAÇÃO") || txt.includes("RETORNO") || txt.includes("SOLICITAR") || txt.includes("REEMBOLSO")) {
            $(this).attr('onclick', 'toggleSubButtons(this)');
        }
    });

    const savedRole = localStorage.getItem('staff_role');
    if (savedRole) {
        configurarPainelStaff(savedRole);
        $('#login-screen').hide();
    } else {
        $('#user_role').focus(); // Foca no seletor de cargo ao abrir
    }
});

// LISTA DE BATALHÕES EM ORDEM ALFABÉTICA
const BATALHAES_LISTA = [
    "1º BPChq ANCHIETA - PMESP",
    "1º BPChq ROTA - PMESP",
    "1º BPRv - PMESP",
    "1º BPTran | 6ºBPM - PMESP",
    "1º PEL. FORÇA TÁTICA - PMESP",
    "2º BPChq ANCHIETA - PMESP",
    "2º PEL. FORÇA TÁTICA | 6ºBPM - PMESP",
    "3º BPChq HUMAITÁ - PMESP",
    "4º BPChq COE - PMESP",
    "4º BPChq COE | GATE - PMESP",
    "4º BPChq GATE - PMESP",
    "6º CAEP - PMESP",
    "7º BAEP - PMESP",
    "18ºCBM",
    "CAvPM | 6ºBPM - PMESP",
    "DELEGACIA DE POLÍCIA CIVIL - PCESP",
    "DOPE - PCESP",
    "EXÉRCITO BRASILEIRO",
    "POLÍCIA FEDERAL",
    "POLÍCIA RODOVIÁRIA FEDERAL",
    "SAP"
];

let currentTermoType = null;

// Nomes femininos que usam artigos "a", "da"
const NOMES_FEMININOS = [
    "DELEGACIA DE POLÍCIA CIVIL - PCESP",
    "DOPE - PCESP",
    "POLÍCIA FEDERAL",
    "POLÍCIA RODOVIÁRIA FEDERAL"
];

// Lista de Favelas
const FAVELAS_LISTA = [
    "AREIÃO",
    "CALUX",
    "COCA",
    "DR",
    "HELIPA",
    "MONTANHÃO",
    "NAVAL",
    "SÃO PEDRO"
];

// Lista de Empresas
const EMPRESAS_LISTA = [
    "MODELO GERAL",
    "REI DO GRAVE"
];

function ehFeminino(nome) {
    return NOMES_FEMININOS.includes(nome);
}

function selecionarTermoBatalhao() {
    currentTermoType = 'batalhao';
    $('#termos-label').text('Selecione o Batalhão ou Delegacia:');
    const dropdown = $('#termos-dropdown');
    dropdown.html('<option value="">-- Selecione uma opção --</option><option value="geral">MODELO GERAL</option>');
    
    BATALHAES_LISTA.forEach(batalha => {
        dropdown.append(`<option value="${batalha}">${batalha}</option>`);
    });
    
    $('#termos-container').show();
}

function selecionarTermoFavela() {
    currentTermoType = 'favela';
    $('#termos-label').text('Selecione a Favela:');
    const dropdown = $('#termos-dropdown');
    dropdown.html('<option value="">-- Selecione uma opção --</option><option value="geral">MODELO GERAL</option>');
    
    FAVELAS_LISTA.forEach(favela => {
        dropdown.append(`<option value="${favela}">${favela}</option>`);
    });
    
    $('#termos-container').show();
}

function carregarTermo() {
    if (currentTermoType === 'batalhao') {
        const batalha = $('#termos-dropdown').val();
        if (!batalha) return;
        const termo = gerarTermoBatalhao(batalha);
        selecionarMensagem('TERMO DE RESPONSABILIDADE', termo);
    } else if (currentTermoType === 'favela') {
        const favela = $('#termos-dropdown').val();
        if (!favela) return;
        const termo = gerarTermoFavela(favela);
        selecionarMensagem('TERMO DE RESPONSABILIDADE', termo);
    }
}

function gerarTermoBatalhao(batalha) {
    // Modelo geral sem mencionar organização específica
    if (batalha === "geral") {
        const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber uma organização no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros em manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay.

📌 Toda a gestão da organização deve ser feita de forma organizada através do nosso Discord oficial da SSP (Secretaria de Segurança Pública).

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso da organização de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas ou descumprimento do <#1370134363592724560>, poderão acarretar na perda **IMEDIATA** da organização, sem aviso prévio.

📍 Dedicação Exclusiva ao **ABCD PAULISTA**

Jogadores que ocupam cargos de comando, liderança ou responsabilidade direta, como:

• Comandante de batalhão  
• Liderança de corporação policial

**Não poderão jogar em outra cidade**, sendo permitido atuar exclusivamente no **ABCD PAULISTA**.

• Ao assumir uma posição de responsabilidade, o jogador deve dedicar 100% de seu tempo, atenção e empenho às suas funções dentro do servidor.

🎯 O objetivo é **manter a organização ativa**, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.

🎭 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

❌ Se você procura um servidor para Treta ou fazer PVP, o ABCD **não é o lugar para você**.

✅ Você receberá todo suporte necessário da equipe responsável pelo RP de Polícia (DANTAS e/ou Saghatt) e da base da PMESP (6ºBPM/M) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

---

Caso aceite os termos acima, responda com:
**ACEITO**`;
        return termo;
    }

    // Exceção para 18ºCBM (bombeiro, não polícia)
    if (batalha === "18ºCBM") {
        const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber o 18ºCBM no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros em manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay.

📌 Toda a gestão **do 18ºCBM** deve ser feita de forma organizada através do nosso Discord oficial da SSP (Secretaria de Segurança Pública).

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso do batalhão de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas ou descumprimento do <#1370134363592724560>, poderão acarretar na perda **IMEDIATA** do 18ºCBM, sem aviso prévio.

📍 Dedicação Exclusiva ao **ABCD PAULISTA**

Jogadores que ocupam cargos de comando, liderança ou responsabilidade direta, como:

• Comandante de batalhão  
• Liderança de corporação policial

**Não poderão jogar em outra cidade**, sendo permitido atuar exclusivamente no **ABCD PAULISTA**.

• Ao assumir uma posição de responsabilidade, o jogador deve dedicar 100% de seu tempo, atenção e empenho às suas funções dentro do servidor.

🎯 O objetivo é **manter o batalhão ativo**, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.

🎭 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

❌ Se você procura um servidor para Treta ou fazer PVP, o ABCD **não é o lugar para você**.

✅ Você receberá todo suporte necessário da equipe responsável pelo RP de Polícia (DANTAS e/ou Saghatt) e da base da PMESP (6ºBPM/M) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

---

Caso aceite os termos acima, responda com:
**ACEITO**`;
        return termo;
    }

    // Exceção para SAP (sem BATALHÃO ou DELEGACIA)
    if (batalha === "SAP") {
        const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber o SAP no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros em manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay.

📌 Toda a gestão **do SAP** deve ser feita de forma organizada através do nosso Discord oficial da SSP (Secretaria de Segurança Pública).

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso do batalhão de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas ou descumprimento do <#1370134363592724560>, poderão acarretar na perda **IMEDIATA** do SAP, sem aviso prévio.

📍 Dedicação Exclusiva ao **ABCD PAULISTA**

Jogadores que ocupam cargos de comando, liderança ou responsabilidade direta, como:

• Comandante de batalhão  
• Liderança de corporação policial

**Não poderão jogar em outra cidade**, sendo permitido atuar exclusivamente no **ABCD PAULISTA**.

• Ao assumir uma posição de responsabilidade, o jogador deve dedicar 100% de seu tempo, atenção e empenho às suas funções dentro do servidor.

🎯 O objetivo é **manter o batalhão ativo**, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.

🎭 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

❌ Se você procura um servidor para Treta ou fazer PVP, o ABCD **não é o lugar para você**.

✅ Você receberá todo suporte necessário da equipe responsável pelo RP de Polícia (DANTAS e/ou Saghatt) e da base da PMESP (6ºBPM/M) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

---

Caso aceite os termos acima, responda com:
**ACEITO**`;
        return termo;
    }
    
    // Verifica se é feminino ou masculino
    const feminino = ehFeminino(batalha);
    const artigo = feminino ? "a" : "o";
    const gestao = feminino ? "da" : "do";
    const tipo = feminino ? "DELEGACIA" : "BATALHÃO";
    
    const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber ${artigo} ${batalha} no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros em manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay.

📌 Toda a gestão ${gestao} **${tipo}** ${batalha} deve ser feita de forma organizada através do nosso Discord oficial da SSP (Secretaria de Segurança Pública).

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso do batalhão de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas ou descumprimento do <#1370134363592724560>, poderão acarretar na perda **IMEDIATA** ${gestao} ${batalha}, sem aviso prévio.

📍 Dedicação Exclusiva ao **ABCD PAULISTA**

Jogadores que ocupam cargos de comando, liderança ou responsabilidade direta, como:

• Comandante de batalhão  
• Liderança de corporação policial

**Não poderão jogar em outra cidade**, sendo permitido atuar exclusivamente no **ABCD PAULISTA**.

• Ao assumir uma posição de responsabilidade, o jogador deve dedicar 100% de seu tempo, atenção e empenho às suas funções dentro do servidor.

🎯 O objetivo é **manter o batalhão ativo**, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.

🎭 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

❌ Se você procura um servidor para Treta ou fazer PVP, o ABCD **não é o lugar para você**.

✅ Você receberá todo suporte necessário da equipe responsável pelo RP de Polícia (DANTAS e/ou Saghatt) e da base da PMESP (6ºBPM/M) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

---

Caso aceite os termos acima, responda com:
**ACEITO**`;

    return termo;
}

function gerarTermoFavela(favela) {
    // Modelo geral sem mencionar a favela específica
    if (favela === "geral") {
        const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber uma favela no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay e ILEGAL do ABCD.

📌 Toda a gestão da favela deve ser feita de forma organizada através do nosso Discord oficial do ILEGAL.

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso da favela de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas, poderão acarretar na perda **IMEDIATA** da favela, sem aviso prévio.

🎯 *O objetivo é manter a favela ativa, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.*

🧠 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

🚫 Aqui não existem tretas forçadas entre favelas, disputas sem sentido ou intrigas para gerar conflito por PVP. Esse tipo de conduta não será tolerado. Cada favela é vista como uma engrenagem de uma única organização criminosa que atua no estado de São Paulo.

❌ *Se você procura um servidor para tretar entre favelas ou fazer PVP, o ABCD não é o lugar para você.*

✅ Você receberá todo suporte necessário da equipe responsável (Sra. Cash) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

Caso aceite os termos acima, responda com:
**ACEITO**`;
        return termo;
    }

    const termo = `\`\`\`TERMO DE RESPONSABILIDADE\`\`\`

Ao receber a favela ${favela} no servidor ABCD, você declara estar ciente de que o espaço é apenas cedido **temporariamente até o final desta season**, sendo de inteira responsabilidade sua, de sua liderança e seus membros manter o bom uso da área conforme as regras e diretrizes do Servidor ABCD Roleplay e ILEGAL do ABCD.

📌 Toda a gestão da favela deve ser feita de forma organizada através do nosso Discord oficial do ILEGAL.

⚠️ Quebra de regras, desorganização, falta de conduta, inatividade de líderes ou membros, uso da favela de forma prejudicial ao ambiente do RP (legal ou ilegal), entre outras condutas indevidas, poderão acarretar na perda **IMEDIATA** da favela, sem aviso prévio.

🎯 *O objetivo é manter a favela ativa, com presença constante de players, respeitando o RP e contribuindo para o bom andamento do servidor.*

🧠 O RP do ILEGAL no ABCD tem suas particularidades e identidade própria, inspirado no crime organizado real de São Paulo, mas com ajustes e adequações pensadas para seguir a visão do servidor.

🚫 Aqui não existem tretas forçadas entre favelas, disputas sem sentido ou intrigas para gerar conflito por PVP. Esse tipo de conduta não será tolerado. Cada favela é vista como uma engrenagem de uma única organização criminosa que atua no estado de São Paulo.

❌ *Se você procura um servidor para tretar entre favelas ou fazer PVP, o ABCD não é o lugar para você.*

✅ Você receberá todo suporte necessário da equipe responsável (Sra. Cash) para desenvolver o seu papel e garantir que o espaço funcione dentro das normas.

Caso aceite os termos acima, responda com:
**ACEITO**`;

    return termo;
}

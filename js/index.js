const DISCORD_IDS = {
    roles: {
        'suporte': '827425658765574155',
        'moderador': '827425662801018920',
        'administrador': '758007837958865046',
        'diretor': '826569114620657719',
        'cmo': '1098702235757711440',
        'staff_geral': '1013273930519298099'
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

function copiarPrevia() {
    const texto = $('#preview-text').val();
    if (!texto) return;

    navigator.clipboard.writeText(texto);
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

    if (menuTitle.includes("DESFEXO") || menuTitle.includes("DESFECHO")) {
        $('#obs').hide(); // Remove o logout/obs desta sessão
        content += `
            <div class="punish-config">
                <div id="punish_ids_container">
                    ${gerarTemplateLinhaPunicao()}
                </div>
                <button class="btn-staff" style="width: 100%; margin-top: 5px; background: #3498db;" onclick="adicionarInputPunicao()">+ ADICIONAR NOVO PLAYER</button>
            </div>`;
    } else if (menuTitle.includes("PASSAGEM")) {
        $('#obs').hide(); // Oculta o container de logout para focar na passagem
        const msgPassagem = "Estou acionando o STAFF responsável por este tipo de atendimento. Por favor, aguarde.\\n\\nObs.: Não é necessário marcar outro membro da STAFF novamente.\\n\\n";
        content += `
            <div class="staff-grid" style="justify-content: flex-start;">
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&1098702235757711440>')">CMO / COO</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&826569114620657719>')">DIRETOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&758007837958865046>')">ADMINISTRADOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&827425662801018920>')">MODERADOR</button>
                <button class="btn-staff" onclick="selecionarMensagem('PASSAGEM', '${msgPassagem}<@&827425658765574155>')">SUPORTE</button>
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
    } else {
        content += `<div class="staff-grid" style="justify-content: flex-start;">${$subContainer.html() || ''}</div>`;
    }

    content += `<button class="btn-staff btn-voltar" onclick="voltarMenuPrincipal(this)">VOLTAR AO MENU</button>`;
    $subView.html(content).show();
}

function gerarTemplateLinhaPunicao() {
    let options = '<option value="">+ Adicionar Regra...</option>';
    Object.keys(DISCORD_IDS.warnings).forEach(key => {
        options += `<option value="${key}">${key}</option>`;
    });

    return `
        <div class="punish-row">
            <div class="punish-header">
                <input type="text" class="punish-id-field" placeholder="ID DO PLAYER" oninput="atualizarMensagemPunicao()">
                <button class="btn-remove-row" onclick="removerPlayer(this)">×</button>
            </div>
            <select class="punish-select punish-rule-select" onchange="adicionarRegra(this)">
                ${options}
            </select>
            <div class="selected-rules"></div>
        </div>`;
}

function adicionarInputPunicao() {
    $('#punish_ids_container').append(gerarTemplateLinhaPunicao());
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

function removerRegra(element) {
    $(element).parent().remove();
    atualizarMensagemPunicao();
}

function removerPlayer(btn) {
    $(btn).closest('.punish-row').remove();
    atualizarMensagemPunicao();
}

function atualizarMensagemPunicao() {
    let punishLines = [];
    $('.punish-row').each(function() {
        const id = $(this).find('.punish-id-field').val().trim();
        let rules = [];
        $(this).find('.rule-tag').each(function() {
            const ruleName = $(this).text().replace('×', '').trim();
            const ruleId = DISCORD_IDS.warnings[ruleName];
            rules.push(ruleId ? `<@&${ruleId}>` : ruleName);
        });

        if (id && rules.length > 0) {
            punishLines.push(`- <@${id}> | **Regras:** ${rules.join(', ')}`);
        }
    });

    if (punishLines.length > 0) {
        const conteudo = "Após análise, foi confirmada a violação das regras.\n\n**Player(s) Punido(s):**\n" + 
                         punishLines.join('\n') + 
                         "\n\nPunição aplicada conforme diretrizes.";
        selecionarMensagem("DESFEXO", conteudo);
    }
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
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\n# Requisitos para assumir um Batalhão do ABCD\\n\`\`\`ansi\\n[1;2m[1;31m[1;34m➝ O comandante do batalhão precisa ser +18 ;\\n➝ No mínimo de 15 pessoas para assumir ; \\n➝ Apresentar um projeto de como pretende realizar o RP com a sua guarnição; \\n➝ Hierarquia já precisa estar pronta  (com todas as patentes);\\n➝ É necessário que todos os componentes de sua guarnição estejam liberados no momento da entrega para a realização de alinhamentos.[0m[1;31m[0m[0m\\n\`\`\`\\nSe você possui todos os requisitos, favor **confirmar** com um **SIM** e informe qual batalhão você tem interesse. Você pode verificar quais estão livres no canal <#1218715282806411344>.\\n\\n<@&826569114620657719>\\n\\nMencionei também o **STAFF** responsável pelas **ENTREGAS DOS BATALHÕES**, peço que aguarde o retorno.\\n\\nObs.: Não é necessário mencionar novamente nenhum outro **STAFF**.';
            $(this).attr('onclick', `selecionarMensagem('BATALHÃO', '${msg}')`);
        }

        // Configura o modelo de Favela diretamente no botão da tela inicial
        if (txt === "FAVELA") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\n# Requisitos para assumir uma FAVELA NO ABCD ROLEPLAY\\n\`\`\`ansi\\n[0;2m[0;2m[0;2m[0;2m[0m[0m[0m[0m[2;32m➝ O 01 precisa ser +18;\\n➝ Mínimo de 10 á 15 pessoas para assumir; \\n➝ Realização de alinhamento prévio sobre REGRAS E ANDAMENTO DO NOSSO ILEGAL;\\n➝ É necessário que todos os membros de sua FAC, já estejam liberados no DISCORD e com WL na cidade.[0m\\n\`\`\`\\nSe você possui todos os requisitos, favor **confirmar** com um **SIM** e informe qual favela você tem interesse. Você pode verificar quais estão livres no canal <#1199104311599300618>.\\n\\n<@&1098702235757711440> <@1222328593032544257>\\n\\nMencionei também os **STAFF** responsáveis pelas **ENTREGAS DAS FAVELAS**, peço que aguarde o retorno.\\n\\nObs.: Não é necessário mencionar novamente nenhum outro **STAFF**.';
            $(this).attr('onclick', `selecionarMensagem('FAVELA', '${msg}')`);
        }

        // Configura o modelo de Influenciador diretamente no botão da tela inicial
        if (txt === "COMO SER INFLUENCIADOR") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\nPara ser um **INFLUENCIADOR ABCD**, basta que você entre em nosso **DISCORD** dos **INFLUENCERS DO ABCD** e abra um ticket solicitando a sua avaliação. \\n\\nhttps://discord.gg/MY99W5BzAT\\n\\nBoa sorte!';
            $(this).attr('onclick', `selecionarMensagem('INFLUENCIADOR', '${msg}')`);
        }

        // Configura o modelo de Reembolso diretamente no botão da tela inicial
        if (txt === "REEMBOLSO") {
            const msg = 'Olá prezado(a) {{player}}, tudo bom?\\n\\nPeço que aguarde, em breve vamos lhe enviar todas as informações sobre o método de reembolso.\\n\\nAté lá, manteremos o ticket aberto.\\n\\nAgradecemos pela sua compreensão e paciência!\\n\\nObs.: Não é necessário marcar novamente nenhum STAFF\\n\\n<@&1098702235757711440>';
            $(this).attr('onclick', `selecionarMensagem('REEMBOLSO', '${msg}')`);
        }

        // Altera o texto do botão de cópia para o novo padrão solicitado
        if (txt === "COPIAR PARA O DISCORD") {
            $(this).text("COPIAR MENSAGEM");
        }

        // Renomeia o botão de Solicitar Retorno e configura a sessão
        if (txt.includes("SOLICITAR RETORNO") || txt === "RETORNO") {
            $(this).text("RETORNO");
            $(this).attr('onclick', 'toggleSubButtons(this)');
        }

        if (txt.includes("PASSAGEM") || txt.includes("ENCERRAMENTO") || txt.includes("INÍCIO") || txt.includes("VINDAS") || txt.includes("INICIAL") || txt.includes("INTIMAÇÃO") || txt.includes("RETORNO")) {
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

# RN Barber Shop — site para GitHub Pages

Site institucional responsivo da RN Barber Shop, feito com HTML, CSS e JavaScript puro. Não precisa de React, Node.js ou banco de dados.

## Testar no computador
1. Baixe e extraia o ZIP.
2. Abra a pasta `rn-barber-github`.
3. Dê dois cliques em `index.html`.

## Publicar no GitHub Pages
1. Entre em https://github.com e crie um repositório público, por exemplo `rn-barber-shop`.
2. Dentro do repositório, clique em **Add file → Upload files**.
3. Envie os arquivos e a pasta `assets` desta pasta (não envie o ZIP fechado).
4. Clique em **Commit changes**.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**.
7. Selecione **main** e a pasta **/(root)** e clique em **Save**.
8. Aguarde a publicação. O GitHub mostrará o link do site na área Pages.

## Personalizar
- **WhatsApp:** altere `WHATSAPP_NUMBER` em `script.js`. Use código do país + DDD + número, só dígitos.
- **Instagram, endereço e telefone:** procure esses dados em `index.html`.
- **Preços e serviços:** edite os cartões em `index.html` e as opções do formulário.
- **Imagem de capa:** coloque uma imagem em `assets/hero.jpg`.
- **Foto da barbearia:** coloque uma imagem em `assets/barbearia.jpg`.
- **Certificados:** use `assets/certificado-1.jpg` e `assets/certificado-2.jpg`.
- O logotipo atual é texto RN estilizado. Você pode substituir por uma imagem de logo alterando o HTML.

## Importante
Este é um site público de apresentação e pedido de agendamento via WhatsApp. Não possui painel administrativo, login, banco de dados ou bloqueio automático de horários. As marcações são combinadas manualmente pelo WhatsApp. Para agenda e financeiro com login, é necessário um backend como Supabase.
